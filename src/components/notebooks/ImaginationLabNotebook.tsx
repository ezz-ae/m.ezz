// src/components/notebooks/ImaginationLabNotebook.tsx
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const simulatedResponse = {
    principles: [
        "The structure must embody the core tension between absolute silence and the potential for sound.",
        "Circulation paths should be designed as a meditative journey, guiding the visitor from noise to stillness.",
        "Materials should be chosen for their acoustic absorption and tactile warmth, creating a sensory deprivation that is comforting, not clinical."
    ],
    connections: [
        { field: "Biology", insight: "Mycelium networks, which grow in silence, can inform the interconnected, subterranean pathways of the museum." },
        { field: "Computation", insight: "A 'zero-knowledge proof' where the visitor knows they are in a sacred space without needing to be told why." },
        { field: "Music", insight: "The architecture can be modeled on John Cage's 4'33\", where the building itself becomes the instrument, and the 'music' is the ambient sound of the visitor's own existence." }
    ],
    injection: "What if the central chamber contains a single, perfectly preserved ancient tree, and the only sound allowed is the imperceptible hum of its living processes, amplified a thousand times?",
    insights: [
        "Design entranceways that act as 'acoustic locks,' requiring visitors to pass through a series of progressively quieter spaces.",
        "Use light as the primary navigational tool, with beams of focused light guiding visitors through darkened, silent corridors.",
        "The central exhibit could be an anechoic chamber, allowing visitors to experience true, absolute silence."
    ]
};

function ImaginationLab() {
    const [concept, setConcept] = useState('A museum of silence');
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleResonate = () => {
        setIsLoading(true);
        setResponse(null);
        setTimeout(() => {
            setResponse(simulatedResponse);
            setIsLoading(false);
        }, 1500);
    };

    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
    const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

    return (
        <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 md:p-8 space-y-8">
            <div className="text-center border-b border-neutral-800 pb-6">
                <h1 className="text-2xl md:text-3xl font-light text-neutral-100">The Imagination Lab</h1>
                <p className="text-sm text-neutral-500 max-w-xl mx-auto mt-2">
                    A functional demonstration of the FCT Resonance Engine for lateral thinking and novel idea generation.
                </p>
            </div>

            <div className="flex w-full max-w-lg mx-auto items-center space-x-2">
                <Input type="text" value={concept} onChange={(e) => setConcept(e.target.value)} placeholder="Enter a concept..." className="bg-neutral-900 border-neutral-700 h-10" />
                <Button onClick={handleResonate} disabled={isLoading} className="bg-orange-600 hover:bg-orange-700 text-white">
                    {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                    {isLoading ? 'Resonating...' : 'Resonate'}
                </Button>
            </div>

            <AnimatePresence>
                {response && (
                    <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
                        <motion.div variants={itemVariants}>
                            <h3 className="text-base font-semibold text-neutral-300 mb-2">Core Architectural Principles</h3>
                            <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1">
                                {response.principles.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <h3 className="text-base font-semibold text-neutral-300 mb-2">Distant Pattern Connections</h3>
                             <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                {response.connections.map((item, i) => (
                                    <div key={i} className="text-sm bg-neutral-900 border border-neutral-800 p-3 rounded-md">
                                        <strong className="text-orange-400">{item.field}:</strong>
                                        <span className="text-neutral-400"> {item.insight}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                             <h3 className="text-base font-semibold text-neutral-300 mb-2">Recycled Idea Injection</h3>
                             <p className="text-sm text-neutral-400 italic">"{response.injection}"</p>
                        </motion.div>
                        
                        <motion.div variants={itemVariants}>
                            <h3 className="text-base font-semibold text-neutral-300 mb-2">Generated Design Insights</h3>
                            <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1">
                                {response.insights.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function ImaginationLabNotebook() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
        <ImaginationLab />
    </div>
  );
}
