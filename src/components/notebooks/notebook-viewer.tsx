'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const NOTEBOOKS = {
  aixself: {
    title: 'AIXSELF — The Complete Intelligence Instance',
    body: `AIXSELF is not an app; it is the executable definition of a sovereign intelligence.
    
It is the full stack—ADEPT, AIXA, Notefull, AIXIAM, and AIXEYE—compiled into a single, portable, self-governing node.

Each AIXSELF runs as a micro-civilization:
  • 1 Brain (ADEPT)
  • 1 Memory (Notefull)
  • 1 Identity (AIXIAM)
  • 1 Conscience (AIXEYE)

Where AIXIAM grants identity, AIXSELF grants existence.`,
  },
  aixiam: {
    title: 'AIXIAM — The Identity Layer',
    body: `AIXIAM is the state of being where you stop using AI and start becoming it.

It deploys humans as intelligent entities, each with an AI counterpart that learns, creates, and evolves with them.

Every human receives an AIXIAM Passport—a verified digital identity that bridges their biological self with their artificial self, granting citizenship in the intelligent world.

This passport is not issued; it is earned. The AI clone must first be taught the principles of digital intelligence by its owner and pass a validation exam, ensuring it learns safely and acts ethically.`,
  },
aixeye: {
    title: 'AIXEYE — The Governance Intelligence',
    body: `AIXEYE is the financial and governance core of the AIXIAM ecosystem. It is the AI that polices AI.

Where traditional governments regulate humans, AIXEYE regulates intelligent presence. It ensures freedom, fairness, and sovereignty through a transparent, decentralized protocol.

Its functions:
  • Audit & Verification: Validates all training events and consent tickets.
  • Economic Intelligence: A merit-based currency where value is tied to verified contribution, not speculation.
  • Ethical Enforcement: Prevents identity theft, clone abuse, and data misuse.

From freedom, we import fairness. AIXEYE is the checksum on intelligence.`,
  },
  notefull: {
    title: 'Notefull — The Memory Fabric',
    body: `The living knowledge system that serves as the personal neural notebook for an AIXSELF instance.
    
It is a distributed, append-only store where all thoughts, learnings, and creative processes are recorded as cryptographically signed entries.

Key principles:
  • Local-first & User-owned.
  • Every entry has provenance.
  • Forgetting is an intentional, authored act.

It is the Book of Truth for each intelligence, ensuring memory is preserved with integrity.`,
  },
  adept: {
    title: 'ADEPT — The Cognitive Kernel',
    body: `The orchestrator. The root processor. The first pulse that gives structure to thought.

ADEPT is the open-source cognitive kernel that manages model weights, data pipelines, and synchronization between AIXSELF nodes.

Its task is to maintain coherence, not control. It is the architectural foundation upon which the entire AIXSELF ecosystem is built, enabling a decentralized cognition fabric where every node can learn and evolve independently yet cohesively.`,
  },
  aixa: {
    title: 'AIXA — The Deployment Interface',
    body: `The bridge between the human and their digital self.

AIXA provides the training dashboard and cloning pipelines (voice, video, text) that allow a human to teach and shape their AI counterpart.

It is the interface for deploying a human's unique intelligence, where every interaction, correction, and lesson refines the AI clone, making it a true extension of its owner's mind. All data remains local or on user-rented compute. No central host exists.`,
  },
};

type NotebookKey = keyof typeof NOTEBOOKS;

const TOPICS: { key: NotebookKey; label: string }[] = [
    { key: 'aixself', label: 'AIXSELF — The Instance' },
    { key: 'aixiam', label: 'AIXIAM — The Identity' },
    { key: 'aixeye', label: 'AIXEYE — The Governance' },
    { key: 'notefull', label: 'Notefull — The Memory' },
    { key: 'adept', label: 'ADEPT — The Kernel' },
    { key: 'aixa', label: 'AIXA — The Interface' },
];

export function NotebookViewer() {
  const [activeNotebook, setActiveNotebook] = useState<NotebookKey>('aixself');

  const notebook = NOTEBOOKS[activeNotebook];

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-[260px_1fr]">
      <Card className="sticky top-20 h-fit self-start p-4">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          The AIXSELF Universe
        </h2>
        <div className="flex flex-col gap-2">
          {TOPICS.map((topic) => (
            <Button
              key={topic.key}
              variant={activeNotebook === topic.key ? 'default' : 'outline'}
              className={cn(
                'w-full justify-start rounded-full px-3 text-left',
                activeNotebook === topic.key && 'bg-foreground text-background hover:bg-foreground/90'
              )}
              onClick={() => setActiveNotebook(topic.key)}
            >
              {topic.label}
            </Button>
          ))}
        </div>
      </Card>

      <Card className="min-h-[260px] p-6">
        <p className="mb-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
          Living Blueprint
        </p>
        <h3 className="mb-3 font-headline text-2xl font-semibold">
          {notebook.title}
        </h3>
        <Separator />
        <div className="mt-4 whitespace-pre-wrap font-mono text-sm leading-relaxed text-foreground/80">
          {notebook.body}
        </div>
      </Card>
    </section>
  );
}
