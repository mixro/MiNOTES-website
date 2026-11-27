import { Link } from 'react-router-dom';
import { getTutorialText, parseTutorial } from '../../lib/content';
import { Chevron, Empty } from '../../components/ui';

export default function Tutorials({ m }) {
  if (!m.tutorials?.length) return <Empty title="No tutorials yet">Add markdown files to src/content/{m.id}/tutorials/ and list them in modules.json.</Empty>;
  return (
    <>
      <p className="group-label">Tutorial sheets with worked answers</p>
      <div className="group">
        {m.tutorials.map((t, i) => {
          const n = parseTutorial(getTutorialText(m, t)).questions.length;
          return (
            <Link key={t.id} className="row" to={`/m/${m.id}/tutorials/${t.id}`}>
              <span className="num">{i + 1}</span>
              <span className="grow"><b style={{ fontWeight: 500 }}>{t.title}</b><div className="sub">{t.summary} · {n} questions</div></span>
              <Chevron />
            </Link>
          );
        })}
      </div>
    </>
  );
}
