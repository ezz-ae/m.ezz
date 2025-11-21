// src/app/api/genesis-reflection/route.ts

import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(request: Request) {
  try {
    const { text } = await request.json();

    if (!text) {
      return NextResponse.json({ error: 'Input text is required' }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
        return NextResponse.json({ error: 'AI provider is not configured.' }, { status: 500 });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `
      Act as the Reflection Engine (Layer 3).
      Input: "${text}"
      
      Task: Execute the HMR Cycle.
      1. Analyze Resonance (Emotion).
      2. Apply ESF (Emotional Softening Filter) to decay intensity by 50%.
      3. Extract the core Semantic Lesson.
      4. Output ONLY the Crystallized Memory (The Wisdom).
      
      Constraint: Be concise, stoic, and constructive. Do not lecture.
    `;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const crystallizedThought = response.text();
    
    return NextResponse.json({ crystallized_thought: crystallizedThought });

  } catch (error) {
    console.error('Error in genesis-reflection API:', error);
    return NextResponse.json({ error: 'Failed to generate reflection' }, { status: 500 });
  }
}
