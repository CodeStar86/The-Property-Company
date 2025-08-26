# The-Property-Company

This is a Vite + React + Tailwind CSS frontend prepared for deployment on **GitHub Pages** via **GitHub Actions**.

## Scripts

```bash
# install deps
npm install

# run dev
npm run dev

# build & preview
npm run build && npm run preview
```

## Deployment (GitHub Pages + Actions)

This repo is configured to auto-deploy to **GitHub Pages** when you push to `main`:

- `vite.config.ts` sets `base: "/The-Property-Company/"` so assets resolve correctly on Pages.
- A workflow at `.github/workflows/deploy.yml` builds the app and deploys the `dist/` folder with `actions/deploy-pages@v4`.
- The workflow adds a fallback `404.html` (copied from `index.html`) for SPA client-side routing.

### One-time setup
1. Ensure your repository name is `The-Property-Company` and your GitHub username is `CodeStar86`.
2. In GitHub, open **Settings → Pages** and set **Build and deployment → GitHub Actions** (the workflow will also configure this automatically on first run).

### Lockfile policy
**Always commit `package-lock.json`.**  
The CI prefers `npm ci` when a lockfile exists (faster, reproducible builds). If no lockfile is present, it falls back to `npm install`.

### Development notes
- The build output is forced to `dist/`.
- If you change the repo name, update `base` in `vite.config.ts` to match the new `/The-Property-Company/` path.
