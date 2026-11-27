import { FileText } from 'lucide-react';
import { paperUrl } from '../../lib/content';
import { Chevron, Empty } from '../../components/ui';

export default function Papers({ m }) {
  if (!m.papers?.length) return <Empty title="No past papers yet">Put PDFs in public/papers/{m.id}/ and list them in modules.json.</Empty>;
  return (
    <div className="group">
      {m.papers.map((p) => (
        <a key={p.file} className="row" href={paperUrl(m, p)} target="_blank" rel="noopener noreferrer">
          <span className="row-ico"><FileText size={18} /></span>
          <span className="grow"><b style={{ fontWeight: 500 }}>{p.title}</b><div className="sub">{p.year}</div></span>
          <Chevron />
        </a>
      ))}
    </div>
  );
}
