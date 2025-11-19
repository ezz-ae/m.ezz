// src/components/notebooks/SmartNotebook.tsx
'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

// --- Canvas Simulation Component ---
const SimulationCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let parentElement = canvas.parentElement;

        const resizeCanvas = () => {
             if (parentElement) {
                canvas.width = parentElement.offsetWidth;
                canvas.height = parentElement.offsetHeight;
            }
        };

        let points: any[] = [];
        const initPoints = () => {
            points = [];
            for (let i = 0; i < 15; i++) {
                points.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 1,
                    vy: (Math.random() - 0.5) * 1,
                });
            }
        }

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
                ctx.fillStyle = 'rgba(255,127,80,0.4)';
                ctx.fill();
            });
            animationFrameId = requestAnimationFrame(drawSim);
        };
        
        const init = () => {
            if(!parentElement) return;
            resizeCanvas();
            initPoints();
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            drawSim();
        }
        
        const timeoutId = setTimeout(init, 100);
        
        const resizeObserver = new ResizeObserver(() => init());
        if (parentElement) {
            resizeObserver.observe(parentElement);
        }

        return () => {
            clearTimeout(timeoutId);
            if (parentElement) {
                resizeObserver.unobserve(parentElement);
            }
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="w-full h-full rounded-xl" />;
};


// --- Localization Data ---
const translations = {
  EN:{
      wordDesc:"These words guide AI focus and notebook evolution:",contribDesc:"Type your idea or select a directional word above:",addNote:"Add Note",
      deepDesc:"Share your thoughts, ask for validation, or brainstorm live:",submitDeep:"Submit Thought"},
  AR:{
      wordDesc:"هذه الكلمات توجه تركيز الذكاء الاصطناعي وتطور الدفتر:",contribDesc:"اكتب فكرتك أو اختر كلمة توجيهية أعلاه:",addNote:"أضف ملاحظة",
      deepDesc:"شارك أفكارك واطلب التحقق أو تبادل الأفكار:",submitDeep:"إرسال الفكرة"}
};

// --- Main SmartNotebook Component ---
const initialWords = ["Simulation","Resource","Decision","Market","AI","Strategy","Innovation","Risk","Learning","Flow"];

export const SmartNotebook = ({ slug }: { slug: string }) => {
    const [lang, setLang] = useState('EN');
    const [t, setT] = useState(translations.EN);
    
    const [summary, setSummary] = useState<string[]>([]);
    const [notes, setNotes] = useState<string[]>([]);
    const [deepThoughts, setDeepThoughts] = useState<string[]>([]);
    const [directionalWords, setDirectionalWords] = useState<{[key: string]: { size: number; opacity: number } }>({});
    
    const [noteInput, setNoteInput] = useState('');
    const [deepInput, setDeepInput] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    
    const [panel, setPanel] = useState({ active: false, title: '', content: '' });

    const autothinkerUpdate = useCallback(() => {
        const allContent = [...notes, ...deepThoughts];
        
        const scoredNotes = allContent.map(n => {
            let score = n.length;
            initialWords.forEach(w => { if (n.toLowerCase().includes(w.toLowerCase())) score += 20; });
            score += Math.random() * 10;
            return { text: n, score };
        });
        scoredNotes.sort((a, b) => b.score - a.score);
        
        const newSummary = scoredNotes.length > 0 ? scoredNotes.slice(0, 3).map(s => s.text) : ["The notebook is awaiting your thoughts to begin its evolution."];
        setSummary(newSummary);

        const wordRelevance: {[key: string]: { size: number; opacity: number } } = {};
        const totalNotes = allContent.length || 1;
        initialWords.forEach(w => {
            const relevanceCount = scoredNotes.filter(n => n.text.toLowerCase().includes(w.toLowerCase())).length;
            const relevanceRatio = relevanceCount / Math.max(totalNotes, 5);
            
            wordRelevance[w] = {
                size: 14 + relevanceCount * 3 + Math.random() * 4,
                opacity: 0.1 + Math.min(relevanceRatio * 2.5, 0.9)
            };
        });
        setDirectionalWords(wordRelevance);

    }, [notes, deepThoughts]);
    
    useEffect(() => {
        const savedLang = localStorage.getItem(`lang_${slug}`) || 'EN';
        setLanguage(savedLang);
        
        const savedNotes = localStorage.getItem(`notes_${slug}`);
        setNotes(savedNotes ? JSON.parse(savedNotes) : []);

        const savedDeepThoughts = localStorage.getItem(`deepThoughts_${slug}`);
        setDeepThoughts(savedDeepThoughts ? JSON.parse(savedDeepThoughts) : []);
        
        const intervalId = setInterval(autothinkerUpdate, 10000);
        
        // Initial run
        setTimeout(autothinkerUpdate, 100);

        return () => clearInterval(intervalId);
    }, [slug, autothinkerUpdate]);

    const setLanguage = (lang: string) => {
        setLang(lang);
        setT(translations[lang as keyof typeof translations]);
        localStorage.setItem(`lang_${slug}`, lang);
        if (typeof window !== 'undefined') {
            document.documentElement.dir = lang === 'AR' ? 'rtl' : 'ltr';
        }
    };

    const handleAddNote = () => {
        if (noteInput.trim() === '') return;
        const newNotes = [...notes, noteInput];
        setNotes(newNotes);
        localStorage.setItem(`notes_${slug}`, JSON.stringify(newNotes));
        setNoteInput('');
        setSuggestions([]);
        autothinkerUpdate();
    };

    const handleSubmitDeepThought = () => {
        if (deepInput.trim() === '') return;
        const newDeepThoughts = [...deepThoughts, deepInput];
        setDeepThoughts(newDeepThoughts);
        localStorage.setItem(`deepThoughts_${slug}`, JSON.stringify(newDeepThoughts));
        setDeepInput('');
        autothinkerUpdate();
    };
    
    const handleNoteInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setNoteInput(value);
        if(!value.trim()){
            setSuggestions([]);
            return;
        }
        const inputWords = value.toLowerCase().split(/\s+/).filter(w => w.length > 2);
        const lastWord = inputWords[inputWords.length - 1];
        
        if (!lastWord) {
            setSuggestions([]);
            return;
        }

        const newSuggestions = initialWords.filter(w => w.toLowerCase().startsWith(lastWord) && w.toLowerCase() !== lastWord);
        setSuggestions(newSuggestions.slice(0, 5));
    };
    
    const applySuggestion = (suggestion: string) => {
        const words = noteInput.split(/\s+/);
        words.pop();
        setNoteInput([...words, suggestion, ''].join(' '));
        setSuggestions([]);
        noteInputRef.current?.focus();
    };

    const handleWordClick = (word: string) => {
        setPanel({
            active: true,
            title: `Focus: ${word}`,
            content: `The Autothinker is now prioritizing concepts related to "${word}". Future summaries and insights will be weighted towards this theme.`
        });
    };

    const noteInputRef = useRef<HTMLTextAreaElement>(null);

    return (
        <div className="prose prose-invert max-w-4xl mx-auto py-8">

            <div className="fixed top-20 right-5 z-50 cursor-pointer rounded-lg bg-primary px-3 py-2 text-sm font-bold text-primary-foreground" onClick={() => setLanguage(lang === 'EN' ? 'AR' : 'EN')}>
                 🌐 {lang}
            </div>

            <div className="space-y-12">

                <motion.div className="rounded-2xl p-8 bg-neutral-900/50" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                    <h2 className="text-lg font-light text-orange-400 mb-4">Evolving Summary</h2>
                    {summary.map((line, i) => <p key={`summary-${i}`} className="text-neutral-300 text-base leading-relaxed">{line}</p>)}
                </motion.div>
                
                <motion.div className="rounded-2xl p-8 bg-neutral-900/50" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <h2 className="text-lg font-light text-orange-400 mb-2">Directional Words</h2>
                    <p className="text-sm text-neutral-400 mb-4">{t.wordDesc}</p>
                    <div className="flex flex-wrap gap-4 justify-center min-h-[12rem] items-center p-4 rounded-xl bg-black/30">
                       {Object.entries(directionalWords).map(([word, { size, opacity }]) => (
                            <motion.div 
                                key={word}
                                className="word rounded-full cursor-pointer text-center border border-orange-400/50" 
                                style={{ 
                                    fontSize: `${size}px`,
                                    backgroundColor: `rgba(255, 127, 80, ${opacity})`,
                                    color: opacity > 0.4 ? '#fff' : '#ffaf8a',
                                    padding: `${size/4}px ${size/2}px`,
                                }}
                                whileHover={{ scale: 1.15, zIndex: 10, boxShadow: '0 0 20px rgba(255, 127, 80, 0.7)'}}
                                onClick={() => handleWordClick(word)}
                            >
                                {word}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div className="rounded-2xl p-8 bg-neutral-900/50" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <h2 className="text-lg font-light text-orange-400 mb-4">Live Simulation</h2>
                    <div className="h-64 w-full md:h-80 bg-black/30 rounded-xl">
                        <SimulationCanvas />
                    </div>
                </motion.div>

                <motion.div className="rounded-2xl p-8 bg-neutral-900/50" id="contribution" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                    <h2 className="text-lg font-light text-orange-400 mb-2">Smart Contribution</h2>
                    <p className="text-sm text-neutral-400">{t.contribDesc}</p>
                    <Textarea 
                        ref={noteInputRef}
                        value={noteInput}
                        onChange={handleNoteInputChange}
                        placeholder="Write your note or insight here..." 
                        className="mt-2 bg-neutral-800 border-neutral-700"
                    />
                    <div className="mt-2 flex flex-wrap gap-2">
                        {suggestions.map(s => (
                            <Button key={s} variant="outline" size="sm" className="bg-orange-400/20 border-orange-400/50 hover:bg-orange-400/30" onClick={() => applySuggestion(s)}>{s}</Button>
                        ))}
                    </div>
                    <Button onClick={handleAddNote} className="mt-2">{t.addNote}</Button>
                    <div className="notes-list mt-4 space-y-2">
                        {notes.map((note, i) => <div key={`note-${i}`} className="p-3 rounded-lg bg-black/20 text-sm text-neutral-300">{note}</div>)}
                    </div>
                </motion.div>

                <motion.div className="rounded-2xl p-8 bg-neutral-900/50" id="deepThinking" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                    <h2 className="text-lg font-light text-orange-400 mb-2">Deep Thinking & Collaboration</h2>
                    <p className="text-sm text-neutral-400">{t.deepDesc}</p>
                    <Textarea 
                        value={deepInput}
                        onChange={(e) => setDeepInput(e.target.value)}
                        placeholder="Think deeply and write here..."
                        className="mt-2 bg-neutral-800 border-neutral-700"
                    />
                    <Button onClick={handleSubmitDeepThought} className="mt-2">{t.submitDeep}</Button>
                     <div className="deep-list mt-4 space-y-2">
                        {deepThoughts.map((thought, i) => <div key={`deep-${i}`} className="p-3 rounded-lg bg-black/20 text-sm text-neutral-300">{thought}</div>)}
                    </div>
                </motion.div>
            </div>

            <AnimatePresence>
                {panel.active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
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
                        className="fixed top-1/2 left-1/2 z-50 w-[90%] max-w-2xl rounded-2xl border border-neutral-700 bg-neutral-900 p-8 shadow-2xl"
                    >
                        <button onClick={() => setPanel({ ...panel, active: false })} className="absolute top-4 right-4 text-neutral-400 hover:text-white">
                            <X size={20} />
                        </button>
                        <h2 className="mb-4 text-xl font-light text-orange-400">{panel.title}</h2>
                        <p className="text-neutral-300">{panel.content}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
