"use client";

import React, { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AiChat } from "@/components/ai-chat";
import { toast } from "sonner";
import {
  Database,
  Sparkles,
  Layers,
  ShieldCheck,
  Terminal,
  ExternalLink,
  Code2,
  CheckCircle2,
  Cpu,
  Monitor,
  Tablet,
  Smartphone,
} from "lucide-react";

type ViewportMode = "desktop" | "tablet" | "mobile";

export default function Home() {
  const [viewportMode, setViewportMode] = useState<ViewportMode>("desktop");

  const showDemoToast = () => {
    toast.success("Notification Sonner opérationnelle !", {
      description: "Votre stack UI et système de toasts sont prêts.",
    });
  };

  const isSimulatedMobile = viewportMode === "mobile";
  const isSimulatedTablet = viewportMode === "tablet";

  // Styles de châssis et d'encadrement pour le simulateur
  const getContainerStyles = () => {
    switch (viewportMode) {
      case "mobile":
        return "w-full max-w-[390px] border-4 border-muted-foreground/30 rounded-[38px] shadow-2xl overflow-hidden my-6 transition-all duration-300";
      case "tablet":
        return "w-full max-w-[768px] border-4 border-muted-foreground/30 rounded-[28px] shadow-2xl overflow-hidden my-6 transition-all duration-300";
      case "desktop":
      default:
        return "w-full max-w-6xl transition-all duration-300";
    }
  };

  // Grille dynamique adaptée au mode simulé
  const getGridClasses = () => {
    if (isSimulatedMobile) return "grid grid-cols-1 gap-4";
    if (isSimulatedTablet) return "grid grid-cols-1 sm:grid-cols-2 gap-4";
    return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6";
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
      {/* Barre de navigation principale avec sélecteur de prévisualisation responsive */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-7xl items-center justify-between mx-auto px-4 gap-2">
          {/* Logo & Titre */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-black text-base sm:text-lg">
              ▲
            </div>
            <div>
              <span className="font-bold text-sm sm:text-base md:text-lg">Next.js Template Pro</span>
              <Badge variant="outline" className="hidden sm:inline-flex ml-2 text-xs font-mono">
                v1.1
              </Badge>
            </div>
          </div>

          {/* Sélecteur de vue (Desktop / Tablette / Mobile) */}
          <div className="flex items-center bg-muted p-1 rounded-xl border border-border/60 gap-1">
            <Button
              variant={viewportMode === "desktop" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewportMode("desktop")}
              className="h-8 px-2 sm:px-3 gap-1.5 text-xs font-medium cursor-pointer"
              title="Vue Ordinateur (Plein écran)"
            >
              <Monitor className="h-4 w-4" />
              <span className="hidden md:inline">Desktop</span>
            </Button>
            <Button
              variant={viewportMode === "tablet" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewportMode("tablet")}
              className="h-8 px-2 sm:px-3 gap-1.5 text-xs font-medium cursor-pointer"
              title="Vue Tablette (768px)"
            >
              <Tablet className="h-4 w-4" />
              <span className="hidden md:inline">Tablette</span>
            </Button>
            <Button
              variant={viewportMode === "mobile" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewportMode("mobile")}
              className="h-8 px-2 sm:px-3 gap-1.5 text-xs font-medium cursor-pointer"
              title="Vue Smartphone (390px)"
            >
              <Smartphone className="h-4 w-4" />
              <span className="hidden md:inline">Mobile</span>
            </Button>
          </div>

          {/* Actions & Thème */}
          <div className="flex items-center gap-2 shrink-0">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Zone de contenu principale encadrée par le simulateur responsive */}
      <div className="flex-1 flex justify-center items-start px-2 sm:px-4">
        <div className={`bg-background ${getContainerStyles()}`}>
          {/* Si mode mobile ou tablette, affichage d'une barre d'indication de taille */}
          {viewportMode !== "desktop" && (
            <div className="bg-muted px-4 py-2 border-b border-border/50 flex items-center justify-between text-xs text-muted-foreground font-mono select-none">
              <span>{isSimulatedMobile ? "📱 Smartphone (390 x 844)" : "📱 Tablette (768 x 1024)"}</span>
              <span className="text-emerald-500 font-semibold text-[11px]">Mode Simulateur</span>
            </div>
          )}

          {/* Hero Section */}
          <section className={`px-4 text-center ${isSimulatedMobile ? "py-8" : "py-12 md:py-20"}`}>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium mb-4 sm:mb-6 max-w-full">
              <Sparkles className="h-3.5 w-3.5 text-amber-500 shrink-0" />
              <span className="truncate">SQLite & Supabase + IA SDK + Bcrypt + MCP</span>
            </div>

            <h1
              className={`font-black tracking-tight break-words mb-4 sm:mb-6 ${
                isSimulatedMobile
                  ? "text-2xl leading-tight"
                  : isSimulatedTablet
                  ? "text-3xl sm:text-4xl leading-tight"
                  : "text-3xl sm:text-5xl md:text-6xl font-black leading-tight"
              }`}
            >
              Votre socle de développement <br />
              <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Prêt pour l'IA, le Mobile et le Cloud
              </span>
            </h1>

            <p
              className={`text-muted-foreground mx-auto mb-6 sm:mb-8 leading-relaxed break-words ${
                isSimulatedMobile
                  ? "text-xs sm:text-sm max-w-xs"
                  : "text-sm sm:text-base md:text-lg max-w-2xl"
              }`}
            >
              Template complet Next.js (App Router), TypeScript, Tailwind CSS v4, Prisma ORM
              (SQLite & Supabase PostgreSQL), 48+ composants Shadcn UI, sécurité SSL/Bcrypt et support MCP Google Stitch.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
              <Button
                size={isSimulatedMobile ? "sm" : "default"}
                className="font-bold gap-2 text-xs sm:text-sm shadow-md cursor-pointer"
                onClick={showDemoToast}
              >
                <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Tester une notification
              </Button>
              <Button
                size={isSimulatedMobile ? "sm" : "default"}
                variant="outline"
                className="font-semibold gap-2 text-xs sm:text-sm cursor-pointer"
                onClick={() => {
                  window.open("https://github.com/JoyBen243/Next.js-Template", "_blank");
                }}
              >
                <Code2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Dépôt GitHub
                <ExternalLink className="h-3.5 w-3.5 opacity-60" />
              </Button>
            </div>
          </section>

          {/* Live AI Chat Demo Section */}
          <section className="px-3 sm:px-6 py-4">
            <AiChat />
          </section>

          {/* Feature Grid (3 Frames Explicatives) */}
          <section className="px-3 sm:px-6 py-6 sm:py-8">
            <div className={getGridClasses()}>
              {/* Feature 1 */}
              <Card className="border-border/60 hover:border-primary/50 transition-all shadow-xs overflow-hidden">
                <CardHeader className="p-4 sm:p-5">
                  <div className="p-2 w-fit rounded-xl bg-blue-500/10 text-blue-500 mb-2">
                    <Database className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base sm:text-lg break-words">Base Hybride & pgvector</CardTitle>
                  <CardDescription className="text-xs sm:text-sm break-words">
                    SQLite local/mobile + PostgreSQL Supabase avec support <code>pgvector</code>.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-5 pt-0">
                  <ul className="text-xs sm:text-sm space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                      <span className="break-words">Prisma 7 universel avec drivers adaptés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                      <span className="break-words">Bascule facile SQLite ↔ PostgreSQL</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 2 */}
              <Card className="border-border/60 hover:border-primary/50 transition-all shadow-xs overflow-hidden">
                <CardHeader className="p-4 sm:p-5">
                  <div className="p-2 w-fit rounded-xl bg-purple-500/10 text-purple-500 mb-2">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base sm:text-lg break-words">Vercel AI SDK & MCP Stitch</CardTitle>
                  <CardDescription className="text-xs sm:text-sm break-words">
                    Streaming Gemini & OpenAI, et intégration MCP pour Google Stitch.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-5 pt-0">
                  <ul className="text-xs sm:text-sm space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                      <span className="break-words">Streaming temps réel & Embeddings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                      <span className="break-words">Fichier <code>mcp.config.json</code> inclus</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 3 */}
              <Card className="border-border/60 hover:border-primary/50 transition-all shadow-xs overflow-hidden">
                <CardHeader className="p-4 sm:p-5">
                  <div className="p-2 w-fit rounded-xl bg-emerald-500/10 text-emerald-500 mb-2">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base sm:text-lg break-words">Sécurité SSL & Bcrypt</CardTitle>
                  <CardDescription className="text-xs sm:text-sm break-words">
                    En-têtes HTTP de sécurité stricts (HSTS/SSL) et hachage Bcrypt.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-5 pt-0">
                  <ul className="text-xs sm:text-sm space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                      <span className="break-words">Hachage <code>lib/auth/password.ts</code></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                      <span className="break-words">Headers HSTS & CSP actifs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Quick Commands Guide */}
          <section className="px-3 sm:px-6 py-6">
            <Card className="bg-muted/40 border-border/60 overflow-hidden">
              <CardHeader className="p-4 sm:p-5">
                <div className="flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-primary shrink-0" />
                  <CardTitle className="text-sm sm:text-base break-words">Commandes Utiles Prisma</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-5 pt-0">
                <div className="grid gap-2 text-xs font-mono">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-lg bg-background border border-border gap-1 overflow-hidden">
                    <span className="text-blue-400 font-bold truncate">npm run db:push</span>
                    <span className="text-[11px] text-muted-foreground font-sans truncate">Applique le schéma sur la base</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-lg bg-background border border-border gap-1 overflow-hidden">
                    <span className="text-blue-400 font-bold truncate">npm run db:studio</span>
                    <span className="text-[11px] text-muted-foreground font-sans truncate">Ouvre l'interface Prisma Studio</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-lg bg-background border border-border gap-1 overflow-hidden">
                    <span className="text-blue-400 font-bold truncate">npm run db:switch-postgres</span>
                    <span className="text-[11px] text-muted-foreground font-sans truncate">Active PostgreSQL / pgvector</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Footer interne */}
          <footer className="border-t border-border/40 py-6 text-center text-[11px] sm:text-xs text-muted-foreground px-4">
            <p>© {new Date().getFullYear()} Next.js Template Pro — Conçu pour l'efficacité, la sécurité et la flexibilité.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}