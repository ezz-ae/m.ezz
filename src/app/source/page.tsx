// src/app/source/page.tsx
'use client';

import React from 'react';
import { Section } from '@/components/ScrollTypography';
import { Book, Code, GitBranch, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const sourceComponents = [
    {
        icon: Code,
        category: "Living Intelligence Components",
        title: "The Interactive Notebooks",
        description: "The complete source for the custom, interactive UIs that transform static documents into scientific instruments. Each is a self-contained demonstration of FCT principles, from the FCT Proving Ground to the Imagination Lab.",
        link: "https://github.com/mahmoud-ezz/ezz.ae/tree/main/src/components/notebooks",
        items: ["BrainGamesNotebook.tsx", "ImaginationLabNotebook.tsx", "SecurityNotebook.tsx", "NotefullBookNotebook.tsx", "PuzzlesNotebook.tsx"]
    },
    {
        icon: GitBranch,
        category: "The Full Platform Architecture",
        title: "The Entire EZZ.AE Repository",
        description: "The complete source code for the entire platform, including the global UI, navigation, data structures, and the full ecosystem of notebooks. A complete blueprint for building a 'living intelligence.'",
        link: "https://github.com/mahmoud-ezz/ezz.ae",
        items: ["Next.js 14", "Tailwind CSS", "Framer Motion", "ShadCN UI", "Genkit"]
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
            This project is an open scientific contribution. The components are provided for research, adaptation, and collaboration. For academic or commercial implementation, a formal request is invited.
          </p>
        </Section>

        <div className="mt-20 max-w-4xl mx-auto space-y-8">
            {sourceComponents.map((lib) => (
                <Section key={lib.title}>
                    <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-6">
                        <div className="flex items-start gap-4">
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

        <Section className="mt-24 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light text-neutral-200 mb-4">Formal Request for Source & Collaboration</h2>
            <p className="text-base text-neutral-400 mb-8">
                For academic partnerships, commercial licensing, or a private presentation of the full technical and philosophical architecture, please make a formal inquiry.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/971552981884" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full border-neutral-600 hover:bg-neutral-800 hover:text-white transition-all duration-300">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Request via WhatsApp
                </Button>
              </a>
              <a href="mailto:m@ezz.ae" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full border-neutral-600 hover:bg-neutral-800 hover:text-white transition-all duration-300">
                  <Mail className="mr-2 h-4 w-4" />
                  Request via Email
                </Button>
              </a>
            </div>
        </Section>
      </div>
    </div>
  );
}
