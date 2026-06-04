# Ikhsan Rahardian — Portfolio

Personal portfolio website built with React + Vite + Tailwind CSS.

## Project structure

```
artifacts/portfolio/
├── index.html              ← entry point (root of the project)
├── content.md              ← single source of truth for all text content
├── vite.config.ts          ← Replit dev config (requires PORT + BASE_PATH env vars)
├── vite.config.standalone.ts ← GitHub Pages / standalone build config
├── package.json            ← dependencies (standard npm-compatible versions)
├── tsconfig.json           ← standalone TypeScript config
├── public/
│   ├── 404.html            ← GitHub Pages SPA routing redirect
│   ├── .nojekyll           ← disables Jekyll processing on GitHub Pages
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── pages/
    ├── components/
    └── lib/
        └── content.ts      ← parses content.md into typed objects
```

## Editing content

All text on the site lives in **`content.md`**. Edit that file and the site updates automatically in dev mode, or rebuild for production.

The file uses `### key.name` headings followed by content. Common content keys:
- `home.hero.*` — hero section text
- `home.cta.*` — bottom CTA section
- `home.testimonials.*` — testimonials
- `about.*` — about page
- `case-studies.projects.*` — case study cards

---

## Running locally (standalone, outside Replit)

```bash
cd artifacts/portfolio
npm install
npm run build:github   # builds to dist/
```

Then open `dist/index.html` in a browser, or run a local server:

```bash
npx serve dist
```

---

## Deploying to GitHub Pages

### One-time setup

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set **Source** to `gh-pages` branch (or `main` + `/docs` folder — see below)

### Option A — `gh-pages` branch (recommended)

Install the deploy tool once:
```bash
npm install -g gh-pages
```

Build and deploy:
```bash
cd artifacts/portfolio
npm run build:github
npx gh-pages -d dist
```

This pushes the `dist/` folder to a `gh-pages` branch. GitHub Pages will serve it from the root, so `index.html` is at the root of your site.

### Option B — `docs/` folder on `main` branch

1. Change the build output in `vite.config.standalone.ts`:
   ```ts
   outDir: path.resolve(import.meta.dirname, "../../docs"),
   ```
2. Run `npm run build:github` from the `artifacts/portfolio/` folder
3. Commit and push the `docs/` folder
4. In GitHub repo: Settings → Pages → Source: `main`, `/docs`

---

## Subpath hosting (e.g. `username.github.io/portfolio`)

If your site is NOT at the root domain, update the `base` in `vite.config.standalone.ts`:

```ts
base: '/portfolio/',   // replace with your repo name
```

Then rebuild and redeploy.

---

## Tech stack

- **React 19** + **Vite 7**
- **Tailwind CSS v4**
- **shadcn/ui** components (Radix UI)
- **Framer Motion** animations
- **Recharts** data visualisations
- **Wouter** client-side routing
- **TypeScript**
