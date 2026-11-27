import { BookOpen, ListChecks, RotateCcw, Target, Trophy } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { modules } from '../lib/content';
import { doneCount, percent, useProgress } from '../lib/progress';
import { Bar, Chevron, Empty, Glyph } from '../components/ui';

export default function Dashboard() {
  const { state, reset } = useProgress();
  const [confirm, setConfirm] = useState(false);
  const total = modules.reduce((a, m) => a + m.chapters.length, 0);
  const done = modules.reduce((a, m) => a + doneCount(state, m), 0);
  const taken = modules.filter((m) => state.quiz[m.id]);
  const avg = taken.length ? Math.round(taken.reduce((a, m) => a + state.quiz[m.id].best, 0) / taken.length) : 0;
  const weak = modules.flatMap((m) => Object.entries(state.quiz[m.id]?.wrong || {}).map(([t, n]) => ({ m, t, n }))).sort((a, b) => b.n - a.n);

  return (
    <section className="wrap section">
      <h1 className="title-1" style={{ marginBottom: 24 }}>Progress</h1>
      <div className="kpis">
        <div className="kpi"><span className="feat-ico" style={{ "--c": "#ff9500" }}><BookOpen size={20} /></span><b>{done}/{total}</b><span>Chapters done</span></div>
        <div className="kpi"><span className="feat-ico" style={{ "--c": "#0071e3" }}><ListChecks size={20} /></span><b>{taken.length}/{modules.length}</b><span>Modules quizzed</span></div>
        <div className="kpi"><span className="feat-ico" style={{ "--c": "#34c759" }}><Trophy size={20} /></span><b>{taken.length ? `${avg}%` : '–'}</b><span>Average best score</span></div>
      </div>

      <p className="group-label">By module</p>
      <div className="group bars">
        {modules.map((m) => {
          const s = state.quiz[m.id];
          const p = percent(state, m);
          return (
            <Link key={m.id} className="row" to={`/m/${m.id}`}>
              <Glyph m={m} />
              <span className="grow" style={{ flex: '1 1 180px' }}><b style={{ fontWeight: 500 }}>{m.title}</b><div className="sub">{m.code}</div></span>
              <span className="bar-line">Notes <Bar value={p} /><span>{p}%</span></span>
              <span className="bar-line">Quiz <Bar value={s ? s.best : 0} /><span>{s ? `${s.best}%` : '–'}</span></span>
            </Link>
          );
        })}
      </div>

      <p className="group-label">Topics to revise</p>
      <div className="group">
        {weak.length ? weak.slice(0, 8).map((w) => (
          <Link key={`${w.m.id}/${w.t}`} className="row" to={`/m/${w.m.id}/notes`}>
            <span className="row-ico" style={{ color: 'var(--red)' }}><Target size={18} /></span><span className="grow"><b style={{ fontWeight: 500 }}>{w.t}</b><div className="sub">{w.m.title}</div></span>
            <span className="pill">{w.n} missed</span><Chevron />
          </Link>
        )) : <Empty title="Nothing to revise yet">Topics you miss in quizzes will show up here.</Empty>}
      </div>

      {(done > 0 || taken.length > 0) && (
        <p style={{ marginTop: 24 }}>
          <button className={`btn small ${confirm ? '' : 'secondary'}`} style={confirm ? { background: 'var(--red)' } : undefined}
            onClick={() => { if (confirm) { reset(); setConfirm(false); } else setConfirm(true); }}>
            <RotateCcw size={15} />{confirm ? 'Tap again to erase all progress' : 'Reset progress'}
          </button>
        </p>
      )}
    </section>
  );
}
