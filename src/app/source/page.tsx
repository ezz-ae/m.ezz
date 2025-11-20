// src/app/source/page.tsx
'use client';

import React from 'react';
import { Section } from '@/components/ScrollTypography';
import { Book, Code, GitBranch, Puzzle } from 'lucide-react';
import Link from 'next/link';

const sourceComponents = [
    {
        icon: Code,
        category: "Living Intelligence Components",
        title: "The Interactive Notebooks",
        description: "The complete source for the custom, interactive UIs that transform static documents into scientific instruments. Each is a self-contained demonstration of FCT principles.",
        link: "https://github.com/mahmoud-ezz/ezz.ae/tree/main/src/components/notebooks",
        items: ["PuzzlesNotebook.tsx", "SecurityNotebook.tsx", "DLDChainNotebook.tsx", "ImaginationLabNotebook.tsx", "BrainGamesNotebook.tsx"]
    },
    {
        icon: Puzzle,
        category: "Cognitive Primitives & UI",
        title: "The Core Building Blocks",
        description: "The foundational, reusable components that define the platform's aesthetic and interactive logic, from the Reflection Meter to the Cognitive Focus system.",
        link: "https://github.com/mahmoud-ezz/ezz.ae/tree/main/src/components/ui",
        items: ["ReflectionMeter.tsx", "ConceptLink.tsx", "ScrollTypography.tsx"]
    },
    {
        icon: GitBranch,
        category: "The Full Platform Architecture",
        title: "The Entire EZZ.AE Repository",
        description: "The complete source code for the entire platform, including the global UI, navigation, data structures, and the full ecosystem of notebooks. A complete blueprint for building a 'living intelligence.'",
        link: "https://github.com/mahmoud-ezz/ezz.ae",
        items: ["Next.js 14", "Tailwind CSS", "Framer Motion"]
    }
];

export default function SourcePage() {
  return (
    <div className="min-h-screen bg-black text-neutral-100 overflow-x-hidden pt-24">
      <div className="container mx-auto px-4 py-16">
        <Section className="text-center max-w-3xl mx-auto">
          <Book className="mx-auto h-12 w-12 text-orange-400 mb-4" />
          <h1 className="text-4xl font-light text-neutral-100">The Source Library</h1>
          <p className="text-lg text-neutral-400 mt-4">
            This project is offered as an open scientific contribution. The source code is provided not just as a repository, but as a library of cognitive primitives and living intelligence components, ready for research, adaptation, and implementation.
          </p>
        </Section>

        <div className="mt-20 max-w-4xl mx-auto space-y-8">
            {sourceComponents.map((lib) => (
                <Section key={lib.title}>
                    <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-6">
                        <div className="flex items-start gap-4">
                            <lib.icon className="h-8 w-8 text-orange-400/80 flex-shrink-0 mt-1" />
                            <div>
                                <p className="text-sm font-semibold text-neutral-500">{lib.category}</p>
                                <h2 className="text-xl font-light text-neutral-200">{lib.title}</h2>
                                <p className="text-sm text-neutral-400 mt-2 mb-4">{lib.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {lib.items.map((item) => (
                                        <div key={item} className="text-xs text-neutral-300 bg-neutral-800/70 px-2 py-1 rounded-sm border border-neutral-700 font-mono">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                                <a href={lib.link} target="_blank" rel="noopener noreferrer" className="text-sm text-orange-400 hover:text-orange-300 font-semibold transition-colors">
                                    Browse on GitHub &rarr;
                                </a>
                            </div>
                        </div>
                    </div>
                </Section>
            ))}
        </div>
      </div>
    </div>
  );
}
