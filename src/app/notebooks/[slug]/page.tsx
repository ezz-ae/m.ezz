
import { notFound } from 'next/navigation';
import { NOTEBOOKS, isNotebookId } from '@/components/notebooks/notebook-data';
import NotebookRenderer from '@/components/notebooks/NotebookRenderer';
import FooterMinimal from '@/components/FooterMinimal';
import { NotebookShell } from '@/components/notebooks/NotebookShell';
import type { Metadata } from 'next';
import { NotebookQueryInterface } from '@/components/notebooks/NotebookQueryInterface';


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

export async function generateMetadata({ params }: NotebookPageProps): Promise<Metadata> {
  const { slug } = params;

  if (!isNotebookId(slug)) {
    notFound();
  }
  
  const notebook = NOTEBOOKS[slug];
  
  if (!notebook) {
    return {};
  }

  const title = `Notebook · ${notebook.title}`;
  const description = notebook.description;

  return {
    title,
    description,
    openGraph: {
        title: `${title} — EZZ.AE`,
        description: description,
    },
    twitter: {
        title: `${title} — EZZ.AE`,
        description: description,
    }
  };
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
    <div className="bg-black min-h-screen">
        <main className="pb-16">
            <NotebookShell title={notebook.title} description={notebook.description}>
                <NotebookRenderer slug={slug} />
                <NotebookQueryInterface slug={slug} />
            </NotebookShell>
        </main>
        <FooterMinimal />
    </div>
  );
}
