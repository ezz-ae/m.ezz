// src/app/implementation/page.tsx
'use client';

import React from 'react';
import { Section } from '@/components/ScrollTypography';
import { ArrowRight, Cpu, Building, Code } from 'lucide-react';

const implementationAreas = [
    {
        icon: Cpu,
        audience: "For AI Startups & Researchers",
        title: "Build on a New Cognitive Foundation",
        description: "Leverage the FCT framework to create a new generation of psychologically safe and contextually aware AI applications. Move beyond the limitations of traditional, archival models.",
        examples: [
            "AI tutors that adapt to a student's cognitive state, not just their answers.",
            "Therapeutic AI companions that are incapable of causing harm by 'over-recalling' traumatic events.",
            "Creative AI partners that function as a true 'imagination lab,' connecting distant patterns to generate novel ideas."
        ]
    },
    {
        icon: Building,
        audience: "For the Enterprise",
        title: "The Cognitive OS for Business Intelligence",
        description: "Deploy FCT-aligned systems to solve core enterprise challenges like information overload, knowledge retention, and customer interaction.",
        examples: [
            "No-Memory customer service bots that maintain a coherent understanding of a conversation's meaning without storing sensitive chat logs.",
            "Internal knowledge systems that fight information decay by continuously re-synthesizing and connecting insights, rather than just archiving documents.",
            "HR systems that use merit-based analysis, inspired by AIXEYE, to identify and nurture talent based on verified contributions."
        ]
    },
    {
        icon: Code,
        audience: "For Developers & Builders",
        title: "The FCT SDK & Cognitive Primitives",
        description: "Utilize a library of open-source components and cognitive primitives to integrate FCT principles directly into your own applications.",
        examples: [
            "Implement a 'Resonance' module to create more intuitive and human-aligned recommendation engines.",
            "Use the 'Meaning Synthesis' component to build powerful, privacy-preserving summarization tools.",
            "Integrate 'Emotional Softening' filters to create more empathetic and responsible notification systems."
        ]
    }
];

export default function ImplementationPage() {
  return (
    <div className="min-h-screen bg-black text-neutral-100 overflow-x-hidden pt-24">
      <div className="container mx-auto px-4 py-16">
        <Section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-light text-neutral-100">From Science to Action</h1>
          <p className="text-lg text-neutral-400 mt-4">
            The AIXSELF Universe is not just a theoretical framework; it is a practical blueprint for building the next generation of intelligent systems. This is how this science can work in action.
          </p>
        </Section>

        <div className="mt-20 space-y-16">
            {implementationAreas.map((area) => (
                <Section key={area.title}>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        <div className="md:col-span-4 text-center md:text-left">
                            <area.icon className="mx-auto md:mx-0 h-10 w-10 text-orange-400 mb-2" />
                            <p className="text-sm font-semibold text-neutral-500">{area.audience}</p>
                            <h2 className="text-2xl font-light text-neutral-200">{area.title}</h2>
                        </div>
                        <div className="md:col-span-8">
                            <p className="text-neutral-400 mb-4">{area.description}</p>
                            <ul className="space-y-2">
                                {area.examples.map((example, i) => (
                                    <li key={i} className="flex items-start">
                                        <ArrowRight className="h-4 w-4 text-orange-400/80 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-neutral-300">{example}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Section>
            ))}
        </div>
      </div>
    </div>
  );
}
