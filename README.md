<div align="center">

# Arturo Meave — Portfolio

**Full Stack Developer · React · TypeScript · Interactive Web Experiences**

[![Live Site](https://img.shields.io/badge/Live%20Site-my--portfolio--murex--xi--46.vercel.app-E07B2A?style=flat-square&logo=vercel&logoColor=white)](https://my-portfolio-murex-xi-46.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Arturo%20Meave-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/arturo-meave)
[![Email](https://img.shields.io/badge/Email-arturomeave.dev%40gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:arturomeave.dev@gmail.com)
[![License](https://img.shields.io/badge/License-MIT-ffffff?style=flat-square)](./LICENSE)
[![CI](https://img.shields.io/github/actions/workflow/status/ArturoMeave/MyPortfolio/ci.yml?branch=main&style=flat-square&label=CI&logo=githubactions&logoColor=white)](https://github.com/ArturoMeave/MyPortfolio/actions)

</div>

---

## Overview

Personal portfolio built to showcase my work, skills, and personality as a developer. Designed with a dark aesthetic, bold typography, and smooth animations — fast, accessible, and available in both English and Spanish.

> *"I build digital solutions with code and design."*

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript 5.9 |
| Build tool | Vite 7 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 12 |
| 3D / WebGL | OGL |
| i18n | i18next + react-i18next |
| Linting | ESLint 9 + typescript-eslint |
| Deployment | Vercel |

---

## Features

- **Bilingual** — full EN / ES support via i18next with automatic language detection
- **WebGL background** — lightweight OGL-powered visual built for performance
- **Framer Motion animations** — page transitions and scroll-triggered reveals
- **Fully responsive** — mobile-first layout across all breakpoints
- **SEO ready** — meta tags, Open Graph, Twitter Card, canonical URL and web manifest
- **CI pipeline** — automatic type-check and build on every push to `main`

---

## Getting Started
```bash
# Clone the repo
git clone https://github.com/ArturoMeave/MyPortfolio.git
cd MyPortfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts
```bash
npm run dev        # Start development server with HMR
npm run build      # Type-check + production build
npm run preview    # Preview the production build locally
npm run lint       # Run ESLint
npm run analyze    # Build + open bundle visualizer (dist/stats.html)
```

---

## Project Structure
```
MyPortfolio/
├── public/               # Static assets (favicons, og-image, webmanifest)
├── src/
│   ├── assets/           # Images and fonts
│   ├── components/       # Reusable UI components
│   ├── i18n/             # Translation files (en, es)
│   ├── sections/         # Page sections (Hero, Skills, Projects, Contact)
│   └── main.tsx          # App entry point
├── index.html            # HTML shell with SEO meta tags
├── vite.config.ts        # Vite config with chunk splitting and analyzer
├── tailwind.config.js    # Tailwind configuration
└── tsconfig.app.json     # TypeScript strict config
```

---

## Deployment

The site deploys automatically to [Vercel](https://vercel.com) on every push to `main`. No manual steps needed.

To deploy your own fork:

1. Import the repo in [vercel.com/new](https://vercel.com/new)
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`

---

## License

MIT © 2026 [Arturo Meave](https://my-portfolio-murex-xi-46.vercel.app)