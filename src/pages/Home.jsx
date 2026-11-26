import { Link } from 'react-router-dom';
import { modules } from '../lib/content';
import { doneCount, percent, useProgress } from '../lib/progress';
import { Bar, Glyph, Pill } from '../components/ui';

export default function Home() {
  const { state } = useProgress();
  const credits = modules.reduce((a, m) => a + m.credits, 0);
  const chapters = modules.reduce((a, m) => a + m.chapters.length, 0);
  const done = modules.reduce((a, m) => a + doneCount(state, m), 0);
  const overall = chapters ? Math.round((100 * done) / chapters) : 0;

  return (
    <>
      <section className="hero wrap">
        <img className="hero-mark" src={`${import.meta.env.BASE_URL}icon.svg`} alt="" />
        <h1 className="display">Every module.<br />One place.</h1>
        <p className="lead">Notes, quizzes, flashcards and formula sheets for your Electrical Engineering semester.</p>
        <div className="hero-stats">
          <div className="stat"><b>{modules.length}</b><span>Modules</span></div>
          <div className="stat"><b>{credits}</b><span>Credits</span></div>
          <div className="stat"><b>{chapters}</b><span>Chapters</span></div>
          <div className="stat"><b>{overall}%</b><span>Completed</span></div>
        </div>
      </section>
      <section className="wrap section" aria-label="Modules">
        <h2 className="title-2">Your modules</h2>
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
    </>
  );
}
