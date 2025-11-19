// src/components/notebooks/MarketingNotebook.tsx
import { Section, ScrollHeading, ScrollParagraph, ScrollCallout } from '../ScrollTypography';

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
          The research in marketing evolved from a simple observation: modern marketing is not about advertisements, impressions, or clicks. It is a form of applied cognitive science, or **behavioural architecture**. You are not selling a product; you are designing a cognitive pathway for a human being to decide to change themselves. The product is merely a token of that change.
        </ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h2">1. From Campaigns to Self-Sustaining Market Systems</ScrollHeading>
        <ScrollParagraph>
          A campaign is a temporary, high-energy spike; a system is a sustainable, self-regulating current. The work evolved from executing single-shot advertising initiatives to architecting holistic, self-sustaining ecosystems. In a domain like real estate, this meant moving beyond "selling a unit" to designing the entire market of developers, brokers, buyers, and financiers. The goal became to engineer a system where value flows naturally according to observable principles, rather than being pushed through expensive, inefficient advertising channels.
        </ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h2">2. Personalisation as a Trigger for Self-Recognition</ScrollHeading>
        <ScrollParagraph>
          Work in medical awareness campaigns was formative. The objective was not just "raising awareness" for a condition; it was building systems to help individuals recognize a latent pattern in their own lives and seek a solution. The content functioned as a mirror. The goal was not a sale, but a decision. This led to a core insight: the most powerful marketing does not create desire for an object, but creates a recognition of a need within the self. It is about presenting a signal so that it resonates with a pre-existing cognitive schema.
        </ScrollParagraph>
      </Section>
      
      <Section>
        <ScrollHeading as="h2">3. AIXSELF Alignment: Marketing as Cognitive Physics</ScrollHeading>
        <ScrollParagraph>
          This notebook demonstrates that the foundational laws of the AIXSELF Universe are not limited to AI. They are universal principles of cognitive systems, and therefore, they can be used to model and architect complex human systems like markets.
        </ScrollParagraph>
        <ul className="list-disc pl-5 space-y-4 mt-4">
          <li>
            <ScrollParagraph as="span">
              <strong className="text-neutral-200">The FCT Law of Frequency:</strong> A brand, a message, or a product only gains meaning through repetition. In marketing terms, this is the Law of Frequency. Consistent exposure creates familiarity, which creates recognition, which ultimately creates the "meaning" of a brand in a consumer's mind. The "rendering speed of reality" that FCT describes is, in this context, the speed at which a market message becomes an accepted part of the environment.
            </ScrollParagraph>
          </li>
          <li>
            <ScrollParagraph as="span">
              <strong className="text-neutral-200">Resonance as Market Fit:</strong> FCT's Resonance Engine, which translates frequency into meaning, is the perfect model for product-market fit. A marketing message can be broadcast at high frequency, but if it does not <strong className="text-orange-400">resonate</strong> with the audience's existing cognitive schemas, emotional tags, and survival needs, it will be rejected as noise. Successful marketing is an act of achieving resonance between a product's signal and the market's internal state.
            </ScrollParagraph>
          </li>
          <li>
            <ScrollParagraph as="span">
              <strong className="text-neutral-200">The Schema Intelligence Network (SIN) for Market Analysis:</strong> The SIN learns from behavioral truths (frequency, return-rate, drift) without analyzing private content. This is the exact model for an ethical, effective market intelligence system. Instead of surveilling users, one can understand the market by observing behavioral signals: what problems do users keep returning to? Which solutions do they drift away from? These patterns reveal the "unvalued" spaces and quiet needs that represent the greatest market opportunities.
            </ScrollParagraph>
          </li>
        </ul>
      </Section>

      <Section>
        <ScrollHeading as="h2">4. Human Value Perception: The Power of the "Unvalued"</ScrollHeading>
        <ScrollParagraph>
          The market often fixates on high-value, high-frequency signals: luxury, scarcity, hype. But true systemic intelligence lies in understanding the entire spectrum of value. The most significant opportunities are often in the "unvalued" spaces—the ignored problems, the overlooked efficiencies, the quiet, persistent needs that the SIN is designed to detect.
        </ScrollParagraph>
        <ScrollCallout label="Cognitive Arbitrage">
          Value is not just in what people pay attention to; it's also in what they systematically ignore. Designing for the ignored is a form of cognitive arbitrage. It is about seeing the pattern that the market has dismissed as noise, and architecting a system around that insight. This is the core of moving from marketing to market architecture.
        </ScrollCallout>
      </Section>
    </article>
  );
}
