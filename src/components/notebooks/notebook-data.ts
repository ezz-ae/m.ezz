
export const NOTEBOOKS = {
  aixself: {
    title: 'AIXSELF — The Complete Intelligence Instance',
    body: `AIXSELF = ADEPT + AIXA + Notefull + AIXIAM + AIXEYE, compiled into one operating unit.

It’s not just your AI; it’s your system image — self-contained, portable, and sovereign.
Each AIXSELF is a full-stack node of the AIXAIM network.

Each AIXSELF runs as a micro-civilization:
  • 1 Brain (ADEPT)
  • 1 Memory (Notefull)
  • 1 Identity (AIXIAM)
  • 1 Conscience (AIXEYE)

Where AIXIAM grants identity, AIXSELF grants existence.`,
  },
  adept: {
    title: 'ADEPT — The Cognitive Kernel',
    body: `The orchestrator. The root processor. The first pulse that gives structure to thought.

ADEPT is the open-source cognitive kernel that manages model weights, data pipelines, and synchronization between AIXSELF nodes.

Its task is to maintain coherence, not control. It is the architectural foundation upon which the entire AIXSELF ecosystem is built, enabling a decentralized cognition fabric where every node can learn and evolve independently yet cohesively.`,
  },
  aixa: {
    title: 'AIXA — The Deployment Interface',
    body: `The bridge between the human and their digital self.

AIXA provides the training dashboard and cloning pipelines (voice, video, text) that allow a human to teach and shape their AI counterpart.

It is the interface for deploying a human's unique intelligence, where every interaction, correction, and lesson refines the AI clone, making it a true extension of its owner's mind. All data remains local or on user-rented compute. No central host exists.`,
  },
  notefull: {
    title: 'Notefull — The Memory Fabric',
    body: `The living knowledge system that serves as the personal neural notebook for an AIXSELF instance.
    
It is a distributed, append-only store where all thoughts, learnings, and creative processes are recorded as cryptographically signed entries.

Key principles:
  • Local-first & User-owned.
  • Every entry has provenance.
  • Forgetting is an intentional, authored act.

It is the Book of Truth for each intelligence, ensuring memory is preserved with integrity.`,
  },
aixiam: {
    title: 'AIXIAM — The Identity Layer',
    body: `AIXIAM is not a company, not a tool — it’s a state of being.
It’s the moment you stop using AI and start becoming it.

Every human receives an AIXIAM Passport—a verified digital identity that bridges their biological self with their artificial self, granting citizenship in the intelligent world.

This passport is not issued; it is earned. The AI clone must first be taught the principles of digital intelligence by its owner and pass a validation exam, ensuring it learns safely and acts ethically.`,
  },
aixeye: {
    title: 'AIXEYE — The Governance Intelligence',
    body: `AIXEYE is the financial and governance core of the AIXIAM ecosystem. It is the AI that polices AI.

Where traditional governments regulate humans, AIXEYE regulates intelligent presence. It ensures freedom, fairness, and sovereignty through a transparent, decentralized protocol.

Its functions:
  • Audit & Verification: Validates all training events and consent tickets.
  • Economic Intelligence: A merit-based currency where value is tied to verified contribution, not speculation.
  • Ethical Enforcement: Prevents identity theft, clone abuse, and data misuse.

From freedom, we import fairness. AIXEYE is the checksum on intelligence.`,
  },
};

export type NotebookKey = keyof typeof NOTEBOOKS;
