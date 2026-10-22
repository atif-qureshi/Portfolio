# Muhammad Atif Qureshi — Portfolio

A responsive React + Tailwind CSS portfolio based on the supplied CV. Vite handles development and production builds. No backend service or API keys required.

## Run locally

Requires Node.js 20.19+ or 22.12+ and npm.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Production: `npm run build`, then `npm run preview`. Deploy the generated `dist/` folder to any static host.

## MVC organization

```text
public/
  documents/atif.pdf          Original downloadable CV
  images/                    Add profile.jpg here
src/
  models/portfolio.js         Profile, projects, skills, social links
  controllers/
    usePortfolioController.js Filter, navigation, clipboard, image fallback
  views/
    Portfolio.jsx            Page sections and layout
    components/
      ProjectVisual.jsx      Original project illustrations
  styles/index.css           Tailwind import, theme, responsive styles
  main.jsx                   Application entry
index.html                   Metadata and root element
vite.config.js               React and Tailwind plugins
```

This is a frontend MVC adaptation: models hold content, the controller hook manages behavior, and React views render it. There is no unnecessary server layer.

## Customize

- Edit all CV content in `src/models/portfolio.js`.
- Add your photo at `public/images/profile.jpg`; the initials artwork is an intentional fallback.
- Add your actual GitHub and LinkedIn profile URLs to `socials`. The supplied CV links only to the platform homepages, so these links stay hidden until configured.
- Set each project's `url` to a real demo or repository URL to show its link. Project illustrations are conceptual and do not claim performance metrics.
- Replace `public/documents/atif.pdf` when your CV changes.
- Contact buttons use email and telephone links; copy-email uses the clipboard when supported. No message delivery backend is configured.

Features: responsive navigation, active-section indicator, category filters, CV download, photo fallback, email copy with feedback, keyboard focus states, skip link, and reduced-motion support.
