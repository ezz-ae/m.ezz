
// src/components/notebooks/NotefullBookNotebook.tsx
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

export function NotefullBookNotebook() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto py-16 space-y-12">
      <Section>
        <p className="text-xs tracking-[0.3em] uppercase text-neutral-500">
          Notebook · OS · Language
        </p>
        <h1 className="text-3xl md:text-4xl font-light text-neutral-50 mt-4 !mb-6">
          NotefullBook: An Intelligence OS
        </h1>
        <p className="lead !text-neutral-300 !text-lg !leading-relaxed">
          NotefullBook is not another note-taking app. It is a <span className="text-neutral-50">Personal Intelligence Engine</span> and an <span className="text-neutral-50">Artificial Simplification Engine</span>. It's an operating system for your mind, built on the premise that thinking is not about storing information, but about structuring it.
        </p>
      </Section>

      <Section>
        <h2>The Cognitive Problem: Files vs. Thoughts</h2>
        <p>The digital world forces us into an unnatural cognitive model: a hierarchy of files and folders. But the human mind doesn't work that way. We don't think in nested directories. We think in <span className="text-neutral-50">sessions, patterns, questions, and associations</span>. The friction between our fluid, associative thought process and the rigid structure of file systems is a major source of cognitive load.</p>
      </Section>

      <Section>
        <h2>NotebookML: A Language for Thought</h2>
        <p>NotebookML is the language that powers NotefullBook. It is a superset of Markdown designed to capture not just text, but logic, memory, and relationships. Its core principle is merging `Markdown × Logic × Memory` into a single, human-readable artifact.</p>
        <p>Principles of NotebookML:</p>
        <ul>
          <li><strong>One Truth:</strong> A single, auditable source for a piece of knowledge or a decision.</li>
          <li><strong>Deterministic:</strong> The same notebook will always produce the same output, making it reliable.</li>
          <li><strong>Auditable:</strong> Every conclusion can be traced back to its premises, creating a "cognitive ledger."</li>
          <li><strong>Portable:</strong> As plain text, it is not locked into any platform.</li>
        </ul>
        <pre className="!bg-white/5 !text-neutral-300">
{`@SOP(name="Client Onboarding")

# Step 1: Initial Contact
- [ ] Receive inquiry via {{channel}}.
- [ ] Send automated welcome email.

# Step 2: Qualification
@DECISION(if={{inquiry.budget}} > 5000)
  - Route to senior consultant.
@ELSE
  - Route to junior consultant.
@END

# Step 3: Follow-up
- [ ] Schedule discovery call within {{2_days}}.
`}
        </pre>
      </Section>
      
      <Section>
        <h2>The Closed Cognitive Loop</h2>
        <p>A NotefullBook notebook is not a static document; it's a living entity that refines itself. It operates on a closed cognitive loop:</p>
        <p className="text-center font-mono tracking-widest text-sm text-neutral-400">Input → Reason → Decision → Trace → Learn → Re-input</p>
        <p>The system takes in new information, applies logic, makes a decision, records the entire reasoning path, and then uses that outcome to update its own rules. The notebook learns from its own operations, becoming smarter and more aligned over time.</p>
      </Section>

      <Section>
        <h2>The Cognitive Ledger</h2>
        <p>Every significant operation within a NotefullBook creates a hash-chained entry in a cognitive ledger. This is a cryptographic proof of the reasoning process. It provides an unbreakable audit trail, which is critical for applications in legal, medical, and financial domains where trust and accountability are non-negotiable. It proves not just *what* was decided, but *how* and *why*.</p>
      </Section>

      <Section>
        <h2>Positioning: A Mind That Thinks With You</h2>
        <p>NotefullBook is not competing with note-taking apps like Notion or Evernote. Those are storage systems. NotefullBook is a <span className="text-neutral-50">reasoning system</span>. It's a partner that can actively participate in your thought process, automate complex decisions, and create a verifiable record of your intelligence. It's a mind for your mind.</p>
      </Section>
    </article>
  );
}
