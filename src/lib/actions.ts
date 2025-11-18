
'use server';

import { z } from 'zod';
import { generateDesignInsights, type GenerateDesignInsightsInput } from '@/ai/flows/generate-design-insights';
import { queryProjectNotebook as queryNotebook, type QueryProjectNotebookInput } from '@/ai/flows/query-project-notebook';

// AI Design Insights Action (Legacy, can be removed if no longer used)
export async function getAIDesignInsights(input: GenerateDesignInsightsInput) {
  try {
    const result = await generateDesignInsights(input);
    return { data: result.designInsights, error: null };
  } catch (error) {
    console.error('AI Insight Generation Error:', error);
    return { data: null, error: 'Failed to generate insights. Please try again later.' };
  }
}

// Project Notebook Query Action
export async function queryProjectNotebook(input: QueryProjectNotebookInput) {
  try {
    const result = await queryNotebook(input);
    return { data: result.answer, error: null };
  } catch (error) {
    console.error('Project Notebook Query Error:', error);
    return { data: null, error: 'Failed to get an answer. The AI model may be unavailable. Please try again later.' };
  }
}
