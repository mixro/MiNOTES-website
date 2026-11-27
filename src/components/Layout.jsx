import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ChartColumn, LayoutGrid, Moon, Search, Sparkles, Sun } from 'lucide-react';

const BASE = import.meta.env.BASE_URL;

// The app icon has a light and a dark appearance; CSS shows the one that matches the theme.
export const Logo = ({ size = 28, className = '' }) => (
  <span className={`logo ${className}`} style={{ width: size, height: size }} aria-hidden="true">
    <img className="logo-light" src={`${BASE}icon.svg`} alt="" width={size} height={size} />
    <img className="logo-dark" src={`${BASE}icon-dark.svg`} alt="" width={size} height={size} />
  </span>
);

export const Wordmark = ({ className = '' }) => <span className={`wordmark ${className}`}>Mi<em>NOTES</em></span>;

const isDark = () => {
  const t = document.documentElement.dataset.theme;
  return t ? t === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
};

function useTheme() {
  const [dark, setDark] = useState(isDark);
  useEffect(() => {
    const mq = matchMedia('(prefers-color-scheme: dark)');
    const on = () => setDark(isDark());
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  const toggle = () => {
    const next = isDark() ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('minotes-theme', next); } catch { /* ignore */ }
    setDark(next === 'dark');
  };
  return [dark, toggle];
}

const cls = ({ isActive }) => (isActive ? 'active' : undefined);

export default function Layout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [dark, toggleTheme] = useTheme();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  const inModules = pathname.startsWith('/modules') || pathname.startsWith('/m/');
  const landing = pathname === '/';

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className={`nav ${landing ? 'nav-landing' : ''}`}>
        <div className="nav-inner">
          <Link className="brand" to="/" aria-label="MiNOTES home">
            <Logo size={28} />
            <Wordmark />
          </Link>
          <nav className="nav-links" aria-label="Main">
            <NavLink to="/modules" className={() => (inModules ? 'active' : undefined)}>Modules</NavLink>
            <NavLink to="/progress" className={cls}>Progress</NavLink>
            <NavLink to="/search" className={cls}>Search</NavLink>
          </nav>
          <div className="nav-actions">
            <button className="icon-btn hide-sm" aria-label="Search" onClick={() => navigate('/search')}><Search size={18} strokeWidth={2} /></button>
            <button className="icon-btn" aria-label={dark ? 'Use light appearance' : 'Use dark appearance'} onClick={toggleTheme}>
              {dark ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
            </button>
            {landing && <Link className="btn small nav-cta" to="/modules">Start studying</Link>}
          </div>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <div className="view" key={pathname}><Outlet /></div>
      </main>

      <nav className="tabbar" aria-label="Main">
        <NavLink to="/" end className={cls}><Sparkles size={22} strokeWidth={2} />Home</NavLink>
        <NavLink to="/modules" className={() => (inModules ? 'active' : undefined)}><LayoutGrid size={22} strokeWidth={2} />Modules</NavLink>
        <NavLink to="/progress" className={cls}><ChartColumn size={22} strokeWidth={2} />Progress</NavLink>
        <NavLink to="/search" className={cls}><Search size={22} strokeWidth={2} />Search</NavLink>
      </nav>

      <footer className="footer">
        <div className="footer-inner">
          <Link className="brand" to="/"><Logo size={22} /><Wordmark className="small" /></Link>
          <span>Study smarter. Power through the semester.</span>
          <span className="muted">Progress is saved on this device only.</span>
        </div>
      </footer>
    </>
  );
}
