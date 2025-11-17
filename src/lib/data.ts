import type { Project, Post } from './types';

export const projects: Project[] = [
  {
    slug: 'the-obelisk-villa',
    title: 'The Obelisk Villa',
    category: 'Residential',
    description: 'A study in monolithic forms and minimalist living.',
    longDescription:
      'The Obelisk Villa is a bold statement in residential architecture, characterized by its striking monolithic form that rises from the landscape. It emphasizes verticality and light, with interior spaces designed to foster a sense of serene isolation and connection to the sky. The material palette is constrained to concrete, glass, and dark wood, creating a powerful, cohesive aesthetic.',
    keyElements: 'monolithic form, verticality, minimalist interior, natural light',
    coverImage: 'p1-cover',
    images: ['p1-img1', 'p1-img2'],
    year: 2023,
  },
  {
    slug: 'symmetry-tower',
    title: 'Symmetry Tower',
    category: 'Commercial',
    description: 'A balanced and rhythmic facade for a modern workspace.',
    longDescription:
      'Symmetry Tower redefines the urban office building with a facade that plays on rhythm and balance. The design uses a modular system to create a dynamic yet harmonious visual effect, optimizing both natural light and energy efficiency. Inside, flexible floor plans cater to the evolving needs of modern businesses.',
    keyElements: 'modular facade, rhythmic patterns, energy efficiency, flexible workspace',
    coverImage: 'p2-cover',
    images: ['p2-img1', 'p2-img2'],
    year: 2022,
  },
  {
    slug: 'the-resonance-archive',
    title: 'The Resonance Archive',
    category: 'Cultural',
    description: 'A space where history and modernity resonate.',
    longDescription:
      'As a national archive, The Resonance is designed to be a vessel for memory and a forum for the future. The architecture uses sweeping curves and acoustically optimized materials to create a space that feels both monumental and intimate. It invites visitors into a dialogue with the past through its carefully orchestrated spatial sequences.',
    keyElements: 'curved forms, acoustic design, spatial sequencing, monumental intimacy',
    coverImage: 'p3-cover',
    images: ['p3-img1', 'p3-img2'],
    year: 2024,
  },
  {
    slug: 'desert-bloom-house',
    title: 'Desert Bloom House',
    category: 'Residential',
    description: 'An oasis of brutalist architecture in the arid landscape.',
    longDescription:
      'Nestled in an arid landscape, the Desert Bloom House is a testament to the beauty of brutalism. Its heavy concrete forms provide shelter from the harsh climate, while strategically placed openings and courtyards create cool, shaded living areas that connect with the stark beauty of the desert.',
    keyElements: 'brutalist concrete, climate-responsive design, courtyards, landscape integration',
    coverImage: 'p4-cover',
    images: ['p4-img1'],
    year: 2021,
  },
  {
    slug: 'canopy-cabin',
    title: 'Canopy Cabin',
    category: 'Residential',
    description: 'A minimalist retreat merging with the forest canopy.',
    longDescription:
      'Elevated among the trees, Canopy Cabin is a minimalist retreat designed for immersion in nature. The structure is lightweight, touching the ground lightly, and uses natural wood and large glass panels to blur the boundary between inside and out. It is a space for quiet reflection and connection to the environment.',
    keyElements: 'lightweight structure, elevation, natural materials, indoor-outdoor living',
    coverImage: 'p5-cover',
    images: ['p5-img1'],
    year: 2022,
  },
  {
    slug: 'the-oracle',
    title: 'The Oracle',
    category: 'Commercial',
    description: 'A crystalline skyscraper reflecting the city\'s dynamism.',
    longDescription:
      'The Oracle is a landmark skyscraper with a crystalline glass facade that reflects the sky and the surrounding city, constantly changing its appearance. Its unique form is engineered to minimize wind load and maximize views, offering premium office space with a connection to the urban fabric.',
    keyElements: 'crystalline facade, reflective glass, aerodynamic form, panoramic views',
    coverImage: 'p6-cover',
    images: ['p6-img1'],
    year: 2020,
  },
];

export const posts: Post[] = [
  {
    slug: 'the-physics-of-cognition',
    title: 'The Physics of Cognition in Architecture',
    date: '2023-10-15',
    excerpt: 'Exploring how limitation, frequency, and resonance are not just concepts for AI, but for the spaces we inhabit.',
    content: `
<p>Intelligence is not built on information — it is built on limitation that forces frequencies to form. This is the root physics of cognition, a principle that applies as much to the design of thinking machines as it does to the design of living spaces.</p>
<p>Without limitation, the universe is white noise. A building with unlimited space, unlimited materials, and unlimited form would be incoherent. It is the constraints of site, budget, program, and physics that give architecture its shape and meaning. Just as limitation collapses chaos into a frequency, constraints collapse infinite architectural possibilities into a coherent design—a signal, a form, a meaning.</p>
`,
    coverImage: 'blog1-cover',
  },
  {
    slug: 'fade-in-and-architectural-memory',
    title: 'Fade-In: Why Buildings Must Forget',
    date: '2023-09-22',
    excerpt: 'A building is a memory recalled. But perfect recall is a trauma loop. Our spaces must evolve with us.',
    content: `
<p>A memory recalled without 'Fade-In' is a frequency played in the wrong era of the self. The same is true for architecture. A building that does not age, weather, or adapt to its inhabitants becomes a static relic, a memory played in the wrong context.</p>
<p>The concept of Fade-In in cognition is akin to patina in architecture. It is not decay; it is harmonization. It softens the sharpness of the new, aligns the structure with its current use, and converts raw detail into a pattern of lived experience. Forgetting is required for intelligence, and weathering is required for architecture to truly live.</p>
`,
    coverImage: 'blog2-cover',
  },
  {
    slug: 'the-golden-ratio-of-design',
    title: 'The Golden Ratio of Design',
    date: '2023-08-01',
    excerpt: 'Optimal limitation is the golden ratio of cognition. It is also the key to creativity and stability in design.',
    content: `
<p>A mind must maintain a stable resonance range. Too little limitation leads to noise; too much leads to rigidity. This "golden ratio zone" is where creativity and fluid intelligence are born. In architecture, this translates to the balance between programmatic freedom and structural constraint, between artistic expression and functional necessity.</p>
<p>Finding this golden ratio is the core of the design process. It is not a formula, but a structural law. It is how we create buildings that are stable yet inspiring, functional yet beautiful, aligned with human needs and the physics of our world.</p>
`,
    coverImage: 'blog3-cover',
  },
];
