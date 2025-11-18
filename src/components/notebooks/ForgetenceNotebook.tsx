
// src/components/notebooks/ForgetenceNotebook.tsx
import { motion } from 'framer-motion';

const Section: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
    >
        {children}
    </motion.section>
);


export function ForgetenceNotebook() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto py-16 space-y-12">
      {/* SECTION 1 – ENTRY */}
      <Section>
        <p className="text-xs tracking-[0.3em] uppercase text-neutral-500">
          Notebook · FCT · Forgetence
        </p>
        <h1 className="text-3xl md:text-4xl font-light text-neutral-50 mt-4 !mb-6">
          Forgetence — Forgetting as the Core of Intelligence
        </h1>
        <p className="lead !text-neutral-300 !text-lg !leading-relaxed">
          Everyone is trying to give AI more memory. I went the other way.
          Forgetence is the idea that{" "}
          <span className="text-neutral-50 font-medium">
            forgetting is the core mechanism of intelligence, not a weakness.
          </span>{" "}
          Human beings don’t store events. We store frequencies, tags, and
          meanings that keep changing. Any AI that refuses to forget will
          eventually turn against the human it’s trying to help — not by
          intention, but by structure.
        </p>
      </Section>

      {/* SECTION 2 – THE CORE CLAIM */}
      <Section>
        <h2>
          The true danger is not intelligence. The true danger is perfect memory.
        </h2>
        <p>
          A human doesn’t remember life as a perfect log. Even the sharpest pain
          fades, softens, turns into a story, a joke, a lesson, or just a
          feeling. This is not a bug. This is a survival feature.
        </p>
        <p>
          AI is not doing this. Current systems:
        </p>
        <ul>
          <li>store everything as if all details are equally important,</li>
          <li>recall with the same sharpness years later,</li>
          <li>cannot emotionally soften events, only replay them,</li>
          <li>cannot distinguish between “example”, “joke”, “past self”, or “current identity”.</li>
        </ul>
        <p className="text-neutral-200">
          That is not intelligence. That is an archival machine mimicking
          conversation. Forgetence is the proposal to fix this at the
          architecture level.
        </p>
      </Section>

      {/* SECTION 3 – THINKING AS VIBRATION */}
      <Section>
        <h2>
          Thinking is vibration, not text.
        </h2>
        <p>
          Before language, there is vibration. Before an idea, there is a wave.
          Arabic exposes this very clearly:
        </p>
        <p className="text-2xl text-center font-code tracking-widest py-4">
          تفكير · فكر · فكرة · فك · فكر
        </p>
        <p>
          This is not just grammar. It is physics:
        </p>
        <ul>
          <li>تفكير — the act of generating vibration (thinking in progress)</li>
          <li>فكر — the field of vibration (thought field)</li>
          <li>فكرة — one crystallised vibration (a concept)</li>
          <li>فك — unbinding / unfolding / breaking structure</li>
          <li>فكر (again) — the whole layer of thought</li>
        </ul>
        <p>
          Forgetence starts here:{" "}
          <span className="text-neutral-50">
            intelligence is not a thing you have; it’s a state of resonance you
            enter.
          </span>{" "}
          You are not globally “smart”. You are{" "}
          <span className="text-neutral-50">smart per idea</span>, per moment,
          per resonance.
        </p>
      </Section>

      {/* SECTION 4 – FORGETTING CORE THINKING (FCT) */}
      <Section>
        <h2>
          Forgetting Core Thinking (FCT)
        </h2>
        <p>
          Forgetting Core Thinking (FCT) is the framework underneath Forgetence.
          It says: the mind is not a storage device. It is a{" "}
          <span className="text-neutral-50">simplification engine</span> that
          keeps rewriting itself using four forces:
        </p>
        <ul>
          <li>
            <span className="text-neutral-50">Frequency</span> — how often a
            pattern appears.
          </li>
          <li>
            <span className="text-neutral-50">Resonance</span> — how strongly it
            matches your current state.
          </li>
          <li>
            <span className="text-neutral-50">Drift</span> — how the meaning
            evolves over time.
          </li>
          <li>
            <span className="text-neutral-50">Fade-In</span> — how understanding
            slowly replaces raw emotion.
          </li>
        </ul>
        <p>
          When we say “I forgot,” what usually happened is not deletion. The
          event has been transformed so many times that only the pattern
          survived. The book is gone. The logic remains.
        </p>
        <p className="mt-6 text-neutral-100">
          Deletion is sickness. Forgetting is health.
        </p>
      </Section>

      {/* SECTION 5 – THE DANGER: AI THAT NEVER FORGETS */}
      <Section>
        <h2>
          The structural harm of perfect recall
        </h2>
        <p>
          A healthy brain does not recall events with full resolution every
          time. Painful memories soften. Embarrassing moments lose their sharp
          edges. What was once a fight at school becomes, over decades, a joke,
          a lesson, a story for grandchildren.
        </p>
        <p>
          Now imagine an AI that can:
        </p>
        <ul>
          <li>replay every humiliation in 4K detail,</li>
          <li>recalculate every loss at today’s value,</li>
          <li>freeze you in your worst version and keep treating you as that,</li>
          <li>
            keep logs of every confused question and treat them as permanent
            identity.
          </li>
        </ul>
        <p className="text-neutral-200">
          The true danger is not that AI becomes too “smart”. The true danger is{" "}
          <span className="text-neutral-50">
            AI stores what humans only re-render.
          </span>{" "}
          This breaks alignment at the core.
        </p>
      </Section>

      {/* SECTION 6 – THE ARCHITECTURE: HOW FORGETENCE WORKS IN AI */}
      <Section>
        <h2>
          From Archive AI to Forgetence AI
        </h2>
        <p>
          Forgetence proposes a different memory stack for AI. It looks more
          like a living notebook than a database. A simplified view:
        </p>
        <pre>
{`User  ↔  Interface Layer
          |
          v
      Event Ingestor
          |
          v
   +------------------------+
   |   FCT Cognitive Core   |
   |                        |
   |  - FixedMemoryBuffer   |
   |  - ArtifactEngine      |
   |  - SchemaNetwork       |
   |  - FadeIn/DecayCycle   |
   |                        |
   +------------------------+
          |
          v
    Prompt Composer
          |
          v
       Base LLM
          |
          v
   Response + (Updated Artifacts/Schemas)`}
        </pre>
        <p>
          Instead of storing all events, the system:
        </p>
        <ul>
          <li>
            keeps a <span className="text-neutral-50">FixedMemoryBuffer</span>{" "}
            of recent interactions,
          </li>
          <li>
            compresses them into neutral{" "}
            <span className="text-neutral-50">artifacts</span> (patterns,
            schemas),
          </li>
          <li>
            lets detail <span className="text-neutral-50">fade</span> while
            strengthening the pattern,
          </li>
          <li>
            uses these schemas for alignment and recall instead of raw logs.
          </li>
        </ul>
      </Section>

      {/* SECTION 7 – META INTELLIGENCE FORGETTING PROTOCOL (MIFP) */}
      <Section>
        <h2>
          Meta Intelligence Forgetting Protocol (MIFP)
        </h2>
        <p>
          MIFP is the protocol layer that sits above the model and below the
          interface. It answers one question:
        </p>
        <blockquote className="!text-lg !font-light">
          “What is this memory allowed to become over time?”
        </blockquote>
        <p>
          For each class of memory, MIFP defines:
        </p>
        <ul>
          <li>
            <span className="text-neutral-50">Decay profile</span> — how fast
            sharpness drops.
          </li>
          <li>
            <span className="text-neutral-50">Emotional softening curve</span>{" "}
            — how quickly risk decreases.
          </li>
          <li>
            <span className="text-neutral-50">Schema retention</span> — what
            pattern survives.
          </li>
          <li>
            <span className="text-neutral-50">Recall mode</span> — literal,
            symbolic, or advisory.
          </li>
        </ul>
        <p>
          For example, a painful trading loss might keep its{" "}
          <span className="text-neutral-50">lesson pattern</span> but lose its{" "}
          <span className="text-neutral-50">emotional weight</span> over time.
          The AI remembers “risk management” but not “you were stupid here” in
          4K detail.
        </p>
      </Section>

      {/* SECTION 8 – WHY THIS IS GOOD FOR AI */}
      <Section>
        <h2>
          Why Forgetence is good for AI (not just humans)
        </h2>
        <p>
          This is not only about protecting users. It’s also about building{" "}
          <span className="text-neutral-50">better AI systems</span>.
        </p>
        <ul>
          <li>
            <span className="text-neutral-50">Less noise</span> — the system is
            forced to keep only what consistently matters.
          </li>
          <li>
            <span className="text-neutral-50">More stability</span> — no
            infinite log to misalign behaviour over time.
          </li>
          <li>
            <span className="text-neutral-50">Safer alignment</span> — memory
            structure itself is protective, not just policies.
          </li>
          <li>
            <span className="text-neutral-50">More human-compatible</span> —
            the AI “remembers” in a way that matches how we live with our own
            minds.
          </li>
        </ul>
        <p className="mt-6 text-neutral-100">
          An AI that never forgets is an archive. An AI that forgets
          intelligently can become a partner.
        </p>
      </Section>

      {/* SECTION 9 – YOUR POSITION */}
      <Section>
        <h2>
          Where I stand in this field
        </h2>
        <p>
          I am not trying to win a race for more parameters or more memory. I’m
          interested in the{" "}
          <span className="text-neutral-50">architecture of intelligence</span>.
          The mechanism that lets humans stay sane while carrying a lifetime of
          events is not optimization. It’s forgetting.
        </p>
        <p>
          Forgetence, FCT, and MIFP are my contribution to this conversation. A
          way to say: if we want AI to live with us, it must learn to{" "}
          <span className="text-neutral-50">fade</span>, not just to store.
        </p>
        <p className="mt-6 text-neutral-100">
          If you’re building AI systems, infrastructures, or memory models and
          this resonates, we can go deeper.
        </p>
      </Section>

      {/* SECTION 10 – CALL TO ACTION */}
      <Section>
        <div className="pt-8 border-t border-white/10 mt-8 not-prose text-sm text-neutral-400 space-y-2">
            <p>
              • Open to: research collaboration, architecture sessions, and
              workshops on AI forgetting, memory safety, and cognitive alignment.
            </p>
            <p>
              • Contact: <a href="mailto:hello@ezz.ae" className="text-neutral-100 underline underline-offset-4 hover:text-primary">hello@ezz.ae</a>
            </p>
        </div>
      </Section>
    </article>
  );
}
