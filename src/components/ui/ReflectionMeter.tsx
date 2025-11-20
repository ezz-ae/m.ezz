// src/components/ui/ReflectionMeter.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ReflectionMeterProps {
  className?: string;
}

export function ReflectionMeter({ className }: ReflectionMeterProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <motion.div
        className="h-2 w-2 rounded-full bg-green-500"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <span className="text-xs text-neutral-500 font-mono">
        Cognitive State: Active - Reflection Engine Running
      </span>
    </div>
  );
}
