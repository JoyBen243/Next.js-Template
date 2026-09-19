import { genSalt, hash, compare } from "bcrypt-ts";

const SALT_ROUNDS = 10;

/**
 * Hache un mot de passe en clair avec un sel aléatoire sécurisé (Bcrypt)
 * @param password Mot de passe en clair à hacher
 * @returns Le mot de passe haché
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = await genSalt(SALT_ROUNDS);
  return hash(password, salt);
}

/**
 * Compare un mot de passe en clair avec son hash stocké en base de données
 * @param password Mot de passe en clair fourni par l'utilisateur
 * @param hash Mot de passe haché stocké
 * @returns Vrai si le mot de passe correspond, faux sinon
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return compare(password, hash);
}
