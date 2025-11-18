
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  ArrowRight,
  Loader2,
  Bot,
  User,
  Sparkles,
} from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { queryLivingNotebook } from '@/lib/actions';
import type { NotebookKey } from './notebook-data';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

type NotebookChatProps = {
    notebookKey: NotebookKey;
    notebookTitle: string;
}

export function NotebookChat({ notebookKey, notebookTitle }: NotebookChatProps) {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Reset chat when the notebook changes
  useEffect(() => {
    setMessages([
        {
          role: 'assistant',
          content: `I am ready to answer your questions about ${notebookTitle}.`,
        },
    ]);
  }, [notebookKey, notebookTitle]);

  const handleQuery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: query };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setQuery('');

    // The AI is scoped to the specific notebook
    const result = await queryLivingNotebook({ query, slug: notebookKey });
    
    let assistantMessage: Message;
    if (result.error) {
        assistantMessage = { role: 'assistant', content: result.error };
    } else {
        assistantMessage = { role: 'assistant', content: result.data || "I couldn't find an answer to that." };
    }
    
    setMessages(prev => [...prev, assistantMessage]);
    setIsLoading(false);
  };
  
  useEffect(() => {
    if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTo({
            top: scrollAreaRef.current.scrollHeight,
            behavior: 'smooth'
        });
    }
  }, [messages])

  return (
    <div className="h-dvh w-full flex flex-col bg-white text-card-foreground">
      <header className="border-b border-b-[#e3e3e3] p-4">
          <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-black" />
              <h1 className="text-base font-bold text-black">
                  Studio
              </h1>
          </div>
         <p className="text-xs text-[#666] ml-7">Ask about this notebook.</p>
      </header>
      <div className="flex-1 p-0 flex flex-col overflow-hidden">
        <ScrollArea className="flex-1" ref={scrollAreaRef}>
          <div className="space-y-6 p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${
                  message.role === 'user' ? 'justify-end' : ''
                }`}
              >
                {message.role === 'assistant' && (
                  <Avatar className="h-8 w-8 border border-gray-200">
                    <AvatarFallback className="bg-black text-white">
                      <Bot className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`max-w-[300px] rounded-lg px-4 py-3 shadow-sm ${
                    message.role === 'user'
                      ? 'bg-black text-white'
                      : 'bg-[#f5f5f5]'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                </div>
                {message.role === 'user' && (
                  <Avatar className="h-8 w-8 border-gray-200">
                    <AvatarFallback>
                      <User className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {isLoading && (
               <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8 border border-gray-200">
                      <AvatarFallback className="bg-black text-white">
                      <Bot className="h-5 w-5" />
                      </AvatarFallback>
                  </Avatar>
                  <div className="max-w-md rounded-lg px-4 py-3 bg-[#f5f5f5] shadow-sm flex items-center">
                      <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                  </div>
               </div>
            )}
          </div>
        </ScrollArea>
        <div className="border-t border-t-[#e3e3e3] bg-white p-4">
          <form onSubmit={handleQuery} className="flex items-center gap-3">
            <Input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 !text-sm bg-[#f5f5f5] border-gray-300 focus:ring-black"
              disabled={isLoading}
            />
            <Button type="submit" size="icon" className="bg-black hover:bg-gray-800" disabled={isLoading || !query.trim()}>
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
