
// src/components/notebooks/notebook-data.ts
import { ForgetenceNotebook } from './ForgetenceNotebook';

type NotebookData = {
    title: string;
    body: string; // For RAG context
    component: React.ComponentType;
};

export const NOTEBOOKS: Record<string, NotebookData> = {
    forgetence: {
        title: 'Forgetence / FCT',
        body: `Forgetence is the idea that forgetting is the core mechanism of intelligence, not a weakness. Humans don't store events; we store frequencies, tags, and meanings. An AI that refuses to forget is structurally misaligned. The true danger is perfect memory.`,
        component: ForgetenceNotebook,
    },
    notefullbook: {
        title: 'NotefullBook & NotebookML',
        body: 'NotefullBook is an OS where notebooks are living minds. NotebookML is a format merging Markdown, logic, and memory. It treats AI as an OS layer.',
        component: () => <div className="text-center text-neutral-400 py-20">Content for NotefullBook coming soon.</div>,
    },
    aixself: {
        title: 'AIXSELF Universe',
        body: 'The AIXSELF Universe explores AI identity through clones like AIXA, AIXIAM, and AIXEYE. It models how digital identities can form and evolve.',
        component: () => <div className="text-center text-neutral-400 py-20">Content for AIXSELF coming soon.</div>,
    },
    realestate: {
        title: 'Real Estate Intelligence',
        body: 'Using AI for real estate intelligence with systems like DLDCHAIN, Mashroi, and EBRAM. Focuses on tokenization and sovereign real estate infrastructure.',
        component: () => <div className="text-center text-neutral-400 py-20">Content for Real Estate Intelligence coming soon.</div>,
    },
    security: {
        title: 'Security & Traps',
        body: 'Designing phishing traps, scam simulators, and other security measures like Luredoor and KAP Traps. Security as a cognitive design problem.',
        component: () => <div className="text-center text-neutral-400 py-20">Content for Security & Traps coming soon.</div>,
    },
    puzzles: {
        title: 'Puzzles & Crypto',
        body: 'Using puzzles like Bitcoin addresses and chain analysis as a lab for studying pattern, bias, and failure. Includes projects like BruteBrains and ChainCrack.',
        component: () => <div className="text-center text-neutral-400 py-20">Content for Puzzles & Crypto coming soon.</div>,
    },
    marketing: {
        title: 'Marketing & Ecosystems',
        body: 'Building marketing systems and ecosystems, not just campaigns. Includes MTC, Marketinum, and Willionnaire.',
        component: () => <div className="text-center text-neutral-400 py-20">Content for Marketing & Ecosystems coming soon.</div>,
    },
    sound: {
        title: 'Sound & Identity',
        body: 'Exploring the connection between sound, identity, and environment through projects like Ezzton and personal setup design.',
        component: () => <div className="text-center text-neutral-400 py-20">Content for Sound & Identity coming soon.</div>,
    }
};
