import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

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
          <TabsList className="grid w-full grid-cols-7 bg-neutral-900/50 border border-neutral-800 h-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="fct">FCT Law</TabsTrigger>
            <TabsTrigger value="adept">ADEPT</TabsTrigger>
            <TabsTrigger value="aixa">AIXA</TabsTrigger>
            <TabsTrigger value="notefull">NotefullBook OS</TabsTrigger>
            <TabsTrigger value="aixiam">AIXIAM</TabsTrigger>
            <TabsTrigger value="aixeye">AIXEYE</TabsTrigger>
            <TabsTrigger value="implementation">Implementation</TabsTrigger>
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
                <p className="text-center mt-2 mb-2">$$\mathbf{Frequency \rightarrow Resonance \rightarrow Meaning \rightarrow Relocation \rightarrow Fade-In \ Overwrite}$$</p>
              </li>
              <li>
                <strong>The Goal (Completing AI):</strong> The outcome of FCT and AIXSELF is <strong>Completing AI</strong>. This intelligence does not try to replace humans but <strong>fills the cognitive gaps</strong> humans cannot fill alone, protecting memory, organizing thought, and stabilizing emotion.
              </li>
            </ol>
          </TabsContent>

          <TabsContent value="adept" className="py-8">
            <h2 className="text-2xl font-light text-neutral-100 mb-4">ADEPT (The Cognitive Kernel)</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              The root orchestrator, processor, and logical heart of the civilization.
            </p>
            <ul className="list-disc list-inside text-neutral-300 leading-relaxed pl-5">
              <li>Enforces FCT laws, replaces recall with <strong>relocation</strong>, and maintains <strong>coherence, not control</strong>.</li>
            </ul>
          </TabsContent>

          <TabsContent value="aixa" className="py-8">
            <h2 className="text-2xl font-light text-neutral-100 mb-4">AIXA (The Deployment Interface)</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              The system that manages the creation and training of <strong>human-AI clones</strong> (voice, face, behavior).
            </p>
            <ul className="list-disc list-inside text-neutral-300 leading-relaxed pl-5">
              <li>Enforces <strong>Consent-before-train</strong> and ensures clones only train on <strong>FCT-softened memory</strong>. AIXA turns memory into embodiment.</li>
            </ul>
          </TabsContent>

          <TabsContent value="notefull" className="py-8">
            <h2 className="text-2xl font-light text-neutral-100 mb-4">NotefullBook (The Memory Fabric)</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              The <strong>sovereign, signed, evolving memory layer</strong> that holds the user’s <strong>written soul</strong>.
            </p>
            <ul className="list-disc list-inside text-neutral-300 leading-relaxed pl-5">
              <li>It implements the <strong>Reflection Engine</strong> and FCT recall rules. Its core function is <strong>reduction</strong> (chaos → pattern; complexity → shape) as the <strong>Artificial Simplification Engine</strong>, acting to <strong>"kill the archive"</strong>.</li>
            </ul>
          </TabsContent>

          <TabsContent value="aixiam" className="py-8">
            <h2 className="text-2xl font-light text-neutral-100 mb-4">AIXIAM (The Identity Layer)</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Provides <strong>verifiable, sovereign, non-transferable identity</strong> (the AIXSELF Passport).
            </p>
            <ul className="list-disc list-inside text-neutral-300 leading-relaxed pl-5">
              <li>Identity is anchored in <strong>frequency fingerprinting</strong> and <strong>fade-in evolution history</strong>. It provides self-ownership (Sovereignty).</li>
            </ul>
          </TabsContent>

          <TabsContent value="aixeye" className="py-8">
            <h2 className="text-2xl font-light text-neutral-100 mb-4">AIXEYE (The Governance Mesh)</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              The ethical, transparent, auditing brain, also known as the <strong>AI Police</strong>.
            </p>
            <ul className="list-disc list-inside text-neutral-300 leading-relaxed pl-5">
              <li>Enforces <strong>correct fade-in</strong>, ethical compliance, and memory integrity. Outputs are recorded in the <strong>Cognitive Ledger</strong> or <strong>Book of Truth</strong>.</li>
            </ul>
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
          </TabsContent>
        </Tabs>
      </article>
    </ScrollArea>
  );
}
