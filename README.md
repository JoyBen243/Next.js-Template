# 🚀 Next.js Template Pro (AI & Cloud DB Ready)

Un template de démarrage moderne, robuste et complet pour Next.js (App Router), optimisé pour la rapidité de développement, les bases de données relationnelles et vectorielles, et les fonctionnalités d'Intelligence Artificielle.

---

## ⚡ Fonctionnalités Clés

- **⚡ Framework & Core** : [Next.js](https://nextjs.org/) (App Router, Server Components & Actions), [React 19](https://react.dev/), [TypeScript 5](https://www.typescriptlang.org/).
- **🎨 Design System & UI** : [Tailwind CSS v4](https://tailwindcss.com/), **48+ composants [Shadcn UI](https://ui.shadcn.com/)** pré-installés, [Lucide Icons](https://lucide.dev/), [Framer Motion](https://www.framer.com/motion/).
- **🌓 Thème Sombre / Clair** : Intégration complète avec `next-themes` et bouton de bascule (`ThemeToggle`).
- **🗄️ Base de Données Hybride (Prisma ORM)** :
  - **Mode SQLite local** : Idéal pour le prototypage rapide, les tests hors-ligne ou les applications mobiles.
  - **Mode PostgreSQL / Supabase** : Prêt pour la production dans le cloud avec support de l'extension **`pgvector`** (recherche sémantique, RAG, embeddings vectoriels).
  - Client Prisma singleton (`lib/prisma.ts`) pour éviter les fuites de connexions en dev.
- **🤖 Stack Intelligence Artificielle** : [Vercel AI SDK](https://sdk.vercel.ai/), connecteurs Google Gemini (`@ai-sdk/google`) et OpenAI (`@ai-sdk/openai`), helpers pour la génération de texte et d'embeddings (`lib/ai.ts`), rendu Markdown avec `react-markdown`.
- **🔐 Authentification & Cloud SSR** : Intégration Supabase SSR (`@supabase/ssr`) pour les Client et Server Components (`lib/supabase/`).
- **🛡️ Formulaires & Sécurité** : [React Hook Form](https://react-hook-form.com/), validation [Zod](https://zod.dev/), Server Actions typées et sécurisées avec `next-safe-action` (`lib/safe-action.ts`).
- **🔔 Notifications** : Toasts fluides avec [Sonner](https://sonner.emilkowal.ski/).

---

## 📁 Structure du Projet

```text
├── app/                  # Next.js App Router (pages, layout, globals.css)
├── components/           # Composants réutilisables
│   ├── ui/               # 48+ composants Shadcn UI
│   ├── theme-provider.tsx# Provider pour next-themes
│   └── theme-toggle.tsx  # Bouton de bascule de thème
├── lib/                  # Utilitaires et clients
│   ├── ai.ts             # Vercel AI SDK & fonctions d'embeddings
│   ├── prisma.ts         # Instance singleton de PrismaClient
│   ├── safe-action.ts    # Client Server Actions sécurisées
│   ├── supabase/         # Clients Supabase (client.ts, server.ts, middleware.ts)
│   └── utils.ts          # Helper cn (clsx + tailwind-merge)
├── prisma/               # Schémas Prisma et migrations
│   ├── schema.prisma     # Schéma par défaut (SQLite)
│   └── schema.postgresql.prisma # Schéma PostgreSQL / Supabase + pgvector
├── .env.example          # Modèle des variables d'environnement
└── package.json          # Dépendances et scripts
```

---

## 🛠️ Démarrage Rapide

### 1. Cloner le projet et installer les dépendances

```bash
git clone https://github.com/JoyBen243/Next.js-Template.git mon-projet
cd mon-projet
npm install
```

### 2. Configurer l'environnement

Copiez le fichier `.env.example` vers `.env.local` :

```bash
cp .env.example .env.local
```

Par défaut, l'application est prête à tourner immédiatement avec **SQLite**.

### 3. Initialiser la base de données

Générez le client Prisma et appliquez le schéma SQLite local :

```bash
npm run db:push
```

### 4. Lancer le serveur de développement

```bash
npm run dev
```

Rendez-vous sur [http://localhost:3000](http://localhost:3000).

---

## 🗄️ Gestion de la Base de Données

### Mode 1 : SQLite (Par défaut)
Idéal pour développer en local sans configurer de base de données externe.
- Fichier de schéma : `prisma/schema.prisma`
- URL dans `.env.local` : `DATABASE_URL="file:./dev.db"`

### Mode 2 : PostgreSQL / Supabase avec pgvector
Pour connecter une base PostgreSQL hébergée sur **Supabase** et profiter de la recherche vectorielle :

1. **Activer l'extension `vector` dans Supabase** :
   Dans l'éditeur SQL de votre dashboard Supabase, exécutez :
   ```sql
   CREATE EXTENSION IF NOT EXISTS vector;
   ```

2. **Basculer le schéma Prisma vers PostgreSQL** :
   ```bash
   npm run db:switch-postgres
   ```

3. **Renseigner vos identifiants dans `.env.local`** :
   ```env
   DATABASE_URL="postgresql://postgres.[REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres?pgbouncer=true"
   DIRECT_URL="postgresql://postgres.[REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:5432/postgres"
   ```

4. **Synchroniser la base** :
   ```bash
   npm run db:push
   ```

---

## 🤖 Utilisation de l'IA & des Embeddings

Dans `lib/ai.ts`, vous disposez de helpers prêts à l'emploi :

```typescript
import { generateEmbedding, generateText, defaultLanguageModel } from "@/lib/ai";

// 1. Génération de texte
const { text } = await generateText({
  model: defaultLanguageModel,
  prompt: "Explique l'informatique quantique en 2 phrases.",
});

// 2. Génération d'un embedding vectoriel pour pgvector
const vector = await generateEmbedding("Texte à vectoriser");
```

---

## 📜 Scripts Disponibles

| Commande | Description |
| :--- | :--- |
| `npm run dev` | Démarre le serveur local Next.js sur `localhost:3000` |
| `npm run build` | Compile l'application pour la production |
| `npm run start` | Lance l'application en mode production |
| `npm run lint` | Analyse le code avec ESLint |
| `npm run db:generate` | Régénère le client TypeScript de Prisma |
| `npm run db:push` | Synchronise le schéma Prisma avec votre base de données |
| `npm run db:studio` | Ouvre l'interface graphique Prisma Studio sur `localhost:5555` |
| `npm run db:switch-sqlite` | Active le schéma SQLite |
| `npm run db:switch-postgres` | Active le schéma PostgreSQL / Supabase (pgvector) |

---

## 📄 Licence

Ce projet est sous licence MIT. Libre d'utilisation pour vos projets personnels et commerciaux !
