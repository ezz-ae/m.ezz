// src/components/notebooks/MindmapView.tsx
"use client";

import { motion } from 'framer-motion';

const concepts = [
    { name: 'Intelligence', position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' },
    { name: 'Forgetting', position: 'top-1/4 left-1/4' },
    { name: 'Memory', position: 'top-1/4 right-1/4' },
    { name: 'Frequency', position: 'bottom-1/4 left-1/4' },
    { name: 'Resonance', position: 'bottom-1/4 right-1/4' },
    { name: 'Pattern', position: 'top-1/2 left-1/4 -translate-y-1/2' },
    { name: 'Simplification', position: 'top-1/2 right-1/4 -translate-y-1/2' },
];

export function MindmapView() {
  MindmapView.displayName = 'MindmapView';
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="relative border-t border-white/10 pt-10">
             <div className="relative w-full h-96 rounded-lg bg-neutral-900 border border-white/10 overflow-hidden">
                {/* Placeholder for lines */}
                <svg className="absolute inset-0 w-full h-full opacity-10" width="100%" height="100%">
                    <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="currentColor" strokeWidth="1" />
                    <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="currentColor" strokeWidth="1" />
                    <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="currentColor" strokeWidth="1" />
                    <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="currentColor" strokeWidth="1" />
                    <line x1="50%" y1="50%" x2="25%" y2="50%" stroke="currentColor" strokeWidth="1" />
                    <line x1="50%" y1="50%" x2="75%" y2="50%" stroke="currentColor" strokeWidth="1" />
                </svg>

                {concepts.map((concept, i) => (
                    <motion.div
                        key={concept.name}
                        className={`absolute p-2 ${concept.position}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                        <div className="px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-full text-sm text-neutral-200 whitespace-nowrap">
                            {concept.name}
                        </div>
                    </motion.div>
                ))}
                
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <p className="text-neutral-600 text-sm">Mind Map View (Placeholder)</p>
                </div>
            </div>
        </div>
    </div>
  );
}
