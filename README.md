# Gedion Gizaw — 3D Portfolio

A premium, cinematic, fully responsive 3D portfolio built with React + Vite, Tailwind CSS, Framer Motion, and React Three Fiber.

## Tech Stack

- **React 18 + Vite** — fast dev/build
- **Tailwind CSS** — styling
- **Framer Motion** — animations & transitions
- **React Three Fiber + Drei** — 3D floating shapes, stars
- **React Icons** — iconography
- **React Router** — routing shell
- **Vercel-ready** — `vercel.json` included

## Run Locally (VS Code terminal)

```bash
npm install
npm run dev
```

Open the printed `localhost` URL.

## Build for Production

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo on [vercel.com](https://vercel.com).
3. Framework preset: **Vite** (auto-detected). Deploy.

Or via CLI:

```bash
npm i -g vercel
vercel
```

## ⚠️ IMPORTANT — Replace the placeholder assets

No `image.png` or `Resume 2.pdf` was provided, so placeholders were generated.
Replace them with the real files (keep the exact filenames):

- `public/image.png`  ← your circular profile photo
- `public/Resume 2.pdf`  ← your real resume

Everything is already wired to these paths — just drop the files in and rebuild.

## Structure

```
public/
  image.png          (profile image — REPLACE)
  Resume 2.pdf        (resume — REPLACE)
  logo.svg
src/
  App.jsx
  main.jsx
  index.css
  components/
    Scene3D.jsx        3D background
    CursorGlow.jsx     mouse-follow glow
    Loader.jsx         loading animation
    ScrollProgress.jsx scroll indicator
    Navbar.jsx         floating nav + mobile 3-dot
    Hero.jsx           home + typing effect
    About.jsx
    Education.jsx
    Experience.jsx     animated timeline
    Skills.jsx
    Contact.jsx        call + email (no form)
    Resume.jsx         download button
    Footer.jsx
    Section.jsx        shared wrappers
```

Powered by Codyza.com
