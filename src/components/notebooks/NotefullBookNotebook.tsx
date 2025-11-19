// src/components/notebooks/NotefullBookNotebook.tsx
import { Section, ScrollHeading, ScrollParagraph, ScrollCallout } from '../ScrollTypography';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const notebookMLDirectives = [
    { directive: '>purpose', description: 'Sets the North Star of the notebook, defining its core function (e.g., "Analyze market data," "Draft legal documents").' },
    { directive: '>ethic', description: 'Embeds a non-negotiable ethical rule into the AI\'s logic (e.g., "Never share PII," "Prioritize user safety").' },
    { directive: '>schema', description: 'Defines the expected data structure for inputs and outputs, ensuring data integrity.' },
    { directive: '>reflect', description: 'Triggers the FCT Reflection Engine, telling the AI to review, simplify, and evolve its own patterns.' },
    { directive: '>output', description: 'Specifies the desired output format, from a simple text summary to a structured JSON object or API call.' },
    { directive: '>coach', description: 'Executes an SOP notebook, providing contextual hints and checks for specific steps via the &gt;coach directive to guide a user through a procedure.' },
];

const notefullbookFeatures = [
  {
    title: "Notebook Cards: Sovereign Intelligence Cells",
    description: "Represents individual intelligences as \"living minds\" that can be deployed, trained, or put to sleep. Each card is a sovereign NotefullBook cell containing FCT logic, functioning as a portable and self-contained cognitive entity within the AIXSELF Universe."
  },
  {
    title: "Reflection Meter: The Pulse of Evolution",
    description: "A subtle glowing pulse indicating that the notebook is actively learning and evolving its internal logic in the background. This directly links to the Meso (daily) and Macro (weekly) FCT reflection cycles, showcasing continuous cognitive growth and adaptation."
  },
  {
    title: "Master Skills: Innate Cognitive Personalities",
    description: "Defines the core cognitive personality of the notebook from birth (e.g., Organizer, Analyzer, Writer, Teacher). These fundamental capabilities are configured via NotebookML language directives, shaping the notebook's default mode of interaction and information processing."
  },
  {
    title: "Input Console (SenseHub): The Data Ingestion Pipeline",
    description: "The unified interface to connect the notebook to diverse data streams like voice, APIs, and document scans. All inputs are normalized into structured NotebookML entries, which are then processed by the ADEPT Cognitive Kernel and stored in the Notefull Memory Fabric, ensuring data integrity and FCT compliance."
  },
  {
    title: "Cognitive Ledger: Verifiable Thought History",
    description: "An immutable, hash-chained timeline showing every decision, reflection event, and state change the notebook makes. This makes the AI's thought process fully auditable and transparent, with each entry verified and secured by the AIXEYE Governance Mesh, enforcing accountability within the AIXSELF framework."
  },
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
          NotebookML is the core innovation that makes this possible. It is a simple, human-readable syntax that turns plain text into deterministic, verifiable instructions for the AI. It is designed to be the HTML of reasoning. By using simple `&gt;` directives, you can embed logic directly into your notes.
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
        <ScrollHeading as="h2">Core Features: Building a Living Mind</ScrollHeading>
        <div className="space-y-6">
          {notefullbookFeatures.map((feature, index) => (
            <div key={index}>
              <ScrollHeading as="h3" className="!text-xl !font-medium">{feature.title}</ScrollHeading>
              <ScrollParagraph>{feature.description}</ScrollParagraph>
            </div>
          ))}
        </div>
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
