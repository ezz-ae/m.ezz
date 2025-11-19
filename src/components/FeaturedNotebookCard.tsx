import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react'; // Example icon, you can change this

interface FeaturedNotebookCardProps {
  id: string;
  title: string;
  description: string;
  tag: string;
}

export function FeaturedNotebookCard({ id, title, description, tag }: FeaturedNotebookCardProps) {
  return (
    <Link href={`/notebooks/${id}`} className="block">
      <motion.div
        className="p-6 rounded-xl border border-neutral-700 bg-neutral-900 hover:border-orange-500 transition-all duration-300 group"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center justify-between mb-4">
          <BrainCircuit className="w-8 h-8 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
          <span className="text-xs uppercase tracking-wide text-neutral-500 group-hover:text-orange-500">{tag}</span>
        </div>
        <h4 className="text-xl font-medium text-neutral-100 group-hover:text-white mb-2">{title}</h4>
        <p className="text-neutral-400 text-sm group-hover:text-neutral-300">{description}</p>
      </motion.div>
    </Link>
  );
}
