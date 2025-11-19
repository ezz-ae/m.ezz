
'use client';

import type { Metadata } from 'next';
import FooterMinimal from '@/components/FooterMinimal';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// export const metadata: Metadata = {
//     title: 'Press Kit',
//     description: 'Official press resources, assets, and contact information for EZZ.AE.',
// };

const pressAssets = [
    { title: 'Official Logo (Vector)', format: 'SVG', content: '<svg>...</svg>' },
    { title: 'Project Overview (Short)', format: 'TXT', content: 'EZZ.AE is a living research lab exploring human-AI cognitive alignment through projects in forgetting-based AI, sovereign identity, and decentralized systems.' },
    { title: 'Founder Bio (Short)', format: 'TXT', content: 'Mahmoud Ezz is an intelligence system architect whose work sits at the intersection of AI, cognitive science, and behavioral economics.' },
];

export default function PressPage() {
    const { toast } = useToast();

    const handleCopy = (content: string, title: string) => {
        navigator.clipboard.writeText(content);
        toast({
            title: "Copied to Clipboard",
            description: `${title} has been copied.`,
        });
    };

    return (
        <div className="bg-black min-h-screen pt-24 text-neutral-200">
            <main className="py-16 px-6">
               <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-3xl md:text-4xl font-light text-neutral-50">Press Kit</h1>
                        <p className="text-neutral-400 mt-2">Official resources, assets, and contact information.</p>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-6">
                            <h2 className="text-xl font-light text-neutral-100 mb-4">Official Boilerplates</h2>
                            <div className="space-y-4">
                                {pressAssets.map(asset => (
                                    <div key={asset.title}>
                                        <Label className="text-sm text-neutral-400">{asset.title}</Label>
                                        <div className="flex items-center gap-2 mt-1">
                                            <pre className="text-sm p-3 bg-neutral-800 border border-neutral-700 rounded-md flex-grow overflow-x-auto">
                                                <code>{asset.content}</code>
                                            </pre>
                                            <Button variant="ghost" size="icon" onClick={() => handleCopy(asset.content, asset.title)}>
                                                <Copy size={16} />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                         <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-6">
                            <h2 className="text-xl font-light text-neutral-100 mb-4">Media Inquiries</h2>
                             <p className="text-sm text-neutral-400 mb-4">
                                For interviews, speaking engagements, or other media inquiries, please contact us.
                            </p>
                            <p className="text-base text-neutral-100 font-mono">
                                <a href="mailto:press@ezz.ae" className="hover:underline">press@ezz.ae</a>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <FooterMinimal />
        </div>
    );
}
