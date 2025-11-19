// src/components/notebooks/NotebookRenderer.tsx
import { isNotebookId, NotebookId } from './notebook-data';
import { PlaceholderNotebook } from './PlaceholderNotebook';
import { ForgetenceNotebook } from './ForgetenceNotebook';
import { NotefullBookNotebook } from './NotefullBookNotebook';
import { AIXSELFNotebook } from './AIXSELFNotebook';
import { RealEstateNotebook } from './RealEstateNotebook';
import { SecurityNotebook } from './SecurityNotebook';
import { PuzzlesNotebook } from './PuzzlesNotebook';
import { MarketingNotebook } from './MarketingNotebook';
import { SoundNotebook } from './SoundNotebook';
import { ScrollLessonNotebook } from './ScrollLessonNotebook';

// A simple, direct mapping from notebook ID to its component.
// This avoids the complexity of React.lazy for server components in this context.
const notebookComponents: Record<NotebookId, React.ComponentType<any>> = {
  'forgetence': ForgetenceNotebook,
  'notefullbook': NotefullBookNotebook,
  'aixself': AIXSELFNotebook,
  'realestate': RealEstateNotebook,
  'security': SecurityNotebook,
  'puzzles': PuzzlesNotebook,
  'marketing': MarketingNotebook,
  'sound': SoundNotebook,
  'scroll-lesson': ScrollLessonNotebook,
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

  // Render the found component directly.
  return <NotebookComponent />;
}
