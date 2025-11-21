// src/components/demos/NotefullDemo.tsx
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';

const NotefullDemo = () => {
  const [input, setInput] = useState('');
  const [status, setStatus] = useState('IDLE'); // IDLE, FREQUENCY, RESONANCE, FADE_IN, CRYSTALLIZED
  const [output, setOutput] = useState('');

  const runGenesisCycle = async () => {
    if (!input) return;
    
    setStatus('FREQUENCY'); 
    await new Promise(r => setTimeout(r, 600));
    
    setStatus('RESONANCE'); 
    await new Promise(r => setTimeout(r, 600));
    
    setStatus('FADE_IN'); 
    
    try {
      const response = await fetch('/api/genesis-reflection', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: input }),
      });
      const data = await response.json();
      
      if (response.ok) {
        setOutput(data.crystallized_thought); 
        setStatus('CRYSTALLIZED');
      } else {
        throw new Error(data.error || "Unknown API error");
      }
    } catch (error) {
      console.error("Kernel Error", error);
      setStatus('ERROR');
      setOutput('Error synthesizing thought. The reflection engine may be offline.');
    }
  };

  const isProcessing = status !== 'IDLE' && status !== 'CRYSTALLIZED' && status !== 'ERROR';

  return (
    <div className="w-full max-w-2xl mx-auto bg-card border border-border p-6 rounded-lg font-mono text-sm">
      <div className="flex justify-between mb-4 text-muted-foreground uppercase tracking-widest text-xs">
        <span>L3: Memory Fabric</span>
        <span>Status: {status}</span>
      </div>

      <div className="mb-6">
        <label className="block text-muted-foreground mb-2">RAW INPUT (High Resonance)</label>
        <Textarea
          className="w-full bg-background text-foreground p-4 rounded border-input focus:border-primary outline-none transition-all"
          rows={3}
          placeholder="Example: 'I am panicking about the deadline! Everything is breaking.'"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <AnimatePresence>
        {isProcessing && (
            <motion.div 
              className="mb-6 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
                <div className="flex items-center text-blue-400">
                    <span className="w-28">FREQUENCY:</span>
                    <div className="h-1 bg-blue-900 w-full rounded overflow-hidden"><div className="h-1 bg-blue-500 w-full rounded animate-pulse"></div></div>
                </div>
                <div className="flex items-center text-red-400">
                    <span className="w-28">RESONANCE:</span>
                    <div className={`h-1 bg-red-900 w-full rounded overflow-hidden transition-all duration-1000 ${status === 'RESONANCE' || status === 'FADE_IN' ? 'opacity-100' : 'opacity-30'}`}>
                        <div className="h-1 bg-red-500 w-full rounded animate-pulse"></div>
                    </div>
                </div>
                <div className="flex items-center text-green-400">
                    <span className="w-28">FADE-IN:</span>
                     <div className={`h-1 bg-green-900 w-full rounded overflow-hidden transition-all duration-1000 ${status === 'FADE_IN' ? 'opacity-100' : 'opacity-30'}`}>
                        <div className="h-1 bg-green-500 w-full rounded animate-pulse"></div>
                     </div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {(status === 'CRYSTALLIZED' || status === 'ERROR') && (
            <motion.div 
                className="mb-6 border-l-2 border-foreground pl-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
            >
            <label className="block text-muted-foreground mb-2">CRYSTALLIZED MEMORY (Low Resonance)</label>
            <p className={`text-lg leading-relaxed ${status === 'ERROR' ? 'text-destructive' : 'text-foreground'}`}>{output}</p>
            {status === 'CRYSTALLIZED' && (
                <div className="mt-2 text-xs text-muted-foreground">
                    Saved to Omega Anchor • Anxiety Decayed by 85%
                </div>
            )}
            </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={runGenesisCycle}
        disabled={isProcessing || !input.trim()}
        className="w-full py-3 bg-primary text-primary-foreground font-bold uppercase tracking-widest hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isProcessing ? <Loader2 className="animate-spin h-4 w-4" /> : 'INITIATE REFLECTION'}
      </Button>
    </div>
  );
};

export default NotefullDemo;
