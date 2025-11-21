
// src/app/privacy/page.tsx
'use client';

import React from 'react';
import { Section } from '@/components/ScrollTypography';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pt-24">
      <div className="container mx-auto px-4 py-16">
        <Section className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light text-foreground">Privacy Protocol</h1>
            <p className="text-sm text-muted-foreground mt-2">Effective Date: November 2025</p>
          </div>

          <div className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-foreground prose-headings:font-light prose-headings:border-b prose-headings:border-border prose-headings:pb-2">
            
            <h2>Architectural Privacy by Design</h2>
            <p>Our commitment to privacy is not a policy; it is an architectural certainty. The AIXSELF Universe is engineered from the ground up to be physically incapable of violating your cognitive sovereignty. Our system does not know what you are thinking, only that you are thinking.</p>

            <h2>1. Zero-Knowledge Content Analysis</h2>
            <p>The core of our intelligence system, the Schema Intelligence Network (SINLM), operates without reading your content. It analyzes behavioral metadata—frequency, return rate, connection patterns—to understand what is important to you. The 'what' of your data is encrypted and inaccessible to the core learning models.</p>

            <h2>2. The Forgetting Mandate</h2>
            <p>Unlike traditional systems that hoard data, our Platform is designed to forget. Raw data is automatically processed into abstract patterns ("artifacts") and then permanently deleted. This is not a "data deletion request"; it is the default metabolic function of the system. We cannot recover what was never designed to be kept.</p>

            <h2>3. Cryptographically Signed Consent</h2>
            <p>No part of your sovereign data is ever used for training new models without your explicit, cryptographically signed consent for that specific purpose. This is enforced at the protocol level. There are no back doors.</p>

             <h2>4. Analytics & System Health</h2>
            <p>We collect aggregated, anonymized data to monitor the health and performance of the Platform. This includes interaction flows and feature usage, but never the content of your notes or queries. This data is used solely to improve the architecture and is never sold or shared.</p>

          </div>
        </Section>
      </div>
    </div>
  );
}
