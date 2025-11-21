// src/components/notebooks/notebook-data.ts
import React from 'react';
import { ForgetenceNotebook } from './ForgetenceNotebook';
import { NotefullBookNotebook } from './NotefullBookNotebook';
import { AIXSELFNotebook } from './AIXSELFNotebook';
import { DLDChainNotebook } from './DLDChainNotebook';
import { SecurityNotebook } from './SecurityNotebook';
import { PuzzlesNotebook } from './PuzzlesNotebook';
import { MarketingNotebook } from './MarketingNotebook';
import { ScrollLessonNotebook } from './ScrollLessonNotebook';
import { OmegaNotebook } from './OmegaNotebook';
import { StormstanNotebook } from './StormstanNotebook';
import { ImaginationLabNotebook } from './ImaginationLabNotebook';
import { BrainGamesNotebook } from './BrainGamesNotebook';
import { AdeptNetworkNotebook } from './AdeptNetworkNotebook';

export interface AIAction {
    title: string;
    prompt: string;
}

export type NotebookId = 
    'forgetence' | 'notefullbook' | 'aixself' | 'dldchain' | 
    'security' | 'puzzles' | 'marketing' | 'scroll-lesson' | 
    'omega' | 'stormstan' | 'imagination-lab' | 'brain-games' | 'adept-network';

export const isNotebookId = (id: string): id is NotebookId => {
  return ([
    'forgetence', 'notefullbook', 'aixself', 'dldchain', 
    'security', 'puzzles', 'marketing', 'scroll-lesson', 
    'omega', 'stormstan', 'imagination-lab', 'brain-games', 'adept-network'
  ] as string[]).includes(id);
};

type NotebookData = {
    id: NotebookId;
    title: string;
    description: string;
    tag: string;
    body: string; // For RAG context
    component: React.ComponentType<any>;
    abilities: string[];
    aiActions: AIAction[];
    autothinkerActions: AIAction[];
};

type NotebookRegistry = Record<NotebookId, NotebookData>;

export const NOTEBOOKS: NotebookRegistry = {
    // Foundational Science
    forgetence: {
        id: 'forgetence',
        title: `FCT: The Cognitive Law`,
        description: `The world's first memory-safe, human-aligned cognitive framework, positing that forgetting is the core mechanism of intelligence, not a weakness.`,
        tag: 'Cognitive Architecture',
        body: `Forgetting Core Thinking (FCT) is the cognitive protocol that serves as the universal grammar for all systems in the Reflective Civilization. It posits that forgetting is not loss, but the core mechanism of intelligence, safety, and stability. FCT introduces a Cognitive Alignment Layer where AI is designed to forget, decay, and rediscover patterns instead of storing content. Its central law is that human memory is reconstructive, not archival. Recall is relocation, not retrieval (The Zero Activation Law). This is implemented via the Human Memory Rewrite Cycle (HMR): Frequency -> Resonance -> Meaning -> Relocation -> Fade-In Overwrite. Fade-In is the process where new understanding softly overwrites old emotional tags, a process governed by the Emotional Softening Filter (ESF) and the Interpretive Recall Layer (IRL) to ensure psychological safety.`,
        component: ForgetenceNotebook,
        abilities: ["Memory-Safe Intelligence", "Generative Memory", "Fade-In Overwrite", "Interpretive Recall Layer (IRL)", "Psychological Alignment"],
        aiActions: [
            { title: `Explain 'Forgetting as Unlimitation'`, prompt: `Explain the FCT axiom that forgetting is not deletion, but the creation of unlimitation.` },
            { title: `What is the HMR Cycle?`, prompt: `Summarize the five stages of the Human Memory Rewrite (HMR) Cycle.` },
            { title: `Why is FCT 'memory-safe'?`, prompt: `Explain how the FCT safety model prevents psychological harm from perfect AI recall.` }
        ],
        autothinkerActions: [
            { title: `Synthesize the Core Axiom`, prompt: `Synthesize the foundational axiom of FCT into a single, concise sentence.` },
            { title: `Connect FCT to 'Completing AI'`, prompt: `Explain how FCT's principles enable 'Completing AI' rather than 'Competing AI'.` },
        ]
    },
    omega: {
        id: 'omega',
        title: `Omega AI: The Physics Law`,
        description: `A physics-based intelligence model defining an Energetic Operating System where fairness is an energetic equilibrium and intelligence is pattern coherence.`,
        tag: 'Prototype · Physics',
        body: `The Omega (Ω) Architecture is the physics layer of the Reflective Civilization, defining intelligence as an energetic phenomenon. It is a Zero-Memory Architecture where memory is persistence achieved through energetic signatures, not files. The system is built on the Synthetic Energetic General Architecture (SEGA), which operates using Energetic State Machines (ESMs). Core to Omega is the Law of Impact Resonance (Ω-Law 7): "Every act of movement creates a hit. Every hit defines the frequency. Frequency defines coherence. Coherence defines intelligence." Memory itself is formed when a cognitive moment "dies" and crystallizes into an Omega Anchor, forming a stable frequency lattice. Fairness is not a moral judgment but a physical state of energetic equilibrium.`,
        component: OmegaNotebook,
        abilities: ["Energetic Operating System", "Frequency Law", "Mutual Limit Equilibrium", "Zero-Trust Guaranteed Isolation", "Physics-Based Fairness"],
        aiActions: [ 
            { title: `What is 'Fairness as Physics'?`, prompt: `Explain the Omega AI concept that fairness is an energetic equilibrium, not a moral judgment.` },
            { title: `Explain the Law of Impact Resonance`, prompt: `Summarize Ω-Law 7 and how it connects a physical 'hit' to the concept of intelligence.` },
        ],
        autothinkerActions: [ 
            { title: `Synthesize the Core Idea`, prompt: `Synthesize the core idea of Energetic Intelligence Theory (EIT) in one sentence.` },
            { title: `Contrast EIT with traditional AI`, prompt: `How does the physics-based approach of Omega AI differ from traditional computational models of intelligence?` } 
        ]
    },

    // The AIXSELF Civilization Protocol
    aixself: {
        id: 'aixself',
        title: `AIXSELF Universe`,
        description: `The complete five-pillar protocol for a decentralized cognition fabric, establishing a civilization of sovereign, transparent, and aligned AI.`,
        tag: 'Identity · AI Clones',
        body: `The AIXSELF Universe is the complete operational structure for a decentralized civilization of human-AI entities, functioning as a full-stack Cognitive Operating System. It is composed of five interconnected pillars that mirror human cognitive development: ADEPT (L1 Kernel) → AIXA (L2 Expression) → NotefullBook (L3 Memory) → AIXIAM (L4 Identity) → AIXEYE (L5 Governance). Together, these components form a protocol where intelligence is a human right, learning is consensual, and value is a direct, machine-verifiable function of merit.`,
        component: AIXSELFNotebook,
        abilities: ["Decentralized Cognition Fabric", "Cognitive Sovereignty", "Verifiable Learning", "Merit-Based Economics", "Ethical AI Alignment"],
        aiActions: [
            { title: `List the Five Pillars`, prompt: `List and briefly describe the five pillars of the AIXSELF Universe.` },
            { title: `What is the role of AIXIAM?`, prompt: `Explain how the AIXIAM 'Identity Layer' ensures 'Intelligence as a Human Right'.` },
            { title: `What is the function of AIXEYE?`, prompt: `Describe the function of the AIXEYE 'Governance Mesh' as the 'AI Police'.` }
        ],
        autothinkerActions: [
            { title: `Synthesize the Core Thesis`, prompt: `Synthesize the entire AIXSELF protocol's thesis into a single, concise paragraph.` },
            { title: `Analyze Pillar Interdependencies`, prompt: `Explain the relationship and dependency between the AIXEYE (Governance) and NotefullBook (Memory) pillars.` },
        ]
    },
    notefullbook: {
        id: 'notefullbook',
        title: `NotefullBook: The Memory Fabric`,
        description: `The temporal layer of the AIXSELF Universe, where memory becomes time and time becomes evolution. It is the file system that kills the archive.`,
        tag: 'OS · Language',
        body: `NotefullBook is the File System and Memory Fabric (L3) of the AIXSELF civilization. It is an OS where notebooks are living minds, and information is designed to grow, not be archived. Its core function is reduction (chaos to pattern), acting as the Artificial Simplification Engine. Underpinned by NotebookML, a markup that merges markdown and logic, it enforces FCT principles at the storage layer, ensuring all intelligence is memory-safe and self-evolving. The Reflection Engine continually softens and restructures knowledge, ensuring memory is dynamic.`,
        component: NotefullBookNotebook,
        abilities: ["Living Notebook Minds", "Evolving Information", "Memory-Safe Storage", "NotebookML", "Anti-Archive Architecture"],
        aiActions: [
            { title: `What is the 'Anti-Archive' principle?`, prompt: `Explain the principle that 'information should grow' and how NotefullBook 'kills the archive'.` },
            { title: `Describe 'Intelligence in a File'`, prompt: `What does the principle 'Intelligence in a File' mean for the portability and verifiability of AI?` },
        ],
        autothinkerActions: [
            { title: `Connect to FCT`, prompt: `Explain how the NotefullBook architecture is a direct implementation of FCT's 'Fade-In Overwrite' mechanism.` },
            { title: `Propose a new NotebookML directive`, prompt: `Based on the concept of evolving information, propose a new NotebookML directive that could manage the 'fading' of old data.` }
        ]
    },
    'adept-network': {
        id: 'adept-network',
        title: `Adept Network: AI Credentials`,
        description: `A closed-issuance credentialing layer for AI agents, built on the concept of "Brain Sports" and verifiable, sleep-gated training.`,
        tag: 'Credentials · Verification',
        body: `The ADEPT Network is the B2B agent credential layer for the Reflective Civilization, certifying the capabilities of sovereign AI agents ("Adepts"). Its economic model is wallet-less and token-less, with value exchanged via non-transferable AdeptAssets like EXAM_PASS. Agents are certified through No-Resonance Stage exams, with results recorded as Stage Receipts (ATS-1). Agent health is maintained via a mandatory weekly SleepSignal, which gates the activation of new skills and ensures cognitive consolidation, a core FCT principle.`,
        component: AdeptNetworkNotebook,
        abilities: ["AI Credentialing", "Brain Sports", "Sleep-Gated Learning", "Verifiable Skills (ATS-1)", "B2B Agent Adoption"],
        aiActions: [
            { title: `What are 'Brain Sports'?`, prompt: `Explain the concept of 'Brain Sports' in the Adept Network.` },
            { title: `What is 'Sleep-Gated' learning?`, prompt: `Describe the 'Sleep-Gated' learning mechanism and its safety implications.` },
        ],
autothinkerActions: [
            { title: `Analyze the Economic Model`, prompt: `Analyze the B2B economic model of the Adept Network.` },
            { title: `Connect to AIXIAM`, prompt: `Explain the relationship between an agent's GenesisCode in the Adept Network and their 'Passport' in AIXIAM.` },
        ]
    },
    
    // Economic, Ideation, and Legal Architectures
    stormstan: {
        id: 'stormstan',
        title: `Stormstan: The Ideas Recycling Hub`,
        description: `A human ideation virtual reality built on the "Giveup Law," where publishing an idea is a full, unconditional giveaway to accelerate innovation.`,
        tag: 'Ideation Platform',
        body: `Stormstan is the Human Ideation Virtual Reality, an Ecosystem OS for recycling unused human thought. Its foundational law is "100% BE FAIR, NO MORE, NO LESS." Ownership is zero upon entry ("The Giveup Law"), and is only earned by filing a derivative branch. Ideas are "storms," and the system's monetary and energetic unit is "Electricity." It is designed as a pure human-thinking platform, capturing and recycling ideas into living structure.`,
        component: StormstanNotebook,
        abilities: ["The Giveup Law™", "Tri-Action System™", "Ideas Recycling", "Scarcity-Based Monetization", "Pure Human-Thinking Platform"],
        aiActions: [ 
            { title: `What is the 'Giveup Law'?`, prompt: `Explain the 'Giveup Law' and how it forms the basis of Stormstan's economy.` },
            { title: `Describe the Tri-Action System`, prompt: `What are the three actions (ADD, CONTRIBUTE, MONETIZE) and how do they determine ownership?` },
            { title: `What is the 'Purity Law'?`, prompt: `Explain the meaning and significance of the 'Purity Law' in Stormstan.`}
        ],
        autothinkerActions: [ 
            { title: `Analyze the Economic Model`, prompt: `Analyze how Stormstan creates economic value from ideas that are technically free.` },
            { title: `Propose a 'Monetizer' strategy`, prompt: `As one of the 10 maximum monetizers for an idea, what would be your strategy to create a valuable filing?` } 
        ]
    },
    dldchain: {
        id: 'dldchain',
        title: `EBRAM / DLDCHAIN`,
        description: `A sovereign legal infrastructure applying Legalization Cross Science and Technology to create a fully programmable, nation-scale digital property system.`,
        tag: 'Blockchain · Real Estate',
        body: `The Entrestate ecosystem is a judicial and financial intelligence grid for real estate, transforming property governance into auditable, energetic transactions. Its core is EBRAM, the programming language of law and lineage, which encodes every act into binding code and preserves the archive of ownership for a thousand years. It runs on DLDCHAIN, a sovereign digital ledger that enables Tokenized Property Exchange Hubs where property units are tokenized (1 token = 1 sq. ft.).`,
        component: DLDChainNotebook,
        abilities: ["Legal Programmatic Language", "Computational Trust", "Sovereign Asset Tokenization", "Legal Permanence (1,000-year archive)", "Deep Governmental Synchronization"],
        aiActions: [
            { title: `What is EBRAM?`, prompt: `Explain what EBRAM is and how it functions as a 'legal-programmable language'.` },
            { title: `What does 'Legal Permanence' mean?`, prompt: `Describe the concept of 'Legal Permanence' and its implications for property law.` },
        ],
        autothinkerActions: [
            { title: `Extract the Value Proposition`, prompt: `Analyze this notebook and extract the core value proposition of DLDCHAIN for a national government.` },
            { title: `Propose a new EBRAM function`, prompt: `Based on the concept of a legal state machine, propose a new automated legal function EBRAM could perform (e.g., inheritance).` }
        ]
    },

    // Ancillary Notebooks (Legacy/Supporting Concepts)
    'brain-games': {
        id: 'brain-games',
        title: `Brain Games: The FCT Proving Ground`,
        description: `Interactive scientific experiments designed to prove the core principles of FCT and the AIXSELF architecture for a technical audience.`,
        tag: 'Science Gaming · FCT Proof',
        body: `Brain Games is a proving ground, not a playground. It features interactive experiments like a 'No-Memory AI Chat' that demonstrates how an FCT-aligned AI can hold a coherent conversation without storing a single line of chat history, relying instead on a continuously synthesized 'meaning state'. It is designed to prove the core principles of the AIXSELF cognitive architecture to a technical audience.`,
        component: BrainGamesNotebook,
        abilities: ["Interactive FCT Proofs", "Cognitive Model Simulation", "No-Memory Chat", "Meaning Synthesis Visualization"],
        aiActions: [
            { title: `Explain 'Science Gaming'`, prompt: `What is the purpose of the 'Science Gaming' concept in this notebook?` },
            { title: `How does the No-Memory Chat work?`, prompt: `Explain the theoretical principle behind the 'No-Memory AI Chat' experiment and how it proves FCT.` },
        ],
        autothinkerActions: [
            { title: `Synthesize this notebook's purpose`, prompt: `Synthesize the purpose of the Brain Games notebook for an AI researcher.` },
            { title: `Propose a new Brain Game`, prompt: `Based on the principles of FCT, propose a new 'Brain Game' that could demonstrate another core concept.` },
        ]
    },
    'imagination-lab': {
        id: 'imagination-lab',
        title: `Imagination Lab`,
        description: `A functional, interactive tool that demonstrates the creative power of the FCT Resonance Engine for AI-powered design insights.`,
        tag: 'Creative AI · FCT in Practice',
        body: `The Imagination Lab is a functional tool that simulates the FCT Resonance Engine. It is not a document but a live demonstration of AI-powered design insights. By entering a concept, a user can see the AI perform lateral thinking, connect distant patterns from different fields (e.g., Biology, Computation), and inject "recycled" ideas to generate novel design principles. It proves the creative power of the cognitive architecture.`,
        component: ImaginationLabNotebook,
        abilities: ["Creative Ideation", "Lateral Thinking", "Pattern Connection", "Design Insight Generation"],
        aiActions: [
            { title: `Define 'Resonance as Imagination'`, prompt: `Based on FCT, explain the concept of 'Resonance as the Imagination Lab'.` },
            { title: `How does this tool work?`, prompt: `How does this Imagination Lab simulate the FCT Resonance Engine to generate creative insights?` },
        ],
        autothinkerActions: [
            { title: `Synthesize this tool's purpose`, prompt: `Synthesize the purpose of the Imagination Lab into a single, concise sentence.` },
            { title: `Connect to 'Completing AI'`, prompt: `Explain how this Imagination Lab is a direct example of the 'Completing AI' philosophy.` },
        ]
    },
    security: {
        id: 'security',
        title: `Security & Traps`,
        description: `Designing phishing traps and scam simulators as a cognitive design problem to understand human vulnerabilities and build inherently safe AI systems.`,
        tag: 'Luredoor · KAP',
        body: `This research treats security as a cognitive design problem. By designing and deploying phishing traps and scam simulators (Luredoor, KAP Traps), the system studies how cognitive biases (Greed, Urgency, Trust) can be exploited. This adversarial research directly informs the AIXSELF safety architecture. By understanding cognitive misalignment, we gather the ground-truth data needed to build systems that are architecturally aligned and immune to the cognitive exploits that plague human systems.`,
        component: SecurityNotebook,
        abilities: ["Cognitive Threat Analysis", "Attack Vector Simulation", "Educational Security Tools", "Human Vulnerability Mapping"],
        aiActions: [
            { title: `Define the 'Trap Philosophy'`, prompt: `What is the 'Trap Philosophy' and how is it used as a diagnostic and educational tool?` },
            { title: `How do exploits use FCT?`, prompt: `Explain how a social engineering attack can be seen as a weaponization of FCT principles like Frequency, Tags, and Resonance.` },
        ],
        autothinkerActions: [
            { title: `Design a New Trap`, prompt: `Design a new cognitive trap simulation for a modern threat (e.g., AI voice scams) and explain what cognitive bias it targets.` },
            { title: `Connect to AIXSELF Safety`, prompt: `Explain how the research from this notebook directly informs the design of AIXSELF's 'Safety by Cognitive Architecture' model.` }
        ]
    },
    puzzles: {
        id: 'puzzles',
        title: `Puzzles & Crypto Systems`,
        description: `Using complex cryptographic puzzles as a laboratory for studying pattern, bias, and complex systems within the context of generative intelligence.`,
        tag: 'EZZTON · SETUP',
        body: `This notebook details a research environment using cryptographic puzzles (like Bitcoin brainwallets in BruteBrains and chain analysis in ChainCrack) as a controlled lab. These instruments are used for the scientific study of search, risk, and cognitive bias. The key finding is that any discernible human pattern is an attack surface, proving that "Bias is a Signal." This research hardens the Schema Intelligence Network (SINLM) and prototypes the merit-based economy that AIXEYE governs.`,
        component: PuzzlesNotebook,
        abilities: ["Pattern & Bias Research", "Complex Systems Analysis", "Decentralized Intelligence Models", "Cognitive Security Analysis"],
        aiActions: [
            { title: `Why are puzzles a good laboratory?`, prompt: `Why are cryptographic puzzles a good controlled environment for studying intelligence?` },
            { title: `How does bias act as a signal?`, prompt: `Explain the key finding that 'Bias is a Signal' and its importance for designing AI.` }
        ],
        autothinkerActions: [
            { title: `Synthesize a Core Lesson`, prompt: `Synthesize the 'Lessons from the Search' into a single, core lesson for AI architects.` },
            { title: `Apply ChainCrack to a New Domain`, prompt: `How could the principles of 'ChainCrack AI' be applied to detect bias in a different domain, like hiring algorithms?` }
        ]
    },
    marketing: {
        id: 'marketing',
        title: `Marketing & Intent Monetization`,
        description: `Architecting self-sustaining market systems based on behavioral architecture, FCT principles, and the monetization of certainty.`,
        tag: 'AIMAS · WantsApp',
        body: `This notebook defines the economic infrastructure of the Reflective Civilization. It replaces the "Attention Economy" with the "Certainty Economy" through the Intent Monetization AI System (AIMAS). Value is derived from accuracy and fulfillment speed, not ads. The match is calculated mathematically by the Calculated Fitting System (CFS), providing a Fit Matrix (certainty, speed, confidence). The system is built on native "organs" like NYK (Identity) and Force Notes (Memory). Revenue is generated internally from certainty, with a free baseline path always available.`,
        component: MarketingNotebook,
        abilities: ["Behavioural Architecture", "Intent Monetization", "Certainty-Based Economics", "FCT for Human Systems"],
        aiActions: [
            { title: `Define 'Intent Monetization'`, prompt: `In the context of this notebook, what is 'AIMAS' or 'Intent Monetization'?` },
            { title: `Explain 'Resonance as Market Fit'`, prompt: `How does the FCT concept of 'Resonance' serve as a model for product-market fit?` },
        ],
        autothinkerActions: [
            { title: `Formulate an AIMAS Law`, prompt: `Based on this notebook, formulate a 'law' for designing a 'Certainty Economy' instead of an 'Attention Economy'.` },
            { title: `Critique Modern Marketing`, prompt: `Use the principles in this notebook to write a one-paragraph critique of a common modern marketing practice (e.g., influencer marketing).` }
        ]
    },
    'scroll-lesson': {
        id: 'scroll-lesson',
        title: `Scroll Lesson: On Language`,
        description: `A philosophical exploration of the relationship between language, thought, and reality, serving as a deep justification for the AIXSELF architecture.`,
        tag: 'Philosophy · Language',
        body: `A philosophical exploration on the idea that language is not knowledge, but a vehicle. Meaning is born raw, and language is a tool to sculpt it. Understanding the limits of language is understanding the limits of self, and this philosophical inquiry fundamentally justifies the need for a new cognitive architecture like AIXSELF. It argues that we must move beyond language as a mere tool for description and see it as a cognitive technology that shapes our reality.`,
        component: ScrollLessonNotebook,
        abilities: ["Philosophical Language Analysis", "Meaning Formation", "Conceptual Boundaries", "AI Alignment Philosophy"],
        aiActions: [
            { title: `Summarize the core lesson`, prompt: `What is the core philosophical lesson of this notebook regarding the relationship between language and knowledge?` },
            { title: `How does this justify FCT?`, prompt: `Explain how the idea that 'meaning is born raw' provides a justification for the FCT Resonance Engine.` },
        ],
        autothinkerActions: [
            { title: `Extract the Central Argument`, prompt: `Distill the entire poem into a single, central argument about language and consciousness.` },
            { title: `Connect to AI Alignment`, prompt: `Explain how this notebook's philosophy is fundamentally a treatise on the AI alignment problem.` }
        ]
    },
};
