
// src/components/notebooks/SmartNotebook.tsx
'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

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
        for (let i = 0; i < 12; i++) {
            points.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 1.5,
                vy: (Math.random() - 0.5) * 1.5,
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
                ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255,127,80,0.6)';
                ctx.fill();
            });
            animationFrameId = requestAnimationFrame(drawSim);
        };

        drawSim();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="w-full h-full rounded-xl" />;
};

const defaultContent = [
    "Explore AI-assisted project simulation for decision-making and problem solving.",
    "Core modules include Resource Allocation, Market Dynamics, Decision Analysis, and Adaptive Learning.",
    "Each visit reshapes the notebook to provide new insights and perspectives."
];

const initialWords = ["Simulation", "Resource", "Decision", "Market", "AI"];

export const SmartNotebook = ({ slug }: { slug: string }) => {
    const [summary, setSummary] = useState('');
    const [words, setWords] = useState<string[]>(initialWords);
    const [panel, setPanel] = useState({ active: false, title: '', content: '' });
    const [notes, setNotes] = useState<string[]>([]);
    const [noteInput, setNoteInput] = useState('');
    const [deepThoughts, setDeepThoughts] = useState<string[]>([]);
    const [deepInput, setDeepInput] = useState('');

    const dragItem = useRef<number | null>(null);
    const dragOverItem = useRef<number | null>(null);

    // --- Effects for Initialization and Persistence ---
    useEffect(() => {
        // Load notes from localStorage
        const savedNotes = localStorage.getItem(`notes_${slug}`);
        if (savedNotes) setNotes(JSON.parse(savedNotes));

        // Load deep thoughts from localStorage
        const savedDeepThoughts = localStorage.getItem(`deepThoughts_${slug}`);
        if (savedDeepThoughts) setDeepThoughts(JSON.parse(savedDeepThoughts));

        // Load word order from localStorage
        const savedWordOrder = localStorage.getItem(`wordOrder_${slug}`);
        const initialWordOrder = savedWordOrder ? JSON.parse(savedWordOrder) : initialWords;
        setWords(initialWordOrder);

        // Set initial summary content based on word order
        rebuildSummary(initialWordOrder);

    }, [slug]);

    const rebuildSummary = useCallback((currentWords: string[]) => {
        if (currentWords.every((val, index) => val === initialWords[index])) {
            const shuffled = [...defaultContent].sort(() => Math.random() - 0.5);
            setSummary(shuffled.join(' '));
        } else {
            setSummary(`Adaptive View: emphasizing ${currentWords.join(', ')}. This perspective dynamically adjusts the notebook layout and highlights emergent insights for your project.`);
        }
    }, []);

    // --- Event Handlers ---
    const handleHighlightClick = (title: string, content: string) => {
        setPanel({ active: true, title, content });
    };

    const handleAddNote = () => {
        if (noteInput.trim() === '') return;
        const newNotes = [...notes, noteInput];
        setNotes(newNotes);
        localStorage.setItem(`notes_${slug}`, JSON.stringify(newNotes));
        setNoteInput('');
    };

    const handleSubmitDeepThought = () => {
        if (deepInput.trim() === '') return;
        const newDeepThoughts = [...deepThoughts, deepInput];
        setDeepThoughts(newDeepThoughts);
        localStorage.setItem(`deepThoughts_${slug}`, JSON.stringify(newDeepThoughts));
        setDeepInput('');
    };
    
    const handleDragSort = () => {
        if (dragItem.current === null || dragOverItem.current === null) return;
        
        let _words = [...words];
        const draggedItemContent = _words.splice(dragItem.current, 1)[0];
        _words.splice(dragOverItem.current, 0, draggedItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setWords(_words);
    };

    const handleRebuildClick = () => {
        rebuildSummary(words);
        localStorage.setItem(`wordOrder_${slug}`, JSON.stringify(words));
    }


    return (
        <>
            <style jsx>{`
                .section { background: rgba(255,127,80,0.05); padding:30px; border-radius:20px; margin-bottom:40px; box-shadow:0 0 50px rgba(255,127,80,0.1); transition: transform 0.4s ease; }
                .section:hover { transform: scale(1.02); }
                .block { margin:20px 0; }
                .block p { line-height:1.6; }
                .block .highlight { background: rgba(255,127,80,0.15); padding:5px 8px; border-radius:5px; cursor:pointer; transition: background 0.3s; }
                .block .highlight:hover { background: rgba(255,127,80,0.3); }
                #simulation { background:#111; padding:20px; border-radius:20px; box-shadow:0 0 80px rgba(255,127,80,0.3); }
                #simulation canvas { width:100%; height:300px; border-radius:15px; }
                .word-relevance { display:flex; flex-wrap:wrap; gap:10px; justify-content:center; margin:20px 0; }
                .word { background:#ff7f50; padding:8px 15px; border-radius:10px; cursor:grab; user-select:none; transition:0.3s; }
                .word:active { cursor:grabbing; }
                .dragging { opacity:0.5; transform:scale(1.1); }
                #notesList > div, #deepList > div { background:#1f1f1f; padding:10px 15px; border-radius:10px; margin:8px 0; border: 1px solid #2a2a2a; }
            `}</style>

            <div className="container max-w-4xl mx-auto py-16 px-4">
                <h1 className="text-center text-4xl md:text-5xl font-light mb-10">Intelligent Notebook</h1>

                {/* Adaptive Project Summary */}
                <motion.div className="section" id="summary" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                    <h2>Project Summary</h2>
                    <div className="block">
                        <p>{summary}</p>
                    </div>
                </motion.div>
                
                {/* Word Relevance */}
                <motion.div className="section" id="wordSection" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <h2>Rebuild Content by Relevance</h2>
                    <p className="text-center text-sm text-neutral-400">Drag and reorder these key words according to your perspective.</p>
                    <div className="word-relevance">
                        {words.map((word, index) => (
                            <div
                                key={word}
                                className="word"
                                draggable
                                onDragStart={() => dragItem.current = index}
                                onDragEnter={() => dragOverItem.current = index}
                                onDragEnd={handleDragSort}
                                onDragOver={(e) => e.preventDefault()}
                            >
                                {word}
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <Button onClick={handleRebuildClick}>Rebuild Section</Button>
                    </div>
                </motion.div>

                {/* Simulation Panel */}
                <motion.div className="section" id="simulation" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <h2>Simulation Panel</h2>
                    <div className="h-64 md:h-80 w-full">
                        <SimulationCanvas />
                    </div>
                </motion.div>

                {/* Smart Contribution */}
                <motion.div className="section" id="contribution" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                    <h2>Smart Contribution</h2>
                    <p className="text-sm text-neutral-400">Type your idea or select a highlighted concept above:</p>
                    <Textarea 
                        value={noteInput}
                        onChange={(e) => setNoteInput(e.target.value)}
                        placeholder="Write your note or insight here..." 
                        className="bg-neutral-800 border-neutral-700 mt-2"
                    />
                    <Button onClick={handleAddNote} className="mt-2">Add Note</Button>
                    <div id="notesList">
                        {notes.map((note, i) => <div key={i}>{note}</div>)}
                    </div>
                </motion.div>

                {/* Deep Thinking */}
                <motion.div className="section" id="deepThinking" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                    <h2>Deep Thinking & Collaboration</h2>
                    <p className="text-sm text-neutral-400">Share your thoughts, ask for validation, or brainstorm live:</p>
                    <Textarea 
                        value={deepInput}
                        onChange={(e) => setDeepInput(e.target.value)}
                        placeholder="Think deeply and write here..."
                        className="bg-neutral-800 border-neutral-700 mt-2"
                    />
                    <Button onClick={handleSubmitDeepThought}>Submit Thought</Button>
                    <div id="deepList">
                        {deepThoughts.map((thought, i) => <div key={i}>{thought}</div>)}
                    </div>
                </motion.div>
            </div>

            {/* Panel */}
            <AnimatePresence>
                {panel.active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 z-40"
                        onClick={() => setPanel({ ...panel, active: false })}
                    />
                )}
            </AnimatePresence>
             <AnimatePresence>
                {panel.active && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: '-50%', x: '-50%' }}
                        animate={{ opacity: 1, scale: 1, y: '-50%', x: '-50%' }}
                        exit={{ opacity: 0, scale: 0.95, y: '-50%', x: '-50%' }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="fixed top-1/2 left-1/2 w-[90%] max-w-2xl bg-neutral-900 border border-neutral-700 rounded-2xl p-8 shadow-2xl z-50"
                    >
                        <button onClick={() => setPanel({ ...panel, active: false })} className="absolute top-4 right-4 text-neutral-400 hover:text-white">
                            <X size={20} />
                        </button>
                        <h2 className="text-xl text-orange-400 font-light mb-4">{panel.title}</h2>
                        <p className="text-neutral-300">{panel.content}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
