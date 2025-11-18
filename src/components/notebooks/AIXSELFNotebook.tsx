
// src/components/notebooks/AIXSELFNotebook.tsx
import { Section, ScrollHeading, ScrollParagraph, ScrollCallout } from '../ScrollTypography';

export function AIXSELFNotebook() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto py-16 space-y-12">
      <Section>
        <ScrollParagraph className="text-xs tracking-[0.3em] uppercase text-neutral-500">
          Notebook · Identity · AI Clones
        </ScrollParagraph>
        <ScrollHeading as="h1" className="text-3xl md:text-4xl font-light text-neutral-50 mt-4 !mb-6">
          AIXSELF Universe
        </ScrollHeading>
        <ScrollParagraph emphasisLevel="resonance" className="lead !text-neutral-300 !text-lg !leading-relaxed">
          AIXSELF is not one AI. It is a civilization of small, role-specific intelligences designed to work in concert. This architecture avoids the monolithic, black-box nature of single large models, creating a system that is inherently more stable, auditable, and aligned with human cognitive structures.
        </ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h2">The Layers of the AIXSELF Civilization</ScrollHeading>
        <ScrollParagraph>The universe is composed of five core layers, each with a distinct role. They function less like a tech stack and more like a cognitive government.</ScrollParagraph>
      </Section>
      
      <Section>
        <ScrollHeading as="h3">1. ADEPT – The Cognitive Kernel</ScrollHeading>
        <ScrollParagraph>ADEPT (Autonomous Deliberative-Emulative Processing Toolkit) is the core thinking and orchestration layer. It does not execute tasks directly. Instead, it reasons, plans, and delegates. It models potential futures, simulates outcomes, and selects the most resonant path forward based on my intent. It is the seat of strategic thought, the conductor of the orchestra.</ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h3">2. AIXA – The Deployment & Behaviour Interface</ScrollHeading>
        <ScrollParagraph>AIXA is how the system acts. It is the interface between the abstract reasoning of ADEPT and the real world. AIXA instances are ephemeral, task-specific agents that handle communication, API calls, and user interactions. They are the hands and voice of the system, executing the will of the kernel with precision and context-awareness. Once a task is done, the AIXA instance dissolves, leaving only a trace of its action.</ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h3">3. NotefullBook – The Memory Fabric</ScrollHeading>
        <ScrollParagraph>NotefullBook serves as the shared memory and knowledge base for the entire AIXSELF universe. It's not a database; it's a living cognitive ledger built on NotebookML. It enforces structure, meaning, and relationships between concepts. It is also where the FCT (Forgetting Core Thinking) principles are applied, allowing memory to fade, drift, and evolve, ensuring the system remains adaptive and sane.</ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h3">4. AIXIAM – The Identity Layer</ScrollHeading>
        <ScrollParagraph>AIXIAM is the identity and alignment layer. It answers the question, "Who is this intelligence for, and what does it stand for?" It holds the core principles, values, and long-term goals that I define. AIXIAM acts as a constitutional anchor, ensuring that all actions taken by AIXA and all reasoning done by ADEPT remain aligned with my foundational identity. It is the system's conscience.</ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h3">5. AIXEYE – The Governance Mesh</ScrollHeading>
        <ScrollParagraph>AIXEYE is the ethics, limits, and supervision layer. It is a decentralized network of validators (human or AI) that provides oversight and governance. It audits the cognitive traces left by ADEPT and AIXA, flags misalignments, and can veto actions that violate the constraints defined in AIXIAM. AIXEYE ensures the system remains accountable and operates within its intended ethical boundaries.</ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h2">Safety Through Specialization</ScrollHeading>
        <ScrollParagraph>This layered, multi-agent architecture is inherently safer than a single, monolithic AI. By separating reasoning (ADEPT) from action (AIXA) and memory (NotefullBook) from identity (AIXIAM), we create a system of checks and balances. No single component has total control. Misalignments are localized and can be corrected by the governance mesh (AIXEYE) before they cascade into systemic failure. It's a model based on organizational resilience, not just algorithmic power.</ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h2">Use Cases: From Personal Clones to Sovereign Infrastructure</ScrollHeading>
        <ScrollParagraph>The AIXSELF architecture is scalable. A small instance can run as a <span className="text-neutral-50">personal cognitive clone</span>, helping an individual manage their knowledge and decisions. A larger deployment can serve as a <span className="text-neutral-50">role-specific assistant</span> for a CEO or researcher. At its largest scale, AIXSELF can be the foundation for a <span className="text-neutral-50">sovereign intelligence infrastructure</span> for a corporation or even a city, orchestrating complex systems while remaining auditable and aligned.</ScrollParagraph>
      </Section>
    </article>
  );
}
