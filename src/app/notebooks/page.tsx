// src/app/notebooks/page.tsx
import { NOTEBOOKS } from '@/components/notebooks/notebook-data';
import { NotebookCard } from '@/components/notebooks/NotebookCard';
import { Section } from '@/components/ScrollTypography';
import { BrainCircuit } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notebooks | The AIXSELF Universe',
  description: 'An explorable gallery of all the living intelligences, cognitive models, and interactive experiments within the AIXSELF Universe.',
};

export default function NotebooksPage() {
  const notebooks = Object.values(NOTEBOOKS);

  return (
    <div className="min-h-screen bg-black text-neutral-100 overflow-x-hidden pt-24">
      <div className="container mx-auto px-4 py-16">
        <Section className="text-center max-w-3xl mx-auto mb-16">
            <BrainCircuit className="mx-auto h-10 w-10 text-orange-400 mb-4" />
            <h1 className="text-3xl md:text-4xl font-light text-neutral-100">The Notebooks</h1>
            <p className="text-base md:text-lg text-neutral-400 mt-4">
                An explorable gallery of all the living intelligences, cognitive models, and interactive experiments that form the AIXSELF Universe. Each notebook is a unique facet of this new school of thought.
            </p>
        </Section>
        
        <Section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {notebooks.map((notebook) => (
                    <NotebookCard 
                        key={notebook.id}
                        id={notebook.id}
                        title={notebook.title}
                        description={notebook.description}
                        tag={notebook.tag}
                    />
                ))}
            </div>
        </Section>
      </div>
    </div>
  );
}
