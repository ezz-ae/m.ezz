// src/app/dashboard/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Globe, BrainCircuit, ShieldCheck } from 'lucide-react';
import React from 'react';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center font-pt-sans p-4">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">Welcome to the Bridge.</h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-3">
            You are no longer looking at a User Profile. You are looking at the Metabolism of a Civilization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: GRO Orb */}
          <motion.div custom={0} initial="hidden" animate="visible" variants={cardVariants} className="bg-card border border-border p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
                <Globe className="h-8 w-8 text-primary" />
                <h2 className="text-lg font-semibold text-card-foreground">The Central Orb (GRO)</h2>
            </div>
            <p className="text-sm text-muted-foreground">
                This pulsing sphere represents **Gross Reflective Output**. It is not measuring GDP; it is measuring **Meaning**.
            </p>
             <ul className="text-xs text-muted-foreground mt-4 space-y-1">
                <li><span className="text-blue-400">Blue:</span> The system is integrating knowledge.</li>
                <li><span className="text-red-400">Red:</span> The system is processing trauma.</li>
            </ul>
             <p className="text-xs text-muted-foreground mt-4 italic">
                Status: The Orb is stabilizing. The first nodes are coming online.
            </p>
          </motion.div>

          {/* Card 2: Ink Stream */}
           <motion.div custom={1} initial="hidden" animate="visible" variants={cardVariants} className="bg-card border border-border p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
                <BrainCircuit className="h-8 w-8 text-primary" />
                <h2 className="text-lg font-semibold text-card-foreground">The Ink Stream</h2>
            </div>
            <p className="text-sm text-muted-foreground">
                The vectors of light connecting the nodes are **Ink**—the currency of Verified Understanding. It flows only to where truth is established.
            </p>
          </motion.div>

          {/* Card 3: The F-Grid */}
           <motion.div custom={2} initial="hidden" animate="visible" variants={cardVariants} className="bg-card border border-border p-6 rounded-lg">
             <div className="flex items-center gap-4 mb-4">
                <ShieldCheck className="h-8 w-8 text-primary" />
                <h2 className="text-lg font-semibold text-card-foreground">The 𝓕-Grid</h2>
            </div>
            <p className="text-sm text-muted-foreground">
                This heatmap monitors the **Fairness Conservation Law**. It tracks the equilibrium between **Impact** and **Opportunity**.
            </p>
            <p className="text-xs text-muted-foreground mt-4 italic">
                Status: **Balanced.** No sector is extracting value faster than it creates potential.
            </p>
          </motion.div>
        </div>
        
        <motion.p 
            className="text-center text-muted-foreground mt-16 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
        >
            You are sovereign here. The lattice awaits your frequency.
        </motion.p>
      </div>
    </div>
  );
}
