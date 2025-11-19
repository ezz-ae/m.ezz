// src/components/notebooks/NotebookRenderer.tsx
import { isNotebookId } from './notebook-data';
import { PlaceholderNotebook } from './PlaceholderNotebook';
import { SmartNotebook } from './SmartNotebook';

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

  // All notebooks now use the new SmartNotebook component.
  // The slug is passed to handle per-notebook persistence.
  return <SmartNotebook slug={slug} />;
}
