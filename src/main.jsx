import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import 'katex/dist/katex.min.css';
import './styles.css';
import { ProgressProvider } from './lib/progress';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Modules from './pages/Modules';
import ModulePage from './pages/ModulePage';
import Chapter from './pages/Chapter';
import QuizRunner from './pages/QuizRunner';
import Tutorial from './pages/Tutorial';
import Search from './pages/Search';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

// HashRouter (#/m/ed/notes/…) works on GitHub Pages without any server rewrites.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProgressProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="modules" element={<Modules />} />
            <Route path="m/:id" element={<ModulePage />} />
            <Route path="m/:id/:tab" element={<ModulePage />} />
            <Route path="m/:id/notes/:chapter" element={<Chapter />} />
            <Route path="m/:id/quiz/:mode" element={<QuizRunner />} />
            <Route path="m/:id/tutorials/:tut" element={<Tutorial />} />
            <Route path="search" element={<Search />} />
            <Route path="progress" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </ProgressProvider>
  </React.StrictMode>
);
