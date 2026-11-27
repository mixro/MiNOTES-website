import { ChevronLeft, ChevronRight, Layers, Lightbulb, Shuffle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getFlashcards } from '../../lib/content';
import { shuffle } from '../../lib/progress';
import { Empty, Md } from '../../components/ui';

export default function Flashcards({ m }) {
  const [cards, setCards] = useState(() => getFlashcards(m));
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const n = cards.length;
  const go = (d) => { setFlipped(false); setI((x) => (x + d + n) % n); };

  useEffect(() => {
    const onKey = (e) => {
      if (/INPUT|TEXTAREA/.test(document.activeElement?.tagName)) return;
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); setFlipped((f) => !f); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  if (!n) return <Empty title="No flashcards yet">Add a flashcards.json file for this module.</Empty>;
  const c = cards[i];
  return (
    <div className="flash-wrap">
      <div className={`flash ${flipped ? 'flipped' : ''}`} role="button" tabIndex={0} aria-label="Flip card" onClick={() => setFlipped((f) => !f)}>
        <div className="flash-inner">
          <div className="face front"><span className="label"><Layers size={13} />Question</span><Md className="txt" src={c.front} inline as="div" /></div>
          <div className="face back"><span className="label"><Lightbulb size={13} />Answer</span><Md className="txt" src={c.back} inline as="div" /></div>
        </div>
      </div>
      <div className="flash-ctrl">
        <button className="btn secondary small" aria-label="Previous card" onClick={() => go(-1)}><ChevronLeft size={18} /></button>
        <span className="flash-count">{i + 1} of {n}</span>
        <button className="btn secondary small" aria-label="Next card" onClick={() => go(1)}><ChevronRight size={18} /></button>
        <button className="btn secondary small" onClick={() => { setCards(shuffle(cards)); setI(0); setFlipped(false); }}><Shuffle size={16} />Shuffle</button>
      </div>
      <p className="muted" style={{ fontSize: 14, marginTop: 18 }}>Tap the card to flip it. Use ← → and space on a keyboard.</p>
    </div>
  );
}
