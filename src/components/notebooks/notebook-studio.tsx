
'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Loader2,
  Bot,
  User,
  Sparkles,
  Command,
} from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { queryLivingNotebook } from '@/lib/actions';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { type Notebook } from '@/components/notebooks/notebook-data';
import { type NotebookKey } from '@/components/notebooks/notebook-data';
import { useStudioStore } from '@/lib/store';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

type NotebookStudioProps = {
    activeNotebook: Notebook;
    activeNotebookSlug: NotebookKey;
}

export function NotebookStudio({ activeNotebook, activeNotebookSlug }: NotebookStudioProps) {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const { query: globalQuery, setQuery: setGlobalQuery } = useStudioStore();

  useEffect(() => {
    setMessages([
      {
        role: 'assistant',
        content: `I am ready to answer questions about "${activeNotebook.title}".`,
      },
    ]);
  }, [activeNotebook]);
  
  useEffect(() => {
    if (globalQuery) {
      handleQuerySubmit(globalQuery);
      setGlobalQuery(''); // Reset the global query after handling
    }
  }, [globalQuery, setGlobalQuery]);

  useEffect(() => {
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  }, [messages, isLoading]);


  const handleQuerySubmit = async (queryToSubmit: string) => {
    if (!queryToSubmit.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: queryToSubmit };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setInputValue('');

    const result = await queryLivingNotebook({ query: queryToSubmit, slug: activeNotebookSlug });
    
    let assistantMessage: Message;
    if (result.error) {
        assistantMessage = { role: 'assistant', content: result.error };
    } else {
        assistantMessage = { role: 'assistant', content: result.data || "I couldn't find an answer to that." };
    }
    
    setMessages(prev => [...prev, assistantMessage]);
    setIsLoading(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleQuerySubmit(inputValue);
  };


  return (
    <div className="h-full w-full flex flex-col rounded-xl border bg-card text-card-foreground shadow-sm">
        <header className="border-b p-4">
            <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <h1 className="font-headline text-xl font-bold">
                    Studio
                </h1>
            </div>
           <p className="text-sm text-muted-foreground ml-8">Ask about this notebook.</p>
        </header>
        <div className="flex-1 p-0 flex flex-col overflow-hidden">
          <ScrollArea className="flex-1 p-4 md:p-6" ref={scrollAreaRef}>
            <div className="space-y-6">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 ${
                    message.role === 'user' ? 'justify-end' : ''
                  }`}
                >
                  {message.role === 'assistant' && (
                    <Avatar className="h-8 w-8 border">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        <Bot className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-xl rounded-lg px-4 py-3 shadow-sm ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-background'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content.replace(/\[Library\]\(\/library\)/g, '')}
                      {message.role === 'assistant' && message.content.includes('[Library](/library)') && (
                        <Button asChild variant="link" className="p-0 h-auto font-normal text-sm block">
                          <Link href="/library">Explore in the Library</Link>
                        </Button>
                      )}
                    </p>
                  </div>
                  {message.role === 'user' && (
                    <Avatar className="h-8 w-8 border">
                      <AvatarFallback>
                        <User className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              {isLoading && (
                 <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8 border">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                        <Bot className="h-5 w-5" />
                        </AvatarFallback>
                    </Avatar>
                    <div className="max-w-md rounded-lg px-4 py-3 bg-background shadow-sm flex items-center">
                        <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                    </div>
                 </div>
              )}
            </div>
          </ScrollArea>
          <div className="border-t bg-background/80 p-4">
            <form onSubmit={handleFormSubmit} className="relative flex items-center gap-3">
              <Input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="Ask a follow-up..."
                className="flex-1 pr-24"
                disabled={isLoading}
              />
              <div className="absolute right-14 flex items-center text-xs text-muted-foreground">
                <Command className="h-3 w-3 mr-1" /> K
              </div>
              <Button type="submit" size="icon" disabled={isLoading || !inputValue.trim()}>
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
  );
}
