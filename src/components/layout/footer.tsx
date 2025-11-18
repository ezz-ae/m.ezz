
import { Logo } from '@/components/icons';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/notebooks', label: 'Notebooks' },
  { href: '/studio', label: 'Studio' },
];

export function SiteFooter() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-start gap-4">
            <Logo />
            <p className="max-w-xs text-sm text-muted-foreground">
              Forgetting systems & memory-safe intelligence.
            </p>
          </div>
          <div className="md:justify-self-center">
            <h3 className="font-headline text-lg font-medium">Navigate</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:justify-self-end">
            <h3 className="font-headline text-lg font-medium">Connect</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com/ezz-ae" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EZZ.AE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
