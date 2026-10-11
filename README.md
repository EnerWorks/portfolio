# Portfolio

A simple, responsive, multilingual personal portfolio website.

Available languages: **English**, **German**, **French**

## Tech Stack

| Tool | Purpose |
| --- | --- |
| [React](https://react.dev) | UI library for building components |
| [Vite](https://vite.dev) | Fast dev server and build tool |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling, responsive design |
| [i18next](https://www.i18next.com) + [react-i18next](https://react.i18next.com) | Multi-language support |
| [i18next-browser-languagedetector](https://github.com/i18next/i18next-browser-languageDetector) | Detects the visitor's language and remembers their choice |
| [Vercel](https://vercel.com) | Hosting and automatic deployment |
| [Git](https://git-scm.com) / GitHub | Version control |

## Getting Started

### Requirements

- [Node.js](https://nodejs.org) (LTS version)
- npm (comes with Node.js)

### Installation

```bash
git clone <your-repo-url>
cd portfolio
npm install
```

### Run locally

```bash
npm run dev
```

Open the address shown in the terminal (usually `http://localhost:5173`).

### Other scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Project Structure

```
portfolio/
├── public/              Static files (favicon, images)
├── src/
│   ├── components/      React components (Hero, About, Projects...)
│   ├── locales/         Translation files
│   │   ├── en.json
│   │   ├── de.json
│   │   └── fr.json
│   ├── App.jsx          Main component
│   ├── i18n.js          i18next configuration
│   ├── index.css        Tailwind import
│   └── main.jsx         App entry point
├── index.html
├── vercel.json          Rewrites all routes to index.html
├── vite.config.js       Vite + React + Tailwind plugins
└── package.json
```

## How Translations Work

All visible text lives in the JSON files inside `src/locales/`, never directly inside components. Components read text using the `t()` function:

```jsx
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()
  return <h1>{t('hero.title')}</h1>
}
```

- The visitor's browser language is detected automatically.
- The choice is saved in `localStorage`.
- English is the fallback: if a key is missing in another language, the English text is shown.

### Add a new language

1. Create `src/locales/xx.json` (for example `es.json`) with the same keys as `en.json`.
2. Import it in `src/i18n.js` and add it to `resources` and `supportedLngs`.
3. Add a button or option for it in the language switcher.

## Deployment (Vercel)

1. Push the project to GitHub.
2. On [vercel.com](https://vercel.com), choose **Add New Project** and import the repository.
3. Vercel detects Vite automatically. Click **Deploy**.

Every `git push` to the main branch triggers a new deployment.

`vercel.json` makes sure direct links to any route load `index.html` instead of returning a 404:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Notes

- German text is usually longer than English, so layouts should be tested in every language, especially on mobile.
- Keep sentences short and simple, and have translations reviewed by a native speaker when possible.

## License

Personal project. All rights reserved.
