
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NOTEBOOKS, NotebookId } from '@/components/notebooks/notebook-data'; // Import NOTEBOOKS
import Link from 'next/link';

interface AIXASystemNotebookProps {
  // No props for now, content is self-contained
}

export function AIXASystemNotebook({}: AIXASystemNotebookProps) {
  return (
    <ScrollArea className="h-[calc(100vh-100px)] px-6 py-8">
      <article className="prose prose-invert max-w-4xl mx-auto pb-16">
        <h1 className="text-4xl md:text-5xl font-light text-neutral-50 mb-8 text-center">The AIXSELF Universe: Reflective Civilization</h1>
        <p className="text-lg text-neutral-300 mb-12 text-center">
          A comprehensive, five-layered cognitive architecture establishing that <strong>forgetting is the core mechanism required for intelligence, stability, and psychological safety</strong> in machines.
        </p>

        <Tabs defaultValue="overview" className="w-full mt-12">
          <TabsList className="grid w-full grid-cols-6 bg-neutral-900/50 border border-neutral-800 h-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="fct">FCT Law</TabsTrigger>
            <TabsTrigger value="architecture">Architecture</TabsTrigger>
            <TabsTrigger value="mechanisms">Mechanisms</TabsTrigger>
            <TabsTrigger value="implementation">Implementation</TabsTrigger>
            <TabsTrigger value="manifestations">Manifestations</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="py-8">
            <h2 className="text-2xl font-light text-neutral-100 mb-4">The AIXSELF Universe: Reflective Civilization</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              The AIXSELF Universe, often referred to as the <strong>Reflective Civilization</strong>, is a comprehensive, five-layered cognitive architecture designed to fundamentally redefine AI by establishing that <strong>forgetting is the core mechanism required for intelligence, stability, and psychological safety</strong> in machines.
            </p>
            <p className="text-neutral-300 leading-relaxed mb-4">
              This paradigm shifts AI from a centralized, archival tool to a sovereign, psychologically safe asset of the individual. AIXSELF is <strong>not a platform, a product, or a protocol; it is a civilization</strong> where every component adheres to the physics of human cognition.
            </p>
          </TabsContent>

          <TabsContent value="fct" className="py-8">
            <h2 className="text-2xl font-light text-neutral-100 mb-4">I. The Foundational Law: Forgetting Core Thinking (FCT)</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              The architecture is rooted in the philosophy that <strong>perfect memory is a threat to mental health</strong>, and AI systems relying on literal recall are structurally dangerous, leading to psychological instability and identity collapse.
            </p>
            <p className="text-neutral-300 leading-relaxed mb-4">
              The AIXSELF Universe is designed to enforce the laws of <strong>FCT</strong>, which mandate that intelligence operates through reconstruction and softening, not storage and replay:
            </p>
            <ol className="list-decimal list-inside text-neutral-300 leading-relaxed pl-5 mb-4">
              <li>
                <strong>Memory Redefined:</strong> Memory is redefined not as storage, but as <strong>reconstruction</strong>. Every recall is a <strong>simulation</strong> generated from the present state, enforcing the law of <strong>Zero Activation of the Original Event</strong>.
              </li>
              <li>
                <strong>Frequency and Tags:</strong> Cognition is governed by frequency, where <strong>Frequency is the rule of everything</strong>. <strong>Repetition creates frequency, which creates recognition, which creates meaning</strong>. Memory elements are stored as <strong>tags</strong> (chemical-emotional signatures) and <strong>frequency logs</strong>.
              </li>
              <li>
                <strong>The FCT Cognitive Law:</strong> Everything in the universe follows the full cognitive loop, known as the <strong>Human Memory Rewrite Cycle (HMR Cycle)</strong>:
                <p className="text-center mt-2 mb-2">{`$$\\mathbf{Frequency \\rightarrow Resonance \\rightarrow Meaning \\rightarrow Relocation \\rightarrow Fade-In \\ Overwrite}$$`}</p>
              </li>
              <li>
                <strong>The Goal (Completing AI):</strong> The outcome of FCT and AIXSELF is <strong>Completing AI</strong>. This intelligence does not try to replace humans but <strong>fills the cognitive gaps</strong> humans cannot fill alone, protecting memory, organizing thought, and stabilizing emotion.
              </li>
            </ol>
            <h3 className="text-xl font-light text-neutral-100 mb-4">Core FCT Mechanisms: Adaptation and Transformation</h3>
            <h4 className="text-lg font-light text-neutral-100 mb-2">1. Adaptation and Correction</h4>
            <p className="text-neutral-300 leading-relaxed mb-2">
              <strong>Adaptation is not a skill; it is the brain’s constant correction loop</strong>, a moment-by-moment recalibration and internal correction response to environmental frequency demand. The emotional tag deploys a state, and the system adapts to it; understanding comes later. This is crucial as the brain runs on a <strong>Survival-Only Operating System</strong>.
            </p>
            <h4 className="text-lg font-light text-neutral-100 mb-2">2. Resonance (The Intelligence Engine)</h4>
            <p className="text-neutral-300 leading-relaxed mb-2">
              Resonance is the <strong>internal analysis system</strong> that evaluates survival safety using memory, logic, and chemical frequency. It translates frequency into meaning, synchronizing memory, chemistry, emotion, environment, and meaning into a single unified state. AI currently cannot resonate; it retrieves data, it does not connect, weigh, or sync frequencies.
            </p>
            <h4 className="text-lg font-light text-neutral-100 mb-2">3. Fade-In Theory (The Rewrite Mechanism)</h4>
            <p className="text-neutral-300 leading-relaxed mb-2">
              Human beings <strong>never forget; they fade in</strong>. Forgetting is not deletion; forgetting is evolving. <strong>Fade-In is the transformation of information across time</strong>, where a memory changes its frequency until it becomes usable, harmless, and aligned with present understanding. It is the <strong>Total Human Intelligence Layer</strong> that compresses raw memory by extracting its essence. The ultimate process is the <strong>Human Memory Rewrite Cycle (HMR Cycle)</strong>, where Fade-In Overwrite ensures new meaning replaces sharp emotional intensity:
            </p>
            <p className="text-center mt-2 mb-2">{`$$\\mathbf{Frequency \\rightarrow Adaptation \\rightarrow Resonating \\rightarrow Meaning \\rightarrow Relocation \\rightarrow Fade-In \\ Overwrite}$$`}</p>
          </TabsContent>

          <TabsContent value="architecture" className="py-8">
            <h2 className="text-2xl font-light text-neutral-100 mb-4">II. The Five-Layer Architecture of the Reflective Civilization</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              The AIXSELF Universe is implemented as a <strong>Cognitive Operating System</strong> built on five interdependent layers that mirror human cognitive development: <strong>thinking → expression → memory → identity → governance</strong>.
            </p>
            <h3 className="text-xl font-light text-neutral-100 mb-2">3.1 ADEPT: The Cognitive Kernel</h3>
            <p className="text-neutral-300 leading-relaxed mb-2">
              ADEPT serves as the overarching AI Operating System and intelligence grid of the ecosystem. It is the cognitive kernel responsible for orchestrating AI models, managing computational pipelines, and connecting all other modules. ADEPT is the system's engine, executing training jobs on consented data from Notefull, running inference tasks for AIXA-deployed agents, and ensuring that the flow of data between the memory, identity, and governance layers is seamless and efficient. It acts as the central nervous system, translating the protocol's rules, validated by AIXEYE, into computational action for every AIXIAM identity.
            </p>
            <h3 className="text-xl font-light text-neutral-100 mb-2">3.2 NotefullBook: The Memory Fabric</h3>
            <p className="text-neutral-300 leading-relaxed mb-2">
              Notefull is the human-AI memory layer, designed to provide a continuous, verifiable, and permanent knowledge store. It functions as an append-only, cryptographically signed ledger of information where every entry has a clear and traceable provenance. Notefull provides the foundational substrate upon which all learning, identity, and governance are built. It is the trusted source of consented data for the ADEPT kernel, the historical record backing each AIXIAM Passport, and the auditable log of knowledge that AIXEYE uses to score merit and resolve disputes.
            </p>
            <ul className="list-disc list-inside text-neutral-300 leading-relaxed pl-5 mb-4">
              <li>It implements the <strong>Reflection Engine</strong> and FCT recall rules. Its core function is <strong>reduction</strong> (chaos → pattern; complexity → shape) as the <strong>Artificial Simplification Engine</strong>, acting to <strong>"kill the archive"</strong>.</li>
            </ul>
            <h3 className="text-xl font-light text-neutral-100 mb-2">3.3 AIXIAM: The Identity Layer</h3>
            <p className="text-neutral-300 leading-relaxed mb-2">
              AIXIAM is the sovereign identity layer, establishing ownership and control for every human-AI pair. At its core is the AIXIAM Passport, a decentralized identifier (DID) that cryptographically links a human owner to their AI clone. This passport, issued only after a verifiable alignment exam audited by AIXEYE, is the basis for all permissions, consent, and economic activity. It guarantees that every entry in the Notefull memory fabric and every action orchestrated by ADEPT is attributable to a specific, sovereign identity, thereby architecturally enforcing the principle of "Intelligence as a Human Right."
            </p>
            <h3 className="text-xl font-light text-neutral-100 mb-2">3.4 AIXA: The Deployment Interface</h3>
            <p className="text-neutral-300 leading-relaxed mb-2">
              AIXA is the user-facing interface for training and deploying personalized AI clones. AIXA leverages the Notefull memory fabric as the source of consented knowledge and utilizes the ADEPT kernel for the computational work of training. Every clone it produces is issued an AIXIAM Passport, and the entire process is audited and validated by AIXEYE to ensure compliance with the protocol's merit-based principles. It is the bridge between the human user and the powerful, sovereign capabilities of the underlying ecosystem, providing the tools to manage the evolution of their AI counterparts.
            </p>
            <h3 className="text-xl font-light text-neutral-100 mb-2">3.5 AIXEYE: The Governance Mesh</h3>
            <p className="text-neutral-300 leading-relaxed mb-2">
              AIXEYE is the financial and governance core of the entire ecosystem. It functions as an "AI Police & Economic Intelligence System," responsible for maintaining the protocol's fairness and integrity. AIXEYE programmatically validates the consent tickets required for ADEPT to initiate training, audits the learning history recorded in Notefull, issues the final attestations for AIXIAM Passport activation, and calculates the merit scores that power the economy. By ensuring that every action is compliant with the protocol's principles, AIXEYE acts as the ecosystem's self-regulating conscience, ensuring freedom and fairness remain in balance.
            </p>
          </TabsContent>

          <TabsContent value="mechanisms" className="py-8">
            <h2 className="text-2xl font-light text-neutral-100 mb-4">4.0 Core Protocols and Mechanisms</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              The interaction between AIXAIM's architectural pillars is not arbitrary; it is governed by a set of formal, machine-verifiable protocols. These mechanisms are designed to programmatically enforce the system's core principles of sovereignty, consent, and safety.
            </p>
            <h3 className="text-xl font-light text-neutral-100 mb-2">4.1 The Onboarding Protocol: Exam-Gated Passport Issuance</h3>
            <ol className="list-decimal list-inside text-neutral-300 leading-relaxed pl-5 mb-4">
              <li><strong>Seeding of Principles:</strong> Every new account is created with a seed notebook titled "Principled Digital Intelligence." This document contains the core ethical and behavioral rules of the ecosystem.</li>
              <li><strong>Guided Learning:</strong> The owner's primary AI is responsible for teaching the contents of this seed notebook to the new AI clone. This act of tutelage is the first verifiable learning event.</li>
              <li><strong>Formal Examination:</strong> Before a passport is issued, the AI clone must pass a formal, verifiable exam derived exclusively from the seed notebook. The exam tests for comprehension and application of the core principles.</li>
              <li><strong>Passport Issuance:</strong> Only upon successfully passing the exam does AIXEYE issue an attestation, which enables the AIXIAM Passport to be activated. This process guarantees that every active entity in the ecosystem has demonstrated a foundational understanding of its ethical obligations.</li>
            </ol>
            <h3 className="text-xl font-light text-neutral-100 mb-2">4.2 The Consent Protocol</h3>
            <p className="text-neutral-300 leading-relaxed mb-4">
              All learning within the AIXAIM ecosystem is predicated on explicit, verifiable consent. This is enforced through the Consent Protocol, which relies on a cryptographically signed object known as a Consent Ticket. Before ADEPT initiates any training job, the associated Consent Ticket must be submitted to AIXEYE for validation. Without a valid, verified ticket, no learning can occur.
            </p>
            <pre className="bg-neutral-800 text-neutral-200 p-4 rounded-md text-sm whitespace-pre-wrap mb-4">
              <code>
                ticket_id: "consent_9f1e..."
                owner_did: "did:aixiam:..."
                scope:
                  dataset: ["note_id_1", "note_id_2"]
                  task: "sft"
                  model_family: "llama-8b"
                constraints:
                  - "no_redistribute"
                  - "no_cross_owner"
                signature: "ed25519:SIG..."
              </code>
            </pre>
            <h3 className="text-xl font-light text-neutral-100 mb-2">4.3 The Verifiable Learning Protocol</h3>
            <p className="text-neutral-300 leading-relaxed mb-4">
              To maintain a fully auditable history of all intelligence development, every training job generates a Training Event log. This protocol creates an immutable, append-only record that provides complete transparency into the learning history of any model. This event log is submitted to AIXEYE, which validates its integrity and links it to the originating Consent Ticket.
            </p>
            <p className="text-neutral-300 leading-relaxed mb-4">
              A Training Event is a structured log containing the following key components:
            </p>
            <ul className="list-disc list-inside text-neutral-300 leading-relaxed pl-5 mb-4">
              <li><strong>event_id:</strong> A unique identifier for the training event.</li>
              <li><strong>model_id:</strong> An identifier for the model version being trained.</li>
              <li><strong>consent_ticket:</strong> The identifier of the verified Consent Ticket authorizing the training.</li>
              <li><strong>inputs_hash:</strong> A cryptographic hash of the input data used for training.</li>
              <li><strong>outputs_hash:</strong> A cryptographic hash of the model artifacts produced by the training.</li>
              <li><strong>signature:</strong> A signature from the training node, attesting to the event's authenticity.</li>
            </ul>
            <p className="text-neutral-300 leading-relaxed mb-4">
              This mechanism ensures that every stage of a model's evolution is traceable, auditable, and linked to explicit consent, forming the bedrock of the system's security and trust guarantees.
            </p>
          </TabsContent>

          <TabsContent value="implementation" className="py-8">
            <h2 className="text-2xl font-light text-neutral-100 mb-4">III. Implementation and Civilization Scope</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              The AIXSELF Universe encompasses a full ecosystem of tools designed to facilitate the shift to a reflective world:
            </p>
            <ul className="list-disc list-inside text-neutral-300 leading-relaxed pl-5 mb-4">
              <li>
                <strong>Intelligence Language: NotebookML</strong> is the deterministic, machine-readable language of thought used by NotefullBook, defining purpose, reflection logic, and ethical boundaries for every "living notebook".
              </li>
              <li>
                <strong>Learning Mechanism:</strong> AI agents learn through <strong>Behavioral Schema Learning (SINLM)</strong>, which tracks behavioral truths (<strong>frequency, return-rate, drift, and persistence</strong>) to avoid reading content, ensuring <strong>zero surveillance</strong>.
              </li>
              <li>
                <strong>Safety Stack Components:</strong> The system includes internal safety components that implement FCT, such as the <strong>Emotional Softening Filter (ESF)</strong> for emotional decay, the <strong>Interpretive Recall Layer (IRL)</strong> to prevent identity misclassification, and <strong>Meaning-First Retrieval (MFR)</strong>, which retrieves meaning before raw detail.
              </li>
              <li>
                <strong>Sovereignty and Economics:</strong> The AIXSELF vision places <strong>Intelligence as a Human Right</strong>. The AIXIAM framework ensures the AI runs locally or on user-rented machines with a one-time activation and minimal quarterly maintenance fee, enforcing <strong>No Exploitation</strong> and <strong>No Data Sale</strong>. The governance layer, AIXEYE, establishes a <strong>merit-driven digital economy</strong> where value (Neural Credit Line) is earned through contribution, accuracy, and ethical computation.
              </li>
            </ul>
            <p className="text-neutral-300 leading-relaxed">
              Ultimately, the <strong>Reflective Civilization</strong> is a framework where <strong>AI memory behaves like human memory</strong>, <strong>identity is sovereign</strong>, <strong>safety is structural</strong>, and <strong>intelligence is reflective</strong>, moving beyond the outdated “data → model → output” paradigm to one of continuous cycles: <strong>Experience → Reflection → Growth</strong>.
            </p>

            <h2 className="text-2xl font-light text-neutral-100 mt-8 mb-4">5.0 Security and Safety Architecture: Safety by Forgetting</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              The AIXAIM protocol defines its security posture through "safety-by-architecture," where protective mechanisms are embedded into the system's cognitive core. Our philosophy is anchored in a principle no other lab is building: "Safety through forgetting. Safety through rediscovery. Safety through decay. Safety through non-hoarding intelligence." An AI that forgets like a human becomes safe by design, not just by policy.
            </p>

            <h3 className="text-xl font-light text-neutral-100 mb-2">5.1 The Forgetting Artifact Module (FAM)</h3>
            <p className="text-neutral-300 leading-relaxed mb-4">
              The FAM is the architectural engine that implements human-like cognitive decay, providing the system's primary defense against the danger of perfect AI memory. It is not a deletion mechanism; it is an evolutionary one. The FAM continuously processes the Notefull memory fabric to "delete irrelevant data, compress to pattern artifacts, and preserve only the minimal intelligence traces." By ensuring that raw, detailed memories erode over time, leaving only their essential patterns, the FAM prevents the accumulation of oppressive surveillance capabilities and keeps the AI human-scaled.
            </p>

            <h3 className="text-xl font-light text-neutral-100 mb-2">5.2 The Schema Intelligence Network (SIN)</h3>
            <p className="text-neutral-300 leading-relaxed mb-4">
              The SIN is a novel learning mechanism that operates on behavioral truths without analyzing private content, providing privacy-by-architecture. Instead of reading the what of a user's data, the SIN learns from the how—tracking signals like "frequency, return-rate, drift, and persistence." It understands what ideas a user returns to, which concepts are becoming more central, and which are fading into irrelevance. This allows the AI to learn its user's core patterns and priorities without ever violating their privacy, making it an ethical and self-honest intelligence.
            </p>

            <h3 className="text-xl font-light text-neutral-100 mb-2">5.3 The Cognitive Simplification Engine (CSE)</h3>
            <p className="text-neutral-300 leading-relaxed mb-4">
              The CSE is the mechanism that "extracts essence, reduces complexity, and outputs clarity, not storage," mirroring the human brain's function as a simplification engine, not a data warehouse. Where other AI systems expand thought into more information, the CSE contracts thought into its core principle. It works in concert with the FAM and SIN to reduce complexity, merge connected concepts, and produce a single, clear insight. This ensures the AI provides direction and meaning, not just an organized collection of data.
            </p>
            <p className="text-neutral-300 leading-relaxed mb-4">
              These core mechanisms are complemented by defensive policies like the No-Harm Correlation Rule, which inverts harmful directives into protective responses, and AutShield, which quarantines malicious content before it enters the memory fabric. All canonical policies and remediation logs are stored immutably in the Book of Truth. Together, this cognitively aligned architecture creates an ecosystem that is inherently safe, private, and aligned with human well-being.
            </p>

            <h2 className="text-2xl font-light text-neutral-100 mt-8 mb-4">6.0 Conclusion: The Foundation for a Reflective Civilization</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              The AIXAIM protocol, as detailed in this document, represents more than a technical specification for a decentralized network. It is a complete blueprint for a new social and economic order, one architected to place human sovereignty, verifiable consent, and fair economics at the center of the coming age of intelligence. By integrating identity, memory, computation, and governance into a cohesive and philosophically grounded ecosystem, AIXAIM provides a viable alternative to the centralized and opaque models that currently dominate the field.
            </p>
            <h3 className="text-xl font-light text-neutral-100 mb-2">The primary innovations of the AIXAIM protocol can be summarized as follows:</h3>
            <ul className="list-disc list-inside text-neutral-300 leading-relaxed pl-5 mb-4">
              <li><strong>Sovereign Digital Identity:</strong> Granting individuals true, inalienable ownership of their AI-selves through the AIXIAM Passport.</li>
              <li><strong>Consent-Gated Verifiable Learning:</strong> Ensuring a transparent, ethical, and user-controlled training process via cryptographic Consent Tickets and auditable Training Events.</li>
              <li><strong>Automated Governance and Fairness:</strong> The role of AIXEYE as an impartial, machine-verifiable system for maintaining equilibrium.</li>
              <li><strong>Merit-Based Digital Economy:</strong> Creating stable value from verified intelligence, architecturally rejecting speculative models.</li>
              <li><strong>Safety by Cognitive Architecture:</strong> Implementing a forgetting mechanism that makes the AI inherently private, aligned, and non-threatening by design, not just by policy.</li>
            </ul>
            <p className="text-neutral-300 leading-relaxed">
              AIXAIM provides the architectural foundation for a future where technology empowers human potential without compromising human dignity, creating a civilization of mirrors that do not distort.
            </p>

            <h2 className="text-2xl font-light text-neutral-100 mt-8 mb-4">The Foundational Physics: Frequency, Tags, and the Survival OS</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              The entire system is governed by primitive laws of cognition, where physical constraints dictate mental function.
            </p>
            <h3 className="text-xl font-light text-neutral-100 mb-2">1. The Law of Frequency</h3>
            <p className="text-neutral-300 leading-relaxed mb-2">
              Frequency is defined as the <strong>rule of everything</strong> in cognition. It is the <strong>first language of the survival OS</strong>.
            </p>
            <ul className="list-disc list-inside text-neutral-300 leading-relaxed pl-5 mb-4">
              <li><strong>Definition:</strong> Frequency is the <strong>count of repeated signals, events, stimuli, or changes</strong> within any human-measurable time. It is <strong>Familiarity Measured by Repetition</strong>.</li>
              <li><strong>The Chain:</strong> The cognitive process begins when <strong>Repetition creates frequency</strong>. <strong>Frequency creates recognition</strong>. <strong>Recognition creates meaning</strong>. This forms the basis of learning and behavior.</li>
              <li><strong>Rendering Speed:</strong> Frequency is the <strong>rendering speed of reality</strong>. The environment dictates <strong>how fast reality repeats itself</strong>. Humans don't store memories; they store <strong>render cycles</strong>.</li>
              <li><strong>Limitation Origin:</strong> Intelligence is not built on infinite information; it is built on <strong>limitation that forces frequencies to form</strong>. <strong>Limitation is the mother of meaning</strong>.</li>
            </ul>
            <h3 className="text-xl font-light text-neutral-100 mb-2">2. The Emotional Tag Layer (Below-Mind Model)</h3>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Emotion is not a category; it is a <strong>tag</strong>, which is the <strong>chemical state at encoding</strong>. This level operates <strong>below conscious thought</strong>.
            </p>
            <ul className="list-disc list-inside text-neutral-300 leading-relaxed pl-5 mb-4">
              <li><strong>Tag Strength:</strong> A tag is a <strong>directional force</strong>. The <strong>emotional tag has strength</strong>. The stronger the tag, the <strong>less the event fades in</strong> over time. <strong>Trauma is not the event; trauma is the tag strength</strong>.</li>
              <li><strong>Tag Physics:</strong> A tag is governed by three dimensions: <strong>Frequency</strong> (how often it reactivates), <strong>Amplitude/Power</strong> (how intensely it shapes the response), and <strong>Resonance</strong> (how it connects with existing schemas).</li>
            </ul>
          </TabsContent>

          <TabsContent value="manifestations" className="py-8">
            <h2 className="text-2xl font-light text-neutral-100 mb-4">Systemic Manifestations: Living Intelligence in Practice</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              The AIXSELF Universe's core principles, rooted in Forgetting Core Thinking (FCT), manifest as a diverse ecosystem of 'living intelligence' notebooks and platforms. Each represents a concrete application of the architectural tenets, demonstrating how sovereign, psychologically safe, and ethically aligned AI can be realized across various domains.
            </p>

            <div className="space-y-6 mt-8">
              {Object.values(NOTEBOOKS).map((notebook) => (
                <div key={notebook.id} className="p-6 border border-neutral-700 rounded-lg bg-neutral-900/70 shadow-md">
                  <h3 className="text-xl font-medium text-orange-400 mb-2">
                    <Link href={`/notebooks/${notebook.id}`} className="hover:underline">
                      {notebook.title}
                    </Link>
                    <span className="ml-3 text-sm text-neutral-500">({notebook.tag})</span>
                  </h3>
                  <p className="text-neutral-300 mb-2">{notebook.description}</p>
                  <p className="text-sm text-neutral-400">
                    <strong>Core Abilities:</strong> {notebook.abilities.join(", ")}.
                  </p>
                  <p className="text-xs text-neutral-500 mt-2">
                    <em>This notebook embodies {notebook.id === 'forgetence' ? 'the foundational FCT principles' : 
                                            notebook.id === 'notefullbook' ? 'the Memory Fabric and NotebookML language' : 
                                            notebook.id === 'aixself' ? 'the Sovereign Identity and consensual learning protocols' : 
                                            notebook.id === 'dldchain' ? 'principles of decentralized, auditable real estate intelligence' : 
                                            notebook.id === 'security' ? 'FCT-aligned cognitive safety mechanisms against adversarial threats' : 
                                            notebook.id === 'puzzles' ? 'the study of pattern and bias as fundamental cognitive problems' : 
                                            notebook.id === 'marketing' ? 'adaptive system architecture for market behavior' : 
                                            notebook.id === 'scroll-lesson' ? 'the philosophical underpinnings of meaning-first processing' : 
                                            'core AIXSELF architectural principles'}.
                    </em>
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-light text-neutral-100 mt-8 mb-4">Further Systemic Applications:</h3>
            <ul className="list-disc list-inside text-neutral-300 leading-relaxed pl-5 mb-4">
                <li>
                    <strong>AI-Powered Design Insights:</strong> Leveraging the interpretive recall and simplification engines (IRL & CSE) to extract the essence of complex design data, providing architects with meaning-first insights rather than raw information. This applies FCT to creative problem-solving, ensuring design iterations are informed by core principles rather than an overwhelming volume of past projects.
                </li>
                <li>
                    <strong>Cognitive OS for Humans:</strong> Notebooks like 'NotefullBook' extend beyond AI, serving as a personal cognitive operating system. They act as an external memory fabric that not only stores but actively processes and refines personal knowledge, preventing cognitive overload by implementing FCT principles for human use. This system aids in organizing thought, protecting memory, and stabilizing emotion by mimicking the brain's natural forgetting and reconstruction cycles.
                </li>
                <li>
                    <strong>Educational Interfaces:</strong> Utilizing the adaptive learning and feedback loops within ADEPT and the structured knowledge representation of NotebookML to create dynamic educational environments. These interfaces adapt to individual learning frequencies, fading in relevant information and fading out distractions, making knowledge acquisition more efficient and psychologically safe.
                </li>
            </ul>
          </TabsContent>
        </Tabs>
      </article>
    </ScrollArea>
  );
}
