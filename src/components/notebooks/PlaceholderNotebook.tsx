// src/components/notebooks/PlaceholderNotebook.tsx
'use client';

import React from 'react';
import { NOTEBOOKS, NotebookId } from './notebook-data';

interface PlaceholderNotebookProps {
  slug: NotebookId;
}

export function PlaceholderNotebook({ slug }: PlaceholderNotebookProps) {
    const notebook = NOTEBOOKS[slug];

    if (!notebook) {
        return <p>Notebook not found.</p>;
    }

    return (
        <div className="max-w-4xl mx-auto py-16 px-4">
            <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 md:p-8 space-y-6">
                <div className="text-center border-b border-neutral-800 pb-6">
                    <h1 className="text-2xl md:text-3xl font-light text-neutral-100">{notebook.title}</h1>
                    <p className="text-sm text-neutral-500 max-w-xl mx-auto mt-2">
                        {notebook.description}
                    </p>
                </div>
                
                <div className="bg-neutral-900 p-4 rounded-md border border-neutral-800">
                    <h3 className="text-sm font-semibold text-neutral-300 mb-2">Core Principles</h3>
                    <ul className="list-disc list-inside text-sm text-neutral-400 space-y-2">
                        {notebook.abilities.map((ability, index) => (
                            <li key={index}>{ability}</li>
                        ))}
                    </ul>
                </div>
                
                <div className="text-center pt-4">
                    <p className="text-xs text-neutral-600">
                        A full, interactive instrument for this notebook is currently under development.
                    </p>
                </div>
            </div>
        </div>
    );
}
