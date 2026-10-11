# Portfolio

A simple, fast, multilingual personal portfolio with a dark terminal-inspired look.

**Live:** https://enerworks.vercel.app

Languages: English, German (Deutsch), French (Français)

## Pages

| Route | Page | What it shows |
| --- | --- | --- |
| `/` | About | Terminal-style intro, rotating sentences, info card, links |
| `/projects` | Projects | Project cards with tags, source and demo links |
| `/learning` | Learning | Topics with a status (Done, Learning, Planned) |
| `/contact` | Contact | Email and LinkedIn |

## Tech Stack

| Tool | Purpose |
| --- | --- |
| [React](https://react.dev) | UI library |
| [Vite](https://vite.dev) | Dev server and build tool |
| [Tailwind CSS](https://tailwindcss.com) | Styling and responsive layout |
| [React Router](https://reactrouter.com) | Client-side routing between pages |
| [i18next](https://www.i18next.com) + [react-i18next](https://react.i18next.com) | Translations |
| [i18next-browser-languagedetector](https://github.com/i18next/i18next-browser-languageDetector) | Detects the visitor's language and remembers the choice |
| [React Icons](https://react-icons.github.io/react-icons/) | Icons (Font Awesome 6 set) |
| [Fontsource](https://fontsource.org) | Self-hosted fonts: Inter and JetBrains Mono |
| [Vercel](https://vercel.com) | Hosting and automatic deployment |

## Design

- Colors: [Catppuccin Mocha](https://github.com/catppuccin/catppuccin), defined once in `src/index.css` inside `@theme`.
- Fonts: Inter for text, JetBrains Mono for terminal-style details. Both are installed from npm (no external font requests).
- Layout: a single centered column, sticky header with pill navigation, language switcher in the header.
- Motion is subtle and respects `prefers-reduced-motion`.

## Getting Started

### Requirements

- [Node.js](https://nodejs.org) (LTS)
- npm (comes with Node.js)

### Install and run

```bash
git clone <your-repo-url>
cd portfolio
npm install
npm run dev
```

Open the address shown in the terminal (usually `http://localhost:5173`).

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

Run `npm run build` before pushing to catch errors that would fail the deployment.

## Project Structure

```
portfolio/
├── public/
│   └── favicon.svg          Site icon
├── src/
│   ├── components/
│   │   ├── Header.jsx           Navigation pills and language switcher
│   │   ├── Footer.jsx           Status-line style footer
│   │   ├── LanguageSwitcher.jsx Language dropdown
│   │   ├── RotatingText.jsx     Rotating sentences with dots
│   │   └── InfoCard.jsx         neofetch-style info card
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Learning.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   ├── projects.js          List of projects (links and tags)
│   │   └── learning.js          List of learning topics and their status
│   ├── locales/
│   │   ├── en.json
│   │   ├── de.json
│   │   └── fr.json
│   ├── App.jsx              Routes
│   ├── i18n.js              i18next configuration
│   ├── index.css            Tailwind import, theme colors, fonts
│   └── main.jsx             Entry point (BrowserRouter)
├── index.html
├── vercel.json              Rewrites all routes to index.html
├── vite.config.js
└── package.json
```

## How Translations Work

All visible text lives in the JSON files in `src/locales/`, never inside components. Components read text with the `t()` function:

```jsx
const { t } = useTranslation()
<h1>{t('projects.title')}</h1>
```

- The visitor's browser language is detected automatically, and the choice is saved in `localStorage`.
- English is the fallback: if a key is missing in another language, the English text is shown.
- The `<html lang>` attribute is updated when the language changes.
- Keys must be identical in all three files, and lists (such as `about.lines`) should have the same number of items in every language.

## How to Update Content

### Add a project

1. Add an entry to `src/data/projects.js`:
   ```js
   {
     id: 'my-project',
     tags: ['Docker', 'Linux'],
     github: 'https://github.com/...',
     demo: null,
   }
   ```
2. Add `projects.items.my-project` (with `name` and `description`) to `en.json`, `de.json` and `fr.json`.

Projects marked `example: true` are shown only in development, never in the production build.

### Add or update a learning topic

1. Add or edit an entry in `src/data/learning.js`. Allowed statuses: `done`, `learning`, `planned`.
2. Add `learning.items.<id>` (with `name` and `note`) to the three locale files.

### Edit the info card or rotating sentences

Edit `about.card.rows` and `about.lines` in the three locale files.

### Add a language

1. Create `src/locales/xx.json` with the same keys as `en.json`.
2. Import it in `src/i18n.js` and add it to `resources` and `supportedLngs`.
3. Add it to the `languages` list in `src/components/LanguageSwitcher.jsx`.

## Deployment (Vercel)

1. Push the project to GitHub.
2. In Vercel, import the repository. Vercel detects Vite automatically.
3. Every `git push` to `main` triggers a new deployment.

`vercel.json` makes direct links such as `/projects` load the app instead of returning a 404:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Commits must use an email address linked to the GitHub account, otherwise Vercel may block the deployment.

## Notes

- German and French text is longer in places, so check layouts in every language, especially on mobile.
- Keep sentences short and have translations reviewed by a native speaker when possible.

## License

Personal project. All rights reserved.
