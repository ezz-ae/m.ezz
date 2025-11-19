
// src/components/notebooks/SecurityNotebook.tsx
import { Section, ScrollHeading, ScrollParagraph } from '../ScrollTypography';

export function SecurityNotebook() {
  return (
    <>
      <article className="prose prose-invert max-w-3xl mx-auto py-16 space-y-12">
        <Section>
          <ScrollParagraph className="text-xs tracking-[0.3em] uppercase text-neutral-500">
            Notebook · Luredoor · KAP
          </ScrollParagraph>
          <ScrollHeading as="h1" className="text-3xl md:text-4xl font-light text-neutral-50 mt-4 !mb-6">
            Security as a Cognitive Design Problem
          </ScrollHeading>
          <ScrollParagraph emphasisLevel="resonance" className="lead !text-neutral-300 !text-lg !leading-relaxed">
            To understand how to protect people from exploits, one must first understand how and why they fall for them. This led to building traps. Not to cause harm, but to create high-fidelity simulations of real-world attacks. Security is not a technical problem; it is a cognitive design problem.
          </ScrollParagraph>
        </Section>

        <Section>
          <ScrollHeading as="h2">The Trap Philosophy: Education Through Simulation</ScrollHeading>
          <ScrollParagraph>A real trap is not about exploitation. It is an educational tool. By building and deploying controlled phishing simulations, fake airdrops, and other lures, one can expose the cognitive weak points that attackers target: greed, urgency, authority bias, and social proof. A simulated loss is a cheap lesson. A real one can be catastrophic.</ScrollParagraph>
        </Section>

        <Section>
          <ScrollHeading as="h2">KAP Trap Suite: A Phishing OS</ScrollHeading>
          <ScrollParagraph>The KAP (Knowledge, Attitude, Practice) Trap Suite is a full "phishing OS" for training. It's a collection of modules that simulate the most common attack vectors in the crypto space:</ScrollParagraph>
          <ul className="list-disc pl-5 space-y-2">
            <ScrollParagraph as="li">Fake Airdrops</ScrollParagraph>
            <ScrollParagraph as="li">Malicious Token Approvals</ScrollParagraph>
            <ScrollParagraph as="li">Impersonation Wallets & Exchanges</ScrollParagraph>
            <ScrollParagraph as="li">Fraudulent OAuth Connections</ScrollParagraph>
          </ul>
          <ScrollParagraph>This isn't a slideshow. It's a live-fire exercise that allows individuals and organizations to experience the emotional and cognitive pressure of an attack in a safe environment.</ScrollParagraph>
        </Section>

        <Section>
          <ScrollHeading as="h2">Luredoor & Wikitraps: A Taxonomy of Manipulation</ScrollHeading>
          <ScrollParagraph>Luredoor is a project to create an open-source encyclopedia of cognitive traps. Each "door" represents a specific category of manipulation, from social engineering tactics to dark patterns in UI design. Wikitraps is the collaborative platform where these traps are documented, analyzed, and simulated. The goal is to create a shared defensive intelligence for everyone.</ScrollParagraph>
        </Section>

        <Section>
          <ScrollHeading as="h2">Case Studies: Cracked Software & The Jupiter NFT Trap</ScrollHeading>
          <ScrollParagraph>Two brief cases illustrate the principle:</ScrollParagraph>
          <ul className="!list-none !pl-0">
            <ScrollParagraph as="li"><strong>The Cracked Software Trap:</strong> A harmless payload was bundled with a highly sought-after piece of "cracked" software. The download rate revealed how willing people are to compromise their security for perceived value, even when they know the risks.</ScrollParagraph>
            <ScrollParagraph as="li" className="mt-4"><strong>The Jupiter NFT Trap:</strong> A high-profile, "exclusive" NFT mint was simulated with hidden clauses in the smart contract. It demonstrated how urgency and FOMO (Fear Of Missing Out) can lead even experienced users to bypass standard due diligence, like reading the contract they are signing.</ScrollParagraph>
          </ul>
          <ScrollParagraph>Each trap is a research instrument. The results are not just data points; they are deep insights into human behavior under pressure.</ScrollParagraph>
        </Section>
      </article>
    </>
  );
}
