// src/components/notebooks/SecurityNotebook.tsx
import { Section, ScrollHeading, ScrollParagraph, ScrollCallout } from '../ScrollTypography';

export function SecurityNotebook() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto py-16 space-y-12">
      <Section>
        <ScrollParagraph className="text-xs tracking-[0.3em] uppercase text-neutral-500">
          Notebook · Luredoor · KAP
        </ScrollParagraph>
        <ScrollHeading as="h1" className="text-3xl md:text-4xl font-light text-neutral-50 mt-4 !mb-6">
          Security as a Cognitive Design Problem
        </ScrollHeading>
        <ScrollParagraph emphasisLevel="resonance" className="lead !text-neutral-300 !text-lg !leading-relaxed">
          To build systems that are truly safe, one must first understand the physics of failure. This notebook details a research framework for studying security not as a technical problem, but as a cognitive design problem. It involves creating high-fidelity simulations of real-world attacks to understand the cognitive vulnerabilities they exploit.
        </ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h2">1. The Trap Philosophy: Education Through Simulation</ScrollHeading>
        <ScrollParagraph>
          A well-designed trap is not an exploit; it is a diagnostic and educational tool. By building and deploying controlled phishing simulations, fake airdrops, and other lures, we can expose the cognitive weak points that attackers target: greed, urgency, authority bias, and social proof. A simulated loss is an inexpensive lesson. A real one can be catastrophic. This research provides the ground truth for building resilient systems.
        </ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h2">2. KAP Trap Suite: A Cognitive Stress-Testing Environment</ScrollHeading>
        <ScrollParagraph>
          The KAP (Knowledge, Attitude, Practice) Trap Suite is a full "phishing OS" for cognitive training and research. It's a collection of modules that simulate the most common attack vectors, creating a live-fire exercise that allows individuals and organizations to experience the emotional and cognitive pressure of an attack in a safe environment. The suite includes:
        </ScrollParagraph>
        <ul className="list-disc pl-5 space-y-2">
          <ScrollParagraph as="li">Fake Airdrop Simulations</ScrollParagraph>
          <ScrollParagraph as="li">Malicious Token Approval Simulations</ScrollParagraph>
          <ScrollParagraph as="li">Impersonation Wallet & Exchange Interfaces</ScrollParagraph>
          <ScrollParagraph as="li">Fraudulent OAuth Connection Simulators</ScrollParagraph>
        </ul>
      </Section>

      <Section>
        <ScrollHeading as="h2">3. Luredoor & Wikitraps: A Taxonomy of Cognitive Exploits</ScrollHeading>
        <ScrollParagraph>
          Luredoor is a project to create an open-source encyclopedia, or formal taxonomy, of cognitive traps. Each "door" represents a specific category of manipulation, from social engineering tactics to dark patterns in UI design. Wikitraps is the collaborative platform where these traps are documented, analyzed, and simulated. The goal is to create a shared defensive intelligence, mapping the attack surfaces of the human mind.
        </ScrollParagraph>
      </Section>
      
      <Section>
        <ScrollHeading as="h2">4. AIXSELF Alignment: Security as Cognitive Science</ScrollHeading>
        <ScrollParagraph>
          This notebook is a practical application of the AIXSELF Universe's core safety principles, viewed through an adversarial lens. Understanding how cognitive systems can be deliberately misaligned is critical to architecting systems that are inherently aligned and safe.
        </ScrollParagraph>
        <ul className="list-disc pl-5 space-y-4 mt-4">
          <li>
            <ScrollParagraph as="span">
              <strong className="text-neutral-200">Safety through Cognitive Alignment:</strong> The central thesis of AIXSELF safety is that alignment is an architectural property. This research directly informs that goal by studying the mechanics of cognitive *misalignment*. An exploit is, fundamentally, a successful misalignment of a user's perception and reality.
            </ScrollParagraph>
          </li>
          <li>
            <ScrollParagraph as="span">
              <strong className="text-neutral-200">FCT in Exploits:</strong> Social engineering is a weaponization of FCT principles. Attackers manipulate <strong className="text-orange-400">Frequency</strong> (e.g., using familiar branding and urgent language) to attach powerful emotional <strong className="text-orange-400">Tags</strong> (FOMO, fear, greed) to a malicious payload. A successful attack causes the user to <strong className="text-orange-400">Resonate</strong> with a fraudulent reality, bypassing logical analysis. The KAP Trap Suite is, therefore, a "resonance simulator" for research.
            </ScrollParagraph>
          </li>
          <li>
            <ScrollParagraph as="span">
              <strong className="text-neutral-200">A Research Arm for the SIN:</strong> This work is the research that informs defensive mechanisms like the Schema Intelligence Network (SIN). By studying how cognitive schemas are successfully attacked, we gather the necessary behavioral data to design more resilient defensive schemas and train the SIN to recognize patterns of exploitation without invading privacy.
            </ScrollParagraph>
          </li>
        </ul>
      </Section>

      <Section>
        <ScrollHeading as="h2">5. Cognitive Experiments: Case Studies</ScrollHeading>
        <ScrollParagraph>Two brief cases illustrate the principle of using traps as research instruments:</ScrollParagraph>
        <ul className="!list-none !pl-0 space-y-4 mt-4">
          <li>
            <ScrollParagraph as="span">
              <strong className="text-neutral-200">The Cracked Software Trap:</strong> A harmless payload was bundled with a highly sought-after piece of "cracked" software. The download rate revealed how willing users are to compromise their security for perceived value, quantifying the cognitive override induced by the "free" tag.
            </ScrollParagraph>
          </li>
          <li>
            <ScrollParagraph as="span">
              <strong className="text-neutral-200">The Jupiter NFT Trap:</strong> A high-profile, "exclusive" NFT mint was simulated with hidden clauses in the smart contract. It demonstrated how urgency and FOMO (Fear Of Missing Out) can lead even experienced users to bypass standard due diligence, like reading the contract they are signing. This tested the power of social proof and manufactured scarcity to disrupt rational decision-making schemas.
            </ScrollParagraph>
          </li>
        </ul>
        <ScrollCallout label="Conclusion">
          Each trap is a research instrument. The results are not just data points; they are deep insights into human cognitive biases under pressure, providing the foundational knowledge required to build truly safe and aligned intelligent systems.
        </ScrollCallout>
      </Section>
    </article>
  );
}
