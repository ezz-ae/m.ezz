'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react'; // Importing an icon for abilities

interface NotebookLayoutProps {
  title: string;
  description: string;
  tag: string;
  abilities: string[]; // New prop for key abilities
  children: React.ReactNode;
}

export function NotebookLayout({ title, description, tag, abilities, children }: NotebookLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-neutral-100">
      <motion.section 
        className="relative flex flex-col items-center justify-center text-center px-6 py-24 md:py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-black to-black opacity-50 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.p
            className="text-sm uppercase tracking-widest text-orange-500 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {tag}
          </motion.p>
          <motion.h1 
            className="text-4xl md:text-6xl font-light text-neutral-50 font-headline mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {title}
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {description}
          </motion.p>

          {/* Key Abilities Section */}
          {abilities && abilities.length > 0 && (
            <motion.div
              className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {abilities.map((ability, index) => (
                <div key={index} className="flex items-center justify-center space-x-2 text-neutral-300">
                  <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span className="text-base font-medium">{ability}</span>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.section>

      <div className="container mx-auto mt-[-4rem] relative z-20">
        {children}
      </div>
    </div>
  );
}
