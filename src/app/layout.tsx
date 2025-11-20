// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { CognitiveCanvas } from "@/components/CognitiveCanvas";
import { SiteFooter } from "@/components/SiteFooter";

const inter = Inter({ subsets: ["latin"] });

// Enhanced Metadata for robust, site-wide SEO
export const metadata: Metadata = {
  metadataBase: new URL('https://www.ezz.ae'), // Set the base URL
  title: {
    default: "EZZ.AE | A Living Intelligence",
    template: "%s | EZZ.AE",
  },
  description: "An interactive demonstration of a new cognitive architecture for artificial intelligence, based on the principles of Forgetting Core Thinking (FCT).",
  keywords: ["FCT", "Forgetting Core Thinking", "AI Safety", "Cognitive Architecture", "Generative Memory", "AI Philosophy", "Mahmoud Ezz"],
  authors: [{ name: "Mahmoud Ezz", url: "https://www.ezz.ae" }],
  creator: "Mahmoud Ezz",
  publisher: "Mahmoud Ezz",
  openGraph: {
    title: "EZZ.AE | A Living Intelligence",
    description: "An interactive demonstration of a new cognitive architecture for AI.",
    url: "https://www.ezz.ae",
    siteName: "EZZ.AE",
    images: [
      {
        url: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxhYnN0cmFjdCUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3NjM0MDU3OTl8MA&ixlib_rb_4.1.0&q=80&w=1200',
        width: 1200,
        height: 630,
        alt: 'Abstract Architecture Representing AI Cognition',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "EZZ.AE | A Living Intelligence",
    description: "Explore a new cognitive architecture for AI based on the principles of Forgetting Core Thinking (FCT).",
    creator: "@mahmoud_ezz", // Replace with actual Twitter handle if available
    images: ['https://images.unsplash.com/photo-1493397212122-2b85dda8106b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxhYnN0cmFjdCUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3NjM0MDU3OTl8MA&ixlib_rb_4.1.0&q=80&w=1200'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CognitiveCanvas />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
