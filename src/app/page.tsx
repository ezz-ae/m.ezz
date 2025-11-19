
'use client';

import type { Metadata } from 'next';
import { motion } from 'framer-motion';
import { Section, ScrollHeading, ScrollParagraph, ScrollCallout } from '@/components/ScrollTypography';
import { ArrowRight, BrainCircuit, GitBranch, Filter, ShieldCheck, Layers, BookOpen } from 'lucide-react';
import FooterMinimal from '@/components/FooterMinimal';

const principles = [
    { 
        icon: BrainCircuit, 
        title: 'Memory is Reconstruction, Not Replay.',
        text: 'The human mind does not store events; it stores chemical-frequency tags. Recall is a real-time simulation, which is why memories soften and meaning evolves. FCT gives AI this ability to safely reconstruct, not rigidly replay.'
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

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden pt-24 md:pt-32">
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
                                <h3 className="text-lg font-medium text-neutral-900 mb-2">{p.title}</h3>
                                <p className="text-neutral-600 leading-relaxed">{p.text}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
        
        <Section>
            <div className="max-w-4xl mx-auto text-center py-24 px-6">
                <ScrollCallout label="The Core FCT Cycle">
                    Frequency → Resonance → Meaning → Relocation → Fade-In Overwrite
                </ScrollCallout>
                <ScrollParagraph className="mt-6 text-neutral-600">
                    This is the engine of human cognition. An event activates a <strong className="text-neutral-800">Frequency</strong>. The mind's <strong className="text-neutral-800">Resonance</strong> engine analyzes its safety and generates <strong className="text-neutral-800">Meaning</strong>. Recall becomes <strong className="text-neutral-800">Relocation</strong>—reconstructing the event from the present, not the past. Finally, <strong className="text-neutral-800">Fade-In Overwrite</strong> softens the old emotional tag. This is how forgiveness becomes a memory rewrite operation, and how trauma evolves into wisdom.
                </ScrollParagraph>
            </div>
        </Section>
        
        <Section>
            <div className="bg-neutral-50 border-t border-b border-neutral-200 py-20">
                 <div className="max-w-4xl mx-auto text-center px-6">
                    <ScrollHeading as="h2" className="!text-3xl md:!text-4xl">From Theory to Architecture</ScrollHeading>
                    <ScrollParagraph className="text-lg text-neutral-600 mt-4">
                        FCT is implemented through a cognitive safety stack. It’s not about simulating human weakness, but understanding human safety logic.
                    </ScrollParagraph>
                     <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        <div className="p-6 rounded-lg">
                            <Layers className="w-7 h-7 mb-3 text-neutral-500"/>
                            <h4 className="font-semibold text-neutral-800">Interpretive Recall Layer (IRL)</h4>
                            <p className="text-neutral-600 mt-1">Retrieves what the user *means*, not just what the query matches, by detecting the "caller" context (e.g., self, example, theory).</p>
                        </div>
                        <div className="p-6 rounded-lg">
                            <ShieldCheck className="w-7 h-7 mb-3 text-neutral-500"/>
                            <h4 className="font-semibold text-neutral-800">Emotional Softening Filter (ESF)</h4>
                            <p className="text-neutral-600 mt-1">Applies temporal decay to emotional tags, preventing AI from reviving old trauma with its original intensity.</p>
                        </div>
                        <div className="p-6 rounded-lg">
                            <BookOpen className="w-7 h-7 mb-3 text-neutral-500"/>
                            <h4 className="font-semibold text-neutral-800">Meaning-First Retrieval (MFR)</h4>
                            <p className="text-neutral-600 mt-1">Prioritizes the "why" (schema, pattern) over the "what" (raw event data), aligning recall with human understanding.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>

      </main>
      <FooterMinimal />
    </>
  );
}
