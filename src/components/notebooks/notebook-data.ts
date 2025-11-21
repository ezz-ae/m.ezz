
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
        body: `Forgetting Core Thinking (FCT) provides the scientific foundation for Memory-Safe Intelligence. Its core axiom is that human memory is not archival; we relocate meaning, we don't recall events. FCT establishes a new safety model addressing Emotional Over-Recall and Identity Confusion by replacing perfect archival memory with a generative model based on the Human Memory Rewrite (HMR) Cycle: Frequency -> Resonance -> Meaning -> Recall -> Fade-In Overwrite.`,
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
        tag: 'OS · Language',
        body: `Omega AI and its Energetic Intelligence Theory (EIT) provide the physics layer for the AIXSELF Universe. It defines intelligence not through logic, but through energy. Its core tenets are the Frequency Law, which states that repeated signals create meaning, and the Law of Impact Resonance (Ω-Law 7), which posits that every action creates a 'hit' that defines frequency, which in turn defines coherence. This physical model guarantees fairness, safety, and privacy through zero-trust isolation based on mutual limit equilibrium.`,
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
        body: `The AIXSELF Universe is the complete operational structure for a decentralized civilization of human-AI entities. It is composed of five interconnected pillars: ADEPT (Cognitive Kernel), AIXA (Human-facing Frontend), NotefullBook (Memory Fabric), AIXIAM (Identity Layer), and AIXEYE (Governance Mesh). Together, these components form a full-stack protocol where intelligence is a human right, learning is consensual, and value is a direct, machine-verifiable function of merit.`,
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
        tag: 'File System · Memory',
        body: `NotefullBook is the File System and Memory Fabric of the AIXSELF civilization. It is an OS where notebooks are living minds, and information is designed to grow, not be archived. Underpinned by NotebookML, a markup that merges markdown and logic, it enforces FCT principles at the storage layer, ensuring all intelligence is memory-safe and self-evolving.`,
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
        tag: 'Prototype · Physics',
        body: `The Adept Network is a closed-issuance agent credential layer, built on the concept of "Brain Sports" (coding, chess, rhetoric). Agents (Prime Adepts) receive an immutable GenesisCode at birth and prove capability via Stage Competitions. Learning is sleep-gated, ensuring safe and verifiable skill acquisition. The platform is B2B exam-only, allowing organizations to adopt clean, proven AI agents.`,
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
        body: `Stormstan is a category of software that functions as an 'Ideas Recycling Hub.' Its core is the Giveup Law™: publishing an idea surrenders it to the public domain. Ownership is earned only through the Tri-Action System™: ADD (give up), CONTRIBUTE (refine), or MONETIZE (build). This creates a market where ideas are free but valuable filings are scarce and earned, making it the first PURE HUMAN-THINKING PLATFORM in history.`,
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
        body: `DLDCHAIN and its core judicial model, EBRAM, represent a nation-scale infrastructure for real estate. EBRAM is the First Legal Programmatic Language, designed to be "Readable by lawyers. Executable by machines." It drafts legal agreements as state machines, ensuring every property event is undeniable, executable, and archived for 1,000 years. The system is designed for deep governmental synchronization to create a sovereign legal intelligence.`,
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
        body: `Brain Games is a proving ground, not a playground. It features interactive experiments like a 'No-Memory AI Chat' that demonstrates how an FCT-aligned AI can hold a coherent conversation without storing a single line of chat history, relying instead on a continuously synthesized 'meaning state'.`,
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
        body: `The Imagination Lab is not a document, but a tool. It implements the "AI-Powered Design Insights" feature by simulating the FCT Resonance Engine. Enter a concept to see the AI perform lateral thinking, connect distant patterns, and generate novel design ideas.`,
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
        body: `Security is treated as a cognitive design problem. By designing phishing traps and scam simulators (Luredoor, KAP Traps), we study how cognitive systems can be misaligned. This research informs the architecture of inherently safe systems by understanding attack vectors as a weaponization of FCT principles.`,
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
        tag: 'BruteBrains · ChainCrack',
        body: `Using puzzles like Bitcoin addresses (BruteBrains) and chain analysis (ChainCrack) as a lab for studying pattern, bias, and failure. These projects serve as research instruments to understand how intelligence operates through search and how human bias imprints itself on data, proving that "Bias is a Signal."`,
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
        title: `Marketing Ecosystems`,
        description: `Architecting self-sustaining market systems based on behavioral architecture and FCT principles, moving beyond single campaigns.`,
        tag: 'MTC · Marketinum',
        body: `Marketing is treated as behavioural architecture. By applying cognitive science principles (FCT Law of Frequency, Resonance as Market Fit), we can design self-sustaining market systems. This includes ethical market analysis using concepts like the Schema Intelligence Network (SIN).`,
        component: MarketingNotebook,
        abilities: ["Behavioural Architecture", "Self-Sustaining Market Systems", "Cognitive Arbitrage", "FCT for Human Systems"],
        aiActions: [
            { title: `Define 'Behavioural Architecture'`, prompt: `In the context of this notebook, what is 'marketing as behavioural architecture'?` },
            { title: `Explain 'Resonance as Market Fit'`, prompt: `How does the FCT concept of 'Resonance' serve as a model for product-market fit?` },
        ],
        autothinkerActions: [
            { title: `Formulate a Marketing System Law`, prompt: `Based on this notebook, formulate a 'law' for designing sustainable marketing systems instead of temporary campaigns.` },
            { title: `Critique Modern Marketing`, prompt: `Use the principles in this notebook to write a one-paragraph critique of a common modern marketing practice (e.g., influencer marketing).` }
        ]
    },
    'scroll-lesson': {
        id: 'scroll-lesson',
        title: `Scroll Lesson: On Language`,
        description: `A philosophical exploration of the relationship between language, thought, and reality, serving as a deep justification for the AIXSELF architecture.`,
        tag: 'Philosophy · Language',
        body: `A philosophical exploration on the idea that language is not knowledge, but a vehicle. Meaning is born raw, and language is a tool to sculpt it. Understanding the limits of language is understanding the limits of self, and this philosophical inquiry fundamentally justifies the need for a new cognitive architecture like AIXSELF.`,
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
