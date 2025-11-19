
// src/components/notebooks/NotebookRenderer.tsx
import React, { lazy } from 'react';
import { isNotebookId, NotebookId } from './notebook-data';
import { PlaceholderNotebook } from './PlaceholderNotebook';

// Dynamically import all notebook components
const notebookComponentImports = {
  'forgetence': lazy(() => import('./ForgetenceNotebook').then(module => ({ default: module.ForgetenceNotebook }))),
  'notefullbook': lazy(() => import('./NotefullBookNotebook').then(module => ({ default: module.NotefullBookNotebook }))),
  'aixself': lazy(() => import('./AIXSELFNotebook').then(module => ({ default: module.AIXSELFNotebook }))),
  'realestate': lazy(() => import('./RealEstateNotebook').then(module => ({ default: module.RealEstateNotebook }))),
  'security': lazy(() => import('./SecurityNotebook').then(module => ({ default: module.SecurityNotebook }))),
  'puzzles': lazy(() => import('./PuzzlesNotebook').then(module => ({ default: module.PuzzlesNotebook }))),
  'marketing': lazy(() => import('./MarketingNotebook').then(module => ({ default: module.MarketingNotebook }))),
  'sound': lazy(() => import('./SoundNotebook').then(module => ({ default: module.SoundNotebook }))),
  'scroll-lesson': lazy(() => import('./ScrollLessonNotebook').then(module => ({ default: module.ScrollLessonNotebook }))),
};

type NotebookRendererProps = {
  slug: string;
};

export default function NotebookRenderer({ slug }: NotebookRendererProps) {
  NotebookRenderer.displayName = 'NotebookRenderer';
  
  if (!isNotebookId(slug)) {
    return <PlaceholderNotebook topic="Unknown Notebook" />;
  }

  const Component = notebookComponentImports[slug as NotebookId];
  
  if (!Component) {
    return <PlaceholderNotebook topic={`Notebook "${slug}" not found`} />;
  }

  return <Component />;
}
