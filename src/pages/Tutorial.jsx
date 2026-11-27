import { ChevronDown, ChevronLeft, ChevronRight, Eye, EyeOff } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getModule, getTutorialText, parseTutorial } from '../lib/content';
import { Md } from '../components/ui';
import NotFound from './NotFound';

function Question({ item, open, onToggle }) {
  return (
    <section className="tq">
      <div className="tq-head"><span className="tq-num">{item.label}</span></div>
      <Md className="prose tq-q" src={item.q} />
      {item.a && (
        <>
          <button className={`tq-toggle ${open ? 'on' : ''}`} onClick={onToggle} aria-expanded={open}>
            {open ? 'Hide answer' : 'Show answer'}<ChevronDown size={16} strokeWidth={2.4} />
          </button>
          {open && <Md className="prose tq-a" src={item.a} />}
        </>
      )}
    </section>
  );
}

export default function Tutorial() {
  const { id, tut } = useParams();
  const m = getModule(id);
  const i = m?.tutorials ? m.tutorials.findIndex((t) => t.id === tut) : -1;
  const data = useMemo(() => (i >= 0 ? parseTutorial(getTutorialText(m, m.tutorials[i])) : null), [m, i]);
  const [open, setOpen] = useState({});
  if (!data) return <NotFound />;
  const t = m.tutorials[i];
  const prev = m.tutorials[i - 1];
  const next = m.tutorials[i + 1];
  const all = data.questions.length > 0 && data.questions.every((_, k) => open[k]);
  const setAll = (v) => setOpen(v ? Object.fromEntries(data.questions.map((_, k) => [k, true])) : {});

  return (
    <div className="wrap tut">
      <div className="crumbs" style={{ marginBottom: 14 }}><Link className="back" to={`/m/${m.id}/tutorials`}><ChevronLeft size={16} strokeWidth={2.4} />{m.title} tutorials</Link></div>
      <h1 className="title-1">{t.title}</h1>
      {data.intro && <Md className="prose tut-intro" src={data.intro} />}
      <div className="tut-bar">
        <span>{data.questions.length} questions</span>
        <button className="btn secondary small" onClick={() => setAll(!all)}>{all ? <><EyeOff size={16} />Hide all answers</> : <><Eye size={16} />Show all answers</>}</button>
      </div>
      <div className="tq-list">
        {data.questions.map((q, k) => (
          <Question key={k} item={q} open={!!open[k]} onToggle={() => setOpen((o) => ({ ...o, [k]: !o[k] }))} />
        ))}
      </div>
      <div className="reader-foot">
        {prev ? <Link className="btn secondary small" to={`/m/${m.id}/tutorials/${prev.id}`}><ChevronLeft size={16} />{prev.title}</Link> : <span />}
        {next ? <Link className="btn secondary small" to={`/m/${m.id}/tutorials/${next.id}`}>{next.title}<ChevronRight size={16} /></Link> : <Link className="btn secondary small" to={`/m/${m.id}/quiz`}>Take the quiz<ChevronRight size={16} /></Link>}
      </div>
    </div>
  );
}
