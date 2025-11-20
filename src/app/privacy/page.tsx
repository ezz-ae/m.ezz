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
            <h1 className="text-4xl font-light text-foreground">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground mt-2">Effective Date: November 2025</p>
          </div>

          <div className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-foreground prose-headings:font-light prose-headings:border-b prose-headings:border-border prose-headings:pb-2">
            
            <h2>1. Our Commitment to Privacy</h2>
            <p>This Platform is designed with a "privacy-by-architecture" philosophy. We are committed to protecting your data and providing a secure, transparent environment for intellectual exploration.</p>

            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information to enhance the Platform's cognitive functions:</p>
            <ul>
                <li><strong>User Contributions:</strong> Notes, ideas, and textual inputs you voluntarily provide.</li>
                <li><strong>Usage Patterns:</strong> Anonymous data on how you interact with the AI simulations and notebooks. This includes interaction frequency and feature usage, but not your personal identity.</li>
                <li><strong>Preferences:</strong> Such as your chosen language preference.</li>
            </ul>

            <h2>3. How We Use Information</h2>
            <p>The information we collect is used exclusively for the following purposes:</p>
            <ul>
                <li>To enhance the AI's performance and the accuracy of its simulations.</li>
                <li>To improve and personalize the user experience.</li>
                <li>To understand how the Platform is used in order to guide future research and development.</li>
            </ul>
             <p><strong>We do not sell, rent, or share your personal data with third parties for marketing purposes.</strong></p>

            <h2>4. Data Retention and User Rights</h2>
            <p>Your contributions are stored securely. You have the right to:</p>
            <ul>
                <li>Request access to the personal data we hold about you.</li>
                <li>Request correction of any inaccurate data.</li>
                <li>Request the deletion of your contributions and personal data.</li>
            </ul>
            <p>To exercise these rights, please contact us at <a href="mailto:m@ezz.ae" className="text-primary hover:text-primary/80">m@ezz.ae</a>.</p>

            <h2>5. Security</h2>
            <p>We implement industry-standard security measures, including encryption, to protect your data from unauthorized access, alteration, or disclosure.</p>

          </div>
        </Section>
      </div>
    </div>
  );
}
