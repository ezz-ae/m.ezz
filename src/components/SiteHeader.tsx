
import Link from 'next/link';
import { Logo } from './icons';
import { Briefcase, DraftingCompass, Milestone, Rss, Presentation } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Mind Board', icon: <Briefcase /> },
  { href: '/about', label: 'Map & About', icon: <DraftingCompass /> },
  { href: '/projection', label: 'Projection', icon: <Presentation /> },
  { href: '/timeline', label: 'Timeline', icon: <Milestone /> },
  { href: '/contact', label: 'Contact', icon: <Rss /> },
];

export default function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6 md:p-8 bg-black/50 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
