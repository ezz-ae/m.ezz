// src/app/journal/page.tsx
import { articles } from '@/lib/journal';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Journal | A Living Intelligence of Articulation',
  description: 'A self-organizing journal where an FCT-aligned AI reads, connects, and arranges articles into conceptual clusters.',
};

// --- ADVANCED, CONTEXT-AWARE AI CLUSTERING SIMULATION ---

const vectorKeywords = {
    Framework: ['generative memory', 'meaning-first', 'fct', 'forgetting'],
    Physics: ['physics', 'limitation', 'frequency', 'resonance'],
    Design: ['design', 'architecture', 'system']
};

const getAiClusters = () => {
    // 1. Assign vectors to each article
    const articlesWithVectors = articles.map(article => {
        const content = (article.title + ' ' + article.content).toLowerCase();
        const vectors = Object.keys(vectorKeywords).filter(vector => 
            vectorKeywords[vector].some(kw => content.includes(kw))
        );
        return { ...article, vectors };
    });

    // 2. Dynamically create clusters based on shared vectors
    const clusters = {};
    articlesWithVectors.forEach(article => {
        if (article.vectors.length > 0) {
            // Create a cluster for each vector this article belongs to
            article.vectors.forEach(vector => {
                if (!clusters[vector]) {
                    clusters[vector] = { title: `Cluster: On ${vector} & Cognition`, articles: [] };
                }
                // Avoid adding duplicates
                if (!clusters[vector].articles.some(a => a.slug === article.slug)) {
                    clusters[vector].articles.push(article);
                }
            });
        }
    });

    // 3. Add AI-generated synthesis to each cluster
    const finalClusters = Object.values(clusters).map((cluster: any) => {
        let synthesis = "Exploring the foundational principles of the FCT architecture.";
        if (cluster.title.includes('Framework')) synthesis = "Investigating the core architectural tenets of Generative Memory and Meaning-First Cognition.";
        if (cluster.title.includes('Physics')) synthesis = "Analyzing the physical laws of limitation and resonance that underpin intelligent systems.";
        if (cluster.title.includes('Design')) synthesis = "Applying cognitive principles to the structural design of both physical and digital systems.";
        return { ...cluster, synthesis };
    });

    return finalClusters;
};


export default function JournalPage() {
  const clusters = getAiClusters();

  return (
    <div className="max-w-4xl mx-auto py-24 px-4 bg-background text-foreground">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-light text-foreground">The Journal</h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          A living intelligence of articulation. This is a self-organizing knowledge base where an FCT-aligned AI reads, connects, and arranges articles into conceptual clusters. No tags, no categories—only meaning.
        </p>
      </div>

      <div className="space-y-12">
        {clusters.map((cluster, index) => (
          <div key={index}>
            <div className="mb-4">
               <h2 className="text-2xl font-light text-foreground">{cluster.title}</h2>
               <p className="text-sm text-muted-foreground mt-2 italic">AI Synthesis: "{cluster.synthesis}"</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cluster.articles.map(article => (
                <Link key={article.slug} href={`/journal/${article.slug}`}>
                    <Card className="h-full bg-card border border-border hover:border-primary/50 hover:shadow-lg dark:hover:shadow-white/10 transition-colors flex flex-col">
                        <CardContent className="p-4 flex-grow">
                            <h3 className="font-semibold text-base text-foreground">{article.title}</h3>
                            <p className="text-xs text-muted-foreground mt-1">{new Date(article.date).toLocaleDateString()}</p>
                            <p className="text-sm text-muted-foreground mt-3 flex-grow">{article.excerpt}</p>
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
