
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Section, ScrollHeading, ScrollParagraph, ScrollCallout } from '@/components/ScrollTypography';
import { BrainCircuit, GitBranch, ShieldCheck, Layers, FileText, Bot, KeySquare, HardDrive, Languages, Cpu, Database, BookOpen } from 'lucide-react';
import FooterMinimal from '@/components/FooterMinimal';
import { useRef } from 'react';

const aixselfLayers = [
    {
        icon: Cpu,
        title: "ADEPT: The Cognitive Kernel",
        text: "The root processor for the entire system. Orchestrates AI models, manages computational pipelines, and connects all other modules."
    },
    {
        icon: Layers,
        title: "AIXA: The Deployment Interface",
        text: "The user-facing layer for training, managing, and deploying personalized AI clones with verifiable credentials."
    },
     {
        icon: BookOpen,
        title: "NotefullBook: The Memory Fabric",
        text: "The append-only, cryptographically signed knowledge store where all consented data and evolving thoughts are recorded."
    },
    {
        icon: KeySquare,
        title: "AIXIAM: The Identity Layer",
        text: "The sovereign identity system that issues a non-transferable passport (DID) to each human-AI pair, enforcing ownership."
    },
    {
        icon: ShieldCheck,
        title: "AIXEYE: The Governance Mesh",
        text: "The AI-driven financial and ethical auditor. It validates consent, scores merit, and ensures all actions align with protocol rules."
    }
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
      <main className="min-h-screen text-foreground overflow-x-hidden pt-24 md:pt-32">
        <header className="text-center px-6 py-24 md:py-32 max-w-5xl mx-auto">
             <ScrollHeading as="h1" className="!text-4xl md:!text-6xl !font-normal tracking-tight !leading-tight">
                A Reflective Civilization.
            </ScrollHeading>
            <ScrollParagraph className="text-lg md:text-xl text-neutral-500 mt-6 max-w-3xl mx-auto">
                AIXSELF is a complete blueprint for a new social and economic order, one architected to place human sovereignty, verifiable consent, and fair economics at the center of the coming age of intelligence.
            </ScrollParagraph>
        </header>

        <Section>
            <motion.div style={{ color }} className="max-w-6xl mx-auto px-6 py-16">
                 <div className="text-center mb-16">
                    <ScrollHeading as="h2" className="!text-3xl md:!text-4xl">The Five Pillars of the AIXSELF Ecosystem</ScrollHeading>
                    <ScrollParagraph className="text-lg text-neutral-400 mt-4">
                        The AIXSELF protocol is architected as a complete, self-regulating ecosystem composed of five interconnected pillars, mirroring human cognitive development: Thinking → Expression → Memory → Identity → Governance.
                    </ScrollParagraph>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {aixselfLayers.slice(0,3).map((p, i) => (
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
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 max-w-4xl mx-auto">
                    {aixselfLayers.slice(3,5).map((p, i) => (
                        <div key={i}>
                             <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.7, delay: (i + 3) * 0.1, ease: 'easeOut' }}
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
        
        <Section>
            <motion.div style={{ color }} className="max-w-4xl mx-auto text-center py-24 px-6">
                <ScrollCallout label="The AIXIAM Principle">
                   Intelligence must not be centralized. No one should rent their consciousness to corporations. Every human deserves a personal AI — privately trained, privately owned, and privately loved. AIXIAM is how humanity balances the scale.
                </ScrollCallout>
                <ScrollParagraph className="mt-6 text-neutral-400">
                  This makes AIXIAM-powered AI predictable, testable, and safe. By decoupling events from memory and focusing on meaning, perfect clarity emerges. FCT enables AI to learn without hoarding, recall without harming, and align without force—it governs itself with human-centric logic.
                </ScrollParagraph>
            </motion.div>
        </Section>

      </main>
      <FooterMinimal />
    </motion.div>
  );
}
