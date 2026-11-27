import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { doneCount, percent, useProgress } from '../../lib/progress';
import { Bar, Chevron } from '../../components/ui';

export default function NotesList({ m }) {
  const { state } = useProgress();
  return (
    <>
      <div className="progress-row" style={{ maxWidth: 420, marginBottom: 8 }}>
        <Bar value={percent(state, m)} />
        <span>{doneCount(state, m)} of {m.chapters.length} chapters done</span>
      </div>
      <p className="group-label">Chapters</p>
      <div className="group">
        {m.chapters.map((c, i) => {
          const done = state.done[`${m.id}/${c.id}`];
          return (
            <Link key={c.id} className="row" to={`/m/${m.id}/notes/${c.id}`}>
              <span className={`num ${done ? 'done' : ''}`}>{done ? <Check size={16} strokeWidth={3} /> : i + 1}</span>
              <span className="grow"><b style={{ fontWeight: 500 }}>{c.title}</b><div className="sub">{c.summary}</div></span>
              <Chevron />
            </Link>
          );
        })}
      </div>
    </>
  );
}
