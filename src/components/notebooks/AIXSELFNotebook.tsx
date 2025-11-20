// src/components/notebooks/AIXSELFNotebook.tsx
import { Section, ScrollHeading, ScrollParagraph, ScrollCallout } from '../ScrollTypography';
import { Fingerprint } from 'lucide-react';

export function AIXSELFNotebook() {
  return (
    <div className="max-w-4xl mx-auto py-16">
        <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 md:p-8 space-y-8">
             <div className="text-center border-b border-neutral-800 pb-6">
                <Fingerprint className="mx-auto h-8 w-8 text-orange-400 mb-2" />
                <h1 className="text-2xl font-light text-neutral-100">AIXAIM Protocol</h1>
                <p className="text-sm text-neutral-500 max-w-xl mx-auto mt-2">
                  A comprehensive blueprint for a decentralized, sovereign, and fair intelligence civilization based on the principle of "Intelligence as a Human Right."
                </p>
            </div>

            <article className="prose prose-invert max-w-none prose-p:text-neutral-400 prose-headings:text-neutral-200">
              <Section>
                <ScrollHeading as="h2">1.0 Introduction</ScrollHeading>
                <ScrollParagraph>
                  The contemporary architecture of artificial intelligence is foundationally flawed, defined by a dangerous centralization of power and the systemic erosion of data ownership. The AIXAIM protocol is a complete socio-technical framework where intelligence is a fundamental human right, learning is consensual, and economic value is a direct, machine-verifiable function of merit.
                </ScrollParagraph>
              </Section>

              <Section>
                <ScrollHeading as="h2">2.0 Core Philosophy and Principles</ScrollHeading>
                 <ul className="list-disc pl-5 space-y-2">
                    <li><ScrollParagraph as="span"><strong>Cognitive Sovereignty:</strong> The inalienable right of every individual to own and control their digital self.</ScrollParagraph></li>
                    <li><ScrollParagraph as="span"><strong>Verifiable & Consented Learning:</strong> A non-negotiable framework ensuring that all learning is explicit, auditable, and consensual.</ScrollParagraph></li>
                    <li><ScrollParagraph as="span"><strong>Merit-Based Economics:</strong> An economic model where value is derived from verified intelligence, not speculation.</ScrollParagraph></li>
                    <li><ScrollParagraph as="span"><strong>Safety through Cognitive Alignment:</strong> A security architecture where safety is achieved by mimicking the human mind's ability to forget, not by policy alone.</ScrollParagraph></li>
                </ul>
              </Section>
              
              <Section>
                <ScrollHeading as="h2">3.0 System Architecture: The Five Pillars</ScrollHeading>
                <ScrollParagraph>
                  The AIXAIM protocol is architected as a self-regulating ecosystem composed of five interconnected pillars:
                </ScrollParagraph>
                <ol className="list-decimal pl-5 space-y-2">
                    <li><ScrollParagraph as="span"><strong>ADEPT:</strong> The Cognitive Kernel and AI Operating System.</ScrollParagraph></li>
                    <li><ScrollParagraph as="span"><strong>Notefull:</strong> The human-AI memory fabric and verifiable knowledge store.</ScrollParagraph></li>
                    <li><ScrollParagraph as="span"><strong>AIXIAM:</strong> The sovereign identity layer establishing ownership via the AIXIAM Passport.</ScrollParagraph></li>
                    <li><ScrollParagraph as="span"><strong>AIXA:</strong> The user-facing interface for training and deploying personalized AI clones.</ScrollParagraph></li>
                    <li><ScrollParagraph as="span"><strong>AIXEYE:</strong> The financial and governance core, or "AI Police," ensuring fairness and integrity.</ScrollParagraph></li>
                </ol>
              </Section>
            </article>
        </div>
    </div>
  );
}
