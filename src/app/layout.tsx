// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { CognitiveCanvas } from "@/components/CognitiveCanvas";
import { SiteFooter } from "@/components/SiteFooter";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PageTransition } from "@/components/PageTransition"; // Import the new component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // ... (metadata remains the same)
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
