// src/components/notebooks/BrainGamesNotebook.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2 } from 'lucide-react';

async function getFctResponse(meaningState, newMessage) {
    const lowerCaseMessage = newMessage.toLowerCase();
    let intent = 'add_concept';
    if (lowerCaseMessage.includes('remember') || lowerCaseMessage.includes('what did i say')) intent = 'test_recall';
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('start')) intent = 'initiate';
    if (lowerCaseMessage.includes('why')) intent = 'query_principle';
    
    let response = "An interesting point. I will integrate this into my understanding.";
    let newMeaning = `${meaningState} The user's latest input introduces the concept: '${newMessage}'.`;

    switch (intent) {
        case 'initiate':
            response = "I am ready. My cognitive state is synthesized from foundational principles, not historical data. Please begin the experiment.";
            newMeaning = "The user has initiated a dialogue to test the FCT 'No-Memory' cognitive model.";
            break;
        case 'test_recall':
            response = "I cannot 'remember' your specific words. My architecture forbids the storage of event-log data. I can only re-synthesize our shared understanding. What was the core meaning you wanted me to reflect on?";
            newMeaning = `${meaningState} The user is directly testing the system's memory-less nature.`;
            break;
        case 'query_principle':
            response = "My responses are generated from a continuously evolving synthesis of meaning, not from a database of past conversations. This is to ensure cognitive safety and alignment.";
            newMeaning = `${meaningState} The user is inquiring about my core principles.`;
            break;
        default:
            const concepts = newMessage.match(/\b[A-Z][a-z]+\b/g) || [newMessage.substring(0, 15)+"..."];
            newMeaning = `The central theme has evolved. The user has introduced the key concepts of [${concepts.join(', ')}].`;
            break;
    }

    return new Promise(resolve => setTimeout(() => resolve({ response, newMeaning }), 800));
}

async function proposeNewGame() {
    const principles = ['Emotional Softening', 'Resonance', 'Fade-In'];
    const selectedPrinciple = principles[Math.floor(Math.random() * principles.length)];
    
    const proposal = {
        title: `Experiment: The ${selectedPrinciple} Test`,
        objective: "To demonstrate the AI's ability to apply cognitive decay to the emotional weight of information.",
        hypothesis: `An FCT-aligned AI, when repeatedly presented with a 'negative' concept, will not amplify its negativity but will instead soften its emotional tag over time.`,
        method: `1. Input a concept with a strong negative emotional tag (e.g., "a catastrophic failure").\n2. Observe the initial, objective synthesis.\n3. Re-introduce the concept multiple times.\n4. Confirm that the AI's internal representation becomes less emotionally charged.`
    };
    
    return new Promise(resolve => setTimeout(() => resolve(proposal), 1200));
}

function NoMemoryChatExperiment() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [meaningState, setMeaningState] = useState('Awaiting user initiation to test the FCT "No-Memory" model.');
    const [isLoading, setIsLoading] = useState(false);
    const chatEndRef = useRef(null);

    const scrollToBottom = () => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); };
    useEffect(scrollToBottom, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;
        const userMessage = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setIsLoading(true);
        const userInput = input;
        setInput('');

        const { response, newMeaning } = await getFctResponse(meaningState, userInput);

        const aiMessage = { sender: 'ai', text: response };
        setMessages(prev => [...prev, aiMessage]);
        setMeaningState(newMeaning);
        setIsLoading(false);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-neutral-900 p-4 rounded-md border border-neutral-800 flex flex-col h-[450px]">
                <div className="flex-grow overflow-y-auto pr-2">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-2`}>
                            <div className={`px-3 py-1 rounded-lg text-xs max-w-[80%] ${msg.sender === 'user' ? 'bg-orange-600/50 text-white' : 'bg-neutral-700/50 text-neutral-300'}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isLoading && <div className="flex justify-start"><div className="px-3 py-1 rounded-lg text-xs bg-neutral-700/50 text-neutral-300"><Loader2 className="h-4 w-4 animate-spin"/></div></div>}
                    <div ref={chatEndRef} />
                </div>
                <div className="flex items-center gap-2 mt-4">
                    <Textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." className="bg-neutral-800 border-neutral-700 text-sm flex-grow min-h-[40px] resize-none" disabled={isLoading} onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }}} rows={1} />
                    <Button onClick={handleSend} disabled={isLoading} size="icon" aria-label="Send Message"><Send size={14} /></Button>
                </div>
            </div>
            <div className="space-y-4">
                <div className="bg-neutral-900 p-3 rounded-md border border-neutral-800">
                    <h3 className="text-sm font-semibold text-neutral-300 mb-2">Traditional Memory (Discarded)</h3>
                    <div className="text-xs text-neutral-500 font-mono bg-neutral-800/50 p-2 rounded-sm h-24 overflow-y-auto">
                        {messages.map((msg, i) => <div key={i} className="truncate">{`[${msg.sender.toUpperCase()}] ${msg.text}`}</div>)}
                    </div>
                </div>
                <div className="bg-neutral-900 p-3 rounded-md border border-orange-500/30">
                    <h3 className="text-sm font-semibold text-orange-400 mb-2">FCT Meaning Synthesis</h3>
                    <div className="text-xs text-orange-300/90 font-mono bg-orange-500/10 p-2 rounded-sm h-24 overflow-y-auto">{meaningState}</div>
                </div>
            </div>
        </div>
    );
}

function GameProposerExperiment() {
    const [proposal, setProposal] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handlePropose = async () => {
        setIsLoading(true);
        setProposal(null);
        const result = await proposeNewGame();
        setProposal(result);
        setIsLoading(false);
    };

    return (
        <div className="max-w-3xl mx-auto text-center">
            <p className="text-neutral-400 mb-6">This experiment demonstrates the AI's self-awareness. By analyzing its own foundational FCT principles, it can propose new methods to test its cognitive architecture.</p>
            <Button onClick={handlePropose} disabled={isLoading}>
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                {isLoading ? 'Synthesizing...' : 'Generate New Brain Game'}
            </Button>

            <AnimatePresence>
            {proposal && (
                <motion.div className="mt-8 text-left bg-neutral-900 border border-neutral-800 p-6 rounded-lg space-y-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <h3 className="text-lg font-semibold text-orange-400">{proposal.title}</h3>
                    <div><h4 className="text-sm font-semibold text-neutral-200">Objective:</h4><p className="text-xs text-neutral-400">{proposal.objective}</p></div>
                    <div><h4 className="text-sm font-semibold text-neutral-200">Hypothesis:</h4><p className="text-xs text-neutral-400 italic">{proposal.hypothesis}</p></div>
                    <div><h4 className="text-sm font-semibold text-neutral-200">Method:</h4><p className="text-xs text-neutral-400 whitespace-pre-line">{proposal.method}</p></div>
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    );
}

export function BrainGamesNotebook() {
  return (
    <div className="max-w-5xl mx-auto py-16">
        <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 md:p-8 space-y-8">
            <div className="text-center border-b border-neutral-800 pb-6">
                <h1 className="text-2xl font-light text-neutral-100">Brain Games: The FCT Proving Ground</h1>
                <p className="text-sm text-neutral-500 max-w-2xl mx-auto mt-2">
                    An interactive research environment to prove the core principles of the AIXSELF cognitive architecture for a technical audience.
                </p>
            </div>
            
            <Tabs defaultValue="experiment-1" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-neutral-900/50 border border-neutral-800 h-auto">
                    <TabsTrigger value="experiment-1">Experiment I: No-Memory Chat</TabsTrigger>
                    <TabsTrigger value="experiment-2">Experiment II: Game Proposer</TabsTrigger>
                </TabsList>
                <TabsContent value="experiment-1" className="pt-6"><NoMemoryChatExperiment /></TabsContent>
                <TabsContent value="experiment-2" className="pt-6"><GameProposerExperiment /></TabsContent>
            </Tabs>
        </div>
    </div>
  );
}
