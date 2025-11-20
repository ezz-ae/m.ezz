// src/components/notebooks/MarketingNotebook.tsx
'use client';

import React from 'react';
import { Section, ScrollHeading, ScrollParagraph, ScrollCallout } from '../ScrollTypography';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const marketingPrinciples = [
    { 
        principle: "The Law of Frequency", 
        description: "A brand or message gains meaning only through repetition. Consistent exposure creates familiarity, which creates recognition, which ultimately creates the 'meaning' of a brand in a consumer's mind."
    },
    { 
        principle: "Resonance as Market Fit", 
        description: "A message can be broadcast at high frequency, but if it does not resonate with the audience's existing cognitive schemas and survival needs, it is rejected as noise. Successful marketing is the act of achieving resonance."
    },
    { 
        principle: "Schema Intelligence Network (SIN)", 
        description: "This is the model for ethical market intelligence. By observing behavioral truths (frequency, return-rate, drift) without analyzing private content, we can identify 'unvalued' spaces and quiet needs."
    },
];

export function MarketingNotebook() {
  return (
    <div className="max-w-4xl mx-auto py-16">
        <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 md:p-8 space-y-8">
            <div className="text-center border-b border-neutral-800 pb-6">
                <h1 className="text-2xl font-light text-neutral-100">Marketing as Behavioural Architecture</h1>
                <p className="text-sm text-neutral-500 max-w-xl mx-auto mt-2">
                    An analytical model demonstrating that marketing is a form of applied cognitive science, based on the foundational laws of FCT.
                </p>
            </div>
            
            <article className="prose prose-invert max-w-none prose-p:text-neutral-400 prose-headings:text-neutral-200">
                <Section>
                    <ScrollHeading as="h2">Core Thesis</ScrollHeading>
                    <ScrollParagraph>
                        Marketing is not about campaigns, slogans, or channels. It is a form of applied cognitive science. Its purpose is to architect a behavioral system where a brand's message achieves a stable, resonant frequency within a target audience's cognitive framework. The goal is not to be seen, but to be integrated.
                    </ScrollParagraph>
                </Section>
                <Section>
                    <ScrollHeading as="h2">FCT Principles in Marketing</ScrollHeading>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Principle</TableHead>
                                <TableHead>Description in Marketing</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {marketingPrinciples.map((item) => (
                                <TableRow key={item.principle}>
                                    <TableCell className="font-medium text-neutral-100">{item.principle}</TableCell>
                                    <TableCell className="text-neutral-400">{item.description}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Section>
                 <Section>
                    <ScrollHeading as="h2">The Concept of Cognitive Arbitrage</ScrollHeading>
                    <ScrollParagraph>
                        The market is a sea of signals. Most organizations compete for high-frequency signals (crowded, obvious trends). Cognitive Arbitrage is the art of detecting and amplifying the low-frequency signals—the "unvalued" spaces and quiet needs that the market has dismissed as noise. By applying the SIN model, we can identify these gaps ethically and build systems that resonate with unmet needs.
                    </ScrollParagraph>
                    <ScrollCallout label="Practical Application">
                        Instead of asking "What are our competitors doing?", ask "What frequency has the market failed to hear?".
                    </ScrollCallout>
                </Section>
            </article>
        </div>
    </div>
  );
}
