// src/components/MobileNav.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { mainNavLinks } from '@/lib/constants';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const panelVariants = {
    open: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.3 } },
    closed: { opacity: 0, y: '-100%', transition: { ease: 'easeIn', duration: 0.3 } },
  };

  return (
    <div className="md:hidden">
      <button 
        onClick={toggleMenu} 
        aria-label="Toggle Menu"
        className="relative -mr-2 p-2" 
      >
        <Menu className="h-6 w-6 text-foreground" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm"
          >
            <div className="container mx-auto px-4 h-full">
              <div className="flex justify-end h-16 items-center">
                 <button 
                    onClick={toggleMenu} 
                    aria-label="Close Menu"
                    className="relative -mr-2 p-2"
                  >
                    <X className="h-6 w-6 text-foreground" />
                </button>
              </div>
              <nav className="flex flex-col items-center justify-center h-[calc(100%-4rem)] space-y-8">
                {mainNavLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={toggleMenu}
                    className="text-2xl font-light text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
