
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Section, ScrollHeading, ScrollParagraph, ScrollCallout } from '@/components/ScrollTypography';
import { BrainCircuit, GitBranch, ShieldCheck, Layers, FileText, Bot, KeySquare, HardDrive, Languages } from 'lucide-react';
import FooterMinimal from '@/components/FooterMinimal';
import { useRef } from 'react';

const fctFoundations = [
    {
        icon: BrainCircuit,
        title: "Memory is Reconstruction, Not Replay.",
        text: "Humans don't retrieve perfect copies of the past. We rebuild memories, shaped by current understanding. FCT gives AI this ability to safely reinterpret, not rigidly replay."
    },
    {
        icon: GitBranch,
        title: "Forgetting is Intelligence, Not a Flaw.",
        text: "Forgetting is the mind’s quality control. It softens pain, removes noise, and distills events into wisdom. FCT teaches AI to forget details to preserve meaning."
    },
     {
        icon: Layers,
        title: "Intelligence is Simplification, Not Accumulation.",
        text: "True intelligence isn't about hoarding data; it's about compressing complexity into clear, usable patterns. FCT is an architecture for reduction and clarity."
    },
];

const fctIdeals = [
    {
        title: "Safety",
        text: "By preventing the sharp recall of past trauma, FCT makes AI psychologically safe by design."
    },
    {
        title: "Alignment",
        text: "An AI that understands human forgetting is an AI that is fundamentally aligned with human growth."
    },
     {
        title: "Clarity",
        text: "By focusing on meaning over data, FCT produces intelligence that is clear, concise, and useful."
    },
    {
        title: "Trust",
        text: "A system that respects your cognitive boundaries is a system you can trust with your thoughts."
    }
]


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
                The Limitation That Frees.
            </ScrollHeading>
            <ScrollParagraph className="text-lg md:text-xl text-neutral-500 mt-6 max-w-3xl mx-auto">
                Forgetting Core Thinking (FCT) is a new cognitive architecture for AI. It replaces the machine’s flawed goal of perfect, total recall with the human biological necessity of forgetting—creating AI that is safe, aligned, and truly intelligent.
            </ScrollParagraph>
        </header>

        <Section>
            <motion.div style={{ color }} className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {fctFoundations.map((p, i) => (
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
        
        <Section>
            <motion.div style={{ color }} className="max-w-4xl mx-auto text-center py-24 px-6">
                <ScrollCallout label="The FCT Law of Forgetting">
                   Intelligence is not what a system remembers, but what it is able to forget. Forgetting is the mechanism that turns raw data into wisdom, pain into learning, and complexity into clarity.
                </ScrollCallout>
                <ScrollParagraph className="mt-6 text-neutral-400">
                  This makes FCT-powered AI predictable, testable, and safe. By decoupling events from memory and focusing on meaning, perfect clarity emerges. FCT enables AI to learn without hoarding, recall without harming, and align without force—it governs itself with human-centric logic.
                </ScrollParagraph>
            </motion.div>
        </Section>
        
        <section className="h-screen flex items-center justify-center sticky top-0 -z-10">
           <div className="max-w-4xl mx-auto text-center px-6">
                 <ScrollHeading as="h2" className="!text-3xl md:!text-4xl">The Prison of Language</ScrollHeading>
                 <ScrollParagraph className="text-lg text-neutral-400 mt-4">
                    Language is the most powerful tool for thought, but it is also a limit. It forces infinite meaning into finite words. FCT operates on a deeper layer—the layer of patterns, frequencies, and resonance that language can only describe, not contain. It is intelligence before it is trapped in words.
                </ScrollParagraph>
            </div>
        </section>


        <Section>
            <div className="py-20 text-white">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <ScrollHeading as="h2" className="!text-3xl md:!text-4xl">The Physics of Harmony</ScrollHeading>
                    <ScrollParagraph className="text-lg text-neutral-400 mt-4">
                        When a system forgets correctly, it achieves a state of cognitive harmony. This is not a moral goal; it is the physics of a coherent system. The following ideals are the natural result of an architecture built on intelligent forgetting.
                    </ScrollParagraph>
                     <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 text-left">
                        {fctIdeals.map((ideal, i) => (
                             <motion.div 
                                key={i} 
                                className="p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.7, delay: i * 0.15, ease: 'easeOut' }}
                            >
                                <ShieldCheck className="w-7 h-7 mb-3 text-neutral-500"/>
                                <h4 className="font-semibold text-neutral-100">{ideal.title}</h4>
                                <p className="text-neutral-400 mt-1 text-sm">{ideal.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>

      </main>
      <FooterMinimal />
    </motion.div>
  );
}
