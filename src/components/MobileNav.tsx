// src/components/MobileNav.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const mainNav = [
  { href: '/', label: 'Home' },
  { href: '/notebooks', label: 'Notebooks' }, // Add the new link
  { href: '/aixa', label: 'AIXA Protocol' },
  { href: '/thesis', label: 'The Thesis' },
  { href: '/mindmap', label: 'Mind Map' },
  { href: '/contribution-map', label: 'Contribution' },
  { href: '/projection', label: 'Projection' },
  { href: '/source', label: 'Source' },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const panelVariants = {
    open: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.3 } },
    closed: { opacity: 0, y: '-100%', transition: { ease: 'easeIn', duration: 0.3 } },
  };

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} aria-label="Toggle Menu">
        <Menu className="h-6 w-6 text-neutral-300" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
          >
            <div className="container mx-auto px-4 h-full">
              <div className="flex justify-end h-16 items-center">
                 <button onClick={toggleMenu} aria-label="Close Menu">
                    <X className="h-6 w-6 text-neutral-300" />
                </button>
              </div>
              <nav className="flex flex-col items-center justify-center h-[calc(100%-4rem)] space-y-8">
                {mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={toggleMenu}
                    className="text-2xl font-light text-neutral-200 hover:text-orange-400 transition-colors"
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
