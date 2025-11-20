// src/components/SiteHeader.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { MobileNav } from './MobileNav';

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

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-lg font-semibold text-neutral-100">
            EZZ.AE
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium text-neutral-400 hover:text-orange-400 transition-colors relative',
                  pathname === item.href && 'text-orange-400'
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    className="absolute bottom-[-4px] left-0 right-0 h-[1px] bg-orange-400"
                    layoutId="underline"
                    initial={false}
                    animate={{ opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
