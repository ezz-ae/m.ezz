'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import IdentityStatement from '@/components/IdentityStatement';
import TopicMap from '@/components/TopicMap';
import { Button } from '@/components/ui/button';
import { PhilosophicalProof } from '@/components/PhilosophicalProof';

export default function FCTHome() {
  return (
    <div className="min-h-screen bg-black text-neutral-100 overflow-x-hidden">
      <motion.section 
        className="relative flex items-center justify-center min-h-screen text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0 }}
      >
        <div className="absolute inset-0 bg-radial from-orange-500/5 via-black to-black opacity-40 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-light text-neutral-50 font-headline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AI That Forgets
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A new cognitive architecture where forgetting isn't a bug—it's the core feature of safe, human-aligned intelligence.
          </motion.p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/aixa">
              <Button variant="outline" className="text-lg py-6 px-8 rounded-full border-neutral-600 hover:bg-neutral-800 hover:text-white transition-all duration-300">
                Explore the Architecture
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <IdentityStatement />
      
      <TopicMap />

      <PhilosophicalProof />
      
    </div>
  );
}
