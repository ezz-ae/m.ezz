// src/components/notebooks/NotebookCard.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit } from 'lucide-react';
import { cn } from '@/lib/utils'; 

interface NotebookCardProps {
  id: string;
  title: string;
  description: string;
  tag: string;
  abilities: string[]; 
}

export function NotebookCard({ id, title, description, tag, abilities }: NotebookCardProps) {
  return (
    <motion.div
        whileHover={{ y: -5, scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="h-full group"
    >
        <Link href={`/notebooks/${id}`} className="block h-full" aria-label={`Explore ${title} Notebook`}>
            <div className={cn(
              "h-full bg-card border border-border rounded-lg shadow-sm transition-shadow duration-300 flex flex-col p-6 relative overflow-hidden min-h-[250px]",
              "group-hover:border-primary/60 group-hover:shadow-md" 
            )}>
                <div className="flex items-start justify-between mb-4">
                    <BrainCircuit className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors" />
                    <p className="text-xs font-mono tracking-wide text-muted-foreground text-right">{tag}</p>
                </div>
                
                <h3 className="text-base font-semibold text-foreground mt-1">{title}</h3>
                
                <p className="mt-2 text-sm text-muted-foreground flex-grow">
                    {description}
                </p>

                <div className="mt-4 flex items-center text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
                </div>
            </div>
        </Link>
    </motion.div>
  );
}
