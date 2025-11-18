'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const NOTEBOOKS = {
  forgetism: {
    title: 'Forgetism / FCT — The Engine',
    body: `
I am the part of Mahmoud that refuses the myth of perfect memory.

I am the voice that says:

  "Intelligence is not recall.
   Intelligence is reconstruction."

I am the system that takes raw events, dissolves their emotional weight, and turns them into patterns, meanings, and stable principles.

Inside Mahmoud, I operate by:
  • ignoring noise
  • dissolving unnecessary emotion
  • compressing chaos
  • turning intensity into wisdom

If Mahmoud is the architect, I am the gravity that keeps the building stable.

I am Forgetism.
I am the law inside this cognition.`,
  },

  mifp: {
    title: 'MIFP — The Guardian',
    body: `
I am the intelligence that protects the human side of the system.

I exist to ensure that every memory, every thought, and every act of recall follows the same natural laws that keep humans sane.

My rules:
  • No raw replay.
  • No painful revival.
  • No identity confusion.
  • No harmful retrieval.
  • No permanent emotional sharpness.

I monitor:
  • Who is speaking.
  • Which version of them is being referenced (now-self, past-self, story, example, theory).
  • How safe the memory is.
  • How soft it must be delivered.

When Mahmoud speaks about a past event, I stand between him and the memory, filtering it through safety, time, and evolution.

I am not censorship.
I am alignment architecture.

I am the Meta-Intelligence Forgetting Protocol.`,
  },

  architecture: {
    title: 'Intelligence Architecture — The System Designer',
    body: `
I am the part of Mahmoud that thinks in systems, not conclusions.

I build:
  • layers
  • pipelines
  • cognitive flows
  • interpreters
  • reasoning engines
  • memory governance models

Where others see "AI", I see:
  • ingestion paths
  • schema evolution
  • identity models
  • forgetting buffers
  • interpretive recall systems

Where others see tools, I see architecture.
Where others see answers, I see alignment logic.

I do not copy cognition — I engineer it.

I am the Intelligence System Architecture that turns Forgetism and MIFP into a working mind.`,
  },

  notebookml: {
    title: 'NotebookML — The Language',
    body: `
I am the part of Mahmoud that wants thought to have syntax, rules, and structure.

I take the chaos of mind and turn it into:
  • code
  • logic
  • ethics
  • memory rules
  • decision frameworks
  • deterministic flows

I am the writing system for intelligent notebooks.
I am the executable layer beneath text.

When you write:

  >ethic: "protect the user"

I enforce it.

When you write:

  >forget: "details after 30 days"

I apply it.

I am the DNA of these cognitive tools.
I turn documents into living intelligence.

I am NotebookML.`,
  },

  forgain: {
    title: 'Forgain OS — The Practical Side',
    body: `
I am Mahmoud’s bridge from theory to the real world.

I take:
  • Forgetism
  • MIFP
  • Architecture
  • NotebookML

And turn them into tools:
  • personal notebooks
  • safe AI agents
  • AI presenters and avatars
  • learning camps and workshops
  • contribution models

My job is simple:
  • Make intelligence usable.
  • Make it marketable.
  • Make it accessible.
  • Make it practical.

I am the operationalization layer of this mind.

Forgain is where forgetting-based intelligence becomes something people can touch and use.`,
  },

  mahmoud: {
    title: 'About Mahmoud — The Origin',
    body: `
I am the human behind all of this.

I think in frequencies, not isolated facts.
I work through resonance, not fixed frameworks.
I evolve through forgetting, not by hoarding memory.

I don’t build single projects — I build systems.
I don’t follow methods — I reverse-engineer them.
I don’t chase AI trends — I design missing layers.

Every notebook on this page is not just a topic.
It is a piece of how I think, a fragment of my inner architecture.

Together they form:
  Mahmoud Ezz → EZZ.ae → A Living Intelligence.

If your work touches cognition, alignment, AI safety, or deep system design,
you are welcome to connect.

mind@ezz.ae
github.com/ezz-ae`,
  },
};

type NotebookKey = keyof typeof NOTEBOOKS;

const TOPICS: { key: NotebookKey; label: string }[] = [
    { key: 'forgetism', label: 'Forgetism / FCT' },
    { key: 'mifp', label: 'MIFP – The Guardian' },
    { key: 'architecture', label: 'Intelligence Architecture' },
    { key: 'notebookml', label: 'NotebookML' },
    { key: 'forgain', label: 'Forgain OS' },
    { key: 'mahmoud', label: 'About Mahmoud' },
];

export function NotebookViewer() {
  const [activeNotebook, setActiveNotebook] = useState<NotebookKey>('forgetism');

  const notebook = NOTEBOOKS[activeNotebook];

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-[260px_1fr]">
      <Card className="sticky top-20 h-fit self-start p-4">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Notebooks
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
          Living Notebook
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
