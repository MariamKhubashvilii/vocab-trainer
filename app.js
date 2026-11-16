(function () {
  'use strict';

  const WORDS = (window.WORDS_DATA || []).filter(w => w && w.word && w.definition);
  const STORE_KEY = 'vocabTrainer.v1';
  const SEL_KEY = 'vocabTrainer.topics.v1';
  const TOPIC_LIST = window.TOPICS_DATA || [];
  const topicsOf = w => (w.topics && w.topics.length ? w.topics : ['general']);
  let activePool = WORDS.slice();
  let selTopics = null;
  try { selTopics = JSON.parse(localStorage.getItem(SEL_KEY)); } catch (e) { selTopics = null; }
  function saveSel() { try { localStorage.setItem(SEL_KEY, JSON.stringify(selTopics)); } catch (e) {} }
  const app = document.getElementById('app');

  // ---------- storage (progress per word) ----------
  let stats = {};
  try { stats = JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch (e) { stats = {}; }
  function saveStats() { try { localStorage.setItem(STORE_KEY, JSON.stringify(stats)); } catch (e) {} pushSoon(); }

  // ---------- session history + saving to a file through server.py ----------
  const HIST_KEY = 'vocabTrainer.history.v1';
  let history = [];
  try { history = JSON.parse(localStorage.getItem(HIST_KEY)) || []; } catch (e) { history = []; }
  let serverOn = false, pushTimer = null, currentView = 'home';
  function saveHistory() { try { localStorage.setItem(HIST_KEY, JSON.stringify(history)); } catch (e) {} pushSoon(); }
  function pushSoon() {
    if (!serverOn) return;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(() => {
      fetch('/api/progress', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ stats, history }) }).catch(() => {});
    }, 400);
  }
  function mergeProgress(d) {
    if (!d || typeof d !== 'object') return;
    const s = d.stats || {};
    Object.keys(s).forEach(k => {
      const a = stats[k], b = s[k];
      if (!b || typeof b !== 'object') return;
      if (!a || ((b.right || 0) + (b.wrong || 0)) > ((a.right || 0) + (a.wrong || 0))) stats[k] = b;
    });
    const seen = new Set(history.map(h => h.t));
    (Array.isArray(d.history) ? d.history : []).forEach(h => { if (h && !seen.has(h.t)) { history.push(h); seen.add(h.t); } });
    history.sort((x, y) => x.t - y.t);
  }
  async function syncFromServer() {
    try {
      const r = await fetch('/api/progress');
      if (!r.ok) return;
      const d = await r.json();
      serverOn = true;
      mergeProgress(d);
      saveStats(); saveHistory();
      if (currentView === 'home' && !state) viewHome();
      else if (currentView === 'progress' && !state) viewProgress();
    } catch (e) { /* not running through server.py */ }
  }
  const isHard = w => { const s = stats[w.word]; return !!s && (s.wrong || 0) > 0 && (s.wrong || 0) >= (s.right || 0); };

  // ---------- helpers ----------
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const escRe = s => s.replace(/[.*+?^${}()[\]\\]/g, '\\$&');
  const pad = n => String(n).padStart(2, '0');

  const TOPICS = [
    'a university lecture you attended recently', 'social media and attention', 'climate and energy policy',
    'a group project that went wrong', 'public transport in your city', 'artificial intelligence in education',
    'a news story you followed', 'working from home', 'a scientific discovery', 'your daily routine',
    'a book or film you disliked', 'city life versus village life', 'the cost of living', 'sleep and productivity',
    'a decision you regret', 'learning a language', 'a historical event', 'health and exercise',
    'tourism and local culture', 'a disagreement with a friend'
  ];

  // ---------- word selection (weak words come up more often) ----------
  function weight(w) {
    const s = stats[w.word];
    if (!s) return 2.5;
    return Math.max(0.4, 1 + 1.5 * (s.wrong || 0) - 0.5 * (s.right || 0));
  }
  function sampleWords(n, mode) {
    const pool = activePool.slice();
    const out = [];
    n = Math.min(n, pool.length);
    while (out.length < n) {
      let i;
      if (mode === 'uniform') {
        i = Math.floor(Math.random() * pool.length);
      } else {
        const total = pool.reduce((t, w) => t + weight(w), 0);
        let r = Math.random() * total;
        for (i = 0; i < pool.length; i++) { r -= weight(pool[i]); if (r <= 0) break; }
        if (i >= pool.length) i = pool.length - 1;
      }
      out.push(pool.splice(i, 1)[0]);
    }
    return out;
  }

  // ---------- multiple choice, with length-balanced distractors ----------
  function combos(arr, k) {
    const out = [];
    (function rec(s, c) {
      if (c.length === k) { out.push(c.slice()); return; }
      for (let i = s; i < arr.length; i++) { c.push(arr[i]); rec(i + 1, c); c.pop(); }
    })(0, []);
    return out;
  }

  // Pick k wrong answers whose length is close to the right answer's,
  // so "pick the longest (or shortest) option" is not a useful strategy.
  function pickDistractors(target, textOf, k) {
    const ok = w =>
      w.word !== target.word &&
      textOf(w) &&
      textOf(w) !== textOf(target) &&
      !(target.synonyms || []).includes(w.word) &&
      !(w.synonyms || []).includes(target.word);
    // wrong answers come from the chosen topics when there are enough of them
    let others = activePool.filter(ok);
    if (others.length < k) others = WORDS.filter(ok);
    const seenText = new Set();
    others = others.filter(w => { const t = textOf(w); if (seenText.has(t)) return false; seenText.add(t); return true; });
    if (others.length < k) return null;
    const L = textOf(target).length;
    const ranked = others.map(w => ({
      w,
      d: Math.abs(textOf(w).length - L) / L + (w.pos === target.pos ? 0 : 0.5) + Math.random() * 0.2
    })).sort((a, b) => a.d - b.d).slice(0, 8);
    let all = combos(ranked, k).map(c => ({
      items: c.map(x => x.w),
      score: c.reduce((s, x) => s + x.d, 0),
      longer: c.some(x => textOf(x.w).length > L)
    }));
    // Length is only a tie-breaker via closeness, so the right answer is the
    // longest about 1 time in 4 (pure chance), not never and not always.
    all.sort((a, b) => a.score - b.score);
    const top = all.slice(0, 3);
    return top[Math.floor(Math.random() * top.length)].items;
  }

  function clozeFor(w) {
    if (w.cloze && w.cloze.includes('____')) return w.cloze;
    if (!w.example) return null;
    const re = new RegExp('\\b' + escRe(w.word) + '\\b', 'i');
    return re.test(w.example) ? w.example.replace(re, '_____') : null;
  }

  function availableTypes(w) {
    const t = ['meaning', 'word'];
    // connectors and near-synonym adjectives often fit more than one blank, so they only get meaning questions
    if (clozeFor(w) && !topicsOf(w).some(x => x === 'conversational' || x === 'leadership' || x === 'types of people')) t.push('cloze');
    if (w.person) t.push('person');
    if (w.verb) t.push('verbform');
    if (w.noun) t.push('nounform');
    return t;
  }

  function buildMC(w, type) {
    const k = 3;
    let textOf, prompt, label, correctText;
    if (type === 'meaning') {
      textOf = x => x.definition;
      label = 'What does it mean?';
      prompt = '<span class="big">' + esc(w.word) + '</span> <span class="muted">' + esc(w.pos || '') + '</span>';
      correctText = w.definition;
    } else if (type === 'person') {
      textOf = x => x.person;
      label = 'Who does this?';
      prompt = 'Someone who commits <b>' + esc(w.word) + '</b> is called a:';
      correctText = w.person;
    } else if (type === 'verbform') {
      textOf = x => x.verb;
      label = 'Verb form';
      prompt = 'The verb that goes with <b>' + esc(w.word) + '</b> is:';
      correctText = w.verb;
    } else if (type === 'nounform') {
      textOf = x => x.noun;
      label = 'Noun form';
      prompt = 'The noun form of <b>' + esc(w.word) + '</b> is:';
      correctText = w.noun;
    } else if (type === 'word') {
      textOf = x => x.word;
      label = 'Which word fits this meaning?';
      prompt = esc(w.definition);
      correctText = w.word;
    } else {
      textOf = x => x.word;
      label = 'Fill in the blank';
      prompt = esc(clozeFor(w));
      correctText = w.word;
    }
    const d = pickDistractors(w, textOf, k);
    if (!d) return null;
    const options = shuffle([{ text: correctText, correct: true }].concat(d.map(x => ({ text: textOf(x), correct: false }))));
    return { kind: 'mc', type, word: w.word, label, prompt, options, w };
  }

  // ---------- open-ended ----------
  function buildOpen(type, words) {
    const topic = TOPICS[Math.floor(Math.random() * TOPICS.length)];
    if (type === 'sentence') {
      const w = words[0];
      return { kind: 'open', type, words: [w], word: w.word, label: 'Use it in a sentence',
        prompt: 'Write one natural sentence using <b>' + esc(w.word) + '</b>.', topic };
    }
    if (type === 'define') {
      const w = words[0];
      return { kind: 'open', type, words: [w], word: w.word, label: 'Explain it',
        prompt: 'Explain <b>' + esc(w.word) + '</b> in your own words (no copying), then describe a real situation where you would use it.', topic: null };
    }
    return { kind: 'open', type, words, word: words.map(x => x.word).join(', '), label: 'Mini paragraph',
      prompt: 'Write 3 to 4 sentences about the topic below using all of these words: ' + words.map(x => '<b>' + esc(x.word) + '</b>').join(', ') + '.', topic };
  }

  function buildQuiz(cfg) {
    const qs = [];
    const mcWords = sampleWords(cfg.mc, cfg.mode);
    mcWords.forEach((w, i) => {
      const types = availableTypes(w);
      const type = types[(i + Math.floor(Math.random() * 3)) % types.length];
      const q = buildMC(w, type) || buildMC(w, 'meaning');
      if (q) qs.push(q);
    });
    sampleWords(cfg.sentence, cfg.mode).forEach(w => qs.push(buildOpen('sentence', [w])));
    sampleWords(cfg.define, cfg.mode).forEach(w => qs.push(buildOpen('define', [w])));
    for (let i = 0; i < cfg.paragraph; i++) {
      const ws = sampleWords(3, cfg.mode);
      if (ws.length === 3) qs.push(buildOpen('paragraph', ws));
    }
    return qs;
  }

  // ---------- state + views ----------
  let state = null;
  let exitNote = '';

  function setNav(view) {
    currentView = view;
    document.querySelectorAll('nav .nav').forEach(b => b.classList.toggle('active', b.dataset.view === view));
  }
  document.querySelectorAll('nav .nav').forEach(b => b.addEventListener('click', () => {
    if (b.dataset.view === 'words') viewWords(); else if (b.dataset.view === 'progress') viewProgress(); else viewHome();
  }));

  function topicCounts() {
    const counts = {};
    WORDS.forEach(w => topicsOf(w).forEach(t => { counts[t] = (counts[t] || 0) + 1; }));
    const all = TOPIC_LIST.slice();
    Object.keys(counts).forEach(t => { if (!all.includes(t)) all.push(t); });
    return { counts, all };
  }
  const poolFor = sel => WORDS.filter(w => topicsOf(w).some(t => sel.includes(t)));

  function viewHome() {
    setNav('home');
    state = null;
    const { counts, all } = topicCounts();
    if (!Array.isArray(selTopics)) selTopics = all.filter(t => counts[t]);
    {
      let knownT = null;
      try { knownT = JSON.parse(localStorage.getItem('vocabTrainer.knownTopics.v1')); } catch (e) { knownT = null; }
      if (!Array.isArray(knownT)) knownT = all.filter(t => counts[t] && t !== 'conversational');
      all.filter(t => counts[t] && !knownT.includes(t) && !selTopics.includes(t)).forEach(t => selTopics.push(t));
      try { localStorage.setItem('vocabTrainer.knownTopics.v1', JSON.stringify(all.filter(t => counts[t]))); } catch (e) {}
      saveSel();
    }
    selTopics = selTopics.filter(t => counts[t]);
    const known = WORDS.filter(w => stats[w.word]).length;
    const tooFew = WORDS.length < 4;
    const hardN = WORDS.filter(isHard).length;
    const n0 = poolFor(selTopics).length;
    const note = exitNote;
    exitNote = '';
    app.innerHTML = `
      <div class="card">
        ${note ? '<p class="feedback" role="status" style="margin:0 0 18px">' + esc(note) + '</p>' : ''}
        <h2>Start a quiz</h2>
        <p class="muted">${WORDS.length.toLocaleString('en')} words, ${known.toLocaleString('en')} practised so far. Words you miss come back more often.</p>
        ${tooFew ? '<p class="feedback">Multiple choice needs at least 4 words in the database.</p>' : ''}
        <label id="topics-label">Topics</label>
        <div id="topics" role="group" aria-labelledby="topics-label">${all.map(t => `
          <label class="chk ${counts[t] ? '' : 'off'}" ${counts[t] ? '' : 'title="No words in this topic yet"'}><input type="checkbox" value="${esc(t)}" ${selTopics.includes(t) ? 'checked' : ''} ${counts[t] ? '' : 'disabled'}>${esc(t)} <span class="muted">${counts[t] || 0}</span></label>`).join('')}
        </div>
        <div class="actions" style="margin-top:12px"><button class="secondary" id="t-all">Select all</button><button class="secondary" id="t-none">Clear</button></div>
        <p class="muted" id="poolinfo" style="margin-top:12px"></p>
        <div class="row">
          <div><label for="c-mc">Multiple choice</label><input type="number" id="c-mc" min="0" value="${Math.min(25, n0)}"></div>
          <div><label for="c-sentence">Sentences</label><input type="number" id="c-sentence" min="0" value="0"></div>
          <div><label for="c-define">Explain it</label><input type="number" id="c-define" min="0" value="0"></div>
          <div><label for="c-paragraph">Paragraphs</label><input type="number" id="c-paragraph" min="0" value="0"></div>
        </div>
        <p class="hint">Written tasks are optional. Each paragraph task uses 3 words.</p>
        <label class="chk ${hardN ? '' : 'off'}"><input type="checkbox" id="c-hard" ${hardN ? '' : 'disabled'}>Only my hard words <span class="muted">${hardN}</span></label>
        <label for="c-mode">Word selection</label>
        <select id="c-mode">
          <option value="weighted">Weak and new words more often</option>
          <option value="uniform">All words equally</option>
        </select>
        <div class="actions"><button class="primary" id="start">Start quiz</button><button class="secondary" id="quick">Quick quiz, multiple choice</button></div>
      </div>
      <div class="card" id="daily"></div>
      <div class="card">
        <h2>How marking works</h2>
        <p class="muted">Multiple choice is marked as you go. For written tasks you can get AI feedback at the end with your own Groq key, or download your answers as a .md file to share with a teacher or tutor.</p>
      </div>`;

    renderDaily(false);
    const boxes = () => Array.from(document.querySelectorAll('#topics input'));
    function refresh() {
      selTopics = boxes().filter(b => b.checked).map(b => b.value);
      saveSel();
      const n = poolFor(selTopics).length;
      document.getElementById('poolinfo').textContent = n.toLocaleString('en') + ' word' + (n === 1 ? '' : 's') + ' in the selected topics.';
      document.getElementById('start').disabled = n === 0;
      document.getElementById('quick').disabled = n === 0;
    }
    boxes().forEach(b => b.addEventListener('change', refresh));
    document.getElementById('t-all').addEventListener('click', () => { boxes().forEach(b => { if (!b.disabled) b.checked = true; }); refresh(); });
    document.getElementById('t-none').addEventListener('click', () => { boxes().forEach(b => { b.checked = false; }); refresh(); });
    refresh();

    function launch(quick) {
      const hardOnly = document.getElementById('c-hard').checked;
      let pool = poolFor(selTopics);
      if (hardOnly) pool = pool.filter(isHard);
      if (!pool.length) { document.getElementById('poolinfo').textContent = 'No hard words in the selected topics yet.'; return; }
      activePool = pool;
      const num = id => Math.max(0, parseInt(document.getElementById(id).value, 10) || 0);
      const cfg = { mc: num('c-mc'), sentence: num('c-sentence'), define: num('c-define'), paragraph: num('c-paragraph'), mode: document.getElementById('c-mode').value };
      if (quick) { cfg.mc = cfg.mc || 25; cfg.sentence = 0; cfg.define = 0; cfg.paragraph = 0; }
      if (cfg.mc > 0 && tooFew) cfg.mc = 0;
      const questions = buildQuiz(cfg);
      if (!questions.length) return;
      state = { questions, i: 0, answers: [], started: new Date(), topics: hardOnly ? selTopics.concat(['(hard words only)']) : selTopics.slice(), hardOnly };
      viewQuestion();
    }
    document.getElementById('start').addEventListener('click', () => launch(false));
    document.getElementById('quick').addEventListener('click', () => launch(true));
  }

  function viewQuestion() {
    const q = state.questions[state.i];
    const total = state.questions.length;
    const pct = Math.round((state.i / total) * 100);
    let body = '';
    if (q.kind === 'mc') {
      body = q.options.map((o, idx) => `<button class="opt" data-i="${idx}">${esc(o.text)}</button>`).join('') + '<div id="fb"></div>';
    } else {
      body = (q.topic ? `<p class="hint" style="margin:-8px 0 14px">Topic idea: ${esc(q.topic)}. Any topic works too.</p>` : '') +
        `<textarea id="ans" aria-label="Your answer" placeholder="Your answer"></textarea>
         <div class="hint">Try it from memory before you look anything up.</div>
         <div class="actions"><button class="primary" id="next">${state.i + 1 === total ? 'Finish' : 'Next'}</button></div>`;
    }
    app.innerHTML = `
      <div class="card sheet">
        <div class="progress"><span>Question ${state.i + 1} of ${total}</span><button class="linkbtn" id="exit" type="button">End quiz</button></div>
        <div class="bar"><i style="width:${pct}%"></i></div>
        <div class="qtype">${esc(q.label)}</div>
        <div class="prompt">${q.prompt}</div>
        ${body}
      </div>`;

    document.getElementById('exit').addEventListener('click', endEarly);
    if (q.kind === 'mc') {
      app.querySelectorAll('.opt').forEach(btn => btn.addEventListener('click', () => answerMC(q, parseInt(btn.dataset.i, 10))));
    } else {
      const ta = document.getElementById('ans');
      ta.focus();
      document.getElementById('next').addEventListener('click', () => {
        state.answers[state.i] = ta.value.trim();
        advance();
      });
    }
  }

  function answerMC(q, idx) {
    const chosen = q.options[idx];
    const buttons = app.querySelectorAll('.opt');
    buttons.forEach((b, i) => {
      b.disabled = true;
      if (q.options[i].correct) b.classList.add('right');
      else if (i === idx) b.classList.add('wrong');
    });
    state.answers[state.i] = { text: chosen.text, correct: chosen.correct };
    const s = stats[q.word] || (stats[q.word] = { right: 0, wrong: 0 });
    if (chosen.correct) s.right++; else s.wrong++;
    s.last = Date.now();
    saveStats();
    const w = q.w;
    document.getElementById('fb').innerHTML = `
      <div class="feedback" role="status">
        <p class="verdict">${chosen.correct ? 'Correct' : 'Not quite'}</p>
        <p><b>${esc(w.word)}</b> ${w.pron ? '<span class="muted">' + esc(w.pron) + '</span> ' : ''}<span class="muted">${esc(w.pos || '')}</span><br>${esc(w.definition)}</p>
        ${w.example ? '<p><i>' + esc(w.example) + '</i></p>' : ''}
        ${w.replaces && w.replaces.length ? '<p class="muted">Use instead of: ' + w.replaces.map(esc).join(', ') + '</p>' : ''}
        <div>${w.level ? '<span class="tag">' + esc(w.level) + '</span>' : ''}${w.tone ? '<span class="tag">' + esc(w.tone) + '</span>' : ''}${w.collocations && w.collocations.length ? w.collocations.map(c => `<span class="tag">${esc(c)}</span>`).join('') : ''}</div>
      </div>
      <div class="actions"><button class="primary" id="next">${state.i + 1 === state.questions.length ? 'Finish' : 'Next'}</button></div>`;
    document.getElementById('next').addEventListener('click', advance);
  }

  function advance() {
    state.i++;
    if (state.i >= state.questions.length) viewResults(); else viewQuestion();
  }

  // Leave a quiz early. Multiple choice answers are already saved to the word stats
  // as they are picked, so here we only record the session and show a short note.
  // If written answers were typed, show the results screen so they are not lost.
  function endEarly() {
    const q = state.questions[state.i];
    if (q.kind === 'open') {
      const ta = document.getElementById('ans');
      if (ta && ta.value.trim()) state.answers[state.i] = ta.value.trim();
    }
    let n = 0;
    while (n < state.questions.length && state.answers[n] !== undefined) n++;
    const kept = state.questions.slice(0, n);
    if (!kept.length) { viewHome(); return; }
    const hasWritten = kept.some((x, i) => x.kind === 'open' && state.answers[i]);
    if (hasWritten) {
      state.plannedTotal = state.questions.length;
      state.questions = kept;
      state.endedEarly = true;
      viewResults();
      return;
    }
    const mc = kept.map((x, i) => ({ x, a: state.answers[i] })).filter(o => o.x.kind === 'mc');
    if (!mc.length) { viewHome(); return; }
    const right = mc.filter(o => o.a && o.a.correct).length;
    history.push({ t: state.started.getTime(), right, total: mc.length, open: 0, topics: state.topics || [], hard: !!state.hardOnly });
    saveHistory();
    const words = new Set(mc.map(o => o.x.word)).size;
    exitNote = 'Quiz ended. ' + words + ' word' + (words === 1 ? '' : 's') + ' saved to your progress (' + right + ' of ' + mc.length + ' right).';
    viewHome();
  }

  function viewResults() {
    const mcIdx = state.questions.map((q, i) => q.kind === 'mc' ? i : -1).filter(i => i >= 0);
    const right = mcIdx.filter(i => state.answers[i] && state.answers[i].correct).length;
    const misses = mcIdx.filter(i => !(state.answers[i] && state.answers[i].correct));
    const openCount = state.questions.length - mcIdx.length;
    if (!state.recorded) {
      state.recorded = true;
      history.push({ t: state.started.getTime(), right, total: mcIdx.length, open: openCount, topics: state.topics || [], hard: !!state.hardOnly });
      saveHistory();
    }
    app.innerHTML = `
      <div class="card sheet">
        <h2>${state.endedEarly ? 'Quiz ended early' : 'Quiz complete'}</h2>
        ${state.endedEarly ? `<p class="muted">You answered ${state.questions.length} of ${state.plannedTotal} questions. Your progress is saved.</p>` : ''}
        ${mcIdx.length ? `<div class="score">${right} / ${mcIdx.length}</div><div class="muted">multiple choice</div>` : ''}
        ${openCount ? `<p style="margin-top:14px">${openCount} written answer${openCount > 1 ? 's' : ''} still to mark.</p>` : ''}
        <div class="actions">
          <button class="primary" id="dl">Download answers (.md)</button>
          <button class="secondary" id="again">Start another</button>
        </div>
        ${openCount ? '<p class="hint">Send the file to a teacher or tutor for feedback on your written answers.</p>' : ''}
      </div>
      <div id="grader"></div>
      ${misses.length ? '<div class="card"><h2>Words you missed</h2>' + misses.map(i => {
        const q = state.questions[i], w = q.w;
        return `<div class="miss"><b>${esc(w.word)}</b> <span class="muted">${esc(w.pos || '')}</span><br>${esc(w.definition)}<br><i>${esc(w.example || '')}</i></div>`;
      }).join('') + '</div>' : ''}`;
    document.getElementById('dl').addEventListener('click', downloadMD);
    document.getElementById('again').addEventListener('click', viewHome);
    setupGrader();
  }

  // ---------- markdown export ----------
  function quote(text) {
    if (!text) return '> (no answer)';
    return text.split('\n').map(l => '> ' + l).join('\n');
  }
  const plain = html => html.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

  function buildMD() {
    const d = state.started;
    const stamp = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
    const mc = state.questions.map((q, i) => ({ q, a: state.answers[i], n: i + 1 })).filter(x => x.q.kind === 'mc');
    const open = state.questions.map((q, i) => ({ q, a: state.answers[i], n: i + 1 })).filter(x => x.q.kind === 'open');
    const right = mc.filter(x => x.a && x.a.correct).length;
    let md = `# Vocab quiz, ${stamp}\n\n`;
    if (mc.length) md += `Multiple choice (auto-graded): **${right} / ${mc.length}**\n\n`;
    md += `Topics covered: ${(state.topics || []).join(', ')}\n\n`;
    md += `## Instructions for the grader\n\n` +
      `Please grade Part 2 (open-ended). For each answer give a score out of 5 and short feedback on:\n` +
      `1. Meaning: is the word used with its correct meaning?\n` +
      `2. Grammar: correct form (tense, part of speech, plural) and sentence structure.\n` +
      `3. Naturalness: does it sound like something a fluent speaker would write, with natural collocations?\n` +
      `4. Register: suitable for academic English?\n\n` +
      `Then show a corrected or improved version of each sentence, keeping my own wording where possible. ` +
      `List the words I should review, and give me 3 new practice prompts for the weakest ones.\n\n`;
    if (mc.length) {
      md += `## Part 1: Multiple choice (already graded)\n\n`;
      mc.forEach(({ q, a, n }) => {
        const correct = q.options.find(o => o.correct).text;
        md += `### ${n}. ${q.word} (${q.label})\n` +
          `- Topic: ${topicsOf(q.w).join(', ')}\n` +
          `- Question: ${plain(q.prompt)}\n` +
          `- My answer: ${a ? a.text : '(none)'}\n` +
          `- Correct answer: ${correct}\n` +
          `- Result: ${a && a.correct ? 'correct' : 'wrong'}\n\n`;
      });
    }
    if (open.length) {
      md += `## Part 2: Open-ended (please grade)\n\n`;
      open.forEach(({ q, a, n }) => {
        md += `### ${n}. ${q.label}: ${q.word}\n` +
          `- Task: ${plain(q.prompt)}\n`;
        q.words.forEach(w => { md += `- Reference, ${w.word} (${w.pos || ''}): ${w.definition}\n`; });
        if (q.topic) md += `- Topic idea: ${q.topic}\n`;
        md += `- My answer:\n\n${quote(a)}\n\n- Score: \n- Feedback: \n\n`;
      });
    }
    return md;
  }

  function downloadMD() {
    const d = state.started;
    const name = `quiz-${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}.md`;
    const blob = new Blob([buildMD()], { type: 'text/markdown;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }


  // ---------- AI grading through the local server (Groq) ----------
  const GRADER_SYSTEM = [
    'You are a supportive but accurate English tutor for a university student learning academic English (about B2 to C1).',
    'You receive open-ended vocabulary answers. For each item judge: (1) is the target word used with its correct meaning, (2) grammar and word form, (3) naturalness and collocations, (4) suitability for academic register.',
    'Keep the student\'s own wording wherever possible in the improved version; change only what is wrong or unnatural.',
    'If an answer is empty, give score 0.',
    'Score each item from 0 to 5 (5 = natural and correct). Reply with JSON only, no markdown, in this exact shape:',
    '{"results":[{"n":<item number>,"score":<0-5>,"feedback":"<2 to 3 short sentences>","improved":"<improved version, or the same text if already good>"}],"review_words":["<words to revise>"]}'
  ].join('\n');

  const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';
  const GROQ_KEY_STORE = 'vocabTrainer.groqKey.v1';

  async function setupGrader() {
    const box = document.getElementById('grader');
    if (!box) return;
    const open = state.questions.map((q, i) => ({ q, a: state.answers[i], n: i + 1 })).filter(x => x.q.kind === 'open');
    if (!open.length) return;
    let ok = false;
    try { const r = await fetch('/api/health'); ok = r.ok && (await r.json()).groq === true; } catch (e) { ok = false; }
    // No local server found (for example on the hosted site): bring your own Groq key.
    const useKey = !ok;
    let savedKey = '';
    try { savedKey = localStorage.getItem(GROQ_KEY_STORE) || ''; } catch (e) {}
    const keyBlock = useKey ? `<label for="g-key">Your Groq API key</label>
      <input type="password" id="g-key" autocomplete="off" placeholder="gsk_..." value="${esc(savedKey)}">
      <p class="hint">Get a free key at console.groq.com. It stays in this browser and is only sent to Groq.</p>
      <label class="chk" style="margin:10px 0 0"><input type="checkbox" id="g-remember" ${savedKey ? 'checked' : ''}>Remember it on this device</label>` : '';
    box.innerHTML = `<div class="card"><h2>Get AI feedback</h2>
      ${keyBlock}
      <label for="g-model">Model</label>
      <select id="g-model">
        <option value="openai/gpt-oss-120b">openai/gpt-oss-120b (best)</option>
        <option value="llama-3.3-70b-versatile">llama-3.3-70b-versatile</option>
        <option value="openai/gpt-oss-20b">openai/gpt-oss-20b (fast)</option>
      </select>
      <div class="actions"><button class="primary" id="g-go">Grade ${open.length} written answer${open.length > 1 ? 's' : ''}</button></div>
      <div id="g-out"></div></div>`;
    document.getElementById('g-go').addEventListener('click', async () => {
      const btn = document.getElementById('g-go');
      const out = document.getElementById('g-out');
      const model = document.getElementById('g-model').value;
      btn.disabled = true; out.innerHTML = '<p class="muted" role="status">Grading your answers...</p>';
      const items = open.map(({ q, a, n }) => ({
        n, type: q.label, task: plain(q.prompt),
        target_words: q.words.map(w => ({ word: w.word, pos: w.pos, definition: w.definition })),
        answer: a || ''
      }));
      try {
        const messages = [{ role: 'system', content: GRADER_SYSTEM }, { role: 'user', content: JSON.stringify({ items }) }];
        let txt;
        if (useKey) {
          const key = (document.getElementById('g-key').value || '').trim();
          if (!key) throw new Error('Paste your Groq API key first.');
          try { if (document.getElementById('g-remember').checked) localStorage.setItem(GROQ_KEY_STORE, key); else localStorage.removeItem(GROQ_KEY_STORE); } catch (e) {}
          const r = await fetch(GROQ_URL, {
            method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key },
            body: JSON.stringify({ model, messages, temperature: 0.2, max_tokens: 6000 })
          });
          const data = await r.json().catch(() => ({}));
          if (!r.ok) throw new Error((data.error && data.error.message) || 'Groq returned ' + r.status + '.');
          txt = (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || '';
        } else {
          const r = await fetch('/api/grade', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ model, messages })
          });
          const data = await r.json();
          if (!r.ok) throw new Error(data.error || 'Grading failed.');
          txt = data.content || '';
        }
        const parsed = JSON.parse(txt.slice(txt.indexOf('{'), txt.lastIndexOf('}') + 1));
        const results = parsed.results || [];
        if (!state.graded) {
          state.graded = true;
          results.forEach(res => {
            const it = open.find(x => x.n === res.n); if (!it) return;
            it.q.words.forEach(w => {
              const s = stats[w.word] || (stats[w.word] = { right: 0, wrong: 0 });
              if (Number(res.score) >= 4) s.right++; else s.wrong++;
              s.last = Date.now();
            });
          });
          saveStats();
        }
        out.innerHTML = results.map(res => {
          const it = open.find(x => x.n === res.n);
          return `<div class="miss"><b>${it ? esc(it.q.word) : 'Item ' + esc(res.n)}</b> <span class="tag" style="margin-top:0">${esc(res.score)} / 5</span><br>${esc(res.feedback || '')}<br><i>${esc(res.improved || '')}</i></div>`;
        }).join('') + (parsed.review_words && parsed.review_words.length ? `<p class="muted">Review: ${parsed.review_words.map(esc).join(', ')}</p>` : '') +
          '<div class="actions"><button class="secondary" id="g-dl">Download graded .md</button></div>';
        document.getElementById('g-dl').addEventListener('click', () => {
          let md = buildMD() + `\n## Groq feedback (${model})\n\n`;
          results.forEach(res => {
            const it = open.find(x => x.n === res.n);
            md += `### ${res.n}. ${it ? it.q.word : ''}\n- Score: ${res.score} / 5\n- Feedback: ${res.feedback || ''}\n- Improved: ${res.improved || ''}\n\n`;
          });
          const d = state.started, pad2 = n => String(n).padStart(2, '0');
          const name = `quiz-${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}-${pad2(d.getHours())}${pad2(d.getMinutes())}-graded.md`;
          const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
          const el = document.createElement('a'); el.href = URL.createObjectURL(blob); el.download = name;
          document.body.appendChild(el); el.click(); setTimeout(() => { URL.revokeObjectURL(el.href); el.remove(); }, 500);
        });
      } catch (e) {
        out.innerHTML = '<p class="feedback">' + esc(e.message || e) + '</p>';
      } finally { btn.disabled = false; }
    });
  }


  // ---------- phrases to see today ----------
  function renderDaily(reshuffle) {
    const box = document.getElementById('daily');
    if (!box) return;
    const pool = WORDS.filter(w => topicsOf(w).includes('conversational'));
    if (!pool.length) { box.style.display = 'none'; return; }
    const n = Math.min(5, pool.length);
    let picks;
    if (reshuffle) {
      picks = shuffle(pool).slice(0, n);
    } else {
      const t = new Date();
      const day = Math.floor(new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() / 86400000);
      picks = Array.from({ length: n }, (_, i) => pool[(day * n + i) % pool.length]);
    }
    box.innerHTML = `<h2>Phrases to use today</h2>
      <p class="muted">Try to use at least one of these in your next message, email or class discussion.</p>` +
      picks.map(w => `<div class="pick"><b>${esc(w.word)}</b> <span class="tag">${esc(w.level || '')}</span>${w.replaces && w.replaces.length ? ' <span class="muted">instead of: ' + w.replaces.map(esc).join(', ') + '</span>' : ''}<br>${esc(w.definition)}<br><i>${esc(w.example || '')}</i></div>`).join('') +
      '<div class="actions"><button class="secondary" id="d-more">Show different ones</button></div>';
    document.getElementById('d-more').addEventListener('click', () => renderDaily(true));
  }


  // ---------- progress tab ----------
  function startHard() {
    const hard = WORDS.filter(isHard);
    if (!hard.length) return;
    activePool = hard;
    const cfg = { mc: Math.min(25, hard.length), sentence: 0, define: 0, paragraph: 0, mode: 'weighted' };
    const questions = buildQuiz(cfg);
    if (!questions.length) return;
    state = { questions, i: 0, answers: [], started: new Date(), topics: ['(hard words only)'], hardOnly: true };
    viewQuestion();
  }

  function viewProgress() {
    setNav('progress');
    state = null;
    const { counts, all } = topicCounts();
    const hard = WORDS.filter(isHard).sort((x, y) => ((stats[y.word].wrong || 0) - (stats[y.word].right || 0)) - ((stats[x.word].wrong || 0) - (stats[x.word].right || 0)));
    const topicRows = all.filter(t => counts[t]).map(t => {
      let r = 0, w = 0, seen = 0;
      WORDS.forEach(x => { if (!topicsOf(x).includes(t)) return; const s = stats[x.word]; if (s) { seen++; r += s.right || 0; w += s.wrong || 0; } });
      return `<tr><td>${esc(t)}</td><td>${seen} / ${counts[t]}</td><td>${r + w ? Math.round(100 * r / (r + w)) + '%' : '-'}</td></tr>`;
    }).join('');
    const sessRows = history.slice(-20).reverse().map(h => {
      const d = new Date(h.t);
      const tp = h.topics || [];
      const topicText = tp.length > 3 ? tp.length + ' topics' : tp.join(', ');
      return `<tr><td>${d.toLocaleDateString()} ${pad(d.getHours())}:${pad(d.getMinutes())}</td><td>${esc(topicText)}</td><td>${h.total ? h.right + ' / ' + h.total : '-'}</td></tr>`;
    }).join('');
    const HARD_SHOW = 10;
    const hardCard = `
      <div class="card">
        <h2>Hard words (${hard.length})</h2>
        <p class="muted">Words you have missed and not yet answered right more often than wrong. They drop off this list as you learn them.</p>
        ${hard.length ? `<div class="actions" style="margin:6px 0 10px"><button class="primary" id="p-hard">Practise my hard words</button></div>
        <table><thead><tr><th>Word</th><th>Meaning</th><th title="Right / wrong">Score</th></tr></thead><tbody>${hard.map((w, i) => `<tr class="${i >= HARD_SHOW ? 'hard-extra' : ''}"${i >= HARD_SHOW ? ' style="display:none"' : ''}><td><b>${esc(w.word)}</b></td><td>${esc(w.definition)}</td><td>${stats[w.word].right || 0} / ${stats[w.word].wrong || 0}</td></tr>`).join('')}</tbody></table>
        ${hard.length > HARD_SHOW ? `<div class="actions"><button class="secondary" id="p-more">See more (${hard.length - HARD_SHOW} more)</button></div>` : ''}` : '<p>No hard words yet. Take a quiz and the words you miss will show up here.</p>'}
      </div>`;
    app.innerHTML = `
      <div class="card">
        <h2>By topic</h2>
        <table><thead><tr><th>Topic</th><th>Words practised</th><th>Accuracy</th></tr></thead><tbody>${topicRows}</tbody></table>
      </div>
      <div class="card">
        <h2>Recent sessions</h2>
        ${sessRows ? `<table><thead><tr><th>When</th><th>Topics</th><th>Multiple choice</th></tr></thead><tbody>${sessRows}</tbody></table>` : '<p class="muted">No sessions yet.</p>'}
      </div>
      <div class="card">
        <h2>Backup</h2>
        <p class="muted">${serverOn ? 'Your progress is also saved to a file next to the app.' : 'Your progress is saved in this browser only. Download a backup to keep a copy or move it to another device.'}</p>
        <div class="actions"><button class="secondary" id="p-dl">Download backup</button><button class="secondary" id="p-up">Restore backup</button><input type="file" id="p-file" accept=".json" style="display:none"></div>
        <p class="hint" id="p-msg"></p>
      </div>
      ${hardCard}`;
    const hb = document.getElementById('p-hard');
    if (hb) hb.addEventListener('click', startHard);
    const more = document.getElementById('p-more');
    if (more) {
      let expanded = false;
      more.addEventListener('click', () => {
        expanded = !expanded;
        document.querySelectorAll('.hard-extra').forEach(r => { r.style.display = expanded ? '' : 'none'; });
        more.textContent = expanded ? 'See less' : 'See more (' + (hard.length - HARD_SHOW) + ' more)';
      });
    }
    document.getElementById('p-dl').addEventListener('click', () => {
      const blob = new Blob([JSON.stringify({ stats, history, exported: new Date().toISOString() }, null, 1)], { type: 'application/json' });
      const el = document.createElement('a'); el.href = URL.createObjectURL(blob); el.download = 'vocab-trainer-progress.json';
      document.body.appendChild(el); el.click(); setTimeout(() => { URL.revokeObjectURL(el.href); el.remove(); }, 500);
    });
    document.getElementById('p-up').addEventListener('click', () => document.getElementById('p-file').click());
    document.getElementById('p-file').addEventListener('change', e => {
      const f = e.target.files[0]; if (!f) return;
      const rd = new FileReader();
      rd.onload = () => {
        try { mergeProgress(JSON.parse(rd.result)); saveStats(); saveHistory(); viewProgress(); document.getElementById('p-msg').textContent = 'Backup restored.'; }
        catch (err) { document.getElementById('p-msg').textContent = 'That file could not be read.'; }
      };
      rd.readAsText(f);
    });
  }

  // ---------- words list ----------
  function viewWords() {
    setNav('words');
    const { counts, all } = topicCounts();
    app.innerHTML = `
      <div class="card">
        <h2>Words (${WORDS.length.toLocaleString('en')})</h2>
        <div class="row">
          <div><input type="text" id="q" aria-label="Search words" placeholder="Search words"></div>
          <div><select id="tf" aria-label="Filter by topic"><option value="">All topics</option>${all.filter(t => counts[t]).map(t => `<option>${esc(t)}</option>`).join('')}</select></div>
        </div>
        <table><thead><tr><th>Word</th><th>Meaning</th><th title="Right / wrong">Score</th></tr></thead><tbody id="rows"></tbody></table>
        <div class="actions"><button class="secondary" id="reset">Reset progress</button></div>
      </div>`;
    const rows = document.getElementById('rows');
    function draw() {
      const f = document.getElementById('q').value.toLowerCase();
      const tf = document.getElementById('tf').value;
      rows.innerHTML = WORDS.filter(w => (!f || w.word.toLowerCase().includes(f) || w.definition.toLowerCase().includes(f)) && (!tf || topicsOf(w).includes(tf)))
        .sort((a, b) => a.word.localeCompare(b.word))
        .map(w => {
          const s = stats[w.word];
          return `<tr><td><b>${esc(w.word)}</b><br><span class="muted">${esc(w.pos || '')}</span></td>
            <td>${esc(w.definition)}<br><i class="muted">${esc(w.example || '')}</i><br>${topicsOf(w).map(t => `<span class="tag">${esc(t)}</span>`).join('')}</td>
            <td>${s ? s.right + ' / ' + s.wrong : '-'}</td></tr>`;
        }).join('');
    }
    draw();
    document.getElementById('q').addEventListener('input', draw);
    document.getElementById('tf').addEventListener('change', draw);
    document.getElementById('reset').addEventListener('click', () => {
      if (confirm('Reset all progress and history? Your words stay.')) { stats = {}; history = []; saveStats(); saveHistory(); draw(); }
    });
  }

  // exposed for testing
  window.__vt = { WORDS, buildMC, pickDistractors, buildQuiz, buildMD: null };
  viewHome();
  syncFromServer();
})();
