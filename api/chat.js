import Anthropic from '@anthropic-ai/sdk';
import cors from 'cors';
import { SYSTEM_PROMPT } from './systemPrompt.js';

// Configurar CORS
const corsMiddleware = cors({
  origin: [
    'https://maryquiroz.github.io',
    'https://mary-portfolio-two.vercel.app',
    'http://localhost:5173',
    'http://localhost:3001'
  ],
  methods: ['POST'],
  credentials: true
});

// Función auxiliar para manejar CORS
const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

export default async function handler(req, res) {
  try {
    // Manejar CORS
    await runMiddleware(req, res, corsMiddleware);

    // Solo permitir POST
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid messages format' });
    }

    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    // Configurar headers para streaming
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Transfer-Encoding', 'chunked');

    const stream = await anthropic.messages.create({
      model: "claude-3-opus-20240229",
      max_tokens: 1024,
      messages: messages.map(msg => ({
        role: msg.role,
        content: msg.content
      })),
      system: SYSTEM_PROMPT,
      stream: true,
    });

    for await (const chunk of stream) {
      if (chunk.type === 'content_block_delta' && chunk.delta.text) {
        res.write(chunk.delta.text);
      }
    }

    res.end();
  } catch (error) {
    console.error('Error:', error);
    if (!res.headersSent) {
      res.status(500).json({ 
        error: 'Internal server error', 
        details: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      });
    }
  }
} 