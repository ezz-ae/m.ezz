
import { notFound } from 'next/navigation';
import { NOTEBOOKS, isNotebookId } from '@/components/notebooks/notebook-data';
import NotebookRenderer from '@/components/notebooks/NotebookRenderer';
import FooterMinimal from '@/components/FooterMinimal';
import { NotebookShell } from '@/components/notebooks/NotebookShell';
import type { Metadata } from 'next';
import { NotebookQueryInterface } from '@/components/notebooks/NotebookQueryInterface';
import { AudioOverview } from '@/components/notebooks/AudioOverview';
import { MindmapView } from '@/components/notebooks/MindmapView';
import { NotebookResources } from '@/components/notebooks/NotebookResources';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
  const slug = params.slug;

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
  const slug = params.slug;

  if (!isNotebookId(slug)) {
    notFound();
  }

  const notebook = NOTEBOOKS[slug];

  if (!notebook) {
    notFound();
  }

  return (
    <div className="min-h-screen">
        <main className="pb-16">
            <NotebookShell title={notebook.title} description={notebook.description}>
                <Tabs defaultValue="mind" className="w-full max-w-4xl mx-auto px-6 py-8">
                    <TabsList className="grid w-full grid-cols-4 bg-neutral-900/50 border border-neutral-800 h-auto">
                        <TabsTrigger value="mind">The Mind</TabsTrigger>
                        <TabsTrigger value="resources">Resources</TabsTrigger>
                        <TabsTrigger value="discussion">Discussion</TabsTrigger>
                        <TabsTrigger value="query">Query AI</TabsTrigger>
                    </TabsList>
                    <TabsContent value="mind" className="py-8">
                        <NotebookRenderer slug={slug} />
                    </TabsContent>
                    <TabsContent value="resources" className="py-8">
                        <NotebookResources />
                    </TabsContent>
                    <TabsContent value="discussion" className="py-8 text-center">
                         <div className="prose prose-invert mx-auto">
                            <h3 className="text-xl font-light">Join the Conversation</h3>
                            <p className="text-neutral-400">
                                Open discussions for this notebook are active. Share your insights, ask questions, and collaborate with others exploring these concepts.
                            </p>
                             <Link href="/discussions">
                                <Button variant="outline" className="mt-4">
                                    Go to Discussions
                                </Button>
                            </Link>
                        </div>
                    </TabsContent>
                    <TabsContent value="query" className="py-8">
                        <NotebookQueryInterface slug={slug} />
                    </TabsContent>
                </Tabs>
            </NotebookShell>
        </main>
        <FooterMinimal />
    </div>
  );
}
