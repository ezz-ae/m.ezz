
import Link from 'next/link';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/mind-board', label: 'Mind Board' },
  { href: '/about', label: 'Map & About' },
  { href: '/projection', label: 'Projection' },
  { href: '/timeline', label: 'Timeline' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6 md:p-8 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <nav className="flex items-center space-x-6 bg-background/80 backdrop-blur-sm border border-black/5 rounded-full px-6 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
