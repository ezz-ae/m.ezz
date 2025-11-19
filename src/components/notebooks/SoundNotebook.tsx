// src/components/notebooks/SoundNotebook.tsx
import { Section, ScrollHeading, ScrollParagraph } from '../ScrollTypography';

export function SoundNotebook() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto py-16 space-y-12">
      <Section>
        <ScrollParagraph className="text-xs tracking-[0.3em] uppercase text-neutral-500">
          Notebook · Ezzton · Setup
        </ScrollParagraph>
        <ScrollHeading as="h1" className="text-3xl md:text-4xl font-light text-neutral-50 mt-4 !mb-6">
          Sound as Intelligence and Identity
        </ScrollHeading>
        <ScrollParagraph emphasisLevel="resonance" className="lead !text-neutral-300 !text-lg !leading-relaxed">
          The exploration of sound began not from the perspective of an artist, but as an architect. Music and sound design are not separate from system building; they are another form of it. It's the architecture of time, frequency, and emotion.
        </ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h2">Sound as an Intelligence System</ScrollHeading>
        <ScrollParagraph>A piece of music is an intelligence system with its own rules. It uses fundamental components that are deeply connected to cognition:</ScrollParagraph>
        <ul className="list-disc pl-5 space-y-2">
            <ScrollParagraph as="li"><strong>Rhythm & Repetition:</strong> Establishes a predictable pattern, the baseline frequency.</ScrollParagraph>
            <ScrollParagraph as="li"><strong>Frequency & Harmony:</strong> The layering of signals to create resonance or dissonance.</ScrollParagraph>
            <ScrollParagraph as="li"><strong>Emotional Tagging:</strong> The way a melody or chord progression attaches itself to a feeling or memory.</ScrollParagraph>
            <ScrollParagraph as="li"><strong>Tension & Release:</strong> The core loop of cognitive engagement, present in both problem-solving and music.</ScrollParagraph>
        </ul>
      </Section>

      <Section>
        <ScrollHeading as="h2">The Track: "Setup"</ScrollHeading>
        <ScrollParagraph>"Setup" is an expression of a specific cognitive state. It's about the build-up phase of a complex system. It starts with a simple, repeating pattern (the core idea), then layers of complexity are added (the challenges, the variables). The track builds in intensity, representing the increasing cognitive load, before resolving into a clear, driving rhythm. It's the sound of a system being assembled, the feeling of moving from chaos to order.</ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h2">Connecting Sound, Thought, and Forgetting</ScrollHeading>
        <ScrollParagraph>Making music is a direct, hands-on way to explore the concepts at play in AI architecture. The process of composing mirrors the principles of FCT (Forgetting Core Thinking): you start with many ideas (a high-noise state), and through repetition, refinement, and subtraction (forgetting), you distill them into a core pattern (the signal). The final track is not the sum of all the notes played; it's the resonant frequency that survived the process. It's intelligence forged through limitation.</ScrollParagraph>
      </Section>
    </article>
  );
}
