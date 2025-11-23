// functions/src/http.ts
import { onRequest } from 'firebase-functions/v2/https';
import { logger } from 'firebase-functions';
import { db, auth } from './firebase';
import {
  NotebookDoc,
  NoteDoc,
  SessionDoc,
  LedgerEntryDoc,
  ConceptDoc,
} from './model';
import { z } from 'zod';

const REGION = 'europe-west1';

const createNoteSchema = z.object({
  content: z.string().min(1),
  source: z.enum(['manual', 'import', 'transcript', 'ai']).optional(),
  sessionId: z.string().optional(),
});

const sessionStartSchema = z.object({
  notebookId: z.string().min(1),
  context: z.string().default(''),
});

const sessionEndSchema = z.object({
  sessionId: z.string().min(1),
});


// GET /getPublicNotebooks
export const getPublicNotebooks = onRequest(
  { region: REGION },
  async (req, res) => {
    try {
      if (req.method !== 'GET') {
        res.status(405).send('Method Not Allowed');
        return;
      }

      const snap = await db
        .collection('notebooks')
        .where('visibility', '==', 'public')
        .orderBy('updatedAt', 'desc')
        .get();

      const notebooks: Array<{ id: string } & NotebookDoc> = [];
      snap.forEach((doc) =>
        notebooks.push({ id: doc.id, ...(doc.data() as NotebookDoc) })
      );

      res.json({ notebooks });
    } catch (err) {
      logger.error('getPublicNotebooks error', err);
      res.status(500).json({ error: 'internal' });
    }
  }
);

// GET /getNotebookDetail?slug=forgetence
export const getNotebookDetail = onRequest(
  { region: REGION },
  async (req, res) => {
    try {
      if (req.method !== 'GET') {
        res.status(405).send('Method Not Allowed');
        return;
      }

      const slug = req.query.slug as string | undefined;
      if (!slug) {
        res.status(400).json({ error: 'missing slug' });
        return;
      }

      const nbSnap = await db
        .collection('notebooks')
        .where('slug', '==', slug)
        .limit(1)
        .get();

      if (nbSnap.empty) {
        res.status(404).json({ error: 'not found' });
        return;
      }

      const nbDoc = nbSnap.docs[0];
      const notebook = nbDoc.data() as NotebookDoc;
      const notebookId = nbDoc.id;

      const notesSnap = await db
        .collection('notebooks')
        .doc(notebookId)
        .collection('notes')
        .orderBy('createdAt', 'desc')
        .limit(20)
        .get();

      const notes: Array<{ id: string } & NoteDoc> = [];
      notesSnap.forEach((doc) =>
        notes.push({ id: doc.id, ...(doc.data() as NoteDoc) })
      );

      const conceptsSnap = await db
        .collection('notebooks')
        .doc(notebookId)
        .collection('concepts')
        .orderBy('frequency', 'desc')
        .limit(10)
        .get();

      const concepts: Array<{ id: string } & ConceptDoc> = [];
      conceptsSnap.forEach((doc) =>
        concepts.push({ id: doc.id, ...(doc.data() as ConceptDoc) })
      );

      res.json({
        notebook: { id: notebookId, ...notebook },
        notes,
        concepts,
      });
    } catch (err) {
      logger.error('getNotebookDetail error', err);
      res.status(500).json({ error: 'internal' });
    }
  }
);

// This function requires Firebase Auth to be implemented on the client.
// Placeholder for a function that would be implemented with real auth.
async function getAuthenticatedUidFromRequest(req: any): Promise<string | null> {
  // In a real scenario, you'd verify the Firebase Auth ID Token from the Authorization header.
  const idToken = req.headers.authorization?.split('Bearer ')[1];
  if (!idToken) return null;
  try {
    const decodedToken = await auth.verifyIdToken(idToken);
    return decodedToken.uid;
  } catch (error) {
    logger.error("Auth token verification failed", error);
    return null;
  }
}


// POST /createNote?notebookId=...
export const createNote = onRequest(
  { region: REGION },
  async (req, res) => {
    try {
      if (req.method !== 'POST') {
        res.status(405).send('Method Not Allowed');
        return;
      }

      const notebookId = req.query.notebookId as string | undefined;
      if (!notebookId) {
        res.status(400).json({ error: 'missing notebookId' });
        return;
      }

      const parsed = createNoteSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ error: parsed.error.flatten() });
        return;
      }
      const data = parsed.data;

      const uid = await getAuthenticatedUidFromRequest(req);
      if (!uid) {
        // Since no auth is implemented, using a placeholder UID.
        // In a real app, this would be a 401 Unauthorized error.
        const placeholderUid = 'anonymous_user_placeholder';
        logger.warn(`createNote called without authentication. Using placeholder UID: ${placeholderUid}`);
        
        const now = new Date();
        const noteRef = db
          .collection('notebooks')
          .doc(notebookId)
          .collection('notes')
          .doc();

        const note: NoteDoc = {
          authorId: placeholderUid,
          notebookId,
          content: data.content,
          source: data.source ?? 'manual',
          sessionId: data.sessionId,
          createdAt: db.app.firestore.Timestamp.fromDate(now),
          updatedAt: db.app.firestore.Timestamp.fromDate(now),
        };

        await noteRef.set(note);

        if (data.sessionId) {
          const sessionRef = db.collection('sessions').doc(data.sessionId);
          await sessionRef.set(
            {
              noteCount: db.app.firestore.FieldValue.increment(1),
            },
            { merge: true }
          );
        }

        res.json({ ok: true, id: noteRef.id });

      }
    } catch (err) {
      logger.error('createNote error', err);
      res.status(500).json({ error: 'internal' });
    }
  }
);

// POST /startSession
export const startSession = onRequest(
  { region: REGION },
  async (req, res) => {
    try {
      if (req.method !== 'POST') {
        res.status(405).send('Method Not Allowed');
        return;
      }

      const parsed = sessionStartSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ error: parsed.error.flatten() });
        return;
      }
      const data = parsed.data;

      const uid = await getAuthenticatedUidFromRequest(req);
      if (!uid) {
        res.status(401).json({ error: 'unauthenticated' });
        return;
      }

      const now = new Date();
      const sessionRef = db.collection('sessions').doc();

      const session: SessionDoc = {
        userId: uid,
        notebookId: data.notebookId,
        startedAt: db.app.firestore.Timestamp.fromDate(now),
        noteCount: 0,
        context: data.context,
      };

      await sessionRef.set(session);

      res.json({ ok: true, id: sessionRef.id });
    } catch (err) {
      logger.error('startSession error', err);
      res.status(500).json({ error: 'internal' });
    }
  }
);

// POST /endSession
export const endSession = onRequest(
  { region: REGION },
  async (req, res) => {
    try {
      if (req.method !== 'POST') {
        res.status(405).send('Method Not Allowed');
        return;
      }

      const parsed = sessionEndSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ error: parsed.error.flatten() });
        return;
      }
      const { sessionId } = parsed.data;

      const uid = await getAuthenticatedUidFromRequest(req);
      if (!uid) {
        res.status(401).json({ error: 'unauthenticated' });
        return;
      }

      const sessionRef = db.collection('sessions').doc(sessionId);
      const snap = await sessionRef.get();
      if (!snap.exists) {
        res.status(404).json({ error: 'not found' });
        return;
      }

      const session = snap.data() as SessionDoc;
      if (session.userId !== uid) {
        res.status(403).json({ error: 'forbidden' });
        return;
      }

      await sessionRef.set(
        {
          endedAt: db.app.firestore.Timestamp.fromDate(new Date()),
        },
        { merge: true }
      );

      res.json({ ok: true });
    } catch (err) {
      logger.error('endSession error', err);
      res.status(500).json({ error: 'internal' });
    }
  }
);

// GET /getTimeline
export const getTimeline = onRequest(
  { region: REGION },
  async (req, res) => {
    try {
      if (req.method !== 'GET') {
        res.status(405).send('Method Not Allowed');
        return;
      }

      const uid = await getAuthenticatedUidFromRequest(req);
      if (!uid) {
        res.status(401).json({ error: 'unauthenticated' });
        return;
      }

      const sessionsSnap = await db
        .collection('sessions')
        .where('userId', '==', uid)
        .orderBy('startedAt', 'desc')
        .limit(50)
        .get();

      const sessions = sessionsSnap.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as SessionDoc),
      }));

      const ledgerSnap = await db
        .collection('ledgerEntries')
        .where('userId', '==', uid)
        .orderBy('createdAt', 'desc')
        .limit(50)
        .get();

      const ledger: Array<{ id: string } & LedgerEntryDoc> = [];
      ledgerSnap.forEach((doc) =>
        ledger.push({ id: doc.id, ...(doc.data() as LedgerEntryDoc) })
      );

      res.json({
        sessions,
        ledger,
      });
    } catch (err) {
      logger.error('getTimeline error', err);
      res.status(500).json({ error: 'internal' });
    }
  }
);
