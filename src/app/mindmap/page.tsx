// src/app/mindmap/page.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/components/ScrollTypography';
import { GitBranch } from 'lucide-react';
import { cn } from '@/lib/utils';

const mindMapData = {
    id: 'root',
    title: 'FCT: The Cognitive Safety Layer in AI',
    subtitle: 'Current AI has a fatal flaw: perfect memory. The solution is a Completing AI that stabilizes and supports human intelligence.',
    children: [
        {
            id: 'arch',
            title: 'System Architecture (The OS View)',
            subtitle: 'The five cognitive layers that form the AIXSELF Universe.',
            children: [
                { id: 'adept', title: 'ADEPT: Cognitive Kernel', subtitle: 'The root processor. Orchestrates models, manages pipelines, and connects all modules.' },
                { id: 'aixa', title: 'AIXA: Deployment Interface', subtitle: 'User-facing layer for training and deploying personalized AI clones with verifiable credentials.' },
                { id: 'notefull', title: 'NotefullBook: Memory Fabric', subtitle: 'The append-only, cryptographically signed knowledge store for all consented data.' },
                { id: 'aixiam', title: 'AIXIAM: Identity Layer', subtitle: 'The sovereign identity system that issues a non-transferable passport (DID) to each human-AI pair.' },
                { id: 'aixeye', title: 'AIXEYE: Governance Mesh', subtitle: 'The AI-driven financial and ethical auditor. It validates consent, scores merit, and ensures alignment.' },
            ],
        },
        {
            id: 'mech',
            title: 'Cognitive Mechanism (FCT Enforcement)',
            subtitle: 'How the system achieves safety and learning through purposeful forgetting.',
            children: [
                { id: 'sinlm', title: 'SINLM (Behavioral Truth)', subtitle: 'Learns importance by tracking behavioral signals (frequency, return-rate), not by reading private content.' },
                { id: 'fam', title: 'FAM (Cognitive Waste Management)', subtitle: 'Performs intelligent forgetting by deleting raw data while preserving compressed patterns (artifacts).' },
                { id: 'irl', title: 'IRL (Meaning-First Retrieval)', subtitle: 'Ensures the AI retrieves the underlying meaning or schema of a memory, not the raw, literal event.' },
                { id: 'esf', title: 'ESF (Emotional Attenuation)', subtitle: 'Applies temporal decay to the emotional intensity of memory tags, preventing harmful recall.' },
            ],
        },
        {
            id: 'product',
            title: 'Entry Product: The NotefullBook OS',
            subtitle: 'The tangible result of the architecture: a personal AI notebook OS.',
            children: [
                { id: 'cards', title: 'Notebook Cards', subtitle: 'Represents intelligences as "living minds" that can be deployed, trained, or put to sleep.' },
                { id: 'meter', title: 'Reflection Meter', subtitle: 'A glowing pulse indicating the notebook is actively learning and evolving its internal logic.' },
                { id: 'skills', title: 'Master Skills', subtitle: 'Defines the core cognitive personality (e.g., Organizer, Analyzer) from birth via NotebookML.' },
                { id: 'sensehub', title: 'Input Console (SenseHub)', subtitle: 'The interface to connect the notebook to diverse data streams (voice, APIs, docs).' },
                { id: 'ledger', title: 'Cognitive Ledger', subtitle: 'An immutable, hash-chained timeline making the AI\'s thought process fully auditable.' },
            ],
        },
    ],
};


const Node = ({ node, level = 0, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const hasChildren = node.children && node.children.length > 0;
    const isLeaf = !hasChildren;

    const variants = {
        open: { height: 'auto', opacity: 1, marginTop: level > 1 ? '16px' : '24px' },
        closed: { height: 0, opacity: 0, marginTop: 0 },
    };

    return (
        <div className={cn('relative', level > 0 && 'pl-6 border-l border-neutral-800')}>
            <div 
                className={cn('flex items-center gap-3', hasChildren && 'cursor-pointer group')} 
                onClick={() => hasChildren && setIsOpen(!isOpen)}
            >
                <div className={cn(
                    "flex-shrink-0 h-3 w-3 rounded-full flex items-center justify-center transition-all",
                    isLeaf 
                        ? 'bg-orange-500/80 border border-orange-500/80'
                        : isOpen 
                            ? 'bg-orange-500/50 border border-orange-500'
                            : 'bg-neutral-800 border border-neutral-700 group-hover:border-neutral-500'
                )}>
                    {!isLeaf && <div className={cn("h-1 w-1 rounded-full", isOpen ? "bg-orange-200/50" : "bg-neutral-500")}></div>}
                </div>
                <div>
                    <h3 className={cn(
                        "font-semibold text-neutral-200",
                        level === 0 && "text-xl",
                        level === 1 && "text-lg",
                        level === 2 && "text-base",
                    )}>{node.title}</h3>
                    {node.subtitle && <p className="text-xs text-neutral-500">{node.subtitle}</p>}
                </div>
            </div>

            <AnimatePresence initial={false}>
                {hasChildren && isOpen && (
                    <motion.div
                        variants={variants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="overflow-hidden"
                    >
                        <div className="pt-4 space-y-4">
                        {node.children.map(child => <Node key={child.id} node={child} level={level + 1} />)}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


export default function MindMapPage() {
  return (
    <div className="min-h-screen bg-black text-neutral-100 overflow-x-hidden pt-24">
      <div className="container mx-auto px-4 py-16">
        <Section className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-light text-neutral-100">The Map of Generative Cognition</h1>
            <p className="text-base md:text-lg text-neutral-400 mt-4">
                An interactive, multi-layered summary of the entire philosophical and scientific framework.
            </p>
        </Section>
        
        <Section className="max-w-4xl mx-auto">
            <Node node={mindMapData} defaultOpen={true} />
        </Section>
      </div>
    </div>
  );
}
