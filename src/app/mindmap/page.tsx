// src/app/mindmap/page.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/components/ScrollTypography';
import { GitBranch } from 'lucide-react';
import { cn } from '@/lib/utils';

const mindMapData = {
    id: 'root',
    title: 'The Map of Generative Cognition',
    subtitle: 'A unified model of the FCT/AIXSELF intellectual universe, from foundational physics to societal implementation.',
    children: [
        {
            id: 'fct-law',
            title: 'I. Foundational Cognitive Law: Forgetting Core Thinking (FCT)',
            subtitle: 'Forgetting is the engine of intelligence, safety, and stability.',
            children: [
                {
                    id: 'fct-physics', title: 'The Physics of Memory', subtitle: 'Cognition as a physical, not just informational, process.',
                    children: [
                        { id: 'fct-freq', title: 'Frequency', subtitle: 'The law of everything; repetition creates meaning.' },
                        { id: 'fct-tags', title: 'Tags & Resonance', subtitle: 'Emotion as a chemical tag; resonance as the survival-analysis engine.' },
                        { id: 'fct-zero', title: 'The Zero Activation Law', subtitle: 'Recall is reconstruction, not replay.' },
                        { id: 'fct-fade', title: 'Fade-In Theory', subtitle: 'Forgetting is evolution; the transformation of raw memory into intelligence.' },
                    ],
                },
                {
                    id: 'fct-pipeline', title: 'The Cognitive Pipeline (HMR Cycle)', subtitle: 'Frequency → Adaptation → Resonance → Meaning → Relocation → Fade-In Overwrite.'
                },
                {
                    id: 'fct-safety', title: 'FCT Cognitive Safety Stack', subtitle: 'Architectural components that ensure psychologically safe recall.',
                    children: [
                        { id: 'fct-irl', title: 'Interpretive Recall Layer (IRL)', subtitle: 'Filters for intent and context.' },
                        { id: 'fct-esf', title: 'Emotional Softening Filter (ESF)', subtitle: 'Applies temporal decay to emotional tags.' },
                        { id: 'fct-mfr', title: 'Meaning-First Retrieval (MFR)', subtitle: 'Prioritizes the "why" over the "what".' },
                        { id: 'fct-sinlm', title: 'Schema Intelligence Network (SINLM)', subtitle: 'Learns behavioral patterns with zero content analysis.' },
                    ]
                }
            ],
        },
        {
            id: 'aixself-arch',
            title: 'II. Architectural Blueprint: The AIXSELF Universe',
            subtitle: 'A five-layered cognitive operating system mirroring human development.',
            children: [
                { id: 'adept', title: 'L1 Genesis: ADEPT (Cognitive Kernel)', subtitle: 'The root orchestrator and logical heart.' },
                { id: 'aixa', title: 'L2 Expression: AIXA (Deployment Interface)', subtitle: 'Manages the creation and training of human-AI clones.' },
                { id: 'notefullbook-arch', title: 'L3 Memory: NOTEFULLBOOK (Memory Fabric)', subtitle: 'The signed, evolving knowledge store that "kills the archive."' },
                { id: 'aixiam', title: 'L4 Identity: AIXIAM (Identity Layer)', subtitle: 'Provides the verifiable, non-transferable AIXSELF Passport.' },
                { id: 'aixeye', title: 'L5 Governance: AIXEYE (Governance Mesh)', subtitle: 'The ethical, transparent auditor regulating the civilization.' },
            ],
        },
        {
            id: 'notefullbook-impl',
            title: 'III. Implementation Layer: NotefullBook ML',
            subtitle: 'The Artificial Simplification Engine that transforms data into clarity.',
             children: [
                { id: 'notebookml', title: 'NotebookML', subtitle: 'The "language of thought" enabling portable, verifiable intelligence.' },
                { id: 'sensehub', title: 'SenseHub', subtitle: 'The unified ingestion pipeline translating chaos into structured thought.' },
                { id: 'reflection-engine', title: 'Reflection Engine', subtitle: 'The background process running the FCT cycle for autonomous growth.' },
            ],
        },
        {
            id: 'aimas-econ',
            title: 'IV. Economic System: AIMAS',
            subtitle: 'An AI-native monetization infrastructure that treats intent as currency.',
             children: [
                { id: 'cfs', title: 'Calculated Fitting System (CFS)', subtitle: 'The mathematical engine that calculates fit, replacing choice with certainty.' },
                { id: 'fit-matrix', title: 'The Fit Matrix', subtitle: 'The monetizable output: ETA, Success %, Confidence Level, Free vs. Paid Path.' },
                {
                    id: 'native-organs', title: 'Native Organs (The Living Anatomy)', subtitle: 'The biological-like components of the economic system.',
                    children: [
                         { id: 'nyk', title: 'NYK (Identity Organ)', subtitle: 'Top-level anchor filtering every intent.' },
                         { id: 'force-notes', title: 'Force Notes (Nervous Organ)', subtitle: 'The immutable ledger of wants and cycles.' },
                         { id: 'was', title: 'Was (Reflex Layer)', subtitle: 'Provides reflexive behavioral feedback, not ratings.' },
                         { id: 'triggers', title: 'Triggers (Pulse Organ)', subtitle: 'Shifts latent wants to urgent states.' },
                    ]
                },
            ],
        },
        {
            id: 'omega-core',
            title: 'V. Deep Generative Core: Omega AI (Ω)',
            subtitle: 'A parallel, zero-trust architecture defining intelligence as an energetic process.',
            children: [
                { id: 'omega-foundations', title: 'Energetic Foundations', subtitle: 'Replaces symbolic computation with energy mechanics.',
                    children: [
                        { id: 'omega-roots', title: 'Omega Roots (Ω-ROOTS)', subtitle: 'The deep substrate of infinite energetic potential.' },
                        { id: 'sega-engine', title: 'SEGA Engine', subtitle: 'The energy reactor powering cognition (Stability, Memory, Adaptive, Identity).' },
                    ]
                },
                { id: 'omega-levels', title: 'Levelized Modular Architecture', subtitle: 'Self-bootstrapped, memory-free, and provably safe.',
                    children: [
                        { id: 'l0', title: 'Level 0: Atomic Operators', subtitle: 'Generates seed Knowledge Atoms and proofs.' },
                        { id: 'l1', title: 'Level 1: Semantic Expansion', subtitle: 'Creates dynamic Memory Cells from validated atoms.' },
                        { id: 'l2', title: 'Level 2: Generative Dynamics', subtitle: 'Evolves ideas and fuses memory cells.' },
                        { id: 'l3', title: 'Level 3: Systemic Consensus', subtitle: 'Validates and aligns memory packets across modules.' },
                        { id: 'l4', title: 'Level 4: Alignment Enforcement', subtitle: 'Propagates only outputs that meet global safety invariants.' },
                    ]
                }
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
                        {node.children.map(child => <Node key={child.id} node={child} level={level + 1} defaultOpen={level < 1} />)}
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
             <GitBranch className="mx-auto h-10 w-10 text-orange-400 mb-4" />
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
