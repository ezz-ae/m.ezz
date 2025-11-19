// src/components/notebooks/NotefullBookNotebook.tsx
import { Section, ScrollHeading, ScrollParagraph, ScrollCallout } from '../ScrollTypography';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const notebookMLDirectives = [
    { directive: '>purpose', description: 'Sets the North Star of the notebook, defining its core function (e.g., "Analyze market data," "Draft legal documents").' },
    { directive: '>ethic', description: 'Embeds a non-negotiable ethical rule into the AI\'s logic (e.g., "Never share PII," "Prioritize user safety").' },
    { directive: '>schema', description: 'Defines the expected data structure for inputs and outputs, ensuring data integrity.' },
    { directive: '>reflect', description: 'Triggers the FCT Reflection Engine, telling the AI to review, simplify, and evolve its own patterns.' },
    { directive: '>output', description: 'Specifies the desired output format, from a simple text summary to a structured JSON object or API call.' },
    { directive: '>coach', description: 'Executes an SOP notebook, providing contextual hints and checks for specific steps to guide a user through a procedure.' },
];

export function NotefullBookNotebook() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto py-16 space-y-12">
      <Section>
        <ScrollParagraph className="text-xs tracking-[0.3em] uppercase text-neutral-500">
          Notebook · NotefullBook OS
        </ScrollParagraph>
        <ScrollHeading as="h1" className="text-3xl md:text-4xl font-light text-neutral-50 mt-4 !mb-6">
          NotefullBook: The AI-Native Cognitive OS
        </ScrollHeading>
        <ScrollParagraph emphasisLevel="resonance" className="lead !text-neutral-300 !text-lg !leading-relaxed">
          NotefullBook is not another note-taking app; it is a complete, AI-native Cognitive Operating System. It treats notebooks not as static documents, but as living, evolving "minds." The entire system is built on a new open syntax, NotebookML, that merges markdown, logic, and memory into a single, machine-readable format.
        </ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h2">Notebooks as Living Intelligences</ScrollHeading>
        <ScrollParagraph>
          In NotefullBook, every notebook is a sovereign intelligence cell. It has a defined purpose, a set of ethical rules, and a unique cognitive rhythm. It learns and evolves based on your input, governed by the principles of Forgetting Core Thinking (FCT). The OS is the "Mind Board," where you can deploy, train, observe, and even put these minds to sleep.
        </ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h2">NotebookML: The Language of Thought</ScrollHeading>
        <ScrollParagraph>
          NotebookML is the core innovation that makes this possible. It is a simple, human-readable syntax that turns plain text into deterministic, verifiable instructions for the AI. It is designed to be the HTML of reasoning. By using simple `{'>'}` directives, you can embed logic directly into your notes.
        </ScrollParagraph>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Directive</TableHead>
                    <TableHead>Function</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {notebookMLDirectives.map((item) => (
                    <TableRow key={item.directive}>
                        <TableCell className="font-mono text-sm text-orange-400">{item.directive}</TableCell>
                        <TableCell className="text-neutral-400">{item.description}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
      </Section>
      
      <Section>
        <ScrollCallout label="Core Principle">
          Intelligence in a File. With NotebookML, the entire logic, memory, and purpose of an AI can be contained within a single `.notebookml` file. This makes intelligence portable, shareable, and verifiable, without needing complex APIs or server infrastructure.
        </ScrollCallout>
      </Section>

      <Section>
        <ScrollHeading as="h2">The Reflection Engine & The Cognitive Ledger</ScrollHeading>
        <ScrollParagraph>
          The NotefullBook OS is built on two key FCT mechanisms. The <strong className="text-neutral-200">Reflection Engine</strong> is the background process that runs the FCT cognitive cycle, allowing the notebook to continuously simplify its knowledge and strengthen its core patterns. The <strong className="text-neutral-200">Cognitive Ledger</strong> is an immutable, hash-chained timeline that records every significant decision, reflection, and transformation the notebook makes, making its thought process fully auditable and transparent.
        </ScrollParagraph>
      </Section>

      <Section>
        <ScrollHeading as="h2">Conclusion: The Future of Cognitive Work</ScrollHeading>
        <ScrollParagraph>
          NotefullBook represents a fundamental shift in how we interact with AI. It moves beyond treating AI as a simple "tool" and integrates it as a foundational layer of the operating system itself. It provides a structured, safe, and transparent environment for building and collaborating with personalized, sovereign intelligences.
        </ScrollParagraph>
      </Section>
    </article>
  );
}
