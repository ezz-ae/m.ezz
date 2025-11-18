// src/components/notebooks/NotebookCard.tsx
"use client";

import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { Play, Pause, Archive, Edit } from 'lucide-react';

type NotebookStatus = 'active' | 'sleeping' | 'archived';

type NotebookCardProps = {
  name: string;
  roleIcon: string;
  status: NotebookStatus;
};

const statusConfig = {
  active: {
    label: 'Active',
    color: 'bg-green-500',
    pulse: true,
  },
  sleeping: {
    label: 'Sleeping',
    color: 'bg-yellow-500',
    pulse: false,
  },
  archived: {
    label: 'Archived',
    color: 'bg-neutral-600',
    pulse: false,
  },
};

export function NotebookCard({ name, roleIcon, status }: NotebookCardProps) {
  const config = statusConfig[status];

  return (
    <div className="relative group flex flex-col justify-between p-5 h-48 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent shadow-lg transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:-translate-y-1">
      {/* Reflection Meter (Pulse) */}
      {config.pulse && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
           <motion.div
            className="absolute inset-0 bg-radial from-green-400/20 via-transparent to-transparent"
            animate={{
              opacity: [0, 0.8, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      )}

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-3xl">{roleIcon}</span>
          <div className="flex items-center gap-2 text-xs text-neutral-300">
            <span className={cn("w-2 h-2 rounded-full", config.color)} />
            {config.label}
          </div>
        </div>
        <h3 className="font-light text-neutral-50 text-lg leading-tight">{name}</h3>
      </div>
      
      <div className="relative z-10 flex items-center justify-end space-x-1">
        <Button variant="ghost" size="icon" className="w-8 h-8" title={status === 'sleeping' ? 'Wake' : 'Sleep'}>
            {status === 'sleeping' ? <Play size={14} /> : <Pause size={14} />}
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
