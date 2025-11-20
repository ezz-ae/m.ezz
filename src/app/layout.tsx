// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { CognitiveCanvas } from "@/components/CognitiveCanvas";
import { SiteFooter } from "@/components/SiteFooter"; // Import the new footer

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EZZ.AE | A Living Intelligence",
  description: "An interactive demonstration of a new cognitive architecture for artificial intelligence, based on the principles of Forgetting Core Thinking (FCT).",
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
        <SiteFooter /> {/* Use the new footer here */}
      </body>
    </html>
  );
}
