
// src/app/notebooks/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { NOTEBOOKS } from '@/components/notebooks/notebook-data';
import NotebookRenderer from '@/components/notebooks/NotebookRenderer';
import SiteHeader from '@/components/SiteHeader';
import FooterMinimal from '@/components/FooterMinimal';

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
  const notebook = NOTEBOOKS[slug as keyof typeof NOTEBOOKS];

  if (!notebook) {
    notFound();
  }

  return (
    <div className="bg-black min-h-screen">
        <SiteHeader />
        <main className="py-16 px-6">
            <NotebookRenderer slug={slug} />
        </main>
        <FooterMinimal />
    </div>
  );
}
