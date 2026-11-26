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

- **Notes reader** with chapters, maths (KaTeX), tables and a "Mark as done" button
- **Quizzes** in two modes: Practice (instant feedback and explanations) and Exam (shuffled and timed)
- **Flashcards** that flip, with shuffle and keyboard controls
- **Formula sheets** you can print
- **Search** across every module's notes
- **Progress** page with chapters done, best quiz scores and topics to revise
- Light and dark mode, mobile tab bar, print-friendly notes
- No build step: plain HTML, CSS and JavaScript

Progress is stored in the browser (localStorage), so it stays on the device you use.

## Run it locally

The site loads its content with `fetch`, so open it through a small web server rather than double-clicking `index.html`:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Publish it free on GitHub Pages

1. On GitHub open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. Save. The site appears at `https://mixro.github.io/MiNOTES-website/` after a minute.

## Adding your own notes

All content lives in `content/`. The starter notes are examples; replace them with your own.

```
content/
  modules.json            ← list of modules and their chapters
  ed/                     ← one folder per module
    notes/01-drive-dynamics.md
    quiz.json
    flashcards.json
    formulas.json
    papers/               ← (optional) past paper PDFs
```

### Add or edit a chapter

1. Write the chapter in Markdown, for example `content/ed/notes/04-synchronous-drives.md`.
2. Add it to that module's `chapters` list in `content/modules.json`:

```json
{ "id": "04-synchronous-drives", "title": "Synchronous motor drives", "summary": "Load angle and control", "file": "notes/04-synchronous-drives.md" }
```

Maths uses LaTeX: `$V = IR$` inline, or `$$T = K\phi I_a$$` on its own line. Images can go in the module folder and be linked with `![caption](content/ed/images/figure.png)`.

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

Put PDFs in `content/<module>/papers/` and list them in `modules.json`:

```json
"papers": [ { "title": "Final exam 2024", "year": "2024", "file": "papers/final-2024.pdf" } ]
```

## Project structure

```
index.html              page shell, navigation
assets/css/styles.css   design system (colours, type, components, dark mode)
assets/js/app.js        router, notes reader, quizzes, flashcards, search, progress
assets/img/             MiNOTES logo and icon
content/                all module content
```
