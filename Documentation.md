# Documentation

## Prerequisites
- Node.js 18+ and npm 9+
- macOS, Linux, or Windows

## Setup
```bash
npm ci || npm install
```

## Scripts
- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run preview` — preview built app locally

## Deployment
The app is a Vite + React + TypeScript project. Common options:
- **Static hosting (GitHub Pages / Netlify / Vercel):**
  1. `npm run build`
  2. Upload the `dist/` folder or configure GitHub Actions to publish it.
- **Any static server:** serve the `dist/` folder.

## Compliance & Licenses
- Project license: **MIT** (see `LICENSE`).
- Third‑party packages: see `Attributions.md`. Each package retains its own license.

## Notes on Dependency Pinning
A package lockfile was not present in the uploaded ZIP, so exact versions were pinned where available by removing range operators (e.g., `^1.2.3` → `1.2.3`). Any entries that were `"*"` remain to be resolved on your machine by running:
```bash
npm install
npm pkg set devDependencies.typescript=$(npm view typescript version)
npm pkg set devDependencies.'@types/react'=$(npm view @types/react version)
npm pkg set devDependencies.'@types/react-dom'=$(npm view @types/react-dom version)
npm pkg set devDependencies.'@tailwindcss/postcss'=$(npm view @tailwindcss/postcss version)
```
Then commit the updated `package.json` and generated `package-lock.json`.

## Image & Asset Policy
You indicated demo/stock images should remain unchanged. They were preserved. Ensure you hold the appropriate rights for any assets before distribution.
