// src/app/journal/[slug]/page.tsx

import { articles } from '@/lib/journal';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Zap, Fingerprint, GitBranch, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

// Mock AI Analysis based on slug
const getAiReadout = (slug: string) => {
    const allArticles = articles;
    const relatedArticles = allArticles.filter(a => a.slug !== slug).slice(0, 2); // Get up to 2 other articles

    const analysis = {
        'the-physics-of-cognition': {
            synthesis: "Intelligence arises not from infinite data, but from the meaningful patterns formed by physical and conceptual limitations.",
            vectors: ['Resonance', 'Forgetting'],
            connections: relatedArticles,
        },
        'fade-in-and-architectural-memory': {
            synthesis: "Systems, like human minds, require a mechanism of 'fading-in' or forgetting to adapt, remain relevant, and avoid psychological stagnation.",
            vectors: ['Forgetting', 'Safety'],
            connections: relatedArticles,
        },
        'the-golden-ratio-of-design': {
            synthesis: "Optimal system design, from cognition to architecture, is a search for the 'golden ratio' between freedom and constraint.",
            vectors: ['Merit', 'Resonance'],
            connections: relatedArticles,
        },
    };
    return analysis[slug] || { synthesis: 'No analysis available.', vectors: [], connections: [] };
};


export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) {
    return {};
  }
  return {
    title: `${article.title} | Journal`,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const aiReadout = getAiReadout(params.slug);
  const vectorIcons = {
      'Resonance': Zap,
      'Forgetting': BrainCircuit,
      'Merit': GitBranch,
      'Safety': Fingerprint
  };

  return (
    <div className="max-w-4xl mx-auto py-24 px-4">
      <div className="text-center mb-12">
        <p className="text-sm text-neutral-500">{new Date(article.date).toLocaleDateString()}</p>
        <h1 className="text-4xl font-light text-neutral-100 mt-2">{article.title}</h1>
        <p className="text-lg text-neutral-400 mt-4">{article.excerpt}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <article className="lg:col-span-8 prose prose-invert max-w-none prose-p:text-neutral-400 prose-headings:text-neutral-200"
                 dangerouslySetInnerHTML={{ __html: article.content }} />

        <aside className="lg:col-span-4 lg:sticky top-24 self-start">
            <Card className="bg-neutral-900 border-neutral-800">
                <CardHeader>
                    <CardTitle className="text-base font-semibold flex items-center gap-2 text-neutral-300">
                        <BrainCircuit size={16} /> AI Readout
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h4 className="text-xs font-semibold text-orange-400 mb-1">Synthesized Meaning</h4>
                        <p className="text-xs text-neutral-300 italic">"{aiReadout.synthesis}"</p>
                    </div>
                     <div>
                        <h4 className="text-xs font-semibold text-orange-400 mb-2">Cognitive Vectors</h4>
                        <div className="flex flex-wrap gap-2">
                            {aiReadout.vectors.map(vector => {
                                const Icon = vectorIcons[vector] || Lightbulb;
                                return (
                                    <div key={vector} className="flex items-center gap-1 text-xs text-neutral-400 bg-neutral-800/70 px-2 py-0.5 rounded-sm border border-neutral-700">
                                        <Icon size={12} /> {vector}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xs font-semibold text-orange-400 mb-2">Discovered Connections</h4>
                        <div className="space-y-2">
                        {aiReadout.connections.map(conn => (
                            <Link key={conn.slug} href={`/journal/${conn.slug}`} className="block bg-neutral-800/70 p-2 rounded-sm border border-neutral-700 hover:border-orange-500/50 transition-colors">
                                <p className="text-xs font-semibold text-neutral-200 truncate">{conn.title}</p>
                                <p className="text-xs text-neutral-500 truncate mt-1">{conn.excerpt}</p>
                            </Link>
                        ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </aside>
      </div>
    </div>
  );
}
