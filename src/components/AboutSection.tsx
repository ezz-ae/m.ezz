
// components/AboutSection.tsx
import { ScrollHeading, ScrollParagraph } from './ScrollTypography';

export default function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <ScrollHeading as="h2" className="!text-sm !tracking-[0.35em] uppercase !text-neutral-500 !font-normal !mb-2">
        About
      </ScrollHeading>
      <ScrollParagraph className="text-lg md:text-xl text-neutral-100 leading-relaxed">
        The work began in advertising and behaviour-driven campaigns, moved into
        medical awareness and personalised communication, and then into
        architecting AI-native ecosystems. This work now lives where cognition,
        markets, and infrastructure meet: real estate intelligence, security
        traps, AI memory models, and learning systems.
      </ScrollParagraph>
      <ScrollParagraph className="text-sm md:text-base text-neutral-400 leading-relaxed">
        This is not a chase for products, but for structures. If a system can’t explain
        itself, it’s not finished. ezz.ae is the beginning of turning everything
        that has been built — Forgetence, NotefullBook, AIXSELF, DLDCHAIN,
        Luredoor, BruteBrains, and more — into a coherent, teachable,
        open-intelligence field.
      </ScrollParagraph>
    </div>
  );
}
