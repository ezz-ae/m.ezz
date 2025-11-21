// src/components/demos/NotefullDemo.tsx
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
        body: JSON.stringify({ text: input }),
      });
      const data = await response.json();
      
      setOutput(data.crystallized_thought); 
      setStatus('CRYSTALLIZED');
    } catch (error) {
      console.error("Kernel Error", error);
      setStatus('ERROR');
      setOutput('Error synthesizing thought. The reflection engine may be offline.');
    }
  };

  const isProcessing = status !== 'IDLE' && status !== 'CRYSTALLIZED' && status !== 'ERROR';

  return (
    <div className="w-full max-w-2xl mx-auto bg-black border border-gray-800 p-6 rounded-lg font-mono text-sm">
      <div className="flex justify-between mb-4 text-gray-500 uppercase tracking-widest text-xs">
        <span>L3: Memory Fabric</span>
        <span>Status: {status}</span>
      </div>

      <div className="mb-6">
        <label className="block text-gray-400 mb-2">RAW INPUT (High Resonance)</label>
        <textarea
          className="w-full bg-gray-900 text-white p-4 rounded border border-gray-700 focus:border-blue-500 outline-none transition-all"
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
                className="mb-6 border-l-2 border-white pl-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
            >
            <label className="block text-gray-400 mb-2">CRYSTALLIZED MEMORY (Low Resonance)</label>
            <p className={`text-lg leading-relaxed ${status === 'ERROR' ? 'text-red-400' : 'text-white'}`}>{output}</p>
            {status === 'CRYSTALLIZED' && (
                <div className="mt-2 text-xs text-gray-500">
                    Saved to Omega Anchor • Anxiety Decayed by 85%
                </div>
            )}
            </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={runGenesisCycle}
        disabled={isProcessing}
        className="w-full py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isProcessing ? 'CALCULATING...' : 'INITIATE REFLECTION'}
      </button>
    </div>
  );
};

export default NotefullDemo;
