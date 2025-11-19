
import type { Metadata } from 'next';
import { PT_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import AnalyticsListener from '@/components/AnalyticsListener';
import SiteHeader from '@/components/SiteHeader';
import { FirebaseClientProvider } from '@/firebase/client-provider';

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
  title: {
    default: 'EZZ.AE — Intelligence System Architecture',
    template: '%s — EZZ.AE',
  },
  description: "A living documentation of Mahmoud Ezz’s work on Forgetence, AI memory safety, intelligence OS design, real estate infrastructure, traps, puzzles, and behavioural systems.",
  openGraph: {
    title: 'EZZ.AE — Intelligence System Architecture',
    description: "A living documentation of Mahmoud Ezz’s work on Forgetence, AI memory safety, intelligence OS design, real estate infrastructure, traps, puzzles, and behavioural systems.",
    url: 'https://ezz.ae',
    siteName: 'EZZ.AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EZZ.AE — Intelligence System Architecture',
    description: "A living documentation of Mahmoud Ezz’s work on Forgetence, AI memory safety, intelligence OS design, real estate infrastructure, traps, puzzles, and behavioural systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-body text-foreground antialiased overflow-x-hidden',
          ptSans.variable,
          playfairDisplay.variable
        )}
      >
        <FirebaseClientProvider>
          <SiteHeader />
          <AnalyticsListener />
          {children}
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
