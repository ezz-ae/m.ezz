// src/components/notebooks/SecurityNotebook.tsx
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion, AnimatePresence } from 'framer-motion';

const trapData = {
    'fake-airdrop': {
        name: 'Fake Airdrop Simulation',
        triggers: ['Greed', 'Urgency (FOMO)', 'Social Proof'],
        description: 'Simulates an exclusive airdrop, prompting users to sign a malicious transaction to claim non-existent assets.'
    },
    'token-approval': {
        name: 'Malicious Token Approval',
        triggers: ['Trust Violation', 'Technical Obfuscation'],
        description: 'Mimics a legitimate DeFi action, requesting a broad token approval that would grant a malicious contract control over user funds.'
    },
    'impersonation-wallet': {
        name: 'Impersonation Wallet Interface',
        triggers: ['Authority Bias', 'Pattern Interruption'],
        description: 'Presents a UI nearly identical to a trusted wallet provider, designed to capture a seed phrase or password through a fake login prompt.'
    },
};

function ThreatAnalysisLab() {
    const [selectedTrap, setSelectedTrap] = useState('fake-airdrop');
    
    const activeTrap = trapData[selectedTrap];

    return (
        <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 md:p-8 space-y-8">
            <div className="text-center border-b border-neutral-800 pb-6">
                <h1 className="text-2xl md:text-3xl font-light text-neutral-100">Cognitive Threat Analysis Lab</h1>
                <p className="text-sm text-neutral-500 max-w-xl mx-auto mt-2">
                    A research environment for studying security as a cognitive design problem by simulating and deconstructing attack vectors.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <Card className="bg-neutral-900 border-neutral-800 h-full">
                        <CardHeader><CardTitle className="text-base font-semibold text-neutral-300">KAP Trap Simulator</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-xs text-neutral-500 mb-3">Select a simulated attack vector to analyze its cognitive triggers.</p>
                            <Select onValueChange={setSelectedTrap} defaultValue={selectedTrap}>
                                <SelectTrigger className="bg-neutral-800 border-neutral-700">
                                    <SelectValue placeholder="Select a trap..." />
                                </SelectTrigger>
                                <SelectContent className="bg-neutral-800 border-neutral-700 text-neutral-200">
                                    {Object.entries(trapData).map(([key, value]) => (
                                        <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <AnimatePresence mode="wait">
                                <motion.div key={selectedTrap} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
                                    className="mt-4 bg-neutral-950/50 p-3 rounded-md border border-neutral-800/50">
                                    <h4 className="text-sm font-medium text-neutral-200 mb-2">Analysis Readout</h4>
                                    <p className="text-xs text-neutral-400 mb-3">{activeTrap.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-xs font-semibold text-neutral-500 self-center">Cognitive Triggers:</span>
                                        {activeTrap.triggers.map(trigger => (
                                            <div key={trigger} className="text-xs text-orange-300 bg-orange-500/10 px-2 py-0.5 rounded-sm">
                                                {trigger}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-4">
                     <h3 className="text-sm font-semibold text-neutral-300">Luredoor Case Files</h3>
                     <Card className="bg-neutral-900 border-neutral-800"><CardContent className="p-4">
                           <h4 className="text-xs font-semibold text-neutral-200">Case #001: Cracked Software</h4>
                           <p className="text-xs text-neutral-400 mt-1">Demonstrated willingness to bypass security for perceived value, quantifying the cognitive override of the "free" tag.</p>
                     </CardContent></Card>
                     <Card className="bg-neutral-900 border-neutral-800"><CardContent className="p-4">
                           <h4 className="text-xs font-semibold text-neutral-200">Case #002: Jupiter NFT</h4>
                           <p className="text-xs text-neutral-400 mt-1">Demonstrated that urgency (FOMO) and social proof can disrupt rational due diligence.</p>
                     </CardContent></Card>
                </div>
            </div>

            <div className="bg-neutral-900 p-4 rounded-md border border-neutral-800">
                <h3 className="text-sm font-semibold text-neutral-300 mb-2">System Readout: AIXSELF Alignment</h3>
                <p className="text-xs text-neutral-400">
                    This adversarial research directly informs the AIXSELF safety architecture. By studying cognitive <strong className="text-white">misalignment</strong>, we gather ground-truth data to build systems that are architecturally <strong className="text-white">aligned</strong>.
                </p>
            </div>
        </div>
    );
}

export function SecurityNotebook() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
        <ThreatAnalysisLab />
    </div>
  );
}
