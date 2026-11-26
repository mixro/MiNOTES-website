/* MiNOTES — single-page app.
   All content lives in /content. The site reads content/modules.json, then each
   module's notes (Markdown), quiz, flashcards and formulas (JSON). See README.md. */
(() => {
  'use strict';

  const $ = (sel, el = document) => el.querySelector(sel);
  const main = $('#main');
  const cache = new Map();

  /* ---------- Icons for module tiles ---------- */
  const ICONS = {
    clock: '<circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 7v5l3.5 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    wave: '<path d="M3 17h3.5L9 7l3.5 12L15 10l2 4h4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    motor: '<circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3" fill="currentColor"/><path d="M12 3.5v4M12 16.5v4M3.5 12h4M16.5 12h4" stroke="currentColor" stroke-width="2"/>',
    bolt: '<path d="M13.5 2L5 13.5h6L9.5 22 19 10h-6.2z" fill="currentColor"/>',
    gantt: '<path d="M4 6h9M7 12h11M5 18h7" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>',
    book: '<path d="M4 5c3-1 6-.5 8 1v13c-2-1.5-5-2-8-1zM20 5c-3-1-6-.5-8 1v13c2-1.5 5-2 8-1z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>'
  };
  const glyph = (m, cls = '') => `<span class="mod-glyph ${cls}" style="background:${m.color}" aria-hidden="true"><svg viewBox="0 0 24 24">${ICONS[m.icon] || ICONS.book}</svg></span>`;
  const chev = '<svg class="chev" width="8" height="14" viewBox="0 0 8 14" aria-hidden="true"><path d="M1 1l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  /* ---------- Saved progress (this device only) ---------- */
  const STORE_KEY = 'minotes-progress-v1';
  let state = { done: {}, quiz: {} };
  try { state = Object.assign(state, JSON.parse(localStorage.getItem(STORE_KEY) || '{}')); } catch (e) {}
  const save = () => { try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) {} };

  /* ---------- Loading ---------- */
  async function load(path, type = 'json') {
    if (cache.has(path)) return cache.get(path);
    const p = fetch(path).then(r => {
      if (!r.ok) throw new Error(`${path}: ${r.status}`);
      return type === 'json' ? r.json() : r.text();
    });
    cache.set(path, p);
    p.catch(() => cache.delete(path));
    return p;
  }
  const modulesP = load('content/modules.json').then(d => d.modules);
  const modPath = (m, file) => `content/${m.id}/${file}`;

  /* ---------- Markdown + math ---------- */
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  function tex(t, display) {
    try { return window.katex ? katex.renderToString(t, { displayMode: display, throwOnError: false }) : esc(t); }
    catch (e) { return esc(t); }
  }
  function md(src, inline = false) {
    const math = [];
    const hold = (t, d) => { math.push([t, d]); return `@@M${math.length - 1}@@`; };
    src = String(src)
      .replace(/\$\$([\s\S]+?)\$\$/g, (_, t) => hold(t, true))
      .replace(/\\\(([\s\S]+?)\\\)/g, (_, t) => hold(t, false))
      .replace(/(^|[^\\\w])\$([^$\n]+?)\$/g, (_, pre, t) => pre + hold(t, false));
    let html = window.marked ? (inline ? marked.parseInline(src) : marked.parse(src)) : esc(src);
    html = html.replace(/@@M(\d+)@@/g, (_, i) => tex(math[i][0], math[i][1]));
    return html.replace(/<table>/g, '<div class="tbl"><table>').replace(/<\/table>/g, '</table></div>');
  }

  /* ---------- Progress helpers ---------- */
  const doneCount = m => m.chapters.filter(c => state.done[`${m.id}/${c.id}`]).length;
  const pct = m => m.chapters.length ? Math.round(100 * doneCount(m) / m.chapters.length) : 0;
  const bar = p => `<div class="progress" role="progressbar" aria-valuenow="${p}" aria-valuemin="0" aria-valuemax="100"><i style="width:${p}%"></i></div>`;

  /* ---------- Views ---------- */
  async function home() {
    const mods = await modulesP;
    const credits = mods.reduce((a, m) => a + m.credits, 0);
    const chapters = mods.reduce((a, m) => a + m.chapters.length, 0);
    const overall = chapters ? Math.round(100 * mods.reduce((a, m) => a + doneCount(m), 0) / chapters) : 0;
    return `
      <section class="hero wrap">
        <img class="hero-mark" src="assets/img/icon.svg" alt="">
        <h1 class="display">Every module.<br>One place.</h1>
        <p class="lead">Notes, quizzes, flashcards and formula sheets for your Electrical Engineering semester.</p>
        <div class="hero-stats">
          <div class="stat"><b>${mods.length}</b><span>Modules</span></div>
          <div class="stat"><b>${credits}</b><span>Credits</span></div>
          <div class="stat"><b>${chapters}</b><span>Chapters</span></div>
          <div class="stat"><b>${overall}%</b><span>Completed</span></div>
        </div>
      </section>
      <section class="wrap section" aria-label="Modules">
        <h2 class="title-2">Your modules</h2>
        <div class="grid">
          ${mods.map(m => `
            <a class="card" href="#/m/${m.id}">
              <div class="card-top">${glyph(m)}<span class="pill ${m.category.toLowerCase()}">${esc(m.category)}</span></div>
              <div>
                <div class="meta"><span>${esc(m.code)}</span><span>${m.credits} credits</span></div>
                <h3 class="title-3" style="margin-top:4px">${esc(m.title)}</h3>
              </div>
              <p>${esc(m.summary)}</p>
              <div class="progress-row">${bar(pct(m))}<span>${pct(m)}%</span></div>
            </a>`).join('')}
        </div>
      </section>`;
  }

  const TABS = [['notes', 'Notes'], ['quiz', 'Quizzes'], ['flashcards', 'Flashcards'], ['formulas', 'Formula sheet'], ['papers', 'Past papers']];

  async function moduleView(id, tab = 'notes') {
    const m = (await modulesP).find(x => x.id === id);
    if (!m) return notFound();
    let body = '';
    if (tab === 'notes') body = notesList(m);
    else if (tab === 'quiz') body = await quizIntro(m);
    else if (tab === 'flashcards') body = await flashcards(m);
    else if (tab === 'formulas') body = await formulas(m);
    else if (tab === 'papers') body = papers(m);
    return `
      <section class="wrap mod-hero">
        <div class="crumbs"><a href="#/">Modules</a> › ${esc(m.code)}</div>
        <div class="mod-head">${glyph(m)}
          <div>
            <div class="meta"><span>${esc(m.code)}</span><span>${m.credits} credits</span><span class="pill ${m.category.toLowerCase()}">${esc(m.category)}</span></div>
            <h1 class="title-1" style="margin-top:4px">${esc(m.title)}</h1>
          </div>
        </div>
        <nav class="segmented" aria-label="Sections">
          ${TABS.map(([k, l]) => `<a href="#/m/${m.id}/${k}" class="${k === tab ? 'on' : ''}" ${k === tab ? 'aria-current="page"' : ''}>${l}</a>`).join('')}
        </nav>
      </section>
      <section class="wrap section" style="padding-top:16px">${body}</section>`;
  }

  function notesList(m) {
    const p = pct(m);
    return `
      <div class="progress-row" style="max-width:420px;margin-bottom:8px">${bar(p)}<span>${doneCount(m)} of ${m.chapters.length} chapters done</span></div>
      <p class="group-label">Chapters</p>
      <div class="group">
        ${m.chapters.map((c, i) => {
          const d = state.done[`${m.id}/${c.id}`];
          return `<a class="row" href="#/m/${m.id}/notes/${c.id}">
            <span class="num ${d ? 'done' : ''}">${d ? '✓' : i + 1}</span>
            <span class="grow"><b style="font-weight:500">${esc(c.title)}</b><div class="sub">${esc(c.summary || '')}</div></span>${chev}</a>`;
        }).join('')}
      </div>`;
  }

  async function chapterView(id, cid) {
    const m = (await modulesP).find(x => x.id === id);
    const i = m ? m.chapters.findIndex(c => c.id === cid) : -1;
    if (i < 0) return notFound();
    const c = m.chapters[i];
    let text;
    try { text = await load(modPath(m, c.file), 'text'); }
    catch (e) { text = `# ${c.title}\n\nThis chapter's notes have not been added yet.`; }
    const key = `${m.id}/${c.id}`;
    const prev = m.chapters[i - 1], next = m.chapters[i + 1];
    return `
      <div class="wrap reader">
        <aside class="toc" aria-label="Chapters">
          <div class="crumbs" style="margin-bottom:14px"><a href="#/m/${m.id}">‹ ${esc(m.title)}</a></div>
          <h4>Chapters</h4>
          <div class="toc-list">
            ${m.chapters.map(x => `<a href="#/m/${m.id}/notes/${x.id}" class="${x.id === cid ? 'on' : ''}">${esc(x.title)}${state.done[`${m.id}/${x.id}`] ? '<span class="tick">✓</span>' : ''}</a>`).join('')}
          </div>
        </aside>
        <article>
          <div class="prose">${md(text)}</div>
          <div class="reader-foot">
            ${prev ? `<a class="btn secondary small" href="#/m/${m.id}/notes/${prev.id}">‹ ${esc(prev.title)}</a>` : '<span></span>'}
            <button class="btn small ${state.done[key] ? 'done' : ''}" data-done="${key}">${state.done[key] ? '✓ Done' : 'Mark as done'}</button>
            ${next ? `<a class="btn secondary small" href="#/m/${m.id}/notes/${next.id}">${esc(next.title)} ›</a>` : `<a class="btn secondary small" href="#/m/${m.id}/quiz">Take the quiz ›</a>`}
          </div>
        </article>
      </div>`;
  }

  async function quizIntro(m) {
    let quiz;
    try { quiz = await load(modPath(m, m.quiz)); } catch (e) { return empty('No quiz yet', 'Add a quiz.json file for this module.'); }
    const s = state.quiz[m.id];
    const mins = Math.round((quiz.timeLimit || 600) / 60);
    return `
      <div class="quiz-setup">
        <div class="card">
          <h3 class="title-3">Practice</h3>
          <p>Answer at your own pace. You see if you were right, and why, after each question.</p>
          <div class="meta"><span>${quiz.questions.length} questions</span><span>No timer</span></div>
          <a class="btn" href="#/m/${m.id}/quiz/practice" style="margin-top:auto;align-self:flex-start">Start practice</a>
        </div>
        <div class="card">
          <h3 class="title-3">Exam mode</h3>
          <p>Shuffled questions against the clock. Answers and explanations are shown at the end.</p>
          <div class="meta"><span>${quiz.questions.length} questions</span><span>${mins} minutes</span></div>
          <a class="btn" href="#/m/${m.id}/quiz/exam" style="margin-top:auto;align-self:flex-start">Start exam</a>
        </div>
        <div class="card">
          <h3 class="title-3">Your results</h3>
          ${s ? `<div class="meta"><span>Best ${s.best}%</span><span>Last ${s.last}%</span><span>${s.attempts} attempt${s.attempts === 1 ? '' : 's'}</span></div>
            <div class="progress-row">${bar(s.best)}</div>
            ${weakTopics(s).length ? `<p>Revise: ${weakTopics(s).slice(0, 3).map(esc).join(', ')}</p>` : '<p>No weak topics so far.</p>'}`
            : '<p>Take a quiz to see your scores and the topics to revise.</p>'}
        </div>
      </div>`;
  }
  const weakTopics = s => Object.entries(s.wrong || {}).sort((a, b) => b[1] - a[1]).map(([t]) => t);

  async function flashcards(m) {
    let cards;
    try { cards = await load(modPath(m, m.flashcards)); } catch (e) { return empty('No flashcards yet', 'Add a flashcards.json file for this module.'); }
    if (!cards.length) return empty('No flashcards yet', 'Add cards to flashcards.json.');
    return `
      <div class="flash-wrap" data-flash="${m.id}">
        <div class="flash" tabindex="0" role="button" aria-label="Flip card">
          <div class="flash-inner">
            <div class="face front"><span class="label">Question</span><div class="txt"></div></div>
            <div class="face back"><span class="label">Answer</span><div class="txt"></div></div>
          </div>
        </div>
        <div class="flash-ctrl">
          <button class="btn secondary small" data-fc="prev" aria-label="Previous card">‹</button>
          <span class="flash-count"></span>
          <button class="btn secondary small" data-fc="next" aria-label="Next card">›</button>
          <button class="btn secondary small" data-fc="shuffle">Shuffle</button>
        </div>
        <p class="muted" style="font-size:14px;margin-top:18px">Tap the card to flip it. Use ← → and space on a keyboard.</p>
      </div>`;
  }

  async function formulas(m) {
    let list;
    try { list = await load(modPath(m, m.formulas)); } catch (e) { return empty('No formula sheet yet', 'Add a formulas.json file for this module.'); }
    return `<div class="formulas">${list.map(f => `
      <div class="formula"><h4>${esc(f.title)}</h4><div class="eq">${tex(f.tex, true)}</div>${f.note ? `<p>${md(f.note, true)}</p>` : ''}</div>`).join('')}</div>
      <button class="btn secondary small" onclick="window.print()">Print formula sheet</button>`;
  }

  function papers(m) {
    if (!m.papers || !m.papers.length) return empty('No past papers yet', 'Put PDFs in this module\'s papers folder and list them in modules.json.');
    return `<div class="group">${m.papers.map(p => `<a class="row" href="${esc(modPath(m, p.file))}" target="_blank" rel="noopener"><span class="grow"><b style="font-weight:500">${esc(p.title)}</b><div class="sub">${esc(p.year || '')}</div></span>${chev}</a>`).join('')}</div>`;
  }

  const empty = (t, s) => `<div class="empty"><b>${esc(t)}</b>${esc(s)}</div>`;
  const notFound = () => `<section class="wrap section">${empty('Page not found', 'Go back to your modules.')}<p style="text-align:center"><a class="btn" href="#/">Modules</a></p></section>`;

  /* ---------- Quiz runner ---------- */
  let run = null;
  async function quizRun(id, mode) {
    const m = (await modulesP).find(x => x.id === id);
    if (!m) return notFound();
    const quiz = await load(modPath(m, m.quiz));
    let qs = quiz.questions.map((q, i) => ({ ...q, i }));
    if (mode === 'exam') qs = shuffle(qs);
    clearInterval(run && run.timer);
    run = { m, mode, qs, at: 0, answers: [], checked: false, ends: mode === 'exam' ? Date.now() + (quiz.timeLimit || 600) * 1000 : 0 };
    if (run.ends) run.timer = setInterval(tick, 500);
    return `<div class="wrap"><div class="quiz" id="quiz"></div></div>`;
  }
  function tick() {
    const el = $('#timer');
    if (!run || !run.ends) return;
    const left = Math.max(0, Math.round((run.ends - Date.now()) / 1000));
    if (el) { el.textContent = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`; el.classList.toggle('low', left < 60); }
    if (left === 0) finish();
  }
  function isRight(q, a) {
    if (a == null || a === '') return false;
    if (q.type === 'short') {
      const n = parseFloat(String(a).replace(',', '.'));
      if (typeof q.answer === 'number') return isFinite(n) && Math.abs(n - q.answer) <= Math.abs(q.answer) * (q.tolerance ?? 0.02) + 1e-9;
      return String(a).trim().toLowerCase() === String(q.answer).trim().toLowerCase();
    }
    return a === q.answer;
  }
  function drawQuestion() {
    const box = $('#quiz'); if (!box || !run) return;
    const { qs, at, mode } = run, q = qs[at], a = run.answers[at];
    const showFb = mode === 'practice' && run.checked;
    const letters = 'ABCDEF';
    let input;
    if (q.type === 'short') {
      input = `<form class="short" id="shortForm"><input id="shortIn" inputmode="decimal" autocomplete="off" placeholder="Your answer" value="${a != null ? esc(a) : ''}" ${showFb ? 'disabled' : ''} aria-label="Your answer">${q.unit ? `<span class="unit">${md(q.unit, true)}</span>` : ''}</form>`;
    } else {
      input = `<div class="options">${q.options.map((o, k) => {
        let cls = a === k ? 'picked' : '';
        if (showFb) cls = k === q.answer ? 'right' : (a === k ? 'wrong' : '');
        return `<button class="opt ${cls}" data-opt="${k}" ${showFb ? 'disabled' : ''}><span class="key">${letters[k]}</span><span>${md(o, true)}</span></button>`;
      }).join('')}</div>`;
    }
    const ok = isRight(q, a);
    const fb = showFb ? `<div class="explain"><b class="${ok ? 'ok' : 'no'}">${ok ? 'Correct.' : 'Not quite.'}</b> ${q.type === 'short' && !ok ? `Answer: ${esc(q.answer)}${q.unit ? ' ' + md(q.unit, true) : ''}. ` : ''}${md(q.explain || '', true)}</div>` : '';
    const last = at === qs.length - 1;
    let action;
    if (mode === 'practice' && !run.checked) action = `<button class="btn" data-q="check" ${a == null || a === '' ? 'disabled' : ''}>Check</button>`;
    else action = `<button class="btn" data-q="next">${last ? 'See results' : 'Next'}</button>`;
    box.innerHTML = `
      <div class="quiz-top">
        <a href="#/m/${run.m.id}/quiz">‹ ${mode === 'exam' ? 'Exam' : 'Practice'}</a>
        ${bar(Math.round(100 * at / qs.length))}
        <span>${at + 1} / ${qs.length}</span>
        ${run.ends ? '<span class="timer" id="timer"></span>' : ''}
      </div>
      <div class="q-card view">
        <div class="q-topic">${esc(q.topic || run.m.title)}</div>
        <p class="q-text">${md(q.q, true)}</p>
        ${input}${fb}
        <div class="q-actions">${mode === 'exam' && at > 0 ? '<button class="btn secondary" data-q="back">Back</button>' : ''}${action}</div>
      </div>`;
    if (run.ends) tick();
    const inp = $('#shortIn');
    if (inp && !showFb) inp.focus({ preventScroll: true });
  }
  function finish() {
    if (!run) return;
    clearInterval(run.timer);
    const { m, qs, answers } = run;
    const right = qs.filter((q, i) => isRight(q, answers[i])).length;
    const score = Math.round(100 * right / qs.length);
    const s = state.quiz[m.id] || { best: 0, attempts: 0, wrong: {} };
    s.best = Math.max(s.best, score); s.last = score; s.attempts++; s.at = Date.now();
    qs.forEach((q, i) => { if (!isRight(q, answers[i]) && q.topic) s.wrong[q.topic] = (s.wrong[q.topic] || 0) + 1; });
    state.quiz[m.id] = s; save();
    const C = 2 * Math.PI * 76, color = score >= 70 ? 'var(--green)' : score >= 50 ? 'var(--amber)' : 'var(--red)';
    $('#quiz').innerHTML = `
      <div class="q-card result view">
        <svg class="ring" viewBox="0 0 180 180" aria-hidden="true">
          <circle cx="90" cy="90" r="76" fill="none" stroke="var(--bg-sunken)" stroke-width="14"/>
          <circle cx="90" cy="90" r="76" fill="none" stroke="${color}" stroke-width="14" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - score / 100)}" transform="rotate(-90 90 90)" style="transition:stroke-dashoffset 1s"/>
          <text x="90" y="104" text-anchor="middle" class="ring-num" fill="currentColor">${score}%</text>
        </svg>
        <h2 class="title-2" style="margin-bottom:6px">${score >= 70 ? 'Great work.' : score >= 50 ? 'Getting there.' : 'Keep practising.'}</h2>
        <p class="muted" style="margin:0">${right} of ${qs.length} correct · Best ${s.best}%</p>
        <div class="q-actions" style="justify-content:center"><a class="btn secondary" href="#/m/${m.id}/notes">Review notes</a><button class="btn" data-q="again">Try again</button></div>
        ${run.mode === 'exam' ? `<div class="review"><p class="group-label">Answers</p><div class="group">${qs.map((q, i) => {
          const ok = isRight(q, answers[i]);
          const correct = q.type === 'short' ? esc(q.answer) + (q.unit ? ' ' + md(q.unit, true) : '') : md(q.options[q.answer], true);
          return `<div class="row" style="align-items:flex-start"><span class="num ${ok ? 'done' : ''}" style="${ok ? '' : 'background:var(--red);color:#fff'}">${ok ? '✓' : '✕'}</span><span class="grow"><b style="font-weight:500">${md(q.q, true)}</b><div class="sub">Answer: ${correct}. ${md(q.explain || '', true)}</div></span></div>`;
        }).join('')}</div></div>` : ''}
      </div>`;
    run.finished = true;
  }

  /* ---------- Flashcard runner ---------- */
  let deck = null;
  async function startFlash() {
    const el = $('[data-flash]'); if (!el) return;
    const m = (await modulesP).find(x => x.id === el.dataset.flash);
    deck = { cards: (await load(modPath(m, m.flashcards))).slice(), i: 0 };
    drawFlash();
  }
  function drawFlash() {
    if (!deck) return;
    const c = deck.cards[deck.i], f = $('.flash');
    if (!f) return;
    f.classList.remove('flipped');
    $('.front .txt').innerHTML = md(c.front, true);
    $('.back .txt').innerHTML = md(c.back, true);
    $('.flash-count').textContent = `${deck.i + 1} of ${deck.cards.length}`;
  }

  /* ---------- Search ---------- */
  let index = null;
  async function buildIndex() {
    if (index) return index;
    const mods = await modulesP;
    const items = [];
    await Promise.all(mods.flatMap(m => m.chapters.map(async c => {
      let t = '';
      try { t = await load(modPath(m, c.file), 'text'); } catch (e) {}
      items.push({ m, c, text: t.replace(/\$\$[\s\S]*?\$\$/g, ' ').replace(/[#*_>`|$\\]/g, ' ').replace(/\s+/g, ' ') });
    })));
    return (index = items);
  }
  async function searchView(q = '') {
    return `
      <section class="wrap section">
        <h1 class="title-1">Search</h1>
        <form class="search-box" id="searchForm" role="search">
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M15.5 15.5L21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          <input id="q" type="search" placeholder="Search all notes, e.g. PWM, Laplace, critical path" value="${esc(q)}" autocomplete="off" aria-label="Search all notes">
        </form>
        <div id="hits"></div>
      </section>`;
  }
  async function runSearch(q) {
    const box = $('#hits'); if (!box) return;
    q = q.trim();
    if (q.length < 2) { box.innerHTML = `<p class="group-label">Try a topic, a formula name or a module code.</p>`; return; }
    const items = await buildIndex();
    const words = q.toLowerCase().split(/\s+/);
    const hits = items.map(it => {
      const hay = (it.c.title + ' ' + it.m.title + ' ' + it.m.code + ' ' + it.text).toLowerCase();
      if (!words.every(w => hay.includes(w))) return null;
      const pos = it.text.toLowerCase().indexOf(words[0]);
      const start = Math.max(0, pos - 60);
      let snip = pos >= 0 ? (start ? '…' : '') + it.text.slice(start, pos + 120) + '…' : it.c.summary || '';
      snip = esc(snip);
      words.forEach(w => { snip = snip.replace(new RegExp(w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), x => `<mark>${x}</mark>`); });
      return { it, snip, score: it.c.title.toLowerCase().includes(words[0]) ? 2 : 1 };
    }).filter(Boolean).sort((a, b) => b.score - a.score);
    box.innerHTML = hits.length ? `<p class="group-label">${hits.length} result${hits.length === 1 ? '' : 's'}</p><div class="group">${hits.map(h => `
      <a class="row hit" href="#/m/${h.it.m.id}/notes/${h.it.c.id}">${glyph(h.it.m)}<span class="grow"><b style="font-weight:500">${esc(h.it.c.title)}</b> <span class="sub">· ${esc(h.it.m.title)}</span><div class="snippet">${h.snip}</div></span>${chev}</a>`).join('')}</div>`
      : empty('No results', `Nothing matches “${q}”.`);
  }

  /* ---------- Dashboard ---------- */
  async function dashboard() {
    const mods = await modulesP;
    const total = mods.reduce((a, m) => a + m.chapters.length, 0);
    const done = mods.reduce((a, m) => a + doneCount(m), 0);
    const taken = mods.filter(m => state.quiz[m.id]);
    const avg = taken.length ? Math.round(taken.reduce((a, m) => a + state.quiz[m.id].best, 0) / taken.length) : 0;
    const weak = [];
    mods.forEach(m => { const s = state.quiz[m.id]; if (s) Object.entries(s.wrong || {}).forEach(([t, n]) => weak.push({ m, t, n })); });
    weak.sort((a, b) => b.n - a.n);
    return `
      <section class="wrap section">
        <h1 class="title-1" style="margin-bottom:24px">Progress</h1>
        <div class="kpis">
          <div class="kpi"><b>${done}/${total}</b><span>Chapters done</span></div>
          <div class="kpi"><b>${taken.length}/${mods.length}</b><span>Modules quizzed</span></div>
          <div class="kpi"><b>${taken.length ? avg + '%' : '–'}</b><span>Average best score</span></div>
        </div>
        <p class="group-label">By module</p>
        <div class="group bars">
          ${mods.map(m => {
            const s = state.quiz[m.id];
            return `<a class="row" href="#/m/${m.id}">${glyph(m)}<span class="grow" style="flex:1 1 180px"><b style="font-weight:500">${esc(m.title)}</b><div class="sub">${esc(m.code)}</div></span>
              <span class="bar-line">Notes ${bar(pct(m))}<span>${pct(m)}%</span></span>
              <span class="bar-line">Quiz ${bar(s ? s.best : 0)}<span>${s ? s.best + '%' : '–'}</span></span></a>`;
          }).join('')}
        </div>
        <p class="group-label">Topics to revise</p>
        ${weak.length ? `<div class="group">${weak.slice(0, 8).map(w => `<a class="row" href="#/m/${w.m.id}/notes"><span class="grow"><b style="font-weight:500">${esc(w.t)}</b><div class="sub">${esc(w.m.title)}</div></span><span class="pill">${w.n} missed</span>${chev}</a>`).join('')}</div>`
          : `<div class="group">${empty('Nothing to revise yet', 'Topics you miss in quizzes will show up here.')}</div>`}
        ${done || taken.length ? '<p style="margin-top:24px"><button class="btn secondary small" data-reset>Reset progress</button></p>' : ''}
      </section>`;
  }

  /* ---------- Router ---------- */
  async function route() {
    const parts = (location.hash.replace(/^#\/?/, '') || '').split('?')[0].split('/').filter(Boolean).map(decodeURIComponent);
    const query = new URLSearchParams(location.hash.split('?')[1] || '');
    if (run && !run.finished && !(parts[0] === 'm' && parts[2] === 'quiz' && parts[3])) { clearInterval(run.timer); run = null; }
    let html, after;
    try {
      if (!parts.length) html = await home();
      else if (parts[0] === 'm' && parts[2] === 'notes' && parts[3]) html = await chapterView(parts[1], parts[3]);
      else if (parts[0] === 'm' && parts[2] === 'quiz' && parts[3]) { html = await quizRun(parts[1], parts[3] === 'exam' ? 'exam' : 'practice'); after = drawQuestion; }
      else if (parts[0] === 'm') { html = await moduleView(parts[1], parts[2] || 'notes'); if (parts[2] === 'flashcards') after = startFlash; }
      else if (parts[0] === 'search') { html = await searchView(query.get('q') || ''); after = () => { const i = $('#q'); i.focus(); runSearch(i.value); }; }
      else if (parts[0] === 'dashboard') html = await dashboard();
      else html = notFound();
    } catch (e) {
      console.error(e);
      html = `<section class="wrap section">${empty('Could not load this page', 'If you opened index.html straight from disk, run a local server instead (see README).')}</section>`;
    }
    main.innerHTML = `<div class="view">${html}</div>`;
    const top = parts[0] === 'dashboard' ? 'dashboard' : parts[0] === 'search' ? 'search' : 'home';
    document.querySelectorAll('[data-nav]').forEach(a => a.classList.toggle('active', a.dataset.nav === top));
    window.scrollTo({ top: 0 });
    const seg = $('.segmented .on');
    if (seg) seg.parentElement.scrollLeft = seg.offsetLeft - 12;
    after && after();
  }
  window.addEventListener('hashchange', route);

  /* ---------- Events ---------- */
  document.addEventListener('click', e => {
    const t = e.target.closest('button, .flash');
    if (!t) return;
    if (t.dataset.done) {
      const k = t.dataset.done;
      state.done[k] = !state.done[k]; if (!state.done[k]) delete state.done[k];
      save(); route(); return;
    }
    if (t.hasAttribute('data-reset')) {
      if (t.dataset.confirm) { state = { done: {}, quiz: {} }; save(); route(); }
      else { t.dataset.confirm = '1'; t.textContent = 'Tap again to erase all progress'; t.classList.remove('secondary'); t.style.background = 'var(--red)'; }
      return;
    }
    if (t.dataset.opt != null && run) { run.answers[run.at] = +t.dataset.opt; drawQuestion(); return; }
    if (t.dataset.q && run) {
      const a = t.dataset.q;
      if (a === 'check') { run.checked = true; drawQuestion(); }
      else if (a === 'next') { if (run.at === run.qs.length - 1) finish(); else { run.at++; run.checked = false; drawQuestion(); } }
      else if (a === 'back') { run.at--; drawQuestion(); }
      else if (a === 'again') route();
      return;
    }
    if (t.classList.contains('flash')) { t.classList.toggle('flipped'); return; }
    if (t.dataset.fc && deck) {
      if (t.dataset.fc === 'next') deck.i = (deck.i + 1) % deck.cards.length;
      if (t.dataset.fc === 'prev') deck.i = (deck.i - 1 + deck.cards.length) % deck.cards.length;
      if (t.dataset.fc === 'shuffle') { deck.cards = shuffle(deck.cards); deck.i = 0; }
      drawFlash();
    }
  });
  document.addEventListener('input', e => {
    if (e.target.id === 'shortIn' && run) {
      run.answers[run.at] = e.target.value;
      const b = $('[data-q="check"]'); if (b) b.disabled = !e.target.value.trim();
    }
    if (e.target.id === 'q') {
      runSearch(e.target.value);
      history.replaceState(null, '', '#/search' + (e.target.value ? '?q=' + encodeURIComponent(e.target.value) : ''));
    }
  });
  document.addEventListener('submit', e => {
    e.preventDefault();
    if (e.target.id === 'shortForm' && run) { const b = $('[data-q="check"]') || $('[data-q="next"]'); if (b && !b.disabled) b.click(); }
  });
  document.addEventListener('keydown', e => {
    if ($('.flash') && deck && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
      if (e.key === 'ArrowRight') { deck.i = (deck.i + 1) % deck.cards.length; drawFlash(); }
      if (e.key === 'ArrowLeft') { deck.i = (deck.i - 1 + deck.cards.length) % deck.cards.length; drawFlash(); }
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); $('.flash').classList.toggle('flipped'); }
    }
  });

  $('#searchBtn').addEventListener('click', () => { location.hash = '#/search'; });
  $('#themeBtn').addEventListener('click', () => {
    const root = document.documentElement;
    const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('minotes-theme', root.dataset.theme); } catch (e) {}
  });

  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

  route();
})();
