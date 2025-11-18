
import type { Metadata } from 'next';
import { PT_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import SiteHeader from '@/components/SiteHeader';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-headline',
});

export const metadata: Metadata = {
  title: 'EZZ.AE - Mahmoud Ezz - Intelligence System Architect',
  description: "Mahmoud Ezz's work in AI, cognition, real estate, security, puzzles, and music—one mind, many systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-black font-body text-neutral-100 antialiased overflow-x-hidden',
          ptSans.variable,
          playfairDisplay.variable
        )}
      >
        <SiteHeader />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
