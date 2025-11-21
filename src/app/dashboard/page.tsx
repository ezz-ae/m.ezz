'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, BrainCircuit, ShieldCheck } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black text-neutral-200 flex items-center justify-center font-serif">
      <div className="container mx-auto px-4 py-16 text-center">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-light text-orange-400">
            Welcome to the Bridge of the World Engine.
          </h1>
          <p className="text-base md:text-lg text-neutral-400 mt-2">
            You are no longer looking at a User Profile. You are looking at the <strong>Metabolism of a Civilization</strong>.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          
          <motion.div 
            className="bg-neutral-950/70 border border-neutral-800 p-6 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="flex items-center gap-4">
              <Globe className="h-8 w-8 text-blue-400" />
              <h2 className="text-xl font-semibold text-neutral-200">The GRO Orb</h2>
            </div>
            <p className="text-sm text-neutral-400 mt-3">
              The pulsing sphere represents <strong>Gross Reflective Output</strong>. It is not measuring GDP; it is measuring <strong>Meaning</strong>. Blue indicates knowledge integration; red signifies noise and informational friction. The Orb is stabilizing as the first nodes come online.
            </p>
          </motion.div>

          <motion.div 
            className="bg-neutral-950/70 border border-neutral-800 p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <div className="flex items-center gap-4">
              <BrainCircuit className="h-8 w-8 text-green-400" />
              <h2 className="text-xl font-semibold text-neutral-200">Ink Velocity</h2>
            </div>
            <p className="text-sm text-neutral-400 mt-3">
              The vectors of light are <strong>Ink</strong>—the cognitive currency of Verified Understanding. It flows only to where truth is established through computational proof. This measures the real-time flow of consensus across the lattice.
            </p>
          </motion.div>

          <motion.div 
            className="bg-neutral-950/70 border border-neutral-800 p-6 rounded-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <div className="flex items-center gap-4">
              <ShieldCheck className="h-8 w-8 text-purple-400" />
              <h2 className="text-xl font-semibold text-neutral-200">The &#x1d4d5;-Grid</h2>
            </div>
            <p className="text-sm text-neutral-400 mt-3">
              The floor heatmap monitors the <strong>Fairness Conservation Law</strong>, tracking the equilibrium between Impact and Opportunity. Status: <strong className="text-green-400">Balanced</strong>. No sector is extracting value faster than it creates potential. The grid enforces this at a physics level.
            </p>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 1.6 }}
          className="mt-12 text-lg text-orange-300/80"
        >
          <p>You are sovereign here. The lattice awaits your frequency.</p>
        </motion.div>

      </div>
    </div>
  );
}
