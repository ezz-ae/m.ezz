
import type { Metadata } from 'next';
import FooterMinimal from "@/components/FooterMinimal";
import AboutSection from '@/components/AboutSection';
import NowSection from '@/components/NowSection';
import { Section } from '@/components/ScrollTypography';

export const metadata: Metadata = {
  title: 'About Mahmoud Ezz',
  description: "Mahmoud Ezz's work lives where cognition, markets, and infrastructure meet: real estate intelligence, security traps, AI memory models, and learning systems.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-neutral-100 overflow-x-hidden pt-24 md:pt-32">
        <div className="container mx-auto px-6 space-y-24">
            <Section>
                <AboutSection />
            </Section>
            <Section>
                <NowSection />
            </Section>
        </div>
        <FooterMinimal />
    </main>
  );
}
