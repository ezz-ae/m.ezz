
import type { Metadata } from 'next';
import FooterMinimal from "@/components/FooterMinimal";
import HeroPulse from '@/components/HeroPulse';
import IdentityStatement from '@/components/IdentityStatement';
import TopicMap from '@/components/TopicMap';

export const metadata: Metadata = {
  title: 'About Mahmoud Ezz & The Notebook Map',
  description: "Mahmoud Ezz is an Intelligence System Architect, designing architectures for AI, memory, forgetting, ecosystems, and traps. Explore the map of his living intelligence systems.",
};


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-neutral-100 overflow-x-hidden pt-12 md:pt-24">
        <HeroPulse />
        <IdentityStatement />
        <section id="map" className="py-16 md:py-24">
          <TopicMap />
        </section>
        <FooterMinimal />
    </main>
  );
}
