// src/components/SiteFooter.tsx
'use client';

import Link from 'next/link';

const siteMap: Record<string, { href: string; label: string }[]> = {
    "Core Platform": [
        { href: "/", label: "Home" },
        { href: "/mind-board", label: "Mind Board" },
        { href: "/mindmap", label: "Mind Map" },
        { href: "/projection", label: "Projection" },
        { href: "/source", label: "Source" },
    ],
    "The Thesis": [
        { href: "/architecture-of-emergence", label: "Architecture" },
        { href: "/whitepaper", label: "Whitepaper" },
        { href: "/thesis", label: "The Thesis (Arabic)" },
        { href: "/journal", label: "Journal" },
    ],
    "Applied Intelligence": [
        { href: "/academy", label: "Academy" },
        { href: "/implementation", label: "Implementation" },
        { href: "/contribution", label: "Contribution" },
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
    <footer className="bg-card text-muted-foreground py-16 px-4 border-t border-border mt-24 font-pt-sans">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
                 <h3 className="font-semibold text-foreground mb-4 font-playfair">EZZ.AE</h3>
                 <p className="text-xs text-muted-foreground">A research and engineering platform building the architectural specification for a new model of human-AI interaction.</p>
            </div>
            <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
                {Object.keys(siteMap).map(category => (
                    <div key={category}>
                        <h4 className="text-sm font-semibold text-foreground mb-3">{category}</h4>
                        <ul className="space-y-2">
                            {siteMap[category].map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-xs text-muted-foreground hover:text-primary transition-colors">{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div>
                     <h4 className="text-sm font-semibold text-foreground mb-3">Keyword Pages</h4>
                     <ul className="space-y-2">
                        {keywordPages.map(link => (
                            <li key={link.href}>
                                <Link href={link.href} className="text-xs text-muted-foreground hover:text-primary transition-colors">{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        <div className="mt-16 border-t border-border pt-8 text-center text-xs text-muted-foreground/80">
             <p className="mb-2">&copy; {new Date().getFullYear()} EZZ.AE. All rights reserved.</p>
             <div className="flex justify-center items-center gap-2 md:gap-4 flex-wrap">
                <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
                <span>|</span>
                <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
                 <span>|</span>
                <Link href="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
                <span>|</span>
                <Link href="/legal" className="hover:text-primary transition-colors">Disclaimer</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
