import { BookOpen, FileText, Layers, ListChecks, Sigma } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getModule } from '../lib/content';
import { Glyph, Pill } from '../components/ui';
import NotFound from './NotFound';
import NotesList from './tabs/NotesList';
import QuizIntro from './tabs/QuizIntro';
import Flashcards from './tabs/Flashcards';
import Formulas from './tabs/Formulas';
import Papers from './tabs/Papers';

const TABS = [
  ['notes', 'Notes', NotesList, BookOpen],
  ['quiz', 'Quizzes', QuizIntro, ListChecks],
  ['flashcards', 'Flashcards', Flashcards, Layers],
  ['formulas', 'Formula sheet', Formulas, Sigma],
  ['papers', 'Past papers', Papers, FileText],
];

export default function ModulePage() {
  const { id, tab = 'notes' } = useParams();
  const m = getModule(id);
  const seg = useRef(null);
  useEffect(() => {
    const on = seg.current?.querySelector('.on');
    if (on) seg.current.scrollLeft = on.offsetLeft - 12;
  }, [tab]);
  const current = TABS.find(([k]) => k === tab);
  if (!m || !current) return <NotFound />;
  const Body = current[2];

  return (
    <>
      <section className="wrap mod-hero">
        <div className="crumbs"><Link to="/modules">Modules</Link> › {m.code}</div>
        <div className="mod-head">
          <Glyph m={m} />
          <div>
            <div className="meta"><span>{m.code}</span><span>{m.credits} credits</span><Pill category={m.category} /></div>
            <h1 className="title-1" style={{ marginTop: 4 }}>{m.title}</h1>
          </div>
        </div>
        <nav className="segmented" aria-label="Sections" ref={seg}>
          {TABS.map(([k, label, , Icon]) => (
            <Link key={k} to={`/m/${m.id}/${k}`} className={k === tab ? 'on' : undefined} aria-current={k === tab ? 'page' : undefined}><Icon size={15} strokeWidth={2.2} />{label}</Link>
          ))}
        </nav>
      </section>
      <section className="wrap section" style={{ paddingTop: 16 }}>
        <Body m={m} />
      </section>
    </>
  );
}
