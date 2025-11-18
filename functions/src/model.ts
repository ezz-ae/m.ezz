// functions/src/model.ts
import { Timestamp } from 'firebase-admin/firestore';

export type UserRole = 'owner' | 'guest' | 'beta';

export interface UserDoc {
  displayName: string;
  email: string;
  createdAt: Timestamp;
  role: UserRole;
}

export type NotebookVisibility = 'public' | 'private' | 'unlisted';

export interface NotebookFctProfile {
  fadeMode: 'soft' | 'strict';
  maxBufferSize: number;
}

export interface NotebookDoc {
  ownerId: string;
  slug: string;
  title: string;
  description: string;
  visibility: NotebookVisibility;
  tags: string[];
  createdAt: Timestamp;
  updatedAt: Timestamp;
  fctProfile: NotebookFctProfile;
}

export type NoteSource = 'manual' | 'import' | 'transcript' | 'ai';

export interface NoteDoc {
  authorId: string;
  notebookId: string;
  content: string;
  source: NoteSource;
  sessionId?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  decayed?: boolean;
  archivedAt?: Timestamp;
}

export interface ConceptDoc {
  label: string;
  summary: string;
  relatedNoteIds: string[];
  frequency: number;
  returnRate: number;
  driftScore: number;
  persistenceScore: number;
  notebookId: string;
}

export interface PatternDoc {
  label: string;
  description: string;
  notebookIds: string[];
  conceptIds: string[];
  globalFrequency: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface SessionDoc {
  userId: string;
  notebookId: string;
  startedAt: Timestamp;
  endedAt?: Timestamp;
  noteCount: number;
  context: string;
}

export type LedgerType = 'decision' | 'reflection' | 'transform' | 'fade';

export interface LedgerEntryDoc {
  notebookId: string;
  userId?: string;
  type: LedgerType;
  payload: Record<string, unknown>;
  createdAt: Timestamp;
  hash: string;
  prevHash?: string;
}

export interface ArtifactDoc {
  notebookId: string;
  ownerId: string;
  sourceNoteIds: string[];
  schemaLabel: string;
  summary: string;
  compressedAt: Timestamp;
  decayLevel: number; // 0–1
}

export type EventType =
  | 'page_view'
  | 'notebook_open'
  | 'session_start'
  | 'session_end'
  | 'note_created';

export interface EventDoc {
  userId?: string;
  type: EventType;
  path?: string;
  notebookId?: string;
  ts: Timestamp;
  meta?: Record<string, unknown>;
}
