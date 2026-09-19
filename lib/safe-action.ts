import { createSafeActionClient } from "next-safe-action";

/**
 * Client de base pour créer des Server Actions sécurisées et typées
 */
export const actionClient = createSafeActionClient({
  handleServerError(error) {
    console.error("Action error:", error.message);
    return {
      message: error.message || "Une erreur inattendue est survenue.",
    };
  },
});
