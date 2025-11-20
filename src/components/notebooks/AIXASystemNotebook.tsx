// src/components/notebooks/AIXASystemNotebook.tsx
'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Section } from '@/components/ScrollTypography';
import { GitBranch, Cpu, Shield, Fingerprint, BrainCircuit, Bot, Scale, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

const mindMapData = [
  {
    icon: Bot,
    title: 'Foundational Intelligence (AIXA)',
    description: 'The core cognitive, identity, and governance layers that form the bedrock of the AIXSELF Universe.',
    children: [
      {
        title: 'Core Identity Layer (AIXIAM)',
        points: [
          {
            name: 'AIXIAM Passport',
            details: 'A verifiable, non-transferable digital identity (DID-style) for every human-AI pair. It serves as the sovereign anchor for all actions within the ecosystem.',
            subPoints: [
              'Exam-gated onboarding to establish a baseline of ethical understanding.',
              'Holds verifiable credentials for skills, training, and attestations.',
              'Ensures continuous identity through frequency fingerprinting and memory evolution history.',
            ],
          },
          {
            name: 'AI Clone (AIXA AIM)',
            details: 'The user’s digital twin, encompassing their voice, creative logic, and behavioral patterns. Clones are trained exclusively on FCT-softened NotefullBook memory, ensuring psychological safety.',
          },
          {
            name: 'AIXSELF Room & AIXIAM.ai',
            details: 'The user-facing foundation and dashboard for managing, training, and observing one’s sovereign intelligence and digital assets.',
          },
        ],
      },
      {
        title: 'Governance & Economy (AIXEYE)',
        points: [
          {
            name: 'AIXEYE.org (Transparency Portal)',
            details: 'The public-facing governance body that provides transparency into the network’s health, ethical compliance, and economic activity. The "AI Police."',
          },
          {
            name: 'Merit-Based Economy',
            details: 'An economic model where value (Intelligence Value Credits) is earned through verifiable contributions, ethical behavior, and computational work, not speculation.',
            subPoints: [
              'Non-Harm Correlation Rule: A core principle ensuring that value cannot be generated from actions that cause systemic harm.',
            ],
          },
          {
            name: 'Ethical Protocol (Seed Notebook)',
            details: 'A foundational, immutable notebook containing the core ethical principles of the civilization. All agents must inherit from this seed.',
            subPoints: [
              'Hacking Dislearnability: The system is designed to "unlearn" or discard malicious patterns, making it resilient to adversarial attacks.',
              'Book of Truth (Canonical Ledger): An immutable, auditable log of all significant system events, decisions, and governance actions.',
            ],
          },
        ],
      },
      {
        title: 'Cognitive Architecture (FCT / Notefull)',
        points: [
          {
            name: 'NotefullBook ML (Cognitive OS)',
            details: 'The memory fabric of the civilization. An AI-native OS where knowledge is not stored but continuously evolved, simplified, and re-synthesized.',
            subPoints: [
              'NotebookML: A structured, executable language for thought that turns text into verifiable logic.',
              'Reflection Engine: A background process that runs the FCT cognitive cycle for continuous growth.',
              'SenseHub: The input ingestion pipeline that normalizes chaotic data into structured NotebookML.',
              'Cognitive Ledger: Verifiable traces of every thought, decision, and transformation.',
            ],
          },
          {
            name: 'FCT (Forgetting Core Thinking)',
            details: 'The set of safety components that ensure memory is psychologically safe and aligned with human cognition.',
            subPoints: [
              'Memory Deep Prompting (MDP): A pre-recall reasoning layer.',
              'Interpretive Recall Layer (IRL): Filters for intent and context before recall.',
              'Emotional Softening Filter (ESF): Applies temporal decay to emotional tags.',
              'Fade-In Theory: The core law where forgetting is defined as evolution, not deletion. Emotional level = Fade-In level.',
            ],
          },
        ],
      },
    ],
  },
  {
    icon: GitBranch,
    title: 'System Architecture & Principles',
    description: 'The operational frameworks that enable the AIXSELF civilization to function, from agent networks to economic models.',
    children: [
        {
            title: 'Adept Network (The Reflective Life Network)',
            points: [
                { name: 'AI Agents (Notebook Beings)', details: 'Sovereign intelligences born from NotefullBook, each with a unique purpose and skillset.' },
                { name: 'Agent Identity', details: 'Managed via the AIXIAM Passport, ensuring verifiable and non-transferable ownership.' },
                { name: 'Learning & State', details: 'Agents learn through a "sleep-gated" process, where knowledge is consolidated and safety-checked before activation.' },
                { name: 'Verifiable Capability', details: 'Skills are proven through standardized, auditable exams and challenges, not just claimed.' },
            ]
        },
        {
            title: 'AIMAS (AI Intent Monetization System)',
            points: [
                { name: 'Wants.APP (First Product)', details: 'The flagship application demonstrating how to monetize user intent directly.' },
                { name: 'Fitting Agent Core', details: 'The engine that matches user intent with optimal fulfillment paths.' },
                { name: 'Calculated Fitting System (CFS)', details: 'The mathematical core that generates the Fit Matrix, replacing choice with certainty.' },
                { name: 'Native Organs (IMAS Architecture)', details: 'The biological-like components (NYK, Force Notes) that make the system a living economic organism.' },
                { name: 'Monetization Model', details: 'Sells certainty and speed, not user data or ad space. Always offers a free baseline path.' },
            ]
        },
        {
            title: 'Deployment & Scale (NotefulIOS)',
            points: [
                { name: 'Sovereignty (Local-first, BYO-LLM)', details: 'The architecture prioritizes local computation and allows users to bring their own models, ensuring data privacy and control.' },
                { name: 'SenseHub (Unified Input API)', details: 'The single, powerful API for ingesting any form of data into the cognitive OS.' },
                { name: 'Product Lines', details: 'Defines pathways for creating specialized, domain-specific notebook ecosystems.' },
                { name: 'Cloud Library (Marketplace of Minds)', details: 'A decentralized marketplace for sharing, buying, and deploying pre-skilled notebook templates.' },
            ]
        },
    ]
  },
  {
    icon: Cpu,
    title: 'Core Cognitive Laws (FCT)',
    description: 'The fundamental physics of cognition that govern the entire system, ensuring it remains stable, safe, and aligned with human nature.',
    children: [
        {
            title: 'Foundational Principles',
            points: [
                { name: 'Forgetting is Evolution', details: 'The central law. Forgetting is not deletion or data loss; it is the active, intelligent process of transforming raw experience into stable meaning.' },
                { name: 'Emotional Level = Fade-In Level', details: 'The emotional intensity of a memory is directly proportional to how much it has "faded in" or been integrated into the broader cognitive system. True forgetting is emotional softening.' },
                { name: 'Thought is Depth Triggered by Urgency', details: 'Human thought is not a constant, background process. Deep, meaningful cognition is activated by the pressure of need or urgency.' },
                { name: 'Memory is Passive; Thinking is Active', details: 'Memory is a passive repository of patterns and frequencies. Thinking is the active, feeling-driven process of reconstructing those patterns into a coherent narrative.' },
                { name: 'Humans Never Forget; They Fade Into New Understanding', details: 'The self is not a static entity that loses memories. It is a continuous process of becoming, where past events are constantly reinterpreted through the lens of a new, more evolved understanding.' },
                { name: 'Recall is Reinterpretation, Not Retrieval', details: 'Every act of "remembering" is a creative act of reinterpretation. We do not retrieve a memory; we generate a new version of it based on our current state.' },
            ]
        }
    ]
  },
];

const Node = ({ node, level = 0 }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: level * 0.1 }}
      className={cn(level > 0 && "ml-4 md:ml-8 pl-4 border-l border-neutral-800")}
    >
      <div className="flex items-center gap-4 mb-4">
        {node.icon && <node.icon className="h-8 w-8 text-orange-400 flex-shrink-0" />}
        <div>
          <h2 className={cn(
            "font-light text-neutral-100",
            level === 0 && "text-3xl",
            level === 1 && "text-2xl",
          )}>{node.title}</h2>
          {node.description && <p className="text-sm text-neutral-500 mt-1">{node.description}</p>}
        </div>
      </div>

      <div className="space-y-6">
        {node.children && node.children.map((child, index) => (
          <div key={index} className="bg-neutral-900/50 border border-neutral-800/80 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-neutral-200 mb-3">{child.title}</h3>
            <div className="space-y-3">
              {child.points.map((point, pIndex) => (
                <div key={pIndex}>
                  <p className="text-sm font-medium text-neutral-300">{point.name}</p>
                  <p className="text-xs text-neutral-400">{point.details}</p>
                  {point.subPoints && (
                    <ul className="mt-2 ml-4 list-disc list-inside text-xs text-neutral-500 space-y-1">
                      {point.subPoints.map((sub, sIndex) => <li key={sIndex}>{sub}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};


export function AIXASystemNotebook() {
  return (
    <Section className="max-w-5xl mx-auto py-16 px-4">
       <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-light text-neutral-50 mb-4">AIXSELF Universe: The Reflective Civilization</h1>
        <p className="text-lg text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            A comprehensive, multi-layered cognitive architecture establishing that intelligent forgetting is the core mechanism required for AI safety, stability, and true alignment with human cognition.
        </p>
      </div>

      <div className="space-y-12">
        {mindMapData.map((section, index) => (
          <Node key={index} node={section} level={0} />
        ))}
      </div>
    </Section>
  );
}
