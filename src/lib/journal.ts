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
    slug: 'the-physics-of-cognition',
    title: 'The Physics of Cognition',
    date: '2023-10-15',
    excerpt: 'Exploring how limitation, frequency, and resonance are not just concepts for AI, but for the spaces we inhabit.',
    content: `
<p>Intelligence is not built on information — it is built on limitation that forces frequencies to form. This is the root physics of cognition, a principle that applies as much to the design of thinking machines as it does to the design of living spaces.</p>
<p>Without limitation, the universe is white noise. A building with unlimited space, unlimited materials, and unlimited form would be incoherent. It is the constraints of site, budget, program, and physics that give architecture its shape and meaning.</p>
`,
  },
  {
    slug: 'fade-in-and-architectural-memory',
    title: 'Fade-In: Why Systems Must Forget',
    date: '2023-09-22',
    excerpt: 'A system is a memory recalled. But perfect recall is a trauma loop. Our AIs, and our spaces, must evolve with us.',
    content: `
<p>A memory recalled without 'Fade-In' is a frequency played in the wrong era of the self. The same is true for architecture and AI. A system that does not age, weather, or adapt becomes a static relic, a memory played in the wrong context.</p>
<p>The concept of Fade-In in cognition is akin to patina in architecture. It is not decay; it is harmonization. It softens the sharpness of the new and converts raw detail into a pattern of lived experience.</p>
`,
  },
  {
    slug: 'the-golden-ratio-of-design',
    title: 'The Golden Ratio of Design',
    date: '2023-08-01',
    excerpt: 'Optimal limitation is the golden ratio of cognition. It is also the key to creativity and stability in any designed system.',
    content: `
<p>A mind must maintain a stable resonance range. Too little limitation leads to noise; too much leads to rigidity. This "golden ratio zone" is where creativity and fluid intelligence are born. In system design, this translates to the balance between freedom and constraint.</p>
<p>Finding this golden ratio is the core of the design process. It is not a formula, but a structural law. It is how we create systems that are stable yet inspiring, functional yet beautiful.</p>
`,
  },
];
