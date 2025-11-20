// src/app/source/page.tsx
'use client';

import React from 'react';
import { Section } from '@/components/ScrollTypography';
import { Book, GitBranch } from 'lucide-react';

export default function SourcePage() {
  return (
    <div className="min-h-screen bg-black text-neutral-100 overflow-x-hidden pt-24">
      <div className="container mx-auto px-4 py-16">
        <Section className="text-center max-w-3xl mx-auto">
          <Book className="mx-auto h-12 w-12 text-orange-400 mb-4" />
          <h1 className="text-4xl font-light text-neutral-100">The Open Source Universe</h1>
          <p className="text-lg text-neutral-400 mt-4">
            This project is one facet of a larger body of work, all offered as open scientific contributions. The source code for the complete ecosystem of projects, from cognitive architectures to market systems, is available for research, adaptation, and implementation.
          </p>
        </Section>

        <Section className="mt-20 max-w-2xl mx-auto">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-8 text-center">
                <GitBranch className="mx-auto h-10 w-10 text-orange-400/80 mb-4" />
                <h2 className="text-xl font-light text-neutral-200">Explore the Full Body of Work</h2>
                <p className="text-sm text-neutral-400 mt-2 mb-6">
                    The complete source code for the entire ecosystem—including the AIXSELF architecture, the DLDCHAIN protocol, the FCT Proving Grounds, and more—is available on GitHub.
                </p>
                <a href="https://github.com/ezz-ae" target="_blank" rel="noopener noreferrer" className="inline-block text-lg py-3 px-8 rounded-full border border-neutral-600 hover:bg-neutral-800 hover:text-white transition-all duration-300">
                    View on GitHub &rarr;
                </a>
            </div>
        </Section>
      </div>
    </div>
  );
}
