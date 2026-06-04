import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

/**
 * Standalone Vite config for GitHub Pages deployment.
 *
 * Usage:
 *   npm run build:github
 *
 * This produces a `dist/` folder you can deploy directly to GitHub Pages.
 *
 * If your site lives at a subpath (e.g. https://username.github.io/portfolio/),
 * change `base` below to match:  base: '/portfolio/'
 *
 * For a root-level user/org site (https://username.github.io/), keep:  base: '/'
 */
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "public"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
});
