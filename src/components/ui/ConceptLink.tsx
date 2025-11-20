// src/components/ui/ConceptLink.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Link2 } from 'lucide-react';

interface ConceptLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function ConceptLink({ href, children, className }: ConceptLinkProps) {
  return (
    <Link 
      href={href}
      className={cn(
        "text-orange-400/90 hover:text-orange-300 font-semibold border-b border-orange-500/20 hover:border-orange-500/50 transition-all duration-200 ease-in-out group",
        className
      )}
    >
      {children}
      <Link2 className="inline-block h-3 w-3 ml-1 opacity-0 group-hover:opacity-70 transition-opacity duration-200" />
    </Link>
  );
}
