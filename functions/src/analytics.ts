// functions/src/analytics.ts
import { onRequest } from 'firebase-functions/v2/https';
import { logger } from 'firebase-functions';
import { db } from './firebase';
import { EventDoc } from './model';
import { z } from 'zod';

const REGION = 'europe-west1';

const analyticsSchema = z.object({
  type: z.enum([
    'page_view',
    'notebook_open',
    'session_start',
    'session_end',
    'note_created',
  ]),
  path: z.string().optional(),
  notebookId: z.string().optional(),
  ts: z.number().optional(),
  meta: z.record(z.any()).optional(),
});

// POST /analytics
export const analytics = onRequest({ region: REGION }, async (req, res) => {
  try {
    if (req.method !== 'POST') {
      res.status(405).send('Method Not Allowed');
      return;
    }

    const parsed = analyticsSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.flatten() });
      return;
    }

    const data = parsed.data;
    const now = new Date();

    const event: EventDoc = {
      type: data.type,
      path: data.path,
      notebookId: data.notebookId,
      ts: db.app.firestore.Timestamp.fromMillis(
        data.ts ?? now.getTime()
      ),
      meta: data.meta,
    };

    await db.collection('events').add(event);

    res.json({ ok: true });
  } catch (err) {
    logger.error('analytics error', err);
    res.status(500).json({ error: 'internal' });
  }
});
