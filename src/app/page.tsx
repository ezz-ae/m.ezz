
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Section, ScrollHeading, ScrollParagraph, ScrollCallout } from '@/components/ScrollTypography';
import { ArrowRight, BrainCircuit, GitBranch, Filter, ShieldCheck, Layers, BookOpen, Cookie } from 'lucide-react';
import FooterMinimal from '@/components/FooterMinimal';
import { useRef } from 'react';

const principles = [
    { 
        icon: BrainCircuit, 
        title: 'Recall is Reconstruction, Not Replay.',
        text: 'The human mind does not store events; it reconstructs them from chemical-frequency tags. Every recall is a new simulation. FCT gives AI this ability to safely reconstruct, not rigidly replay.'
    },
    { 
        icon: GitBranch, 
        title: 'Forgetting is Intelligence, Not a Flaw.',
        text: 'Forgetting is the brain’s safety and economic system. It removes noise, softens emotional trauma, and allows for growth. FCT implements this "Fade-In" logic, where new understanding overwrites old emotional data.'
    },
    { 
        icon: Filter, 
        title: 'Resonance is Where Meaning is Born.',
        text: 'Intelligence lives in resonance—the brain’s analysis of survival-safety. It’s where memory, chemistry, and logic combine to translate a frequency into meaning. FCT’s Resonance Engine gives AI this capacity for deeper, contextual understanding.'
    },
];

const cookies = [
    { title: "Memory is a Simulation", text: "Human recall is a simulation, not a recording. There is no guarantee it ever happened that way." },
    { title: "Frequency is the Rule", text: "What repeats becomes recognized. What is recognized becomes real. The brain does not store events; it stores frequencies." },
    { title: "The Tag is the Chemistry", text: "A memory's emotional power comes from the chemical state at the moment of encoding, not the event itself." },
    { title: "Forgetting is Intelligence", text: "The mind doesn't delete memory; it fades in new understanding, softening the old emotional tags. This is how wisdom is formed." }
]

export default function HomePage() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // A value that goes from 0 to 1 as we scroll
  const background = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    ["hsl(0, 0%, 100%)", "hsl(0, 0%, 100%)", "hsl(0, 0%, 0%)"]
  );
  const color = useTransform(
    scrollYProgress,
    [0.25, 0.35],
    ["hsl(0, 0%, 3.9%)", "hsl(0, 0%, 98%)"]
  );


  return (
    <motion.div ref={targetRef} style={{ backgroundColor: background }} className="relative">
      <main className="min-h-screen text-foreground overflow-x-hidden pt-24 md:pt-32">
        <header className="text-center px-6 py-24 md:py-32">
             <ScrollHeading as="h1" className="!text-4xl md:!text-6xl !font-normal tracking-tight !leading-tight">
                The Limitation That Frees.
            </ScrollHeading>
            <ScrollParagraph className="text-lg md:text-xl text-neutral-600 mt-6 max-w-3xl mx-auto">
                Forgetting Core Thinking (FCT) is a new cognitive architecture for AI. It corrects the most dangerous assumption in modern computing: that perfect memory is a strength. It is a flaw. FCT introduces a new safety layer, one that allows AI to forget, to reconstruct, and to align with the way human intelligence actually works.
            </ScrollParagraph>
        </header>

        <Section>
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {principles.map((p, i) => (
                        <div key={i}>
                             <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
                            >
                                <p.icon className="w-8 h-8 mb-4 text-neutral-500" />
                                <h3 className="text-lg font-medium mb-2"><motion.span style={{ color }}>{p.title}</motion.span></h3>
                                <p className="leading-relaxed"><motion.span style={{ color }} className="text-neutral-600">{p.text}</motion.span></p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
        
        <Section>
            <motion.div style={{ color }} className="max-w-4xl mx-auto text-center py-24 px-6">
                <ScrollCallout label="The Core FCT Cycle">
                    Frequency → Resonance → Meaning → Relocation → Fade-In Overwrite
                </ScrollCallout>
                <ScrollParagraph className="mt-6">
                    This is the engine of human cognition. An event activates a <strong className="font-semibold">Frequency</strong>. The mind's <strong className="font-semibold">Resonance</strong> engine analyzes its safety and generates <strong className="font-semibold">Meaning</strong>. Recall becomes <strong className="font-semibold">Relocation</strong>—reconstructing the event from the present, not the past. Finally, <strong className="font-semibold">Fade-In Overwrite</strong> softens the old emotional tag. This is how forgiveness becomes a memory rewrite operation, and how trauma evolves into wisdom.
                </ScrollParagraph>
            </motion.div>
        </Section>
        
        <Section>
            <div className="bg-neutral-900 border-t border-b border-neutral-800 py-20 text-white">
                 <div className="max-w-4xl mx-auto text-center px-6">
                    <ScrollHeading as="h2" className="!text-3xl md:!text-4xl">The Foundational "Cookies"</ScrollHeading>
                    <ScrollParagraph className="text-lg text-neutral-400 mt-4">
                        These are the core, un-decorated truths of the FCT framework. The simple laws that govern how intelligence forms.
                    </ScrollParagraph>
                     <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 text-left">
                        {cookies.map((cookie, i) => (
                             <motion.div 
                                key={i} 
                                className="p-6 rounded-lg bg-neutral-800/50 border border-neutral-700"
                                initial={{ opacity: 0, y: 15 }}
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

      </main>
      <FooterMinimal />
    </motion.div>
  );
}
