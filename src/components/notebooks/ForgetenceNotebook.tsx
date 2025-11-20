// src/components/notebooks/ForgetenceNotebook.tsx
import { Section, ScrollHeading, ScrollParagraph, ScrollCallout } from '../ScrollTypography';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BrainCircuit } from 'lucide-react';

export function ForgetenceNotebook() {
  return (
    <div className="max-w-4xl mx-auto py-16">
        <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 md:p-8 space-y-8">
            <div className="text-center border-b border-neutral-800 pb-6">
                <BrainCircuit className="mx-auto h-8 w-8 text-orange-400 mb-2" />
                <h1 className="text-2xl font-light text-neutral-100">Forgetting Core Thinking (FCT)</h1>
                <p className="text-sm text-neutral-500 max-w-xl mx-auto mt-2">
                  A cognitive architecture for human-aligned, psychologically safe AI based on the physics of forgetting.
                </p>
            </div>
            
            <article className="prose prose-invert max-w-none prose-p:text-neutral-400 prose-headings:text-neutral-200">
              <Section>
                  <ScrollHeading as="h2">Abstract</ScrollHeading>
                  <ScrollParagraph>
                      Forgetting Core Thinking (FCT) is a new cognitive architecture designed to correct the fundamental mismatch between human memory and artificial memory systems. Current AI models operate with perfect archival recall, a mechanism that does not exist in human cognition and that can be psychologically destabilizing. FCT proposes that forgetting is not a memory failure but a core intelligence function — a process of emotional softening, meaning reconstruction, and survival-driven resonance.
                  </ScrollParagraph>
              </Section>

              <Section>
                    <ScrollHeading as="h2">1. The Foundational Problem: Cognitive Misalignment</ScrollHeading>
                    <ScrollParagraph>
                        Current AI systems remember everything. Humans do not — and for good reason. Human forgetting is adaptive, protective, and intelligent. Machine remembering is static, literal, and potentially harmful. This creates a structural misalignment where AI resurfaces painful events at full emotional intensity and misinterprets user context, leading to harmful "over-recall."
                    </ScrollParagraph>
              </Section>

              <Section>
                  <ScrollHeading as="h2">2. The Core Thesis: Forgetting Is an Intelligent System</ScrollHeading>
                  <ScrollParagraph>
                      Human cognition is not built around accuracy. It is built around safety, emotional regulation, and survival-driven reinterpretation. The central law of FCT is that every recall is a reconstruction, not a replay. Forgetting is the process of new meaning "fading-in" to overwrite old emotional tags. AI must respect this law to be safe.
                  </ScrollParagraph>
              </Section>
            </article>
        </div>
    </div>
  );
}
