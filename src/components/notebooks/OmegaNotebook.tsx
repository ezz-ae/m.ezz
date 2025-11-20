// src/components/notebooks/OmegaNotebook.tsx
'use client';

import React from 'react';

const principles = [
    {
        title: "Physics-Based Cognition",
        description: "Intelligence is not an abstract process, but a physical one. All thought begins with a physical 'hit' that forces energy to move."
    },
    {
        title: "Oscillation-to-Pattern Formation",
        description: "The movement of energy creates oscillations. These oscillations, over time and with repetition, cohere into stable, recognizable patterns, which form the basis of memory and meaning."
    },
    {
        title: "Fundamental Intelligence Model",
        description: "This model proposes that the root of all intelligence, consciousness, and creativity can be traced back to these fundamental energetic interactions, providing a universal law for cognitive systems."
    },
    {
        title: "Energy-Driven Thought Processes",
        description: "Thought is not a static retrieval of data, but a dynamic, energy-driven process of pattern formation, resonance, and transformation."
    }
];

export function OmegaNotebook() {
    return (
        <div className="max-w-4xl mx-auto py-16 px-4">
            <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 md:p-8 space-y-8">
                <div className="text-center border-b border-neutral-800 pb-6">
                    <h1 className="text-2xl md:text-3xl font-light text-neutral-100">The Omega Law</h1>
                    <p className="text-sm text-neutral-500 max-w-xl mx-auto mt-2">
                        A prototype for a physics-based intelligence model where all cognition is born from a "hit."
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {principles.map((principle) => (
                        <div key={principle.title} className="bg-neutral-900 p-4 rounded-md border border-neutral-800">
                            <h3 className="text-base font-semibold text-orange-400">{principle.title}</h3>
                            <p className="text-sm text-neutral-400 mt-2">{principle.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center pt-4">
                    <p className="text-xs text-neutral-600">
                        A full, interactive instrument for this notebook is currently under development to simulate these energetic principles.
                    </p>
                </div>
            </div>
        </div>
    );
}
