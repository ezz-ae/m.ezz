
// src/components/notebooks/NotebookShell.tsx
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

type NotebookShellProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function NotebookShell({ title, description, children }: NotebookShellProps) {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0 -z-10 bg-radial from-white/5 via-black to-black opacity-40" />
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="py-12 border-b border-white/10">
            <Link href="/#map" className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-100 transition-colors mb-8">
                <ArrowLeft size={16} />
                Back to Notebooks
            </Link>
            <h1 className="text-3xl md:text-5xl font-light text-neutral-50">{title}</h1>
            <p className="mt-4 text-lg text-neutral-300">{description}</p>
        </div>
      </div>

      {children}
    </div>
  );
}
