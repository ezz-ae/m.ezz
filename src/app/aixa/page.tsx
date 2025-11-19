
'use client';

import React from 'react';
import FooterMinimal from '@/components/FooterMinimal';
import { AIXASystemNotebook } from '@/components/notebooks/AIXASystemNotebook';

const AixaPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-neutral-100 overflow-x-hidden">
      <main className="pb-16 pt-24">
        <AIXASystemNotebook />
      </main>
      <FooterMinimal />
    </div>
  );
};

export default AixaPage;
