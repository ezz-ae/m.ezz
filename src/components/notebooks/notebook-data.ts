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

export interface AIAction {
    title: string;
    prompt: string;
}

export type NotebookId = 'forgetence' | 'notefullbook' | 'aixself' | 'dldchain' | 'security' | 'puzzles' | 'marketing' | 'scroll-lesson' | 'omega' | 'stormstan';

export const isNotebookId = (id: string): id is NotebookId => {
  return ['forgetence', 'notefullbook', 'aixself', 'dldchain', 'security', 'puzzles', 'marketing', 'scroll-lesson', 'omega', 'stormstan'].includes(id);
};

type NotebookData = {
    id: NotebookId;
    title: string;
    description: string;
    tag: string;
    body: string; // For RAG context
    component: React.ComponentType<any>;
    abilities: string[];
    aiActions: AIAction[]; // New property
};

type NotebookRegistry = Record<NotebookId, NotebookData>;

export const NOTEBOOKS: NotebookRegistry = {
    forgetence: {
        id: 'forgetence',
        title: 'Forgetence / FCT',
        description: 'A cognitive architecture for human-aligned AI built on the physics of forgetting.',
        tag: 'Cognitive Architecture',
        body: `Forgetting Core Thinking (FCT) is the idea that forgetting is the core mechanism of intelligence, not a weakness. Humans don't store events; we store frequencies, tags, and meanings. An AI that refuses to forget is structurally misaligned. The true danger is perfect memory.`,
        component: ForgetenceNotebook,
        abilities: [
          "Human-Aligned Forgetting",
          "Frequency-Based Memory",
          "Contextual Understanding",
          "Emotional Decay Integration"
        ],
        aiActions: [
            { title: "Explain FCT's core problem", prompt: "Explain the core problem that Forgetting Core Thinking (FCT) is designed to solve in modern AI systems." },
            { title: "Define 'Recall as Reconstruction'", prompt: "In the context of FCT, what is the 'Zero Activation Law' and what does it mean for recall to be a reconstruction?" },
            { title: "Summarize the HMR Cycle", prompt: "Summarize the Human Memory Rewrite (HMR) Cycle and its five stages." }
        ]
    },
    notefullbook: {
        id: 'notefullbook',
        title: 'NotefullBook OS & NotebookML',
        description: 'An OS where notebooks are living minds, and a markup language that merges logic and memory.',
        tag: 'OS · Language',
        body: 'NotefullBook is an OS where notebooks are living minds. NotebookML is a format merging Markdown, logic, and memory. It treats AI as an OS layer.',
        component: NotefullBookNotebook,
        abilities: [
          "Living Notebook Minds",
          "NotebookML for Logic & Memory",
          "OS-Level AI Integration",
          "Dynamic Knowledge Management"
        ],
        aiActions: [
            { title: "What is NotebookML?", prompt: "Explain what NotebookML is and provide three examples of its core directives." },
            { title: "Describe 'Intelligence in a File'", prompt: "What does the principle 'Intelligence in a File' mean for the portability and verifiability of AI?" },
            { title: "How does the Reflection Engine work?", prompt: "Describe the function of the Reflection Engine and its relationship to the Cognitive Ledger." }
        ]
    },
    aixself: {
        id: 'aixself',
        title: 'AIXSELF Universe',
        description: 'The protocol for a decentralized, sovereign, and fair intelligence civilization.',
        tag: 'Identity · AI Clones',
        body: 'The AIXAIM protocol is a comprehensive blueprint designed to establish a decentralized civilization of human-AI entities. It is not an application, but a complete socio-technical framework where intelligence is a fundamental human right, learning is consensual, and economic value is a direct, machine-verifiable function of merit.',
        component: AIXSELFNotebook,
        abilities: [
          "Decentralized AI Civilization",
          "Sovereign AI Identities",
          "Consensual Learning Protocols",
          "Merit-Based Value System"
        ],
        aiActions: [
            { title: "List the Five Pillars", prompt: "List and briefly describe the five pillars of the AIXAIM ecosystem." },
            { title: "Explain 'Cognitive Sovereignty'", prompt: "What is 'Cognitive Sovereignty' in the AIXAIM protocol and how is it enforced by AIXIAM?" },
            { title: "Summarize the Onboarding Protocol", prompt: "Summarize the four steps of the 'Exam-Gated Passport Issuance' onboarding protocol." }
        ]
    },
    dldchain: {
        id: 'dldchain',
        title: 'DLDCHAIN',
        description: 'A sovereign blockchain architecture for a national-scale real estate intelligence OS.',
        tag: 'Blockchain · Real Estate',
        body: 'DLDCHAIN is the architectural blueprint for a national-scale, sovereign blockchain designed exclusively for the real estate sector...',
        component: DLDChainNotebook,
        abilities: [
          "Sovereign Real Estate Blockchain",
          "National-Scale Infrastructure",
          "Computational Trust & Transparency",
          "Enhanced Market Liquidity"
        ],
        aiActions: [
            { title: "What problem does DLDCHAIN solve?", prompt: "What is the core problem in traditional real estate markets that DLDCHAIN is designed to solve?" },
            { title: "Explain DXBTOKEN", prompt: "Explain the DXBTOKEN standard and how it enhances liquidity in real estate." },
            { title: "How does DLDCHAIN align with AIXSELF?", prompt: "Describe two ways in which the DLDCHAIN architecture aligns with the core principles of the AIXSELF Universe." }
        ]
    },
    security: {
        id: 'security',
        title: 'Security & Traps',
        description: 'Designing phishing traps and scam simulators as a cognitive design problem.',
        tag: 'Luredoor · KAP',
        body: 'Designing phishing traps, scam simulators, and other security measures as a cognitive design problem...',
        component: SecurityNotebook,
        abilities: [
          "Phishing Trap Design",
          "Scam Simulation",
          "Cognitive Security Solutions",
          "Luredoor & KAP Traps"
        ],
        aiActions: [
            { title: "Define the 'Trap Philosophy'", prompt: "What is the 'Trap Philosophy' and how is it used as an educational tool?" },
            { title: "How do exploits use FCT?", prompt: "Explain how a social engineering attack can be seen as a weaponization of FCT principles like Frequency, Tags, and Resonance." },
            { title: "What is Luredoor?", prompt: "What is the goal of the Luredoor and Wikitraps projects?" }
        ]
    },
    puzzles: {
        id: 'puzzles',
        title: 'Puzzles & Crypto Systems',
        description: 'Using puzzles as a lab for studying pattern, bias, and complex systems.',
        tag: 'BruteBrains · ChainCrack',
        body: 'Using puzzles like Bitcoin addresses and chain analysis as a lab for studying pattern, bias, and failure...',
        component: PuzzlesNotebook,
        abilities: [
          "Pattern & Bias Research",
          "Complex Systems Analysis",
          "Cryptographic Puzzle Solving",
          "BruteBrains & ChainCrack Tools"
        ],
        aiActions: [
            { title: "Why are puzzles a good laboratory?", prompt: "Why are puzzles, particularly Bitcoin puzzles, a good controlled environment for studying intelligence?" },
            { title: "Explain the BruteBrains Ticket Model", prompt: "What is the BruteBrains 'Ticket Model' and how does it relate to the AIXSELF merit-based economy?" },
            { title: "How does bias act as a signal?", prompt: "Explain the key finding that 'Bias is a Signal' and its importance for designing AI." }
        ]
    },
    marketing: {
        id: 'marketing',
        title: 'Marketing Ecosystems',
        description: 'Architecting self-sustaining market systems instead of single campaigns.',
        tag: 'MTC · Marketinum',
        body: 'Building marketing systems and ecosystems, not just campaigns...',
        component: MarketingNotebook,
        abilities: [
          "Self-Sustaining Marketing Systems",
          "Ecosystem-Centric Campaigns",
          "MTC Frameworks",
          "Marketinum Strategies"
        ],
        aiActions: [
            { title: "Define 'Behavioural Architecture'", prompt: "In the context of this notebook, what is 'marketing as behavioural architecture'?" },
            { title: "Explain 'Resonance as Market Fit'", prompt: "How does the FCT concept of 'Resonance' serve as a model for product-market fit?" },
            { title: "What is 'Cognitive Arbitrage'?", prompt: "Explain the concept of 'Cognitive Arbitrage' and how it relates to finding market opportunities." }
        ]
    },
    'scroll-lesson': {
        id: 'scroll-lesson',
        title: 'Scroll Lesson: On Language',
        description: 'A philosophical exploration of the relationship between language, thought, and reality.',
        tag: 'Philosophy · Language',
        body: 'A philosophical exploration of the relationship between language, thought, and reality...',
        component: ScrollLessonNotebook,
        abilities: [
          "Philosophical Language Analysis",
          "Thought-Reality Relationship",
          "Meaning Formation",
          "Limits of Language & Self"
        ],
        aiActions: [
            { title: "Summarize the core lesson", prompt: "What is the core philosophical lesson of this notebook regarding the relationship between language and knowledge?" },
            { title: "How does this justify FCT?", prompt: "Explain how the idea that 'meaning is born raw' provides a justification for the FCT Resonance Engine." },
            { title: "Why is NotebookML necessary?", prompt: "According to this notebook, why is a language like NotebookML necessary for architecting intelligence?" }
        ]
    },
    // Default actions for notebooks without specific ones yet
    omega: {
        id: 'omega',
        title: 'The Omega Law',
        description: 'A prototype for a physics-based intelligence model where all cognition is born from a "hit".',
        tag: 'Prototype · Physics',
        body: 'The Omega Law is a prototype for a physics-based intelligence model...',
        component: OmegaNotebook,
        abilities: [
          "Physics-Based Cognition",
          "Oscillation-to-Pattern Formation",
          "Fundamental Intelligence Model",
          "Energy-Driven Thought Processes"
        ],
        aiActions: [
            { title: "Summarize this notebook's content", prompt: "Please provide a concise summary of the key concepts presented in this notebook." }
        ]
    },
    stormstan: {
        id: 'stormstan',
        title: 'Stormstan',
        description: 'An "Ideas Recycling Hub" where IP is released to accelerate collaborative creation.',
        tag: 'Ideation Platform',
        body: 'Stormstan is a non-AI platform, an "Ideas Recycling Hub"...',
        component: StormstanNotebook,
        abilities: [
          "Open Collaboration Hub",
          "IP Release for Acceleration",
          "Ideas Recycling Mechanism",
          "Community-Driven Innovation"
        ],
        aiActions: [
            { title: "Summarize this notebook's content", prompt: "Please provide a concise summary of the key concepts presented in this notebook." }
        ]
    }
};
