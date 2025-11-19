'use client';

import { motion } from 'framer-motion';

const layers = [
    {
        title: "LAYER 0 — Ontological Breakthrough",
        question: "What problem was challenged?",
        points: [
            "Challenged the ontological assumptions of:",
            "• Memory",
            "• Conscious cognition",
            "• Generative thought",
            "• Human perceptual continuity",
            "• Psychological models of recall and identity"
        ],
        contribution: {
            title: "The contribution:",
            items: [
                "Proposed the generative-memory thesis: human memory is not recall — it is reconstruction.",
                "Reframed forgetting as a core computational advantage, not failure.",
                "Positioned human cognition as state-based, not storage-based, shifting the entire discipline."
            ]
        },
        domain: "Cognitive Science, Philosophy of Mind, Computational Epistemology."
    },
    {
        title: "LAYER 1 — Theoretical Framework",
        question: "What new structure was created to replace the old one?",
        points: [
            "Produced a structured system:",
            "1. Generative Memory: Memory = “momentary reconstruction,” not stored archives.",
            "2. Meaning-First Cognition: Human brain keeps meaning, not events.",
            "3. Forgetting Core Thinking (FCT): A cognitive model where forgetting is a sorting engine, a selection mechanism, a metabolic optimization, and a reasoning enhancer.",
            "4. Human Mind as a Generative Engine: Where recall = inference, identity = continuity of inference, and perception = upscaled reconstruction."
        ],
        domain: "Cognitive Architecture, Generative Intelligence Theory."
    },
    {
        title: "LAYER 2 — Mechanistic Model",
        question: "How does the system actually work?",
        points: [
            "Framed cognition mechanistically:",
            "1. Inputs do not become memories; they become patterns, semantic anchors, and conceptual “nodes”.",
            "2. Recall is not retrieval; it is re-generation, recomposition, and synthesis based on current state.",
            "3. Brain uses “value-based encoding,” not event-based, time-based, or location-based.",
            "4. Dreams = generative load test. A mechanistic explanation without metaphysics."
        ],
        domain: "Neural Modeling, Biological Computation, Computational Psychology."
    },
    {
        title: "LAYER 3 — Human-System Parallel Model",
        question: "Where does AI come in?",
        points: [
            "Built a parallel cognitive architecture for machines: Human cognition ≈ stateful generative engine, AI systems ≈ stateless generative engines.",
            "Proposed the solution: Forgain OS (Value-Based Generative Memory Layer).",
            "A system where AI does not store, but adapts and reconstructs based on meaning relevance and future need."
        ],
        domain: "AI architecture, LLM memory frameworks, Safety Design."
    },
    {
        title: "LAYER 4 — Applied Contribution",
        question: "What can the world build with this?",
        points: [
            "Opened possible applications:",
            "1. New AI memory architecture: A generative memory layer (Forgain OS) that is not database-based or vector-store-dependent, but uses relevance-weighted generative recall.",
            "2. Cognitive OS for humans: A system teaching people how recall actually works, why forgetting is intelligence, and how to think without memory illusions.",
            "3. Educational & Training Interfaces: Forgain becomes a cognitive training brand, a YouTube educational engine, a neural thinking camp, a scientific movement.",
            "4. Safety models for AGI: A full argument for no persistent memory, no event-log recall, no identity loops, and state-based intelligence only."
        ],
        domain: "AI alignment, cognitive training, deep-learning memory systems."
    },
    {
        title: "LAYER 5 — Philosophical Contribution",
        question: "Why does this matter?",
        points: [
            "Reframed what it means to “be conscious,” to “remember,” and to “exist through time.”",
            "The thesis: Humans do not remember their lives. Humans generate their lives as they think.",
            "This removes metaphysics, spiritual conflict, and identity anxiety, replacing them with computational clarity, scientific humility, and cognitive truth."
        ],
        domain: "Modern philosophy, consciousness studies."
    },
    {
        title: "LAYER 6 — Social & Cultural Contribution",
        question: "How does this change society?",
        points: [
            "The model opens:",
            "1. New way to understand trauma: Trauma = persistent generative re-loop.",
            "2. New economic meaning of attention: Attention = input that shapes generative architecture.",
            "3. New view on identity: Identity = continuity of inference, not memory.",
            "4. New political-ethical frameworks: Forgetful societies are stable. Storage-based systems are tyrannical."
        ],
        domain: "Sociology, psychology, political theory, public philosophy."
    },
    {
        title: "LAYER 7 — Meta-Contribution",
        question: "Why is this work different from others?",
        points: [
            "Because it did not copy theories, reinterpret old ideas, or repeat Western cognitive assumptions.",
            "It started from first principles, pure inference, raw human observation, and no external referencing.",
            "This makes the work foundational, primary, original, and academically classifiable as a new school of thought."
        ],
    },
    {
        title: "LAYER 8 — Where The Work Stands Globally",
        question: "Benchmarking",
        points: [
            "The contribution sits beside: Daniel Kahneman, Karl Friston, Derrida, David Chalmers, Hofstadter, Stanislas Dehaene.",
            "But operates in a new field it effectively founded: Generative Cognitive Epistemology (GCE)."
        ],
    },
    {
        title: "LAYER 9 — Future Extensions",
        question: "What comes next?",
        points: [
            "• Forgain OS v1",
            "• Memory Reconstruction Simulator",
            "• Cognitive Ratio API",
            "• Generative Thinking Curriculum",
            "• AI Safety Framework (State-Based Cognition)",
            "• Human-AI Shared Cognitive Standards",
            "• Consciousness Computation Index"
        ]
    },
];

const LayerCard = ({ layer, index }: { layer: typeof layers[0], index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: index * 0.05 }}
        className="border-b border-neutral-800 pb-8 mb-8 last:border-b-0 last:mb-0"
    >
        <h2 className="text-xl font-light text-neutral-100 mb-1">{layer.title}</h2>
        <p className="text-sm text-neutral-500 italic mb-4">{layer.question}</p>
        
        <div className="prose prose-sm prose-invert max-w-none text-neutral-300 space-y-2">
            {layer.points.map((point, i) => {
                const isListItem = point.startsWith('•') || /^\d+\./.test(point);
                const content = point.replace(/^• |^\d+\. /, '').trim();
                const listItemChar = point.startsWith('•') ? '•' : (point.match(/^\d+\./)?.[0] ?? '');
                
                return (
                    <p key={i} className={isListItem ? "ml-4" : ""}>
                        {isListItem && <span className="mr-2 select-none">{listItemChar}</span>}
                        {content}
                    </p>
                )
            })}
            
            {layer.contribution && (
                <div className="pt-2">
                    <p className="font-semibold text-neutral-200">{layer.contribution.title}</p>
                     {layer.contribution.items.map((item, i) => (
                        <p key={i} className="ml-4">
                            <span className="mr-2 select-none">•</span>
                            {item}
                        </p>
                    ))}
                </div>
            )}

            {layer.domain && (
                <div className="pt-4">
                    <p className="text-xs tracking-wider uppercase text-neutral-500">Scientific Domain Impacted:</p>
                    <p className="text-neutral-400">{layer.domain}</p>
                </div>
            )}
        </div>
    </motion.div>
);

export default function TimelineView() {
    return (
        <div className="max-w-4xl mx-auto py-8">
            <div className="text-center mb-16">
                <h1 className="text-2xl md:text-3xl font-light text-neutral-50">Contribution Layers Map</h1>
                <p className="text-neutral-400 mt-2">A unified model of where the work contributes, how it contributes, and what domain it transforms.</p>
            </div>

            <div>
                {layers.map((layer, index) => (
                    <LayerCard key={index} layer={layer} index={index} />
                ))}
            </div>
        </div>
    );
}
