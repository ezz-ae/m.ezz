
import type { Metadata } from 'next';
import { Section, ScrollHeading, ScrollParagraph } from '@/components/ScrollTypography';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowRight, Cpu, Layers, ShieldCheck, Database, BrainCircuit, Filter, GitBranch, Bot, BookOpen } from 'lucide-react';
import FooterMinimal from '@/components/FooterMinimal';

export const metadata: Metadata = {
    title: 'System Projection Dashboard',
    description: 'A visual map of the AIXSELF Cognitive Architecture, FCT, and the NotefullBook OS.',
};

const thesisData = {
    title: 'FCT: The Missing Cognitive Safety Layer in AI',
    problem: 'Current AI systems rely on perfect, archival memory, which is psychologically unsafe and leads to harmful over-recall.',
    solution: 'The solution is a design for Completing AI that stabilizes, supports, and amplifies human intelligence rather than competing with it.',
};

const architectureLayers = [
    { icon: Cpu, component: 'ADEPT', osEquivalent: 'Cognitive Kernel', fn: 'The root processor for the entire system. Orchestrates AI models, manages computational pipelines, and connects all other modules.' },
    { icon: Layers, component: 'AIXA', osEquivalent: 'Deployment Interface', fn: 'The user-facing layer for training, managing, and deploying personalized AI clones with verifiable credentials.' },
    { icon: Database, component: 'NotefullBook', osEquivalent: 'Memory Fabric', fn: 'The append-only, cryptographically signed knowledge store where all consented data and evolving thoughts are recorded.' },
    { icon: ShieldCheck, component: 'AIXIAM', osEquivalent: 'Identity Layer', fn: 'The sovereign identity system that issues a non-transferable passport (DID) to each human-AI pair, enforcing ownership.' },
    { icon: BrainCircuit, component: 'AIXEYE', osEquivalent: 'Governance Mesh', fn: 'The AI-driven financial and ethical auditor. It validates consent, scores merit, and ensures all actions align with protocol rules.' },
];

const cognitiveMechanisms = [
    { icon: GitBranch, module: 'Schema Intelligence Network (SINLM)', purpose: 'Learns what is important by tracking behavioral signals like frequency and return-rate, not by reading private content.', principle: 'Behavioral Truth' },
    { icon: Filter, module: 'Forgetting Artifact Module (FAM)', purpose: 'Performs intelligent forgetting by deleting raw, noisy data while preserving compressed patterns (artifacts) for future learning.', principle: 'Cognitive Waste Management' },
    { icon: BookOpen, module: 'Interpretive Recall Layer (IRL)', purpose: 'Ensures the AI retrieves the underlying meaning, pattern, or schema of a memory, not just the raw, literal event.', principle: 'Meaning-First Retrieval' },
    { icon: Bot, module: 'Emotional Softening Filter (ESF)', purpose: 'Applies temporal decay to the emotional intensity of memory tags, preventing the harmful revival of past trauma at full strength.', principle: 'Emotional Attenuation' },
];

const mindboardFeatures = [
    { feature: 'Notebook Cards', description: 'Represents individual intelligences as "living minds" that can be deployed, trained, or put to sleep.', link: 'Each card is a sovereign NotefullBook cell containing FCT logic.' },
    { feature: 'Reflection Meter', description: 'A subtle glowing pulse indicating that the notebook is actively learning and evolving its internal logic in the background.', link: 'Linked to the Meso (daily) and Macro (weekly) FCT reflection cycles.' },
    { feature: 'Master Skills', description: 'Defines the core cognitive personality of the notebook (e.g., Organizer, Analyzer, Writer, Teacher) from birth.', link: 'Configured via NotebookML language directives.' },
    { feature: 'Input Console (SenseHub)', description: 'The interface to connect the notebook to diverse data streams like voice, APIs, and document scans.', link: 'All inputs are normalized into structured NotebookML entries.' },
    { feature: 'Cognitive Ledger', description: 'An immutable, hash-chained timeline showing every decision and reflection event, making the AI\'s thought process fully auditable.', link: 'Verified and secured by the AIXEYE Governance Mesh.' },
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
