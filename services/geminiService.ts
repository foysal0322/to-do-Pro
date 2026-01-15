
import { GoogleGenAI, Type } from "@google/genai";
import { Task } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getProductivityInsight(tasks: Task[]): Promise<string> {
  const taskSummary = tasks.map(t => `${t.title} (${t.status}, ${t.category})`).join(', ');
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Based on these user tasks: ${taskSummary}. Provide a short, motivating one-sentence productivity insight or tip.`,
    config: {
      maxOutputTokens: 100,
      temperature: 0.7,
    },
  });

  return response.text || "Keep up the great work! You're making steady progress.";
}
