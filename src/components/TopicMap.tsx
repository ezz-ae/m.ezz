
// components/TopicMap.tsx
"use client";
import Link from 'next/link';
import { NOTEBOOKS, NotebookId } from '@/components/notebooks/notebook-data';

// Convert the NOTEBOOKS object into an array for mapping
const topics = Object.keys(NOTEBOOKS).map(key => {
    const notebook = NOTEBOOKS[key as NotebookId];
    return {
        id: notebook.id,
        label: notebook.title,
        tag: notebook.tag,
    };
});

export default function TopicMap() {
  return (
    <div className="relative py-16 md:py-24 px-6 md:px-16 bg-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm tracking-[0.35em] uppercase text-neutral-500 mb-4">
          Notebooks
        </h2>
        <p className="text-xl md:text-2xl text-neutral-100 mb-10">
          Each node is a living notebook — a full self-introduction of one system.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {topics.map((topic) => (
            <Link
              href={`/notebooks/${topic.id}`}
              key={topic.id}
              className="group block relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 via-black to-black px-4 py-4 text-left transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-radial from-white/10 via-transparent to-transparent transition-opacity duration-200" />
              <div className="relative z-10 space-y-2">
                <div className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                  {topic.tag}
                </div>
                <div className="text-base md:text-lg text-neutral-50">
                  {topic.label}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
