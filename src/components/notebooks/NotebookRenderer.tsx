
// src/components/notebooks/NotebookRenderer.tsx
import { NOTEBOOKS } from './notebook-data';
import { ForgetenceNotebook } from './ForgetenceNotebook';
import { PlaceholderNotebook } from './PlaceholderNotebook';

type NotebookRendererProps = {
  slug: string;
};

export default function NotebookRenderer({ slug }: NotebookRendererProps) {
  const notebook = NOTEBOOKS[slug as keyof typeof NOTEBOOKS];

  if (!notebook) {
    // This case should be handled by the page's notFound()
    return <p>Notebook not found.</p>;
  }

  const Component = notebook.component;
  
  if (Component === PlaceholderNotebook) {
    return <PlaceholderNotebook topic={notebook.title} />;
  }

  return <Component />;
}
