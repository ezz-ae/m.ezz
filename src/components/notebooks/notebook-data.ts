
// src/components/notebooks/notebook-data.ts
import React from 'react';
import { ForgetenceNotebook } from './ForgetenceNotebook';
import { NotefullBookNotebook } from './NotefullBookNotebook';
import { AIXSELFNotebook } from './AIXSELFNotebook';
import { RealEstateNotebook } from './RealEstateNotebook';
import { SecurityNotebook } from './SecurityNotebook';
import { PuzzlesNotebook } from './PuzzlesNotebook';
import { MarketingNotebook } from './MarketingNotebook';
import { SoundNotebook } from './SoundNotebook';
import { PlaceholderNotebook } from './PlaceholderNotebook';


export type NotebookId = 'forgetence' | 'notefullbook' | 'aixself' | 'realestate' | 'security' | 'puzzles' | 'marketing' | 'sound';

export const isNotebookId = (id: string): id is NotebookId => {
  return ['forgetence', 'notefullbook', 'aixself', 'realestate', 'security', 'puzzles', 'marketing', 'sound'].includes(id);
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
        title: 'Forgetence / FCT / MIFP',
        description: 'Exploring forgetting as the core mechanism of intelligence, not a weakness.',
        tag: 'AI · Cognition',
        body: `Forgetence is the idea that forgetting is the core mechanism of intelligence, not a weakness. Humans don't store events; we store frequencies, tags, and meanings. An AI that refuses to forget is structurally misaligned. The true danger is perfect memory.`,
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
        description: 'Modeling AI identity through digital clones like AIXA, AIXIAM, and AIXEYE.',
        tag: 'Identity · AI Clones',
        body: 'The AIXSELF Universe explores AI identity through clones like AIXA, AIXIAM, and AIXEYE. It models how digital identities can form and evolve.',
        component: AIXSELFNotebook,
    },
    realestate: {
        id: 'realestate',
        title: 'Real Estate Intelligence',
        description: 'Using AI for tokenization and building sovereign real estate infrastructure.',
        tag: 'DLDCHAIN · Mashroi',
        body: 'Using AI for real estate intelligence with systems like DLDCHAIN, Mashroi, and EBRAM. Focuses on tokenization and sovereign real estate infrastructure.',
        component: RealEstateNotebook,
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
        description: 'Building market systems and ecosystems, not just single campaigns.',
        tag: 'MTC · Marketinum',
        body: 'Building marketing systems and ecosystems, not just campaigns. Includes MTC, Marketinum, and Willionnaire.',
        component: MarketingNotebook,
    },
    sound: {
        id: 'sound',
        title: 'Sound & Identity',
        description: 'Exploring the connection between sound, identity, and environment.',
        tag: 'Ezzton · Setup',
        body: 'Exploring the connection between sound, identity, and environment through projects like Ezzton and personal setup design.',
        component: SoundNotebook,
    }
};
