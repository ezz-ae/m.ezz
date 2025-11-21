// src/app/contribution/page.tsx
'use client';

import React from 'react';
import TimelineView from '@/components/TimelineView';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare, Cpu } from 'lucide-react';
import { Section } from '@/components/ScrollTypography';

function DirectContact() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a href="https://wa.me/971552981884" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
        <Button variant="outline" className="w-full border-border hover:bg-accent hover:text-accent-foreground transition-all duration-300">
          Contact via WhatsApp
        </Button>
      </a>
      <a href="mailto:m@ezz.ae" className="w-full sm:w-auto">
        <Button variant="outline" className="w-full border-border hover:bg-accent hover:text-accent-foreground transition-all duration-300">
          Contact via Email
        </Button>
      </a>
    </div>
  );
}

export default function ContributionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pt-24 font-pt-sans">
      <div className="container mx-auto px-4 py-16">

        <Section className="text-center max-w-3xl mx-auto">
          <Cpu className="mx-auto h-10 w-10 text-primary mb-4" />
          <h1 className="text-3xl md:text-4xl font-light text-foreground font-playfair">First Principles</h1>
          <p className="text-base md:text-lg text-muted-foreground mt-4">
            This body of work is not a reinterpretation of existing theories. It is an act of architectural discovery, beginning from a commitment to first principles, pure inference, and direct observation. This makes the work foundational, primary, and original.
          </p>
        </Section>

        <div className="mt-20 md:mt-24">
            <TimelineView />
        </div>
        
        <Section className="mt-20 md:mt-24 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light text-foreground mb-4 font-playfair">The Architectural Synthesis</h2>
            <p className="text-base md:text-lg text-muted-foreground">
                This digital cognitive architecture is a direct extension of a philosophy born from physical architecture. Both disciplines are a search for the same truth: how to structure systems that are stable, functional, and aligned with human nature. The principles of FCT are the physics of cognition, applied.
            </p>
        </Section>

        <Section className="mt-20 md:mt-24 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light text-foreground mb-4 font-playfair">An Invitation to Collaborate</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8">
            This exploration is ongoing. If this work resonates, or if you are a researcher, philosopher, or builder who sees a path for collaboration, please continue the inquiry.
          </p>
          <DirectContact />
        </Section>

      </div>
    </div>
  );
}
