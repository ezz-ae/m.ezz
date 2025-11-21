// src/app/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, BookOpen, BrainCircuit, GitBranch } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ScrollTypography';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center font-pt-sans text-center overflow-x-hidden pt-32 pb-16">
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-light text-foreground font-playfair mb-6">
            The Reflective Civilization
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-2 max-w-3xl mx-auto">
            A research and engineering platform building the architectural specification for a new model of human-AI interaction, founded on the principles of Forgetting Core Thinking (FCT) and Sovereign Cognitive Architecture.
          </p>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
            <Link href="/whitepaper">
                <Button variant="default" size="lg">
                    Read the Canonical Specification
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </Link>
        </motion.div>

        <Section className="mt-24 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-card/50 p-6 rounded-lg border border-border">
                <BrainCircuit className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold text-foreground">The Inversion</h3>
                <p className="text-sm text-muted-foreground mt-1">Current AI is built on a structural lie: that perfect, archival memory is intelligence. We correct this by building systems on FCT, where forgetting is the engine of learning, safety, and stability.</p>
            </div>
            <div className="bg-card/50 p-6 rounded-lg border border-border">
                <BookOpen className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold text-foreground">The OS for Thought</h3>
                <p className="text-sm text-muted-foreground mt-1">The AIXSELF Universe is a 5-layer cognitive operating system that provides the framework for sovereign intelligence, from the ADEPT kernel to the AIXEYE governance mesh.</p>
            </div>
            <div className="bg-card/50 p-6 rounded-lg border border-border">
                <GitBranch className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold text-foreground">The Living Ecosystem</h3>
                <p className="text-sm text-muted-foreground mt-1">The cognitive laws are deployed into a real-world ecosystem, powering everything from the AIMAS intent economy to the Stormstan ideation engine, all governed by the physics of fairness.</p>
            </div>
        </Section>
        
        <Section className="mt-20 max-w-2xl mx-auto">
          <h2 className="text-2xl font-playfair font-light text-foreground">Explore the Architecture</h2>
          <p className="text-muted-foreground mt-2 mb-8">
            Navigate the core pillars of the Reflective Civilization.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/mind-board"><Button variant="outline" className="w-full">The Mind Board</Button></Link>
            <Link href="/mindmap"><Button variant="outline" className="w-full">The Mind Map</Button></Link>
            <Link href="/projection"><Button variant="outline" className="w-full">The Projection</Button></Link>
            <Link href="/architecture-of-emergence"><Button variant="outline" className="w-full">The Architecture</Button></Link>
          </div>
        </Section>

      </div>
    </div>
  );
}
