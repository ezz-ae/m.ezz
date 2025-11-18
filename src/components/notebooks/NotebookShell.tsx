
// src/components/notebooks/NotebookShell.tsx
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollHeading, ScrollParagraph } from '../ScrollTypography';

type NotebookShellProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function NotebookShell({ title, description, children }: NotebookShellProps) {
  return (
    <motion.div 
      className="relative isolate overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Soft background glow */}
      <div className="absolute inset-0 -z-10 bg-radial from-white/5 via-black to-black opacity-40" />
      
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          className="py-12 border-b border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
            <Link href="/#map" className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-100 transition-colors mb-8">
                <ArrowLeft size={16} />
                Back to Notebooks
            </Link>
            <ScrollHeading as="h1" className="text-3xl md:text-5xl font-light text-neutral-50">{title}</ScrollHeading>
            <ScrollParagraph className="mt-4 text-lg text-neutral-300">{description}</ScrollParagraph>
        </motion.div>
      </div>

      {children}
    </motion.div>
  );
}
