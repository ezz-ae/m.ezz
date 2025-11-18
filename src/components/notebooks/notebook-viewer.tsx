
'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import type { NOTEBOOKS, NotebookKey } from './notebook-data';

const TOPICS: { key: NotebookKey; label: string }[] = [
    { key: 'aixself', label: 'AIXSELF — The Instance' },
    { key: 'adept', label: 'ADEPT — The Kernel' },
    { key: 'aixa', label: 'AIXA — The Interface' },
    { key: 'notefull', label: 'Notefull — The Memory' },
    { key: 'aixiam', label: 'AIXIAM — The Identity' },
    { key: 'aixeye', label: 'AIXEYE — The Governance' },
];

type NotebookViewerProps = {
    notebooks: typeof NOTEBOOKS
}

export function NotebookViewer({ notebooks }: NotebookViewerProps) {
  const [activeNotebook, setActiveNotebook] = useState<NotebookKey>('aixself');

  const notebook = notebooks[activeNotebook];

  const handleTopicClick = (key: NotebookKey) => {
    setActiveNotebook(key);
    const element = document.getElementById(key);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-[260px_1fr]">
      <aside className="sticky top-20 h-fit self-start rounded-xl border border-[#e3e3e3] bg-white p-4">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#777]">
          The AIXSELF Universe
        </h2>
        <div className="flex flex-col gap-2">
          {TOPICS.map((topic) => (
            <button
              key={topic.key}
              onClick={() => handleTopicClick(topic.key)}
              className={cn(
                'w-full cursor-pointer rounded-full border px-3 py-2 text-left text-sm font-medium transition-all duration-150 ease-in-out',
                'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black',
                activeNotebook === topic.key 
                    ? 'border-black bg-black text-white shadow-sm' 
                    : 'border-gray-300 bg-gray-50 text-gray-700 hover:border-gray-400 hover:bg-gray-100'
              )}
            >
              {topic.label}
            </button>
          ))}
        </div>
      </aside>

      <div>
        {Object.entries(notebooks).map(([key, notebookContent]) => (
            <article key={key} id={key} className="mb-8 min-h-[300px] rounded-2xl border border-[#e3e3e3] bg-white p-6 md:p-8 scroll-mt-20">
                <p className="mb-1 text-xs uppercase tracking-[0.16em] text-[#888]">
                Living Blueprint
                </p>
                <h3 className="text-xl font-bold text-[#111] md:text-2xl">
                {notebookContent.title}
                </h3>
                <div className="my-4 h-px bg-[#eee]"></div>
                <div className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-[#222]">
                {notebookContent.body}
                </div>
            </article>
        ))}
      </div>
    </section>
  );
}
