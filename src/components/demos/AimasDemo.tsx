// src/components/demos/AimasDemo.tsx
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Loader2 } from 'lucide-react';

const AimasDemo = () => {
  const [intent, setIntent] = useState('');
  const [calculating, setCalculating] = useState(false);
  const [result, setResult] = useState<null | { certainty: string, speed: string, ink_cost: string, match: string }>(null);

  const calculateFit = async () => {
    if (!intent.trim()) return;
    setCalculating(true);
    setResult(null);
    
    // SIMULATE CFS CALCULATION TIME
    await new Promise(r => setTimeout(r, 1500));
    
    // SIMULATED BACKEND RESPONSE 
    // In a real app, Gemini analyzes the intent and returns these stats.
    const mockResult = {
      certainty: `${(85 + Math.random() * 14).toFixed(1)}%`,
      speed: `${Math.floor(8 + Math.random() * 10)}m`,
      ink_cost: `${(3 + Math.random() * 4).toFixed(1)}`,
      match: "EXECUTION VERIFIED"
    };
    
    setResult(mockResult);
    setCalculating(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-card border border-border p-6 rounded-lg font-mono text-sm">
      <div className="flex justify-between mb-4 text-muted-foreground uppercase tracking-widest text-xs">
        <span>L11: AIMAS Intent Engine</span>
        <span>Currency: INK</span>
      </div>

      <div className="flex gap-2 mb-8">
        <Input
          type="text"
          placeholder="Enter Intent (e.g. 'Find a workspace, quiet, no tours')"
          className="flex-1 bg-background p-3 rounded border-input focus:border-primary outline-none"
          value={intent}
          onChange={(e) => setIntent(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && calculateFit()}
          disabled={calculating}
        />
        <Button
          onClick={calculateFit}
          className="px-6 bg-green-600 text-white font-bold uppercase hover:bg-green-500 disabled:bg-muted disabled:cursor-not-allowed"
          disabled={calculating || !intent.trim()}
        >
          {calculating ? <Loader2 className="animate-spin h-4 w-4" /> : 'CALCULATE'}
        </Button>
      </div>

      <div className="h-40">
        <AnimatePresence mode="wait">
            {calculating ? (
                <motion.div 
                    key="calculating"
                    className="text-center text-primary animate-pulse py-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                RUNNING CALCULATED FITTING SYSTEM (CFS)...
                </motion.div>
            ) : result ? (
                <motion.div 
                    key="result"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="bg-secondary p-4 rounded border border-border">
                            <div className="text-xs text-muted-foreground mb-1">CERTAINTY</div>
                            <div className="text-2xl text-foreground font-bold">{result.certainty}</div>
                        </div>

                        <div className="bg-secondary p-4 rounded border border-border">
                            <div className="text-xs text-muted-foreground mb-1">SPEED</div>
                            <div className="text-2xl text-foreground font-bold">{result.speed}</div>
                        </div>

                        <div className="bg-secondary p-4 rounded border border-green-900/30">
                            <div className="text-xs text-muted-foreground mb-1">INK MINED</div>
                            <div className="text-2xl text-green-400 font-bold">+{result.ink_cost}</div>
                        </div>
                        
                        <div className="col-span-3 mt-4 p-3 bg-green-500/10 border border-green-500/30 text-green-400">
                            STATUS: {result.match}
                        </div>
                    </div>
                </motion.div>
            ) : (
                <motion.div 
                    key="waiting"
                    className="text-center text-muted-foreground/60 py-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    WAITING FOR INTENT SIGNAL...
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AimasDemo;
