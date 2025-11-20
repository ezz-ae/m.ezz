// src/components/notebooks/DLDChainNotebook.tsx
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const systemComponents = {
    'dldchain': { name: 'DLDCHAIN', role: 'Foundational Ledger', description: 'The sovereign, immutable blockchain that serves as the single source of truth for all real estate data and transactions.' },
    'ebram': { name: 'EBRAM', role: 'Judicial Programming Language', description: 'A formal language for encoding property laws and contracts, ensuring they are transparent, immutable, and machine-executable.' },
    'dxbtoken': { name: 'DXBTOKEN', role: 'Sovereign Tokenization Standard', description: 'A national standard where 1 token equals 1 sq. ft. of property, unlocking fractional ownership and enhancing liquidity.' },
    'make': { name: 'MAKE', role: 'Decentralized Market Maker', description: 'A liquidity engine for the automated, trustless trading of tokenized real estate assets without centralized intermediaries.' },
    'one-wallet': { name: 'One Wallet', role: 'Unified Operating Wallet', description: 'The secure, unified interface for managing all digital real estate assets and contract interactions within the ecosystem.' }
};

type ComponentKey = keyof typeof systemComponents;

function ArchitecturalBlueprint() {
    const [selectedComponent, setSelectedComponent] = useState<ComponentKey>('dldchain');
    const activeComponent = systemComponents[selectedComponent];

    return (
        <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 md:p-8 space-y-8">
            <div className="text-center border-b border-neutral-800 pb-6">
                <h1 className="text-2xl md:text-3xl font-light text-neutral-100">Real Estate Intelligence OS</h1>
                <p className="text-sm text-neutral-500 max-w-xl mx-auto mt-2">
                    An architectural blueprint for a national-scale, sovereign blockchain for the real estate sector.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4 flex flex-col items-center justify-center bg-neutral-900 p-4 rounded-md border border-neutral-800">
                     <div className="text-center">
                        <h3 className="text-sm font-semibold mt-2 text-neutral-300">Traditional Market State</h3>
                        <p className="text-xs text-neutral-500 mt-1">Opaque, slow, and illiquid. Value is locked.</p>
                    </div>
                    <div className="h-8 w-px bg-neutral-700 my-4"></div>
                    <div className="text-center">
                        <h3 className="text-sm font-semibold mt-2 text-neutral-300">DLDCHAIN Market State</h3>
                        <p className="text-xs text-neutral-500 mt-1">Transparent, fluid, and liquid. Value is programmable.</p>
                    </div>
                </div>

                <div className="lg:col-span-8">
                    <Card className="bg-neutral-900 border-neutral-800 h-full">
                        <CardHeader><CardTitle className="text-base font-semibold text-neutral-300">System Explorer</CardTitle></CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {Object.keys(systemComponents).map((key) => {
                                    const component = systemComponents[key as ComponentKey];
                                    return (
                                        <Button key={key} variant="outline" size="sm" onClick={() => setSelectedComponent(key as ComponentKey)}
                                            className={cn("text-xs h-8", selectedComponent === key ? "bg-orange-500/10 border-orange-500/30 text-orange-300" : "text-neutral-300")}>
                                            {component.name}
                                        </Button>
                                    );
                                })}
                            </div>
                            <AnimatePresence mode="wait">
                                <motion.div key={selectedComponent} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
                                    className="bg-neutral-950/50 p-3 rounded-md border border-neutral-800/50">
                                    <h4 className="text-sm font-medium text-neutral-200 mb-1">{activeComponent.name}</h4>
                                    <p className="text-xs font-semibold text-orange-400/80 mb-2">{activeComponent.role}</p>
                                    <p className="text-xs text-neutral-400">{activeComponent.description}</p>
                                </motion.div>
                            </AnimatePresence>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="bg-neutral-900 p-4 rounded-md border border-neutral-800">
                <h3 className="text-sm font-semibold text-neutral-300 mb-2">Protocol Readout: AIXSELF Alignment</h3>
                <p className="text-xs text-neutral-400">
                    DLDCHAIN is a domain-specific implementation of the AIXSELF Universe. It establishes <strong className="text-white">Computational Trust</strong>, ensures <strong className="text-white">Transparency & Auditability</strong>, enhances <strong className="text-white">Liquidity</strong>, and secures <strong className="text-white">Sovereign Asset Ownership</strong>.
                </p>
            </div>
        </div>
    );
}

export function DLDChainNotebook() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
        <ArchitecturalBlueprint />
    </div>
  );
}
