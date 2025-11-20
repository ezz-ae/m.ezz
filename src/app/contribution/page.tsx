// src/app/contribution/page.tsx
'use client';

import React from 'react';
import TimelineView from '@/components/TimelineView';
import IdentityStatement from '@/components/IdentityStatement';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare, Cpu } from 'lucide-react';
import { Section } from '@/components/ScrollTypography';
import Link from 'next/link';

// A new, simplified contact section with direct, elegant actions.
function DirectContact() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
        href="https://wa.me/971552981884"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto"
      >
        <Button variant="outline" className="w-full border-neutral-600 hover:bg-neutral-800 hover:text-white transition-all duration-300">
          <MessageSquare className="mr-2 h-4 w-4" />
          Contact via WhatsApp
        </Button>
      </a>
      <a href="mailto:m@ezz.ae" className="w-full sm:w-auto">
        <Button variant="outline" className="w-full border-neutral-600 hover:bg-neutral-800 hover:text-white transition-all duration-300">
          <Mail className="mr-2 h-4 w-4" />
          Contact via Email
        </Button>
      </a>
    </div>
  );
}

export default function ContributionPage() {
  return (
    <div className="min-h-screen bg-black text-neutral-100 overflow-x-hidden pt-24">
      <div className="container mx-auto px-4 py-16">

        {/* The Origin */}
        <Section className="text-center max-w-3xl mx-auto">
          <Cpu className="mx-auto h-10 w-10 text-orange-400 mb-4" />
          <h1 className="text-3xl md:text-4xl font-light text-neutral-100">First Principles</h1>
          <p className="text-base md:text-lg text-neutral-400 mt-4">
            This work is not a reinterpretation of existing theories. It is an act of architectural discovery, beginning from a commitment to first principles, pure inference, and raw human observation.
          </p>
        </Section>

        {/* The Layers of Inquiry */}
        <Section className="mt-20 md:mt-24">
            <h2 className="text-2xl md:text-3xl font-light text-center text-neutral-200 mb-12">The Layers of Inquiry</h2>
            <TimelineView />
        </Section>
        
        {/* The Architectural Philosophy */}
        <Section className="mt-20 md:mt-24">
             <IdentityStatement />
        </Section>

        {/* The Invitation to Collaborate */}
        <Section className="mt-20 md:mt-24 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light text-neutral-200 mb-4">An Invitation to Collaborate</h2>
          <p className="text-base md:text-lg text-neutral-400 mb-8">
            This exploration is ongoing. If this work resonates, or if you are a researcher, philosopher, or builder who sees a path for collaboration, please continue the inquiry.
          </p>
          <DirectContact />
        </Section>

      </div>
    </div>
  );
}
