// src/app/projection/page.tsx
'use client';

import React from 'react';
import { Section } from '@/components/ScrollTypography';
import { Cpu, Scale } from 'lucide-react';
import { Table, TableBody, TableCell, TableHeader, TableRow, TableHead } from '@/components/ui/table';
import NotefullDemo from '@/components/demos/NotefullDemo';
import AimasDemo from '@/components/demos/AimasDemo';

const fivePillars = [
    { name: 'ADEPT', role: 'Cognitive Kernel', description: 'The root processor for the entire system.' },
    { name: 'AIXA', role: 'Deployment Interface', description: 'The user-facing layer for training and managing AI clones.' },
    { name: 'NotefullBook', role: 'Memory Fabric', description: 'The append-only, cryptographically signed knowledge store.' },
    { name: 'AIXIAM', role: 'Identity Layer', description: 'The sovereign identity system that issues a non-transferable AI passport.' },
    { name: 'AIXEYE', role: 'Governance Mesh', description: 'The AI-driven financial and ethical auditor.' }
];

const nativeOrgans = [
    { name: 'NYK (Identity Organ)', description: 'Top-level anchor filtering every intent.' },
    { name: 'Force Notes (Nervous Organ)', description: 'The immutable ledger of wants and cycles.' },
    { name: 'Was (Reflex Layer)', description: 'Provides reflexive behavioral feedback, not ratings.' },
    { name: 'Triggers (Pulse Organ)', description: 'Shifts latent wants to urgent states.' }
];

export default function ProjectionPage() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden pt-24 font-pt-sans">
            <div className="container mx-auto px-4 py-16">

                <Section className="text-center max-w-3xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-light text-foreground font-playfair">The Unified Projection of the AIXSELF Intelligence Universe</h1>
                    <p className="text-base md:text-lg text-muted-foreground mt-4">
                        A real-time, AI-aware projection of the entire work. This is a total awareness system that thinks with you.
                    </p>
                </Section>
                
                <Section className="mt-16 max-w-4xl mx-auto">
                    <NotefullDemo />
                </Section>
                
                <Section className="mt-16 max-w-4xl mx-auto">
                    <AimasDemo />
                </Section>
                
                <Section className="mt-20 max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-light text-primary font-playfair">Architectural Schematics</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-card border-border p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-card-foreground flex items-center gap-2 mb-4"><Cpu size={20}/> AIXSELF Universe</h3>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Component</TableHead>
                                        <TableHead>Role</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {fivePillars.map(p => (
                                        <TableRow key={p.name}>
                                            <TableCell className="font-medium text-foreground">{p.name}</TableCell>
                                            <TableCell className="text-muted-foreground">{p.role}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                        <div className="bg-card border-border p-6 rounded-lg">
                             <h3 className="text-lg font-semibold text-card-foreground flex items-center gap-2 mb-4"><Scale size={20}/> AIMAS Economic System</h3>
                             <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Native Organ</TableHead>
                                        <TableHead>Function</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {nativeOrgans.map(o => (
                                        <TableRow key={o.name}>
                                            <TableCell className="font-medium text-foreground">{o.name}</TableCell>
                                            <TableCell className="text-muted-foreground">{o.description}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </Section>

            </div>
        </div>
    );
}
