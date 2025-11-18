
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
import { NotebookStudio } from '@/components/notebooks/notebook-studio';
import { ScrollArea } from '@/components/ui/scroll-area';

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
        
        <SidebarInset className="!min-h-0 flex-1 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-0">
          <div className="lg:col-span-1 xl:col-span-2 flex flex-col h-[calc(100dvh-4rem)]">
            <header className="flex items-center gap-4 p-4 border-b">
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
            
             <ScrollArea className="flex-1">
                <article id={activeNotebook} className="prose prose-lg max-w-none p-6 md:p-8">
                    <div className="font-headline text-xl leading-relaxed motion-safe:animate-fade-in [animation-timeline:view()] [animation-range:entry]">
                        {notebook.body.split('\n').map((paragraph, index) => (
                            <p
                                key={index}
                                className="motion-safe:animate-fade-in-scroll [animation-timeline:view()] [animation-range:entry_25%_cover_50%]"
                                style={{ animationDelay: `${index * 50}ms` }}
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
      </div>
    </SidebarProvider>
  );
}
