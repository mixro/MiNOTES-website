import { useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { SearchIcon } from './ui';

const logo = `${import.meta.env.BASE_URL}icon.svg`;

function toggleTheme() {
  const root = document.documentElement;
  const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.theme = dark ? 'light' : 'dark';
  try { localStorage.setItem('minotes-theme', root.dataset.theme); } catch { /* ignore */ }
}

const navClass = ({ isActive }) => (isActive ? 'active' : undefined);

export default function Layout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  const onModules = pathname === '/' || pathname.startsWith('/m/');

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="nav">
        <div className="nav-inner">
          <Link className="brand" to="/" aria-label="MiNOTES home">
            <img src={logo} alt="" width="28" height="28" />
            <span className="wordmark"><b>Mi</b>NOTES</span>
          </Link>
          <nav className="nav-links" aria-label="Main">
            <NavLink to="/" className={() => (onModules ? 'active' : undefined)}>Modules</NavLink>
            <NavLink to="/progress" className={navClass}>Progress</NavLink>
            <NavLink to="/search" className={navClass}>Search</NavLink>
          </nav>
          <div className="nav-actions">
            <button className="icon-btn" id="searchBtn" aria-label="Search" onClick={() => navigate('/search')}><SearchIcon /></button>
            <button className="icon-btn" aria-label="Switch appearance" onClick={toggleTheme}>
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9z" fill="currentColor" /></svg>
            </button>
          </div>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <div className="view" key={pathname}><Outlet /></div>
      </main>

      <nav className="tabbar" aria-label="Main">
        <NavLink to="/" className={() => (onModules ? 'active' : undefined)}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h7v6H4zM13 5h7v6h-7zM4 13h7v6H4zM13 13h7v6h-7z" fill="currentColor" /></svg>Modules
        </NavLink>
        <NavLink to="/progress" className={navClass}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 20V11M12 20V4M19 20v-6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>Progress
        </NavLink>
        <NavLink to="/search" className={navClass}><SearchIcon size={24} w={2.4} />Search</NavLink>
      </nav>

      <footer className="footer">
        <div className="footer-inner">
          <span className="wordmark small"><b>Mi</b>NOTES</span>
          <span>Study smarter. Power through the semester.</span>
          <span className="muted">Progress is saved on this device only.</span>
        </div>
      </footer>
    </>
  );
}
