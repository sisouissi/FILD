import { GoogleGenAI } from '@google/genai';

// This handler is designed for Vercel's serverless environment and supports streaming.
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { prompt, systemInstruction } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    if (!process.env.API_KEY) {
      console.error("API_KEY environment variable not set on the server.");
      // Provide a clear, actionable error message for the developer.
      return res.status(500).json({ error: 'Server configuration error: The API_KEY environment variable is not set on the Vercel server. Please check your project settings.' });
    }
    
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const stream = await ai.models.generateContentStream({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
      },
    });

    // Set headers for streaming
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Transfer-Encoding', 'chunked');

    // Stream the response
    for await (const chunk of stream) {
      res.write(chunk.text);
    }
    
    res.end();

  } catch (error) {
    console.error("Error in streaming /api/generate handler:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown internal error occurred.";
    
    // Only send a JSON error if the stream hasn't started
    if (!res.headersSent) {
      res.status(500).json({ error: `AI service failed: ${errorMessage}` });
    } else {
      res.end(); // If stream is open, just end it.
    }
  }
}