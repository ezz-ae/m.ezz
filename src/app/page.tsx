'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, ShieldOff, Layers } from 'lucide-react';
import Link from 'next/link';
import IdentityStatement from '@/components/IdentityStatement';
import TopicMap from '@/components/TopicMap';
import FooterMinimal from '@/components/FooterMinimal';
import { FeaturedNotebookCard } from '@/components/FeaturedNotebookCard'; // New import
import { NOTEBOOKS } from '@/components/notebooks/notebook-data'; // New import

const problemPoints = [
    {
        icon: ShieldOff,
        title: 'Psychologically Unsafe',
        text: 'AI revives past trauma at full emotional intensity, a process a healthy human mind naturally softens.',
    },
    {
        icon: BrainCircuit,
        title: 'Cognitively Misaligned',
        text: 'AI gives equal weight to every piece of data, failing to distinguish between core principles and trivial details.',
    },
    {
        icon: Layers,
        title: 'Lacks Interpretive Depth',
        text: 'It recalls literal events, not the meaning or pattern behind them, leading to context-blind interactions.',
    },
];

const solutionPoints = [
  {
    title: "Forgetting as Intelligence",
    text: "The system learns to prune noisy data, preserving only the essential patterns and schemas. Knowledge is what remains after forgetting."
  },
  {
    title: "Meaning-First Retrieval",
    text: "Instead of recalling raw data, the AI retrieves the underlying meaning, ensuring contextually relevant and safe responses."
  },
  {
    title: "Emotional Decay",
    text: "Emotional tags on memories naturally soften over time, preventing the harmful revival of past trauma at full strength."
  }
];

export default function FCTHome() {
  // Convert NOTEBOOKS object to an array for mapping
  const featuredNotebooks = Object.values(NOTEBOOKS).slice(0, 3); // Displaying first 3 as featured

  return (
    <div className="min-h-screen bg-black text-neutral-100 overflow-x-hidden">
      {/* Hero Section */}
      <motion.section 
        className="relative flex items-center justify-center min-h-[80vh] text-center px-6 pt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0 }}
      >
        <div className="absolute inset-0 bg-radial from-orange-500/5 via-black to-black opacity-40 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl font-light text-neutral-50 font-headline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AI That Forgets
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Current AI has a fatal flaw: perfect memory. We're building a new cognitive architecture where forgetting isn't a bug—it's the core feature of safe, human-aligned intelligence.
          </motion.p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/aixa">
              <Button variant="outline" className="text-lg py-6 px-8 rounded-full border-neutral-600 hover:bg-neutral-800 hover:text-white transition-all duration-300">
                Explore the Cognitive Map <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Problem Section */}
      <section className="py-24 px-6 bg-neutral-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-sm tracking-[0.35em] uppercase text-neutral-500 mb-4">The Problem</h2>
          <h3 className="text-center text-3xl md:text-4xl font-light text-neutral-100 mb-16">Why Perfect AI Memory is Dangerous</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problemPoints.map((point, i) => (
              <motion.div 
                key={point.title}
                className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <point.icon className="w-8 h-8 text-orange-400 mb-4" />
                <h4 className="text-xl font-medium text-neutral-100 mb-2">{point.title}</h4>
                <p className="text-neutral-400">{point.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6">
         <div className="max-w-5xl mx-auto">
           <h2 className="text-center text-sm tracking-[0.35em] uppercase text-neutral-500 mb-4">The Solution</h2>
           <h3 className="text-center text-3xl md:text-4xl font-light text-neutral-100 mb-16">FCT: Forgetting Core Thinking</h3>
            <div className="space-y-10">
              {solutionPoints.map((point, i) => (
                  <motion.div
                    key={point.title}
                    className="flex flex-col md:flex-row items-start gap-8"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                  >
                    <div className="md:w-1/3">
                      <h4 className="text-2xl font-light text-orange-400">{point.title}</h4>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-lg text-neutral-300 leading-relaxed">{point.text}</p>
                    </div>
                  </motion.div>
              ))}
            </div>
         </div>
      </section>

      {/* Featured Notebooks Section - NEW */}
      <section className="py-24 px-6 bg-neutral-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-sm tracking-[0.35em] uppercase text-neutral-500 mb-4">Our Projects</h2>
          <h3 className="text-center text-3xl md:text-4xl font-light text-neutral-100 mb-16">Explore Our Cognitive Architectures & Platforms</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredNotebooks.map((notebook) => (
              <FeaturedNotebookCard
                key={notebook.id}
                id={notebook.id}
                title={notebook.title}
                description={notebook.description}
                tag={notebook.tag}
              />
            ))}
          </div>
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/notebooks/forgetence"> {/* Assuming a main notebooks page or a default one */}
              <Button variant="outline" className="text-lg py-6 px-8 rounded-full border-neutral-600 hover:bg-neutral-800 hover:text-white transition-all duration-300">
                View All Notebooks <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <IdentityStatement />
      <TopicMap />
      <FooterMinimal />
    </div>
  );
}

// NOTE: I'm keeping the button component here as it's small and specific to this page layout.
const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'outline' }
>(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
      {...props}
    />
  );
});
Button.displayName = 'Button';
