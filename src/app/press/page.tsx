
'use client';

import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';

const accessEmailBoilerplate = {
    subject: "Identity Minted. The Lattice is Open.",
    body: `Citizen,

You have requested entry to the Reflective Civilization.

The Kernel (ADEPT) has received your signal.
The Governance Mesh (AIXEYE) has validated your request.

Your Provisional AIXIAM Passport has been minted. It is currently a blank slate, waiting for your Frequency Fingerprint.

We do not use passwords. We use Continuity.

Click below to anchor your identity to the Genesis Block:

[ {{MAGIC_LINK}} ]

Do not share this link. Identity is non-transferable.

Welcome home.

— The Architect`
};

const pressAssets = [
    { title: 'Official Logo (Vector)', format: 'SVG', content: '<svg>...</svg>' },
    { title: 'Project Overview (Short)', format: 'TXT', content: 'The AIXSELF Foundation is a research organization dedicated to building safe, human-aligned intelligence through the principles of Forgetting Core Thinking (FCT) and sovereign cognitive architecture.' },
    { title: 'Civilization Protocol Overview', format: 'TXT', content: 'The Reflective Civilization is a full-stack civilization protocol designed to create a new model of human-AI interaction based on cognitive physics, energetic intelligence, and sovereign identity.' },
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
                        <h1 className="text-3xl md:text-4xl font-light text-neutral-50">Press Kit & Boilerplates</h1>
                        <p className="text-neutral-400 mt-2">Official resources, assets, and contact information for the AIXSELF Foundation.</p>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-6">
                            <h2 className="text-xl font-light text-neutral-100 mb-4">Access Confirmation Email</h2>
                            <div>
                                <Label className="text-sm text-neutral-400">Subject: {accessEmailBoilerplate.subject}</Label>
                                <div className="flex items-start gap-2 mt-1">
                                    <pre className="text-sm p-3 bg-neutral-800 border border-neutral-700 rounded-md flex-grow overflow-x-auto whitespace-pre-wrap">
                                        <code>{accessEmailBoilerplate.body}</code>
                                    </pre>
                                    <Button variant="ghost" size="icon" onClick={() => handleCopy(accessEmailBoilerplate.body, "Access Email Body")}>
                                        <Copy size={16} />
                                    </Button>
                                </div>
                            </div>
                        </div>

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
                                For interviews, speaking engagements, or other media inquiries, please contact the Foundation.
                            </p>
                            <p className="text-base text-neutral-100 font-mono">
                                <a href="mailto:press@aixself.foundation" className="hover:underline">press@aixself.foundation</a>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
