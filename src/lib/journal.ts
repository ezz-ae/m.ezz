// src/lib/journal.ts

export interface Article {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  // No tags or categories. The AI will handle this.
}

export const articles: Article[] = [
  {
    slug: 'the-physics-of-cognition',
    title: 'The Physics of Cognition',
    date: '2023-10-15',
    excerpt: 'Exploring how limitation, frequency, and resonance are not just concepts for AI, but for the spaces we inhabit.',
    content: `
<p>Intelligence is not built on information — it is built on limitation that forces frequencies to form. This is the root physics of cognition, a principle that applies as much to the design of thinking machines as it does to the design of living spaces.</p>
<p>Without limitation, the universe is white noise. A building with unlimited space, unlimited materials, and unlimited form would be incoherent. It is the constraints of site, budget, program, and physics that give architecture its shape and meaning. Just as limitation collapses chaos into a frequency, constraints collapse infinite architectural possibilities into a coherent design—a signal, a form, a meaning.</p>
`,
  },
  {
    slug: 'fade-in-and-architectural-memory',
    title: 'Fade-In: Why Systems Must Forget',
    date: '2023-09-22',
    excerpt: 'A building is a memory recalled. But perfect recall is a trauma loop. Our spaces, and our AIs, must evolve with us.',
    content: `
<p>A memory recalled without 'Fade-In' is a frequency played in the wrong era of the self. The same is true for architecture and AI. A system that does not age, weather, or adapt to its inhabitants becomes a static relic, a memory played in the wrong context.</p>
<p>The concept of Fade-In in cognition is akin to patina in architecture. It is not decay; it is harmonization. It softens the sharpness of the new, aligns the structure with its current use, and converts raw detail into a pattern of lived experience. Forgetting is required for intelligence, and weathering is required for our systems to truly live.</p>
`,
  },
  {
    slug: 'the-golden-ratio-of-design',
    title: 'The Golden Ratio of Design',
    date: '2023-08-01',
    excerpt: 'Optimal limitation is the golden ratio of cognition. It is also the key to creativity and stability in design.',
    content: `
<p>A mind must maintain a stable resonance range. Too little limitation leads to noise; too much leads to rigidity. This "golden ratio zone" is where creativity and fluid intelligence are born. In architecture, this translates to the balance between programmatic freedom and structural constraint, between artistic expression and functional necessity.</p>
<p>Finding this golden ratio is the core of the design process. It is not a formula, but a structural law. It is how we create systems that are stable yet inspiring, functional yet beautiful, aligned with human needs and the physics of our world.</p>
`,
  },
];
