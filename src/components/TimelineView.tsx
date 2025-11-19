
// src/components/TimelineView.tsx
"use client";
import { motion } from 'framer-motion';

const timelinePhases = [
    {
        phase: 0,
        tag: "Attention Architect",
        title: "Instinct Layer",
        description: "Observing people, campaigns, reactions. A focus on personalization and behaviour change. Realization that value is in what people notice and what they ignore."
    },
    {
        phase: 1,
        tag: "Market System Builder",
        title: "Structure Layer",
        description: "A shift from caring about single ads to caring about systems. The construction of marketing engines and seeing patterns in ecosystems instead of just tactics."
    },
    {
        phase: 2,
        tag: "Infrastructure Mind",
        title: "OS Layer",
        description: "A move from marketing real estate to redesigning how real estate works. A vision of sovereign real estate infrastructure, not just listings."
    },
    {
        phase: 3,
        tag: "Defensive Intelligence Architect",
        title: "Trap & Security Layer",
        description: "Attacking systems to protect them. The design of phishing traps and scam simulators. The insight that security is a cognitive design problem."
    },
    {
        phase: 4,
        tag: "Pattern Hunter",
        title: "Puzzle & Cryptic Layer",
        description: "Using puzzles (Bitcoin, chain analysis) as a lab for studying search, bias, pattern, and failure. Hunting for patterns in complex systems."
    },
    {
        phase: 5,
        tag: "Language & OS Architect",
        title: "AI OS Layer",
        description: "Moving from seeing AI as a 'tool' to seeing it as a language of organization."
    },
    {
        phase: 6,
        tag: "Cognitive Safety Architect",
        title: "Forgetting Layer",
        description: "The realization of the missing piece: forgetting. The development of FCT and Forgetence. AI storing everything is structurally misaligned with how humans stay sane."
    },
    {
        phase: 7,
        tag: "Intelligence System Architect",
        title: "Meta-Intelligence Layer",
        description: "Building ezz.ae and Forgain as full-scale expressions of this thinking. Intelligence as a living, fading, resonating field."
    }
];

export default function TimelineView() {
    return (
        <div className="max-w-4xl mx-auto py-16">
            <h1 className="text-3xl md:text-4xl font-light text-neutral-50 mb-4">Intelligence Timeline</h1>
            <p className="text-neutral-400 mb-12">A cognitive evolution, not a CV.</p>

            <div className="relative space-y-12">
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10">
                    <motion.div 
                        className="w-full h-full bg-primary origin-top"
                        style={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                </div>
                
                {timelinePhases.map((phase, index) => (
                    <motion.div 
                        key={phase.phase} 
                        className="relative flex items-start"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <motion.div 
                            className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 bg-neutral-600 rounded-full"
                            whileInView={{
                                scale: [1, 1.5, 1],
                                transition: { duration: 1, repeat: Infinity, delay: 0.5 + index * 0.2 }
                            }}
                            viewport={{ once: true, amount: 0.5 }}
                        />
                        <div className={`w-full p-6 rounded-2xl md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-[50%] md:pl-12'}`}>
                            <p className="text-xs tracking-[0.2em] uppercase text-neutral-500">{phase.tag}</p>
                            <h2 className="text-lg md:text-xl font-medium text-neutral-100 mt-2">{phase.title}</h2>
                            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{phase.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
