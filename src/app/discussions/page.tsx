
import type { Metadata } from 'next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button';
import FooterMinimal from "@/components/FooterMinimal";
import { NOTEBOOKS } from '@/components/notebooks/notebook-data';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Discussions',
    description: 'Open discussions on the core projects and cognitive architectures of EZZ.AE.',
};

const discussionTopics = {
    forgetence: [
        { title: "Is 'forgetting' truly the core of intelligence, or a byproduct?", author: "Community Member" },
        { title: "Applying FCT to enterprise knowledge management systems.", author: "System Architect" },
    ],
    notefullbook: [
        { title: "The cognitive load of NotebookML vs. traditional programming.", author: "Developer" },
    ],
    aixself: [
        { title: "The ethics of AI clones and sovereign identity.", author: "Philosopher" },
        { title: "Technical challenges in implementing the AIXIAM passport.", author: "Engineer" },
    ],
    realestate: [
        { title: "Sovereign tokenization: Economic stability or new risks?", author: "Economist" },
    ]
};


export default function DiscussionsPage() {
    const notebooks = Object.values(NOTEBOOKS);

    return (
        <div className="bg-black min-h-screen pt-24 text-neutral-100">
            <main className="py-16 px-6">
               <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-3xl md:text-4xl font-light text-neutral-50">Discussions</h1>
                        <p className="text-neutral-400 mt-2">Open dialogue on core research, frameworks, and their implications.</p>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                        {notebooks.map((notebook) => (
                             <AccordionItem value={notebook.id} key={notebook.id}>
                                <AccordionTrigger className="text-lg font-light hover:no-underline">
                                    {notebook.title}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-4">
                                        <p className="text-neutral-400 text-sm">{notebook.description}</p>
                                        <div className="border-t border-neutral-800 pt-4 mt-4">
                                            <h4 className="text-sm font-semibold mb-2 text-neutral-300">Topics</h4>
                                            <div className="space-y-3">
                                                {(discussionTopics[notebook.id as keyof typeof discussionTopics] || []).map((topic, index) => (
                                                    <div key={index} className="flex items-center justify-between p-3 bg-neutral-900/50 rounded-lg">
                                                        <div>
                                                            <p className="text-neutral-200">{topic.title}</p>
                                                            <p className="text-xs text-neutral-500">Started by: {topic.author}</p>
                                                        </div>
                                                        <Button variant="ghost" size="sm">View</Button>
                                                    </div>
                                                ))}
                                                 <div className="text-center pt-2">
                                                    <Button variant="outline" className="border-neutral-700 hover:bg-neutral-800">Start a New Discussion</Button>
                                                </div>
                                            </div>
                                        </div>
                                         <div className="border-t border-neutral-800 pt-4 mt-4 text-center">
                                            <Link href={`/notebooks/${notebook.id}`}>
                                                <Button variant="link">Go to Notebook →</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </main>
            <FooterMinimal />
        </div>
    );
}
