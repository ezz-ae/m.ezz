
import type { Metadata } from 'next';
import { Section, ScrollHeading, ScrollParagraph } from '@/components/ScrollTypography';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowRight, Cpu, Layers, ShieldCheck, Database, BrainCircuit, Filter, GitBranch, History, Bot, BookOpen } from 'lucide-react';
import FooterMinimal from '@/components/FooterMinimal';

export const metadata: Metadata = {
    title: 'System Projection Dashboard',
    description: 'A visual map of the AIXSELF Cognitive Architecture, FCT, and the NotefullBook OS.',
};

const thesisData = {
    title: 'FCT: The Missing Cognitive Safety Layer in AI',
    problem: 'Current AI systems rely on perfect, archival memory, which is psychologically unsafe and leads to harmful over-recall.',
    solution: 'We designed Completing AI that stabilizes, supports, and amplifies human intelligence rather than competing with it.',
};

const architectureLayers = [
    { icon: Cpu, component: 'ADEPT', osEquivalent: 'Kernel', fn: 'Root processor; orchestration and structure for thought.' },
    { icon: Layers, component: 'AIXA', osEquivalent: 'Frontend / Drivers', fn: 'Deployment Interface; creates and trains human-AI clones.' },
    { icon: Database, component: 'NotefullBook', osEquivalent: 'File System', fn: 'The Memory Fabric; append-only, signed knowledge store, where thoughts evolve continuously.' },
    { icon: ShieldCheck, component: 'AIXIAM', osEquivalent: 'User Account System', fn: 'The verified bridge between biological and artificial self (DID-style passport).' },
    { icon: BrainCircuit, component: 'AIXEYE', osEquivalent: 'System Security / Auditor', fn: 'The Governance Mesh; tracks transparency, resolves disputes, and validates learning (merit scoring).' },
];

const cognitiveMechanisms = [
    { icon: GitBranch, module: 'Schema Intelligence Network (SINLM)', purpose: 'Learns what matters by tracking frequency, return-rate, drift, and persistence, not content or emotion.', principle: 'Behavioral Truth' },
    { icon: Filter, module: 'Forgetting Artifact Module (AFA)', purpose: 'Implements human-like memory decay: deletes noise and raw details, keeps only minimal pattern artifacts needed for intelligence.', principle: 'Cognitive Waste Management' },
    { icon: BookOpen, module: 'Interpretive Recall Layer (IRL)', purpose: 'Filters recall, ensuring AI retrieves the underlying meaning, schema, or principle over raw event details.', principle: 'Meaning-First Retrieval (MFR)' },
    { icon: Bot, module: 'Emotional Softening Filter (ESF)', purpose: 'Decays the emotional weight of old tags to prevent the AI from reviving past trauma at full intensity.', principle: 'Emotional Attenuation' },
];

const mindboardFeatures = [
    { feature: 'Notebook Cards', description: 'Living objects that represent individual intelligences (e.g., “English Flow,” “Content Creator”).', link: 'Each card is a NotefullBook Cell containing FCT logic.' },
    { feature: 'Reflection Meter', description: 'A visual indicator (subtle glowing pulse) that shows the notebook is actively learning, synchronizing, and evolving its long-term logic in the background.', link: 'Linked to the Meso Cycle (daily) and Macro Cycle (weekly/monthly) reflection tasks.' },
    { feature: 'Master Skills', description: 'The sealed functional personality of the notebook (e.g., Organizer, Analyzer, Writer, Teacher).', link: 'Defined by the NotebookML language.' },
    { feature: 'Input Console', description: 'UI to connect the notebook to various data streams (voice, chat, paper scans, big data) through the SenseHub.', link: 'Inputs are converted into raw noise and then reduced by the Cognitive Simplification Engine.' },
    { feature: 'Ledger Timeline', description: 'An auditable vertical timeline showing every decision and reflection event, signed cryptographically.', link: 'Verified by the AIXEYE Governance Mesh.' },
];

export default function ProjectionPage() {
    return (
        <div className="bg-black min-h-screen text-neutral-200 pt-16 md:pt-24">
            <main className="px-4 md:px-8 pb-16">
                <div className="max-w-7xl mx-auto space-y-16">
                    {/* I. Central Thesis */}
                    <Section>
                        <div className="text-center max-w-4xl mx-auto">
                            <ScrollHeading as="h1" className="!text-3xl md:!text-4xl !font-light tracking-tight">{thesisData.title}</ScrollHeading>
                            <ScrollParagraph className="text-lg md:text-xl text-neutral-400 mt-4">{thesisData.problem}</ScrollParagraph>
                            <ScrollParagraph emphasisLevel="resonance" className="!text-lg md:!text-xl !text-green-300 mt-2">{thesisData.solution}</ScrollParagraph>
                        </div>
                    </Section>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-8">
                            {/* II. System Architecture */}
                            <Section>
                                <Card className="bg-neutral-900/50 border-neutral-800">
                                    <CardHeader>
                                        <CardTitle className="font-light text-xl text-neutral-100 flex items-center gap-2"><Layers size={20} /> System Architecture (The OS View)</CardTitle>
                                        <CardDescription>The five cognitive layers that form the AIXSELF Universe.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow className="border-neutral-700">
                                                    <TableHead className="w-1/3">Component</TableHead>
                                                    <TableHead>Function</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {architectureLayers.map(layer => (
                                                    <TableRow key={layer.component} className="border-neutral-800">
                                                        <TableCell className="font-medium text-neutral-100">
                                                            <div className="flex items-center gap-2">
                                                                <layer.icon size={16} className="text-neutral-400" />
                                                                <div>
                                                                    {layer.component}
                                                                    <p className="text-xs text-neutral-500 font-mono">{layer.osEquivalent}</p>
                                                                </div>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell className="text-neutral-400 text-sm">{layer.fn}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                </Card>
                            </Section>

                            {/* III. Cognitive Mechanism */}
                            <Section>
                                <Card className="bg-neutral-900/50 border-neutral-800">
                                    <CardHeader>
                                        <CardTitle className="font-light text-xl text-neutral-100 flex items-center gap-2"><BrainCircuit size={20} /> Cognitive Mechanism (FCT Enforcement)</CardTitle>
                                        <CardDescription>How the system achieves safety and learning through purposeful forgetting.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                 <TableRow className="border-neutral-700">
                                                    <TableHead className="w-1/3">Module</TableHead>
                                                    <TableHead>Purpose (Safety Mechanism)</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {cognitiveMechanisms.map(mech => (
                                                    <TableRow key={mech.module} className="border-neutral-800">
                                                        <TableCell className="font-medium text-neutral-100">
                                                             <div className="flex items-center gap-2">
                                                                <mech.icon size={16} className="text-neutral-400"/>
                                                                <div>
                                                                    {mech.module}
                                                                    <p className="text-xs text-green-400/70 font-mono">{mech.principle}</p>
                                                                </div>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell className="text-neutral-400 text-sm">{mech.purpose}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                </Card>
                            </Section>
                        </div>
                        
                        {/* IV. Entry Product View */}
                        <Section>
                            <Card className="bg-neutral-900/50 border-neutral-800 lg:sticky lg:top-24">
                                <CardHeader>
                                    <CardTitle className="font-light text-xl text-neutral-100 flex items-center gap-2"><BookOpen size={20} /> Entry Product: The NotefullBook OS</CardTitle>
                                    <CardDescription>The tangible result of the architecture: a personal AI notebook OS.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                         <TableHeader>
                                             <TableRow className="border-neutral-700">
                                                <TableHead>Feature</TableHead>
                                                <TableHead>Description</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {mindboardFeatures.map(feat => (
                                                <TableRow key={feat.feature} className="border-neutral-800">
                                                    <TableCell className="font-medium text-neutral-100">{feat.feature}</TableCell>
                                                    <TableCell className="text-neutral-400 text-sm">
                                                        {feat.description}
                                                        <p className="text-xs text-neutral-500 mt-1 flex items-center gap-1"><ArrowRight size={12}/> {feat.link}</p>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </Section>
                    </div>
                </div>
            </main>
            <FooterMinimal />
        </div>
    );
}

    