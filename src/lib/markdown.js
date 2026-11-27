import { marked } from 'marked';
import katex from 'katex';

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export function tex(t, displayMode = false) {
  try { return katex.renderToString(t, { displayMode, throwOnError: false }); }
  catch { return esc(t); }
}

// Markdown with LaTeX: $$display$$, $inline$ and \( inline \).
// Maths is lifted out before Markdown parsing so underscores and backslashes survive.
export function md(src, inline = false) {
  const math = [];
  const hold = (t, d) => { math.push([t, d]); return `@@M${math.length - 1}@@`; };
  const text = String(src ?? '')
    .replace(/\$\$([\s\S]+?)\$\$/g, (_, t) => hold(t, true))
    .replace(/\\\(([\s\S]+?)\\\)/g, (_, t) => hold(t, false))
    .replace(/(^|[^\\\w])\$([^$\n]+?)\$/g, (_, pre, t) => pre + hold(t, false));
  const html = inline ? marked.parseInline(text) : marked.parse(text);
  return html
    .replace(/@@M(\d+)@@/g, (_, i) => tex(math[i][0], math[i][1]))
    .replace(/<table>/g, '<div class="tbl"><table>')
    .replace(/<\/table>/g, '</table></div>');
}

// Plain text for the search index
export const plain = (src) =>
  String(src).replace(/\$\$[\s\S]*?\$\$/g, ' ').replace(/[#*_>`|$\\]/g, ' ').replace(/\s+/g, ' ');
