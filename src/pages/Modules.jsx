import { Link } from 'react-router-dom';
import { modules } from '../lib/content';
import { doneCount, percent, useProgress } from '../lib/progress';
import { Bar, Glyph, Pill } from '../components/ui';

export default function Modules() {
  const { state } = useProgress();
  const credits = modules.reduce((a, m) => a + m.credits, 0);
  const chapters = modules.reduce((a, m) => a + m.chapters.length, 0);
  const done = modules.reduce((a, m) => a + doneCount(state, m), 0);
  const overall = chapters ? Math.round((100 * done) / chapters) : 0;

  return (
    <section className="wrap section">
      <div className="page-head">
        <div>
          <h1 className="title-1">Modules</h1>
          <p className="page-sub">Semester one · {modules.length} modules · {credits} credits</p>
        </div>
        <div className="ring-mini" aria-label={`${overall}% of chapters completed`}>
          <svg viewBox="0 0 44 44" aria-hidden="true">
            <circle cx="22" cy="22" r="18" fill="none" stroke="var(--bg-sunken)" strokeWidth="5" />
            <circle cx="22" cy="22" r="18" fill="none" stroke="var(--amber)" strokeWidth="5" strokeLinecap="round"
              strokeDasharray={113.1} strokeDashoffset={113.1 * (1 - overall / 100)} transform="rotate(-90 22 22)" />
          </svg>
          <span><b>{overall}%</b> of {chapters} chapters done</span>
        </div>
      </div>
      <div className="grid">
        {modules.map((m) => {
          const p = percent(state, m);
          return (
            <Link key={m.id} className="card" to={`/m/${m.id}`}>
              <div className="card-top"><Glyph m={m} /><Pill category={m.category} /></div>
              <div>
                <div className="meta"><span>{m.code}</span><span>{m.credits} credits</span></div>
                <h3 className="title-3" style={{ marginTop: 4 }}>{m.title}</h3>
              </div>
              <p>{m.summary}</p>
              <div className="progress-row"><Bar value={p} /><span>{p}%</span></div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
