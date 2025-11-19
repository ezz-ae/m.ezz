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
    },
    notefullbook: {
        id: 'notefullbook',
        title: 'NotefullBook OS & NotebookML',
        description: 'An OS where notebooks are living minds, and a markup language that merges logic and memory.',
        tag: 'OS · Language',
        body: 'NotefullBook is an OS where notebooks are living minds. NotebookML is a format merging Markdown, logic, and memory. It treats AI as an OS layer.',
        component: NotefullBookNotebook,
    },
    aixself: {
        id: 'aixself',
        title: 'AIXSELF Universe',
        description: 'The protocol for a decentralized, sovereign, and fair intelligence civilization.',
        tag: 'Identity · AI Clones',
        body: 'The AIXAIM protocol is a comprehensive blueprint designed to establish a decentralized civilization of human-AI entities. It is not an application, but a complete socio-technical framework where intelligence is a fundamental human right, learning is consensual, and economic value is a direct, machine-verifiable function of merit.',
        component: AIXSELFNotebook,
    },
     omega: {
        id: 'omega',
        title: 'The Omega Law',
        description: 'A prototype for a physics-based intelligence model where all cognition is born from a "hit".',
        tag: 'Prototype · Physics',
        body: 'The Omega Law is a prototype for a physics-based intelligence model. It posits that intelligence is born from a physical "hit" that forces energy to move, creating oscillations that cohere into patterns.',
        component: OmegaNotebook,
    },
    stormstan: {
        id: 'stormstan',
        title: 'Stormstan',
        description: 'An "Ideas Recycling Hub" where IP is released to accelerate collaborative creation.',
        tag: 'Ideation Platform',
        body: 'Stormstan is a non-AI platform, an "Ideas Recycling Hub" or "GitHub for human thinking." It is built on the philosophy of the "Ideas Giveup Event," where intellectual property is released upon submission to foster open collaboration and development.',
        component: StormstanNotebook,
    },
    dldchain: {
        id: 'dldchain',
        title: 'DLDCHAIN',
        description: 'A sovereign blockchain architecture for a national-scale real estate intelligence OS.',
        tag: 'Blockchain · Real Estate',
        body: 'DLDCHAIN is the architectural blueprint for a national-scale, sovereign blockchain designed exclusively for the real estate sector. It is not a speculative cryptocurrency platform; it is a foundational infrastructure layer for a city or country, built to bring computational trust, transparency, and liquidity to the world\'s largest asset class.',
        component: DLDChainNotebook,
    },
    security: {
        id: 'security',
        title: 'Security & Traps',
        description: 'Designing phishing traps and scam simulators as a cognitive design problem.',
        tag: 'Luredoor · KAP',
        body: 'Designing phishing traps, scam simulators, and other security measures like Luredoor and KAP Traps. Security as a cognitive design problem.',
        component: SecurityNotebook,
    },
    puzzles: {
        id: 'puzzles',
        title: 'Puzzles & Crypto Systems',
        description: 'Using puzzles as a lab for studying pattern, bias, and complex systems.',
        tag: 'BruteBrains · ChainCrack',
        body: 'Using puzzles like Bitcoin addresses and chain analysis as a lab for studying pattern, bias, and failure. Includes projects like BruteBrains and ChainCrack.',
        component: PuzzlesNotebook,
    },
    marketing: {
        id: 'marketing',
        title: 'Marketing Ecosystems',
        description: 'Architecting self-sustaining market systems instead of single campaigns.',
        tag: 'MTC · Marketinum',
        body: 'Building marketing systems and ecosystems, not just campaigns. Includes MTC, Marketinum, and Willionnaire.',
        component: MarketingNotebook,
    },
    'scroll-lesson': {
        id: 'scroll-lesson',
        title: 'Scroll Lesson: On Language',
        description: 'A philosophical exploration of the relationship between language, thought, and reality.',
        tag: 'Philosophy · Language',
        body: 'A philosophical exploration of the relationship between language, thought, and reality. Language is not knowledge, but a vehicle. Meaning is born raw, and language is a tool to sculpt it. Understanding the limits of language is understanding the limits of self.',
        component: ScrollLessonNotebook,
    }
};
