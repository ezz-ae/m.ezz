
// src/components/notebooks/MindBoard.tsx
"use client";

import React from 'react';
import { NotebookCard } from './NotebookCard';
import { DeployWizard } from './DeployWizard';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import { NOTEBOOKS } from './notebook-data';

// Map over the NOTEBOOKS object to get an array of notebook data
const notebooks = Object.values(NOTEBOOKS);


export function MindBoard() {
  const [showDeployWizard, setShowDeployWizard] = React.useState(false);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl md:text-3xl font-light text-neutral-100">Mind Board</h1>
        <DeployWizard
          open={showDeployWizard}
          onOpenChange={setShowDeployWizard}
        >
          <Button onClick={() => setShowDeployWizard(true)} variant="outline" className="text-neutral-100 border-neutral-700 hover:bg-neutral-800 hover:text-neutral-50">
            <Plus className="mr-2 h-4 w-4" /> Deploy New Mind
          </Button>
        </DeployWizard>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {notebooks.map((notebook) => (
          <NotebookCard
            key={notebook.id}
            id={notebook.id}
            name={notebook.title}
            description={notebook.description}
            tag={notebook.tag}
          />
        ))}
      </div>
    </div>
  );
}
