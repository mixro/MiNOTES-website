// All study content lives in src/content and is bundled at build time.
// Add a module or chapter by editing src/content/modules.json and dropping files
// into that module's folder (see README.md).
import manifest from '../content/modules.json';

const notes = import.meta.glob('../content/*/notes/*.md', { query: '?raw', import: 'default', eager: true });
const data = import.meta.glob('../content/*/*.json', { import: 'default', eager: true });

const file = (m, name) => `../content/${m.id}/${name}`;

export const modules = manifest.modules;
export const getModule = (id) => modules.find((m) => m.id === id);

export const getNotes = (m, c) =>
  notes[file(m, c.file)] ?? `# ${c.title}\n\nThis chapter's notes have not been added yet.`;
export const getQuiz = (m) => (m.quiz ? data[file(m, m.quiz)] : null);
export const getFlashcards = (m) => (m.flashcards ? data[file(m, m.flashcards)] : null) || [];
export const getFormulas = (m) => (m.formulas ? data[file(m, m.formulas)] : null) || [];

// Past papers are static files in public/papers/<module id>/
export const paperUrl = (m, p) => `${import.meta.env.BASE_URL}papers/${m.id}/${p.file}`;
