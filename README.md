# Innovalogic.tech

Personal portfolio and consulting website for Dario Meneses / Innovalogic.tech.

This site presents selected software projects, applied automation work, AI-focused services, a lightweight working process, and contact paths for new collaborations.

## Stack

- React 18
- Vite
- Tailwind CSS
- Lucide React icons

## Local development

```bash
npm install
npm run dev
```

On Windows PowerShell, use `npm.cmd` if script execution policies block `npm.ps1`:

```bash
npm.cmd run dev
```

## Quality checks

```bash
npm run lint
npm run build
```

## Project structure

- `src/App.jsx` contains the current one-page portfolio experience.
- `src/App.css` contains small global interaction and layout helpers.
- `src/index.css` loads Tailwind and shared design tokens.
- `public/favicon.svg` provides the site icon.

## Deployment

The production build is generated in `dist/`:

```bash
npm run build
```

The site is designed to be hosted as a static Vite build.
