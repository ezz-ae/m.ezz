// src/components/notebooks/MindBoard.tsx
"use client";

import React from 'react';
import { NotebookCard } from './NotebookCard';
import { DeployWizard } from './DeployWizard';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';

// Mock data for demonstration purposes
const mockNotebooks = [
  {
    id: 'forgetence',
    name: 'Forgetence / FCT',
    roleIcon: '🧠',
    status: 'active' as const,
  },
  {
    id: 'notefullbook',
    name: 'NotefullBook OS',
    roleIcon: '📝',
    status: 'sleeping' as const,
  },
  {
    id: 'aixself',
    name: 'AIXSELF Universe',
    roleIcon: '🤖',
    status: 'active' as const,
  },
  {
    id: 'realestate',
    name: 'Real Estate Intelligence',
    roleIcon: '🏦',
    status: 'archived' as const,
  },
];

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
          <Button onClick={() => setShowDeployWizard(true)}>
            <Plus className="mr-2 h-4 w-4" /> Deploy New Mind
          </Button>
        </DeployWizard>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockNotebooks.map((notebook) => (
          <NotebookCard
            key={notebook.id}
            name={notebook.name}
            roleIcon={notebook.roleIcon}
            status={notebook.status}
          />
        ))}
      </div>
    </div>
  );
}
