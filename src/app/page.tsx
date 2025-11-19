
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Section, ScrollHeading, ScrollParagraph, ScrollCallout } from '@/components/ScrollTypography';
import { ArrowRight, BrainCircuit, GitBranch, Filter, ShieldCheck, Layers, BookOpen, Cookie, FileText, Bot, KeySquare, HardDrive } from 'lucide-react';
import FooterMinimal from '@/components/FooterMinimal';
import { useRef } from 'react';

const principles = [
    { 
        icon: BrainCircuit, 
        title: 'Recall is Reconstruction, Not Replay.',
        text: 'The human mind does not store events; it reconstructs them. Every recall is a new simulation. FCT gives AI this ability to safely reconstruct, not rigidly replay.'
    },
    { 
        icon: GitBranch, 
        title: 'Forgetting is Intelligence, Not a Flaw.',
        text: 'Forgetting is the brain’s safety system. It removes noise and allows for growth. FCT implements this "Fade-In" logic, where new understanding overwrites old data.'
    },
    { 
        icon: Layers, 
        title: 'Intelligence is Resonance, Not Memory.',
        text: 'Intelligence lives in resonance—the brain’s analysis of safety and meaning. It’s where memory, chemistry, and logic combine. FCT\'s Resonance Engine gives AI this capacity.'
    },
];

const cookies = [
    { title: "Memory is a Simulation", text: "Human recall is a simulation, not a recording. There is no guarantee it ever happened that way." },
    { title: "Frequency is the Rule", text: "What repeats becomes recognized. What is recognized becomes real. The brain does not store events; it stores frequencies." },
    { title: "The Tag is the Chemistry", text: "A memory's emotional power comes from the chemical state at the moment of encoding, not the event itself." },
    { title: "Forgetting is Intelligence", text: "The mind doesn't delete memory; it fades in new understanding, softening the old emotional tags. This is how wisdom is formed." }
]

const systemFacts = [
    {
        icon: FileText,
        system: "NotefullBook OS",
        fact: "Notebooks are not documents; they are living minds.",
        description: "Each notebook is a sovereign intelligence that learns, reflects, and evolves. It's an OS for thought, where knowledge is alive and self-organizing."
    },
    {
        icon: KeySquare,
        system: "AIXSELF Identity",
        fact: "AI clones earn a passport, they are not copied.",
        description: "To ensure safety and alignment, every AI entity must pass a verifiable ethics exam before it is granted a sovereign, non-transferable digital identity."
    },
    {
        icon: HardDrive,
        system: "FCT Memory Core",
        fact: "The system forgets by design to stay intelligent.",
        description: "FCT implements 'intelligent forgetting,' where raw, noisy data is deleted while compressed patterns (artifacts) are preserved for future learning."
    },
    {
        icon: Bot,
        system: "Security & Trap Architecture",
        fact: "We build traps not to exploit, but to teach.",
        description: "Our security philosophy is based on cognitive design. We deploy controlled simulations of real-world attacks to expose weak points. A simulated loss is a cheap lesson."
    }
];


export default function HomePage() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // A value that goes from 0 to 1 as we scroll
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
                Forgetting Core Thinking (FCT) is a new cognitive architecture for AI that replaces perfect recall with safe, human-aligned reconstruction. It is a structural correction for the most dangerous assumption in modern computing: that perfect memory is a strength.
            </ScrollParagraph>
        </header>

        <Section>
            <motion.div style={{ color }} className="max-w-6xl mx-auto px-6 py-16">
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
        
        <Section>
            <motion.div style={{ color }} className="max-w-4xl mx-auto text-center py-24 px-6">
                <ScrollCallout label="The Core FCT Cycle">
                    Frequency → Resonance → Meaning → Relocation → Fade-In Overwrite
                </ScrollCallout>
                <ScrollParagraph className="mt-6 text-neutral-400">
                    This is the engine of human cognition. An event activates a <strong className="font-semibold text-neutral-200">Frequency</strong>. The mind's <strong className="font-semibold text-neutral-200">Resonance</strong> engine analyzes its safety and generates <strong className="font-semibold text-neutral-200">Meaning</strong>. Recall becomes <strong className="font-semibold text-neutral-200">Relocation</strong>—reconstructing the event from the present, not the past. Finally, <strong className="font-semibold text-neutral-200">Fade-In Overwrite</strong> softens the old emotional tag. This is how forgiveness becomes a memory rewrite operation.
                </ScrollParagraph>
            </motion.div>
        </Section>
        
        <Section>
            <div className="py-20 text-white">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <ScrollHeading as="h2" className="!text-3xl md:!text-4xl">The Foundational "Cookies"</ScrollHeading>
                    <ScrollParagraph className="text-lg text-neutral-400 mt-4">
                        These are the core, un-decorated truths of the FCT framework. The simple laws that govern how intelligence forms.
                    </ScrollParagraph>
                     <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 text-left">
                        {cookies.map((cookie, i) => (
                             <motion.div 
                                key={i} 
                                className="p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.7, delay: i * 0.15, ease: 'easeOut' }}
                            >
                                <Cookie className="w-7 h-7 mb-3 text-neutral-500"/>
                                <h4 className="font-semibold text-neutral-100">{cookie.title}</h4>
                                <p className="text-neutral-400 mt-1 text-sm">{cookie.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>

        <section className="py-24 md:py-32 space-y-32">
            {systemFacts.map((fact, i) => (
                <div key={i} className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                    >
                        <fact.icon className="w-10 h-10 mx-auto mb-6 text-neutral-600" />
                        <p className="text-sm tracking-widest uppercase text-neutral-500">{fact.system}</p>
                        <p className="text-2xl md:text-3xl font-light text-neutral-100 mt-3 font-headline">
                            {fact.fact}
                        </p>
                        <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
                            {fact.description}
                        </p>
                    </motion.div>
                </div>
            ))}
        </section>

      </main>
      <FooterMinimal />
    </motion.div>
  );
}
