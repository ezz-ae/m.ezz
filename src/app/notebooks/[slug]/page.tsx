// src/app/notebooks/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { NOTEBOOKS, isNotebookId, NotebookId } from '@/components/notebooks/notebook-data';
import NotebookRenderer from '@/components/notebooks/NotebookRenderer';
import type { Metadata } from 'next';
import { NotebookQueryInterface } from '@/components/notebooks/NotebookQueryInterface';
import { NotebookResources } from '@/components/notebooks/NotebookResources';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NotebookLayout } from '@/components/notebooks/NotebookLayout';
import { Code2 } from 'lucide-react';

type NotebookPageProps = {
  params: {
    slug: string;
  };
};

// These are the notebooks with bespoke, interactive UIs.
// For these, the UI *is* the mind, so we will not show the tabbed interface.
const interactiveNotebookSlugs: NotebookId[] = [
    'puzzles',
    'security',
    'dldchain',
    'marketing',
    'imagination-lab',
    'brain-games',
    'notefullbook'
];

export async function generateStaticParams() {
  return Object.keys(NOTEBOOKS).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: NotebookPageProps): Promise<Metadata> {
  const slug = params.slug;
  if (!isNotebookId(slug)) notFound();
  
  const notebook = NOTEBOOKS[slug];
  if (!notebook) return {};

  return {
    title: `Notebook · ${notebook.title}`,
    description: notebook.description,
    openGraph: {
        title: `${notebook.title} | EZZ.AE`,
        description: notebook.description,
    },
    twitter: {
        title: `${notebook.title} | EZZ.AE`,
        description: notebook.description,
    }
  };
}

export default function NotebookPage({ params }: NotebookPageProps) {
  const slug = params.slug;

  if (!isNotebookId(slug)) notFound();
  const notebook = NOTEBOOKS[slug];
  if (!notebook) notFound();

  const componentName = notebook.component.displayName || notebook.component.name;
  const isInteractive = interactiveNotebookSlugs.includes(slug);

  return (
    <NotebookLayout 
      title={notebook.title} 
      description={notebook.description} 
      tag={notebook.tag}
      abilities={notebook.abilities}
    >
        <main className="pb-16 font-pt-sans">
            {isInteractive ? (
                // For interactive notebooks, render the component directly.
                // The UI is the mind.
                <div className="w-full max-w-5xl mx-auto">
                    <NotebookRenderer slug={slug} />
                </div>
            ) : (
                // For text-based notebooks, render the tabbed interface.
                <Tabs defaultValue="mind" className="w-full max-w-4xl mx-auto px-4 md:px-6 py-8 bg-card rounded-lg shadow-xl border border-border">
                    <TabsList className="grid w-full grid-cols-4 bg-muted h-auto">
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
                            <p className="text-muted-foreground">
                                Open discussions for this notebook are active.
                            </p>
                            <Link href="/discussions">
                                <Button variant="outline" className="mt-4">
                                    Go to Discussions
                                </Button>
                            </Link>
                        </div>
                    </TabsContent>

                    <TabsContent value="query" className="py-8">
                        <NotebookQueryInterface 
                            slug={slug} 
                            aiActions={notebook.aiActions} 
                            autothinkerActions={notebook.autothinkerActions} 
                        />
                    </TabsContent>
                </Tabs>
            )}

            <div className="text-center mt-12 px-6">
                <a 
                    href={`https://github.com/mahmoud-ezz/ezz.ae/blob/main/src/components/notebooks/${componentName}.tsx`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                    <Code2 size={14} />
                    <span>This notebook is an open-source component. View the source.</span>
                </a>
            </div>
        </main>
    </NotebookLayout>
  );
}
