// src/components/CognitiveCanvas.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

const createBlob = (theme: string | undefined) => {
    const isDark = theme === 'dark';
    const baseColor = isDark ? `hsl(25, 100%, 50%)` : `hsl(0, 0%, 100%)`; // Orange for dark, white for light
    const accentColor = isDark ? `hsl(270, 70%, 50%)` : `hsl(0, 0%, 95%)`; // Purple for dark, very light grey for light

    const randomSize = 200 + Math.random() * 400;
    const randomDuration = 20 + Math.random() * 15;
    const randomDelay = Math.random() * 5;

    return {
        size: randomSize,
        duration: randomDuration,
        delay: randomDelay,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: Math.random() > 0.5 ? baseColor : accentColor,
        opacity: isDark ? (0.05 + Math.random() * 0.1) : (0.1 + Math.random() * 0.2)
    };
};

export function CognitiveCanvas() {
    const pathname = usePathname();
    const { resolvedTheme } = useTheme();
    const [blobs, setBlobs] = useState<any[]>([]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;
        const newBlobs = Array.from({ length: 5 }).map(() => createBlob(resolvedTheme));
        setBlobs(newBlobs);
    }, [isMounted, resolvedTheme, pathname]); 

    if (!isMounted) {
        // Return null on the server and during the initial client render to prevent hydration mismatch.
        return null;
    }

    return (
        <div className={cn(
            "fixed inset-0 w-full h-full z-[-1] overflow-hidden transition-colors duration-1000",
            resolvedTheme === 'dark' ? "bg-black" : "bg-white"
        )}>
            <AnimatePresence>
                {blobs.map((blob, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full filter blur-3xl"
                        style={{
                            width: blob.size,
                            height: blob.size,
                            backgroundColor: blob.color,
                            left: `${blob.x}%`,
                            top: `${blob.y}%`,
                            opacity: blob.opacity
                        }}
                        animate={{
                            x: [`${blob.x}%`, `${(blob.x + 10) % 100}%`, `${blob.x}%`],
                            y: [`${blob.y}%`, `${(blob.y + 10) % 100}%`, `${blob.y}%`],
                            scale: [1, 1.2, 1],
                            rotate: [0, 360, 0]
                        }}
                        transition={{
                            duration: blob.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: blob.delay
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}
