
// src/components/notebooks/NotebookRenderer.tsx
import React, { Suspense, lazy } from 'react';
import { isNotebookId, NotebookId } from './notebook-data';
import { PlaceholderNotebook } from './PlaceholderNotebook';
import { Skeleton } from '../ui/skeleton';

// A mapping from notebook ID to its dynamically imported component.
// Using React.lazy allows for code-splitting, so we only load the component we need.
const notebookComponents: Record<NotebookId, React.LazyExoticComponent<React.ComponentType<any>>> = {
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

// This component is responsible for dynamically rendering the correct notebook
// content based on the slug from the URL.
export default function NotebookRenderer({ slug }: NotebookRendererProps) {
  // First, validate that the slug corresponds to a real notebook ID.
  if (!isNotebookId(slug)) {
    return <PlaceholderNotebook topic={`Unknown Notebook: ${slug}`} />;
  }

  // Look up the correct component in our map.
  const NotebookComponent = notebookComponents[slug];

  // If for some reason the component doesn't exist in the map, show a placeholder.
  if (!NotebookComponent) {
    return <PlaceholderNotebook topic={`Notebook "${slug}" not found`} />;
  }

  // The Suspense component is crucial for React.lazy. It provides a fallback UI
  // (in this case, a simple Skeleton loader) to show while the requested
  // notebook component is being loaded over the network.
  return (
    <Suspense fallback={<div className="prose prose-invert max-w-3xl mx-auto py-16"><Skeleton className="h-64 w-full" /></div>}>
      <NotebookComponent />
    </Suspense>
  );
}
