
// src/components/notebooks/PuzzlesNotebook.tsx
import { Section, ScrollHeading, ScrollParagraph } from '../ScrollTypography';

export function PuzzlesNotebook() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto py-16 space-y-12">
      <Section>
        <ScrollParagraph className="text-xs tracking-[0.3em] uppercase text-neutral-500">
          Notebook · BruteBrains · ChainCrack
        </ScrollParagraph>
        <ScrollHeading as="h1" className="text-3xl md:text-4xl font-light text-neutral-50 mt-4 !mb-6">
          Puzzles as a Laboratory for Intelligence
        </ScrollHeading>
        <ScrollParagraph emphasisLevel="resonance" className="lead !text-neutral-300 !text-lg !leading-relaxed">
          Puzzles are not a game. They are a controlled environment for studying search, risk, and cognitive bias. By attempting to solve complex, well-defined problems like finding a specific Bitcoin address, you can observe the mechanics of intelligence, pattern recognition, and failure in their purest form.
        </ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h2">Bitcoin Puzzles: Vanity, Structure, and Bias</ScrollHeading>
        <ScrollParagraph>The search for specific Bitcoin addresses—so-called "vanity" addresses or those within structured ranges—is a perfect testbed. It's a search for a needle in a cosmic haystack. This work revealed how human creator bias imprints itself even on supposedly random data. We look for patterns, and in doing so, we leave them behind for others to find.</ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h2">ChainCrack AI: Exposing Weak Patterns</ScrollHeading>
        <ScrollParagraph>ChainCrack AI was built to demonstrate a principle: any pattern, no matter how clever, is an attack surface. The tool analyzes blockchain data to sniff out weak brainwallets, predictable entropy, and other user-generated vulnerabilities. The purpose was not to steal, but to prove that <span className="text-neutral-50">true security comes from verifiable randomness, not from personal creativity</span>. It’s a harsh lesson in cognitive security.</ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h2">BruteBrains & The Ticket Model</ScrollHeading>
        <ScrollParagraph>BruteBrains reframes large-scale computational problems as a marketplace. Instead of one entity trying to solve a puzzle, the system sells "tickets" representing a portion of the search space. This distributes the workload and the potential reward. It turns a monolithic task into a decentralized, incentivized ecosystem. It's a model for collaborative, competitive intelligence at scale.</ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h2">Lessons from the Search</ScrollHeading>
        <ScrollParagraph>The work with puzzles has taught critical lessons that apply to all intelligence systems:</ScrollParagraph>
        <ul className="list-disc pl-5 space-y-2">
          <ScrollParagraph as="li"><strong>Intelligence is Search:</strong> At its core, all problem-solving is a search through a possibility space.</ScrollParagraph>
          <ScrollParagraph as="li"><strong>Bias is a Signal:</strong> Human bias, which we try to eliminate, is also a signal that can be exploited or understood.</ScrollParagraph>
          <ScrollParagraph as="li"><strong>Failure is Information:</strong> Every failed attempt to solve a puzzle refines the search space. Failure is not wasted effort; it is negative information that guides the next step.</ScrollParagraph>
          <ScrollParagraph as="li"><strong>The Map is Not the Territory:</strong> Our models of a problem are always simpler than the problem itself. Puzzles force you to confront that gap.</ScrollParagraph>
        </ul>
      </Section>
    </article>
  );
}
