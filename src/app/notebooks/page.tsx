import { NotebookViewer } from '@/components/notebooks/notebook-viewer';

export default function NotebooksPage() {
  return (
    <main className="mx-auto max-w-6xl p-4 sm:p-8">
      <header className="mb-8">
        <h1 className="font-headline text-3xl font-bold uppercase tracking-wide text-foreground">
          EZZ.ae
        </h1>
        <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
          COGNITIVE ARCHITECT – FORGETTING SYSTEMS & MEMORY-SAFE INTELLIGENCE
        </p>
        <p className="mt-2 max-w-xl text-base text-muted-foreground">
          I build forgetting-based intelligence systems: architectures where AI
          forgets safely, resonates clearly, and aligns with how human cognition
          actually works.
        </p>
      </header>

      <NotebookViewer />

      <footer className="mt-8 border-t border-border pt-4 text-sm text-muted-foreground">
        “Intelligence isn’t memory. Intelligence is forgetting well.”
      </footer>
    </main>
  );
}
