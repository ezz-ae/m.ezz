// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { CognitiveCanvas } from "@/components/CognitiveCanvas"; // Import the new component

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
        <CognitiveCanvas /> {/* Add the canvas here */}
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
