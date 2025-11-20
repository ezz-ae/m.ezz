// src/app/cookies/page.tsx
'use client';

import React from 'react';
import { Section } from '@/components/ScrollTypography';

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pt-24">
      <div className="container mx-auto px-4 py-16">
        <Section className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light text-foreground">Cookies Policy</h1>
            <p className="text-sm text-muted-foreground mt-2">Effective Date: November 2025</p>
          </div>

          <div className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-foreground prose-headings:font-light prose-headings:border-b prose-headings:border-border prose-headings:pb-2">
            
            <h2>1. What Are Cookies?</h2>
            <p>Cookies are small text files stored on your device (computer, tablet, mobile phone) when you visit a website. They are used to remember your preferences and actions over a period of time.</p>

            <h2>2. How We Use Cookies</h2>
            <p>This Platform uses a minimal set of cookies to provide a functional and personalized experience. We use them for:</p>
            <ul>
                <li><strong>Functional Cookies:</strong> These are essential for the Platform to work correctly. They remember your language preference and maintain your session state as you navigate.</li>
                <li><strong>Analytical Cookies:</strong> We use these anonymous cookies to understand how users interact with the Platform, which features are most popular, and how we can improve the experience. This data is aggregated and does not identify you personally.</li>
                <li><strong>Personalization Cookies:</strong> These cookies help us remember your previous inputs and interactions to provide a more dynamic and context-aware experience within the AI simulations.</li>
            </ul>

            <h2>3. Your Choices</h2>
            <p>You have the right to decide whether to accept or reject cookies. You can manage your cookie preferences through your web browser's settings. Please note that if you choose to disable cookies, some features of the Platform may be limited or may not function as intended.</p>
            
          </div>
        </Section>
      </div>
    </div>
  );
}
