'use server';

/**
 * @fileOverview Generates design insights for Mahmoud Ezz's architectural designs.
 *
 * - generateDesignInsights - A function that generates design insights for a given architectural design.
 * - GenerateDesignInsightsInput - The input type for the generateDesignInsights function.
 * - GenerateDesignInsightsOutput - The return type for the generateDesignInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDesignInsightsInputSchema = z.object({
  designDescription: z
    .string()
    .describe('A detailed description of the architectural design.'),
  keyElements: z.string().describe('Key architectural elements to highlight.'),
});
export type GenerateDesignInsightsInput = z.infer<typeof GenerateDesignInsightsInputSchema>;

const GenerateDesignInsightsOutputSchema = z.object({
  designInsights: z.string().describe('Generated design insights.'),
});
export type GenerateDesignInsightsOutput = z.infer<typeof GenerateDesignInsightsOutputSchema>;

export async function generateDesignInsights(
  input: GenerateDesignInsightsInput
): Promise<GenerateDesignInsightsOutput> {
  return generateDesignInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDesignInsightsPrompt',
  input: {schema: GenerateDesignInsightsInputSchema},
  output: {schema: GenerateDesignInsightsOutputSchema},
  prompt: `You are an expert in architectural design analysis. Analyze the provided description of Mahmoud Ezz's architectural design and generate insightful observations about key architectural elements and concepts.

Design Description: {{{designDescription}}}
Key Elements to Highlight: {{{keyElements}}}

Generate design insights:
`,
});

const generateDesignInsightsFlow = ai.defineFlow(
  {
    name: 'generateDesignInsightsFlow',
    inputSchema: GenerateDesignInsightsInputSchema,
    outputSchema: GenerateDesignInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
