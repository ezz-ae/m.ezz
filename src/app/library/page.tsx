
'use client';

import * as React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { NOTEBOOKS, NotebookKey } from '@/components/notebooks/notebook-data';
import { CommandPalette } from '@/components/command-palette';

const TOPICS: { key: NotebookKey; label: string }[] = [
  { key: 'aixself', label: 'AIXSELF — The Instance' },
  { key: 'adept', label: 'ADEPT — The Kernel' },
  { key: 'aixa', label: 'AIXA — The Interface' },
  { key: 'notefull', label: 'Notefull — The Memory' },
  { key: 'aixiam', label: 'AIXIAM — The Identity' },
  { key: 'aixeye', label: 'AIXEYE — The Governance' },
];

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

  const handleTopicClick = (key: NotebookKey) => {
    setActiveNotebook(key);
    window.location.hash = key;
  };

  const notebook = NOTEBOOKS[activeNotebook];

  return (
    <SidebarProvider>
      <CommandPalette open={isCommandPaletteOpen} onOpenChange={setCommandPaletteOpen} />
      <div className="flex min-h-[calc(100dvh-4rem)]">
        <Sidebar collapsible="icon">
          <SidebarHeader>
             <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-2">
                The AIXSELF Universe
             </h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {TOPICS.map((topic) => (
                <SidebarMenuItem key={topic.key}>
                  <SidebarMenuButton
                    onClick={() => handleTopicClick(topic.key)}
                    isActive={activeNotebook === topic.key}
                    className="!text-sm"
                  >
                    {topic.label}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        
        <SidebarInset className="max-w-4xl mx-auto px-4 md:px-8 py-12 !min-h-0">
            <header className="flex items-center gap-4 mb-8">
                 <SidebarTrigger className="md:hidden" />
                 <div>
                    <p className="text-sm uppercase tracking-widest text-muted-foreground">
                        Living Blueprint
                    </p>
                    <h1 className="font-headline text-3xl font-bold text-foreground md:text-4xl">
                        {notebook.title}
                    </h1>
                 </div>
            </header>
            
            <article id={activeNotebook} className="prose prose-lg max-w-none">
                <div className="whitespace-pre-wrap font-mono text-base leading-relaxed">
                    {notebook.body}
                </div>
            </article>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
