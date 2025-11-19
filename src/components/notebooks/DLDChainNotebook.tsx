// src/components/notebooks/DLDChainNotebook.tsx
import { Section, ScrollHeading, ScrollParagraph, ScrollCallout } from '../ScrollTypography';

export function DLDChainNotebook() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto py-16 space-y-12">
      <Section>
        <ScrollParagraph className="text-xs tracking-[0.3em] uppercase text-neutral-500">
          Notebook · DLDCHAIN
        </ScrollParagraph>
        <ScrollHeading as="h1" className="text-3xl md:text-4xl font-light text-neutral-50 mt-4 !mb-6">
          DLDCHAIN: The Sovereign Blockchain for Real Estate
        </ScrollHeading>
        <ScrollParagraph emphasisLevel="resonance" className="lead !text-neutral-300 !text-lg !leading-relaxed">
          DLDCHAIN is the architectural blueprint for a national-scale, sovereign blockchain designed exclusively for the real estate sector. It is not a speculative cryptocurrency platform; it is a foundational infrastructure layer for a city or country, built to bring computational trust, transparency, and liquidity to the world's largest asset class.
        </ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h2">The Core Problem: Illiquidity and Opacity</ScrollHeading>
        <ScrollParagraph>
          Traditional real estate markets are notoriously inefficient. They are plagued by opaque processes, slow and expensive transactions, fragmented data, and a fundamental lack of liquidity. A property, one of the most significant stores of value, remains a locked asset, difficult to divide, trade, or leverage. DLDCHAIN was designed to solve this by creating a single, unified, and computationally trustable source of truth.
        </ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h2">Architectural Vision: A Real Estate Intelligence OS</ScrollHeading>
        <ScrollParagraph>
          DLDCHAIN is the foundational layer of a complete Real Estate Intelligence Operating System. It is the base protocol upon which other specialized systems are built, each handling a different aspect of the market ecosystem. These include:
        </ScrollParagraph>
        <ul className="list-disc pl-5 space-y-2">
          <ScrollParagraph as="li"><strong className="text-neutral-200">EBRAM:</strong> A judicial programming language for encoding complex property laws and contracts.</ScrollParagraph>
          <ScrollParagraph as="li"><strong className="text-neutral-200">DXBTOKEN:</strong> A sovereign tokenization standard where 1 token equals 1 square foot of property.</ScrollParagraph>
          <ScrollParagraph as="li"><strong className="text-neutral-200">MAKE:</strong> A decentralized market maker and liquidity engine for tokenized real estate assets.</ScrollParagraph>
          <ScrollParagraph as="li"><strong className="text-neutral-200">Mashroi:</strong> A transparent governance ecosystem for real estate brokers and agents.</ScrollParagraph>
          <ScrollParagraph as="li"><strong className="text-neutral-200">One Wallet:</strong> A unified operating wallet for all real estate transactions.</ScrollParagraph>
        </ul>
        <ScrollParagraph>
            DLDCHAIN provides the secure, immutable ledger that allows all these components to interact seamlessly and without the need for traditional intermediaries.
        </ScrollParagraph>
      </Section>

      <Section>
        <ScrollCallout label="Core Principle">
          To replace the slow, opaque, and illiquid systems of the past with a transparent, fluid, and computationally trustable infrastructure for the future.
        </ScrollCallout>
      </Section>

      <Section>
        <ScrollHeading as="h2">Conclusion: An Architecture for Nations</ScrollHeading>
        <ScrollParagraph>
          DLDCHAIN is more than a technology; it is a governance model. It provides a framework for nations to modernize their most critical market, unlocking immense value, improving efficiency, and creating a more transparent and equitable system for all participants. It is institutional-grade infrastructure designed for societal-scale impact.
        </ScrollParagraph>
      </Section>
    </article>
  );
}
