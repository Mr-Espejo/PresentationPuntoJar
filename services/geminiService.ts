
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBeerRoute = async (preferences: string) => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Basado en estas preferencias: "${preferences}", genera una ruta cervecera de 3 lugares en Bogotá para la app "Punto Jar". 
    Usa un tono de marca: aventurero, experto, de barrio y premium.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            venueName: { type: Type.STRING },
            description: { type: Type.STRING },
            style: { type: Type.STRING },
            priceRange: { type: Type.STRING }
          },
          required: ["venueName", "description", "style", "priceRange"]
        }
      }
    }
  });

  return JSON.parse(response.text);
};

export const askPitchQuestion = async (question: string) => {
  const context = `
    Punto Jar es una plataforma en Bogotá que optimiza el descubrimiento de cerveza artesanal.
    Problema: Consumidores perdidos; bares sin alcance.
    Solución: Rutas inteligentes, transparencia y gamificación.
    Mercado: 300+ cervecerías en Bogotá.
    Misión: Dinamizar los barrios visibilizando su oferta cervecera.
    Fundador: Daniel Galvis, experto en analítica y apasionado de la cultura local.
  `;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Contexto del Pitch: ${context}\nPregunta: ${question}`,
    config: {
      systemInstruction: "Eres el asistente oficial de Punto Jar. Responde siempre con entusiasmo, profesionalismo y basándote en que somos 'El punto de encuentro' de la cerveza en Bogotá."
    }
  });

  return response.text;
};
