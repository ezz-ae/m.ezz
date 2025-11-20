// src/components/notebooks/PuzzlesNotebook.tsx
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function InstrumentPanel() {
    const [pattern, setPattern] = useState('1HumanPattern...');
    const [analysis, setAnalysis] = useState('');
    const [ticketCount, setTicketCount] = useState(250);
    const [isLoading, setIsLoading] = useState(false);

    const handleAnalyze = () => {
        setIsLoading(true);
        setAnalysis('');
        setTimeout(() => {
            setAnalysis('Analysis: Pattern detected. Human-generated vanity prefix. Predictable entropy. Security through creativity is an anti-pattern.');
            setIsLoading(false);
        }, 1000);
    };

    const keyFindings = [
        "Intelligence is a search through a possibility space.",
        "Human bias is a detectable signal, not just a flaw.",
        "Every failure is negative information that refines the search.",
        "The model of a problem is always a simplification of its reality."
    ];

    return (
        <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 md:p-8 space-y-8">
            <div className="text-center border-b border-neutral-800 pb-6">
                <h1 className="text-2xl md:text-3xl font-light text-neutral-100">Laboratory for Intelligence</h1>
                <p className="text-sm text-neutral-500 max-w-xl mx-auto mt-2">
                    A controlled environment for the scientific study of search, risk, and cognitive bias.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-8">
                    <div className="bg-neutral-900 p-4 rounded-md border border-neutral-800">
                        <h3 className="text-sm font-semibold text-neutral-300">Instrument: ChainCrack AI Pattern Analyzer</h3>
                        <p className="text-xs text-neutral-500 mt-1 mb-3">Demonstrates that any discernible pattern is an attack surface.</p>
                        <div className="flex gap-2">
                            <Input 
                                type="text" 
                                value={pattern}
                                onChange={(e) => setPattern(e.target.value)}
                                className="font-mono text-xs bg-neutral-800 border-neutral-700 h-8"
                                placeholder="Enter a brainwallet..."
                            />
                            <Button size="sm" variant="outline" onClick={handleAnalyze} disabled={isLoading} className="h-8">
                                {isLoading ? 'Analyzing...' : 'Analyze'}
                            </Button>
                        </div>
                        {analysis && (
                            <div className="mt-3 text-xs text-orange-300 bg-orange-500/10 p-2 rounded-sm">
                                <strong className="font-semibold">Readout:</strong> {analysis}
                            </div>
                        )}
                    </div>
                    <div className="bg-neutral-900 p-4 rounded-md border border-neutral-800">
                        <h3 className="text-sm font-semibold text-neutral-300">Instrument: BruteBrains Ticket Marketplace</h3>
                        <p className="text-xs text-neutral-500 mt-1 mb-3">Transforms a monolithic task into a decentralized, incentivized ecosystem.</p>
                        <div>
                            <label className="text-xs text-neutral-400">Search Space Allocation: {ticketCount.toLocaleString()} / 1,000,000 Tickets</label>
                            <input 
                                type="range" 
                                min="0" 
                                max="1000000" 
                                value={ticketCount}
                                onChange={(e) => setTicketCount(Number(e.target.value))}
                                className="w-full h-1 bg-neutral-700 rounded-lg appearance-none cursor-pointer range-sm"
                            />
                        </div>
                         <div className="mt-2 text-xs text-green-300 bg-green-500/10 p-2 rounded-sm">
                            <strong className="font-semibold">System State:</strong> Distributed search in progress. Value is derived from verifiable computational work.
                        </div>
                    </div>
                </div>
                <div className="bg-neutral-900 p-4 rounded-md border border-neutral-800">
                    <h3 className="text-sm font-semibold text-neutral-300 mb-3">Primary Research Readouts</h3>
                    <ul className="space-y-2">
                        {keyFindings.map((finding, i) => (
                            <li key={i} className="text-xs text-neutral-400 border-b border-neutral-800/50 pb-2">
                                <span className="text-neutral-500 mr-2 font-mono">0{i+1}</span> {finding}
                            </li>
                        ))}
                    </ul>
                     <div className="mt-4 text-xs text-neutral-400">
                        <strong className="text-neutral-300">System Integration: AIXSELF Alignment</strong>
                        <p className="mt-1">This lab's findings inform the AIXSELF architecture, hardening the Schema Intelligence Network and prototyping the merit-based economy.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function PuzzlesNotebook() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
        <InstrumentPanel />
    </div>
  );
}
