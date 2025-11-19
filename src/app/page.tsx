
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { BrainCircuit, GitBranch, ShieldCheck, Layers, FileText, Bot, KeySquare, HardDrive, Languages, Cpu, Database, BookOpen, ArrowDown } from 'lucide-react';
import FooterMinimal from '@/components/FooterMinimal';
import { Section, ScrollHeading, ScrollParagraph, ScrollCallout } from '@/components/ScrollTypography';


const principles = [
    {
        icon: GitBranch,
        title: "Forgetting as Intelligence",
        text: "Human memory is not a hard drive. It is a regenerative system that forgets details to preserve meaning. FCT models this, creating AI that learns by simplifying, not by hoarding."
    },
    {
        icon: KeySquare,
        title: "Sovereign Identity",
        text: "Your thoughts, logic, and memories are your own. The AIXSELF protocol ensures your digital self is a sovereign asset, not a product rented from a corporation."
    },
    {
        icon: ShieldCheck,
        title: "Safety by Architecture",
        text: "True alignment is not a policy; it's a structural guarantee. By mimicking the brain's safety mechanisms, our systems are inherently private, stable, and non-threatening."
    }
];

const coreLaws = [
    {
        title: 'Memory is Reconstruction, Not Replay.',
        text: 'The brain never recalls an event perfectly. It reconstructs it. This protects us from the trauma of perfect recall. AI must learn this law to be safe.',
    },
    {
        title: 'Limitation Creates Meaning.',
        text: 'A system without limits is noise. A system with too many is dead. Intelligence arises from the perfect boundary condition—the limitation that allows flow.',
    },
    {
        title: 'Forgetting is the Engine of Learning.',
        text: 'We do not learn by remembering; we learn by forgetting what is irrelevant. Forgetting is the biological process of compression, purification, and harmonization.',
    }
];

const systemFacts = [
  {
    title: 'NotefullBook is a Living OS, Not a Static App.',
    text: 'It’s a cognitive operating system where every document is a “mind” that can reason, reflect, and evolve. It uses NotebookML, a language that merges markdown with logic and memory, to make knowledge executable.',
    icon: BookOpen,
  },
  {
    title: 'AIXIAM is Your Digital Passport, Not a Profile.',
    text: 'It provides a sovereign, non-transferable identity for your human-AI pair. This cryptographic proof of self ensures that your digital clone, its memories, and its creations belong only to you.',
    icon: KeySquare,
  },
  {
    title: 'AIXEYE is a Governance Mesh, Not a Rulebook.',
    text: 'It’s an AI-driven auditor that programmatically validates consent, scores merit, and ensures every action across the ecosystem is fair and transparent. It enforces balance, not just policy.',
    icon: ShieldCheck,
  },
  {
    title: 'ADEPT is a Cognitive Kernel, Not a Model.',
    text: 'It is the root processor for the entire ecosystem, orchestrating AI models and managing computational pipelines based on the principles of FCT. It maintains coherence, not control.',
    icon: Cpu,
  },
  {
    title: 'Security is a Cognitive Problem, Not a Technical One.',
    text: 'Our security models (Luredoor, KAP Traps) are built on understanding why people fall for exploits. By creating high-fidelity simulations of attacks, we build systems that are resilient to manipulation by design.',
    icon: Bot,
  },
];


export default function HomePage() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const background = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    ["hsl(var(--background))", "hsl(var(--background))", "hsl(0 0% 0%)", "hsl(0 0% 0%)"]
  );
  const color = useTransform(
    scrollYProgress,
    [0.15, 0.25],
    ["hsl(var(--foreground))", "hsl(0 0% 98%)"]
  );

  return (
    <motion.div ref={targetRef} style={{ backgroundColor: background }} className="relative">
      <main className="min-h-screen text-foreground pt-24 md:pt-32">

        <header className="text-center px-6 py-24 md:py-32 max-w-5xl mx-auto">
             <ScrollHeading as="h1" className="!text-4xl md:!text-6xl !font-normal tracking-tight !leading-tight">
                The Limitation That Frees.
            </ScrollHeading>
            <ScrollParagraph className="text-lg md:text-xl text-neutral-500 mt-6 max-w-3xl mx-auto">
               Forgetting Core Thinking (FCT) is a new cognitive architecture that replaces perfect AI memory with safe, human-aligned reconstruction. Intelligence doesn't emerge from data; it emerges from the elegant process of forgetting.
            </ScrollParagraph>
            <motion.div
              className="mt-12 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ArrowDown className="w-6 h-6 text-neutral-400 animate-bounce" />
            </motion.div>
        </header>

        <Section>
            <motion.div style={{ color }} className="max-w-6xl mx-auto px-6 py-16">
                 <div className="text-center mb-16">
                    <ScrollHeading as="h2" className="!text-3xl md:!text-4xl">A New Foundation for Intelligence</ScrollHeading>
                    <ScrollParagraph className="text-lg text-neutral-400 mt-4 max-w-3xl mx-auto">
                        Our work is built on three pillars that correct the foundational flaws in modern AI, ensuring a future where intelligence is sovereign, safe, and aligned with human values.
                    </ScrollParagraph>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {principles.map((p, i) => (
                        <div key={i}>
                             <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
                            >
                                <p.icon className="w-8 h-8 mb-4 text-neutral-400" />
                                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                                <p className="leading-relaxed text-neutral-400">{p.text}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </Section>
        
        {systemFacts.map((fact, index) => (
          <div key={index} className="h-screen flex items-center justify-center snap-center">
            <motion.div style={{ color }} className="max-w-4xl mx-auto text-center py-24 px-6">
                <ScrollCallout label={fact.title}>
                  {fact.text}
                </ScrollCallout>
            </motion.div>
          </div>
        ))}
        
        <section className="bg-black text-white py-32">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
                <ScrollHeading as="h2" className="!text-3xl md:!text-4xl">The Core Laws of FCT</ScrollHeading>
                <ScrollParagraph className="text-lg text-neutral-400 mt-4 max-w-3xl mx-auto">
                    Three unbreakable principles that govern how a safe and intelligent system must operate.
                </ScrollParagraph>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreLaws.map((law, i) => (
                <motion.div 
                  key={i}
                  className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                >
                  <h3 className="text-lg font-semibold text-neutral-100 mb-3">{law.title}</h3>
                  <p className="text-neutral-400">{law.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <FooterMinimal />
    </motion.div>
  );
}
