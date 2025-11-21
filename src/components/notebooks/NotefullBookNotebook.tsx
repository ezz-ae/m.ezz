// src/components/notebooks/NotefullBookNotebook.tsx
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Brain, Cpu, FileJson, GitBranch, Share2, Power } from 'lucide-react';
import { NOTEBOOKS } from '@/components/notebooks/notebook-data';
import type { NotebookId } from '@/components/notebooks/notebook-data';

const mindBoardNotebooks: { id: NotebookId, status: string }[] = [
    { id: 'forgetence', status: 'Active' },
    { id: 'aixself', status: 'Active' },
    { id: 'imagination-lab', status: 'Active' },
    { id: 'puzzles', status: 'Idle' },
];

const osFeatures = [
    { icon: FileJson, title: "NotebookML: The Language of Thought", description: "A simple, machine-readable syntax that turns plain text into deterministic instructions for the AI, making intelligence portable and verifiable." },
    { icon: Cpu, title: "Master Skills: Innate Cognitive Personalities", description: "Defines the core personality of a notebook from birth (e.g., Organizer, Analyzer, Teacher) via NotebookML directives." },
    { icon: Share2, title: "Input Console (SenseHub): The Data Pipeline", description: "A unified interface to connect notebooks to diverse data streams, normalizing all inputs into structured NotebookML entries." },
    { icon: GitBranch, title: "Cognitive Ledger: Verifiable Thought History", description: "An immutable, hash-chained timeline of every decision and reflection, making the AI's thought process fully auditable and transparent." }
];

function CognitiveOSDashboard() {

    return (
        <div className="bg-card border border-border rounded-lg p-6 md:p-8 space-y-8 font-pt-sans">

            {/* Header */}
            <div className="text-center border-b border-border pb-6">
                <Brain className="mx-auto h-8 w-8 text-primary mb-2" />
                <h1 className="text-2xl font-light text-foreground font-playfair">NotefullBook: The Cognitive OS</h1>
                <p className="text-sm text-muted-foreground max-w-xl mx-auto mt-2">
                    An AI-native operating system where notebooks are not static documents, but sovereign, evolving "minds." This is the Mind Board.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Panel: Mind Board */}
                <div className="lg:col-span-1">
                    <Card className="bg-background border-border h-full">
                        <CardHeader>
                            <CardTitle className="text-base font-semibold flex items-center gap-2 text-card-foreground">
                                Mind Board
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <p className="text-xs text-muted-foreground -mt-2 mb-3">Deploy, train, and observe sovereign intelligence cells.</p>
                            {mindBoardNotebooks.map((nb) => {
                                const notebookData = NOTEBOOKS[nb.id];
                                return (
                                    <div key={nb.id} className="bg-secondary/50 p-2 rounded-md border border-border/80 flex items-center justify-between">
                                        <div>
                                            <p className="text-xs font-semibold text-foreground">{notebookData.title}</p>
                                            <p className="text-xs text-muted-foreground">{notebookData.tag}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <motion.div
                                                className={`h-1.5 w-1.5 rounded-full ${nb.status === 'Active' ? 'bg-green-500' : 'bg-muted-foreground'}`}
                                                animate={nb.status === 'Active' ? { scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] } : {}}
                                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                            />
                                            <span className="text-xs font-mono text-muted-foreground">{nb.status}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </CardContent>
                    </Card>
                </div>

                {/* Right Panel: OS Features */}
                <div className="lg:col-span-2">
                     <Card className="bg-background border-border h-full">
                        <CardHeader>
                            <CardTitle className="text-base font-semibold flex items-center gap-2 text-card-foreground">
                                Core OS Features
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {osFeatures.map(feature => (
                                <div key={feature.title}>
                                    <h4 className="text-sm font-semibold flex items-center gap-2 text-foreground"><feature.icon size={14}/> {feature.title}</h4>
                                    <p className="text-xs text-muted-foreground mt-1 pl-6">{feature.description}</p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
             <div className="bg-secondary/50 p-4 rounded-md border border-border text-center">
                 <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground mb-2 justify-center"><Power size={16} /> System Principle: The Reflection Engine</h3>
                 <p className="text-xs text-muted-foreground">
                    The entire OS is governed by the <strong className="text-foreground/90">Reflection Engine</strong>, a background process running the FCT cognitive cycle. This allows each notebook to continuously simplify its knowledge, strengthen its core patterns, and evolve its intelligence autonomously.
                </p>
            </div>
        </div>
    );
}


export function NotefullBookNotebook() {
  NotefullBookNotebook.displayName = 'NotefullBookNotebook';
  return (
    <div className="max-w-4xl mx-auto py-16">
        <CognitiveOSDashboard />
    </div>
  );
}
