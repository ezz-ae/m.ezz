// src/components/CognitiveCanvas.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
// FIX: Import the entire JSON object and then access the property for robustness.
import data from '@/lib/placeholder-images.json';

const { placeholderImages } = data;

const imageMappings = {
    '/': ['hero-main', 'p1-cover', 'p2-cover', 'p3-cover'],
    '/aixa': ['home-theory-bg', 'home-mindmap-bg', 'p6-img1'],
    '/journal': ['home-library-bg', 'blog1-cover', 'blog2-cover'],
    '/implementation': ['p2-img2', 'p6-cover', 'blog3-cover'],
    '/source': ['blog2-cover', 'p1-img2', 'p2-img1'],
    '/contribution': ['about-portrait', 'p3-img2', 'p4-img1'],
    '/notebooks/imagination-lab': ['p3-img2', 'p1-img2', 'p5-img1'],
    '/notebooks/brain-games': ['home-mindmap-bg', 'p1-img2'],
    'default': ['p1-img2', 'p2-img1', 'p3-img2', 'p4-img1', 'p5-img1']
};

const getImagesForPath = (path) => {
    const specificMapping = Object.keys(imageMappings).find(key => path.startsWith(key) && key !== '/');
    const key = path === '/' ? '/' : specificMapping || 'default';
    const imageIds = imageMappings[key] || imageMappings['default'];
    return imageIds.map(id => placeholderImages.find(img => img.id === id)?.imageUrl).filter(Boolean);
};

export function CognitiveCanvas() {
    const pathname = usePathname();
    const [images, setImages] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const relevantImages = getImagesForPath(pathname);
        setImages(relevantImages);
        setIndex(0); 
    }, [pathname]);

    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 7000); // Change image every 7 seconds
        return () => clearInterval(timer);
    }, [images]);

    if (images.length === 0) {
        return null;
    }

    return (
        <div className="fixed inset-0 w-full h-full z-[-1] overflow-hidden bg-black">
            <AnimatePresence>
                <motion.div
                    key={images[index]}
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${images[index]})` }}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 0.15, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                />
            </AnimatePresence>
        </div>
    );
}
