// src/components/notebooks/NotebookRenderer.tsx
import { NOTEBOOKS, isNotebookId } from './notebook-data';
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
import { OmegaNotebook } from './OmegaNotebook';

type NotebookRendererProps = {
  slug: string;
};

const notebookComponentMap = {
    forgetence: ForgetenceNotebook,
    notefullbook: NotefullBookNotebook,
    aixself: AIXSELFNotebook,
    realestate: RealEstateNotebook,
    security: SecurityNotebook,
    puzzles: PuzzlesNotebook,
    marketing: MarketingNotebook,
    sound: SoundNotebook,
    'scroll-lesson': ScrollLessonNotebook,
    omega: OmegaNotebook,
};


// This component is responsible for dynamically rendering the correct notebook
// content based on the slug from the URL.
export default function NotebookRenderer({ slug }: NotebookRendererProps) {
  // First, validate that the slug corresponds to a real notebook ID.
  if (!isNotebookId(slug)) {
    return <PlaceholderNotebook topic={`Unknown Notebook: ${slug}`} />;
  }

  const Component = notebookComponentMap[slug];

  return <Component />;
}
