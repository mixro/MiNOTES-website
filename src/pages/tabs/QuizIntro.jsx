import { PenLine, Timer, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getQuiz } from '../../lib/content';
import { useProgress, weakTopics } from '../../lib/progress';
import { Bar, Empty } from '../../components/ui';

export default function QuizIntro({ m }) {
  const { state } = useProgress();
  const quiz = getQuiz(m);
  if (!quiz?.questions?.length) return <Empty title="No quiz yet">Add a quiz.json file for this module.</Empty>;
  const s = state.quiz[m.id];
  const n = quiz.questions.length;
  const weak = weakTopics(s);
  return (
    <div className="quiz-setup">
      <div className="card">
        <span className="feat-ico" style={{ "--c": "#0071e3" }}><PenLine size={22} /></span>
        <h3 className="title-3">Practice</h3>
        <p>Answer at your own pace. You see if you were right, and why, after each question.</p>
        <div className="meta"><span>{n} questions</span><span>No timer</span></div>
        <Link className="btn" to={`/m/${m.id}/quiz/practice`} style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>Start practice</Link>
      </div>
      <div className="card">
        <span className="feat-ico" style={{ "--c": "#ff9500" }}><Timer size={22} /></span>
        <h3 className="title-3">Exam mode</h3>
        <p>Shuffled questions against the clock. Answers and explanations are shown at the end.</p>
        <div className="meta"><span>{n} questions</span><span>{Math.round((quiz.timeLimit || 600) / 60)} minutes</span></div>
        <Link className="btn" to={`/m/${m.id}/quiz/exam`} style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>Start exam</Link>
      </div>
      <div className="card">
        <span className="feat-ico" style={{ "--c": "#34c759" }}><Trophy size={22} /></span>
        <h3 className="title-3">Your results</h3>
        {s ? (
          <>
            <div className="meta"><span>Best {s.best}%</span><span>Last {s.last}%</span><span>{s.attempts} attempt{s.attempts === 1 ? '' : 's'}</span></div>
            <div className="progress-row"><Bar value={s.best} /></div>
            <p>{weak.length ? `Revise: ${weak.slice(0, 3).join(', ')}` : 'No weak topics so far.'}</p>
          </>
        ) : <p>Take a quiz to see your scores and the topics to revise.</p>}
      </div>
    </div>
  );
}
