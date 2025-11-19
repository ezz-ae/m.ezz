// src/components/notebooks/SmartNotebook.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { NOTEBOOKS, isNotebookId } from './notebook-data';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

// Simplified simulation logic inside the component
const SimulationCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let points: any[] = [];
    for (let i = 0; i < 10; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
      });
    }

    let animationFrameId: number;

    const drawSim = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      points.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,127,80,0.5)';
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(drawSim);
    };

    drawSim();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};


export const SmartNotebook = ({ slug }: { slug: string }) => {
    const [panelActive, setPanelActive] = useState(false);
    const [panelTitle, setPanelTitle] = useState('');
    const [panelContent, setPanelContent] = useState('');

    const [notes, setNotes] = useState<string[]>([]);
    const [noteInput, setNoteInput] = useState('');

    const [deepThoughts, setDeepThoughts] = useState<string[]>([]);
    const [deepInput, setDeepInput] = useState('');

    const notebookData = isNotebookId(slug) ? NOTEBOOKS[slug] : null;

    const handleHighlightClick = () => {
        setPanelTitle("Interactive Insight");
        setPanelContent("This section can be annotated and simulated dynamically. You can contribute or explore this element further.");
        setPanelActive(true);
    };

    const handleAddNote = () => {
        if (noteInput.trim() === '') return;
        setNotes(prev => [...prev, noteInput]);
        setNoteInput('');
    };

    const handleSubmitDeepThought = () => {
        if (deepInput.trim() === '') return;
        setDeepThoughts(prev => [...prev, deepInput]);
        setDeepInput('');
    };

    return (
        <div className="max-w-4xl mx-auto py-16 px-4">
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="section-container"
                id="summary"
            >
                <h2 className="section-title">Project Summary</h2>
                <div className="block">
                    <p>Our project focuses on <span className="highlight" onClick={handleHighlightClick}>AI-assisted economic simulation</span> for problem-solving. <span className="highlight" onClick={handleHighlightClick}>Users can explore</span> different scenarios and interact with the model.</p>
                </div>
                <div className="block">
                    <p>Key modules include <span className="highlight" onClick={handleHighlightClick}>Resource Allocation</span>, <span className="highlight" onClick={handleHighlightClick}>Market Dynamics</span>, and <span className="highlight" onClick={handleHighlightClick}>Decision Analysis</span>.</p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="section-container"
                id="simulation"
            >
                <h2 className="section-title">Simulation Panel</h2>
                <div className="h-64 md:h-80 w-full rounded-lg overflow-hidden">
                    <SimulationCanvas />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="section-container"
                id="contribution"
            >
                <h2 className="section-title">Smart Contribution</h2>
                <p className="text-sm text-neutral-400">Select a word or sentence above and add your idea:</p>
                <Textarea 
                    value={noteInput}
                    onChange={(e) => setNoteInput(e.target.value)}
                    placeholder="Write your note or insight here..." 
                    className="bg-neutral-900 border-neutral-700 mt-2"
                />
                <Button onClick={handleAddNote} className="mt-2 bg-orange-600 hover:bg-orange-700 text-white">Add Note</Button>
                <div className="mt-4 space-y-2">
                    {notes.map((note, i) => <div key={i} className="text-sm p-3 bg-neutral-800/50 rounded-md">{note}</div>)}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="section-container"
                id="deepThinking"
            >
                <h2 className="section-title">Deep Thinking & Collaboration</h2>
                <p className="text-sm text-neutral-400">Share your thoughts, ask for validation, or brainstorm live:</p>
                <Textarea 
                    value={deepInput}
                    onChange={(e) => setDeepInput(e.target.value)}
                    placeholder="Think deeply and write here..."
                    className="bg-neutral-900 border-neutral-700 mt-2"
                />
                <Button onClick={handleSubmitDeepThought} className="mt-2 bg-orange-600 hover:bg-orange-700 text-white">Submit Thought</Button>
                 <div className="mt-4 space-y-2">
                    {deepThoughts.map((thought, i) => <div key={i} className="text-sm p-3 bg-neutral-800/50 rounded-md">{thought}</div>)}
                </div>
            </motion.div>

             {/* Panel */}
            <div className={cn("fixed inset-0 bg-black/60 z-40 transition-opacity", panelActive ? "opacity-100" : "opacity-0 pointer-events-none")} onClick={() => setPanelActive(false)} />
            <div className={cn("notebook-panel fixed top-1/2 left-1/2 w-[90%] max-w-2xl bg-neutral-900 border border-neutral-700 rounded-2xl p-8 shadow-2xl z-50 transition-all", 
                panelActive ? "opacity-100 scale-100 -translate-x-1/2 -translate-y-1/2" : "opacity-0 scale-95 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            )}>
                <button onClick={() => setPanelActive(false)} className="absolute top-4 right-4 text-neutral-400 hover:text-white">
                    <X size={20} />
                </button>
                <h2 className="text-xl text-orange-400 font-light mb-4">{panelTitle}</h2>
                <p className="text-neutral-300">{panelContent}</p>
            </div>


            <style jsx>{`
                .section-container {
                    background: rgba(255, 127, 80, 0.05);
                    padding: 2rem;
                    border-radius: 20px;
                    margin-bottom: 2.5rem;
                    box-shadow: 0 0 50px rgba(255, 127, 80, 0.1);
                    transition: transform 0.4s ease;
                }
                .section-container:hover {
                    transform: scale(1.02);
                }
                .section-title {
                    font-family: 'Playfair Display', serif;
                    margin-bottom: 1rem;
                    color: #ff7f50;
                    font-size: 1.75rem;
                    font-weight: 300;
                }
                .block { margin: 1rem 0; }
                .block p { line-height: 1.6; color: #d4d4d4; }
                .highlight { 
                    background: rgba(255, 127, 80, 0.15); 
                    padding: 2px 6px; 
                    border-radius: 5px; 
                    cursor: pointer; 
                    transition: background 0.3s;
                }
                .highlight:hover {
                    background: rgba(255, 127, 80, 0.3);
                }
                #simulation {
                     background:#111;
                     box-shadow:0 0 80px rgba(255,127,80,0.3);
                }
            `}</style>
        </div>
    );
};
