// src/components/PhilosophicalProof.tsx
'use client';

import React from 'react';
import { Lightbulb } from 'lucide-react';
import { Section } from './ScrollTypography';

export function PhilosophicalProof() {
  return (
    <Section className="py-24 bg-neutral-950/50 border-t border-neutral-800">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <Lightbulb className="mx-auto h-8 w-8 text-orange-400 mb-4" />
        <h2 className="text-2xl font-light text-neutral-200">The Philosophical Proof</h2>
        <p className="text-base text-neutral-400 mt-4 italic">
          "Humans do not remember their lives. Humans generate their lives as they think. This entire platform is a direct, computational proof of this philosophical thesis."
        </p>
      </div>
    </Section>
  );
}
