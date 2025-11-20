// src/app/projection/page.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/components/ScrollTypography';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

// --- DATA & MOCK AI ENGINE ---

const initialProjects = [
    {
        id: 'autothinker',
        title: 'Autothinker AI Notebook',
        description: 'A self-evolving cognitive OS where notes reorganize themselves based on semantic relevance and user-guided focus. This project is the core of the FCT cognitive architecture.',
        tags: ['AI', 'Cognitive OS', 'FCT'],
        status: 'Active Development',
        simulation: { progress: 0.8, risk: 0.3, evolution: 0.6 }
    },
    {
        id: 'dldchain',
        title: 'DLDCHAIN & Mashroi',
        description: 'A sovereign blockchain architecture for a national-scale real estate intelligence OS, bringing computational trust and liquidity to the asset class. A key implementation of merit-based economics.',
        tags: ['Blockchain', 'Governance', 'Economics'],
        status: 'Architectural Phase',
        simulation: { progress: 0.5, risk: 0.6, evolution: 0.4 }
    },
    {
        id: 'propertiesmarket',
        title: 'PropertiesMarket.ae',
        description: 'A high-performance, AI-driven real estate marketplace. This project serves as a real-world testbed for applying FCT principles to market analysis and user behavior modeling.',
        tags: ['Marketplace', 'Real Estate', 'AI'],
        status: 'Operational',
        simulation: { progress: 0.9, risk: 0.2, evolution: 0.8 }
    }
];

// A lightweight JS reasoning module to simulate the Autothinker
const autothinker = {
    reorganize: (projects, keywords) => {
        if (keywords.length === 0) {
            return projects.sort((a, b) => initialProjects.findIndex(p => p.id === a.id) - initialProjects.findIndex(p => p.id === b.id));
        }
        return [...projects].sort((a, b) => {
            const scoreA = keywords.reduce((acc, kw) => acc + (a.description.toLowerCase().includes(kw) || a.title.toLowerCase().includes(kw) ? 1 : 0), 0);
            const scoreB = keywords.reduce((acc, kw) => acc + (b.description.toLowerCase().includes(kw) || b.title.toLowerCase().includes(kw) ? 1 : 0), 0);
            return scoreB - scoreA;
        });
    },
    getAINote: (project, keywords) => {
        if (keywords.length > 0 && (project.description.toLowerCase().includes(keywords[0]) || project.title.toLowerCase().includes(keywords[0]))) {
            return `PRIORITY: High relevance to the cognitive vector [${keywords[0]}]. Suggest focusing on the FCT implementation for this project.`;
        }
        return 'STATUS: Monitoring cognitive drift. Awaiting new input vectors for re-synthesis.';
    }
};

// --- SUB-COMPONENTS ---

const SimulationCanvas = ({ data }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let frame = 0;

        const draw = () => {
            frame++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = 'rgba(255, 127, 80, 0.6)';
            ctx.lineWidth = 2;
            
            ctx.beginPath();
            for (let i = 0; i < canvas.width; i++) {
                const y = (canvas.height / 2) + 
                          Math.sin(i * 0.02 + frame * 0.05) * data.progress * 20 +
                          Math.sin(i * 0.05 + frame * 0.02) * data.evolution * 15;
                ctx.lineTo(i, y);
            }
            ctx.stroke();
            
            // Risk indicator
            ctx.fillStyle = `rgba(255, 0, 0, ${data.risk * 0.5})`;
            ctx.fillRect(0, canvas.height - 10, canvas.width * data.risk, 10);
        };
        
        const animationId = requestAnimationFrame(draw);
        return () => cancelAnimationFrame(animationId);
    }, [data]);

    return <canvas ref={canvasRef} className="w-full h-16 rounded-md bg-neutral-900/50 border border-neutral-800"></canvas>;
};


// --- MAIN PAGE COMPONENT ---

export default function ProjectionPage() {
    const [projects, setProjects] = useState(initialProjects);
    const [keywords, setKeywords] = useState('');
    const [userNotes, setUserNotes] = useState([]);

    const handleKeywordChange = (e) => {
        const newKeywords = e.target.value.toLowerCase().split(' ').filter(Boolean);
        setKeywords(e.target.value);
        const reorganized = autothinker.reorganize(projects, newKeywords);
        setProjects(reorganized);
    };

    const handleAddNote = (e) => {
        e.preventDefault();
        const note = e.target.elements.note.value;
        if (note.trim()) {
            setUserNotes(prev => [...prev, note]);
            e.target.reset();
        }
    };

    return (
        <div className="min-h-screen bg-black text-neutral-100 overflow-x-hidden pt-24">
            <div className="container mx-auto px-4 py-16">

                <Section className="text-center max-w-3xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-light text-neutral-100">The Living Dashboard</h1>
                    <p className="text-base md:text-lg text-neutral-400 mt-4">
                        A real-time, AI-aware projection of the entire work. This is a total awareness system that thinks with you.
                    </p>
                </Section>

                <Section className="mt-12 max-w-4xl mx-auto">
                    <div className="bg-neutral-900/50 border border-neutral-800 p-4 rounded-lg">
                        <label className="text-sm font-semibold text-neutral-300">Cognitive Focus Keywords</label>
                        <Input 
                            type="text"
                            value={keywords}
                            onChange={handleKeywordChange}
                            placeholder="Enter keywords (e.g., 'FCT AI blockchain') to dynamically reorganize the projects..."
                            className="bg-neutral-800 border-neutral-700 mt-2"
                        />
                    </div>
                </Section>

                <Section className="mt-12 max-w-4xl mx-auto">
                     <AnimatePresence>
                        {projects.map((project, index) => (
                             <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-neutral-950/80 border border-neutral-800 rounded-lg p-6 mb-6"
                            >
                                <h2 className="text-xl font-light text-orange-400">{project.title}</h2>
                                <p className="text-sm text-neutral-400 mt-2">{project.description}</p>
                                <div className="mt-4 text-xs font-mono text-neutral-500">
                                    <span className="font-semibold text-neutral-400">STATUS:</span> {project.status}
                                </div>
                                <div className="mt-4">
                                    <h4 className="text-xs font-semibold text-neutral-300 mb-2">Autothinker Note</h4>
                                    <p className="text-xs italic text-orange-300/80 bg-orange-500/10 p-2 rounded-sm">
                                        {autothinker.getAINote(project, keywords.toLowerCase().split(' ').filter(Boolean))}
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <h4 className="text-xs font-semibold text-neutral-300 mb-2">Live Projection</h4>
                                     <SimulationCanvas data={project.simulation} />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </Section>

                <Section className="mt-12 max-w-4xl mx-auto">
                    <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-lg">
                        <h3 className="text-lg font-light text-neutral-200">Smart Contribution</h3>
                        <p className="text-sm text-neutral-500 mb-4">Add your ideas. The Autothinker will integrate them into its next synthesis.</p>
                        <form onSubmit={handleAddNote}>
                            <Textarea name="note" placeholder="Write your note, insight, or question here..." className="bg-neutral-800 border-neutral-700"/>
                            <Button type="submit" variant="outline" className="mt-2">Add Note</Button>
                        </form>
                        <div className="mt-4 space-y-2">
                            {userNotes.map((note, i) => (
                                <p key={i} className="text-xs text-neutral-400 bg-neutral-800/50 p-2 rounded-sm border border-neutral-700/50">
                                    {note}
                                </p>
                            ))}
                        </div>
                    </div>
                </Section>

            </div>
        </div>
    );
}
