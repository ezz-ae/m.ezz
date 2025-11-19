// src/components/notebooks/StormstanNotebook.tsx
import { Section, ScrollHeading, ScrollParagraph, ScrollCallout } from '../ScrollTypography';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const userRoles = [
    { role: 'Stormer', description: 'The original thinker who posts an idea (a "storm").' },
    { role: 'Stepper', description: 'A contributor who joins and adds to an existing storm ("rains on it").' },
    { role: 'Stormmate', description: 'The owner of a typical idea who shares in the collaborative wave.' },
    { role: 'Willer', description: 'A paid participant (investor or idea stormer) with access to exclusive rooms.' },
    { role: 'Sharks', description: 'High-level investors with access to a special data dashboard.' },
];

const platformActions = [
    { action: 'Add', description: 'Users input their ideas as "storms."' },
    { action: 'Contribute', description: 'Users enrich, complete, or "rain on" existing storms.' },
    { action: 'Monetize', description: 'Users can access the full filing of an idea for a fee, or "charge" storms with energy.' },
];

export function StormstanNotebook() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto py-16 space-y-12">
      <Section>
        <ScrollParagraph className="text-xs tracking-[0.3em] uppercase text-neutral-500">
          Notebook · Stormstan
        </ScrollParagraph>
        <ScrollHeading as="h1" className="text-3xl md:text-4xl font-light text-neutral-50 mt-4 !mb-6">
          Stormstan: The Ideas Recycling Hub
        </ScrollHeading>
        <ScrollParagraph emphasisLevel="resonance" className="lead !text-neutral-300 !text-lg !leading-relaxed">
          Stormstan is a non-AI platform conceptualized as a "GitHub for human thinking." It is an Ideas Recycling Hub built on a radical philosophy: the complete giveaway of intellectual property to accelerate creation and collaborative development.
        </ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h2">1.0 Core Philosophy: The Ideas Giveup Event</ScrollHeading>
        <ScrollParagraph>
          The foundational principle of Stormstan is the "Ideas Giveup Event." When a user posts an idea (a "storm") on the platform, they release all intellectual property rights. This is not a flaw, but the core feature. By removing the friction of ownership, licensing, and attribution, Stormstan creates a fluid and open environment where ideas can be freely adopted, adapted, and built upon by anyone in the community.
        </ScrollParagraph>
        <ScrollCallout label="Core Tenet">
          Writing any idea on the platform constitutes a giveaway with zero rights to the ideation and full ownership of any step taker or any monetizer. Anyone can use the idea without even acknowledging the lister.
        </ScrollCallout>
      </Section>

      <Section>
        <ScrollHeading as="h2">2.0 System Mechanics and User Roles</ScrollHeading>
        <ScrollParagraph>
          The ecosystem is designed for one-to-all communication, with a strict policy of NO FOLLOWERS, NO FANS, NO CHATTING. The focus is purely on the ideas themselves.
        </ScrollParagraph>

        <ScrollHeading as="h3" className="mt-8">User Roles</ScrollHeading>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Role</TableHead>
                    <TableHead>Description</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {userRoles.map((item) => (
                    <TableRow key={item.role}>
                        <TableCell className="font-medium text-neutral-100">{item.role}</TableCell>
                        <TableCell className="text-neutral-400">{item.description}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

        <ScrollHeading as="h3" className="mt-8">Platform Actions</ScrollHeading>
         <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Action</TableHead>
                    <TableHead>Description</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {platformActions.map((item) => (
                    <TableRow key={item.action}>
                        <TableCell className="font-medium text-neutral-100">{item.action}</TableCell>
                        <TableCell className="text-neutral-400">{item.description}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
      </Section>
      
       <Section>
        <ScrollHeading as="h2">3.0 Economic Model</ScrollHeading>
        <ScrollParagraph>
            Monetization in Stormstan is not based on owning the idea, but on accessing its detailed filing or contributing to its "energy."
        </ScrollParagraph>
        <ul className="list-disc pl-5 space-y-2">
            <ScrollParagraph as="li"><strong className="text-neutral-200">Monetization Access:</strong> For a fee set by the original lister, users can access the full, detailed filing of an idea. This can be done a maximum of 10 times per idea.</ScrollParagraph>
            <ScrollParagraph as="li"><strong className="text-neutral-200">Charging Storms:</strong> Anyone can "charge" any storm with a $1 contribution. This represents its "electricity level." 80% of this charge goes directly to the storm's owner.</ScrollParagraph>
            <ScrollParagraph as="li"><strong className="text-neutral-200">Idea Deletion:</strong> In a unique twist, monetizers or collectors can pay a significant fee ($1,000 - $5,000) to request the deletion of an idea, creating a market for removing ideas as well as creating them.</ScrollParagraph>
        </ul>
      </Section>

      <Section>
        <ScrollHeading as="h2">4.0 System Functionality</ScrollHeading>
        <ScrollParagraph>
            The platform is designed to be a frictionless "bocket of metaideas."
        </ScrollParagraph>
        <ul className="list-disc pl-5 space-y-2">
           <ScrollParagraph as="li"><strong className="text-neutral-200">Immediate Save:</strong> Storms are ongoing work. Every word is saved immediately, allowing users to push and edit anytime, just like a code repository.</ScrollParagraph>
           <ScrollParagraph as="li"><strong className="text-neutral-200">Brainstorming Sessions:</strong> Users can "storm a seed" (a starting idea), and the system will create a thoughts board for a brainstorming session.</ScrollParagraph>
           <ScrollParagraph as="li"><strong className="text-neutral-200">Visibility Control:</strong> Storms can be public, private, or directed specifically to "Shark" accounts for high-investor visibility.</ScrollParagraph>
           <ScrollParagraph as="li"><strong className="text-neutral-200">Background AI:</strong> While a non-AI platform for users, AI works in the background to check for spam, prevent duplicate monetization, and provide reviews.</ScrollParagraph>
        </ul>
      </Section>

      <Section>
        <ScrollCallout label="The Vision">
            Stormstan is designed to study intelligence, pick genius, and create contests and funds by recycling "all time said never used ideas." It's a system to fill human curiosity and take responsibility for getting more done.
        </ScrollCallout>
      </Section>
    </article>
  );
}
