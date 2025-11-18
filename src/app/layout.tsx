
import type { Metadata } from 'next';
import { PT_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { SiteFooter } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

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
  title: 'EZZ.AE - Cognitive Architecture',
  description: "Mahmoud Ezz's Forgetting Systems & Memory-Safe Intelligence",
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
          'min-h-screen bg-background font-body antialiased',
          ptSans.variable,
          playfairDisplay.variable
        )}
      >
        <div className="relative flex min-h-dvh flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
