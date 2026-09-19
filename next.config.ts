import type { NextConfig } from "next";

const securityHeaders = [
  // Force la connexion sécurisée SSL/HTTPS (HSTS) pendant 2 ans
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Empêche le détournement de clic (Clickjacking) en bloquant l'intégration dans des iframes externes
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // Bloque le reniflage de type MIME
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Contrôle la transmission des informations de référence (Referrer)
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Désactive les fonctionnalités matérielles non nécessaires pour un site web sécurisé
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  // Active la protection XSS des anciens navigateurs
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
];

const nextConfig: NextConfig = {
  // Application des en-têtes de sécurité sur toutes les routes
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
