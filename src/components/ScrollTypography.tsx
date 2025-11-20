// src/components/ScrollTypography.tsx
'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

// Reusable Section component with scroll-triggered animation
export function Section({ children, className }: { children: React.ReactNode, className?: string }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}

// Reusable Heading with scroll-triggered animation
export function ScrollHeading({ as: Component = 'h2', children, className }: { as?: React.ElementType, children: React.ReactNode, className?: string }) {
  return <Component className={cn("text-2xl font-light text-neutral-100 mb-4", className)}>{children}</Component>;
}

// Reusable Paragraph with scroll-triggered animation
export function ScrollParagraph({ as: Component = 'p', children, className, emphasisLevel }: { as?: React.ElementType, children: React.ReactNode, className?: string, emphasisLevel?: 'low' | 'medium' | 'high' | 'resonance' }) {
    const emphasisClasses = {
        low: 'text-neutral-500',
        medium: 'text-neutral-400',
        high: 'text-neutral-200',
        resonance: 'text-green-300/90'
    };
    const classes = cn('text-base leading-relaxed', emphasisLevel ? emphasisClasses[emphasisLevel] : 'text-neutral-400', className);
  return <Component className={classes}>{children}</Component>;
}

// Reusable Callout with scroll-triggered animation
export function ScrollCallout({ label, children }: { label: string, children: React.ReactNode }) {
  return (
    <div className="my-8 border-l-2 border-orange-500/50 pl-4 py-2 bg-gradient-to-r from-orange-500/10 to-transparent">
        <p className="text-sm font-semibold text-orange-400">{label}</p>
        <div className="text-neutral-300 text-sm mt-2">{children}</div>
    </div>
  );
}
