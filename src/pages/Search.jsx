import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getNotes, modules } from '../lib/content';
import { plain } from '../lib/markdown';
import { Chevron, Empty, Glyph, SearchIcon } from '../components/ui';

// Built once: every chapter of every module as plain text
const INDEX = modules.flatMap((m) => m.chapters.map((c) => ({ m, c, text: plain(getNotes(m, c)) })));
const reEsc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function Highlight({ text, words }) {
  if (!words.length) return text;
  const parts = text.split(new RegExp(`(${words.map(reEsc).join('|')})`, 'gi'));
  return parts.map((p, i) => (i % 2 ? <mark key={i}>{p}</mark> : p));
}

export default function Search() {
  const [params, setParams] = useSearchParams();
  const q = params.get('q') || '';
  const words = q.trim().toLowerCase().split(/\s+/).filter(Boolean);

  const hits = useMemo(() => {
    if (q.trim().length < 2) return null;
    return INDEX.map((it) => {
      const hay = `${it.c.title} ${it.m.title} ${it.m.code} ${it.text}`.toLowerCase();
      if (!words.every((w) => hay.includes(w))) return null;
      const pos = it.text.toLowerCase().indexOf(words[0]);
      const start = Math.max(0, pos - 60);
      const snip = pos >= 0 ? `${start ? '…' : ''}${it.text.slice(start, pos + 120)}…` : it.c.summary || '';
      return { it, snip, score: it.c.title.toLowerCase().includes(words[0]) ? 2 : 1 };
    }).filter(Boolean).sort((a, b) => b.score - a.score);
  }, [q]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="wrap section">
      <h1 className="title-1">Search</h1>
      <form className="search-box" role="search" onSubmit={(e) => e.preventDefault()}>
        <SearchIcon size={20} />
        <input type="search" autoFocus autoComplete="off" aria-label="Search all notes"
          placeholder="Search all notes, e.g. PWM, Laplace, critical path"
          value={q} onChange={(e) => setParams(e.target.value ? { q: e.target.value } : {}, { replace: true })} />
      </form>
      {!hits && <p className="group-label">Try a topic, a formula name or a module code.</p>}
      {hits && !hits.length && <Empty title="No results">Nothing matches “{q}”.</Empty>}
      {hits?.length > 0 && (
        <>
          <p className="group-label">{hits.length} result{hits.length === 1 ? '' : 's'}</p>
          <div className="group">
            {hits.map(({ it, snip }) => (
              <Link key={`${it.m.id}/${it.c.id}`} className="row hit" to={`/m/${it.m.id}/notes/${it.c.id}`}>
                <Glyph m={it.m} />
                <span className="grow">
                  <b style={{ fontWeight: 500 }}>{it.c.title}</b> <span className="sub">· {it.m.title}</span>
                  <div className="snippet"><Highlight text={snip} words={words} /></div>
                </span>
                <Chevron />
              </Link>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
