'use server';

import { z } from 'zod';
import { generateDesignInsights, type GenerateDesignInsightsInput } from '@/ai/flows/generate-design-insights';
import { queryProjectNotebook as queryNotebook, type QueryProjectNotebookInput } from '@/ai/flows/query-project-notebook';
import { revalidatePath } from 'next/cache';

// AI Design Insights Action
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


// Contact Form Action
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactFormState = {
    message: string;
    errors?: {
        name?: string[];
        email?: string[];
        subject?: string[];
        message?: string[];
    } | null;
    success: boolean;
};


export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Failed to send message. Please check your input.',
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  // Simulate sending the data (e.g., to an email service or database)
  console.log('Contact Form Submitted:', validatedFields.data);
  
  // Revalidate path to clear form on success (if needed, though client-side reset is better)
  // revalidatePath('/contact');

  return { message: 'Thank you for your message! We will get back to you soon.', errors: null, success: true };
}
