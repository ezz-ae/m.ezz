
import { NotebookViewer } from '@/components/notebooks/notebook-viewer';

export default function NotebooksPage() {
  return (
    <div className="bg-[#f5f5f5] text-[#111] min-h-screen py-12 md:py-16">
      <main className="mx-auto max-w-6xl p-4 sm:p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold uppercase tracking-[0.03em]">
            EZZ.ae
          </h1>
          <p className="mt-2 text-sm uppercase tracking-[0.08em] text-[#666]">
            COGNITIVE ARCHITECT – FORGETTING SYSTEMS & MEMORY-SAFE INTELLIGENCE
          </p>
          <p className="mt-2 max-w-xl text-base leading-relaxed text-[#444]">
            I build forgetting-based intelligence systems: architectures where AI
            forgets safely, resonates clearly, and aligns with how human cognition
            actually works.
          </p>
        </header>

        <NotebookViewer />

        <footer className="mt-8 border-t border-[#e3e3e3] pt-4 text-sm text-[#777]">
          “Intelligence isn’t memory. Intelligence is forgetting well.”
        </footer>
      </main>
    </div>
  );
}
