// src/app/contribution/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TimelineView } from '@/components/TimelineView';
import IdentityStatement from '@/components/IdentityStatement';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Send, Cpu } from 'lucide-react';
import { Section } from '@/components/ScrollTypography';

function ContactForm() {
  const [status, setStatus] = React.useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    const formData = new FormData(e.currentTarget);
    
    // This is a placeholder for form submission logic.
    // In a real application, you would send this data to a backend endpoint or a service like Formspree.
    setTimeout(() => {
        const name = formData.get('name');
        console.log({
            name: name,
            email: formData.get('email'),
            message: formData.get('message'),
        });
        setStatus(`Thank you for your message, ${name}. I will be in touch shortly.`);
        
        // Reset form after a delay
        setTimeout(() => {
           e.currentTarget.reset();
           setStatus('');
        }, 3000);

    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input name="name" type="text" placeholder="Your Name" required className="bg-neutral-900 border-neutral-700" />
        <Input name="email" type="email" placeholder="Your Email" required className="bg-neutral-900 border-neutral-700" />
      </div>
      <Textarea name="message" placeholder="Your message, collaboration proposal, or inquiry..." required rows={5} className="bg-neutral-900 border-neutral-700" />
      <div className="text-center">
        <Button type="submit" variant="outline" className="border-neutral-600 hover:bg-neutral-800 hover:text-white transition-all duration-300">
          <Send className="mr-2 h-4 w-4" />
          Submit Inquiry
        </Button>
      </div>
      {status && <p className="text-sm text-center text-green-400 mt-4">{status}</p>}
    </form>
  );
}


export default function ContributionPage() {
  return (
    <div className="min-h-screen bg-black text-neutral-100 overflow-x-hidden pt-24">
      <div className="container mx-auto px-4 py-16">

        {/* The Origin */}
        <Section className="text-center max-w-3xl mx-auto">
          <Cpu className="mx-auto h-12 w-12 text-orange-400 mb-4" />
          <h1 className="text-4xl font-light text-neutral-100">First Principles</h1>
          <p className="text-lg text-neutral-400 mt-4">
            This work is not a reinterpretation of existing theories or a repetition of established cognitive assumptions. It began from a commitment to first principles, pure inference, and raw human observation, without reliance on external referencing. It is an act of architectural discovery.
          </p>
        </Section>

        {/* The Layers of Inquiry */}
        <Section className="mt-24">
            <h2 className="text-3xl font-light text-center text-neutral-200 mb-12">The Layers of Inquiry</h2>
            <TimelineView />
        </Section>
        
        {/* The Architectural Philosophy */}
        <Section className="mt-24">
             <IdentityStatement />
        </Section>

        {/* The Invitation to Collaborate */}
        <Section className="mt-24 text-center max-w-3xl mx-auto">
          <Mail className="mx-auto h-12 w-12 text-orange-400 mb-4" />
          <h2 className="text-3xl font-light text-neutral-200 mb-4">An Invitation to Collaborate</h2>
          <p className="text-lg text-neutral-400 mb-8">
            This exploration is ongoing. If this work resonates with you, or if you are an AI researcher, philosopher, or builder who sees a path for collaboration, please continue the inquiry.
          </p>
          <ContactForm />
        </Section>

      </div>
    </div>
  );
}
