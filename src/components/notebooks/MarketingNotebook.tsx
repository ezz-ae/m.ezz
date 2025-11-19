
// src/components/notebooks/MarketingNotebook.tsx
import { Section, ScrollHeading, ScrollParagraph } from '../ScrollTypography';

export function MarketingNotebook() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto py-16 space-y-12">
      <Section>
        <ScrollParagraph className="text-xs tracking-[0.3em] uppercase text-neutral-500">
          Notebook · MTC · Marketinum
        </ScrollParagraph>
        <ScrollHeading as="h1" className="text-3xl md:text-4xl font-light text-neutral-50 mt-4 !mb-6">
          Marketing as Behavioural Architecture
        </ScrollHeading>
        <ScrollParagraph emphasisLevel="resonance" className="lead !text-neutral-300 !text-lg !leading-relaxed">
          The work in marketing evolved from a simple observation: marketing is not about ads, impressions, or clicks. It is behavioural architecture. You are not selling a product; you are designing a cognitive pathway for a human being to decide to change themselves. The product is just a token of that change.
        </ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h2">Personalisation as a Trigger for Self-Change</ScrollHeading>
        <ScrollParagraph>Work in medical awareness campaigns was formative. It was not just "raising awareness" for a condition; it was building systems to help individuals recognize a pattern in their own lives and seek help. The content was a mirror. The goal was not a sale, but a decision. This led to the insight that the most powerful marketing does not create desire for an object, but creates a recognition of a need within the self.</ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h2">From Campaigns to Market Systems</ScrollHeading>
        <ScrollParagraph>A campaign is a temporary spike. A system is a sustainable current. The focus shifted from single-shot advertising to building self-sustaining ecosystems. In real estate, this meant moving beyond "selling a unit" to architecting the entire market of developers, brokers, buyers, and financiers. The goal became to design a system where value flows naturally, rather than being pushed through ads.</ScrollParagraph>
      </Section>
      
      <Section>
        <ScrollHeading as="h2">Human Value Perception: The Power of the "Unvalued"</ScrollHeading>
        <ScrollParagraph>The market fixates on high-value signals: luxury, scarcity, hype. But true intelligence lies in understanding the entire spectrum of value. The biggest opportunities are often in the "unvalued" spaces—the ignored problems, the overlooked efficiencies, the quiet needs.</ScrollParagraph>
        <ScrollParagraph>Value is not just in what people pay attention to; it's also in what they systematically ignore. Designing for the ignored is a form of cognitive arbitrage. It is about seeing the pattern that the market has dismissed as noise, and building a system around that insight. This is the core of moving from marketing to market architecture.</ScrollParagraph>
      </Section>
    </article>
  );
}
