'use server';

/**
 * @fileOverview A flow to answer questions about the AIXSELF universe using RAG.
 *
 * - queryLivingNotebook - Answers questions based on the living notebook contexts.
 * - QueryLivingNotebookInput - Input schema for the flow.
 * - QueryLivingNotebookOutput - Output schema for the flow.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { NOTEBOOKS } from '@/components/notebooks/notebook-data';

// Helper to generate a context string for one or all notebooks
function getNotebookContext(slug?: string): string {
  const notebooksToProcess = slug
    ? [NOTEBOOKS[slug as keyof typeof NOTEBOOKS]].filter(Boolean)
    : Object.values(NOTEBOOKS);

  if (notebooksToProcess.length === 0) {
    return 'No notebook information found.';
  }

  return notebooksToProcess
    .map(
      p => `
Topic: ${p.title}
Content: ${p.body}
---
`
    )
    .join('\n');
}

const QueryLivingNotebookInputSchema = z.object({
  query: z.string().describe("The user's question about a specific notebook or the AIXSELF universe in general."),
  slug: z.string().optional().describe('The slug of a specific notebook to scope the context. If omitted, context from all notebooks will be used.'),
});
export type QueryLivingNotebookInput = z.infer<
  typeof QueryLivingNotebookInputSchema
>;

const QueryLivingNotebookOutputSchema = z.object({
  answer: z.string().describe('A helpful and concise answer to the user\'s query, based *only* on the provided notebook context. If the answer is not in the context, state that you do not have that information.'),
});
export type QueryLivingNotebookOutput = z.infer<
  typeof QueryLivingNotebookOutputSchema
>;

export async function queryLivingNotebook(
  input: QueryLivingNotebookInput
): Promise<QueryLivingNotebookOutput> {
  return queryLivingNotebookFlow(input);
}

const prompt = ai.definePrompt({
  name: 'queryLivingNotebookPrompt',
  input: { schema: QueryLivingNotebookInputSchema.extend({ context: z.string() }) },
  output: { schema: QueryLivingNotebookOutputSchema },
  prompt: `You are an expert AI assistant for Mahmoud Ezz, trained on his philosophy of Cognitive Architecture. Your task is to answer questions based *exclusively* on the context provided below. Do not use any outside knowledge. If the answer cannot be found in the context, clearly state that you don't have that information.

Context:
{{{context}}}

User's Question:
"{{{query}}}"

Based on the context, provide a concise answer.`,
});

const queryLivingNotebookFlow = ai.defineFlow(
  {
    name: 'queryLivingNotebookFlow',
    inputSchema: QueryLivingNotebookInputSchema,
    outputSchema: QueryLivingNotebookOutputSchema,
  },
  async ({ query, slug }) => {
    const context = getNotebookContext(slug);
    
    const { output } = await prompt({ query, context });
    
    return output!;
  }
);
