
// components/IdentityStatement.tsx
import { ScrollParagraph } from './ScrollTypography';

export default function IdentityStatement() {
  return (
    <section className="relative py-16 md:py-24 px-6 md:px-16 bg-black border-t border-white/5">
      <div className="max-w-4xl mx-auto space-y-8">
        <ScrollParagraph emphasisLevel="resonance" className="!text-lg md:!text-2xl !text-neutral-200 !leading-relaxed">
          These are systems where AI, cognition, real estate, security, and behaviour design move as one field.
        </ScrollParagraph>

        <ScrollParagraph className="!text-sm md:!text-base !text-neutral-400 !leading-relaxed">
          Forgetence / FCT, NotefullBook & NotebookML, the AIXSELF Universe, DLDCHAIN & Mashroi, Luredoor & KAP traps, BruteBrains, and more. This site is not a portfolio. It’s a living map of how these systems think.
        </ScrollParagraph>
      </div>
    </section>
  );
}
