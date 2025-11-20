// src/components/notebooks/AIXASystemNotebook.tsx
'use client';

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NOTEBOOKS } from '@/components/notebooks/notebook-data';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap, Shield, BrainCircuit, Award, Fingerprint } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ConceptLink } from '@/components/ui/ConceptLink';

/**
 * AIXASystemNotebook: The Central Blueprint of the AIXSELF Universe
 * 
 * This component serves as the main, interactive "OS Notebook" for the entire platform.
 * It is not just a document, but a dynamic analytical tool that allows users to
 * explore the foundational principles of the FCT/AIXSELF architecture.
 * 
 * It features the "Cognitive Focus" system, which enables users to select a
 * core conceptual "vector" (e.g., Sovereignty, Forgetting) and see all relevant
 * terms and ideas highlighted in real-time across the entire text. This
 * transforms the act of reading into an act of guided, interactive analysis.
 */


// --- INTERACTIVE SUB-COMPONENTS ---

const cognitiveVectors = [
    { id: 'sovereignty', name: 'Sovereignty', icon: Fingerprint, keywords: ['Sovereign', 'Sovereignty', 'AIXIAM', 'Passport', 'ownership', 'decentralized', 'control'] },
    { id: 'forgetting', name: 'Forgetting', icon: BrainCircuit, keywords: ['Forgetting', 'FCT', 'decay', 'softening', 'reconstruction', 'Frequency', 'memory', 'forgets'] },
    { id: 'resonance', name: 'Resonance', icon: Zap, keywords: ['Resonance', 'meaning', 'resonates', 'schema', 'survival-analysis', 'understanding'] },
    { id: 'merit', name: 'Merit', icon: Award, keywords: ['Merit-Based', 'value', 'economy', 'contribution', 'AIXEYE', 'verified'] },
    { id: 'safety', name: 'Safety', icon: Shield, keywords: ['Safety', 'safe', 'alignment', 'trap', 'ethical', 'security', 'fairness', 'governance'] },
];

/**
 * CognitiveFocus: The Interactive "Redirection of Thought" UI
 * 
 * This component renders the UI for selecting a "Cognitive Vector." It allows the user
 * to actively guide the AI's analytical lens, demonstrating the concept of a
 * collaborative, "living intelligence."
 * @param {string} activeVector - The currently selected vector's ID.
 * @param {function} onVectorChange - The callback function to update the active vector.
 */
function CognitiveFocus({ activeVector, onVectorChange }) {
    return (
        <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 mb-8 sticky top-4 z-50 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-neutral-300 mb-3 text-center">Cognitive Focus Vector</h3>
            <div className="flex justify-center gap-2 flex-wrap">
                {cognitiveVectors.map((vector) => (
                    <button
                        key={vector.id}
                        onClick={() => onVectorChange(vector.id === activeVector ? null : vector.id)}
                        className={cn(
                            "flex items-center gap-2 text-xs px-3 py-1 rounded-full border transition-all duration-200",
                            activeVector === vector.id
                                ? "bg-orange-500/20 border-orange-500/40 text-orange-300"
                                : "bg-neutral-800/50 border-neutral-700 text-neutral-400 hover:bg-neutral-700/50"
                        )}
                    >
                        <vector.icon size={14} />
                        {vector.name}
                    </button>
                ))}
            </div>
        </div>
    );
}

/**
 * HighlightedContent: The Dynamic Text Renderer
 * 
 * This component takes a string of text and dynamically highlights any words that match
 * the keywords of the currently active "Cognitive Vector." It uses Framer Motion to
 * animate the highlights, creating a fluid and responsive reading experience.
 * @param {string} text - The content to render.
 * @param {string} activeVector - The ID of the currently selected vector.
 * @param {React.ElementType} as - The HTML element to render the content in (e.g., 'p', 'span').
 */
function HighlightedContent({ text, activeVector, as: Component = 'p', children }) {
    const commonClasses = "text-neutral-300 leading-relaxed";
    
    if (!activeVector) {
        return <Component className={cn(commonClasses, Component === 'p' && 'mb-4')}>{children || text}</Component>;
    }

    const vector = cognitiveVectors.find(v => v.id === activeVector);
    const content = children || text;

    if (!vector || typeof content !== 'string') {
        return <Component className={cn(commonClasses, Component === 'p' && 'mb-4')}>{content}</Component>;
    }

    const regex = new RegExp(`\\b(${vector.keywords.join('|')})\\b`, 'gi');
    const parts = content.split(regex);

    return (
        <Component className={cn(commonClasses, Component === 'p' && 'mb-4')}>
            {parts.map((part, i) =>
                regex.test(part) ? (
                    <motion.span
                        key={i}
                        className="bg-orange-500/20 text-orange-300 rounded-sm px-1"
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {part}
                    </motion.span>
                ) : (
                    part
                )
            )}
        </Component>
    );
}


// --- MAIN NOTEBOOK COMPONENT ---

export function AIXASystemNotebook() {
    const [activeVector, setActiveVector] = useState(null);

  return (
    <ScrollArea className="h-[calc(100vh-100px)] px-6 py-8">
      <article className="prose prose-invert max-w-4xl mx-auto pb-16">
        <h1 className="text-4xl md:text-5xl font-light text-neutral-50 mb-8 text-center">The AIXSELF Universe: Reflective Civilization</h1>
        <p className="text-lg text-neutral-300 leading-relaxed mb-12 text-center">
            A comprehensive, five-layered cognitive architecture establishing that <ConceptLink href="/notebooks/forgetence">forgetting</ConceptLink> is the core mechanism required for intelligence, stability, and psychological <ConceptLink href="/notebooks/security">safety</ConceptLink> in machines.
        </p>
        
        <CognitiveFocus activeVector={activeVector} onVectorChange={setActiveVector} />

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-neutral-900/50 border border-neutral-800 h-auto sticky top-28 z-40">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="fct">FCT Law</TabsTrigger>
            <TabsTrigger value="architecture">Architecture</TabsTrigger>
            <TabsTrigger value="manifestations">Manifestations</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="py-8">
            <h2 className="text-2xl font-light text-neutral-100 mb-4">The Reflective Civilization</h2>
            <HighlightedContent activeVector={activeVector}>
                The AIXSELF Universe, often referred to as the Reflective Civilization, is a comprehensive, five-layered cognitive architecture designed to fundamentally redefine AI by establishing that <ConceptLink href="/notebooks/forgetence">forgetting</ConceptLink> is the core mechanism required for intelligence, stability, and psychological <ConceptLink href="/notebooks/security">safety</ConceptLink> in machines.
            </HighlightedContent>
             <HighlightedContent activeVector={activeVector}>
                This paradigm shifts AI from a centralized, archival tool to a <ConceptLink href="/notebooks/aixself">sovereign</ConceptLink>, psychologically safe asset of the individual. AIXSELF is not a platform, a product, or a protocol; it is a civilization where every component adheres to the physics of human cognition.
            </HighlightedContent>
          </TabsContent>

          <TabsContent value="fct" className="py-8">
            <h2 className="text-2xl font-light text-neutral-100 mb-4">The Foundational Law: Forgetting Core Thinking (FCT)</h2>
            <HighlightedContent activeVector={activeVector}>
                The architecture is rooted in the philosophy that perfect memory is a threat to mental health. The AIXSELF Universe is designed to enforce the laws of <ConceptLink href="/notebooks/forgetence">FCT</ConceptLink>, which mandate that intelligence operates through reconstruction and softening, not storage and replay.
            </HighlightedContent>
            <ol className="list-decimal list-inside space-y-2 pl-5 mt-4 text-neutral-300 leading-relaxed">
              <li><HighlightedContent as="span" activeVector={activeVector}>Memory Redefined: Memory is not storage, but reconstruction. Every recall is a simulation.</HighlightedContent></li>
              <li><HighlightedContent as="span" activeVector={activeVector}>Frequency and Tags: Cognition is governed by <ConceptLink href="/notebooks/marketing">frequency</ConceptLink>. Repetition creates frequency, which creates <ConceptLink href="/notebooks/scroll-lesson">meaning</ConceptLink>.</HighlightedContent></li>
              <li><HighlightedContent as="span" activeVector={activeVector}>The Goal (Completing AI): The outcome of FCT is <ConceptLink href="/notebooks/imagination-lab">Completing AI</ConceptLink>, an intelligence that fills cognitive gaps.</HighlightedContent></li>
            </ol>
          </TabsContent>

          <TabsContent value="architecture" className="py-8">
            <h2 className="text-2xl font-light text-neutral-100 mb-4">The Five-Layer Architecture</h2>
            <HighlightedContent activeVector={activeVector}>
                The AIXSELF Universe is implemented as a Cognitive Operating System built on five interdependent layers: thinking → expression → memory → identity → governance.
            </HighlightedContent>
            <ul className="list-disc list-inside space-y-2 pl-5 mt-4 text-neutral-300 leading-relaxed">
                <li><HighlightedContent as="span" activeVector={activeVector}>ADEPT (The Cognitive Kernel): The root orchestrator and processor.</HighlightedContent></li>
                <li><HighlightedContent as="span" activeVector={activeVector}>AIXA (The Deployment Interface): Manages the creation and training of human-AI clones.</HighlightedContent></li>
                <li><HighlightedContent as="span" activeVector={activeVector}><ConceptLink href="/notebooks/notefullbook">NotefullBook</ConceptLink> (The Memory Fabric): The sovereign, signed, evolving memory layer.</HighlightedContent></li>
                <li><HighlightedContent as="span" activeVector={activeVector}><ConceptLink href="/notebooks/aixself">AIXIAM</ConceptLink> (The Identity Layer): Provides verifiable, sovereign, non-transferable identity.</HighlightedContent></li>
                <li><HighlightedContent as="span" activeVector={activeVector}>AIXEYE (The Governance Mesh): The ethical, auditing brain that ensures <ConceptLink href="/notebooks/dldchain">fairness</ConceptLink> and enables a <ConceptLink href="/notebooks/puzzles">merit-based</ConceptLink> economy.</HighlightedContent></li>
            </ul>
          </TabsContent>

          <TabsContent value="manifestations" className="py-8">
            <h2 className="text-2xl font-light text-neutral-100 mb-4">Systemic Manifestations</h2>
            <HighlightedContent activeVector={activeVector}>
                The AIXSELF Universe's core principles manifest as a diverse ecosystem of 'living intelligence' notebooks. Each represents a concrete application.
            </HighlightedContent>
          </TabsContent>
        </Tabs>
      </article>
    </ScrollArea>
  );
}
