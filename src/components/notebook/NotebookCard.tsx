// src/components/notebook/NotebookCard.tsx
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { NOTEBOOKS, NotebookId } from '@/components/notebooks/notebook-data';

interface NotebookCardProps {
  id: NotebookId;
}

export function NotebookCard({ id }: NotebookCardProps) {
  const notebook = NOTEBOOKS[id];

  if (!notebook) {
    return null; 
  }

  return (
    <Link href={`/notebook/${notebook.id}`} passHref>
      <motion.div 
        className="relative flex flex-col h-full bg-black bg-opacity-50 border border-gray-800 rounded-lg p-6 shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 cursor-pointer"
        whileHover={{ scale: 1.03 }}
      >
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-white">{notebook.title}</h3>
          <span className="relative flex h-3 w-3">
            <motion.span 
              className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"
              animate={{ scale: [1, 1.5, 1], opacity: [0.75, 0, 0.75] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </span>
        </div>
        <p className="text-gray-400 text-sm mb-4 flex-grow">{notebook.description}</p>
        <div className="mt-auto">
          <p className="text-xs text-cyan-400 font-mono bg-gray-900 px-2 py-1 rounded-md self-start">{notebook.tag}</p>
        </div>
      </motion.div>
    </Link>
  );
}
