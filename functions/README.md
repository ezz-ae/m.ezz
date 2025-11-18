# EZZ.AE Firebase Functions

Backend for EZZ.AE / NotefullBook / FCT (Forgetting Core Thinking).

## Stack

- Firebase Functions v2 (Node 20, TypeScript)
- Firestore (native mode)
- Lightweight analytics
- FCT engine:
  - SINLM job on note write
  - Scheduled Forgetting Artifact job

## Structure

- `firebase.json` – project config
- `firestore.rules` – security rules
- `firestore.indexes.json` – indexes
- `functions/`
  - `src/firebase.ts` – admin init
  - `src/model.ts` – TypeScript models
  - `src/fct.ts` – FCT engine: triggers + scheduled jobs
  - `src/http.ts` – HTTP API:
    - `getPublicNotebooks`
    - `getNotebookDetail`
    - `createNote`
    - `startSession`
    - `endSession`
    - `getTimeline`
  - `src/analytics.ts` – `/analytics` endpoint
  - `src/index.ts` – exports all functions

## Setup

```bash
cd functions
npm install
npm run build
```

From project root:

```bash
firebase emulators:start --only functions,firestore
```

## Deploy

```bash
npm run build
firebase deploy --only functions,firestore
```

Update `.firebaserc` "default" with your real Firebase project id.
