// src/components/notebooks/DLDChainNotebook.tsx
'use client';

import React from 'react';
import { Section, ScrollHeading, ScrollParagraph, ScrollCallout } from '../ScrollTypography';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const systemComponents = [
    { name: 'DLDCHAIN', role: 'Foundational Ledger', description: 'The sovereign, immutable blockchain that serves as the single source of truth for all real estate data and transactions.' },
    { name: 'EBRAM', role: 'Judicial Programming Language', description: 'A formal language for encoding property laws and contracts, ensuring they are transparent, immutable, and machine-executable.' },
    { name: 'DXBTOKEN', role: 'Sovereign Tokenization Standard', description: 'A national standard where 1 token equals 1 sq. ft. of property, unlocking fractional ownership and enhancing liquidity.' },
    { name: 'MAKE', role: 'Decentralized Market Maker', description: 'A liquidity engine for the automated, trustless trading of tokenized real estate assets without centralized intermediaries.' },
    { name: 'One Wallet', role: 'Unified Operating Wallet', description: 'The secure, unified interface for managing all digital real estate assets and contract interactions within the ecosystem.' }
];

export function DLDChainNotebook() {
  return (
    <div className="max-w-4xl mx-auto py-16">
        <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 md:p-8 space-y-8">
            <div className="text-center border-b border-neutral-800 pb-6">
                <h1 className="text-2xl font-light text-neutral-100">Real Estate Intelligence OS</h1>
                <p className="text-sm text-neutral-500 max-w-xl mx-auto mt-2">
                    An architectural blueprint for a national-scale, sovereign blockchain for the real estate sector, designed to transform an illiquid, opaque market into a transparent, fluid, and programmable ecosystem.
                </p>
            </div>

            <article className="prose prose-invert max-w-none prose-p:text-neutral-400 prose-headings:text-neutral-200">
              <Section>
                <ScrollHeading as="h2">System Components</ScrollHeading>
                <ScrollParagraph>
                  The OS is composed of five core components working in unison to create a trustless environment for real estate transactions.
                </ScrollParagraph>
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Component</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Description</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {systemComponents.map((component) => (
                            <TableRow key={component.name}>
                                <TableCell className="font-medium text-neutral-100">{component.name}</TableCell>
                                <TableCell className="text-neutral-300">{component.role}</TableCell>
                                <TableCell className="text-neutral-400">{component.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
              </Section>
              <Section>
                <ScrollCallout label="Protocol Readout: AIXSELF Alignment">
                    DLDCHAIN is a domain-specific implementation of the AIXSELF Universe. It establishes <strong className="text-white">Computational Trust</strong> by replacing human intermediaries with verifiable code (EBRAM), ensures <strong className="text-white">Transparency & Auditability</strong> via the immutable ledger, enhances <strong className="text-white">Liquidity</strong> through tokenization (DXBTOKEN), and secures <strong className="text-white">Sovereign Asset Ownership</strong>.
                </ScrollCallout>
              </Section>
            </article>
        </div>
    </div>
  );
}
