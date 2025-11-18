// src/components/notebooks/NotebookShell.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, BrainCircuit, BotMessageSquare, Milestone, Music } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollHeading, ScrollParagraph } from '../ScrollTypography';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type NotebookShellProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function NotebookShell({ title, description, children }: NotebookShellProps) {
  const contentMap = React.Children.toArray(children).reduce((acc: {[key: string]: React.ReactNode}, child) => {
    if (React.isValidElement(child) && typeof child.type !== 'string') {
        const key = (child.type as any).displayName || child.type.name;
        if (key === 'NotebookRenderer') acc.theory = child;
        if (key === 'NotebookQueryInterface') acc.conversation = child;
        if (key === 'MindmapView') acc.mindmap = child;
        if (key === 'AudioOverview') acc.audio = child;
    }
    return acc;
  }, {});


  return (
    <motion.div 
      className="relative isolate overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Soft background glow */}
      <div className="absolute inset-0 -z-10 bg-radial from-white/5 via-black to-black opacity-40" />
      
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          className="py-12 border-b border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
            <Link href="/#mind-board" className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-100 transition-colors mb-8">
                <ArrowLeft size={16} />
                Back to Mind Board
            </Link>
            <ScrollHeading as="h1" className="text-3xl md:text-5xl font-light text-neutral-50">{title}</ScrollHeading>
            <ScrollParagraph className="mt-4 text-lg text-neutral-300">{description}</ScrollParagraph>
        </motion.div>
      </div>

        <Tabs defaultValue="theory" className="w-full">
            <div className="max-w-4xl mx-auto px-6 sticky top-[88px] z-20 bg-black/80 backdrop-blur-sm py-4">
                 <TabsList className="grid w-full grid-cols-4 bg-neutral-900/80 border border-white/10">
                    <TabsTrigger value="theory"><BrainCircuit className="mr-2 h-4 w-4" />Theory</TabsTrigger>
                    <TabsTrigger value="conversation"><BotMessageSquare className="mr-2 h-4 w-4" />AI Conversation</TabsTrigger>
                    <TabsTrigger value="mindmap"><Milestone className="mr-2 h-4 w-4" />Mind Map</TabsTrigger>
                    <TabsTrigger value="audio"><Music className="mr-2 h-4 w-4" />Audio Overview</TabsTrigger>
                </TabsList>
            </div>
            <TabsContent value="theory">
                {contentMap.theory}
            </TabsContent>
            <TabsContent value="conversation">
                {contentMap.conversation}
            </TabsContent>
            <TabsContent value="mindmap">
                 {contentMap.mindmap}
            </TabsContent>
             <TabsContent value="audio">
                 {contentMap.audio}
            </TabsContent>
        </Tabs>

    </motion.div>
  );
}
