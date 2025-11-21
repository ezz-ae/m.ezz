// src/components/notebooks/NotebookResources.tsx
'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Book, Cpu, Landmark } from 'lucide-react';

const resourceCategories = [
    {
        title: "Foundational Science & Cognitive Physics",
        icon: Cpu,
        description: "The immutable laws of cognition and energetic intelligence that govern the entire system.",
        items: [
            {
                title: "Forgetting Core Thinking (FCT)",
                summary: "The core cognitive law asserting that forgetting is the engine of intelligence, safety, and stability. It mandates memory as a reconstructive process, not archival storage.",
                details: "FCT introduces the Human Memory Rewrite (HMR) Cycle (Frequency → Resonance → Meaning → Relocation → Fade-In Overwrite) and key safety mechanisms like the Emotional Softening Filter (ESF) and Interpretive Recall Layer (IRL). This is the foundational science for creating psychologically safe, human-aligned AI."
            },
            {
                title: "Energetic Intelligence Theory (Ω)",
                summary: "A physics-based model where intelligence is an energetic phenomenon, not a computational one. It establishes a Zero-Memory Architecture based on energetic state persistence.",
                details: "The Omega (Ω) architecture operates on the SEGA (Synthetic Energetic General Architecture) engine, managing energy states (Stability, Memory, Adaptation, Identity). It replaces static data with Omega Anchors—stable frequency lattices formed from collapsed cognitive moments—and ensures systemic fairness through the physics-based F-Law."
            },
        ]
    },
    {
        title: "The Sovereign Operating System (AIXSELF)",
        icon: Book,
        description: "The 5-layer cognitive OS that translates foundational laws into a functional, decentralized architecture.",
        items: [
            {
                title: "The 5-Layer Stack (ADEPT → AIXEYE)",
                summary: "The chronological OS stack that mirrors human development: thinking (ADEPT), expression (AIXA), memory (NotefullBook), identity (AIXIAM), and governance (AIXEYE).",
                details: "Each layer performs a specific cognitive function. ADEPT is the Kernel enforcing relocation logic. NOTEFULLBOOK is the Memory Fabric implementing the Reflection Engine. AIXIAM is the Identity Layer providing the AIXSELF Passport via Frequency Fingerprinting. AIXEYE is the Governance Mesh auditing the entire system."
            },
            {
                title: "NotefullBook & NotebookML",
                summary: "The Memory Fabric (L3) and its deterministic language. It acts as the Artificial Simplification Engine to 'kill the archive.'",
                details: "NotefullBook is the OS where living notebooks evolve. NotebookML is the 'language of thought' (Markdown × Logic × Memory) that defines the purpose, rules, and ethics of each notebook, making its reasoning deterministic and auditable."
            }
        ]
    },
    {
        title: "The Integrated Ecosystem (The Eco)",
        icon: Landmark,
        description: "The economic, legal, and societal applications that run on the AIXSELF OS.",
        items: [
             {
                title: "AIMAS: The Economics of Understanding",
                summary: "An economic engine that monetizes Certainty, not Attention. Replaces GDP with GRO (Gross Reflective Output).",
                details: "The Calculated Fitting System (CFS) calculates a Fit Matrix (Speed, Certainty, Confidence) to directly fulfill user intent. The economy runs on Ink, a cognitive currency minted by 'Proof of Reflection' (verified understanding)."
            },
             {
                title: "Stormstan: The Ideas Economy",
                summary: "A 'Humanware' OS for ideation where ideas are public energy and ownership is earned through execution.",
                details: "Stormstan operates on the 'Giveup Law,' where ideas are surrendered to the commons upon entry. Value is captured by Filing a Derivative Branch. The economy runs on Electricity, a thermodynamic currency allocated by contribution, enforcing fairness as a physical law."
            },
             {
                title: "Entrestate & EBRAM: The Legal Grid",
                summary: "A sovereign infrastructure that turns law into executable code for domains like real estate.",
                details: "EBRAM is the 'programming language of law and lineage,' creating immutable, self-executing contracts. DLDCHAIN is the sovereign ledger that binds physical property to digital law (e.g., 1 Token = 1 sq. ft.), creating a fully programmable legal and financial grid."
            }
        ]
    }
];

export function NotebookResources() {
  NotebookResources.displayName = 'NotebookResources';
  
  return (
    <div className="max-w-4xl mx-auto font-pt-sans space-y-12">
      {resourceCategories.map((category) => (
        <div key={category.title}>
          <div className="flex items-center gap-3 mb-4">
            <category.icon className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">{category.title}</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-6 pl-9">{category.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-9">
            {category.items.map((item) => (
              <Dialog key={item.title}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="h-auto text-left justify-start p-4">
                    <div className="flex flex-col">
                      <p className="font-semibold text-foreground text-sm">{item.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.summary}</p>
                    </div>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-primary font-playfair">{item.title}</DialogTitle>
                    <DialogDescription className="pt-2 text-base">
                      {item.details}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
