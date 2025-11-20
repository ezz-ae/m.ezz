// src/app/notebooks/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { NOTEBOOKS, isNotebookId } from '@/components/notebooks/notebook-data';
import NotebookRenderer from '@/components/notebooks/NotebookRenderer';
import FooterMinimal from '@/components/FooterMinimal';
import type { Metadata } from 'next';
import { NotebookQueryInterface } from '@/components/notebooks/NotebookQueryInterface';
import { NotebookResources } from '@/components/notebooks/NotebookResources';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NotebookLayout } from '@/components/notebooks/NotebookLayout';
import { Code2 } from 'lucide-react';

/**
 * This is the primary template for rendering a single notebook page.
 * It dynamically fetches notebook data based on the URL slug, generates
 * metadata, and renders the appropriate notebook component within a
 * consistent layout. It also serves as the hub for the tabbed interface,
 * including "The Mind," "Query AI," and the open-source link.
 */

type NotebookPageProps = {
  params: {
    slug: string;
  };
};

// Generate static paths for all notebooks at build time for performance.
export async function generateStaticParams() {
  return Object.keys(NOTEBOOKS).map((slug) => ({
    slug,
  }));
}

// Generate dynamic metadata for each notebook page for SEO and social sharing.
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

  // Type guard and validation to ensure the slug corresponds to a real notebook.
  if (!isNotebookId(slug)) {
    notFound();
  }
  const notebook = NOTEBOOKS[slug];
  if (!notebook) {
    notFound();
  }

  // This logic derives the component's file name to create a dynamic link
  // to its source code on GitHub. It relies on the component function name
  // matching the file name (e.g., `BrainGamesNotebook` component is in `BrainGamesNotebook.tsx`).
  const componentName = notebook.component.name;

  return (
    <NotebookLayout 
      title={notebook.title} 
      description={notebook.description} 
      tag={notebook.tag}
      abilities={notebook.abilities}
    >
        <main className="pb-16">
            {/* The main tabbed interface for interacting with the notebook */}
            <Tabs defaultValue="mind" className="w-full max-w-4xl mx-auto px-6 py-8 bg-neutral-950 rounded-lg shadow-xl border border-neutral-800">
                <TabsList className="grid w-full grid-cols-4 bg-neutral-900/50 border border-neutral-800 h-auto">
                    <TabsTrigger value="mind">The Mind</TabsTrigger>
                    <TabsTrigger value="resources">Resources</TabsTrigger>
                    <TabsTrigger value="discussion">Discussion</TabsTrigger>
                    <TabsTrigger value="query">Query AI</TabsTrigger>
                </TabsList>
                
                {/* Tab 1: Renders the core content of the notebook */}
                <TabsContent value="mind" className="py-8">
                    <NotebookRenderer slug={slug} />
                </TabsContent>
                
                {/* Tab 2: Placeholder for future resource links */}
                <TabsContent value="resources" className="py-8">
                    <NotebookResources />
                </TabsContent>
                
                {/* Tab 3: A link to a future discussions area */}
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

                {/* Tab 4: The interactive AI query and Autothinker interface */}
                <TabsContent value="query" className="py-8">
                    <NotebookQueryInterface 
                        slug={slug} 
                        aiActions={notebook.aiActions} 
                        autothinkerActions={notebook.autothinkerActions} 
                    />
                </TabsContent>
            </Tabs>

            {/* The subtle, elegant link to the notebook's source code */}
            <div className="text-center mt-12 px-6">
                <a 
                    href={`https://github.com/mahmoud-ezz/ezz.ae/blob/main/src/components/notebooks/${componentName}.tsx`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-neutral-600 hover:text-orange-400 transition-colors inline-flex items-center gap-2"
                >
                    <Code2 size={14} />
                    <span>This notebook is an open-source component. View the source and experiment with the logic.</span>
                </a>
            </div>

        </main>
        <FooterMinimal />
    </NotebookLayout>
  );
}
