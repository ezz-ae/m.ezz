// src/components/notebooks/SmartNotebook.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const directionalWords = ["Simulation", "Resource", "Decision", "Market", "AI", "Strategy", "Innovation", "Risk", "Learning", "Flow"];

// A more sophisticated state for each word, including position and velocity
const createWordState = (word, container) => {
    return {
        id: word,
        text: word,
        x: Math.random() * (container.width - 100),
        y: Math.random() * (container.height - 50),
        vx: (Math.random() - 0.5) * 0.2, // Slower velocity
        vy: (Math.random() - 0.5) * 0.2, // Slower velocity
        size: 16 + Math.random() * 10,
    };
};

export function SmartNotebook() {
    const containerRef = useRef(null);
    const [words, setWords] = useState([]);

    // Initialize words once the container is available
    useEffect(() => {
        if (containerRef.current) {
            const containerSize = {
                width: containerRef.current.offsetWidth,
                height: containerRef.current.offsetHeight
            };
            setWords(directionalWords.map(word => createWordState(word, containerSize)));
        }
    }, []);

    // The main animation loop
    useEffect(() => {
        const container = containerRef.current;
        if (!container || words.length === 0) return;

        let animationFrameId;

        const animate = () => {
            setWords(prevWords => 
                prevWords.map(word => {
                    let { x, y, vx, vy } = word;

                    // Update position
                    x += vx;
                    y += vy;

                    // Wall collision detection
                    if (x <= 0 || x >= container.offsetWidth - 100) vx *= -1;
                    if (y <= 0 || y >= container.offsetHeight - 40) vy *= -1;
                    
                    // Add a very subtle, slow change to velocity for organic movement
                    vx += (Math.random() - 0.5) * 0.01;
                    vy += (Math.random() - 0.5) * 0.01;

                    // Clamp velocity to prevent it from getting too fast
                    vx = Math.max(-0.3, Math.min(0.3, vx));
                    vy = Math.max(-0.3, Math.min(0.3, vy));

                    return { ...word, x, y, vx, vy };
                })
            );
            animationFrameId = requestAnimationFrame(animate);
        };
        
        animationFrameId = requestAnimationFrame(animate);
        
        return () => cancelAnimationFrame(animationFrameId);
    }, [words.length]);


    return (
        <div className="max-w-4xl mx-auto py-16 px-4">
            <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 md:p-8 space-y-8">
                 <div className="text-center border-b border-neutral-800 pb-6">
                    <h1 className="text-2xl md:text-3xl font-light text-neutral-100">Smart Notebook</h1>
                    <p className="text-sm text-neutral-500 max-w-xl mx-auto mt-2">
                       An interactive simulation of a self-organizing thought space.
                    </p>
                </div>
                <div 
                    ref={containerRef}
                    className="h-[300px] w-full bg-neutral-900/50 rounded-lg p-4 relative overflow-hidden border border-neutral-800"
                >
                    {words.map(word => (
                        <motion.div
                            key={word.id}
                            className="absolute bg-orange-500/80 text-white text-xs px-3 py-1 rounded-full cursor-pointer"
                            animate={{ x: word.x, y: word.y }}
                            transition={{ type: 'spring', stiffness: 5, damping: 5 }} // Smoother spring physics
                            style={{ fontSize: `${word.size}px` }}
                        >
                            {word.text}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
