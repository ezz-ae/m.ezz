
// src/components/notebooks/NotebookCard.tsx
"use client";

import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Play, Pause, Archive, Edit } from 'lucide-react';
import Link from 'next/link';

type NotebookCardProps = {
  id: string;
  name: string;
  description: string;
  tag: string;
};

export function NotebookCard({ id, name, description, tag }: NotebookCardProps) {

  return (
    <motion.div 
        className="relative group flex flex-col justify-between p-5 h-48 rounded-2xl border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1"
        whileHover={{ scale: 1.03 }}
    >
      {/* Reflection Meter (Pulse) */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <motion.div
            className="absolute inset-0 bg-radial from-orange-400/10 via-transparent to-transparent"
            animate={{
              opacity: [0, 0.3, 0],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
      </div>

      <div className="relative z-10 flex-grow">
        <Link href={`/notebooks/${id}`} className="block h-full">
          <div className="flex flex-col h-full">
            <div className="mb-2">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{tag}</p>
                <h3 className="font-light text-foreground text-lg leading-tight mt-1">{name}</h3>
            </div>
            <p className="text-xs text-muted-foreground flex-grow leading-snug">{description}</p>
          </div>
        </Link>
      </div>
      
      <div className="relative z-10 flex items-center justify-end space-x-1 mt-2">
        <Button variant="ghost" size="icon" className="w-8 h-8" title="Sleep">
            <Pause size={14} />
        </Button>
        <Button variant="ghost" size="icon" className="w-8 h-8" title="Backup">
            <Archive size={14} />
        </Button>
         <Button variant="ghost" size="icon" className="w-8 h-8" title="Edit">
            <Edit size={14} />
        </Button>
      </div>
    </motion.div>
  );
}
