
import type { Metadata } from 'next';
import HeroPulse from "@/components/HeroPulse";
import IdentityStatement from "@/components/IdentityStatement";
import AboutSection from "@/components/AboutSection";
import NowSection from "@/components/NowSection";
import FooterMinimal from "@/components/FooterMinimal";

export const metadata: Metadata = {
  title: 'About Mahmoud Ezz',
  description: "Mahmoud Ezz is an Intelligence System Architect, designing architectures for AI, memory, forgetting, ecosystems, and traps.",
};


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-neutral-100 overflow-x-hidden">
      <div className="relative flex flex-col items-stretch pt-24">
        <HeroPulse />
        <IdentityStatement />

        <section
          id="about-intro"
          className="border-t border-white/5 bg-black/95 py-16 px-6 md:px-16"
        >
          <AboutSection />
        </section>

        <section
          id="now"
          className="border-t border-white/5 bg-black py-16 px-6 md:px-16"
        >
          <NowSection />
        </section>

        <FooterMinimal />
      </div>
    </main>
  );
}
