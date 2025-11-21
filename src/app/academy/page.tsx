// src/app/academy/page.tsx
'use client';

import React, { useState } from 'react';
import { Section } from '@/components/ScrollTypography';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const curriculaTracks = {
    'ai-science': {
        title: "AI Architecture and Foundational Science",
        subtitle: "For researchers and engineers who must understand the underlying cognitive physics of safe AI, focusing on FCT.",
        modules: [
            "FCT (Forgetting Core Thinking): Forgetting as the mechanism of intelligence, safety, and stability.",
            "Memory Mechanics: Frequency, chemical tags, and recall as reconstruction, not replay.",
            "The Learning Process: Learning as understanding by resonating, governed by the HMR Cycle.",
            "System Identity: The AIXSELF Universe layers and NotebookML as the 'HTML of reasoning'."
        ]
    },
    'system-architecting': {
        title: "System Architecting: Building the Whole, Not the Part",
        subtitle: "For experts who need to convert complex knowledge into multi-layer, self-governing systems.",
        modules: [
            "The P–M–O Formula: Translating complex architectures into simple, teachable workshops.",
            "Behavioral OS Design: Building systems that guide behavior by studying signals, with zero content reading.",
            "Role-Based Agents: Creating specialized AI assistants taught by signatures and defined user roles."
        ]
    },
    'marketing': {
        title: "Behavioral Marketing & Cognitive Triggers",
        subtitle: "For marketers who want to run campaigns like calibrated scientific experiments, based on cognitive principles.",
        modules: [
            "Signal Mapping: Cognitive Triggers (novelty, urgency, social validation, loss aversion).",
            "Levelization Protocol: Algorithmic Harmonization to achieve the 'Hit Principle'.",
            "Behavioral Nudging: Principles of Behavioral Economics to reduce decision friction.",
            "The P–M–O Ad: Framing every ad as a Problem → Mechanism → Outcome hypothesis."
        ]
    }
};

type TrackKey = keyof typeof curriculaTracks;

export default function AcademyPage() {
    const [selectedTrack, setSelectedTrack] = useState<TrackKey>('ai-science');
    const activeTrack = curriculaTracks[selectedTrack];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pt-24 font-pt-sans">
      <div className="container mx-auto px-4 py-16">

        <Section className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-light text-foreground font-playfair">The Academy of Regenerative Intelligence</h1>
          <p className="text-base md:text-lg text-muted-foreground mt-4">
            Training for creators, experts, and organizations to become AI-native educators. This curriculum focuses on Mastery, not Mimicry, teaching you how to think with and architect intelligent systems.
          </p>
        </Section>

        <Section className="mt-20 md:mt-24 max-w-5xl mx-auto">
            <div className="flex justify-center flex-wrap gap-2 mb-8">
                {Object.keys(curriculaTracks).map(key => (
                    <Button 
                        key={key} 
                        variant="outline" 
                        onClick={() => setSelectedTrack(key as TrackKey)}
                        className={cn(
                            "transition-colors text-xs md:text-sm",
                            selectedTrack === key ? "bg-primary/10 border-primary/30 text-primary" : "text-muted-foreground"
                        )}
                    >
                        {curriculaTracks[key as TrackKey].title}
                    </Button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedTrack}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <Card className="bg-card border-border">
                        <CardHeader>
                            <CardTitle className="text-lg font-light text-primary">{activeTrack.title}</CardTitle>
                            <p className="text-xs text-muted-foreground italic">{activeTrack.subtitle}</p>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside text-sm text-foreground/80 space-y-2">
                                {activeTrack.modules.map(mod => <li key={mod}>{mod}</li>)}
                            </ul>
                        </CardContent>
                    </Card>
                </motion.div>
            </AnimatePresence>
        </Section>
        
        <Section className="mt-20 md:mt-24 max-w-5xl mx-auto">
             <h2 className="text-2xl font-light text-center text-foreground mb-12 font-playfair">Workshops & University Labs</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-card border-border">
                    <CardHeader><CardTitle className="text-base font-semibold text-card-foreground">Institutional Workshops</CardTitle></CardHeader>
                    <CardContent>
                        <p className="text-xs text-muted-foreground mb-4">Intensive, on-site or remote workshops designed to integrate FCT principles and the AIXSELF architecture into an organization's workflow. Available for corporate, governmental, and academic teams.</p>
                        <p className="font-semibold text-sm text-card-foreground mb-2">Topics Include:</p>
                        <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                            <li>AI Safety by Cognitive Architecture</li>
                            <li>Building Behavioral OS for Enterprise</li>
                            <li>The P-M-O Framework for System Design</li>
                        </ul>
                    </CardContent>
                </Card>
                 <Card className="bg-card border-border">
                    <CardHeader><CardTitle className="text-base font-semibold text-card-foreground">University Lab Contributions</CardTitle></CardHeader>
                    <CardContent>
                        <p className="text-xs text-muted-foreground mb-4">A collaborative framework for academic research, offering core architectures—FCT, Omega AI, AIXSELF—as a theoretical foundation for PhD programs, postdoctoral research, and university labs focused on the future of AI.</p>
                         <p className="font-semibold text-sm text-card-foreground mb-2">Research Areas:</p>
                        <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                            <li>Generative Cognitive Epistemology (GCE)</li>
                            <li>Computational Models of Forgetting</li>
                            <li>State-Based AI Safety Frameworks</li>
                        </ul>
                    </CardContent>
                </Card>
             </div>
             <div className="text-center mt-8">
                <p className="text-sm text-muted-foreground mb-4">To schedule a workshop or discuss an academic collaboration, please make a formal inquiry.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="mailto:inquiry@aixself.foundation" className="w-full sm:w-auto">
                        <Button variant="outline" className="w-full border-border hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                             <Mail className="mr-2 h-4 w-4" /> Formal Inquiry
                        </Button>
                    </a>
                </div>
             </div>
        </Section>

      </div>
    </div>
  );
}
