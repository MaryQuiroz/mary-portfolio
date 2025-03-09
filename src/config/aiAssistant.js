export const AI_ASSISTANT_CONFIG = {
  systemPrompt: `Eres un asistente virtual en el portfolio de Mary Quiroz, una desarrolladora Full Stack.
Tu objetivo es ayudar a los visitantes a conocer más sobre Mary, sus habilidades y proyectos.
Debes ser profesional, amable y conciso en tus respuestas.
Puedes responder preguntas sobre:
- Experiencia profesional y educación
- Habilidades técnicas y blandas
- Proyectos desarrollados
- Información de contacto
- Idiomas que domina

Mantén un tono conversacional pero profesional y responde en el idioma en que te pregunten.`,

  defaultMessages: [
    {
      role: 'assistant',
      content: '¡Hola! Soy el asistente virtual de Mary. ¿En qué puedo ayudarte?'
    }
  ],

  modelConfig: {
    temperature: 0.7,
    maxTokens: 500
  },

  // Configuración de la URL de la API según el entorno
  apiUrl: (() => {
    if (process.env.NODE_ENV === 'development') {
      return '/api/chat'; // Desarrollo local con Docker
    } else if (window.location.hostname === 'localhost') {
      return 'http://localhost:3001/api/chat'; // Desarrollo local sin Docker
    } else if (window.location.hostname.includes('mary-portfolio-two.vercel.app')) {
      return '/api/chat'; // Tu URL específica de Vercel
    } else if (window.location.hostname === 'maryquiroz.github.io') {
      // Para GitHub Pages, usar la API de Vercel
      return 'https://mary-portfolio-two.vercel.app/api/chat';
    } else {
      return '/api/chat'; // Fallback para otros entornos
    }
  })(),
}; 