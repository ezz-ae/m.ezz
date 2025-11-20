
// src/components/notebooks/NotebookQueryInterface.tsx
'use client';

import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send, Loader2, BrainCircuit, Wand2, Sparkles } from 'lucide-react';
import { queryLivingNotebook } from '@/lib/actions';
import { useStudioStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { AIAction } from './notebook-data';

type NotebookQueryInterfaceProps = {
  slug: string;
  aiActions: AIAction[];
  autothinkerActions: AIAction[];
};

export function NotebookQueryInterface({ slug, aiActions, autothinkerActions }: NotebookQueryInterfaceProps) {
  NotebookQueryInterface.displayName = 'NotebookQueryInterface';
  const { query, setQuery } = useStudioStore();
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const executeQuery = async (currentQuery: string) => {
    if (!currentQuery.trim()) return;

    setIsLoading(true);
    setAnswer('');
    setError(null);
    setQuery(currentQuery); // Update the input field for user visibility

    const result = await queryLivingNotebook({ query: currentQuery, slug });

    if (result.error) {
      setError(result.error);
    } else {
      setAnswer(result.data || 'No answer was returned.');
    }
    setIsLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    executeQuery(query);
  };

  const handleActionClick = (prompt: string) => {
    executeQuery(prompt);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative">
        <h2 className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6 flex items-center gap-3">
          <BrainCircuit size={16} />
          Query This Notebook
        </h2>
        
        {/* Response Area */}
        {(isLoading || answer || error) && (
            <motion.div 
              className="prose prose-neutral dark:prose-invert prose-p:text-foreground/80 prose-p:leading-relaxed bg-muted rounded-lg p-6 mb-6 min-h-[100px]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
            {isLoading && (
                <div className="flex items-center gap-3 text-muted-foreground">
                    <Loader2 size={16} className="animate-spin" />
                    <span>Thinking...</span>
                </div>
            )}
            {error && <p className="text-red-500">{error}</p>}
            {answer && <p>{answer}</p>}
            </motion.div>
        )}
        
        {/* Autothinker Actions */}
        <div className="mb-6 bg-gradient-to-br from-orange-500/10 to-transparent p-4 rounded-lg border border-orange-500/20">
            <h3 className="text-xs tracking-widest uppercase text-orange-400 mb-3 flex items-center gap-2">
                <Sparkles size={14}/>
                Autothinker Actions
            </h3>
            <div className="flex flex-wrap gap-2">
                {autothinkerActions.map((action, index) => (
                    <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleActionClick(action.prompt)}
                        disabled={isLoading}
                        className="text-orange-300 border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-200"
                    >
                        {action.title}
                    </Button>
                ))}
            </div>
        </div>

        {/* Default AI Actions */}
        <div className="mb-4">
            <h3 className="text-xs tracking-widest uppercase text-muted-foreground mb-3 flex items-center gap-2">
                <Wand2 size={14}/>
                Standard Queries
            </h3>
            <div className="flex flex-wrap gap-2">
                {aiActions.map((action, index) => (
                    <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleActionClick(action.prompt)}
                        disabled={isLoading}
                        className="text-neutral-300"
                    >
                        {action.title}
                    </Button>
                ))}
            </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="flex items-start gap-3 mt-6">
          <Textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask a custom question or select an action above..."
            className="bg-background border-input text-base flex-grow min-h-[50px] resize-none"
            disabled={isLoading}
            rows={2}
          />
          <Button type="submit" size="icon" className="h-12 w-12 flex-shrink-0" disabled={isLoading}>
            <Send size={18} />
          </Button>
        </form>
         <p className="text-xs text-muted-foreground mt-3">
            Engage with this notebook's memory fabric. The Autothinker actions prompt the AI to perform self-analysis, while standard queries retrieve foundational knowledge.
        </p>
      </div>
    </div>
  );
}
