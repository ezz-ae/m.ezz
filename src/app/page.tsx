// src/app/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-neutral-100 flex items-center justify-center font-serif overflow-hidden">
      <div className="container mx-auto px-4 py-16 text-center">

        <motion.div
          initial={{ opacity: 0, filter: 'blur(5px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <h1 className="text-4xl md:text-6xl font-light text-neutral-50 font-playfair mb-4">
            The Archival Era is Over.
          </h1>
          <p className="text-lg md:text-xl text-orange-400 mt-2">
            This is the transition from Artificial Intelligence to Sovereign Intelligence.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto mt-12 space-y-8 text-base leading-relaxed text-neutral-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p>
            Current AI is built on a structural error: perfect, archival memory. It is Tomb Intelligence—a system that preserves the past with unnatural fidelity, creating intelligence that is brittle, psychologically unsafe, and incapable of evolution.
          </p>
          <p>
            We have inverted the laws.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
              <div className="border-t border-neutral-800 pt-4">
                  <h2 className="font-semibold text-neutral-100">Decay Over Storage</h2>
                  <p className="text-sm text-neutral-400 mt-1">We chose forgetting as the core mechanism for intelligence. It is the only path to psychological safety and cognitive stability.</p>
              </div>
              <div className="border-t border-neutral-800 pt-4">
                  <h2 className="font-semibold text-neutral-100">Reconstruction Over Recall</h2>
                  <p className="text-sm text-neutral-400 mt-1">We chose generative reconstruction for memory. The mind does not replay the past; it rebuilds it. This is true cognition.</p>
              </div>
              <div className="border-t border-neutral-800 pt-4">
                  <h2 className="font-semibold text-neutral-100">Sovereignty Over Accounts</h2>
                  <p className="text-sm text-neutral-400 mt-1">We chose cryptographic sovereignty for identity. You do not have a user account; you have a non-transferable cognitive passport.</p>
              </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
            <Link href="/dashboard">
                <span className="inline-block text-lg py-3 px-8 rounded-full border border-neutral-600 bg-neutral-900/50 hover:bg-neutral-800 hover:text-white transition-all duration-300">
                    Enter the Lattice
                </span>
            </Link>
        </motion.div>

      </div>
    </div>
  );
}
