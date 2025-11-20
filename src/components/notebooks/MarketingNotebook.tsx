// src/components/notebooks/MarketingNotebook.tsx
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const fctPrinciples = {
    'frequency': { name: 'The Law of Frequency', description: 'A brand or message gains meaning only through repetition. Consistent exposure creates familiarity, which creates recognition, which ultimately creates the "meaning" of a brand in a consumer\'s mind.' },
    'resonance': { name: 'Resonance as Market Fit', description: 'A message can be broadcast at high frequency, but if it does not resonate with the audience\'s existing cognitive schemas and survival needs, it is rejected as noise. Successful marketing is the act of achieving resonance.' },
    'sin': { name: 'Schema Intelligence Network (SIN)', description: 'This is the model for ethical market intelligence. By observing behavioral truths (frequency, return-rate, drift) without analyzing private content, we can identify "unvalued" spaces and quiet needs.' }
};

type PrincipleKey = keyof typeof fctPrinciples;

function CognitiveArchitectureModel() {
    const [selectedPrinciple, setSelectedPrinciple] = useState<PrincipleKey>('frequency');
    const activePrinciple = fctPrinciples[selectedPrinciple];

    return (
        <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 md:p-8 space-y-8">
            <div className="text-center border-b border-neutral-800 pb-6">
                <h1 className="text-2xl font-light text-neutral-100">Marketing as Behavioural Architecture</h1>
                <p className="text-sm text-neutral-500 max-w-xl mx-auto mt-2">
                    An analytical model demonstrating that marketing is a form of applied cognitive science, based on the foundational laws of FCT.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8">
                    <Card className="bg-neutral-900 border-neutral-800 h-full">
                        <CardHeader><CardTitle className="text-base font-semibold text-neutral-300">FCT Principles in Marketing</CardTitle></CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {Object.keys(fctPrinciples).map((key) => {
                                    const principle = fctPrinciples[key as PrincipleKey];
                                    return (
                                        <Button key={key} variant="outline" size="sm" onClick={() => setSelectedPrinciple(key as PrincipleKey)}
                                            className={cn("text-xs h-8", selectedPrinciple === key ? "bg-orange-500/10 border-orange-500/30 text-orange-300" : "text-neutral-300")}>
                                            {principle.name}
                                        </Button>
                                    );
                                })}
                            </div>
                            <AnimatePresence mode="wait">
                                <motion.div key={selectedPrinciple} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
                                    className="bg-neutral-950/50 p-4 rounded-md border border-neutral-800/50">
                                    <h4 className="text-sm font-medium text-neutral-200 mb-1">{activePrinciple.name}</h4>
                                    <p className="text-xs text-neutral-400">{activePrinciple.description}</p>
                                </motion.div>
                            </AnimatePresence>
                        </CardContent>
                    </Card>
                </div>
                <div className="lg:col-span-4 flex flex-col items-center justify-center bg-neutral-900 p-4 rounded-md border border-neutral-800 text-center">
                    <h3 className="text-sm font-semibold text-neutral-300 mb-2">Cognitive Arbitrage</h3>
                     <p className="text-xs text-neutral-500 mb-4">Seeing the pattern the market has dismissed as noise.</p>
                    <div className="w-full">
                        <div className="mb-3">
                             <div className="h-2 w-full bg-red-500/50 rounded-full"></div>
                             <p className="text-xs text-red-400/80 mt-1">High-Frequency Signals (Crowded Market)</p>
                        </div>
                         <div className="">
                             <div className="h-2 w-1/4 bg-green-500/50 rounded-full"></div>
                             <p className="text-xs text-green-400/80 mt-1">Low-Frequency Signals ("Unvalued" Space)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function MarketingNotebook() {
  return (
    <div className="max-w-4xl mx-auto py-16">
        <CognitiveArchitectureModel />
    </div>
  );
}
