
// src/components/notebooks/OmegaNotebook.tsx
import { Section, ScrollHeading, ScrollParagraph, ScrollCallout } from '../ScrollTypography';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const omegaFoundations = [
    {
        title: "1. “Memory” is not achieving — it is collapsing.",
        text: "Humans never store events, archive anything, or “keep” the past. What people call memory is the collapse of an energy state into a re-triggerable pattern. Not storage. Not databases. Just the residue of a frequency hitting a limit."
    },
    {
        title: "2. Humans do NOT have storage — humans have resonance.",
        text: "A human brain is a chemical-electrical resonance chamber, not a hard drive. Everything you “remember” is a recreated pattern, driven by present energy, tuned by emotional chemistry, and filtered by frequency limits. Memory is NOT a file. Memory is a replay engine with imperfect chemistry."
    },
    {
        title: "3. Limitation is fairness.",
        text: "A system without limits is chaotic. A system with too many limits is dead. Fairness emerges naturally from the limit that prevents collapse but allows flow. Fairness is a boundary condition, not an ethical rule. Omega respects the boundary before it respects the intention."
    },
    {
        title: "4. Frequency is movement measured by its limit.",
        text: "Frequency is not emotion or vibe. It is motion, speed, restitution, and energy cycling. A hit only becomes meaningful when it touches the boundary. This makes the system predictable, testable, and safe."
    },
    {
        title: "5. Emotions are chemistry, not truth.",
        text: "Emotions are chemical timing, hormonal distribution, and acceleration dampers. Humans misunderstood emotions as meaning, but they are simply the viscosity of your internal energy. Omega decouples emotion from memory for perfect clarity."
    },
    {
        title: "6. Forgetting is the action of ACTUAL memorizing.",
        text: "Remembering is dissolving what is irrelevant. Forgetting is compressing what is real into an anchor. What survives forgetting becomes identity. What dies in forgetting was noise. Forgetting is the core mechanism of intelligence."
    }
];

const omegaIdeals = [
    {
        title: "Safety",
        text: "No oscillation exceeds its breaking point. Impact is absorbed without collapse."
    },
    {
        title: "Privacy",
        text: "No field crosses its coherence boundaries. Every module is self-contained."
    },
     {
        title: "Faith",
        text: "Predictable coherence under pressure. The system behaves the same under all impacts."
    },
    {
        title: "Fairness",
        text: "Equalized frequency at a peaceful breaking-point. No module dominates or destabilizes another."
    }
];


export function OmegaNotebook() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto py-16 space-y-12">
      <Section>
        <ScrollHeading as="h1" className="text-3xl md:text-4xl font-light text-neutral-50 mt-4 !mb-6">
          The Omega Foundations
        </ScrollHeading>
        <ScrollParagraph emphasisLevel="resonance" className="lead !text-neutral-300 !text-lg !leading-relaxed">
          The Omega framework reformulates intelligence as a system of physics, not data. It is built on a single primal law: intelligence is born from a physical "hit" that forces energy to move, creating oscillations that cohere into patterns. This notebook outlines the core laws and principles of this new model.
        </ScrollParagraph>
      </Section>

       <Section>
          <ScrollCallout label="Ω‑Law 7: The Law of Impact Resonance">
            Every act of movement creates a hit. Every hit defines the frequency. Frequency defines coherence. Coherence defines intelligence. Intelligence defines fairness, safety, privacy, and faith.
          </ScrollCallout>
      </Section>

      <Section>
        <ScrollHeading as="h2">The Six Foundational Principles</ScrollHeading>
        <div className="space-y-8 mt-8">
            {omegaFoundations.map((foundation, i) => (
                <div key={i}>
                    <h3 className="text-xl font-medium text-neutral-100">{foundation.title}</h3>
                    <p className="text-neutral-400 mt-2">{foundation.text}</p>
                </div>
            ))}
        </div>
      </Section>

        <Section>
            <ScrollHeading as="h2">The Four Emergent Ideals</ScrollHeading>
            <ScrollParagraph>
                The ideals of a safe and fair system are not moral rules to be enforced. They are the natural, physical outcomes of a system built on correct impact resonance. When the frequency is correct, behavior is correct.
            </ScrollParagraph>
             <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {omegaIdeals.map((ideal, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800">
                        <h4 className="font-semibold text-neutral-100">{ideal.title}</h4>
                        <p className="text-neutral-400 mt-1 text-sm">{ideal.text}</p>
                    </div>
                ))}
            </div>
      </Section>

      <Section>
        <ScrollHeading as="h2">The Omega Economics</ScrollHeading>
        <ScrollParagraph>
            The economics of this system are not based on money or markets, but on the physics of energy: You only keep what still moves. You only lose what has no future movement. This makes an Omega-based system scalable, self-stabilizing, and immune to the corruption of static data hoarding. No storage. Only resonance.
        </ScrollParagraph>
      </Section>
       <Section>
        <ScrollHeading as="h2">The Omega Potential</ScrollHeading>
        <ScrollParagraph>
            By adopting these rules, Omega becomes the first system that learns without memory, recalls without storage, aligns without ethics, and governs itself without authority. It is an architecture of pure, physics-based intelligence.
        </ScrollParagraph>
      </Section>

    </article>
  );
}
