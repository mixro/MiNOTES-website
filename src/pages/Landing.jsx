import { Link } from 'react-router-dom';
import {
  ArrowRight, BookOpen, ChartColumn, Layers, ListChecks, MonitorSmartphone, Moon, Printer, Search, Sigma, Timer,
} from 'lucide-react';
import { getQuiz, getFlashcards, modules } from '../lib/content';
import { Glyph } from '../components/ui';

const BASE = import.meta.env.BASE_URL;
const img = (name) => `${BASE}images/${name}`;

const credits = modules.reduce((a, m) => a + m.credits, 0);
const chapters = modules.reduce((a, m) => a + m.chapters.length, 0);
const questions = modules.reduce((a, m) => a + (getQuiz(m)?.questions.length || 0), 0);
const cards = modules.reduce((a, m) => a + getFlashcards(m).length, 0);

const FEATURES = [
  {
    icon: BookOpen, color: '#ff9500', kicker: 'Notes',
    title: 'Notes that read like a good textbook.',
    text: 'Every chapter is laid out for focus, with real equations, clean tables and worked examples. Mark a chapter done and watch the module fill up.',
    shot: 'shot-notes.jpg', alt: 'A chapter on DC motor drives with equations and a braking table',
  },
  {
    icon: ListChecks, color: '#0071e3', kicker: 'Quizzes',
    title: 'Quizzes that teach, not just test.',
    text: 'Practice mode tells you straight away if you are right, and why. Exam mode shuffles the questions and puts you against the clock.',
    shot: 'shot-quiz.jpg', alt: 'A quiz question answered correctly, with its explanation',
  },
  {
    icon: Layers, color: '#af52de', kicker: 'Flashcards',
    title: 'Flip. Recall. Repeat.',
    text: 'Key definitions and formulas on cards you can shuffle and flip with a tap or the keyboard. Ideal for the bus ride before an exam.',
    shot: 'shot-flash.jpg', alt: 'A flashcard showing an answer on a navy card',
  },
  {
    icon: ChartColumn, color: '#34c759', kicker: 'Progress',
    title: 'Know exactly where you stand.',
    text: 'Chapters done, best scores and the topics you keep missing, for every module on one page. Revise what matters, skip what you know.',
    shot: 'shot-progress.jpg', alt: 'The progress page with module bars and topics to revise',
  },
];

const EXTRAS = [
  [Sigma, '#5e5ce6', 'Beautiful maths', 'Equations render like a printed book.'],
  [Timer, '#ff9500', 'Timed exams', 'Rehearse under real exam pressure.'],
  [Search, '#0071e3', 'Search everything', 'Find any topic across all modules.'],
  [Moon, '#1d1d1f', 'Light and dark', 'Easy on the eyes at 2 AM.'],
  [Printer, '#ff375f', 'Print formula sheets', 'One clean page per module.'],
  [MonitorSmartphone, '#34c759', 'Any device', 'Laptop, tablet or phone.'],
];

function Browser({ src, alt }) {
  return (
    <div className="browser">
      <div className="browser-bar"><i /><i /><i /><span>mixro.github.io/minotes-website</span></div>
      <img src={img(src)} alt={alt} loading="lazy" />
    </div>
  );
}

export default function Landing() {
  return (
    <div className="landing">
      <section className="l-hero">
        <div className="l-hero-inner">
          <img className="l-icon" src={`${BASE}icon.svg`} alt="MiNOTES app icon" width="112" height="112" />
          <h1 className="l-title">Your semester.<br />Beautifully organised.</h1>
          <p className="l-lead">Notes, quizzes, flashcards and formula sheets for every Electrical Engineering module, all in one place.</p>
          <div className="l-ctas">
            <Link className="btn large" to="/modules">Start studying<ArrowRight size={18} /></Link>
            <a className="btn large ghost" href="#features">See what&rsquo;s inside</a>
          </div>
          <div className="l-devices">
            <Browser src="hero-desktop.jpg" alt="MiNOTES showing a chapter on DC motor drives" />
            <div className="phone">
              <img src={img('hero-phone.jpg')} alt="MiNOTES modules list on a phone in dark mode" />
            </div>
          </div>
        </div>
      </section>

      <section className="l-stats">
        <div className="wrap l-stats-row">
          <div><b>{modules.length}</b><span>modules</span></div>
          <div><b>{credits}</b><span>credits</span></div>
          <div><b>{chapters}</b><span>chapters</span></div>
          <div><b>{questions}</b><span>quiz questions</span></div>
          <div><b>{cards}</b><span>flashcards</span></div>
        </div>
      </section>

      <div id="features">
        {FEATURES.map((f, i) => (
          <section key={f.kicker} className={`l-feature ${i % 2 ? 'flip' : ''}`}>
            <div className="wrap l-feature-grid">
              <div className="l-copy">
                <span className="feat-ico lg" style={{ '--c': f.color }}><f.icon size={26} /></span>
                <p className="l-kicker" style={{ color: f.color }}>{f.kicker}</p>
                <h2 className="l-h2">{f.title}</h2>
                <p className="l-text">{f.text}</p>
              </div>
              <Browser src={f.shot} alt={f.alt} />
            </div>
          </section>
        ))}
      </div>

      <section className="l-extras">
        <div className="wrap">
          <h2 className="l-h2 center">Thoughtful details, everywhere.</h2>
          <div className="l-extra-grid">
            {EXTRAS.map(([Icon, c, t, d]) => (
              <div className="l-extra" key={t}>
                <span className="feat-ico" style={{ '--c': c }}><Icon size={22} /></span>
                <b>{t}</b>
                <span>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="l-modules">
        <div className="wrap">
          <h2 className="l-h2 center">Five modules. One semester.</h2>
          <p className="l-text center">From real-time scheduling to power converters, each module has its own notes, quiz, flashcards and formula sheet.</p>
          <div className="l-mod-row">
            {modules.map((m) => (
              <Link key={m.id} className="l-mod" to={`/m/${m.id}`}>
                <Glyph m={m} size={64} />
                <b>{m.title}</b>
                <span>{m.code} · {m.credits} credits</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="l-final">
        <div className="wrap center">
          <img className="l-icon sm" src={`${BASE}icon.svg`} alt="" width="88" height="88" />
          <h2 className="l-h2">Start studying smarter.</h2>
          <p className="l-text">Free, fast and ready on any device.</p>
          <Link className="btn large" to="/modules">Open MiNOTES<ArrowRight size={18} /></Link>
        </div>
      </section>
    </div>
  );
}
