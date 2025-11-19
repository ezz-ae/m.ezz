
// src/components/notebooks/NotebookShell.tsx
'use client';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

type NotebookShellProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function NotebookShell({ title, description, children }: NotebookShellProps) {
  return (
    <motion.div 
      className="relative isolate overflow-hidden pt-12 md:pt-24 bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <header className="max-w-4xl mx-auto px-6">
        <motion.div 
          className="py-12 border-b"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
            <Link href="/mind-board" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
                <ArrowLeft size={16} />
                Back to Mind Board
            </Link>
            <h1 className="text-3xl md:text-5xl font-light text-foreground font-headline">{title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        </motion.div>
      </header>

      {/* Main content is passed directly */}
      <div>
        {children}
      </div>

    </motion.div>
  );
}
