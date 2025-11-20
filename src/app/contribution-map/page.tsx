// src/app/contribution-map/page.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/components/ScrollTypography';
import { Layers, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const contributionData = [
    {
        layer: 0,
        title: "Ontological Breakthrough",
        question: "What problem was challenged?",
        points: [
            "Challenged the ontological assumptions of Memory, Conscious cognition, Generative thought, and Identity.",
            "Proposed the generative-memory thesis: human memory is reconstruction, not recall.",
            "Reframed forgetting as a core computational advantage, not a failure.",
            "Positioned human cognition as state-based, not storage-based."
        ],
        domain: "Cognitive Science, Philosophy of Mind, Computational Epistemology."
    },
    {
        layer: 1,
        title: "Theoretical Framework",
        question: "What new structure was created?",
        points: [
            "Generative Memory: Memory = 'momentary reconstruction,' not stored archives.",
            "Meaning-First Cognition: The brain retains meaning and principles, not literal events.",
            "Forgetting Core Thinking (FCT): A model where forgetting is a reasoning enhancer.",
            "Human Mind as a Generative Engine: Where recall = inference, and identity = continuity of inference."
        ],
        domain: "Cognitive Architecture, Generative Intelligence Theory."
    },
    {
        layer: 2,
        title: "Mechanistic Model",
        question: "How does the system actually work?",
        points: [
            "Inputs become patterns and conceptual 'nodes,' not memories.",
            "Recall is re-generation and synthesis based on the current state.",
            "The brain uses 'value-based encoding,' not event-based or time-based.",
            "Dreams are a generative load test—a mechanistic explanation without metaphysics."
        ],
        domain: "Neural Modeling, Biological Computation, Computational Psychology."
    },
    {
        layer: 3,
        title: "Human-System Parallel Model",
        question: "Where does AI come in?",
        points: [
            "Built a parallel cognitive architecture for machines (Stateless vs. Stateful generative engines).",
            "Proposed the solution: Forgain OS (A Value-Based Generative Memory Layer for AI).",
            "An AI that adapts and reconstructs based on meaning relevance and future need."
        ],
        domain: "AI Architecture, LLM Memory Frameworks, Safety Design."
    },
    {
        layer: 4,
        title: "Applied Contribution",
        question: "What can the world build with this?",
        points: [
            "New AI memory architecture (Forgain OS).",
            "Cognitive OS for humans, teaching how forgetting is intelligence.",
            "Educational & Training Interfaces (e.g., Generative Thinking Curriculum).",
            "Advanced safety models for AGI (no persistent memory, state-based intelligence only)."
        ],
        domain: "AI Alignment, Cognitive Training, Deep-Learning Memory Systems."
    },
    {
        layer: 5,
        title: "Philosophical Contribution",
        question: "Why does this matter?",
        points: [
            "Reframed what it means to 'be conscious,' to 'remember,' and to 'exist through time.'",
            "The thesis: Humans do not remember their lives. Humans generate their lives as they think.",
            "Replaces metaphysics and identity anxiety with computational clarity and cognitive truth."
        ],
        domain: "Modern Philosophy, Consciousness Studies."
    },
     {
        layer: 6,
        title: "Social & Cultural Contribution",
        question: "How does this change society?",
        points: [
            "New way to understand trauma as a persistent, generative re-loop that can be re-architected.",
            "New economic meaning of attention as the input that shapes our generative architecture.",
            "New political-ethical frameworks: Forgetful, adaptive societies are stable. Storage-based systems are tyrannical."
        ],
        domain: "Sociology, Psychology, Political Theory."
    },
    {
        layer: 7,
        title: "Meta-Contribution",
        question: "Why is this work different?",
        points: [
            "It did not copy theories or reinterpret old ideas.",
            "It started from first principles, pure inference, and raw human observation.",
            "This makes the work foundational, primary, and original."
        ],
        domain: "Generative Cognitive Epistemology (GCE)."
    },
];


const LayerNode = ({ layer, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border-b border-neutral-800 last:border-b-0">
            <div 
                className="flex justify-between items-center py-4 cursor-pointer group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-4">
                    <span className="text-sm font-mono text-neutral-600">L{layer.layer}</span>
                    <div>
                        <h3 className="font-semibold text-neutral-200">{layer.title}</h3>
                        <p className="text-xs text-neutral-500">{layer.question}</p>
                    </div>
                </div>
                <ChevronDown className={cn("h-4 w-4 text-neutral-600 transition-transform", isOpen && "rotate-180")} />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 pl-8 text-sm">
                            <ul className="list-disc list-inside text-neutral-400 space-y-2">
                                {layer.points.map((point, i) => <li key={i}>{point}</li>)}
                            </ul>
                            <p className="mt-4 text-xs font-mono text-orange-400/70 border-t border-neutral-800 pt-2">
                                DOMAIN IMPACT: {layer.domain}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


export default function ContributionMapPage() {
  return (
    <div className="min-h-screen bg-black text-neutral-100 overflow-x-hidden pt-24">
      <div className="container mx-auto px-4 py-16">
        <Section className="text-center max-w-3xl mx-auto mb-16">
            <Layers className="mx-auto h-10 w-10 text-orange-400 mb-4" />
            <h1 className="text-3xl md:text-4xl font-light text-neutral-100">The Contribution Layers Map</h1>
            <p className="text-base md:text-lg text-neutral-400 mt-4">
                A unified, interactive model of where the work contributes, how it contributes, and what domain it transforms.
            </p>
        </Section>
        
        <Section className="max-w-4xl mx-auto bg-neutral-900/50 border border-neutral-800 rounded-lg">
            {contributionData.map(layer => (
                <LayerNode key={layer.layer} layer={layer} defaultOpen={layer.layer <= 1} />
            ))}
        </Section>
      </div>
    </div>
  );
}
