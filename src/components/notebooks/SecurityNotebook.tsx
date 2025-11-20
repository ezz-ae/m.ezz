// src/components/notebooks/SecurityNotebook.tsx
'use client';

import React from 'react';
import { Section, ScrollHeading, ScrollParagraph, ScrollCallout } from '../ScrollTypography';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const trapData = [
    {
        name: 'Fake Airdrop Simulation',
        triggers: 'Greed, Urgency (FOMO), Social Proof',
        description: 'Simulates an exclusive airdrop, prompting users to sign a malicious transaction to claim non-existent assets.'
    },
    {
        name: 'Malicious Token Approval',
        triggers: 'Trust Violation, Technical Obfuscation',
        description: 'Mimics a legitimate DeFi action, requesting a broad token approval that would grant a malicious contract control over user funds.'
    },
    {
        name: 'Impersonation Wallet Interface',
        triggers: 'Authority Bias, Pattern Interruption',
        description: 'Presents a UI nearly identical to a trusted wallet provider, designed to capture a seed phrase or password through a fake login prompt.'
    },
];

export function SecurityNotebook() {
  return (
    <div className="max-w-4xl mx-auto py-16">
        <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 md:p-8 space-y-8">
            <div className="text-center border-b border-neutral-800 pb-6">
                <h1 className="text-2xl font-light text-neutral-100">Cognitive Threat Analysis Lab</h1>
                <p className="text-sm text-neutral-500 max-w-xl mx-auto mt-2">
                    A research environment for studying security as a cognitive design problem by simulating and deconstructing attack vectors.
                </p>
            </div>

            <article className="prose prose-invert max-w-none prose-p:text-neutral-400 prose-headings:text-neutral-200">
                <Section>
                    <ScrollHeading as="h2">The KAP Trap Simulator</ScrollHeading>
                    <ScrollParagraph>
                        The lab's primary instrument is the KAP (Knowledge, Action, Prevention) Trap Simulator. It models common social engineering and crypto attacks to analyze the cognitive biases they exploit.
                    </ScrollParagraph>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Trap Simulation</TableHead>
                                <TableHead>Cognitive Triggers</TableHead>
                                <TableHead>Description</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {trapData.map((trap) => (
                                <TableRow key={trap.name}>
                                    <TableCell className="font-medium text-neutral-100">{trap.name}</TableCell>
                                    <TableCell className="text-orange-400">{trap.triggers}</TableCell>
                                    <TableCell className="text-neutral-400">{trap.description}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Section>
                <Section>
                    <ScrollHeading as="h2">Luredoor Case Files</ScrollHeading>
                    <ScrollParagraph>
                        The "Luredoor" project documents findings from these simulations:
                    </ScrollParagraph>
                     <ul className="list-disc pl-5 space-y-2">
                        <li><strong className="text-neutral-200">Case #001: Cracked Software:</strong> Demonstrated a user's willingness to bypass security for perceived value, quantifying the cognitive override of the "free" tag.</li>
                        <li><strong className="text-neutral-200">Case #002: Jupiter NFT:</strong> Showed that urgency (FOMO) and social proof can systematically disrupt rational due diligence.</li>
                    </ul>
                </Section>
                <Section>
                    <ScrollCallout label="System Readout: AIXSELF Alignment">
                        This adversarial research directly informs the AIXSELF safety architecture. By studying cognitive <strong className="text-white">misalignment</strong>, we gather ground-truth data to build systems that are architecturally <strong className="text-white">aligned</strong>. The goal is to design AI that is not just secure, but immune to the cognitive exploits that plague human systems.
                    </ScrollCallout>
                </Section>
            </article>
        </div>
    </div>
  );
}
