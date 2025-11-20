// src/components/notebooks/NotebookCard.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils'; 

interface NotebookCardProps {
  id: string;
  title: string;
  description: string;
  tag: string;
  abilities: string[]; 
}

// Helper to determine theme-aware styling based on tag
const getTagTheme = (tag: string) => {
  switch (tag) {
    case 'Cognitive Architecture':
    case 'OS · Language':
    case 'Identity · AI Clones':
      return { accentTextClass: 'dark:text-purple-400/80', bgAccentClass: 'dark:bg-purple-900/10' }; 
    case 'Science Gaming · FCT Proof':
    case 'Creative AI · FCT in Practice':
    case 'Prototype · Physics':
      return { accentTextClass: 'dark:text-green-400/80', bgAccentClass: 'dark:bg-green-900/10' };
    case 'Blockchain · Real Estate':
    case 'Ideation Platform':
    case 'Luredoor · KAP':
      return { accentTextClass: 'dark:text-blue-400/80', bgAccentClass: 'dark:bg-blue-900/10' };
    case 'Philosophy · Language':
    case 'MTC · Marketinum':
      return { accentTextClass: 'dark:text-yellow-400/80', bgAccentClass: 'dark:bg-yellow-900/10' };
    default:
      return { accentTextClass: 'dark:text-primary dark:text-orange-400/80', bgAccentClass: 'dark:bg-primary/10' }; 
  }
};

export function NotebookCard({ id, title, description, tag, abilities }: NotebookCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { accentTextClass, bgAccentClass } = getTagTheme(tag);

  // Animation variants for the description fading out and abilities fading in
  const descriptionVariants = {
    initial: { opacity: 1, y: 0 },
    hover: { opacity: 0, y: -10, transition: { duration: 0.2, ease: 'easeOut' } },
  };

  const abilitiesVariants = {
    initial: { opacity: 0, y: 10 },
    hover: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut', delay: 0.1 } },
  };

  const ctaVariants = {
    initial: { opacity: 0, y: 10 },
    hover: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut', delay: 0.2 } },
  };

  return (
    <Link href={`/notebooks/${id}`} className="block group h-full" aria-label={`Explore ${title} Notebook`}>
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -6, scale: 1.02, boxShadow: '0 0 25px hsla(0, 0%, 0%, 0.1)' }} 
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className={cn(
          "h-full bg-card border border-border rounded-lg shadow-md transition-shadow duration-300 flex flex-col p-6 relative overflow-hidden min-h-[250px]",
          "group-hover:border-primary/50", 
          "group-hover:shadow-lg dark:group-hover:shadow-orange-glow-md light:group-hover:shadow-white-glow-md" 
        )}
      >
        {/* Subtle background element based on tag theme, for dark mode distinction */}
        <div className={cn("absolute inset-0 z-0 opacity-0 dark:opacity-10", bgAccentClass)}></div>

        {/* Card Header: Tag and Intelligence Pulse Indicator */}
        <div className="relative z-10 flex items-center justify-between">
          <p className={cn("text-xs font-mono tracking-wider mb-2 text-primary", accentTextClass)}>{tag}</p>
          <motion.div
            className="h-2 w-2 rounded-full bg-primary"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 0.5 
            }}
            role="status" 
            aria-label="Notebook active status indicator"
          />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground relative z-10 mt-1">{title}</h3>
        
        {/* Dynamic Content Area: Description or Abilities on Hover */}
        <div className="mt-4 flex-grow flex flex-col justify-between relative z-10">
            <AnimatePresence mode="wait">
                {!isHovered ? (
                    <motion.p
                        key="description"
                        variants={descriptionVariants}
                        initial="initial"
                        animate="initial"
                        exit="hover"
                        className="text-sm text-muted-foreground"
                    >
                        {description}
                    </motion.p>
                ) : (
                    <motion.div
                        key="abilities"
                        variants={abilitiesVariants}
                        initial="initial"
                        animate="hover"
                        exit="initial"
                        className="space-y-1"
                    >
                        <h4 className="text-xs font-semibold text-primary mb-1">Core Abilities:</h4>
                        <ul className="list-disc list-inside text-xs text-muted-foreground pl-3">
                            {abilities.slice(0, 3).map((ability, i) => (
                                <li key={i}>{ability}</li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                {isHovered && (
                    <motion.div
                        key="cta"
                        variants={ctaVariants}
                        initial="initial"
                        animate="hover"
                        exit="initial"
                        className="mt-4 flex items-center text-primary font-semibold"
                    >
                        Explore Intelligence <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
      </motion.div>
    </Link>
  );
}
