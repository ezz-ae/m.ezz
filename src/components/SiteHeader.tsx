// src/components/SiteHeader.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { MobileNav } from './MobileNav';
import { ThemeToggle } from './ThemeToggle';

const mainNav = [
  { href: '/mind-board', label: 'Mind Board' },
  { href: '/architecture-of-emergence', label: 'Architecture' },
  { href: '/journal', label: 'Journal' },
  { href: '/about', label: 'About' },
  { href: '/contribution', label: 'Contribution' },
  { href: '/whitepaper', label: 'Whitepaper' },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-foreground">
            <div className="flex flex-col">
              <span className="text-lg font-semibold leading-none font-playfair">EZZ.AE</span>
              <span className="text-xs text-muted-foreground leading-none mt-1">Intelligence System Architect</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative',
                  pathname === item.href && 'text-primary'
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    className="absolute bottom-[-4px] left-0 right-0 h-[1px] bg-primary"
                    layoutId="underline"
                  />
                )}
              </Link>
            ))}
             <ThemeToggle />
          </nav>
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
