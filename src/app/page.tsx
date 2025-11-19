
import type { Metadata } from 'next';
import { MindBoard } from '@/components/notebooks/MindBoard';

export const metadata: Metadata = {
  title: 'EZZ.AE — Mind Board',
  description: 'The Mind Board for the NotefullBook Intelligence OS. Manage, deploy, and interact with your sovereign intelligences.',
};


export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-neutral-100 overflow-x-hidden pt-24 md:pt-32">
      <div className="relative flex flex-col items-stretch">
        <section id="mind-board" className="px-6 md:px-16">
          <MindBoard />
        </section>
      </div>
    </main>
  );
}
