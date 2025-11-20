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
import { PlaceholderNotebook } from './PlaceholderNotebook';
import { StormstanNotebook } from './StormstanNotebook';
import { ImaginationLabNotebook } from './ImaginationLabNotebook';
import { BrainGamesNotebook } from './BrainGamesNotebook';

export interface AIAction {
    title: string;
    prompt: string;
}

export type NotebookId = 'forgetence' | 'notefullbook' | 'aixself' | 'dldchain' | 'security' | 'puzzles' | 'marketing' | 'scroll-lesson' | 'omega' | 'stormstan' | 'imagination-lab' | 'brain-games';

export const isNotebookId = (id: string): id is NotebookId => {
  return ['forgetence', 'notefullbook', 'aixself', 'dldchain', 'security', 'puzzles', 'marketing', 'scroll-lesson', 'omega', 'stormstan', 'imagination-lab', 'brain-games'].includes(id);
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
    'brain-games': {
        id: 'brain-games',
        title: 'Brain Games: The FCT Proving Ground',
        description: 'Interactive scientific experiments designed to prove the core principles of FCT and the AIXSELF architecture for a technical audience.',
        tag: 'Science Gaming · FCT Proof',
        body: `Brain Games is a proving ground, not a playground. It features interactive experiments like a 'No-Memory AI Chat' that demonstrates how an FCT-aligned AI can hold a coherent conversation without storing a single line of chat history, relying instead on a continuously synthesized 'meaning state'.`,
        component: BrainGamesNotebook,
        abilities: ["Interactive FCT Proofs", "Cognitive Model Simulation", "No-Memory Chat", "Meaning Synthesis Visualization"],
        aiActions: [
            { title: "Explain 'Science Gaming'", prompt: "What is the purpose of the 'Science Gaming' concept in this notebook?" },
            { title: "How does the No-Memory Chat work?", prompt: "Explain the theoretical principle behind the 'No-Memory AI Chat' experiment and how it proves FCT." },
        ],
        autothinkerActions: [
            { title: "Synthesize this notebook's purpose", prompt: "Synthesize the purpose of the Brain Games notebook for an AI researcher." },
            { title: "Propose a new Brain Game", prompt: "Based on the principles of FCT, propose a new 'Brain Game' that could demonstrate another core concept, like 'Emotional Softening' or 'Resonance'." },
        ]
    },
    'imagination-lab': {
        id: 'imagination-lab',
        title: 'Imagination Lab',
        description: 'A functional, interactive tool that demonstrates the creative power of the FCT Resonance Engine for AI-powered design insights.',
        tag: 'Creative AI · FCT in Practice',
        body: `The Imagination Lab is not a document, but a tool. It implements the "AI-Powered Design Insights" feature by simulating the FCT Resonance Engine...`,
        component: ImaginationLabNotebook,
        abilities: ["Creative Ideation", "Lateral Thinking", "Pattern Connection", "Design Insight Generation"],
        aiActions: [
            { title: "Define 'Resonance as Imagination'", prompt: "Based on FCT, explain the concept of 'Resonance as the Imagination Lab'." },
            { title: "How does this tool work?", prompt: "How does this Imagination Lab simulate the FCT Resonance Engine to generate creative insights?" },
        ],
        autothinkerActions: [
            { title: "Synthesize this tool's purpose", prompt: "Synthesize the purpose of the Imagination Lab into a single, concise sentence." },
            { title: "Connect to 'Completing AI'", prompt: "Explain how this Imagination Lab is a direct example of the 'Completing AI' philosophy." },
        ]
    },
    forgetence: {
        id: 'forgetence',
        title: 'Forgetence / FCT',
        description: 'A cognitive architecture for human-aligned AI built on the physics of forgetting.',
        tag: 'Cognitive Architecture',
        body: `Forgetting Core Thinking (FCT) is the idea that forgetting is the core mechanism of intelligence, not a weakness. Humans don't store events; we store frequencies, tags, and meanings. An AI that refuses to forget is structurally misaligned. The true danger is perfect memory.`,
        component: ForgetenceNotebook,
        abilities: [ "Generative Memory", "Meaning-First Cognition", "Cognitive Safety", "Psychological Alignment" ],
        aiActions: [
            { title: "Explain Generative Memory", prompt: "Explain the concept of 'Generative Memory' as momentary reconstruction, not archival storage." },
            { title: "What is Meaning-First Cognition?", prompt: "Describe the principle of 'Meaning-First Cognition' and why it's important for AI." }
        ],
        autothinkerActions: [
            { title: "Synthesize FCT's Goal", prompt: "Synthesize the ultimate goal of the Forgetting Core Thinking (FCT) framework." },
            { title: "Propose a Real-World Application", prompt: "Based on FCT, propose a novel real-world application for a 'Completing AI'." }
        ]
    },
    notefullbook: {
        id: 'notefullbook',
        title: 'NotefullBook OS & NotebookML',
        description: 'An OS where notebooks are living minds, and a markup language that merges logic and memory.',
        tag: 'OS · Language',
        body: 'NotefullBook is an OS where notebooks are living minds. NotebookML is a format merging Markdown, logic, and memory. It treats AI as an OS layer.',
        component: NotefullBookNotebook,
        abilities: [ "Living Notebook Minds", "Portable Intelligence Files", "OS-Level AI Integration", "Verifiable Thought History" ],
        aiActions: [
            { title: "What is NotebookML?", prompt: "Explain what NotebookML is and provide two examples of its core directives." },
            { title: "What is the 'Mind Board'?", prompt: "Describe the concept of the 'Mind Board' in the NotefullBook OS." }
        ],
        autothinkerActions: [
            { title: "Connect to the Cognitive Ledger", prompt: "Explain how the 'Cognitive Ledger' feature makes an AI's thought process auditable." },
            { title: "Suggest a New OS Feature", prompt: "Based on the OS concept, suggest a new feature for the 'Mind Board'." }
        ]
    },
    aixself: {
        id: 'aixself',
        title: 'AIXSELF Universe',
        description: 'The protocol for a decentralized, sovereign, and fair intelligence civilization.',
        tag: 'Identity · AI Clones',
        body: 'The AIXAIM protocol is a comprehensive blueprint designed to establish a decentralized civilization of human-AI entities...',
        component: AIXSELFNotebook,
        abilities: [ "Cognitive Sovereignty", "Verifiable Learning", "Merit-Based Economics", "Decentralized Governance" ],
        aiActions: [
            { title: "List the Five Pillars", prompt: "List and briefly describe the five pillars of the AIXAIM ecosystem." },
            { title: "Explain 'Cognitive Sovereignty'", prompt: "What is 'Cognitive Sovereignty' and how does the AIXIAM Passport enforce it?" }
        ],
        autothinkerActions: [
            { title: "Analyze Pillar Interdependencies", prompt: "Explain the relationship and dependency between the AIXEYE (Governance) and Notefull (Memory) pillars." },
            { title: "Critique 'Merit-Based Economics'", prompt: "Identify a potential challenge of the 'Merit-Based Economics' principle and propose a solution." }
        ]
    },
    dldchain: {
        id: 'dldchain',
        title: 'DLDCHAIN',
        description: 'A sovereign blockchain architecture for a national-scale real estate intelligence OS.',
        tag: 'Blockchain · Real Estate',
        body: 'DLDCHAIN is the architectural blueprint for a national-scale, sovereign blockchain designed exclusively for the real estate sector...',
        component: DLDChainNotebook,
        abilities: [ "Computational Trust", "Sovereign Asset Tokenization", "Automated Legal Governance", "National-Scale Infrastructure" ],
        aiActions: [
            { title: "What is the core problem DLDCHAIN solves?", prompt: "What is the core problem of illiquidity and opacity in real estate that DLDCHAIN is designed to solve?" },
            { title: "Explain EBRAM", prompt: "What is EBRAM and how does it function as a 'legal-programmable language'?" }
        ],
        autothinkerActions: [
            { title: "Propose a New Component", prompt: "Based on the existing components (EBRAM, MAKE, etc.), propose a new system component that would further enhance the DLDCHAIN ecosystem." },
            { title: "Identify the Biggest Hurdle", prompt: "From a socio-technical perspective, what is the biggest hurdle to implementing a system like DLDCHAIN?" }
        ]
    },
    security: {
        id: 'security',
        title: 'Security & Traps',
        description: 'Designing phishing traps and scam simulators as a cognitive design problem.',
        tag: 'Luredoor · KAP',
        body: 'Designing phishing traps, scam simulators, and other security measures as a cognitive design problem...',
        component: SecurityNotebook,
        abilities: [ "Cognitive Threat Analysis", "Attack Vector Simulation", "Educational Security Tools", "Adversarial Research" ],
        aiActions: [
            { title: "Define the 'Trap Philosophy'", prompt: "What is the 'Trap Philosophy' and how is it used as a diagnostic and educational tool?" },
            { title: "How do exploits use FCT?", prompt: "Explain how a social engineering attack can be seen as a weaponization of FCT principles." }
        ],
        autothinkerActions: [
            { title: "Design a New Trap", prompt: "Design a new cognitive trap simulation for a modern threat (e.g., AI voice scams) and explain what cognitive bias it targets." },
            { title: "Connect to AIXSELF Safety", prompt: "Explain how this adversarial research directly informs the design of AIXSELF's 'Safety by Cognitive Architecture' model." }
        ]
    },
    puzzles: {
        id: 'puzzles',
        title: 'Puzzles & Crypto Systems',
        description: 'Using puzzles as a lab for studying pattern, bias, and complex systems.',
        tag: 'BruteBrains · ChainCrack',
        body: 'Using puzzles like Bitcoin addresses and chain analysis as a lab for studying pattern, bias, and failure...',
        component: PuzzlesNotebook,
        abilities: [ "Pattern & Bias Research", "Complex Systems Analysis", "Decentralized Intelligence Models", "Cognitive Security Analysis" ],
        aiActions: [
            { title: "Why are puzzles a good laboratory?", prompt: "Why are cryptographic puzzles a good controlled environment for studying intelligence?" },
            { title: "Explain the BruteBrains Ticket Model", prompt: "What is the BruteBrains 'Ticket Model' and how is it a prototype of a merit-based economy?" }
        ],
        autothinkerActions: [
            { title: "Synthesize a Core Lesson", prompt: "Synthesize the 'Lessons from the Search' into a single, core lesson for AI architects." },
            { title: "Apply ChainCrack to a New Domain", prompt: "How could the principles of 'ChainCrack AI' be applied to detect bias in a different domain, like hiring algorithms?" }
        ]
    },
    marketing: {
        id: 'marketing',
        title: 'Marketing Ecosystems',
        description: 'Architecting self-sustaining market systems instead of single campaigns.',
        tag: 'MTC · Marketinum',
        body: 'Building marketing systems and ecosystems, not just campaigns...',
        component: MarketingNotebook,
        abilities: [ "Behavioural Architecture", "Self-Sustaining Market Systems", "Cognitive Arbitrage", "FCT for Human Systems" ],
        aiActions: [
            { title: "Define 'Behavioural Architecture'", prompt: "In the context of this notebook, what is 'marketing as behavioural architecture'?" },
            { title: "Explain 'Resonance as Market Fit'", prompt: "How does the FCT concept of 'Resonance' serve as a model for product-market fit?" }
        ],
        autothinkerActions: [
            { title: "Formulate a Marketing System Law", prompt: "Based on this notebook, formulate a 'law' for designing sustainable marketing systems instead of temporary campaigns." },
            { title: "Critique Modern Marketing", prompt: "Use the principles in this notebook to write a one-paragraph critique of a common modern marketing practice." }
        ]
    },
    'scroll-lesson': {
        id: 'scroll-lesson',
        title: 'Scroll Lesson: On Language',
        description: 'A philosophical exploration of the relationship between language, thought, and reality.',
        tag: 'Philosophy · Language',
        body: 'A philosophical exploration of the relationship between language, thought, and reality...',
        component: ScrollLessonNotebook,
        abilities: [ "Philosophical Language Analysis", "Meaning Formation", "Conceptual Boundaries", "AI Alignment Philosophy" ],
        aiActions: [
            { title: "Summarize the core lesson", prompt: "What is the core philosophical lesson of this notebook regarding the relationship between language and knowledge?" },
            { title: "Why is NotebookML necessary?", prompt: "According to this notebook, why is a language like NotebookML necessary for architecting intelligence?" }
        ],
        autothinkerActions: [
            { title: "Extract the Central Argument", prompt: "Distill the entire poem into a single, central argument about language and consciousness." },
            { title: "Connect to AI Alignment", prompt: "Explain how this notebook's philosophy is fundamentally a treatise on the AI alignment problem." }
        ]
    },
    omega: {
        id: 'omega',
        title: 'The Omega Law',
        description: 'A prototype for a physics-based intelligence model where all cognition is born from a "hit".',
        tag: 'Prototype · Physics',
        body: 'The Omega Law is a prototype for a physics-based intelligence model where all cognition is born from a "hit".',
        component: PlaceholderNotebook,
        abilities: ["Physics-Based Cognition", "Energy-Driven Thought", "Fundamental Intelligence Models"],
        aiActions: [ { title: "What is the core idea of this notebook?", prompt: "Summarize the core idea of The Omega Law notebook." } ],
        autothinkerActions: [ { title: "Propose an experiment", prompt: "Propose a thought experiment to test the principles of The Omega Law." } ]
    },
    stormstan: {
        id: 'stormstan',
        title: 'Stormstan',
        description: 'An "Ideas Recycling Hub" where IP is released to accelerate collaborative creation.',
        tag: 'Ideation Platform',
        body: 'Stormstan is an "Ideas Recycling Hub" where IP is released to accelerate collaborative creation.',
        component: PlaceholderNotebook,
        abilities: ["Open Collaboration", "IP Release Mechanisms", "Community-Driven Innovation"],
        aiActions: [ { title: "What is the purpose of Stormstan?", prompt: "Explain the purpose of the Stormstan 'Ideas Recycling Hub'." } ],
        autothinkerActions: [ { title: "Connect to the Imagination Lab", prompt: "Explain how the 'Recycled Idea Injection' in the Imagination Lab is a direct application of Stormstan's philosophy." } ]
    }
};
