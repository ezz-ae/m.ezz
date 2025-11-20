// src/components/SiteFooter.tsx
'use client';

import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="bg-neutral-950/50 text-neutral-400 text-center py-8 px-4 text-xs border-t border-neutral-800/50 mt-24">
      <div className="max-w-4xl mx-auto">
        <p className="mb-4">&copy; 2025 Mahmoud Ezz. All rights reserved. Unauthorized use, reproduction, or distribution of any content, design, or code is strictly prohibited.</p>
        <div className="flex justify-center items-center gap-2 md:gap-4 mb-4 flex-wrap">
          <Link href="/terms" className="text-orange-400/80 hover:text-orange-300 transition-colors">Terms of Service</Link>
          <span className="text-neutral-600">|</span>
          <Link href="/privacy" className="text-orange-400/80 hover:text-orange-300 transition-colors">Privacy Policy</Link>
          <span className="text-neutral-600">|</span>
          <Link href="/cookies" className="text-orange-400/80 hover:text-orange-300 transition-colors">Cookies Policy</Link>
          <span className="text-neutral-600">|</span>
          <Link href="/legal" className="text-orange-400/80 hover:text-orange-300 transition-colors">Legal Disclaimer</Link>
        </div>
        <p className="text-neutral-500">
          All content, code, designs, and intellectual property on this site are protected by international copyright law and applicable intellectual property regulations.
        </p>
      </div>
    </footer>
  );
}
