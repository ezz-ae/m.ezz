
// src/components/notebooks/RealEstateNotebook.tsx
import { motion } from 'framer-motion';

const Section: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
    >
        {children}
    </motion.section>
);

export function RealEstateNotebook() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto py-16 space-y-12">
      <Section>
        <p className="text-xs tracking-[0.3em] uppercase text-neutral-500">
          Notebook · DLDCHAIN · Mashroi · EBRAM
        </p>
        <h1 className="text-3xl md:text-4xl font-light text-neutral-50 mt-4 !mb-6">
          The Real Estate Intelligence OS
        </h1>
        <p className="lead !text-neutral-300 !text-lg !leading-relaxed">
          Real estate is not a collection of assets to be marketed. It is a city's primary legal, financial, and human system. My work in this field focuses on building a sovereign <span className="text-neutral-50">Real Estate Intelligence Operating System</span>—an institutional architecture for a city or country, not a startup pitch.
        </p>
      </Section>

      <Section>
        <h2>EBRAM: A Judicial Programming Language</h2>
        <p>EBRAM is a domain-specific language designed to program the entire lifecycle of a property. It handles rent, title transfer, inheritance, and multi-party disputes over a 1000-year timeline. It's not just a smart contract; it's a <span className="text-neutral-50">computable legal framework</span> that turns ambiguous legal clauses into deterministic, auditable code, resolving conflicts before they begin.</p>
      </Section>

      <Section>
        <h2>DXBTOKEN: Sovereign Tokenization</h2>
        <p>The concept is simple and powerful: 1 DXBTOKEN = 1 square foot of Dubai real estate, fully backed and redeemable. This is not speculative crypto. It is a sovereign instrument, managed through a city-level liquidity pool, that allows for fractional ownership and democratizes access to real estate as a stable asset class. It turns property from an illiquid asset into a fluid, divisible store of value.</p>
      </Section>

      <Section>
        <h2>MAKE: The Liquidity Engine</h2>
        <p>MAKE is the decentralized market maker and liquidity engine for DXBTOKEN. It allows property owners to stake their tokenized assets into liquidity pools, earning fees and enabling a new class of financial products built on real estate. This is not "DeFi hype." It is the creation of a <span className="text-neutral-50">sovereign, non-speculative liquidity infrastructure</span> for a city's most valuable asset class.</p>
      </Section>

      <Section>
        <h2>Mashroi: Broker Governance Ecosystem</h2>
        <p>The real estate market is driven by brokers, yet the system lacks transparent governance. Mashroi is a performance-based ecosystem that registers every broker with a unique identity, tracks their performance on-chain, and governs their interactions. It replaces the opaque, relationship-based system with a transparent, merit-based one, aligning broker incentives with market health.</p>
      </Section>

      <Section>
        <h2>One Wallet: The Real Estate Operating Wallet</h2>
        <p>The One Wallet is the single interface for interacting with this entire OS. It's a real estate operating wallet that handles escrow, multi-signature payments, rental flows, and complex transactions defined in EBRAM. It's the user-facing layer of the entire sovereign infrastructure, simplifying complexity and providing a single point of truth for every participant.</p>
      </Section>

      <Section>
        <h2>Positioning: An Architecture for Nations</h2>
        <p>These components—DLDCHAIN, EBRAM, Mashroi, MAKE, and One Wallet—are not individual products. They are the integrated layers of a national-scale operating system for real estate. The goal is to replace the slow, opaque, and illiquid systems of the past with a transparent, fluid, and computationally trustable infrastructure for the future.</p>
      </Section>
    </article>
  );
}
