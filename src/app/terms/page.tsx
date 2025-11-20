// src/app/terms/page.tsx
'use client';

import React from 'react';
import { Section } from '@/components/ScrollTypography';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-neutral-100 overflow-x-hidden pt-24">
      <div className="container mx-auto px-4 py-16">
        <Section className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light text-neutral-100">Terms of Service</h1>
            <p className="text-sm text-neutral-500 mt-2">Effective Date: November 2025</p>
          </div>

          <div className="prose prose-invert max-w-none prose-p:text-neutral-400 prose-headings:text-neutral-200 prose-headings:font-light prose-headings:border-b prose-headings:border-neutral-800 prose-headings:pb-2">
            
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using this platform (“Platform”), you agree to comply with and be bound by these Terms of Service. If you do not agree, you must not use the Platform.</p>

            <h2>2. User Responsibilities</h2>
            <ul>
              <li>Users may contribute ideas and inputs. You are solely responsible for your content.</li>
              <li>You agree not to submit any harmful, offensive, illegal, or infringing material.</li>
              <li>You agree to respect the AI, the integrity of its simulations, and the intellectual property of the Platform.</li>
            </ul>

            <h2>3. Intellectual Property</h2>
            <p>All content, code, AI-generated materials, simulations, designs, and the underlying cognitive architecture are the exclusive intellectual property of Mahmoud Ezz. Unauthorized reproduction, distribution, modification, or commercial use is strictly prohibited.</p>
            <p>Any contributions you provide may be used to improve the AI engine and the Platform. The copyright of all AI-generated outputs and derivative works remains with Mahmoud Ezz.</p>

            <h2>4. Restrictions</h2>
            <p>You may not:</p>
            <ul>
              <li>Attempt to reverse-engineer, decompile, or replicate the Autothinker engine or any part of the core cognitive architecture.</li>
              <li>Use the Platform for any malicious, unlawful, or unauthorized purpose.</li>
              <li>Automate access to the Platform or its simulations without prior written consent.</li>
            </ul>

            <h2>5. Termination of Access</h2>
            <p>We reserve the right to suspend or terminate your access to the Platform at any time, without notice, for any violation of these terms, unlawful behavior, or any action that disrupts the integrity of the Platform.</p>
            
            <h2>6. Copyright Notice</h2>
            <p>© 2025 Mahmoud Ezz. All rights reserved. All content, designs, code, AI-generated materials, simulations, and intellectual property on this Platform are protected by international copyright law. Unauthorized use, reproduction, or distribution is strictly prohibited.</p>
          </div>
        </Section>
      </div>
    </div>
  );
}
