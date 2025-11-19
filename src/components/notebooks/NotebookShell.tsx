
// src/components/notebooks/NotebookShell.tsx
'use client';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

type NotebookShellProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function NotebookShell({ title, description, children }: NotebookShellProps) {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 300],
    ['#FF7F50', '#000000']
  );

  return (
    <motion.div 
      style={{ backgroundColor }}
      className="relative isolate overflow-hidden pt-12 md:pt-24 text-neutral-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <header className="max-w-4xl mx-auto px-6">
        <motion.div 
          className="py-12 border-b border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
            <Link href="/aixa" className="inline-flex items-center gap-2 text-sm text-neutral-200 hover:text-white transition-colors mb-8">
                <ArrowLeft size={16} />
                Back to AIXA Map
            </Link>
            <h1 className="text-3xl md:text-5xl font-light text-white font-headline">{title}</h1>
            <p className="mt-4 text-lg text-neutral-200">{description}</p>
        </motion.div>
      </header>

      {/* Main content is passed directly */}
      <div className="relative z-10">
        {children}
      </div>

    </motion.div>
  );
}
