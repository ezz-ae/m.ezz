// functions/src/fct.ts
import { onDocumentWritten } from 'firebase-functions/v2/firestore';
import { onSchedule } from 'firebase-functions/v2/scheduler';
import { logger } from 'firebase-functions';
import { db, FieldValue } from './firebase';
import {
  NoteDoc,
  ConceptDoc,
  PatternDoc,
  LedgerEntryDoc,
  ArtifactDoc,
} from './model';
import { v4 as uuidv4 } from 'uuid';
import * as crypto from 'crypto';

const REGION = 'europe-west1';

// Util: hash for ledger
function makeHash(payload: unknown, prevHash?: string): string {
  const h = crypto.createHash('sha256');
  h.update(JSON.stringify(payload));
  if (prevHash) h.update(prevHash);
  return h.digest('hex');
}

// Trigger: SINLM job on note write
export const onNoteWrite = onDocumentWritten(
  {
    region: REGION,
    document: 'notebooks/{notebookId}/notes/{noteId}',
  },
  async (event) => {
    const notebookId = event.params.notebookId as string;
    const noteId = event.params.noteId as string;

    const afterSnap = event.data?.after;
    if (!afterSnap || !afterSnap.exists) {
      // deletion – ignore for now or later handle
      return;
    }

    const note = afterSnap.data() as NoteDoc;
    logger.info('SINLM: processing note', { notebookId, noteId });

    const tokens = note.content
      .toLowerCase()
      .split(/[\s,.;:!?()"'«»\[\]]+/)
      .filter((t) => t.length > 3);

    const conceptCounts = new Map<string, number>();
    for (const token of tokens) {
      conceptCounts.set(token, (conceptCounts.get(token) ?? 0) + 1);
    }

    const batch = db.batch();
    const conceptsCol = db
      .collection('notebooks')
      .doc(notebookId)
      .collection('concepts');

    const now = new Date();

    // Update concepts
    for (const [label, count] of conceptCounts.entries()) {
      const docRef = conceptsCol.doc(label);
      const snap = await docRef.get();

      if (!snap.exists) {
        const concept: ConceptDoc = {
          label,
          summary: label,
          relatedNoteIds: [noteId],
          frequency: count,
          returnRate: 1,
          driftScore: 0,
          persistenceScore: 1,
          notebookId,
        };
        batch.set(docRef, concept, { merge: true });
      } else {
        batch.set(
          docRef,
          {
            frequency: FieldValue.increment(count),
            persistenceScore: FieldValue.increment(1),
            relatedNoteIds: FieldValue.arrayUnion(noteId),
          },
          { merge: true }
        );
      }
    }

    // Update a global pattern for this notebook (very simple)
    const patternRef = db.collection('patterns').doc(`nb-${notebookId}`);
    const patternSnap = await patternRef.get();
    if (!patternSnap.exists) {
      const pattern: PatternDoc = {
        label: `Notebook ${notebookId}`,
        description: 'Auto-generated pattern container for notebook',
        notebookIds: [notebookId],
        conceptIds: Array.from(conceptCounts.keys()),
        globalFrequency: tokens.length,
        createdAt: db.app.firestore.Timestamp.fromDate(now),
        updatedAt: db.app.firestore.Timestamp.fromDate(now),
      };
      batch.set(patternRef, pattern);
    } else {
      batch.set(
        patternRef,
        {
          conceptIds: FieldValue.arrayUnion(...Array.from(conceptCounts.keys())),
          globalFrequency: FieldValue.increment(tokens.length),
          updatedAt: db.app.firestore.Timestamp.fromDate(now),
        },
        { merge: true }
      );
    }

    // Ledger entry: reflection
    const ledgerRef = db.collection('ledgerEntries').doc();
    const latestQuery = await db
      .collection('ledgerEntries')
      .where('notebookId', '==', notebookId)
      .orderBy('createdAt', 'desc')
      .limit(1)
      .get();

    const prev = latestQuery.docs[0]?.data() as LedgerEntryDoc | undefined;
    const entryPayload = {
      notebookId,
      noteId,
      concepts: Array.from(conceptCounts.keys()),
      createdAt: db.app.firestore.Timestamp.fromDate(now),
      type: 'reflection' as const,
    };

    const hash = makeHash(entryPayload, prev?.hash);
    const ledgerEntry: LedgerEntryDoc = {
      notebookId,
      userId: note.authorId,
      type: 'reflection',
      payload: {
        noteId,
        concepts: Array.from(conceptCounts.keys()),
      },
      createdAt: db.app.firestore.Timestamp.fromDate(now),
      hash,
      prevHash: prev?.hash,
    };

    batch.set(ledgerRef, ledgerEntry);

    await batch.commit();
    logger.info('SINLM: updated concepts & ledger', { notebookId, noteId });
  }
);

// Scheduled forgetting artifacts
export const runForgettingArtifacts = onSchedule(
  {
    region: REGION,
    schedule: 'every 24 hours',
    timeZone: 'UTC',
  },
  async () => {
    logger.info('Running forgetting artifact job');

    const now = new Date();
    const cutoff = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000); // 30 days

    const notebooksSnap = await db.collection('notebooks').get();
    for (const nbDoc of notebooksSnap.docs) {
      const notebookId = nbDoc.id;
      const nbData = nbDoc.data() as { ownerId: string };

      const notesSnap = await db
        .collection('notebooks')
        .doc(notebookId)
        .collection('notes')
        .where('createdAt', '<', db.app.firestore.Timestamp.fromDate(cutoff))
        .where('decayed', '!=', true)
        .limit(100)
        .get();

      if (notesSnap.empty) continue;

      const contents: string[] = [];
      const sourceNoteIds: string[] = [];

      notesSnap.forEach((doc) => {
        const data = doc.data() as NoteDoc;
        contents.push(data.content);
        sourceNoteIds.push(doc.id);
      });

      const summary =
        contents.join(' ').slice(0, 1800) +
        (contents.join(' ').length > 1800 ? '…' : '');

      const artifactRef = db.collection('artifacts').doc(uuidv4());
      const artifact: ArtifactDoc = {
        notebookId,
        ownerId: nbData.ownerId,
        sourceNoteIds,
        schemaLabel: 'auto-decay',
        summary,
        compressedAt: db.app.firestore.Timestamp.fromDate(now),
        decayLevel: 1,
      };

      const batch = db.batch();
      batch.set(artifactRef, artifact);

      for (const noteId of sourceNoteIds) {
        const noteRef = db
          .collection('notebooks')
          .doc(notebookId)
          .collection('notes')
          .doc(noteId);
        batch.set(
          noteRef,
          {
            decayed: true,
            archivedAt: db.app.firestore.Timestamp.fromDate(now),
          },
          { merge: true }
        );
      }

      // Ledger entry: fade
      const ledgerRef = db.collection('ledgerEntries').doc();
      const latestQuery = await db
        .collection('ledgerEntries')
        .where('notebookId', '==', notebookId)
        .orderBy('createdAt', 'desc')
        .limit(1)
        .get();
      const prev = latestQuery.docs[0]?.data() as LedgerEntryDoc | undefined;

      const entryPayload = {
        notebookId,
        sourceNoteIds,
        summaryLength: summary.length,
        createdAt: db.app.firestore.Timestamp.fromDate(now),
        type: 'fade' as const,
      };

      const hash = makeHash(entryPayload, prev?.hash);
      const ledgerEntry: LedgerEntryDoc = {
        notebookId,
        userId: nbData.ownerId,
        type: 'fade',
        payload: {
          artifactId: artifactRef.id,
          noteIds: sourceNoteIds,
        },
        createdAt: db.app.firestore.Timestamp.fromDate(now),
        hash,
        prevHash: prev?.hash,
      };

      batch.set(ledgerRef, ledgerEntry);

      await batch.commit();
      logger.info('Created artifact + faded notes', {
        notebookId,
        artifactId: artifactRef.id,
        count: sourceNoteIds.length,
      });
    }

    logger.info('Forgetting artifact job completed');
  }
);