import Link from 'next/link';
import { Logo } from './icons';

const navLinks = [
  { href: '/mind-board', label: 'Mind Board' },
  { href: '/aixa', label: 'AIXA' },
  { href: '/about', label: 'Map & About' },
  { href: '/projection', label: 'Projection' },
  { href: '/timeline', label: 'Timeline' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
