// src/components/notebooks/NotebookCard.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils'; // --- FIX: Import cn utility function ---

interface NotebookCardProps {
  id: string;
  title: string;
  description: string;
  tag: string;
  abilities: string[]; // Ensure abilities is still passed for dynamic content
}

// Determine accent based on tag (now only for dark mode or specific highlights)
const getTagTheme = (tag: string) => {
  switch (tag) {
    case 'Cognitive Architecture':
    case 'OS · Language':
    case 'Identity · AI Clones':
      return { accentClass: 'dark:text-purple-400/80' }; // Specific dark mode accent
    case 'Science Gaming · FCT Proof':
    case 'Creative AI · FCT in Practice':
    case 'Prototype · Physics':
      return { accentClass: 'dark:text-green-400/80' };
    case 'Blockchain · Real Estate':
    case 'Ideation Platform':
    case 'Luredoor · KAP':
      return { accentClass: 'dark:text-blue-400/80' };
    case 'Philosophy · Language':
    case 'MTC · Marketinum':
      return { accentClass: 'dark:text-yellow-400/80' };
    default:
      return { accentClass: 'dark:text-orange-400/80' };
  }
};

export function NotebookCard({ id, title, description, tag, abilities }: NotebookCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { accentClass } = getTagTheme(tag);

  const contentVariants = {
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
    <Link href={`/notebooks/${id}`} className="block group h-full">
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -6, scale: 1.02, boxShadow: '0 0 25px rgba(255, 255, 255, 0.4)' }} // White glow on hover for light theme
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className={cn(
          "h-full bg-card border border-border rounded-lg shadow-md transition-shadow duration-300 flex flex-col p-6 relative overflow-hidden",
          "group-hover:border-primary/50", // Common hover border
          "dark:shadow-orange-500/10 dark:group-hover:shadow-orange-500/20" // Dark theme orange glow
        )}
      >
        {/* Tag and Intelligence Pulse */}
        <div className="relative z-10 flex items-center justify-between">
          <p className={cn("text-xs font-mono tracking-wider mb-2 text-primary", accentClass)}>{tag}</p>
          <motion.div
            className={cn("h-2 w-2 rounded-full", accentClass)}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 0.5 // Stagger pulse slightly
            }}
          />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground relative z-10 mt-1">{title}</h3>
        
        <div className="mt-4 flex-grow flex flex-col justify-between relative z-10">
            <AnimatePresence mode="wait">
                {!isHovered ? (
                    <motion.p
                        key="description"
                        variants={contentVariants}
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
                        Explore Intelligence <ArrowRight className="h-4 w-4 ml-2" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
      </motion.div>
    </Link>
  );
}
