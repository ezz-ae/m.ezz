
// src/components/notebooks/NotebookRenderer.tsx
import { NOTEBOOKS } from './notebook-data';
import { ForgetenceNotebook } from './ForgetenceNotebook';

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
  
  if (notebook.id === 'forgetence') {
      return <ForgetenceNotebook />;
  }

  return <Component topic={notebook.title} />;
}
