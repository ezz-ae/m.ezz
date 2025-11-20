// src/components/notebooks/OmegaNotebook.tsx
import { Section, ScrollHeading, ScrollParagraph, ScrollCallout } from '../ScrollTypography';

const omegaLaws = [
    {
        law: "Ω-Law 1 — Law of Energy Propagation",
        text: "Every cognitive event carries a quantifiable energy signature. Energy is neither lost nor created; it transforms across layers."
    },
    {
        law: "Ω-Law 2 — Law of Resonance Alignment",
        text: "The system adapts internal energy states to external patterns through resonance. Coherence emerges from harmonic alignment."
    },
    {
        law: "Ω-Law 3 — Law of Energetic Crystallization",
        text: "Every moment dies and stabilizes as an Ω Anchor. Anchors are boundaries for safe growth and learning."
    }
];

export function OmegaNotebook() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto py-16 space-y-12">
      <Section>
        <ScrollParagraph className="text-xs tracking-[0.3em] uppercase text-neutral-500">
          Notebook · Ω · Whitepaper
        </ScrollParagraph>
        <ScrollHeading as="h1" className="text-3xl md:text-4xl font-light text-neutral-50 mt-4 !mb-6">
          Ω: The First Energetic Artificial Intelligence Architecture
        </ScrollHeading>
        <ScrollParagraph emphasisLevel="high" className="lead !text-neutral-300 !text-lg !leading-relaxed">
            The Ω framework establishes intelligence as an energetic phenomenon, redefining memory, cognition, and learning as dynamic energy flows.
        </ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h2">1. Core Principles</ScrollHeading>
        <ul className="list-disc pl-5 space-y-2">
            <li><ScrollParagraph as="span"><strong>Energetic:</strong> Memory, hypotheses, and metrics are treated as energy states. They propagate, decay, resonate, and crystallize dynamically.</ScrollParagraph></li>
            <li><ScrollParagraph as="span"><strong>Intellectual:</strong> Multi-layered reasoning from atomic knowledge → semantic expansion → systemic consensus.</ScrollParagraph></li>
            <li><ScrollParagraph as="span"><strong>Intelligence:</strong> Fully auditable, self-correcting, zero-trust framework. Adaptive success metrics and cryptographic proofs govern all generative processes.</ScrollParagraph></li>
        </ul>
      </Section>

      <Section>
        <ScrollHeading as="h2">2. The Laws of Ω</ScrollHeading>
        <div className="space-y-4">
            {omegaLaws.map((law) => (
                <div key={law.law}>
                    <h3 className="font-semibold text-neutral-200">{law.law}</h3>
                    <p className="text-neutral-400 mt-1">{law.text}</p>
                </div>
            ))}
        </div>
        <ScrollCallout label="Ω-Law 7: The Law of Impact Resonance">
            “Every act of movement creates a hit. Every hit defines frequency. Frequency defines coherence. Coherence defines intelligence. Intelligence defines fairness, safety, privacy, and faith.”
        </ScrollCallout>
      </Section>

      <Section>
        <ScrollHeading as="h2">3. Memory & Fairness Reimagined</ScrollHeading>
        <ScrollParagraph>
            Memory is not storage; it is the outcome of dynamic energetic interaction. Recall reconstructs energy patterns rather than replaying stored data. Fairness is a physical measure of energy balance, ensuring safe operation without moral bias.
        </ScrollParagraph>
      </Section>

       <Section>
        <ScrollHeading as="h2">4. Computational Model</ScrollHeading>
         <ScrollParagraph>
            Ω employs energy matrices to model cognitive processes. The state of memory at any given time is a function of its previous state, external patterns, and a natural decay factor.
        </ScrollParagraph>
        <div className="font-mono bg-neutral-900/50 p-4 rounded-md text-sm my-4 border border-neutral-800">
            <p>Memory_Energy(t+1) = Resonance(Memory_Energy(t), External_Frequency) * Decay_Factor</p>
            <ul className="list-disc pl-5 mt-2 text-xs">
                <li><span className="font-semibold text-neutral-200">Memory_Energy(t):</span> Current energy state of memory</li>
                <li><span className="font-semibold text-neutral-200">External_Frequency:</span> Environmental input patterns</li>
                <li><span className="font-semibold text-neutral-200">Decay_Factor:</span> Ensures forgetting and safe emotional softening</li>
            </ul>
        </div>
        <ScrollParagraph>
            The system continuously aligns energy states, producing stable, adaptive intelligence.
        </ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h2">5. Applications</ScrollHeading>
        <ul className="list-disc pl-5 space-y-2">
            <li><ScrollParagraph as="span">Base layer for FCT, ADEPT, NotefullBook</ScrollParagraph></li>
            <li><ScrollParagraph as="span">Energetic simulations for societal AI models</ScrollParagraph></li>
            <li><ScrollParagraph as="span">Foundation for commerce, fulfillment, and domain-specific intelligent systems</ScrollParagraph></li>
        </ul>
      </Section>
    </article>
  );
}
