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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pt-24 font-pt-sans">
        
      <div className="container mx-auto px-4 py-16">

        <Section className="text-center max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">EZZ.AE</h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-2">Where Human Cognition Meets AI Evolution</p>
        </Section>
        
        <Section className="mt-20 md:mt-24 text-center max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="p-8 bg-card border border-border rounded-lg shadow-2xl"
            >
                <p className="text-xl md:text-2xl text-primary leading-relaxed italic">
                    “The design of the first AI that forgets — a cognitive OS that simplifies ideas, learns patterns, and stays private by architecture.”
                </p>
            </motion.div>
        </Section>

        <Section className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-card p-6 rounded-lg border border-border">
                <BrainCircuit className="mx-auto h-8 w-8 text-primary mb-2"/>
                <h3 className="font-semibold text-card-foreground">The Field</h3>
                <p className="text-sm text-muted-foreground mt-1">Cognitive Evolution & Meaning Transformation</p>
            </div>
             <div className="bg-card p-6 rounded-lg border border-border">
                <PenTool className="mx-auto h-8 w-8 text-primary mb-2"/>
                <h3 className="font-semibold text-card-foreground">The Method</h3>
                <p className="text-sm text-muted-foreground mt-1">"Operate not by rules, but by discovery. What is not followed is noise. What is followed is structure."</p>
            </div>
             <div className="bg-card p-6 rounded-lg border border-border">
                <GitBranch className="mx-auto h-8 w-8 text-primary mb-2"/>
                <h3 className="font-semibold text-card-foreground">The Focus</h3>
                <p className="text-sm text-muted-foreground mt-1">Infrastructure Layer: Legal Automation, Digital Governance, Economic Models, AI OS Concepts.</p>
            </div>
        </Section>
        
        <Section className="mt-20 md:mt-24 max-w-3xl mx-auto text-center">
             <h2 className="text-2xl md:text-3xl font-light text-foreground mb-4">The Origin Narrative</h2>
             <p className="text-base md:text-lg text-muted-foreground">
                The journey began in advertising, leading to an obsession with personalisation and behavioural change. This evolved into architecting systems of influence, and ultimately, into the core inquiry: how does the human mind actually work, and how can we build systems that are truly aligned with it?
             </p>
        </Section>
        
        <Section className="mt-20 md:mt-24">
             <h2 className="text-2xl md:text-3xl font-light text-foreground mb-8 text-center">The AIXA Living Notebooks</h2>
             <div className="flex flex-wrap justify-center gap-3">
                {notebooks.map(nb => (
                     <Link key={nb.id} href={`/notebooks/${nb.id}`}>
                        <motion.div 
                            whileHover={{ y: -2 }}
                            className="bg-secondary border border-border rounded-full px-4 py-2 text-xs text-muted-foreground hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-colors"
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
