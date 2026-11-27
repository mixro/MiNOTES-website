import { getFormulas } from '../../lib/content';
import { tex } from '../../lib/markdown';
import { Empty, Md } from '../../components/ui';

export default function Formulas({ m }) {
  const list = getFormulas(m);
  if (!list.length) return <Empty title="No formula sheet yet">Add a formulas.json file for this module.</Empty>;
  return (
    <>
      <div className="formulas">
        {list.map((f) => (
          <div className="formula" key={f.title}>
            <h4>{f.title}</h4>
            <div className="eq" dangerouslySetInnerHTML={{ __html: tex(f.tex, true) }} />
            {f.note && <Md as="p" src={f.note} inline />}
          </div>
        ))}
      </div>
      <button className="btn secondary small" onClick={() => window.print()}>Print formula sheet</button>
    </>
  );
}
