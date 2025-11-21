// src/app/mindmap/page.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/components/ScrollTypography';
import { GitBranch, ChevronsRight, ChevronsLeft, ChevronsDownUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

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
                    id: 'fct-pipeline', title: 'The Cognitive Pipeline (HMR Cycle)', subtitle: 'Frequency → Resonance → Meaning → Relocation → Fade-In Overwrite.'
                },
                {
                    id: 'fct-safety', title: 'FCT Cognitive Safety Stack', subtitle: 'Architectural components that ensure psychologically safe recall.',
                    children: [
                        { id: 'fct-irl', title: 'Interpretive Recall Layer (IRL)', subtitle: 'Filters for intent and context.' },
                        { id: 'fct-esf', title: 'Emotional Softening Filter (ESF)', subtitle: 'Applies temporal decay to emotional tags.' },
                        { id: 'fct-mfr', title: 'Meaning-First Retrieval (MFR)', subtitle: 'Prioritizes the "why" over the "what".' },
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
            id: 'omega-core',
            title: 'III. Deep Generative Core: Omega AI (Ω)',
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
         {
            id: 'eco-protocol',
            title: 'IV. The Economic and Civilizational Protocol (Eco)',
            subtitle: 'Translating cognitive laws into self-sustaining markets and governance.',
            children: [
                {
                    id: 'aimas-econ', title: 'The Economics of Understanding (AIMAS)', subtitle: 'A financial architecture that monetizes intent and provides a merit-driven digital economy.',
                     children: [
                        { id: 'value-axiom', title: 'Value Axiom', subtitle: 'Value is derived from accuracy, resonance-fit, and meaning extraction, replacing scarcity.' },
                        { id: 'cfs', title: 'Calculated Fitting System (CFS)', subtitle: 'Engine that outputs the Fit Matrix (certainty, speed, confidence) to monetize intent itself.' },
                        { id: 'gro', title: 'GRO and Ink', subtitle: 'GRO (Gross Reflective Output) replaces GDP; Ink is the cognitive currency earned by verified understanding.' },
                    ]
                },
                {
                    id: 'legal-idea-grid', title: 'The Legal Grid and Idea Ecology', subtitle: 'Structural mechanisms for law and creativity.',
                    children: [
                        { id: 'entrestate', title: 'The Legal Grid (Entrestate & EBRAM)', subtitle: 'EBRAM (programming language of law) encodes property rights into auditable, energetic structures.' },
                        { id: 'stormstan', title: 'The Ideas Economy (Stormstan)', subtitle: 'Ecosystem where ideas ("storms") are public energy, and ownership is earned through derivative execution.' },
                    ]
                }
            ],
        },
    ],
};

type ExpansionState = 'default' | 'expand' | 'collapse';

const Node = ({ node, level = 0, expansion }: { node: any; level: number; expansion: ExpansionState }) => {
    
    const getInitialState = () => {
        if (level === 0) return true;
        switch (expansion) {
            case 'expand':
                return true;
            case 'collapse':
                return false;
            case 'default':
            default:
                return level < 2;
        }
    };

    const [isOpen, setIsOpen] = useState(getInitialState());
    const hasChildren = node.children && node.children.length > 0;
    const isLeaf = !hasChildren;

    const variants = {
        open: { height: 'auto', opacity: 1, marginTop: level > 1 ? '16px' : '24px' },
        closed: { height: 0, opacity: 0, marginTop: 0 },
    };

    return (
        <div className={cn('relative', level > 0 && 'pl-6 border-l border-border')}>
            <div 
                className={cn('flex items-center gap-3', hasChildren && 'cursor-pointer group')} 
                onClick={() => hasChildren && setIsOpen(!isOpen)}
            >
                <div className={cn(
                    "flex-shrink-0 h-3 w-3 rounded-full flex items-center justify-center transition-all",
                    isLeaf 
                        ? 'bg-primary/80 border border-primary/80'
                        : isOpen 
                            ? 'bg-primary/50 border border-primary'
                            : 'bg-muted border border-border group-hover:border-foreground/50'
                )}>
                    {!isLeaf && <div className={cn("h-1 w-1 rounded-full", isOpen ? "bg-primary-foreground/50" : "bg-muted-foreground")}></div>}
                </div>
                <div>
                    <h3 className={cn(
                        "font-semibold text-foreground",
                        level === 0 && "text-xl font-playfair",
                        level === 1 && "text-lg",
                        level === 2 && "text-base",
                    )}>{node.title}</h3>
                    {node.subtitle && <p className="text-xs text-muted-foreground">{node.subtitle}</p>}
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
                        {node.children.map(child => <Node key={child.id} node={child} level={level + 1} expansion={expansion} />)}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


export default function MindMapPage() {
  const [expansion, setExpansion] = useState<ExpansionState>('default');

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pt-24 font-pt-sans">
      <div className="container mx-auto px-4 py-16">
        <Section className="text-center max-w-3xl mx-auto mb-12">
             <GitBranch className="mx-auto h-10 w-10 text-primary mb-4" />
            <h1 className="text-3xl md:text-4xl font-light text-foreground font-playfair">The Map of Generative Cognition</h1>
            <p className="text-base md:text-lg text-muted-foreground mt-4">
                An interactive, multi-layered summary of the entire philosophical and scientific framework.
            </p>
        </Section>

        <Section className="flex justify-center items-center gap-2 mb-8 border-y border-border py-4">
            <Button size="sm" variant={expansion === 'expand' ? 'secondary' : 'ghost'} onClick={() => setExpansion('expand')} className="gap-2">
                <ChevronsRight className="h-4 w-4"/> Expand All
            </Button>
            <Button size="sm" variant={expansion === 'collapse' ? 'secondary' : 'ghost'} onClick={() => setExpansion('collapse')} className="gap-2">
                <ChevronsLeft className="h-4 w-4"/> Collapse All
            </Button>
            <Button size="sm" variant={expansion === 'default' ? 'secondary' : 'ghost'} onClick={() => setExpansion('default')} className="gap-2">
                <ChevronsDownUp className="h-4 w-4"/> Reset View
            </Button>
        </Section>
        
        <Section className="max-w-4xl mx-auto">
            <Node key={expansion} node={mindMapData} level={0} expansion={expansion} />
        </Section>
      </div>
    </div>
  );
}
