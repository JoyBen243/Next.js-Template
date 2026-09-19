import { defaultLanguageModel } from "@/lib/ai";
import { streamText } from "ai";

// Permet le streaming des réponses IA jusqu'à 30 secondes
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = streamText({
      model: defaultLanguageModel,
      system:
        "Tu es l'assistant IA intégré de Next.js Template Pro. Tu aides les développeurs à concevoir des applications web et mobiles modernes, performantes et sécurisées.",
      messages,
    });

    return result.toTextStreamResponse();
  } catch (error: any) {
    console.error("AI Chat Route Error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Erreur lors de la génération IA." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
