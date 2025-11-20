'use client';

import React from 'react';
// import FooterMinimal from '@/components/FooterMinimal'; // This component was removed
import { AIXASystemNotebook } from '@/components/notebooks/AIXASystemNotebook';

const AixaPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-neutral-100 overflow-x-hidden">
      <main className="pb-16 pt-24">
        <AIXASystemNotebook />
      </main>
      {/* The global SiteFooter in layout.tsx handles the footer now */}
    </div>
  );
};

export default AixaPage;
