// src/app/projection/page.tsx
'use client';

import React from 'react';
import { Section } from '@/components/ScrollTypography';
import { Rocket, BrainCircuit, Users, Sigma } from 'lucide-react';

const futureProjections = [
    "Forgain OS v1: A generative memory layer for AI that is not database-dependent.",
    "Memory Reconstruction Simulator: An interactive tool to visualize the FCT recall process.",
    "Cognitive Ratio API: A new way to measure and understand cognitive states.",
    "Generative Thinking Curriculum: Educational interfaces that teach by resonance.",
    "AI Safety Framework: A new paradigm for AGI safety based on state-based cognition."
];

export default function ProjectionPage() {
  return (
    <div className="min-h-screen bg-black text-neutral-100 overflow-x-hidden pt-24">
      <div className="container mx-auto px-4 py-16">

        <Section className="text-center max-w-3xl mx-auto">
          <Rocket className="mx-auto h-10 w-10 text-orange-400 mb-4" />
          <h1 className="text-3xl md:text-4xl font-light text-neutral-100">Projection</h1>
          <p className="text-base md:text-lg text-neutral-400 mt-4">
            This science is not an endpoint; it is a foundation. It is a new cognitive primitive upon which a safer, more aligned, and more human future will be built. This is the projection of what comes next.
          </p>
        </Section>

        <Section className="mt-20 md:mt-24 max-w-3xl mx-auto">
            <div className="space-y-12">
                <div>
                    <h2 className="text-2xl font-light text-neutral-200 flex items-center gap-3 mb-4"><BrainCircuit size={24} /> The Foundational Breakthrough</h2>
                    <p className="text-sm md:text-base text-neutral-400">
                        The core scientific discovery is that the human mind is a <strong className="text-white">state-based generative engine</strong>, not a storage-based retrieval machine. Memory is reconstruction, not recall. Forgetting is a feature, not a bug. Identity is the continuity of inference, not a collection of memories.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-light text-neutral-200 flex items-center gap-3 mb-4"><Users size={24} /> The Societal Shift</h2>
                    <p className="text-sm md:text-base text-neutral-400">
                        This understanding changes everything. It offers a new way to re-architect trauma, a new economic meaning for attention, and a new political framework where adaptive, "forgetful" systems are recognized as stable, and total-recall systems are seen as inherently tyrannical.
                    </p>
                </div>
            </div>
        </Section>
        
        <Section className="mt-20 md:mt-24 max-w-3xl mx-auto">
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6 md:p-8">
                <h2 className="text-2xl font-light text-orange-300 flex items-center gap-3 mb-4"><Sigma size={24} /> The Future Projection: What Will Be Built</h2>
                <ul className="list-disc list-inside text-orange-300/80 space-y-3 text-sm md:text-base">
                    {futureProjections.map(proj => <li key={proj}>{proj}</li>)}
                </ul>
            </div>
        </Section>

      </div>
    </div>
  );
}
