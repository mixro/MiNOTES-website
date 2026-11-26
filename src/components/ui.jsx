import { md } from '../lib/markdown';

const ICONS = {
  clock: <><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M12 7v5l3.5 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></>,
  wave: <path d="M3 17h3.5L9 7l3.5 12L15 10l2 4h4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
  motor: <><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="3" fill="currentColor" /><path d="M12 3.5v4M12 16.5v4M3.5 12h4M16.5 12h4" stroke="currentColor" strokeWidth="2" /></>,
  bolt: <path d="M13.5 2L5 13.5h6L9.5 22 19 10h-6.2z" fill="currentColor" />,
  gantt: <path d="M4 6h9M7 12h11M5 18h7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />,
  book: <path d="M4 5c3-1 6-.5 8 1v13c-2-1.5-5-2-8-1zM20 5c-3-1-6-.5-8 1v13c2-1.5 5-2 8-1z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />,
};

export const Glyph = ({ m }) => (
  <span className="mod-glyph" style={{ background: m.color }} aria-hidden="true">
    <svg viewBox="0 0 24 24">{ICONS[m.icon] || ICONS.book}</svg>
  </span>
);

export const Bar = ({ value }) => (
  <div className="progress" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
    <i style={{ width: `${value}%` }} />
  </div>
);

export const Chevron = () => (
  <svg className="chev" width="8" height="14" viewBox="0 0 8 14" aria-hidden="true">
    <path d="M1 1l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Pill = ({ category }) => <span className={`pill ${category.toLowerCase()}`}>{category}</span>;

export const Empty = ({ title, children }) => (
  <div className="empty"><b>{title}</b>{children}</div>
);

// Renders Markdown + LaTeX from the content files (authored by you, so trusted).
export const Md = ({ src, inline = false, as: Tag = inline ? 'span' : 'div', ...rest }) => (
  <Tag {...rest} dangerouslySetInnerHTML={{ __html: md(src, inline) }} />
);

export const SearchIcon = ({ size = 18, w = 2 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
    <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth={w} />
    <path d="M15.5 15.5L21 21" stroke="currentColor" strokeWidth={w} strokeLinecap="round" />
  </svg>
);
