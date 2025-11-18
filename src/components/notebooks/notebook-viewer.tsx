
'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import type { NOTEBOOKS, NotebookKey } from './notebook-data';
import { NotebookChat } from './notebook-chat';

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
  const searchParams = useSearchParams();

  useEffect(() => {
    // This allows linking directly to a notebook from the MindMap or URL
    const slugFromUrl = window.location.hash.substring(1) as NotebookKey;
    if (slugFromUrl && notebooks[slugFromUrl]) {
        setActiveNotebook(slugFromUrl);
    }
  }, [notebooks]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1) as NotebookKey;
      if (hash && notebooks[hash]) {
        setActiveNotebook(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange, false);
    return () => window.removeEventListener('hashchange', handleHashChange, false);
  }, [notebooks]);


  const handleTopicClick = (key: NotebookKey) => {
    setActiveNotebook(key);
    window.location.hash = key;
  }

  const notebook = notebooks[activeNotebook];

  return (
    <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[280px_1fr_450px] min-h-dvh">
      {/* Sidebar */}
      <aside className="sticky top-0 h-dvh self-start border-r border-[#e3e3e3] bg-white p-4 flex flex-col">
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
        <div className="mt-auto pt-4 text-xs text-[#999]">
            <p className="font-semibold">EZZ.AE</p>
            <p>Cognitive Architecture</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="p-8 md:p-12 overflow-y-auto h-dvh">
        <article id={activeNotebook} className="rounded-2xl scroll-mt-20">
            <p className="mb-1 text-xs uppercase tracking-[0.16em] text-[#888]">
            Living Blueprint
            </p>
            <h1 className="text-2xl font-bold text-[#111] md:text-3xl">
            {notebook.title}
            </h1>
            <div className="my-4 h-px bg-[#eee]"></div>
            <div className="whitespace-pre-wrap font-mono text-base leading-relaxed text-[#222]">
            {notebook.body}
            </div>
        </article>
      </main>
      
      {/* Chat Panel */}
      <div className="sticky top-0 h-dvh self-start border-l border-[#e3e3e3] bg-white">
        <NotebookChat notebookKey={activeNotebook} notebookTitle={notebook.title} />
      </div>

    </div>
  );
}
