# MiNOTES

Notes, quizzes, flashcards and formula sheets for every module of the Electrical Engineering semester, in one clean, Apple-style website.

**Modules**

| Code | Module | Category | Credits |
|---|---|---|---|
| CSEU 08104 | Real Time System Design | Elective | 6 |
| EEU 08101 | Control Engineering Digital Analysis | Core | 6 |
| EEU 08102 | Electric Drives | Core | 12 |
| EEU 08104 | Power Electronics Design | Core | 9 |
| EEU 08106 | Engineering Project Management | Fundamental | 6 |

## Features

- **Landing page** with real screenshots of the app, plus the MiNOTES app icon (default, dark and tinted versions)
- Professional [Lucide](https://lucide.dev) icons throughout (ISC licence)
- **Notes reader** with chapters, maths (KaTeX), tables and a "Mark as done" button
- **Quizzes** in two modes: Practice (instant feedback and explanations) and Exam (shuffled and timed)
- **Flashcards** that flip, with shuffle and keyboard controls
- **Formula sheets** you can print
- **Search** across every module's notes
- **Progress** page with chapters done, best quiz scores and topics to revise
- Light and dark mode, mobile tab bar, print-friendly notes
- Built with **Vite + React**; all content is plain Markdown and JSON files

Progress is stored in the browser (localStorage), so it stays on the device you use.

## Run it locally

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev        # starts the site at http://localhost:5173 and reloads as you edit
npm run build      # makes the production site in dist/
npm run preview    # serves dist/ to check the build
```

## Publish it free on GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds the site and publishes it every time you push to `main`.

1. On GitHub open **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (or run the workflow from the **Actions** tab). The site appears at `https://mixro.github.io/minotes-website/`.

## Adding your own notes

All content lives in `src/content/` and is bundled into the site when it builds. The starter notes are examples; replace them with your own.

```
src/content/
  modules.json            ← list of modules and their chapters
  ed/                     ← one folder per module
    notes/01-drive-dynamics.md
    quiz.json
    flashcards.json
    formulas.json
```

### Add or edit a chapter

1. Write the chapter in Markdown, for example `src/content/ed/notes/04-synchronous-drives.md`.
2. Add it to that module's `chapters` list in `src/content/modules.json`:

```json
{ "id": "04-synchronous-drives", "title": "Synchronous motor drives", "summary": "Load angle and control", "file": "notes/04-synchronous-drives.md" }
```

Maths uses LaTeX: `$V = IR$` inline, or `$$T = K\phi I_a$$` on its own line. Images go in `public/images/` and are linked with `![caption](images/figure.png)`.

### Quiz questions (`quiz.json`)

```json
{
  "timeLimit": 600,
  "questions": [
    { "type": "mcq", "topic": "Slip", "q": "Question text", "options": ["A", "B", "C", "D"], "answer": 1, "explain": "Why B is right." },
    { "type": "short", "topic": "Slip", "q": "Numeric question", "answer": 0.04, "tolerance": 0.01, "unit": "rpm", "explain": "Worked answer." }
  ]
}
```

- `answer` for `mcq` is the index of the correct option, counting from 0.
- `tolerance` for numeric answers is relative (0.01 = within 1%).
- `topic` is used on the Progress page to show what to revise.
- `timeLimit` is in seconds and is used in Exam mode.

In JSON files, write each LaTeX backslash twice: `"$\\frac{a}{b}$"`.

### Flashcards (`flashcards.json`)

```json
[ { "front": "Synchronous speed", "back": "$n_s = \\frac{120f}{P}$" } ]
```

### Formula sheet (`formulas.json`)

```json
[ { "title": "Slip", "tex": "s = \\frac{n_s - n_r}{n_s}", "note": "Optional note" } ]
```

### Past papers

Put PDFs in `public/papers/<module id>/` (for example `public/papers/ed/`) and list them in `src/content/modules.json`:

```json
"papers": [ { "title": "Final exam 2024", "year": "2024", "file": "final-2024.pdf" } ]
```

## Project structure

```
index.html                    page shell
vite.config.js                Vite config (relative base path for GitHub Pages)
src/main.jsx                  app entry and routes
src/styles.css                design system: colours, type, components, dark mode
src/components/               layout (nav bar, tab bar, footer) and small UI pieces
src/pages/                    Landing, Modules, module tabs, chapter reader, quiz, search, progress
src/lib/content.js            loads modules, notes, quizzes, flashcards, formulas
src/lib/markdown.js           Markdown + KaTeX rendering
src/lib/progress.jsx          progress saved in the browser
src/content/                  all module content
public/                       app icons, screenshots (images/), past papers
.github/workflows/deploy.yml  builds and publishes to GitHub Pages
```
