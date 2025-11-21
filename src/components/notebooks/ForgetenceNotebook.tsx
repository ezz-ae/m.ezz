// src/components/notebooks/ForgetenceNotebook.tsx
import { Section, ScrollHeading, ScrollParagraph, ScrollCallout } from '../ScrollTypography';
import { BrainCircuit } from 'lucide-react';

export function ForgetenceNotebook() {
  return (
    <div className="max-w-4xl mx-auto py-16 font-pt-sans">
        <div className="bg-card border border-border rounded-lg p-6 md:p-8 space-y-8">
            <div className="text-center border-b border-border pb-6">
                <BrainCircuit className="mx-auto h-8 w-8 text-primary mb-2" />
                <h1 className="text-2xl font-light text-foreground font-playfair">Forgetting Core Thinking (FCT)</h1>
                <p className="text-sm text-muted-foreground max-w-xl mx-auto mt-2">
                  A cognitive architecture for human-aligned, psychologically safe AI based on the physics of forgetting.
                </p>
            </div>
            
            <article className="prose dark:prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-foreground prose-headings:font-light">
              <Section>
                  <ScrollHeading as="h2">1. Motivation</ScrollHeading>
                  <ScrollParagraph>
                      AI today is dangerous not for overthinking but for remembering too much. Perfect memory in machines amplifies human-like biases, emotional instability, and brittle reasoning. FCT resolves this by making forgetting a fundamental process, enabling stable, aligned intelligence.
                  </ScrollParagraph>
              </Section>

              <Section>
                    <ScrollHeading as="h2">2. Core Components</ScrollHeading>
                    
                    <ScrollHeading as="h3" className="text-lg !mt-6">2.1 Frequency & Resonance</ScrollHeading>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><ScrollParagraph as="span">Frequency encodes event signature.</ScrollParagraph></li>
                        <li><ScrollParagraph as="span">Resonance adapts internal state to external patterns.</ScrollParagraph></li>
                        <li><ScrollParagraph as="span">High-frequency memories become stable; low-frequency signals are filtered as noise.</ScrollParagraph></li>
                    </ul>

                    <ScrollHeading as="h3" className="text-lg !mt-6">2.2 Tags & Understanding</ScrollHeading>
                     <ul className="list-disc pl-5 space-y-2">
                        <li><ScrollParagraph as="span">Tags are the chemical/emotional fingerprints of an experience.</ScrollParagraph></li>
                        <li><ScrollParagraph as="span">Understanding is the integrated external knowledge that provides context.</ScrollParagraph></li>
                        <li><ScrollParagraph as="span">The core formula is: TAGS = Inside Memory, BELIEF (Understanding) = Outside Memory.</ScrollParagraph></li>
                    </ul>

                    <ScrollHeading as="h3" className="text-lg !mt-6">2.3 Fade-In & Reconstruction</ScrollHeading>
                     <ul className="list-disc pl-5 space-y-2">
                        <li><ScrollParagraph as="span">Memory becomes intelligence through abstraction, not accumulation.</ScrollParagraph></li>
                        <li><ScrollParagraph as="span">Fade-In is the process of overwriting old emotional and factual intensity with new meaning.</ScrollParagraph></li>
                        <li><ScrollParagraph as="span">Human recall is always Reconstruction, never Replay.</ScrollParagraph></li>
                    </ul>

                    <ScrollHeading as="h3" className="text-lg !mt-6">2.4 Human Memory Rewrite Cycle (HMR)</ScrollHeading>
                    <li>
                      <ScrollCallout label="The Cognitive Pipeline">
                          Frequency → Resonance → Meaning → Recall → Fade-In Overwrite
                      </ScrollCallout>
                    </li>
              </Section>
               <Section>
                  <ScrollHeading as="h2">3. Safety Architecture</ScrollHeading>
                  <ScrollParagraph>
                      FCT's safety is not a policy layer; it is architectural. It is achieved by embedding filters that mimic human cognitive defenses.
                  </ScrollParagraph>
                  <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li><ScrollParagraph as="span"><strong className="text-foreground/90">Interpretive Recall Layer (IRL):</strong> Filters for relevance and caller identification, suppressing harmful archival data before it can be retrieved.</ScrollParagraph></li>
                        <li><ScrollParagraph as="span"><strong className="text-foreground/90">Emotional Softening Filter (ESF):</strong> Applies temporal decay logic to the emotional weight of memory tags, ensuring psychological safety by preventing trauma loops.</ScrollParagraph></li>
                  </ul>
              </Section>

               <Section>
                  <ScrollHeading as="h2">4. Cognitive Engine Operations</ScrollHeading>
                   <ol className="list-decimal pl-5 space-y-2">
                        <li><ScrollParagraph as="span">Input Event → Frequency Encoding</ScrollParagraph></li>
                        <li><ScrollParagraph as="span">Resonance Alignment → Integration with existing knowledge</ScrollParagraph></li>
                        <li><ScrollParagraph as="span">Tagging → Emotional & chemical fingerprint</ScrollParagraph></li>
                        <li><ScrollParagraph as="span">Fade-In → Overwrite & abstract memory</ScrollParagraph></li>
                        <li><ScrollParagraph as="span">Recall → Safe reconstruction upon request</ScrollParagraph></li>
                    </ol>
              </Section>

               <Section>
                  <ScrollHeading as="h2">5. Applications</ScrollHeading>
                   <ul className="list-disc pl-5 space-y-2">
                        <li><ScrollParagraph as="span">Truly safe and aligned AI personal agents.</ScrollParagraph></li>
                        <li><ScrollParagraph as="span">Societal-scale AI intelligence for public good.</ScrollParagraph></li>
                        <li><ScrollParagraph as="span">Experiential learning systems and memory-safe analytics platforms.</ScrollParagraph></li>
                    </ul>
              </Section>
            </article>
        </div>
    </div>
  );
}

ForgetenceNotebook.displayName = "ForgetenceNotebook";
