// src/components/notebooks/NotebookResources.tsx
'use client';

import React from 'react';
import { BrainCircuit } from 'lucide-react';

export function NotebookResources() {
  NotebookResources.displayName = 'NotebookResources';
  
  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="p-6 rounded-lg bg-neutral-900/50 border border-neutral-800">
        <BrainCircuit className="w-8 h-8 text-neutral-500 mx-auto mb-4" />
        <h3 className="font-semibold text-neutral-100">Contextual Resources on Demand</h3>
        <p className="text-sm text-neutral-400 mt-2">
          This living intelligence generates resources contextually. To get a tailored list of further reading, technical papers, or related concepts, please navigate to the <strong className="text-orange-400">"Query AI"</strong> tab and ask the notebook directly.
        </p>
        <p className="text-xs text-neutral-500 mt-4 font-mono">
          Example prompt: "Suggest three academic papers related to this notebook's core principles."
        </p>
      </div>
    </div>
  );
}
