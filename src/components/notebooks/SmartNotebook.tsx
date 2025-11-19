// src/components/notebooks/SmartNotebook.tsx
'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

// A separate component for the canvas simulation
const SimulationCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        const resizeCanvas = () => {
             if (canvas) {
                canvas.width = canvas.offsetWidth;
                canvas.height = canvas.offsetHeight;
            }
        };
        resizeCanvas();

        let points: any[] = [];
        for (let i = 0; i < 15; i++) {
            points.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
            });
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
                ctx.arc(p.x, p.y, 10, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255,127,80,0.6)';
                ctx.fill();
            });
            animationFrameId = requestAnimationFrame(drawSim);
        };
        
        drawSim();

        window.addEventListener('resize', resizeCanvas);
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="w-full h-full rounded-xl" />;
};


// Localization data
const translations = {
  EN:{title:"Go-One Autonomous AI Notebook – Autothinker",summaryTitle:"Project Summary",wordTitle:"Directional Words",
      wordDesc:"These words guide AI focus and notebook evolution:",simTitle:"Simulation Panel",
      contribTitle:"Smart Contribution",contribDesc:"Type your idea or select a directional word above:",addNote:"Add Note",
      deepTitle:"Deep Thinking & Collaboration",deepDesc:"Share your thoughts, ask for validation, or brainstorm live:",submitDeep:"Submit Thought"},
  AR:{title:"دفتر الملاحظات الذكي المطلق – المفكر الآلي",summaryTitle:"ملخص المشروع",wordTitle:"الكلمات التوجيهية",
      wordDesc:"هذه الكلمات توجه تركيز الذكاء الاصطناعي وتطور الدفتر:",simTitle:"لوحة المحاكاة",
      contribTitle:"المساهمة الذكية",contribDesc:"اكتب فكرتك أو اختر كلمة توجيهية أعلاه:",addNote:"أضف ملاحظة",
      deepTitle:"التفكير العميق والتعاون",deepDesc:"شارك أفكارك واطلب التحقق أو تبادل الأفكار:",submitDeep:"إرسال الفكرة"}
};

// Initial state for directional words
const initialWords = ["Simulation","Resource","Decision","Market","AI","Strategy","Innovation","Risk","Learning","Flow"];

export const SmartNotebook = ({ slug }: { slug: string }) => {
    const [lang, setLang] = useState('EN');
    const [t, setT] = useState(translations.EN);
    
    // Core state
    const [summary, setSummary] = useState<string[]>([]);
    const [notes, setNotes] = useState<string[]>([]);
    const [deepThoughts, setDeepThoughts] = useState<string[]>([]);
    const [directionalWords, setDirectionalWords] = useState<{[key: string]: number}>({});
    
    // Input state
    const [noteInput, setNoteInput] = useState('');
    const [deepInput, setDeepInput] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    
    const [panel, setPanel] = useState({ active: false, title: '', content: '' });

    // Autothinker core logic
    const autothinkerUpdate = useCallback(() => {
        const allContent = [...notes, ...deepThoughts];
        if (allContent.length === 0) {
            setSummary(["The notebook is awaiting your thoughts to begin its evolution."]);
            const initialWordState: {[key: string]: number} = {};
            initialWords.forEach(w => initialWordState[w] = 16);
            setDirectionalWords(initialWordState);
            return;
        };

        // Simple semantic scoring: length + keyword presence + random factor
        const scoredNotes = allContent.map(n => {
            let score = n.length;
            initialWords.forEach(w => { if (n.toLowerCase().includes(w.toLowerCase())) score += 20; });
            score += Math.random() * 10;
            return { text: n, score };
        });
        scoredNotes.sort((a, b) => b.score - a.score);
        
        // Update Summary with top ideas
        setSummary(scoredNotes.slice(0, 5).map(s => s.text));

        // Update Word Cloud sizes based on relevance
        const wordRelevance: {[key: string]: number} = {};
        initialWords.forEach(w => {
            const relevance = scoredNotes.filter(n => n.text.toLowerCase().includes(w.toLowerCase())).length;
            wordRelevance[w] = 16 + relevance * 6 + Math.random() * 10;
        });
        setDirectionalWords(wordRelevance);
    }, [notes, deepThoughts]);
    
    // --- Effects ---
    useEffect(() => {
        // Load persisted data
        const savedLang = localStorage.getItem(`lang_${slug}`) || 'EN';
        setLanguage(savedLang);
        
        const savedNotes = localStorage.getItem(`notes_${slug}`);
        const loadedNotes = savedNotes ? JSON.parse(savedNotes) : [];
        setNotes(loadedNotes);

        const savedDeepThoughts = localStorage.getItem(`deepThoughts_${slug}`);
        const loadedDeepThoughts = savedDeepThoughts ? JSON.parse(savedDeepThoughts) : [];
        setDeepThoughts(loadedDeepThoughts);
        
        // Initial run
        autothinkerUpdate();

        // Run Autothinker update every 10s
        const intervalId = setInterval(autothinkerUpdate, 10000);

        return () => clearInterval(intervalId);
    }, [slug, autothinkerUpdate]);

    const setLanguage = (lang: string) => {
        setLang(lang);
        setT(translations[lang as keyof typeof translations]);
        localStorage.setItem(`lang_${slug}`, lang);
        document.documentElement.dir = lang === 'AR' ? 'rtl' : 'ltr';
    };

    // --- Render Functions for Notes ---
    const renderNotes = () => notes.map((note, i) => <div key={`note-${i}`}>{note}</div>);
    const renderDeepNotes = () => deepThoughts.map((thought, i) => <div key={`deep-${i}`}>{thought}</div>);

    // --- Event Handlers ---
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
        const inputWords = value.split(' ').filter(w => w.length > 2);
        const newSuggestions = inputWords.slice(-5).filter(w => !value.endsWith(w + ' '));
        setSuggestions(newSuggestions);
    };

    const handleWordClick = (word: string) => {
        setPanel({
            active: true,
            title: `Focus: ${word}`,
            content: `The Autothinker is now prioritizing concepts related to "${word}". Future summaries and insights will be weighted towards this theme.`
        });
    };

    return (
        <>
            <style jsx>{`
                .section { background: rgba(255,127,80,0.05); padding:30px; border-radius:20px; margin-bottom:40px; box-shadow:0 0 50px rgba(255,127,80,0.1); transition: transform 0.4s ease; }
                .section:hover { transform: scale(1.02); }
                .block { margin:20px 0; }
                .block p { line-height:1.6; }
                #wordCloud { width:100%; min-height:220px; position:relative; border-radius:20px; background:#111; display:flex; flex-wrap:wrap; align-items:center; justify-content:center; padding:20px; gap:15px; }
                .word { background:#ff7f50; padding:8px 15px; border-radius:10px; cursor:pointer; user-select:none; transition: all 0.5s ease; position:relative; }
                .word:hover { transform:scale(1.2); z-index: 10; box-shadow: 0 0 20px #ff7f50; }
                #simulation { background:#111; padding:20px; border-radius:20px; box-shadow:0 0 80px rgba(255,127,80,0.3); }
                .notes-list > div, .deep-list > div { background:#1f1f1f; padding:10px 15px; border-radius:10px; margin:8px 0; border: 1px solid #2a2a2a; }
                .suggestion { display:inline-block; margin:5px; padding:5px 10px; background:#ff9060; border-radius:8px; cursor:pointer; transition:0.2s; }
                .suggestion:hover { background:#ff7f50; transform:scale(1.1); }
            `}</style>
            
            <div className="language-selector fixed top-4 right-5 z-50 cursor-pointer rounded-lg bg-[#ff7f50] px-3 py-2 font-bold text-white" onClick={() => setLanguage(lang === 'EN' ? 'AR' : 'EN')}>
                 🌐 {lang}
            </div>

            <div className="container mx-auto max-w-4xl py-16 px-4">
                <h1 className="mb-10 text-center text-4xl font-light md:text-5xl">{t.title}</h1>

                <motion.div className="section" id="summary" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                    <h2>{t.summaryTitle}</h2>
                    <div className="block" id="summaryBlock">
                        {summary.map((line, i) => <p key={i}>{line}</p>)}
                    </div>
                </motion.div>
                
                <motion.div className="section" id="wordSection" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <h2>{t.wordTitle}</h2>
                    <p className="text-center text-sm text-neutral-400">{t.wordDesc}</p>
                    <div id="wordCloud">
                       {Object.entries(directionalWords).map(([word, size]) => (
                            <div 
                                key={word} 
                                className="word" 
                                style={{ fontSize: `${size}px`}}
                                onClick={() => handleWordClick(word)}
                            >
                                {word}
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div className="section" id="simulation" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <h2>{t.simTitle}</h2>
                    <div className="h-64 w-full md:h-80">
                        <SimulationCanvas />
                    </div>
                </motion.div>

                <motion.div className="section" id="contribution" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                    <h2>{t.contribTitle}</h2>
                    <p className="text-sm text-neutral-400">{t.contribDesc}</p>
                    <Textarea 
                        value={noteInput}
                        onChange={handleNoteInputChange}
                        placeholder="Write your note or insight here..." 
                        className="mt-2 bg-neutral-800 border-neutral-700"
                    />
                    <div id="suggestions" className="mt-2">
                        {suggestions.map(s => (
                            <span key={s} className="suggestion" onClick={() => {setNoteInput(prev => prev + s + ' '); setSuggestions([]); }}>{s}</span>
                        ))}
                    </div>
                    <Button onClick={handleAddNote} className="mt-2">{t.addNote}</Button>
                    <div className="notes-list">{renderNotes()}</div>
                </motion.div>

                <motion.div className="section" id="deepThinking" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                    <h2>{t.deepTitle}</h2>
                    <p className="text-sm text-neutral-400">{t.deepDesc}</p>
                    <Textarea 
                        value={deepInput}
                        onChange={(e) => setDeepInput(e.target.value)}
                        placeholder="Think deeply and write here..."
                        className="mt-2 bg-neutral-800 border-neutral-700"
                    />
                    <Button onClick={handleSubmitDeepThought} className="mt-2">{t.submitDeep}</Button>
                    <div className="deep-list">{renderDeepNotes()}</div>
                </motion.div>
            </div>

            <AnimatePresence>
                {panel.active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-black/60"
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
        </>
    );
};
