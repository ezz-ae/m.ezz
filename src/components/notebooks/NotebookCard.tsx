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
    <div className="relative group flex flex-col justify-between p-5 h-48 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent shadow-lg transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:-translate-y-1">
      {/* Reflection Meter (Pulse) */}
      <motion.div
        className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
           <motion.div
            className="absolute inset-0 bg-radial from-green-400/20 via-transparent to-transparent"
            animate={{
              opacity: [0, 0.4, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
      </motion.div>

      <div className="relative z-10 flex-grow">
        <Link href={`/notebooks/${id}`} className="block h-full">
          <div className="flex flex-col h-full">
            <div className="mb-2">
                <p className="text-xs uppercase tracking-widest text-neutral-400">{tag}</p>
                <h3 className="font-light text-neutral-50 text-lg leading-tight mt-1">{name}</h3>
            </div>
            <p className="text-xs text-neutral-500 flex-grow leading-snug">{description}</p>
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
    </div>
  );
}
