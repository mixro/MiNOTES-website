import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getModule, getQuiz } from '../lib/content';
import { shuffle, useProgress } from '../lib/progress';
import { Bar, Empty, Md } from '../components/ui';
import NotFound from './NotFound';

const LETTERS = 'ABCDEF';

export function isRight(q, a) {
  if (a == null || a === '') return false;
  if (q.type === 'short') {
    if (typeof q.answer === 'number') {
      const n = parseFloat(String(a).replace(',', '.'));
      return Number.isFinite(n) && Math.abs(n - q.answer) <= Math.abs(q.answer) * (q.tolerance ?? 0.02) + 1e-9;
    }
    return String(a).trim().toLowerCase() === String(q.answer).trim().toLowerCase();
  }
  return a === q.answer;
}

export default function QuizRunner() {
  const { id, mode: rawMode } = useParams();
  const m = getModule(id);
  const quiz = m && getQuiz(m);
  const mode = rawMode === 'exam' ? 'exam' : 'practice';
  const [attempt, setAttempt] = useState(0);
  if (!m) return <NotFound />;
  if (!quiz?.questions?.length) return <section className="wrap section"><Empty title="No quiz yet">Add a quiz.json file for this module.</Empty></section>;
  // A new key restarts the run (on "Try again" or when switching mode)
  return <div className="wrap"><Run key={`${mode}-${attempt}`} m={m} quiz={quiz} mode={mode} restart={() => setAttempt((x) => x + 1)} /></div>;
}

function Run({ m, quiz, mode, restart }) {
  const { recordQuiz, state } = useProgress();
  const [qs] = useState(() => (mode === 'exam' ? shuffle(quiz.questions) : quiz.questions));
  const [at, setAt] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [checked, setChecked] = useState(false);
  const [finished, setFinished] = useState(null);
  const [ends] = useState(() => (mode === 'exam' ? Date.now() + (quiz.timeLimit || 600) * 1000 : 0));
  const [now, setNow] = useState(Date.now());
  const input = useRef(null);

  const finish = () => {
    if (finished) return;
    const right = qs.filter((q, i) => isRight(q, answers[i])).length;
    const score = Math.round((100 * right) / qs.length);
    const missed = qs.filter((q, i) => !isRight(q, answers[i]) && q.topic).map((q) => q.topic);
    recordQuiz(m.id, score, missed);
    setFinished({ right, score });
  };

  useEffect(() => {
    if (!ends || finished) return undefined;
    const t = setInterval(() => setNow(Date.now()), 500);
    return () => clearInterval(t);
  }, [ends, finished]);
  const left = ends ? Math.max(0, Math.round((ends - now) / 1000)) : 0;
  useEffect(() => { if (ends && left === 0) finish(); });
  useEffect(() => { if (!checked) input.current?.focus({ preventScroll: true }); }, [at, checked]);

  if (finished) return <Result m={m} qs={qs} answers={answers} mode={mode} {...finished} best={state.quiz[m.id]?.best ?? finished.score} restart={restart} />;

  const q = qs[at];
  const a = answers[at];
  const showFb = mode === 'practice' && checked;
  const ok = isRight(q, a);
  const last = at === qs.length - 1;
  const setAnswer = (v) => setAnswers((xs) => { const c = xs.slice(); c[at] = v; return c; });
  const next = () => { if (last) finish(); else { setAt(at + 1); setChecked(false); } };
  const primary = () => (mode === 'practice' && !checked ? setChecked(true) : next());
  const empty = a == null || a === '';

  return (
    <div className="quiz">
      <div className="quiz-top">
        <Link to={`/m/${m.id}/quiz`}>‹ {mode === 'exam' ? 'Exam' : 'Practice'}</Link>
        <Bar value={Math.round((100 * at) / qs.length)} />
        <span>{at + 1} / {qs.length}</span>
        {ends > 0 && <span className={`timer ${left < 60 ? 'low' : ''}`}>{Math.floor(left / 60)}:{String(left % 60).padStart(2, '0')}</span>}
      </div>
      <div className="q-card view" key={at}>
        <div className="q-topic">{q.topic || m.title}</div>
        <Md as="p" className="q-text" src={q.q} inline />
        {q.type === 'short' ? (
          <form className="short" onSubmit={(e) => { e.preventDefault(); if (!empty) primary(); }}>
            <input ref={input} inputMode="decimal" autoComplete="off" placeholder="Your answer" aria-label="Your answer"
              value={a ?? ''} disabled={showFb} onChange={(e) => setAnswer(e.target.value)} />
            {q.unit && <Md className="unit" src={q.unit} inline />}
          </form>
        ) : (
          <div className="options">
            {q.options.map((o, k) => {
              let cls = a === k ? 'picked' : '';
              if (showFb) cls = k === q.answer ? 'right' : a === k ? 'wrong' : '';
              return (
                <button key={k} className={`opt ${cls}`} disabled={showFb} onClick={() => setAnswer(k)}>
                  <span className="key">{LETTERS[k]}</span><Md src={o} inline />
                </button>
              );
            })}
          </div>
        )}
        {showFb && (
          <div className="explain">
            <b className={ok ? 'ok' : 'no'}>{ok ? 'Correct.' : 'Not quite.'}</b>{' '}
            {q.type === 'short' && !ok && <>Answer: {String(q.answer)}{q.unit && <> <Md src={q.unit} inline /></>}. </>}
            <Md src={q.explain || ''} inline />
          </div>
        )}
        <div className="q-actions">
          {mode === 'exam' && at > 0 && <button className="btn secondary" onClick={() => setAt(at - 1)}>Back</button>}
          <button className="btn" disabled={mode === 'practice' && !checked && empty} onClick={primary}>
            {mode === 'practice' && !checked ? 'Check' : last ? 'See results' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}

function Result({ m, qs, answers, mode, right, score, best, restart }) {
  const C = 2 * Math.PI * 76;
  const color = score >= 70 ? 'var(--green)' : score >= 50 ? 'var(--amber)' : 'var(--red)';
  return (
    <div className="quiz">
      <div className="q-card result view">
        <svg className="ring" viewBox="0 0 180 180" aria-hidden="true">
          <circle cx="90" cy="90" r="76" fill="none" stroke="var(--bg-sunken)" strokeWidth="14" />
          <circle cx="90" cy="90" r="76" fill="none" stroke={color} strokeWidth="14" strokeLinecap="round"
            strokeDasharray={C} strokeDashoffset={C * (1 - score / 100)} transform="rotate(-90 90 90)" style={{ transition: 'stroke-dashoffset 1s' }} />
          <text x="90" y="104" textAnchor="middle" className="ring-num" fill="currentColor">{score}%</text>
        </svg>
        <h2 className="title-2" style={{ marginBottom: 6 }}>{score >= 70 ? 'Great work.' : score >= 50 ? 'Getting there.' : 'Keep practising.'}</h2>
        <p className="muted" style={{ margin: 0 }}>{right} of {qs.length} correct · Best {best}%</p>
        <div className="q-actions" style={{ justifyContent: 'center' }}>
          <Link className="btn secondary" to={`/m/${m.id}/notes`}>Review notes</Link>
          <button className="btn" onClick={restart}>Try again</button>
        </div>
        {mode === 'exam' && (
          <div className="review">
            <p className="group-label">Answers</p>
            <div className="group">
              {qs.map((q, i) => {
                const ok = isRight(q, answers[i]);
                const correct = q.type === 'short' ? `${q.answer}${q.unit ? ' ' + q.unit : ''}` : q.options[q.answer];
                return (
                  <div className="row" key={i} style={{ alignItems: 'flex-start' }}>
                    <span className={`num ${ok ? 'done' : ''}`} style={ok ? undefined : { background: 'var(--red)', color: '#fff' }}>{ok ? '✓' : '✕'}</span>
                    <span className="grow">
                      <Md as="b" style={{ fontWeight: 500 }} src={q.q} inline />
                      <div className="sub">Answer: <Md src={correct} inline />. <Md src={q.explain || ''} inline /></div>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
