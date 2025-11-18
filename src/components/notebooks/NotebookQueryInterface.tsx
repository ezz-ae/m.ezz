// src/components/notebooks/NotebookQueryInterface.tsx
'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send, Loader2, BrainCircuit } from 'lucide-react';
import { queryLivingNotebook } from '@/lib/actions';
import { useStudioStore } from '@/lib/store';
import { motion } from 'framer-motion';

type NotebookQueryInterfaceProps = {
  slug: string;
};

export function NotebookQueryInterface({ slug }: NotebookQueryInterfaceProps) {
  NotebookQueryInterface.displayName = 'NotebookQueryInterface';
  const { query, setQuery } = useStudioStore();
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setAnswer('');
    setError(null);

    const result = await queryLivingNotebook({ query, slug });

    if (result.error) {
      setError(result.error);
    } else {
      setAnswer(result.data || 'No answer was returned.');
    }
    setIsLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="relative border-t border-white/10 pt-10">
        <h2 className="text-sm tracking-[0.3em] uppercase text-neutral-400 mb-6 flex items-center gap-3">
          <BrainCircuit size={16} />
          Query This Notebook
        </h2>
        
        {/* Response Area */}
        {(isLoading || answer || error) && (
            <motion.div 
              className="prose prose-invert prose-p:text-neutral-300 prose-p:leading-relaxed bg-white/5 rounded-lg p-6 mb-6 min-h-[100px]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
            {isLoading && (
                <div className="flex items-center gap-3 text-neutral-400">
                    <Loader2 size={16} className="animate-spin" />
                    <span>Thinking...</span>
                </div>
            )}
            {error && <p className="text-red-400">{error}</p>}
            {answer && <p>{answer}</p>}
            </motion.div>
        )}

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="flex items-center gap-3">
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask a question..."
            className="bg-neutral-900 border-neutral-700 h-12 text-base flex-grow"
            disabled={isLoading}
          />
          <Button type="submit" size="icon" className="h-12 w-12" disabled={isLoading}>
            <Send size={18} />
          </Button>
        </form>
         <p className="text-xs text-neutral-600 mt-3">
            Ask a question to query the memory fabric of this specific notebook. The AI will answer based only on its core knowledge.
        </p>
      </div>
    </div>
  );
}
