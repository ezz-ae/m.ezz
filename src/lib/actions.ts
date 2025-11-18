
'use server';

import { z } from 'zod';
import { generateDesignInsights, type GenerateDesignInsightsInput } from '@/ai/flows/generate-design-insights';
import { queryLivingNotebook as queryNotebook, type QueryLivingNotebookInput } from '@/ai/flows/query-living-notebook';

// This action is deprecated as it relates to the old portfolio design.
export async function getAIDesignInsights(input: GenerateDesignInsightsInput) {
  try {
    const result = await generateDesignInsights(input);
    return { data: result.designInsights, error: null };
  } catch (error) {
    console.error('AI Insight Generation Error:', error);
    return { data: null, error: 'Failed to generate insights. Please try again later.' };
  }
}

// Notebook Query Action
export async function queryLivingNotebook(input: QueryLivingNotebookInput) {
  try {
    const result = await queryNotebook(input);
    return { data: result.answer, error: null };
  } catch (error) {
    console.error('Living Notebook Query Error:', error);
    return { data: null, error: 'Failed to get an answer. The AI model may be unavailable. Please try again later.' };
  }
}
