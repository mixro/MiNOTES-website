import { createContext, useCallback, useContext, useEffect, useState } from 'react';

// Progress is kept in localStorage, so it stays on the device being used.
const KEY = 'minotes-progress-v1';
const blank = () => ({ done: {}, quiz: {} });
const Ctx = createContext(null);

function read() {
  try { return { ...blank(), ...JSON.parse(localStorage.getItem(KEY) || '{}') }; }
  catch { return blank(); }
}

export function ProgressProvider({ children }) {
  const [state, setState] = useState(read);
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* private mode */ } }, [state]);

  const toggleDone = useCallback((key) => setState((s) => {
    const done = { ...s.done };
    if (done[key]) delete done[key]; else done[key] = true;
    return { ...s, done };
  }), []);

  const recordQuiz = useCallback((id, score, missedTopics) => setState((s) => {
    const prev = s.quiz[id] || { best: 0, attempts: 0, wrong: {} };
    const wrong = { ...prev.wrong };
    missedTopics.forEach((t) => { wrong[t] = (wrong[t] || 0) + 1; });
    return { ...s, quiz: { ...s.quiz, [id]: { best: Math.max(prev.best, score), last: score, attempts: prev.attempts + 1, at: Date.now(), wrong } } };
  }), []);

  const reset = useCallback(() => setState(blank()), []);

  return <Ctx.Provider value={{ state, toggleDone, recordQuiz, reset }}>{children}</Ctx.Provider>;
}

export const useProgress = () => useContext(Ctx);

export const doneCount = (state, m) => m.chapters.filter((c) => state.done[`${m.id}/${c.id}`]).length;
export const percent = (state, m) => (m.chapters.length ? Math.round((100 * doneCount(state, m)) / m.chapters.length) : 0);
export const weakTopics = (q) => Object.entries(q?.wrong || {}).sort((a, b) => b[1] - a[1]).map(([t]) => t);
export const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
