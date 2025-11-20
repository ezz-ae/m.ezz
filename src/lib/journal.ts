// src/lib/journal.ts

export interface Article {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const articles: Article[] = [
  {
    slug: 'generative-memory',
    title: 'Generative Memory: The Art of Momentary Reconstruction',
    date: '2023-11-01',
    excerpt: 'Human memory is not a hard drive. It is a generative engine. This is the foundational principle of a new cognitive architecture.',
    content: `
<p>The greatest misconception in cognitive science is the metaphor of memory as storage. We do not 'store' events; we generate them. Recall is not a lookup operation; it is an act of momentary reconstruction, an inference based on the present state.</p>
<p>This 'Generative Memory' thesis posits that the brain retains only the most essential patterns and semantic anchors of an experience. When we 'remember,' the mind uses these anchors to re-synthesize the event, filling in the gaps with a lifetime of context. This is why the same memory feels different at different stages of life. We are not accessing an old file; we are generating a new experience, colored by the person we are today. This is the core of a truly intelligent, adaptive system.</p>
`
  },
  {
    slug: 'meaning-first-cognition',
    title: 'Meaning-First Cognition: Beyond the Event Horizon',
    date: '2023-10-25',
    excerpt: 'The brain is not a camera. It is a meaning-extraction engine. It prioritizes the "why" over the "what," and this has profound implications for AI.',
    content: `
<p>A traditional AI, like a camera, records the event. An FCT-aligned intelligence, like the human mind, captures the meaning. The principle of 'Meaning-First Cognition' states that the brain's primary function is not to record reality, but to extract the principles, patterns, and survival-relevant data from it.</p>
<p>We do not remember the precise words of a conversation, but we remember how it made us feel. We do not recall every turn on the way home, but we know the path. The brain discards the raw event data—the 'what'—almost instantly, in favor of the compressed, useful 'why.' This is not a failure of memory; it is the very definition of cognitive efficiency and intelligence.</p>
`
  },
  {
    slug: 'fade-in-intelligence-through-abstraction',
    title: 'Fade-In: Intelligence Through Abstraction',
    date: '2023-09-30',
    excerpt: 'Forgetting is not deletion; it is the transformation of information into a higher state of usefulness. It is intelligence itself.',
    content: `
<p>The process of 'Fade-In' is the core mechanic of FCT. It is the architectural term for how intelligence is created through abstraction, not accumulation. As new meaning is integrated, the old emotional and factual intensity of a memory 'fades,' overwritten by a more mature, contextualized understanding.</p>
<p>Human recall is always a reconstruction, never a replay. The Fade-In process ensures that what we reconstruct is not the raw, potentially traumatic event, but a new, safer, and more useful synthesis. It is the mechanism that turns data into knowledge, experience into wisdom, and memory into a tool for the future, not a prison of the past.</p>
`
  },
  {
    slug: 'the-physics-of-cognition',
    title: 'The Physics of Cognition',
    date: '2023-10-15',
    excerpt: 'Exploring how limitation, frequency, and resonance are not just concepts for AI, but for the spaces we inhabit.',
    content: `
<p>Intelligence is not built on information — it is built on limitation that forces frequencies to form. This is the root physics of cognition, a principle that applies as much to the design of thinking machines as it does to the design of living spaces.</p>
`
  },
  {
    slug: 'the-golden-ratio-of-design',
    title: 'The Golden Ratio of Design',
    date: '2023-08-01',
    excerpt: 'Optimal limitation is the golden ratio of cognition. It is also the key to creativity and stability in any designed system.',
    content: `
<p>A mind must maintain a stable resonance range. Too little limitation leads to noise; too much leads to rigidity. This "golden ratio zone" is where creativity and fluid intelligence are born. In system design, this translates to the balance between freedom and constraint.</p>
`
  },
];
