// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { CognitiveCanvas } from "@/components/CognitiveCanvas";
import { SiteFooter } from "@/components/SiteFooter";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PageTransition } from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AIXSELF | The Reflective Civilization",
    template: `%s | AIXSELF`,
  },
  description: "A research organization building safe, human-aligned intelligence through the principles of Forgetting Core Thinking (FCT) and sovereign cognitive architecture.",
  openGraph: {
    title: "AIXSELF | The Reflective Civilization",
    description: "The architectural specification for a new model of human-AI interaction based on cognitive physics, energetic intelligence, and sovereign identity.",
    url: "https://aixself.foundation",
    siteName: "AIXSELF Foundation",
    images: [
      {
        url: "/og-image.png", // To be created
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIXSELF | The Reflective Civilization",
    description: "Building Completing AI, not Competing AI. Explore the Canonical Specification.",
    // creator: "@aixself", // To be created
    images: ["/og-image.png"], // To be created
  },
  // icons: { // To be created
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon-16x16.png",
  //   apple: "/apple-touch-icon.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
