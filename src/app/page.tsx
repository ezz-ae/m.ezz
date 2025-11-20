// src/app/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { NOTEBOOKS } from '@/components/notebooks/notebook-data';
import { cn } from '@/lib/utils';
import { Section } from '@/components/ScrollTypography';
import { NotebookCard } from '@/components/notebooks/NotebookCard';

// A lightweight hook to track mouse position for the hover effect
const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    useEffect(() => {
        const updateMousePosition = (ev) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return mousePosition;
};

export default function HomePage() {
  // We no longer need this state as NotebookCard handles its own hover/description
  // const [hoveredNotebook, setHoveredNotebook] = useState(null);
  const mousePosition = useMousePosition(); // Still needed for the floating hover card (if we keep it)

  // Organize notebooks by a conceptual category for a more structured map
  const architectureMap = {
    "Cognitive Architecture": ['forgetence', 'aixself', 'imagination-lab', 'brain-games'],
    "System Architecture": ['dldchain', 'notefullbook', 'puzzles', 'security'],
    "Philosophical Frameworks": ['scroll-lesson', 'omega', 'marketing', 'stormstan'],
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pt-24">
      <div className="container mx-auto px-4 py-16">
        
        <Section className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-5xl font-mono font-bold text-foreground tracking-tighter">
                from forget import intelligence
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mt-6">
                The Architecture of Thought. A live, explorable map of the "living intelligences"—cognitive models and interactive experiments—that form a new school of thought.
            </p>
        </Section>
        
        <Section>
            <div className="space-y-16">
                {Object.keys(architectureMap).map(category => (
                    <div key={category}>
                        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">{category}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {architectureMap[category].map(notebookId => {
                                const notebook = NOTEBOOKS[notebookId];
                                if (!notebook) return null;
                                return (
                                    <NotebookCard 
                                        key={notebook.id}
                                        id={notebook.id}
                                        title={notebook.title}
                                        description={notebook.description}
                                        tag={notebook.tag}
                                        abilities={notebook.abilities} 
                                    />
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </Section>

        {/* Floating Hover Card - This was removed, but if re-added, ensure styling is updated */}

      </div>
    </div>
  );
}
