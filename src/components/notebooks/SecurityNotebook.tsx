
// src/components/notebooks/SecurityNotebook.tsx
import { motion } from 'framer-motion';

const Section: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
    >
        {children}
    </motion.section>
);

export function SecurityNotebook() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto py-16 space-y-12">
      <Section>
        <p className="text-xs tracking-[0.3em] uppercase text-neutral-500">
          Notebook · Luredoor · KAP
        </p>
        <h1 className="text-3xl md:text-4xl font-light text-neutral-50 mt-4 !mb-6">
          Security as a Cognitive Design Problem
        </h1>
        <p className="lead !text-neutral-300 !text-lg !leading-relaxed">
          To understand how to protect people from exploits, you must first understand how and why they fall for them. So, I started building traps. Not to cause harm, but to create high-fidelity simulations of real-world attacks. Security is not a technical problem; it is a cognitive design problem.
        </p>
      </Section>

      <Section>
        <h2>The Trap Philosophy: Education Through Simulation</h2>
        <p>A real trap is not about exploitation. It is an educational tool. By building and deploying controlled phishing simulations, fake airdrops, and other lures, we can expose the cognitive weak points that attackers target: greed, urgency, authority bias, and social proof. A simulated loss is a cheap lesson. A real one can be catastrophic.</p>
      </Section>

      <Section>
        <h2>KAP Trap Suite: A Phishing OS</h2>
        <p>The KAP (Knowledge, Attitude, Practice) Trap Suite is a full "phishing OS" for training. It's a collection of modules that simulate the most common attack vectors in the crypto space:</p>
        <ul>
          <li>Fake Airdrops</li>
          <li>Malicious Token Approvals</li>
          <li>Impersonation Wallets & Exchanges</li>
          <li>Fraudulent OAuth Connections</li>
        </ul>
        <p>This isn't a slideshow. It's a live-fire exercise that allows individuals and organizations to experience the emotional and cognitive pressure of an attack in a safe environment.</p>
      </Section>

      <Section>
        <h2>Luredoor & Wikitraps: A Taxonomy of Manipulation</h2>
        <p>Luredoor is a project to create an open-source encyclopedia of cognitive traps. Each "door" represents a specific category of manipulation, from social engineering tactics to dark patterns in UI design. Wikitraps is the collaborative platform where these traps are documented, analyzed, and simulated. The goal is to create a shared defensive intelligence for everyone.</p>
      </Section>

      <Section>
        <h2>Case Studies: Cracked Software & The Jupiter NFT Trap</h2>
        <p>Two brief cases illustrate the principle:</p>
        <ul className="!list-none !pl-0">
          <li><strong>The Cracked Software Trap:</strong> We bundled a harmless payload with a highly sought-after piece of "cracked" software. The download rate revealed how willing people are to compromise their security for perceived value, even when they know the risks.</li>
          <li><strong>The Jupiter NFT Trap:</strong> We simulated a high-profile, "exclusive" NFT mint with hidden clauses in the smart contract. It demonstrated how urgency and FOMO (Fear Of Missing Out) can lead even experienced users to bypass standard due diligence, like reading the contract they are signing.</li>
        </ul>
        <p>Each trap is a research instrument. The results are not just data points; they are deep insights into human behavior under pressure.</p>
      </Section>
    </article>
  );
}
