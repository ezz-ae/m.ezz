// src/app/journal/page.tsx
import { articles } from '@/lib/journal';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { BrainCircuit, Lightbulb } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Journal | A Living Intelligence of Articulation',
  description: 'A self-organizing journal where an FCT-aligned AI reads, connects, and arranges articles into conceptual clusters.',
};

// Mock AI Clustering
const getAiClusters = () => {
  // In a real system, an AI would generate these clusters and titles dynamically.
  return [
    {
      title: "On Systems & Forgetting",
      synthesis: "Exploring the necessity of forgetting and adaptation in both cognitive and architectural systems.",
      articles: [
        articles.find(a => a.slug === 'fade-in-and-architectural-memory'),
        articles.find(a => a.slug === 'the-physics-of-cognition'),
      ].filter(Boolean) // Filter out undefined if an article isn't found
    },
    {
      title: "On Cognition & Design",
      synthesis: "Investigating the fundamental laws of cognition, like limitation and resonance, as the core principles of effective design.",
      articles: [
        articles.find(a => a.slug === 'the-golden-ratio-of-design'),
        articles.find(a => a.slug === 'the-physics-of-cognition'),
      ].filter(Boolean)
    },
  ];
};

export default function JournalPage() {
  const clusters = getAiClusters();

  return (
    <div className="max-w-4xl mx-auto py-24 px-4">
      <div className="text-center mb-16">
        <BrainCircuit className="mx-auto h-12 w-12 text-orange-400 mb-4" />
        <h1 className="text-4xl font-light text-neutral-100">The Journal</h1>
        <p className="text-lg text-neutral-400 mt-4 max-w-2xl mx-auto">
          A living intelligence of articulation. This is not a blog. It is a self-organizing knowledge base where an FCT-aligned AI reads, connects, and arranges articles into conceptual clusters. No tags, no categories—only meaning.
        </p>
      </div>

      <div className="space-y-12">
        {clusters.map((cluster, index) => (
          <div key={index}>
            <div className="flex items-center gap-3 mb-4">
               <Lightbulb className="h-5 w-5 text-orange-400/80"/>
               <h2 className="text-2xl font-light text-neutral-200">{cluster.title}</h2>
            </div>
            <p className="text-sm text-neutral-500 mb-6 ml-8 italic">AI Synthesis: "{cluster.synthesis}"</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-8">
              {cluster.articles.map(article => (
                <Link key={article.slug} href={`/journal/${article.slug}`}>
                    <Card className="h-full bg-neutral-900 border-neutral-800 hover:border-orange-500/50 transition-colors flex flex-col">
                        <CardContent className="p-4 flex-grow">
                            <h3 className="font-semibold text-base text-neutral-200">{article.title}</h3>
                            <p className="text-xs text-neutral-500 mt-1">{new Date(article.date).toLocaleDateString()}</p>
                            <p className="text-sm text-neutral-400 mt-3 flex-grow">{article.excerpt}</p>
                        </CardContent>
                    </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
