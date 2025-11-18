// src/components/notebooks/NotebookShell.tsx
'use client';
import React from 'react';
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
  // This function maps children to their designated roles based on their display name.
  const contentMap = React.Children.toArray(children).reduce((acc: {[key: string]: React.ReactNode}, child) => {
    if (React.isValidElement(child) && typeof child.type !== 'string') {
        const key = (child.type as any).displayName || child.type.name;
        if (key === 'NotebookRenderer') acc.theory = child;
        if (key === 'NotebookQueryInterface') acc.conversation = child;
        if (key === 'MindmapView') acc.mindmap = child;
        if (key === 'AudioOverview') acc.audio = child;
    }
    return acc;
  }, {});


  return (
    <motion.div 
      className="relative isolate overflow-hidden pt-12 md:pt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Soft background glow */}
      <div className="absolute inset-0 -z-10 bg-radial from-white/5 via-black to-black opacity-40" />
      
      <header className="max-w-4xl mx-auto px-6">
        <motion.div 
          className="py-12 border-b border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-100 transition-colors mb-8">
                <ArrowLeft size={16} />
                Back to Mind Board
            </Link>
            <ScrollHeading as="h1" className="text-3xl md:text-5xl font-light text-neutral-50">{title}</ScrollHeading>
            <ScrollParagraph className="mt-4 text-lg text-neutral-300">{description}</ScrollParagraph>
        </motion.div>
      </header>

      {/* Main content flow */}
      <div>
        {contentMap.theory}
        {contentMap.conversation}
        {contentMap.mindmap}
        {contentMap.audio}
      </div>

    </motion.div>
  );
}
