// src/app/projection/page.tsx
'use client';

import React from 'react';
import { Section } from '@/components/ScrollTypography';
import { Rocket, BrainCircuit, Users, Sigma } from 'lucide-react';

const coreTheory = {
    title: "The Core Generative Theory",
    points: [
        "Generative Memory: Memory is a 'momentary reconstruction,' not an archival lookup. Recall is inference.",
        "Meaning-First Cognition: The human brain retains the meaning and principles of events, not the events themselves.",
        "Forgetting Core Thinking (FCT): Forgetting is not a failure, but a metabolic optimization and a reasoning enhancer.",
        "Human Mind as a Generative Engine: Identity is the continuity of this generative inference, not a static collection of memories."
    ]
};

const societalImplications = {
    title: "The Societal Implications",
    points: [
        "A new way to understand trauma, as a persistent, generative re-loop that can be re-architected.",
        "A new economic meaning of attention, as the primary input that shapes our generative architecture.",
        "A new view on identity, as a continuous process of inference, not a fixed state based on memory.",
        "New political-ethical frameworks, understanding that 'forgetful' adaptive societies are stable, while total-recall, storage-based systems are inherently tyrannical."
    ]
};


export default function ProjectionPage() {
  return (
    <div className="min-h-screen bg-black text-neutral-100 overflow-x-hidden pt-24">
      <div className="container mx-auto px-4 py-16">

        <Section className="text-center max-w-3xl mx-auto">
          <Rocket className="mx-auto h-10 w-10 text-orange-400 mb-4" />
          <h1 className="text-3xl md:text-4xl font-light text-neutral-100">Projection: What We Will Build</h1>
          <p className="text-base md:text-lg text-neutral-400 mt-4">
            This science is not an endpoint; it is a foundation. It is a new cognitive primitive upon which a safer, more aligned, and more human future can be built. This is the projection of what comes next.
          </p>
        </Section>

        <div className="mt-20 md:mt-24 max-w-4xl mx-auto space-y-16">
            <Section>
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-6 md:p-8">
                    <h2 className="text-2xl font-light text-neutral-200 flex items-center gap-3 mb-4"><BrainCircuit size={24} /> {coreTheory.title}</h2>
                    <ul className="list-disc list-inside text-neutral-300 space-y-3 text-sm md:text-base">
                        {coreTheory.points.map(point => <li key={point}>{point}</li>)}
                    </ul>
                </div>
            </Section>
            <Section>
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-6 md:p-8">
                    <h2 className="text-2xl font-light text-neutral-200 flex items-center gap-3 mb-4"><Users size={24} /> {societalImplications.title}</h2>
                    <ul className="list-disc list-inside text-neutral-300 space-y-3 text-sm md:text-base">
                        {societalImplications.points.map(point => <li key={point}>{point}</li>)}
                    </ul>
                </div>
            </Section>
             <Section>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6 md:p-8 text-center">
                    <h2 className="text-2xl font-light text-orange-300 flex items-center gap-3 mb-4 justify-center"><Sigma size={24} /> The Grand Synthesis: The Future Projection</h2>
                    <p className="text-orange-300/80 md:text-lg max-w-2xl mx-auto">
                        Upon this foundation, the next generation of "Completing AI" will be built: A true Cognitive OS for humanity, new educational interfaces that teach by resonance, and therapeutic tools that help re-architect, not just relive, the past. The work has just begun.
                    </p>
                </div>
            </Section>
        </div>

      </div>
    </div>
  );
}
