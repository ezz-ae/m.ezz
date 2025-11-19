
// src/components/notebooks/NotebookResources.tsx
"use client";

import { FileText, DraftingCompass, Code, Sigma } from 'lucide-react';

const resources = [
    { title: "Blueprint", icon: DraftingCompass, description: "The high-level architectural design and system diagram.", status: "Coming Soon" },
    { title: "Whitepaper", icon: FileText, description: "The complete academic or technical paper detailing the theory.", status: "Coming Soon" },
    { title: "Code", icon: Code, description: "Link to the source code repository or core implementation.", status: "Coming Soon" },
    { title: "Mathematical Model", icon: Sigma, description: "The core equations and formalisms behind the system.", status: "Coming Soon" }
];

export function NotebookResources() {
  NotebookResources.displayName = 'NotebookResources';
  
  return (
    <div className="max-w-3xl mx-auto">
        <h2 className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resources.map((resource) => (
                <div key={resource.title} className="p-6 rounded-lg bg-neutral-900/50 border border-neutral-800 flex items-start gap-4">
                    <resource.icon className="w-8 h-8 text-neutral-500 mt-1" />
                    <div>
                        <h4 className="font-semibold text-neutral-100">{resource.title}</h4>
                        <p className="text-sm text-neutral-400 mt-1">{resource.description}</p>
                        <p className="text-xs text-orange-400/70 mt-2 font-mono">{resource.status}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}
