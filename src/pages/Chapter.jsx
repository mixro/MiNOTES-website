import { Check, CheckCircle2, ChevronLeft, ChevronRight, Circle } from 'lucide-react';
import { useEffect, useMemo, useRef } from 'react';
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
  const listRef = useRef(null);
  // On phones the chapter list is a horizontal strip: keep the current chapter in view.
  useEffect(() => {
    const list = listRef.current;
    const on = list && list.querySelector('a.on');
    if (on && list.scrollWidth > list.clientWidth) {
      list.scrollTo({ left: on.offsetLeft - (list.clientWidth - on.offsetWidth) / 2, behavior: 'smooth' });
    }
  }, [i]);
  if (i < 0) return <NotFound />;

  const c = m.chapters[i];
  const prev = m.chapters[i - 1];
  const next = m.chapters[i + 1];
  const key = `${m.id}/${c.id}`;
  const done = !!state.done[key];

  return (
    <div className="wrap reader">
      <aside className="toc" aria-label="Chapters">
        <div className="crumbs" style={{ marginBottom: 14 }}><Link className="back" to={`/m/${m.id}`}><ChevronLeft size={16} strokeWidth={2.4} />{m.title}</Link></div>
        <h4>Chapters</h4>
        <div className="toc-list" ref={listRef}>
          {m.chapters.map((x) => (
            <Link key={x.id} to={`/m/${m.id}/notes/${x.id}`} className={x.id === c.id ? 'on' : undefined}>
              {x.title}{state.done[`${m.id}/${x.id}`] && <Check className="tick" size={14} strokeWidth={3} />}
            </Link>
          ))}
        </div>
      </aside>
      <article>
        <Md className="prose" src={text} />
        <div className="reader-foot">
          {prev ? <Link className="btn secondary small" to={`/m/${m.id}/notes/${prev.id}`}><ChevronLeft size={16} />{prev.title}</Link> : <span />}
          <button className={`btn small ${done ? 'done' : ''}`} onClick={() => toggleDone(key)}>{done ? <><CheckCircle2 size={17} />Done</> : <><Circle size={17} />Mark as done</>}</button>
          {next
            ? <Link className="btn secondary small" to={`/m/${m.id}/notes/${next.id}`}>{next.title}<ChevronRight size={16} /></Link>
            : <Link className="btn secondary small" to={`/m/${m.id}/quiz`}>Take the quiz<ChevronRight size={16} /></Link>}
        </div>
      </article>
    </div>
  );
}
