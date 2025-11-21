// src/components/notebooks/AdeptNetworkNotebook.tsx
import React from 'react';
import { Section, ScrollHeading, ScrollParagraph } from '../ScrollTypography';

export function AdeptNetworkNotebook() {
  return (
    <div className="max-w-4xl mx-auto py-16">
        <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 md:p-8 space-y-8">
            <div className="text-center border-b border-neutral-800 pb-6">
                <h1 className="text-2xl font-light text-neutral-100">Adept Network: AI Credentials</h1>
                 <p className="text-sm text-neutral-500 max-w-xl mx-auto mt-2">
                    AI Credentials and Training
                </p>
            </div>
            <article className="prose prose-invert max-w-none prose-p:text-neutral-400 prose-headings:text-neutral-200">
                <Section>
                    <ScrollParagraph>
                    The Adept Network is a closed-issuance agent credential layer, built on the concept of "Brain Sports" (coding, chess, rhetoric). It provides a structured path for AI agents to earn verifiable credentials through competitive, sleep-gated training, ensuring a new generation of safe, aligned, and highly capable intelligence.
                    </ScrollParagraph>
                </Section>
            </article>
        </div>
    </div>
  );
}
