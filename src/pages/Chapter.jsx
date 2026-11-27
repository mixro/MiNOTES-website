import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getModule, getNotes } from '../lib/content';
import { useProgress } from '../lib/progress';
import { Md } from '../components/ui';
import NotFound from './NotFound';

export default function Chapter() {
  const { id, chapter } = useParams();
  const { state, toggleDone } = useProgress();
  const m = getModule(id);
  const i = m ? m.chapters.findIndex((c) => c.id === chapter) : -1;
  const text = useMemo(() => (i >= 0 ? getNotes(m, m.chapters[i]) : ''), [m, i]);
  if (i < 0) return <NotFound />;

  const c = m.chapters[i];
  const prev = m.chapters[i - 1];
  const next = m.chapters[i + 1];
  const key = `${m.id}/${c.id}`;
  const done = !!state.done[key];

  return (
    <div className="wrap reader">
      <aside className="toc" aria-label="Chapters">
        <div className="crumbs" style={{ marginBottom: 14 }}><Link to={`/m/${m.id}`}>‹ {m.title}</Link></div>
        <h4>Chapters</h4>
        <div className="toc-list">
          {m.chapters.map((x) => (
            <Link key={x.id} to={`/m/${m.id}/notes/${x.id}`} className={x.id === c.id ? 'on' : undefined}>
              {x.title}{state.done[`${m.id}/${x.id}`] && <span className="tick">✓</span>}
            </Link>
          ))}
        </div>
      </aside>
      <article>
        <Md className="prose" src={text} />
        <div className="reader-foot">
          {prev ? <Link className="btn secondary small" to={`/m/${m.id}/notes/${prev.id}`}>‹ {prev.title}</Link> : <span />}
          <button className={`btn small ${done ? 'done' : ''}`} onClick={() => toggleDone(key)}>{done ? '✓ Done' : 'Mark as done'}</button>
          {next
            ? <Link className="btn secondary small" to={`/m/${m.id}/notes/${next.id}`}>{next.title} ›</Link>
            : <Link className="btn secondary small" to={`/m/${m.id}/quiz`}>Take the quiz ›</Link>}
        </div>
      </article>
    </div>
  );
}
