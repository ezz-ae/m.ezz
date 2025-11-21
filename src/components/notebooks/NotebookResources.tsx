// src/components/notebooks/NotebookResources.tsx
'use client';

import React from 'react';
import { BrainCircuit } from 'lucide-react';

export function NotebookResources() {
  NotebookResources.displayName = 'NotebookResources';
  
  return (
    <div className="max-w-3xl mx-auto text-center font-pt-sans">
      <div className="p-6 rounded-lg bg-card border border-border">
        <BrainCircuit className="w-8 h-8 text-muted-foreground mx-auto mb-4" />
        <h3 className="font-semibold text-card-foreground">Contextual Resources on Demand</h3>
        <p className="text-sm text-muted-foreground mt-2">
          This living intelligence generates resources contextually. To get a tailored list of further reading, technical papers, or related concepts, please navigate to the <strong className="text-primary">"Query AI"</strong> tab and ask the notebook directly.
        </p>
        <p className="text-xs text-muted-foreground/80 mt-4 font-mono">
          Example prompt: "Suggest three academic papers related to this notebook's core principles."
        </p>
      </div>
    </div>
  );
}
