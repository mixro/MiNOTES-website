import { Activity, BookOpen, ChartGantt, ChevronRight, Clock, Cog, Search, Zap } from 'lucide-react';
import { md } from '../lib/markdown';

const ICONS = { clock: Clock, wave: Activity, motor: Cog, bolt: Zap, gantt: ChartGantt, book: BookOpen };

// Module tile: an app-icon style squircle with a lit gradient and a Lucide glyph
export const Glyph = ({ m, size }) => {
  const Icon = ICONS[m.icon] || BookOpen;
  return (
    <span className="mod-glyph" style={{ '--c': m.color, ...(size ? { width: size, height: size } : {}) }} aria-hidden="true">
      <Icon strokeWidth={2.1} />
    </span>
  );
};

export const Bar = ({ value }) => (
  <div className="progress" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
    <i style={{ width: `${value}%` }} />
  </div>
);

export const Chevron = () => <ChevronRight className="chev" size={18} strokeWidth={2.25} aria-hidden="true" />;

export const Pill = ({ category }) => <span className={`pill ${category.toLowerCase()}`}>{category}</span>;

export const Empty = ({ title, children }) => (
  <div className="empty"><b>{title}</b>{children}</div>
);

// Renders Markdown + LaTeX from the content files (authored by you, so trusted).
export const Md = ({ src, inline = false, as: Tag = inline ? 'span' : 'div', ...rest }) => (
  <Tag {...rest} dangerouslySetInnerHTML={{ __html: md(src, inline) }} />
);

export const SearchIcon = ({ size = 18, w = 2 }) => <Search size={size} strokeWidth={w} aria-hidden="true" />;
