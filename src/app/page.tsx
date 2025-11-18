
import type { Metadata } from 'next';
import TopicMap from "@/components/TopicMap";
import FooterMinimal from "@/components/FooterMinimal";

export const metadata: Metadata = {
  title: 'EZZ.AE — Mahmoud Ezz',
  description: 'Mahmoud Ezz is an Intelligence System Architect, designing architectures for AI, memory, forgetting, ecosystems, and traps.',
};


export default function FieldPage() {
  return (
    <main className="min-h-screen bg-black text-neutral-100 overflow-x-hidden">
      <div className="relative flex flex-col items-stretch pt-24">
        <section id="map" className="py-16 md:py-24">
          <TopicMap />
        </section>
        <FooterMinimal />
      </div>
    </main>
  );
}
