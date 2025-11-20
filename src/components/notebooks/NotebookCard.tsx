// src/components/notebooks/NotebookCard.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface NotebookCardProps {
  id: string;
  title: string;
  description: string;
  tag: string;
}

export function NotebookCard({ id, title, description, tag }: NotebookCardProps) {
  return (
    <Link href={`/notebooks/${id}`} className="block group">
      <motion.div
        whileHover={{ y: -5 }}
        className="h-full"
      >
        <Card className="h-full bg-neutral-900/50 border-neutral-800 hover:border-orange-500/50 transition-colors flex flex-col">
          <CardHeader>
            <p className="text-xs text-orange-400/80 font-mono tracking-wider">{tag}</p>
            <CardTitle className="text-lg font-semibold text-neutral-200 group-hover:text-white transition-colors">{title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col">
            <p className="text-sm text-neutral-400 flex-grow">{description}</p>
            <div className="text-xs text-neutral-500 mt-4 flex items-center group-hover:text-orange-400 transition-colors">
              Explore Notebook <ArrowRight className="h-3 w-3 ml-1 transform transition-transform group-hover:translate-x-1" />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
