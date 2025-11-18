
/**
 * Main entry point for all Cloud Functions.
 * This file should export all functions to be deployed.
 */

import * as admin from 'firebase-admin';

// Initialize Firebase Admin SDK
admin.initializeApp();

// Export functions from other files
export * from './http';
export * from './fct';
export * from './analytics';
