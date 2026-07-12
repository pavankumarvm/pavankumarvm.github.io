# pavankumarvm.github.io

Portfolio

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building & Exporting

To build and export the static site:

```bash
npm run build
npm run export
```

The exported files will be in the `out/` directory.

## Deployment

### Deploy to GitHub Pages

To deploy the site to GitHub Pages:

```bash
npm run deploy:ghpages
```

This command will:
1. Build the Next.js site
2. Export it as static HTML
3. Push the `out/` directory to the `gh-pages` branch

**Prerequisites:**
- Ensure your GitHub repository is set up to serve from the `gh-pages` branch:
  - Go to Settings → Pages → Source
  - Select `gh-pages` branch and `/` root folder

### Automatic Deployment (CI/CD)

A GitHub Actions workflow is configured to automatically build and deploy on pushes to `main`:
- Workflow file: `.github/workflows/deploy-gh-pages.yml`
- Deploys to: `gh-pages` branch

To enable, ensure the workflow is active in your GitHub repository Actions tab.
