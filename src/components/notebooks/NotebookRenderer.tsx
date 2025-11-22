// src/components/notebooks/NotebookRenderer.tsx
'use client';

import React from 'react';
import { NOTEBOOKS, isNotebookId } from './notebook-data';
import { PlaceholderNotebook } from './PlaceholderNotebook';

type NotebookRendererProps = {
  slug: string;
};

// This component now directly renders the interactive notebook content.
// The concept of a "static" vs "interactive" state has been removed for a more direct user experience.
export default function NotebookRenderer({ slug }: NotebookRendererProps) {
  if (!isNotebookId(slug)) {
    // It's good practice to handle unknown slugs gracefully.
    return <PlaceholderNotebook slug={slug as any} />;
  }

  const NotebookComponent = NOTEBOOKS[slug].component;

  // Directly render the designated component for the notebook.
  // The notebook itself is now considered the "living" version.
  return <NotebookComponent />;
}
