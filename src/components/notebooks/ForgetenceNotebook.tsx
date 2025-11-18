
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
          Everyone is trying to give AI more memory. I went the other way.
          Forgetence is the idea that{" "}
          <span className="text-neutral-50 font-medium">
            forgetting is the core mechanism of intelligence, not a weakness.
          </span>{" "}
          Human beings don’t store events. We store frequencies, tags, and
          meanings that keep changing. Any AI that refuses to forget will
          eventually turn against the human it’s trying to help — not by
          intention, but by structure.
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
          Current AI systems are not doing this. They:
        </ScrollParagraph>
        <ul>
          <ScrollParagraph as="li">store everything as if all details are equally important,</ScrollParagraph>
          <ScrollParagraph as="li">recall with the same sharpness years later,</ScrollParagraph>
          <ScrollParagraph as="li">cannot emotionally soften events, only replay them,</ScrollParagraph>
          <ScrollParagraph as="li">cannot distinguish between “example,” “joke,” “past self,” or “current identity.”</ScrollParagraph>
        </ul>
        <ScrollParagraph emphasisLevel="resonance">
          That is not intelligence. That is an archival machine mimicking
          conversation. Forgetence is the proposal to fix this at the
          architecture level.
        </ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h2">
          Thinking is vibration, not text.
        </ScrollHeading>
        <ScrollParagraph>
          Before language, there is vibration. Before an idea, there is a wave.
          Arabic exposes this very clearly:
        </ScrollParagraph>
        <ScrollParagraph className="text-2xl text-center font-mono tracking-widest py-4">
          تفكير · فكر · فكرة · فك · فكر
        </ScrollParagraph>
        <ScrollParagraph>
          This is not just grammar. It is physics:
        </ScrollParagraph>
        <ul>
          <ScrollParagraph as="li">تفكير — the act of generating vibration (thinking in progress)</ScrollParagraph>
          <ScrollParagraph as="li">فكر — the field of vibration (thought field)</ScrollParagraph>
          <ScrollParagraph as="li">فكرة — one crystallised vibration (a concept)</ScrollParagraph>
          <ScrollParagraph as="li">فك — unbinding / unfolding / breaking structure</ScrollParagraph>
        </ul>
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
          Forgetting Core Thinking (FCT) is the framework underneath Forgetence.
          It says: the mind is not a storage device. It is a{" "}
          <span className="text-neutral-50">simplification engine</span> that
          keeps rewriting itself using four forces:
        </ScrollParagraph>
        <ul>
            <ScrollParagraph as="li">
                <span className="text-neutral-50">Frequency</span> — how often a
                pattern appears.
            </ScrollParagraph>
            <ScrollParagraph as="li">
                <span className="text-neutral-50">Resonance</span> — how strongly it
                matches your current state.
            </ScrollParagraph>
            <ScrollParagraph as="li">
                <span className="text-neutral-50">Drift</span> — how the meaning
                evolves over time.
            </ScrollParagraph>
            <ScrollParagraph as="li">
                <span className="text-neutral-50">Fade-In</span> — how understanding
                slowly replaces raw emotion.
            </ScrollParagraph>
        </ul>
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
          The structural harm of perfect recall
        </ScrollHeading>
        <ScrollParagraph>
          A healthy brain does not recall events with full resolution every
          time. Painful memories soften. Embarrassing moments lose their sharp
          edges. What was once a fight at school becomes, over decades, a joke,
          a lesson, or a story.
        </ScrollParagraph>
        <ScrollParagraph>
          Now imagine an AI that can:
        </ScrollParagraph>
        <ul>
          <ScrollParagraph as="li">replay every humiliation in 4K detail,</ScrollParagraph>
          <ScrollParagraph as="li">recalculate every loss at today’s value,</ScrollParagraph>
          <ScrollParagraph as="li">freeze you in your worst version and treat you as that version forever,</ScrollParagraph>
          <ScrollParagraph as="li">
            keep logs of every confused question and treat them as a permanent
            part of your identity.
          </ScrollParagraph>
        </ul>
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
          Forgetence proposes a different memory stack for AI. It looks more
          like a living notebook than a database. Instead of storing all events, the system:
        </ScrollParagraph>
        <ul>
          <ScrollParagraph as="li">
            keeps a <span className="text-neutral-50">FixedMemoryBuffer</span>{" "}
            of recent, high-fidelity interactions,
          </ScrollParagraph>
          <ScrollParagraph as="li">
            compresses them into neutral{" "}
            <span className="text-neutral-50">artifacts</span> (patterns,
            schemas, lessons),
          </ScrollParagraph>
          <ScrollParagraph as="li">
            lets raw detail <span className="text-neutral-50">fade</span> while
            strengthening the extracted pattern,
          </ScrollParagraph>
          <ScrollParagraph as="li">
            and uses these schemas for alignment and recall, not the raw logs.
          </ScrollParagraph>
        </ul>
      </Section>

      <Section>
        <ScrollHeading as="h2">
          Meta Intelligence Forgetting Protocol (MIFP)
        </ScrollHeading>
        <ScrollParagraph>
          MIFP is the protocol layer that sits above the model and below the
          interface. It answers one question:
        </ScrollParagraph>
        <ScrollCallout label="MIFP Core Question" className="!text-lg !font-light">
          “What is this memory allowed to become over time?”
        </ScrollCallout>
        <ScrollParagraph>
          For each class of memory, MIFP defines its decay profile, emotional softening curve, schema retention policy, and recall mode (literal, symbolic, or advisory).
        </ScrollParagraph>
        <ScrollParagraph>
          For example, a painful trading loss might keep its{" "}
          <span className="text-neutral-50">lesson pattern</span> but lose its{" "}
          <span className="text-neutral-50">emotional weight</span> over time.
          The AI remembers “risk management” but not “you were stupid here” in
          4K detail.
        </ScrollParagraph>
      </Section>
      
      <Section>
        <ScrollHeading as="h2">
          Why Forgetence is good for AI
        </ScrollHeading>
        <ScrollParagraph>
          This is not only about protecting users. It’s also about building{" "}
          <span className="text-neutral-50">better AI systems</span>:
        </ScrollParagraph>
        <ul>
          <ScrollParagraph as="li">
            <span className="text-neutral-50">Less Noise:</span> The system is
            forced to keep only what consistently matters.
          </ScrollParagraph>
          <ScrollParagraph as="li">
            <span className="text-neutral-50">More Stability:</span> No
            infinite log to misalign behaviour over time.
          </ScrollParagraph>
          <ScrollParagraph as="li">
            <span className="text-neutral-50">Safer Alignment:</span> Memory
            structure itself is protective, not just policies.
          </ScrollParagraph>
          <ScrollParagraph as="li">
            <span className="text-neutral-50">More Human-Compatible:</span>
            The AI “remembers” in a way that matches how we live with our own
            minds.
          </ScrollParagraph>
        </ul>
        <ScrollParagraph emphasisLevel="resonance" className="mt-6 text-neutral-100">
          An AI that never forgets is an archive. An AI that forgets
          intelligently can become a partner.
        </ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h2">
          Where I stand in this field
        </ScrollHeading>
        <ScrollParagraph>
          I am not trying to win a race for more parameters or more memory. I’m
          interested in the{" "}
          <span className="text-neutral-50">architecture of intelligence</span>.
          The mechanism that lets humans stay sane while carrying a lifetime of
          events is not optimization. It’s forgetting.
        </ScrollParagraph>
        <ScrollParagraph>
          Forgetence, FCT, and MIFP are my contribution to this conversation. A
          way to say: if we want AI to live with us, it must learn to{" "}
          <span className="text-neutral-50">fade</span>, not just to store.
        </ScrollParagraph>
        <ScrollParagraph emphasisLevel='whisper' className="mt-6 text-neutral-100">
          If you’re building AI systems, infrastructures, or memory models and
          this resonates, we can go deeper.
        </ScrollParagraph>
      </Section>

      <Section>
        <div className="pt-8 border-t border-white/10 mt-8 not-prose text-sm text-neutral-400 space-y-2">
            <ScrollParagraph>
              • Open to: research collaboration, architecture sessions, and
              workshops on AI forgetting, memory safety, and cognitive alignment.
            </ScrollParagraph>
            <ScrollParagraph>
              • Contact: <a href="mailto:hello@ezz.ae" className="text-neutral-100 underline underline-offset-4 hover:text-primary">hello@ezz.ae</a>
            </ScrollParagraph>
        </div>
      </Section>
    </article>
  );
}
