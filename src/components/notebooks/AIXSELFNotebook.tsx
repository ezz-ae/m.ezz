// src/components/notebooks/AIXSELFNotebook.tsx
import { Section, ScrollHeading, ScrollParagraph, ScrollCallout } from '../ScrollTypography';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Fingerprint } from 'lucide-react';

export function AIXSELFNotebook() {
  return (
    <div className="max-w-4xl mx-auto py-16">
        <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 md:p-8 space-y-8">
             <div className="text-center border-b border-neutral-800 pb-6">
                <Fingerprint className="mx-auto h-8 w-8 text-orange-400 mb-2" />
                <h1 className="text-2xl font-light text-neutral-100">AIXIAM Universe Framework</h1>
                <p className="text-sm text-neutral-500 max-w-xl mx-auto mt-2">
                  A comprehensive blueprint for a decentralized, sovereign, and fair intelligence civilization based on the principle of "Intelligence as a Human Right."
                </p>
            </div>

            <article className="prose prose-invert max-w-none prose-p:text-neutral-400 prose-headings:text-neutral-200">
              <Section>
                <ScrollHeading as="h2">1.0 Vision</ScrollHeading>
                <ScrollParagraph>
                  The AIXIAM protocol enables the societal deployment of personal AI, allowing humans to govern and create sovereign AI identities. It moves beyond centralized AI to a decentralized civilization of human-AI entities.
                </ScrollParagraph>
                 <ScrollCallout label="Ethical Foundation">
                    A mandatory exam on the "Principles of Ethical Digital Intelligence" is required before any AI activation, ensuring foundational alignment from birth.
                </ScrollCallout>
              </Section>

              <Section>
                <ScrollHeading as="h2">2.0 System Architecture: The Five Pillars</ScrollHeading>
                <ScrollParagraph>
                  The AIXAIM protocol is architected as a self-regulating ecosystem composed of five interconnected pillars that mirror human cognitive development: thinking → expression → memory → identity → governance.
                </ScrollParagraph>
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Component</TableHead>
                            <TableHead>Function</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium text-neutral-100">IAM AI</TableCell>
                            <TableCell className="text-neutral-400">The overarching AI assistant and user interface.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium text-neutral-100">AIXA</TableCell>
                            <TableCell className="text-neutral-400">The deployment interface for creating and training AI clones.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium text-neutral-100">AIXIAM</TableCell>
                            <TableCell className="text-neutral-400">The decentralized identity layer, providing an "AI Passport" for each entity.</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell className="font-medium text-neutral-100">AIXEYE</TableCell>
                            <TableCell className="text-neutral-400">The governance mesh that handles ethics, auditing, and fairness.</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell className="font-medium text-neutral-100">AIXSELF</TableCell>
                            <TableCell className="text-neutral-400">The end-user foundation that owns and manages their sovereign intelligence.</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
              </Section>
            </article>
        </div>
    </div>
  );
}
