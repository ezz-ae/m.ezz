// src/app/source/page.tsx
'use client';

import React from 'react';
import { Section } from '@/components/ScrollTypography';
import { Book, GitBranch, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SourcePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pt-24 font-pt-sans">
      <div className="container mx-auto px-4 py-16">
        <Section className="text-center max-w-3xl mx-auto">
          <Book className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-4xl font-light text-foreground font-playfair">The Open Source Universe</h1>
          <p className="text-lg text-muted-foreground mt-4">
            This project is one facet of a larger body of work, all offered as open scientific contributions. The source code for the complete ecosystem of projects, from cognitive architectures to market systems, is available for research, adaptation, and implementation.
          </p>
        </Section>

        <Section className="mt-20 max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 text-center">
                <GitBranch className="mx-auto h-10 w-10 text-primary/80 mb-4" />
                <h2 className="text-xl font-light text-card-foreground">Explore the Full Body of Work</h2>
                <p className="text-sm text-muted-foreground mt-2 mb-6">
                    The complete source code for the entire ecosystem—including the AIXSELF architecture, the DLDCHAIN protocol, the FCT Proving Grounds, and more—is available on GitHub.
                </p>
                <a href="https://github.com/ezz-ae" target="_blank" rel="noopener noreferrer">
                  <Button size="lg">
                    View on GitHub <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
            </div>
        </Section>
      </div>
    </div>
  );
}
