'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowRight, Loader2, Bot, User, Sparkles } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { queryProjectNotebook } from '@/lib/actions';
import type { Project } from '@/lib/types';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

type ProjectNotebookProps = {
  project: Project;
};

export function ProjectNotebook({ project }: ProjectNotebookProps) {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `I have been trained on the details of "${project.title}". Ask me anything specific about this project.`,
    },
  ]);

  const handleQuery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: query };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setQuery('');

    const result = await queryProjectNotebook({ query, slug: project.slug });
    
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
    <Card className="h-[75dvh] w-full flex flex-col mt-12">
      <CardHeader className="border-b">
        <CardTitle className="flex items-center gap-2 font-headline">
          <Sparkles className="h-6 w-6 text-primary" />
          Project Notebook
        </CardTitle>
        <CardDescription>Ask an AI assistant about {project.title}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 p-0 flex flex-col">
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
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <Bot className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`max-w-xl rounded-lg px-4 py-2 ${
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
                {message.role === 'user' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                      <User className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {isLoading && (
               <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                      <Bot className="h-5 w-5" />
                      </AvatarFallback>
                  </Avatar>
                  <div className="max-w-md rounded-lg px-4 py-2 bg-muted flex items-center">
                      <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                  </div>
               </div>
            )}
          </div>
        </ScrollArea>
        <div className="border-t p-4">
          <form onSubmit={handleQuery} className="flex items-center gap-2">
            <Input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="e.g., 'What was the main design challenge?'"
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
      </CardContent>
    </Card>
  );
}
