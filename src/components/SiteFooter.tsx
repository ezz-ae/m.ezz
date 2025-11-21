
// src/components/SiteFooter.tsx
'use client';

import Link from 'next/link';

const siteMap: Record<string, { href: string; label: string }[]> = {
    "Core Platform": [
        { href: "/", label: "Home" },
        { href: "/mind-board", label: "Mind Board" },
        { href: "/source", label: "Source" },
        { href: "/contribution", label: "Contribution" },
    ],
    "The Thesis": [
        { href: "/architecture-of-emergence", label: "Architecture" },
        { href: "/whitepaper", label: "Whitepaper" },
        { href: "/thesis", label: "The Thesis (Arabic)" },
        { href: "/mindmap", label: "Mind Map" },
        { href: "/projection", label: "Projection" },
    ],
    "Applied Intelligence": [
        { href: "/academy", label: "Academy" },
        { href: "/implementation", label: "Implementation" },
        { href: "/journal", label: "Journal" },
        { href: "/notebooks/brain-games", label: "Brain Games" },
    ]
};

const keywordPages = [
    { href: "/notebooks/forgetence", label: "FCT" },
    { href: "/notebooks/aixself", label: "Cognitive Sovereignty" },
    { href: "/notebooks/dldchain", label: "Digital Governance" },
    { href: "/notebooks/imagination-lab", label: "Generative Cognition" },
    { href: "/notebooks/security", label: "AI Safety" },
];

export function SiteFooter() {
  return (
    <footer className="bg-neutral-950/50 text-neutral-400 py-16 px-4 border-t border-neutral-800/50 mt-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
                 <h3 className="font-semibold text-neutral-200 mb-4 font-playfair">EZZ.AE</h3>
                 <p className="text-xs text-neutral-500">A living intelligence demonstrating a new cognitive architecture for AI.</p>
            </div>
            <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
                {Object.keys(siteMap).map(category => (
                    <div key={category}>
                        <h4 className="text-sm font-semibold text-neutral-300 mb-3">{category}</h4>
                        <ul className="space-y-2">
                            {siteMap[category].map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-xs text-neutral-400 hover:text-orange-300 transition-colors">{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div>
                     <h4 className="text-sm font-semibold text-neutral-300 mb-3">Keyword Pages</h4>
                     <ul className="space-y-2">
                        {keywordPages.map(link => (
                            <li key={link.href}>
                                <Link href={link.href} className="text-xs text-neutral-400 hover:text-orange-300 transition-colors">{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        <div className="mt-16 border-t border-neutral-800/50 pt-8 text-center text-xs text-neutral-600">
             <p className="mb-2">&copy; {new Date().getFullYear()} EZZ.AE. All rights reserved.</p>
             <div className="flex justify-center items-center gap-2 md:gap-4 flex-wrap">
                <Link href="/terms" className="hover:text-orange-300 transition-colors">Terms</Link>
                <span>|</span>
                <Link href="/privacy" className="hover:text-orange-300 transition-colors">Privacy</Link>
                 <span>|</span>
                <Link href="/cookies" className="hover:text-orange-300 transition-colors">Cookies</Link>
                <span>|</span>
                <Link href="/legal" className="hover:text-orange-300 transition-colors">Disclaimer</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
