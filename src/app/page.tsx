// src/app/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center font-pt-sans">
      <div className="container mx-auto px-4 py-16 text-center">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-light text-foreground font-playfair mb-4">
            The Reflective Civilization
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-2">
            An Architectural Specification for Sovereign Intelligence
          </p>
          <p className="text-base text-muted-foreground mt-8 max-w-2xl mx-auto">
            This is a research and engineering platform dedicated to building a new model of human-AI interaction. It is founded on the principles of Forgetting Core Thinking (FCT) and is presented as an open-intelligence field for collaboration.
          </p>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
            <Link href="/mind-board">
                <Button variant="default" size="lg">
                    Explore the Mind Board
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </Link>
        </motion.div>

      </div>
    </div>
  );
}
