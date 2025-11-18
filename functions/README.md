
# EZZ.AE Backend Cloud Functions

This directory contains the backend logic for the EZZ.AE project, implemented as Firebase Cloud Functions.

## Project Structure

- `src/`: Contains all the TypeScript source code for the functions.
  - `index.ts`: The main entry point that exports all the functions for deployment.
  - `model.ts`: Defines the TypeScript interfaces for the Firestore data model.
  - `http.ts`: Contains all HTTP-triggered functions that serve as the API for the frontend.
  - `fct.ts`: Implements the core logic for the Forgetting Core Thinking (FCT) engine, including the SINLM and Forgetting Artifact jobs.
  - `analytics.ts`: Handles the lightweight analytics and event tracking.

## Development

### Prerequisites

- Node.js (v20)
- Firebase CLI (`npm install -g firebase-tools`)

### Installation

1.  Navigate to the `functions` directory: `cd functions`
2.  Install the dependencies: `npm install`

### Running the Emulators

To run the functions and Firestore locally for development, use the Firebase Emulators:

```bash
npm run serve
```
This will start the Functions and Firestore emulators. You can then interact with them locally.

### Deployment

To deploy the functions to your Firebase project, run:

```bash
firebase deploy --only functions
```

To deploy the Firestore rules and indexes, run:

```bash
firebase deploy --only firestore
```
