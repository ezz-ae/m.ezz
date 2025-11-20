// src/components/CognitiveCanvas.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

// Defines the properties for our animated glowing blobs
// This function now expects the theme as an argument for consistency
const createBlob = (theme: string) => {
    const isDark = theme === 'dark';
    const baseColor = isDark ? `hsl(25, 100%, 50%)` : `hsl(0, 0%, 100%)`; // Orange for dark, white for light
    const accentColor = isDark ? `hsl(270, 70%, 50%)` : `hsl(0, 0%, 95%)`; // Purple for dark, very light grey for light

    const randomSize = 200 + Math.random() * 400; // Blobs can be 200px to 600px
    const randomDuration = 20 + Math.random() * 15; // Animation duration 20s-35s
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
    const { theme, resolvedTheme } = useTheme(); // Use resolvedTheme for client-side theme
    const [blobs, setBlobs] = useState<any[]>([]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    // Regenerate blobs on theme or path change, but only after mount
    useEffect(() => {
        if (!isMounted || !resolvedTheme) return;
        const newBlobs = Array.from({ length: 5 }).map(() => createBlob(resolvedTheme));
        setBlobs(newBlobs);
    }, [isMounted, resolvedTheme, pathname]); 

    // Animation loop for blobs
    useEffect(() => {
        if (blobs.length === 0) return;
        let animationFrameId;
        const animateBlobs = () => {
            // Update blob positions (optional, if you want more dynamic movement not just CSS transitions)
            // For now, let's rely on CSS transitions defined in motion.div
            animationFrameId = requestAnimationFrame(animateBlobs);
        };
        animationFrameId = requestAnimationFrame(animateBlobs);
        return () => cancelAnimationFrame(animationFrameId);
    }, [blobs]);

    if (!isMounted || blobs.length === 0) {
        // Render a static background on the server to prevent hydration mismatch
        return <div className={cn("fixed inset-0 w-full h-full z-[-1]", resolvedTheme === 'dark' ? "bg-black" : "bg-white")}></div>;
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
