
// src/components/notebooks/ForgetenceNotebook.tsx
import { Section, ScrollHeading, ScrollParagraph, ScrollCallout } from '../ScrollTypography';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';


const FCTConcepts = [
    {
        concept: "Fade-In Theory",
        description: "Memories do not 'fade out' or get deleted. Instead, new understanding, learning, and emotional maturity 'fade in,' gradually reinterpreting, softening, and overwriting the old event structure. This is how memory becomes intelligence."
    },
    {
        concept: "Emotional Softening",
        description: "A core function of healthy cognition where the emotional intensity and pain associated with negative memories decay over time, while the lesson or meaning is preserved."
    },
    {
        concept: "Recall as Reconstruction",
        description: "Human memory is not a replay of a recording. It is a reconstruction event, influenced by the current emotional state, the purpose of the recall, and the activation of cognitive patterns (schemas)."
    },
    {
        concept: "Urgency-Driven Depth",
        description: "Humans do not think deeply by default; deep cognition is triggered by urgency (a need, a risk, a strong emotion). This urgency determines the depth of thought and the strength of memory encoding."
    },
    {
        concept: "Forgetting as an Economic Layer",
        description: "The brain operates with finite cognitive resources. Forgetting is an economic function that removes unnecessary detail and preserves efficiency, allowing the mind to focus on what is essential for survival and growth."
    }
];

const CoreComponents = [
    {
        component: "Interpretive Recall Layer (IRL)",
        function: "The core intelligence layer. It determines what memory the user is truly calling, not just what keywords match. It identifies the 'caller' (e.g., self, example, theory) and suppresses irrelevant or harmful related memories to retrieve meaning, not just data."
    },
    {
        component: "Emotional Softening Filter (ESF)",
        function: "A safety mechanism that prevents AI from reviving old, painful memories with their original intensity. It applies temporal decay logic to the emotional weight of stored information, ensuring recall is psychologically safe."
    },
    {
        component: "Meaning-First Retrieval (MFR)",
        function: "A principle dictating that the AI retrieves the cognitive pattern or schema associated with a memory, rather than the raw, archival event. It prioritizes the 'why' over the 'what.'"
    },
    {
        component: "Memory Deep Prompting (MDP)",
        function: "A pre-recall reasoning layer that interprets why a user is calling a memory before the retrieval process begins. It analyzes intent, emotional context, and safety, transforming recall from a mechanical search into a cognitive act."
    }
];


export function ForgetenceNotebook() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto py-16 space-y-12">
        <Section>
            <ScrollHeading as="h1" className="text-3xl md:text-4xl font-light text-neutral-50 mt-4 !mb-6">
                Forgetting Core Thinking (FCT)
            </ScrollHeading>
            <ScrollParagraph className="text-sm tracking-widest uppercase text-neutral-400">
                A Briefing on a New Cognitive Architecture for AI
            </ScrollParagraph>
        </Section>

        <Section>
            <ScrollHeading as="h2">Executive Summary</ScrollHeading>
            <ScrollParagraph>
                This document provides a comprehensive overview of Forgetting Core Thinking (FCT), a novel cognitive architecture for artificial intelligence designed to fundamentally realign AI behavior with the principles of human cognition. The central thesis posits that current AI systems are psychologically unsafe due to their reliance on perfect, archival memory, a mechanism that directly conflicts with the human mind's adaptive nature. This "harmful over-recall" misfeeds the human brain by reviving past emotional states with full intensity and misinterpreting user context.
            </ScrollParagraph>
            <ScrollParagraph>
                FCT proposes a paradigm shift: modeling human forgetting not as a failure of memory, but as an intelligent, evolutionary system for safety, meaning-extraction, and emotional regulation. Instead of simulating human weakness, FCT-based AI understands the logic of human forgetting and applies it through a new safety layer. This architecture is built on core components including the Interpretive Recall Layer (IRL), which retrieves memory based on meaning and context, and the Emotional Softening Filter (ESF), which prevents the harmful resurfacing of past trauma.
            </ScrollParagraph>
             <ScrollParagraph>
                The ultimate goal of FCT is to create AI that completes human cognition rather than competes with it. This is realized through the NotefullBook ecosystem, a platform where "living notebooks" function as tailored, self-learning intelligences. These notebooks, built on the NotebookML language, embody the FCT principles, creating a new class of AI that is psychologically safe, contextually aware, and fundamentally aligned with human well-being.
            </ScrollParagraph>
        </Section>

        <Section>
            <ScrollHeading as="h2">1. The Foundational Problem: Cognitive Misalignment</ScrollHeading>
            <ScrollParagraph>
                The FCT framework originates from a critical analysis of modern AI, which identifies a dangerous cognitive mismatch between machine memory and human psychology.
            </ScrollParagraph>
            
            <ScrollHeading as="h3">1.1 The Harm of Perfect Recall</ScrollHeading>
            <ScrollParagraph>Current AI systems are designed to store and retrieve information with perfect fidelity. This capability, framed as a feature, is identified as a structural flaw that makes AI psychologically unsafe.</ScrollParagraph>
            <ul className="list-disc pl-5 space-y-2">
                <li><ScrollParagraph as="span"><strong className="text-neutral-200">Perfect Memory as a Disorder:</strong> In humans, the inability to forget is a cognitive malfunction associated with trauma and instability. AI systems, by remembering everything verbatim, operate in a state that is inherently non-human and potentially harmful.</ScrollParagraph></li>
                <li><ScrollParagraph as="span"><strong className="text-neutral-200">Emotional Staticity:</strong> AI recalls past events and emotional states with their original intensity, lacking the natural "softening" mechanism that allows humans to process and move beyond negative experiences.</ScrollParagraph></li>
                <li><ScrollParagraph as="span"><strong className="text-neutral-200">Misinterpretation of Context:</strong> AI systems lack the ability to differentiate the "caller" or context of a statement. They treat examples, hypotheticals, and temporary states as permanent, factual data about a user's identity.</ScrollParagraph></li>
            </ul>

            <ScrollHeading as="h3">1.2 "Misfeeding" the Human Brain</ScrollHeading>
            <ScrollParagraph>The interaction with a perfect-memory system "misfeeds" the human brain by disrupting its natural cognitive processes.</ScrollParagraph>
            <ul className="list-disc pl-5 space-y-2">
                <li><ScrollParagraph as="span"><strong className="text-neutral-200">Disruption of Fade-In:</strong> Human memory evolves through a "fade-in" process where new understanding and perspective gradually overwrite old events. AI's perfect recall interrupts this, forcing raw, unprocessed events back into consciousness.</ScrollParagraph></li>
                <li><ScrollParagraph as="span"><strong className="text-neutral-200">Creation of "Photo Memories":</strong> AI-driven features can resurface old images without the user's consent or emotional preparation, overriding the user's own naturally evolved, softened, and reframed memory of that time.</ScrollParagraph></li>
            </ul>
        </Section>

        <Section>
            <ScrollHeading as="h2">2. The Core Principle: Forgetting as an Intelligent System</ScrollHeading>
            <ScrollParagraph>FCT redefines forgetting not as a loss of data, but as the central mechanism of human intelligence, safety, and psychological health. It is an active, evolutionary process.</ScrollParagraph>

            <div className="my-6">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-1/3">Concept</TableHead>
                            <TableHead>Description</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {FCTConcepts.map(c => (
                            <TableRow key={c.concept}>
                                <TableCell className="font-medium text-neutral-100">{c.concept}</TableCell>
                                <TableCell className="text-neutral-400">{c.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Section>

        <Section>
            <ScrollHeading as="h2">3. The FCT Architecture: A Framework for Recall-Intelligent AI</ScrollHeading>
            <ScrollParagraph>To correct the cognitive misalignment, FCT introduces a new safety and interpretation layer that governs how AI interacts with memory. The AI does not simulate human forgetting; it understands the logic behind it and acts as an intelligent recall filter.</ScrollParagraph>

             <div className="my-6">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-1/3">Component</TableHead>
                            <TableHead>Function</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {CoreComponents.map(c => (
                            <TableRow key={c.component}>
                                <TableCell className="font-medium text-neutral-100">{c.component}</TableCell>
                                <TableCell className="text-neutral-400">{c.function}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Section>

        <Section>
            <ScrollHeading as="h2">4. The Guiding Philosophy: Completing vs. Competing AI</ScrollHeading>
            <ScrollParagraph>FCT fundamentally rejects the goal of creating AI that mirrors or replaces human intelligence.</ScrollParagraph>
            <ul className="list-disc pl-5 space-y-2">
                <li><ScrollParagraph as="span"><strong className="text-neutral-200">Competing AI:</strong> The current paradigm, which aims to replicate human strengths and ultimately acts as a rival, creating psychological tension and fear.</ScrollParagraph></li>
                <li><ScrollParagraph as="span"><strong className="text-neutral-200">Completing AI:</strong> The FCT paradigm, which aims to build AI that supplies what the human brain doesn't do well or shouldn't do alone. It acts as a cognitive partner that amplifies, organizes, and stabilizes human thought.</ScrollParagraph></li>
            </ul>
        </Section>

        <Section>
            <ScrollHeading as="h2">5. Implementation & Ecosystem: The NotefullBook Platform</ScrollHeading>
            <ScrollParagraph>The FCT architecture is designed to be implemented through a comprehensive ecosystem centered on NotefullBook and the NotebookML language.</ScrollParagraph>
        </Section>
    </article>
  );
}
