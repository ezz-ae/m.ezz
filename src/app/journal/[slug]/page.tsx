// src/app/journal/[slug]/page.tsx

import { articles } from '@/lib/journal';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Metadata } from 'next';

// --- ADVANCED, CONTEXT-AWARE AI ANALYSIS SIMULATION ---

// Keywords for each core Cognitive Vector
const vectorKeywords: Record<string, string[]> = {
    Framework: ['generative memory', 'meaning-first', 'fct', 'forgetting'],
    Physics: ['physics', 'limitation', 'frequency', 'resonance'],
    Design: ['design', 'architecture', 'system']
};

// A more sophisticated AI Readout generator
const getAiReadout = (slug: string) => {
    const currentArticle = articles.find(a => a.slug === slug);
    if (!currentArticle) return { synthesis: 'No analysis available.', vectors: [], connections: [] };

    // 1. Synthesize Meaning: A more "intelligent" summary
    let synthesis = `This article explores the principle of ${currentArticle.title.toLowerCase()} as a core component of cognitive architecture.`;
    if(currentArticle.slug === 'generative-memory') synthesis = "Posits that memory is not archival retrieval but a generative act of momentary reconstruction.";
    if(currentArticle.slug === 'meaning-first-cognition') synthesis = "Argues that the brain is a meaning-extraction engine that prioritizes the 'why' over the 'what'.";
    if(currentArticle.slug === 'fade-in-intelligence-through-abstraction') synthesis = "Defines forgetting not as deletion, but as the transformation of information into a higher state of usefulness through abstraction.";
    if(currentArticle.slug === 'the-physics-of-cognition') synthesis = "Explores how fundamental laws of physics, like limitation and frequency, underpin all cognitive processes.";
    if(currentArticle.slug === 'the-golden-ratio-of-design') synthesis = "Examines how optimal balance between freedom and constraint is the key to creative and stable system design.";

    // 2. Identify Cognitive Vectors based on keyword matching
    const content = (currentArticle.title + ' ' + currentArticle.content).toLowerCase();
    const vectors = Object.keys(vectorKeywords).filter(vector => 
        vectorKeywords[vector].some(kw => content.includes(kw))
    );

    // 3. Discover Connections: Find other articles with shared vectors
    const connections = articles
        .filter(a => a.slug !== slug) // Exclude self
        .map(a => {
            const otherContent = (a.title + ' ' + a.content).toLowerCase();
            const sharedVectors = Object.keys(vectorKeywords).filter(vector => 
                vectorKeywords[vector].some(kw => otherContent.includes(kw))
            );
            const score = sharedVectors.filter(v => vectors.includes(v)).length;
            return { ...a, score };
        })
        .filter(a => a.score > 0) // Only include articles with at least one shared vector
        .sort((a, b) => b.score - a.score) // Sort by relevance
        .slice(0, 2); // Take the top 2 most relevant articles

    return { synthesis, vectors, connections };
};

// --- PAGE COMPONENTS ---

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return {};

  return {
    title: `${article.title} | Journal`,
    description: article.excerpt,
    openGraph: {
        title: `${article.title} | Journal | EZZ.AE`,
        description: article.excerpt,
    },
    twitter: {
        title: `${article.title} | Journal | EZZ.AE`,
        description: article.excerpt,
    }
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const aiReadout = getAiReadout(params.slug);

  return (
    <div className="max-w-4xl mx-auto py-24 px-4 bg-background text-foreground font-pt-sans">
      <div className="text-center mb-12">
        <p className="text-sm text-muted-foreground">{new Date(article.date).toLocaleDateString()}</p>
        <h1 className="text-4xl font-light text-foreground mt-2 font-playfair">{article.title}</h1>
        <p className="text-lg text-muted-foreground mt-4">{article.excerpt}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <article className="lg:col-span-8 prose dark:prose-invert"
                 dangerouslySetInnerHTML={{ __html: article.content }} />

        <aside className="lg:col-span-4 lg:sticky top-24 self-start">
            <Card className="bg-card border border-border">
                <CardHeader>
                    <CardTitle className="text-base font-semibold text-foreground">
                        AI Readout
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h4 className="text-xs font-semibold text-primary mb-1">Synthesized Meaning</h4>
                        <p className="text-xs text-muted-foreground italic">"{aiReadout.synthesis}"</p>
                    </div>
                     <div>
                        <h4 className="text-xs font-semibold text-primary mb-2">Cognitive Vectors</h4>
                        <div className="flex flex-wrap gap-2">
                            {aiReadout.vectors.map(vector => (
                                <div key={vector} className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-sm border border-border">
                                    {vector}
                                </div>
                            ))}
                        </div>
                    </div>
                    {aiReadout.connections.length > 0 && (
                        <div>
                            <h4 className="text-xs font-semibold text-primary mb-2">Discovered Connections</h4>
                            <div className="space-y-2">
                            {aiReadout.connections.map(conn => (
                                <Link key={conn.slug} href={`/journal/${conn.slug}`} className="block bg-secondary p-2 rounded-sm border border-border hover:border-primary/50 transition-colors">
                                    <p className="text-xs font-semibold text-foreground truncate">{conn.title}</p>
                                    <p className="text-xs text-muted-foreground truncate mt-1">{conn.excerpt}</p>
                                </Link>
                            ))}
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </aside>
      </div>
    </div>
  );
}
