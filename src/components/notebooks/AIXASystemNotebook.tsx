// src/components/notebooks/AIXASystemNotebook.tsx
'use client';

import React from 'react';
import { Section } from '../ScrollTypography';

const fivePillars = [
    {
        name: 'ADEPT',
        role: 'Cognitive Kernel',
        description: 'The root processor for the entire system. Orchestrates AI models, manages computational pipelines, and connects all other modules.'
    },
    {
        name: 'AIXA',
        role: 'Deployment Interface',
        description: 'The user-facing layer for training, managing, and deploying personalized AI clones with verifiable credentials.'
    },
    {
        name: 'NotefullBook',
        role: 'Memory Fabric',
        description: 'The append-only, cryptographically signed knowledge store where all consented data and evolving thoughts are recorded.'
    },
    {
        name: 'AIXIAM',
        role: 'Identity Layer',
        description: 'The sovereign identity system that issues a non-transferable passport (DID) to each human-AI pair, enforcing ownership.'
    },
    {
        name: 'AIXEYE',
        role: 'Governance Mesh',
        description: 'The AI-driven financial and ethical auditor. It validates consent, scores merit, and ensures all actions align with protocol rules.'
    }
];

const cognitiveMechanisms = [
    {
        name: 'Schema Intelligence Network (SINLM)',
        principle: 'Behavioral Truth',
        purpose: 'Learns what is important by tracking behavioral signals like frequency and return-rate, not by reading private content.'
    },
    {
        name: 'Forgetting Artifact Module (FAM)',
        principle: 'Cognitive Waste Management',
        purpose: 'Performs intelligent forgetting by deleting raw, noisy data while preserving compressed patterns (artifacts) for future learning.'
    },
    {
        name: 'Interpretive Recall Layer (IRL)',
        principle: 'Meaning-First Retrieval',
        purpose: 'Ensures the AI retrieves the underlying meaning, pattern, or schema of a memory, not just the raw, literal event.'
    },
    {
        name: 'Emotional Softening Filter (ESF)',
        principle: 'Emotional Attenuation',
        purpose: 'Applies temporal decay to the emotional intensity of memory tags, preventing the harmful revival of past trauma at full strength.'
    }
];

export function AIXASystemNotebook() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 md:p-8 space-y-12">
            
            <Section className="text-center border-b border-neutral-800 pb-8">
                <h1 className="text-2xl md:text-3xl font-light text-neutral-100">AIXSELF: The Architectural Blueprint</h1>
                <p className="text-sm text-neutral-500 max-w-2xl mx-auto mt-2">
                    A unified OS view of the five cognitive layers and core mechanisms that form the AIXSELF Universe.
                </p>
            </Section>

            <Section>
                <h2 className="text-xl font-light text-orange-400 mb-2">The Central Thesis</h2>
                <p className="text-sm text-neutral-400">
                    Current AI systems rely on perfect, archival memory, which is psychologically unsafe. The solution is a design for <strong className="text-white">Completing AI</strong> that stabilizes, supports, and amplifies human intelligence by embracing a new cognitive architecture founded on the principle of forgetting.
                </p>
            </Section>

            <Section>
                <h2 className="text-xl font-light text-orange-400 mb-4">System Architecture: The Five Pillars</h2>
                <div className="grid grid-cols-1 gap-4">
                    {fivePillars.map(pillar => (
                        <div key={pillar.name} className="bg-neutral-900 p-4 rounded-md border border-neutral-800">
                            <h3 className="font-semibold text-neutral-200">{pillar.name}: <span className="text-neutral-400 font-light">{pillar.role}</span></h3>
                            <p className="text-xs text-neutral-500 mt-1">{pillar.description}</p>
                        </div>
                    ))}
                </div>
            </Section>
            
            <Section>
                <h2 className="text-xl font-light text-orange-400 mb-4">Cognitive Mechanism: FCT Enforcement</h2>
                <div className="space-y-4">
                    {cognitiveMechanisms.map(mech => (
                        <div key={mech.name} className="bg-neutral-900 p-4 rounded-md border border-neutral-800">
                            <h3 className="font-semibold text-neutral-200">{mech.name}</h3>
                            <p className="text-xs font-mono text-green-400/70 mt-1">{mech.principle}</p>
                            <p className="text-xs text-neutral-500 mt-2">{mech.purpose}</p>
                        </div>
                    ))}
                </div>
            </Section>

        </div>
    </div>
  );
}
