// src/components/notebooks/NotebookRenderer.tsx
'use client';

import React, { useState } from 'react';
import { NOTEBOOKS, isNotebookId } from './notebook-data';
import { PlaceholderNotebook } from './PlaceholderNotebook';
import { SmartNotebook } from './SmartNotebook';
import { Button } from '@/components/ui/button';
import { BrainCircuit } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type NotebookRendererProps = {
  slug: string;
};

// This component now manages the two-state view: static overview and interactive notebook.
export default function NotebookRenderer({ slug }: NotebookRendererProps) {
  const [isInteractive, setIsInteractive] = useState(false);

  if (!isNotebookId(slug)) {
    return <PlaceholderNotebook topic={`Unknown Notebook: ${slug}`} />;
  }

  const NotebookComponent = NOTEBOOKS[slug].component;

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {!isInteractive ? (
          <motion.div
            key="static"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 right-0">
              <Button onClick={() => setIsInteractive(true)} variant="outline">
                <BrainCircuit className="mr-2 h-4 w-4" />
                Activate Living Notebook
              </Button>
            </div>
            <NotebookComponent />
          </motion.div>
        ) : (
          <motion.div
            key="interactive"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SmartNotebook slug={slug} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
