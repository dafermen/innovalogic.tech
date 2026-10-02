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

- `src/App.jsx` contains the bilingual one-page experience and category filters.
- `src/projects.js` is the shared catalog of 20 projects, with Spanish/English summaries, availability labels, and links.
- `src/App.css` contains small global interaction and layout helpers.
- `src/index.css` loads Tailwind and shared design tokens.
- `public/favicon.svg` provides the site icon.

## Deployment

The production build is generated in `dist/`:

```bash
npm run build
```

The site is designed to be hosted as a static Vite build.


## Portfolio maintenance

The catalog follows the GitHub profile and the local project inventory, reviewed on 2026-10-02. Update both translations in `src/projects.js`; counts and category filters derive from that single list. Keep hosted demos, local apps, desktop tools, private projects, and development milestones distinct. Link only public repositories and accessible destinations.

Current exclusions requested by the owner: RoadReady, DocTranslate, doc, SEC-AUD-20260808-001, SHSAT, and SpiderCloud. SmartTense currently links only to source because its demo hostname failed HTTPS certificate verification. NetWatch links to a landing page; Nexo links to protected pilot access.

Before publishing, run lint and build, then check desktop/mobile layouts, both languages, all filters, navigation, and project links. Language selection updates the document language; filter and navigation controls support keyboard focus, and reduced-motion preferences are respected.

The existing Nginx site serves `/var/www/innovalogic.tech/public_html`. Publish only `dist/`: back up the current directory, copy hashed assets first without deleting previous assets, then replace `index.html` atomically. Keep the backup for rollback; this site update does not require a change to Nginx or its TLS configuration.

Hosted links updated on 2026-10-02: AI Dev Control, Ruteza, SpeakFlowAI and avDownloader use key-protected demo access. SmartRead links to extension installation/documentation; WorkDay Assistant links to its in-progress preview. The avDownloader pilot is authorized through October 9, 2026; retain that date in both translations and recheck availability before extending the listing. Repository website fields and the GitHub profile use the same destinations. Never publish access keys.
