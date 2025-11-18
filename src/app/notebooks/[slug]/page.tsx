
// src/app/notebooks/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { NOTEBOOKS, isNotebookId } from '@/components/notebooks/notebook-data';
import NotebookRenderer from '@/components/notebooks/NotebookRenderer';
import FooterMinimal from '@/components/FooterMinimal';
import { NotebookShell } from '@/components/notebooks/NotebookShell';

type NotebookPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return Object.keys(NOTEBOOKS).map((slug) => ({
    slug,
  }));
}

export default function NotebookPage({ params }: NotebookPageProps) {
  const { slug } = params;

  if (!isNotebookId(slug)) {
    notFound();
  }

  const notebook = NOTEBOOKS[slug];

  if (!notebook) {
    notFound();
  }

  return (
    <div className="bg-black min-h-screen pt-24">
        <main className="pb-16">
            <NotebookShell title={notebook.title} description={notebook.description}>
                <NotebookRenderer slug={slug} />
            </NotebookShell>
        </main>
        <FooterMinimal />
    </div>
  );
}
