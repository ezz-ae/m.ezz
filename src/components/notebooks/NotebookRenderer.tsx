
// src/components/notebooks/NotebookRenderer.tsx
import { NOTEBOOKS, NotebookId, isNotebookId } from './notebook-data';
import { ForgetenceNotebook } from './ForgetenceNotebook';
import { PlaceholderNotebook } from './PlaceholderNotebook';
import { NotefullBookNotebook } from './NotefullBookNotebook';
import { AIXSELFNotebook } from './AIXSELFNotebook';
import { RealEstateNotebook } from './RealEstateNotebook';
import { SecurityNotebook } from './SecurityNotebook';
import { PuzzlesNotebook } from './PuzzlesNotebook';
import { MarketingNotebook } from './MarketingNotebook';
import { SoundNotebook } from './SoundNotebook';
import { ScrollLessonNotebook } from './ScrollLessonNotebook';

type NotebookRendererProps = {
  slug: string;
};

const notebookComponents: { [key in NotebookId]: React.ComponentType<any> } = {
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

export default function NotebookRenderer({ slug }: NotebookRendererProps) {
  NotebookRenderer.displayName = 'NotebookRenderer';
  
  if (!isNotebookId(slug)) {
    return <PlaceholderNotebook topic="Unknown Notebook" />;
  }

  const notebook = NOTEBOOKS[slug];

  if (!notebook) {
    // This case should be handled by the page's notFound() but is a good fallback
    return <p>Notebook not found.</p>;
  }

  const Component = notebookComponents[slug];
  
  return <Component />;
}
