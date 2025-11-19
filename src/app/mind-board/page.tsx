
'use client';
import type { Metadata } from 'next';
import React from 'react';
import { NotebookCard } from '@/components/notebooks/NotebookCard';
import { DeployWizard } from '@/components/notebooks/DeployWizard';
import { Button } from '@/components/ui/button';
import { Plus, Home } from 'lucide-react';
import { NOTEBOOKS } from '@/components/notebooks/notebook-data';
import FooterMinimal from "@/components/FooterMinimal";
import Link from 'next/link';

// Map over the NOTEBOOKS object to get an array of notebook data
const notebooks = Object.values(NOTEBOOKS);

// export const metadata: Metadata = {
//   title: 'EZZ.AE — Mind Board',
//   description: 'The Mind Board for the NotefullBook Intelligence OS. Manage, deploy, and interact with your sovereign intelligences.',
// };

export default function MindBoardPage() {
  const [showDeployWizard, setShowDeployWizard] = React.useState(false);

  return (
    <>
      <main className="min-h-screen bg-black text-neutral-100 overflow-x-hidden pt-24 md:pt-32">
        <section id="mind-board" className="px-6 md:px-16">
          <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
            <div className="flex items-center justify-between mb-8">
              <div className='flex items-center gap-4'>
                <Link href="/" className="text-neutral-400 hover:text-white">
                  <Home />
                </Link>
                <h1 className="text-2xl md:text-3xl font-light text-neutral-100">Mind Board</h1>
              </div>
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
        </section>
      </main>
      <FooterMinimal />
    </>
  );
}
