import { google } from "@ai-sdk/google";
import { openai } from "@ai-sdk/openai";
import { embed, embedMany, generateText, streamText } from "ai";

/**
 * Modèle de langage par défaut (Google Gemini 2.0 / 1.5 Flash ou OpenAI GPT-4o-mini)
 */
export const defaultLanguageModel = google("gemini-2.0-flash-exp");

/**
 * Modèle d'embeddings par défaut
 * - Google : text-embedding-004 (dimension 768)
 * - OpenAI : text-embedding-3-small (dimension 1536)
 */
export const defaultEmbeddingModel = google.textEmbeddingModel("text-embedding-004");

/**
 * Génère un vecteur d'embedding pour un texte donné
 */
export async function generateEmbedding(text: string) {
  const { embedding } = await embed({
    model: defaultEmbeddingModel,
    value: text,
  });
  return embedding;
}

/**
 * Génère des vecteurs d'embeddings pour une liste de textes
 */
export async function generateEmbeddings(texts: string[]) {
  const { embeddings } = await embedMany({
    model: defaultEmbeddingModel,
    values: texts,
  });
  return embeddings;
}

export { generateText, streamText };
