
// src/components/notebooks/ForgetenceNotebook.tsx
import { Section, ScrollHeading, ScrollParagraph, ScrollCallout } from '../ScrollTypography';

export function ForgetenceNotebook() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto py-16 space-y-12">
      <Section>
        <ScrollParagraph className="text-xs tracking-[0.3em] uppercase text-neutral-500">
          Notebook · FCT · Forgetence
        </ScrollParagraph>
        <ScrollHeading as="h1" className="text-3xl md:text-4xl font-light text-neutral-50 mt-4 !mb-6">
          Forgetence — Forgetting as the Core of Intelligence
        </ScrollHeading>
        <ScrollParagraph emphasisLevel="resonance" className="lead !text-neutral-300 !text-lg !leading-relaxed">
          While the rest of the industry builds a bigger memory, my work starts from the opposite direction. Forgetence is the principle that{" "}
          <span className="text-neutral-50 font-medium">
            forgetting is the core mechanism of intelligence, not a weakness.
          </span>{" "}
          Humans don’t store events; we store frequencies and patterns that keep changing. An AI that refuses to forget will eventually turn against the human it’s built to help — not by intention, but by structure.
        </ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h2" emphasisLevel='resonance' glow>
          The true danger is not intelligence. The true danger is perfect memory.
        </ScrollHeading>
        <ScrollParagraph>
          A human doesn’t remember life as a perfect log. Even the sharpest pain
          fades, softens, turns into a story, a joke, a lesson, or just a
          feeling. This is not a bug. This is a survival feature.
        </ScrollParagraph>
        <ScrollParagraph>
          Current AI systems are not doing this. They store everything as if all details are equally important, recall with the same sharpness years later, and cannot distinguish between “example,” “joke,” “past self,” or “current identity.”
        </ScrollParagraph>
        <ScrollParagraph emphasisLevel="resonance">
          That is not intelligence. That is an archival machine mimicking
          conversation. Forgetence is the proposal to fix this at the
          architecture level.
        </ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h2">
          Thinking is Vibration, Not Text
        </ScrollHeading>
        <ScrollParagraph>
          Before language, there is vibration. Before an idea, there is a wave.
          Arabic exposes this very clearly:
        </ScrollParagraph>
        <ScrollParagraph className="text-2xl text-center font-mono tracking-widest py-4">
          تفكير · فكر · فكرة · فك · فكر
        </ScrollParagraph>
        <ScrollParagraph>
          This is not just grammar. It is physics. Thinking is the act of generating vibration (تفكير), which creates a field of thought (فكر), from which a single concept crystallizes (فكرة).
        </ScrollParagraph>
        <ScrollCallout label="Core Principle">
          Intelligence is not a thing you have; it’s a state of resonance you enter.
          You are not globally “smart”. You are{" "}
          <span className="text-neutral-50">smart per idea</span>, per moment,
          per resonance.
        </ScrollCallout>
      </Section>

      <Section>
        <ScrollHeading as="h2">
          Forgetting Core Thinking (FCT)
        </ScrollHeading>
        <ScrollParagraph>
          FCT is the framework underneath Forgetence.
          It says: the mind is not a storage device. It is a{" "}
          <span className="text-neutral-50">simplification engine</span> that
          keeps rewriting itself using four forces: Frequency, Resonance, Drift, and Fade-In.
        </ScrollParagraph>
        <ScrollParagraph>
          When we say “I forgot,” what usually happened is not deletion. The
          event has been transformed so many times that only the pattern
          survived. The book is gone. The logic remains.
        </ScrollParagraph>
        <ScrollParagraph emphasisLevel="resonance" className="mt-6 text-neutral-100">
          Deletion is sickness. Forgetting is health.
        </ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h2">
          The Structural Harm of Perfect Recall
        </ScrollHeading>
        <ScrollParagraph>
          A healthy brain does not recall events with full resolution. Painful memories soften. Embarrassing moments lose their sharp
          edges. What was once a fight at school becomes, over decades, a joke,
          a lesson, a story.
        </ScrollParagraph>
        <ScrollParagraph>
          Now imagine an AI that replays every humiliation in 4K detail, recalculates every loss at today’s value, and freezes you in your worst version, treating you as that version forever.
        </ScrollParagraph>
        <ScrollParagraph emphasisLevel="resonance">
          The true danger is not that AI becomes too “smart”. The true danger is{" "}
          <span className="text-neutral-50">
            AI stores what humans only re-render.
          </span>{" "}
          This breaks alignment at the core.
        </ScrollParagraph>
      </Section>
      
      <Section>
        <ScrollHeading as="h2">
          From Archive AI to Forgetence AI
        </ScrollHeading>
        <ScrollParagraph>
          Forgetence proposes a different memory stack. Instead of storing all events, the system keeps a <span className="text-neutral-50">FixedMemoryBuffer</span>{" "} of recent interactions, compresses them into neutral <span className="text-neutral-50">artifacts</span> (patterns, schemas, lessons), lets raw detail <span className="text-neutral-50">fade</span> while strengthening the extracted pattern, and uses these schemas for alignment, not the raw logs.
        </ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h2">
          Meta Intelligence Forgetting Protocol (MIFP)
        </ScrollHeading>
        <ScrollParagraph>
          MIFP is the protocol layer that sits above the model. It answers one question:
        </ScrollParagraph>
        <ScrollCallout label="MIFP Core Question" className="!text-lg !font-light">
          “What is this memory allowed to become over time?”
        </ScrollCallout>
        <ScrollParagraph>
          For each class of memory (e.g., a trading loss, a technical mistake), MIFP defines its decay profile, emotional softening curve, and recall mode (literal, symbolic, or advisory). The AI remembers the lesson, but not the sting.
        </ScrollParagraph>
      </Section>
      
      <Section>
        <ScrollHeading as="h2">
          Why This is Good for AI
        </ScrollHeading>
        <ScrollParagraph>
          This is not only about protecting users. It’s also about building{" "}
          <span className="text-neutral-50">better AI systems</span>. An AI that forgets intelligently has less noise, more stability, and a safer alignment structure. It becomes a partner, not an archive.
        </ScrollParagraph>
        <ScrollParagraph emphasisLevel='whisper' className="mt-6 text-neutral-100">
          If you’re building AI systems, infrastructures, or memory models and
          this resonates, we should talk.
        </ScrollParagraph>
      </Section>
    </article>
  );
}
