// src/app/about/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ScrollTypography';
import { BrainCircuit, PenTool, GitBranch } from 'lucide-react';
import Link from 'next/link';

const notebooks = [
    { id: 'forgetence', tag: 'COGNITIVE ARCHITECTURE' },
    { id: 'notefullbook', tag: 'OS · LANGUAGE' },
    { id: 'aixself', tag: 'IDENTITY · AI CLONES' },
    { id: 'dldchain', tag: 'DLDCHAIN · MASHROI' },
    { id: 'security', tag: 'LUREDOOR · KAP' },
    { id: 'puzzles', tag: 'EZZTON · SETUP' },
    { id: 'scroll-lesson', tag: 'PHILOSOPHY · LANGUAGE' },
];

export default function AboutPage() {

  return (
    <div className="min-h-screen bg-black text-neutral-100 overflow-x-hidden pt-24 font-pt-sans">
        
        {/* Parallax Background Shapes */}
        <motion.div className="fixed top-0 left-0 w-full h-full z-[-1] opacity-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2 }}
        >
            <motion.div 
                className="absolute top-[10%] left-[10%] w-48 h-48 bg-orange-500/50 rounded-full filter blur-3xl"
                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div 
                className="absolute bottom-[15%] right-[15%] w-64 h-64 bg-blue-500/50 rounded-full filter blur-3xl"
                animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            />
        </motion.div>

      <div className="container mx-auto px-4 py-16">

        <Section className="text-center max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-neutral-100">EZZ.AE</h1>
          <p className="text-lg md:text-xl text-neutral-300 mt-2">Where Human Cognition Meets AI Evolution</p>
        </Section>
        
        <Section className="mt-20 md:mt-24 text-center max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="p-8 bg-neutral-950/50 border border-neutral-800 rounded-lg shadow-2xl"
            >
                <p className="text-xl md:text-2xl text-orange-300/90 leading-relaxed italic">
                    “I’m designing the first AI that forgets — a cognitive OS that simplifies your ideas, learns your patterns, and stays private by architecture.”
                </p>
            </motion.div>
        </Section>

        <Section className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-neutral-900/50 p-6 rounded-lg border border-neutral-800">
                <BrainCircuit className="mx-auto h-8 w-8 text-orange-400 mb-2"/>
                <h3 className="font-semibold text-neutral-200">The Field</h3>
                <p className="text-sm text-neutral-400 mt-1">Cognitive Evolution & Meaning Transformation</p>
            </div>
             <div className="bg-neutral-900/50 p-6 rounded-lg border border-neutral-800">
                <PenTool className="mx-auto h-8 w-8 text-orange-400 mb-2"/>
                <h3 className="font-semibold text-neutral-200">The Method</h3>
                <p className="text-sm text-neutral-400 mt-1">"I don’t operate by rules — I operate by discovery. What I don’t follow is noise. What I follow is structure."</p>
            </div>
             <div className="bg-neutral-900/50 p-6 rounded-lg border border-neutral-800">
                <GitBranch className="mx-auto h-8 w-8 text-orange-400 mb-2"/>
                <h3 className="font-semibold text-neutral-200">The Focus</h3>
                <p className="text-sm text-neutral-400 mt-1">Infrastructure Layer: Legal Automation, Digital Governance, Economic Models, AI OS Concepts.</p>
            </div>
        </Section>
        
        <Section className="mt-20 md:mt-24 max-w-3xl mx-auto text-center">
             <h2 className="text-2xl md:text-3xl font-light text-neutral-200 mb-4">The Origin Narrative</h2>
             <p className="text-base md:text-lg text-neutral-400">
                The journey began in advertising, leading to an obsession with personalisation and behavioural change. This evolved into architecting systems of influence, and ultimately, into the core inquiry: how does the human mind actually work, and how can we build systems that are truly aligned with it?
             </p>
        </Section>
        
        <Section className="mt-20 md:mt-24">
             <h2 className="text-2xl md:text-3xl font-light text-neutral-200 mb-8 text-center">The AIXA Living Notebooks</h2>
             <div className="flex flex-wrap justify-center gap-3">
                {notebooks.map(nb => (
                     <Link key={nb.id} href={`/notebooks/${nb.id}`}>
                        <motion.div 
                            whileHover={{ scale: 1.1 }}
                            className="bg-neutral-800/50 border border-neutral-700 rounded-full px-4 py-2 text-xs text-neutral-300 hover:bg-orange-500/20 hover:border-orange-500/50 hover:text-orange-300 transition-colors"
                        >
                            {nb.tag}
                        </motion.div>
                     </Link>
                ))}
             </div>
        </Section>

      </div>
    </div>
  );
}
