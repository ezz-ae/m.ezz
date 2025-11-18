'use server';

/**
 * @fileOverview A flow to answer questions about architectural projects using RAG.
 *
 * - queryProjectNotebook - Answers questions based on a provided project context.
 * - QueryProjectNotebookInput - Input schema for the flow.
 * - QueryProjectNotebookOutput - Output schema for the flow.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { projects } from '@/lib/data';

// Define a simplified text-only representation of projects for the AI context.
const projectContext = projects
  .map(
    p => `
Project Title: ${p.title}
Category: ${p.category}
Year: ${p.year}
Description: ${p.description}
Full Details: ${p.longDescription}
Key Architectural Elements: ${p.keyElements}
---
`
  )
  .join('\n');

const QueryProjectNotebookInputSchema = z.object({
  query: z.string().describe('The user\'s question about the projects.'),
});
export type QueryProjectNotebookInput = z.infer<
  typeof QueryProjectNotebookInputSchema
>;

const QueryProjectNotebookOutputSchema = z.object({
  answer: z.string().describe('A helpful and concise answer to the user\'s query, based *only* on the provided project context. If the answer is not in the context, state that you do not have that information.'),
});
export type QueryProjectNotebookOutput = z.infer<
  typeof QueryProjectNotebookOutputSchema
>;

export async function queryProjectNotebook(
  input: QueryProjectNotebookInput
): Promise<QueryProjectNotebookOutput> {
  return queryProjectNotebookFlow(input);
}

const prompt = ai.definePrompt({
  name: 'queryProjectNotebookPrompt',
  input: { schema: QueryProjectNotebookInputSchema },
  output: { schema: QueryProjectNotebookOutputSchema },
  prompt: `You are an expert architectural assistant for Mahmoud Ezz. Your task is to answer questions based *exclusively* on the project data provided below. Do not use any outside knowledge. If the answer cannot be found in the context, clearly state that you don't have the information.

Project Context:
{{{context}}}

User's Question:
"{{{query}}}"

Based on the context, provide a concise answer.`,
});

const queryProjectNotebookFlow = ai.defineFlow(
  {
    name: 'queryProjectNotebookFlow',
    inputSchema: QueryProjectNotebookInputSchema,
    outputSchema: QueryProjectNotebookOutputSchema,
  },
  async ({ query }) => {
    const { output } = await prompt({
        query,
        // This is a simple RAG implementation. We provide the entire project database
        // as context to the LLM. For larger datasets, a vector database would be used
        // to retrieve only the most relevant documents.
        context: projectContext,
    });
    return output!;
  }
);
