// Interactive ASCII field for desktop side gutters.
// Hover = glow · click = shockwave · press & drag = glyph trail. Centre column ignores input.
(function () {
  if (window.__asciiField) return; window.__asciiField = 1;
  const RAMP = ' .·:-=+*%#@';
  const GLY = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#%&*<>/=+';
  const CHARS = Array.from(new Set((RAMP + GLY).split(''))).filter(c => c !== ' ');
  const CELL = 14, MIN_W = 1100, PAD = 40, DOCK = 74;
  const FPS_ACTIVE = 30, FPS_IDLE = 10, IDLE_AFTER = 1500;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const tScale = reduce ? 0.15 : 1;
  let cv, ctx, dpr = 1, w = 0, h = 0, mx = -1e4, my = -1e4, mAct = 0, last = 0, lastInput = 0;
  let enabled = localStorage.getItem('am-ascii') === 'on', btn = null;
  const FADE_MS = 900; let fadeFrom = enabled ? 1 : 0, fadeT0 = -1e9, busyAnim = false;
  const fadeP = ts => { const k = Math.min(1, (ts - fadeT0) / FADE_MS); const e = 1 - Math.pow(1 - k, 3); return fadeFrom + ((enabled ? 1 : 0) - fadeFrom) * e; };
  let waves = [], trail = [], down = false, lastPt = null, focused = true, atlas = null, colors = {};
  const now = () => performance.now() / 1000 * tScale;

  function css(n, f) { const v = getComputedStyle(document.documentElement).getPropertyValue(n).trim(); return v || f; }
  function buildAtlas() {
    // Pre-render every glyph once per colour; frames then just blit sprites.
    const fs = 12, cw = CELL * dpr, sheet = document.createElement('canvas');
    sheet.width = cw * CHARS.length; sheet.height = cw * 2;
    const c = sheet.getContext('2d');
    c.font = `500 ${fs * dpr}px "Geist Mono", ui-monospace, monospace`; c.textAlign = 'center'; c.textBaseline = 'middle';
    [colors.dim, colors.hot].forEach((col, row) => { c.fillStyle = col; CHARS.forEach((ch, i) => c.fillText(ch, i * cw + cw / 2, row * cw + cw / 2)); });
    const idx = {}; CHARS.forEach((ch, i) => idx[ch] = i);
    atlas = { sheet, cw, idx };
  }
  function readColors() {
    const n = { dim: css('--text-subtle', '#6B6B6B'), hot: css('--text-strong', '#FFFFFF') };
    if (n.dim !== colors.dim || n.hot !== colors.hot) { colors = n; if (ctx) buildAtlas(); }
  }
  function size() {
    dpr = Math.min(2, devicePixelRatio || 1); w = innerWidth; h = innerHeight;
    cv.width = w * dpr; cv.height = h * dpr; cv.style.width = w + 'px'; cv.style.height = h + 'px';
    ctx.setTransform(1, 0, 0, 1, 0, 0); buildAtlas(); lastInput = performance.now();
  }
  function hash(a, b) { const x = Math.sin(a * 127.1 + b * 311.7) * 43758.5453; return x - Math.floor(x); }
  function column() {
    const el = document.querySelector('[data-ascii-col]') || document.querySelector('main') || document.querySelector('doc-page');
    const r = el ? el.getBoundingClientRect() : null;
    if (!r || r.width < 200 || r.width > w - 200) return { l: (w - 720) / 2 - PAD, r: (w + 720) / 2 + PAD };
    return { l: r.left - PAD + 20, r: r.right + PAD - 20 };
  }
  const inGutter = x => { const c = column(); return enabled && w >= MIN_W && x > DOCK && (x < c.l || x > c.r); };
  const blit = (ch, hot, x, y) => { const i = atlas.idx[ch]; if (i === undefined) return; const s = atlas.cw; ctx.drawImage(atlas.sheet, i * s, hot ? s : 0, s, s, (x - CELL / 2) * dpr, (y - CELL / 2) * dpr, s, s); };

  function frame(ts) {
    requestAnimationFrame(frame);
    placeButton();
    const fp = fadeP(ts), fading = ts - fadeT0 < FADE_MS;
    if (fp <= 0.001 || w < MIN_W || document.hidden || !focused) { if (last !== -1) { ctx.clearRect(0, 0, cv.width, cv.height); last = -1; } return; }
    const t = now();
    const busy = fading || down || waves.length || trail.length || ts - lastInput < IDLE_AFTER;
    if (ts - last < 1000 / (busy ? FPS_ACTIVE : FPS_IDLE)) return; last = ts;
    const col = column(), sy = scrollY * 0.15;
    ctx.clearRect(0, 0, cv.width, cv.height);
    mAct += ((mx > 0 ? 1 : 0) - mAct) * 0.15;
    waves = waves.filter(v => t - v.t < 2.6);
    trail = trail.filter(p => t - p.t < 1.4);
    const cols = Math.ceil(w / CELL), rows = Math.ceil(h / CELL) + 1, off = sy % CELL;
    for (let cx = 0; cx < cols; cx++) {
      const x = cx * CELL + CELL / 2;
      if (x < DOCK || (x > col.l && x < col.r)) continue;
      const edge = x < col.l ? Math.min(1, (col.l - x) / 140) : Math.min(1, (x - col.r) / 140);
      const outer = x < col.l ? Math.min(1, (x - DOCK) / 80) : Math.min(1, (w - x) / 60);
      const ef = edge * outer;
      for (let ry = 0; ry < rows; ry++) {
        const y = ry * CELL + CELL / 2 - off, wy = y + sy;
        let v = 0.5 + 0.5 * Math.sin(x * 0.012 + t * 0.6 + Math.sin(wy * 0.009 - t * 0.4) * 2.2) * Math.cos(wy * 0.011 + t * 0.35 + Math.cos(x * 0.008) * 1.6);
        v = Math.pow(v, 2.2) * 0.75;
        const dx = x - mx, dy = y - my;
        let glow = 0; if (mAct > 0.01 && Math.abs(dx) < 150 && Math.abs(dy) < 150) { glow = mAct * Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / 150); glow *= glow; }
        let hit = 0;
        for (const wv of waves) {
          const age = t - wv.t, rad = age * 520, wd = Math.sqrt((x - wv.x) ** 2 + (y - wv.y) ** 2);
          hit = Math.max(hit, Math.max(0, 1 - Math.abs(wd - rad) / 46) * Math.max(0, 1 - age / 2.6));
        }
        let ink = 0;
        for (let i = 0; i < trail.length; i++) {
          const p = trail[i], tx = x - p.x, ty = y - p.y; if (Math.abs(tx) > 60 || Math.abs(ty) > 60) continue;
          const age = (t - p.t) / 1.4, rr = 22 + age * 30;
          ink = Math.max(ink, Math.max(0, 1 - Math.sqrt(tx * tx + ty * ty) / rr) * (1 - age));
        }
        const k = Math.min(1, (v + glow * 0.9 + hit + ink * 1.2) * ef);
        if (k < 0.06) continue;
        let edgeCell = false;
        if (fp < 1) { const th = hash(cx * 0.37, ry * 0.91) * 0.85 + (1 - ry / rows) * 0.15; if (th > fp) continue; edgeCell = fp - th < 0.12; }
        let ch = RAMP[Math.min(RAMP.length - 1, Math.floor(k * RAMP.length))];
        if (ink > 0.25 || hit > 0.35 || (glow > 0.4 && hash(cx, ry + Math.floor(t * 10)) > 0.7)) ch = GLY[Math.floor(hash(cx + Math.floor(t * 18), ry) * GLY.length)];
        if (edgeCell) ch = GLY[Math.floor(hash(cx + Math.floor(t * 30), ry + 7) * GLY.length)];
        const hot = edgeCell || ink > 0.2 || hit > 0.3 || glow > 0.5;
        ctx.globalAlpha = hot ? Math.min(1, 0.35 + k) : 0.18 + k * 0.6;
        blit(ch, hot, x, y);
      }
    }
    ctx.globalAlpha = 1;
  }
  function addTrail(x, y) {
    const t = now();
    if (lastPt) { // fill gaps on fast drags
      const d = Math.hypot(x - lastPt.x, y - lastPt.y), n = Math.min(12, Math.floor(d / 10));
      for (let i = 1; i <= n; i++) { const px = lastPt.x + (x - lastPt.x) * i / (n + 1), py = lastPt.y + (y - lastPt.y) * i / (n + 1); if (inGutter(px)) trail.push({ x: px, y: py, t }); }
    }
    if (inGutter(x)) trail.push({ x, y, t });
    lastPt = { x, y };
    if (trail.length > 260) trail.splice(0, trail.length - 260);
  }
  const interactive = el => el && el.closest && el.closest('a,button,input,textarea,select,label,[role="button"],[contenteditable],canvas:not([data-ascii])');
  function init() {
    cv = document.createElement('canvas'); cv.setAttribute('aria-hidden', 'true'); cv.dataset.ascii = '1';
    cv.style.cssText = 'position:fixed;inset:0;z-index:1;pointer-events:none';
    document.body.appendChild(cv); ctx = cv.getContext('2d');
    colors = { dim: css('--text-subtle', '#6B6B6B'), hot: css('--text-strong', '#FFFFFF') };
    size(); focused = document.hasFocus() || window.top !== window;
    addEventListener('resize', size);
    addEventListener('focus', () => { focused = true; lastInput = performance.now(); });
    addEventListener('blur', () => { focused = false; down = false; });
    addEventListener('pointermove', e => {
      if (e.pointerType !== 'mouse') return;
      mx = e.clientX; my = e.clientY; lastInput = performance.now(); focused = true;
      if (down) addTrail(e.clientX, e.clientY);
    }, { passive: true });
    document.addEventListener('mouseleave', () => { mx = my = -1e4; down = false; });
    addEventListener('pointerdown', e => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      if (!inGutter(e.clientX) || interactive(e.target)) return;
      e.preventDefault(); // no text selection while drawing
      down = true; lastPt = null; lastInput = performance.now();
      waves.push({ x: e.clientX, y: e.clientY, t: now() }); if (waves.length > 6) waves.shift();
      addTrail(e.clientX, e.clientY);
    });
    addEventListener('pointerup', () => { down = false; lastPt = null; });
    new MutationObserver(readColors).observe(document.documentElement, { attributes: true, attributeFilter: ['style', 'class', 'data-theme'] });
    makeButton();
    requestAnimationFrame(frame);
  }
  function paintBtn() {
    btn.setAttribute('aria-pressed', String(enabled));
    btn.title = enabled ? 'Turn ASCII off' : 'Turn ASCII on';
    btn.lastChild.textContent = enabled ? 'ASCII on' : 'ASCII off';
    btn.firstChild.style.opacity = enabled ? '1' : '.35';
  }
  function scrambleLabel() {
    const target = btn.lastChild.textContent, t0 = performance.now(), dur = 420;
    btn.firstChild.style.transform = 'scale(1.8)';
    setTimeout(() => { btn.firstChild.style.transform = 'scale(1)'; }, 160);
    const step = () => {
      const p = Math.min(1, (performance.now() - t0) / dur);
      btn.lastChild.textContent = target.split('').map((c, i) => c === ' ' || i / target.length < p ? c : GLY[Math.floor(Math.random() * GLY.length)]).join('');
      if (p < 1) requestAnimationFrame(step); else btn.lastChild.textContent = target;
    };
    step();
  }
  function placeButton() {
    const slot = document.querySelector('[data-ascii-toggle]');
    if (!slot) return;
    if (btn.parentNode !== slot) slot.appendChild(btn);
    const disp = w < MIN_W ? 'none' : 'inline-flex';
    if (slot.style.display !== disp) slot.style.display = disp;
  }
  function makeButton() {
    btn = document.createElement('button'); btn.type = 'button';
    btn.style.cssText = 'all:unset;outline:none;border:0;box-shadow:none;background:none;-webkit-tap-highlight-color:transparent;display:inline-flex;align-items:center;gap:6px;color:var(--text-subtle, #6B6B6B);font:inherit;cursor:pointer;transition:color 120ms cubic-bezier(.22,1,.36,1)';
    const dot = document.createElement('span'); dot.style.cssText = 'width:6px;height:6px;border-radius:9px;flex:none;background:var(--signal-live, #22C55E);transition:opacity 300ms cubic-bezier(.22,1,.36,1), transform 200ms cubic-bezier(.22,1,.36,1)';
    const lbl = document.createElement('span'); lbl.style.cssText = 'display:inline-block;min-width:9ch;font-variant-numeric:tabular-nums'; btn.append(dot, lbl);
    btn.addEventListener('mouseenter', () => { btn.style.color = 'var(--text-strong, #FFFFFF)'; });
    btn.addEventListener('mouseleave', () => { btn.style.color = 'var(--text-subtle, #6B6B6B)'; });
        btn.addEventListener('click', () => {
      if (busyAnim) return;
      const ts = performance.now(); fadeFrom = fadeP(ts); fadeT0 = ts;
      enabled = !enabled; localStorage.setItem('am-ascii', enabled ? 'on' : 'off');
      waves = []; trail = []; down = false; last = 0; lastInput = ts;
      busyAnim = true; btn.style.cursor = 'default'; btn.setAttribute('aria-busy', 'true');
      paintBtn(); scrambleLabel();
      setTimeout(() => { busyAnim = false; btn.style.cursor = 'pointer'; btn.removeAttribute('aria-busy'); }, FADE_MS);
    });
    paintBtn(); placeButton();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
