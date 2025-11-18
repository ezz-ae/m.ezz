
import type { Metadata } from 'next';
import { ForgetenceNotebook } from '@/components/notebooks/ForgetenceNotebook';
import FooterMinimal from "@/components/FooterMinimal";

export const metadata: Metadata = {
  title: 'EZZ.AE — Forgetence · Forgetting as the Core of Intelligence',
  description: 'Exploring forgetting as the core mechanism of intelligence, not a weakness. An AI that refuses to forget will eventually turn against the human it’s built to help — not by intention, but by structure.',
};


export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-neutral-100 overflow-x-hidden pt-24">
      <div className="relative flex flex-col items-stretch">
        <section id="theory" className="px-6 md:px-16">
          <ForgetenceNotebook />
        </section>
        <FooterMinimal />
      </div>
    </main>
  );
}
