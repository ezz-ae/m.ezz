// src/components/notebooks/PuzzlesNotebook.tsx
'use client';

import React from 'react';
import { Section, ScrollHeading, ScrollParagraph, ScrollCallout } from '../ScrollTypography';

const keyFindings = [
    "Intelligence is a search through a possibility space.",
    "Human bias is a detectable signal, not just a flaw.",
    "Every failure is negative information that refines the search.",
    "The model of a problem is always a simplification of its reality."
];

export function PuzzlesNotebook() {
  PuzzlesNotebook.displayName = "PuzzlesNotebook";
  return (
    <div className="max-w-4xl mx-auto py-16 font-pt-sans">
        <div className="bg-card border border-border rounded-lg p-6 md:p-8 space-y-8">
            <div className="text-center border-b border-border pb-6">
                <h1 className="text-2xl font-light text-foreground font-playfair">Laboratory for Intelligence</h1>
                <p className="text-sm text-muted-foreground max-w-xl mx-auto mt-2">
                    A research environment using cryptographic puzzles (BruteBrains, ChainCrack) as a controlled lab for the scientific study of search, risk, and cognitive bias.
                </p>
            </div>
            <article className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-foreground prose-headings:font-light">
                <Section>
                    <ScrollHeading as="h2">Research Instruments</ScrollHeading>
                    <ScrollParagraph>
                        The laboratory utilizes two primary instruments to study intelligence:
                    </ScrollParagraph>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            <strong className="text-foreground/90">ChainCrack AI Pattern Analyzer:</strong> A tool designed to analyze Bitcoin brainwallets. It demonstrates that any discernible human pattern—no matter how clever—is an attack surface. Its core finding is that security through creativity is an anti-pattern.
                        </li>
                        <li>
                            <strong className="text-foreground/90">BruteBrains Ticket Marketplace:</strong> A system that transforms a monolithic computational task (like cracking a brainwallet) into a decentralized, incentivized ecosystem. It sells "tickets" representing small slices of the search space, prototyping a merit-based economy where value is derived from verifiable computational work.
                        </li>
                    </ul>
                </Section>
                <Section>
                    <ScrollHeading as="h2">Primary Research Readouts</ScrollHeading>
                    <ScrollParagraph>
                        The experiments conducted in this lab have produced several key findings that inform the broader AIXSELF architecture:
                    </ScrollParagraph>
                    <ul className="list-disc pl-5 space-y-2">
                       {keyFindings.map((finding, i) => <li key={i}><ScrollParagraph as="span">{finding}</ScrollParagraph></li>)}
                    </ul>
                </Section>
                 <Section>
                    <ScrollCallout label="System Integration: AIXSELF Alignment">
                        This lab's findings directly inform the AIXSELF safety architecture. The failure of human patterns in ChainCrack hardens the Schema Intelligence Network (SINLM), while the BruteBrains model prototypes the merit-based economy that AIXEYE governs.
                    </ScrollCallout>
                </Section>
            </article>
        </div>
    </div>
  );
}
