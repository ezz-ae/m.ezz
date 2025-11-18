// components/NowSection.tsx
import { ScrollHeading, ScrollParagraph } from './ScrollTypography';

export default function NowSection() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <ScrollHeading as="h2" className="!text-sm !tracking-[0.35em] uppercase !text-neutral-500 !font-normal !mb-2">
        What I’m open to now
      </ScrollHeading>
      <ScrollParagraph className="text-sm md:text-base text-neutral-300">
        I’m interested in working with people and institutions who want to take
        AI beyond “tools” and into real intelligence architecture.
      </ScrollParagraph>

      <ul className="space-y-3 text-sm md:text-base text-neutral-200">
        <ScrollParagraph as="li">— Designing AI memory / forgetting architectures (FCT / Forgetence).</ScrollParagraph>
        <ScrollParagraph as="li">— Building AI-native OS layers (NotefullBook, NotebookML, AIXSELF).</ScrollParagraph>
        <ScrollParagraph as="li">— Real estate intelligence & tokenisation models (DLDCHAIN, Mashroi, EBRAM).</ScrollParagraph>
        <ScrollParagraph as="li">— Security / trap simulations for real-world phishing and crypto awareness.</ScrollParagraph>
        <ScrollParagraph as="li">— Deep workshops & talks on AI, cognition, and behavioural intelligence.</ScrollParagraph>
      </ul>
    </div>
  );
}
