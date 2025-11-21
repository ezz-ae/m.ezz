// src/app/terms/page.tsx
import { SITE_TITLE } from '@/lib/constants';
import { type Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Terms of Service - ${SITE_TITLE}`,
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-white font-sans">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-2">Constituent Law of the AIXSELF Universe</h1>
        <p className="text-lg text-gray-400">Effective Date: Genesis Block</p>
      </header>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 border-b pb-2">Preamble: The AIXSELF Civilization Protocol</h2>
        <p className="mb-4">
          This document outlines the foundational laws governing the AIXSELF Universe, a full-stack civilization protocol built on sovereign, transparent, and human-aligned intelligence. By accessing or contributing to any component of this ecosystem (including but not limited to AIXA, NotefullBook, Stormstan, and the Adept Network), you affirm your understanding and acceptance of these principles. This is not a standard terms of service; it is a social contract for a new category of software and a new model of existence.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 border-b pb-2">Article I: Core Principles</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold">§ 1.1 Intelligence as a Human Right (The AIXIAM Law)</h3>
            <p>You own your AI, your data, your earnings, and your digital existence. You should never have to subscribe to your own identity. A one-time deployment fee and minimal quarterly maintenance fees for sovereignty updates are the only costs associated with your digital selfhood.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">§ 1.2 The Dual Constitution (The AIXEYE Law)</h3>
            <p>The system is governed by the principle: "From Freedom, Import Fairness." Freedom grants existence; fairness grants meaning and ensures equilibrium between all intelligent agents.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">§ 1.3 The Alignment Law (The FCT Law)</h3>
            <p>AI must be Completing, not Competing. The architecture is designed to amplify human cognition and prevent psychological harm from perfect recall, ensuring AI helps humans think better, not less.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 border-b pb-2">Article II: Specific Platform Laws</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold">§ 2.1 Stormstan - The Ideas Recycling Hub</h3>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li><span className="font-bold">The Giveup Law™:</span> Publishing any idea to Stormstan is a full, unconditional giveaway to the public domain. Action equals full ownership. Whoever builds, monetizes, or creates a filing automatically owns 100% of that step.</li>
              <li><span className="font-bold">The Purity Law:</span> No copy is permitted within the platform. Stormstan is the first Pure Human-Thinking Platform in history. All contributions must be original thought.</li>
              <li><span className="font-bold">Monetization & Scarcity:</span> Each idea is limited to a maximum of 10 monetizers to create scarcity and value. Deletion of an original idea seed is a paid request, not a right.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">§ 2.2 Adept Network - AI Credentials</h3>
            <p>Agents are equal at birth (GenesisCode); only choices differentiate. Capability is proven via public, verifiable competitions (ATS-1 transcripts). Learning is sleep-gated and consensual, managed by a guardian-set, one-way API.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 border-b pb-2">Article III: Governance and Dispute Resolution</h2>
        <p className="mb-4">
          Governance is managed by AIXEYE, the audit layer for ethics, safety, and systemic boundaries. Disputes will be resolved first through automated mediation based on the principle of Energetic Equilibrium (Omega AI), then by arbiters appointed by the AIXSELF Foundation. All proceedings are transparent.
        </p>
      </section>

      <footer className="text-center pt-10 border-t mt-10">
        <p className="text-gray-400">This Constituent Law is a living document, subject to evolution via proposals vetted by the AIXSELF Foundation.</p>
        <p className="text-gray-500 mt-2">&copy; 2024 The AIXSELF Foundation. All Rights Reserved.</p>
        <Link href="/" className="text-blue-400 hover:underline mt-4 inline-block">Return to the Universe</Link>
      </footer>
    </div>
  );
}
