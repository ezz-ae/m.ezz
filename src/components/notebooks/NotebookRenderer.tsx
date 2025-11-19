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

  // All notebooks will now render the interactive SmartNotebook component.
  // We pass the slug to it so it can fetch specific content in the future.
  return <SmartNotebook slug={slug} />;
}
