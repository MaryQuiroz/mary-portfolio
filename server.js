import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { AI_ASSISTANT_CONFIG } from './src/config/aiAssistant.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Verificar que la clave API esté disponible
const ANTHROPIC_API_KEY = process.env.VITE_ANTHROPIC_API_KEY;
if (!ANTHROPIC_API_KEY) {
  console.error('Error: La clave API de Anthropic no está configurada');
  process.exit(1);
}

app.post('/api/chat', async (req, res) => {
  try {
    console.log('Solicitud recibida:', req.body);

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
        'accept': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-3-7-sonnet-20250219',
        max_tokens: 1024,
        messages: req.body.messages.map(msg => ({
          role: msg.role === 'system' ? 'assistant' : msg.role,
          content: msg.content
        })),
        system: AI_ASSISTANT_CONFIG.systemPrompt
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Error de Anthropic:', {
        status: response.status,
        statusText: response.statusText,
        data: errorData,
        headers: response.headers.raw()
      });
      throw new Error(`Error de API: ${response.status} - ${errorData}`);
    }

    const data = await response.json();
    console.log('Respuesta de Anthropic:', data);
    
    res.json({
      role: 'assistant',
      content: data.content[0].text
    });
  } catch (error) {
    console.error('Error en el servidor proxy:', error);
    res.status(500).json({ 
      error: 'Error al procesar la solicitud',
      details: error.message 
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor proxy ejecutándose en el puerto ${PORT}`);
  console.log('Variables de entorno cargadas:', {
    ANTHROPIC_API_KEY: ANTHROPIC_API_KEY ? '***' + ANTHROPIC_API_KEY.slice(-4) : 'no configurada'
  });
}); 