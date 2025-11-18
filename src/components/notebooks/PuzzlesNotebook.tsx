
// src/components/notebooks/PuzzlesNotebook.tsx
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

export function PuzzlesNotebook() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto py-16 space-y-12">
      <Section>
        <p className="text-xs tracking-[0.3em] uppercase text-neutral-500">
          Notebook · BruteBrains · ChainCrack
        </p>
        <h1 className="text-3xl md:text-4xl font-light text-neutral-50 mt-4 !mb-6">
          Puzzles as a Laboratory for Intelligence
        </h1>
        <p className="lead !text-neutral-300 !text-lg !leading-relaxed">
          Puzzles are not a game. They are a controlled environment for studying search, risk, and cognitive bias. By attempting to solve complex, well-defined problems like finding a specific Bitcoin address, you can observe the mechanics of intelligence, pattern recognition, and failure in their purest form.
        </p>
      </Section>

      <Section>
        <h2>Bitcoin Puzzles: Vanity, Structure, and Bias</h2>
        <p>The search for specific Bitcoin addresses—so-called "vanity" addresses or those within structured ranges—is a perfect testbed. It's a search for a needle in a cosmic haystack. This work revealed how human creator bias imprints itself even on supposedly random data. We look for patterns, and in doing so, we leave them behind for others to find.</p>
      </Section>

      <Section>
        <h2>ChainCrack AI: Exposing Weak Patterns</h2>
        <p>ChainCrack AI was built to demonstrate a principle: any pattern, no matter how clever, is an attack surface. The tool analyzes blockchain data to sniff out weak brainwallets, predictable entropy, and other user-generated vulnerabilities. The purpose was not to steal, but to prove that <span className="text-neutral-50">true security comes from verifiable randomness, not from personal creativity</span>. It’s a harsh lesson in cognitive security.</p>
      </Section>

      <Section>
        <h2>BruteBrains & The Ticket Model</h2>
        <p>BruteBrains reframes large-scale computational problems as a marketplace. Instead of one entity trying to solve a puzzle, the system sells "tickets" representing a portion of the search space. This distributes the workload and the potential reward. It turns a monolithic task into a decentralized, incentivized ecosystem. It's a model for collaborative, competitive intelligence at scale.</p>
      </Section>

      <Section>
        <h2>Lessons from the Search</h2>
        <p>This work with puzzles has taught me critical lessons that apply to all intelligence systems:</p>
        <ul>
          <li><strong>Intelligence is Search:</strong> At its core, all problem-solving is a search through a possibility space.</li>
          <li><strong>Bias is a Signal:</strong> Human bias, which we try to eliminate, is also a signal that can be exploited or understood.</li>
          <li><strong>Failure is Information:</strong> Every failed attempt to solve a puzzle refines the search space. Failure is not wasted effort; it is negative information that guides the next step.</li>
          <li><strong>The Map is Not the Territory:</strong> Our models of a problem are always simpler than the problem itself. Puzzles force you to confront that gap.</li>
        </ul>
      </Section>
    </article>
  );
}
