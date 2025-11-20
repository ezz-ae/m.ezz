// src/app/contribution/page.tsx
'use client';

import React from 'react';
import TimelineView from '@/components/TimelineView';
import IdentityStatement from '@/components/IdentityStatement';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare, Cpu, Mic } from 'lucide-react';
import { Section } from '@/components/ScrollTypography';
import Link from 'next/link';

const speakingTopics = [
    {
        category: "AI & The Future of Cognition",
        topics: [
            "Forgetting Core Thinking (FCT): Building Psychologically Safe AI",
            "The 'No-Memory' Architecture: A Paradigm Shift in AI Safety and Privacy",
            "Completing AI vs. Competing AI: The Philosophy of Human-AI Collaboration",
            "Cognitive Sovereignty: The Future of Digital Identity and Ownership"
        ]
    },
    {
        category: "Architecture & Design Philosophy",
        topics: [
            "The Physics of Cognition as an Architectural Blueprint",
            "From Digital Blueprints to Physical Spaces: A Unified Design Theory",
            "'Good Offering Science': A Framework for Elegant, Functional Design"
        ]
    },
];

function DirectContact() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a href="https://wa.me/971552981884" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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

        <Section className="text-center max-w-3xl mx-auto">
          <Cpu className="mx-auto h-10 w-10 text-orange-400 mb-4" />
          <h1 className="text-3xl md:text-4xl font-light text-neutral-100">First Principles</h1>
          <p className="text-base md:text-lg text-neutral-400 mt-4">
            This work is not a reinterpretation of existing theories. It is an act of architectural discovery, beginning from a commitment to first principles, pure inference, and raw human observation.
          </p>
        </Section>

        <Section className="mt-20 md:mt-24">
            <h2 className="text-2xl md:text-3xl font-light text-center text-neutral-200 mb-12">The Layers of Inquiry</h2>
            <TimelineView />
        </Section>
        
        <Section className="mt-20 md:mt-24">
             <IdentityStatement />
        </Section>

        <Section className="mt-20 md:mt-24 text-center max-w-3xl mx-auto">
            <Mic className="mx-auto h-10 w-10 text-orange-400 mb-4" />
            <h2 className="text-2xl md:text-3xl font-light text-neutral-200 mb-4">Education & Public Speaking</h2>
            <p className="text-base md:text-lg text-neutral-400 mb-8">
                The principles and architectures developed in this project are available for discussion and presentation in academic, research, and industrial forums.
            </p>
            <div className="text-left space-y-6">
                {speakingTopics.map(area => (
                    <div key={area.category} className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4">
                        <h3 className="font-semibold text-neutral-200 mb-3">{area.category}</h3>
                        <ul className="list-disc list-inside text-neutral-400 space-y-2 text-sm">
                            {area.topics.map(topic => <li key={topic}>{topic}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>

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
