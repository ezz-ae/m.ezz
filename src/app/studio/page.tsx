
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function StudioPage() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Welcome to the Studio. I have been trained on the principles of Cognitive Architecture and the AIXSELF universe. Ask me anything.",
    },
  ]);

  const handleQuery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: query };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setQuery('');

    const result = await queryLivingNotebook({ query });
    
    let assistantMessage: Message;
    if (result.error) {
        assistantMessage = { role: 'assistant', content: result.error };
    } else {
        assistantMessage = { role: 'assistant', content: result.data || "I couldn't find an answer to that." };
    }
    
    setMessages(prev => [...prev, assistantMessage]);
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto max-w-4xl py-12 md:py-16">
      <div className="h-[75dvh] w-full flex flex-col rounded-xl border bg-card text-card-foreground shadow-sm">
        <header className="border-b p-4">
            <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <h1 className="font-headline text-xl font-bold">
                    Studio Notebook
                </h1>
            </div>
           <p className="text-sm text-muted-foreground ml-8">Ask the AI Principal about Cognitive Architecture.</p>
        </header>
        <div className="flex-1 p-0 flex flex-col overflow-hidden">
          <ScrollArea className="flex-1 p-4 md:p-6">
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
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
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
            <form onSubmit={handleQuery} className="flex items-center gap-3">
              <Input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Ask about AIXSELF, Notefull, or Forgetism..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading || !query.trim()}>
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
    </div>
  );
}
