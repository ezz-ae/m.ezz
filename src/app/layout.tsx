
// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { CognitiveCanvas } from "@/components/CognitiveCanvas";
import { SiteFooter } from "@/components/SiteFooter";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PageTransition } from "@/components/PageTransition";
import { Toaster } from "@/components/ui/toaster";
import AnalyticsListener from "@/components/AnalyticsListener";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: {
    default: "EZZ.AE | The Reflective Civilization",
    template: `%s | EZZ.AE`,
  },
  description: "A research organization building safe, human-aligned intelligence through the principles of Forgetting Core Thinking (FCT) and sovereign cognitive architecture.",
  openGraph: {
    title: "EZZ.AE | The Reflective Civilization",
    description: "The architectural specification for a new model of human-AI interaction based on cognitive physics, energetic intelligence, and sovereign identity.",
    url: "https://ezz.ae",
    siteName: "EZZ.AE",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EZZ.AE | The Reflective Civilization",
    description: "Building Completing AI, not Competing AI. Explore the Canonical Specification.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-pt-sans">
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <CognitiveCanvas />
            <SiteHeader />
            <PageTransition>
                <main>{children}</main>
            </PageTransition>
            <SiteFooter />
            <Toaster />
            <Suspense fallback={null}>
              <AnalyticsListener />
            </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
