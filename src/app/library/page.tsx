
'use client';

import * as React from 'react';
import {
  SidebarInset,
} from '@/components/ui/sidebar';
import { NOTEBOOKS, NotebookKey } from '@/components/notebooks/notebook-data';
import { CommandPalette } from '@/components/command-palette';
import { NotebookStudio } from '@/components/notebooks/notebook-studio';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function LibraryPage() {
  const [activeNotebook, setActiveNotebook] = React.useState<NotebookKey>('aixself');
  const [isCommandPaletteOpen, setCommandPaletteOpen] = React.useState(false);

  React.useEffect(() => {
    const slugFromUrl = window.location.hash.substring(1) as NotebookKey;
    if (slugFromUrl && NOTEBOOKS[slugFromUrl]) {
      setActiveNotebook(slugFromUrl);
    }
  }, []);

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1) as NotebookKey;
      if (hash && NOTEBOOKS[hash]) {
        setActiveNotebook(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange, false);
    return () => window.removeEventListener('hashchange', handleHashChange, false);
  }, []);

  const notebook = NOTEBOOKS[activeNotebook];

  return (
    <>
      <CommandPalette open={isCommandPaletteOpen} onOpenChange={setCommandPaletteOpen} />
      <SidebarInset className="!min-h-0 flex-1 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-0">
          <div className="lg:col-span-1 xl:col-span-2 flex flex-col h-screen">
            <header className="flex items-center gap-4 p-4 border-b">
                 <div>
                    <p className="text-sm uppercase tracking-widest text-muted-foreground">
                        Living Blueprint
                    </p>
                    <h1 className="font-headline text-3xl font-bold text-foreground md:text-4xl">
                        {notebook.title}
                    </h1>
                 </div>
            </header>
            
             <ScrollArea className="flex-1">
                <article id={activeNotebook} className="prose prose-lg max-w-none p-6 md:p-8">
                    <div className="font-headline text-xl leading-relaxed">
                        {notebook.body.split('\n').map((paragraph, index) => (
                            <p
                                key={index}
                                className="animate-scroll"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </article>
            </ScrollArea>
          </div>
          
          <div className="hidden lg:block lg:col-span-1 xl:col-span-1">
             <NotebookStudio activeNotebook={notebook} activeNotebookSlug={activeNotebook} />
          </div>
        </SidebarInset>
      </>
  );
}
