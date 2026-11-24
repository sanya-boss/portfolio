/* Reveal-on-scroll + off-screen pause for infinite CSS animations.
   Blocks start hidden via html.rv [data-rv] (js/reveal.css), set by the inline <head> snippet.
   They are revealed by IntersectionObserver right at the bottom edge of the viewport, with a
   ~110ms stagger for blocks entering together. Anything scrolled past (keyboard, anchors) is
   revealed by a light scroll sweep, so fast scrolling never leaves hidden blocks on screen. */
(function () {
  'use strict';
  var root = document.documentElement;
  var reveal = root.classList.contains('rv') && 'IntersectionObserver' in window;
  var STEP = 110, MAX_STEPS = 4, DONE_AFTER = 1300;
  var SKIP = 'header, [data-noreveal], [data-noprint], script, style, template';
  var seen = new WeakSet(), pending = new Set(), settled = false;

  function byDocOrder(a, b) { return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1; }

  function go(list) {
    var i = 0;
    list.sort(byDocOrder).forEach(function (el) {
      if (!pending.has(el)) return;
      pending.delete(el); ioText.unobserve(el); ioMedia.unobserve(el);
      // Only blocks actually on screen queue up; ones already scrolled past appear at once.
      var d = el.getBoundingClientRect().bottom > 0 ? Math.min(i++, MAX_STEPS) * STEP : 0;
      if (d) el.style.setProperty('--rv-d', d + 'ms');
      el.classList.add('rv-go');
      setTimeout(function () { el.classList.remove('rv-go'); el.removeAttribute('data-rv'); el.style.removeProperty('--rv-d'); }, d + DONE_AFTER);
    });
  }
  function onEntries(es) {
    var l = [];
    es.forEach(function (e) { if (e.isIntersecting || e.boundingClientRect.bottom < 0) l.push(e.target); });
    if (l.length) go(l);
  }
  var ioText = reveal ? new IntersectionObserver(onEntries, { rootMargin: '0px' }) : null;
  var ioMedia = reveal ? new IntersectionObserver(onEntries, { rootMargin: '0px 0px 4% 0px' }) : null;
  // Media loads ~1.5 screens before it appears, so the curtain never waits for the network.
  var ioLazy = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.loading = 'eager'; if (e.target.preload === 'none') e.target.preload = 'metadata'; ioLazy.unobserve(e.target); } });
  }, { rootMargin: '150% 0px' }) : null;

  function isWrapper(el, depth) {
    if (depth > 4 || el.childElementCount < 2) return false;
    if (!/^(DIV|SECTION|ARTICLE|UL|OL)$/.test(el.tagName)) return false;
    if (typeof el.className === 'string' && /\bam-/.test(el.className)) return false;
    for (var n = el.firstChild; n; n = n.nextSibling) if (n.nodeType === 3 && n.data.trim()) return false;
    return true;
  }
  function mark(el, type, io) {
    if (seen.has(el)) return;
    seen.add(el);
    var r = el.getBoundingClientRect();
    if (!r.height || !r.width) { seen.delete(el); return; } // collapsed now; try again on a later scan
    if (settled && r.top < window.innerHeight) return;       // re-rendered while visible: leave as is
    el.setAttribute('data-rv', type); pending.add(el); io.observe(el);
  }
  function walk(el, depth) {
    if (el.matches(SKIP)) return;
    var contents = getComputedStyle(el).display === 'contents';
    if (contents || isWrapper(el, depth)) { for (var c = el.firstElementChild; c; c = c.nextElementSibling) walk(c, depth + 1); return; }
    if (seen.has(el)) return;
    mark(el, /^H[1-3]$/.test(el.tagName) ? 'h' : 't', ioText);
    var media = el.matches('img,video') ? [el] : el.querySelectorAll('img,video');
    for (var i = 0; i < media.length; i++) {
      var m = media[i], mr = m.getBoundingClientRect();
      if (mr.width >= 120 && mr.height >= 80) mark(m, 'm', ioMedia);
    }
  }
  function scan() {
    if (reveal) {
      var mains = document.querySelectorAll('main');
      for (var i = 0; i < mains.length; i++) for (var c = mains[i].firstElementChild; c; c = c.nextElementSibling) walk(c, 0);
    }
    if (ioLazy) document.querySelectorAll('img[loading="lazy"]:not([data-rv-lazy]), video[preload="none"]:not([data-rv-lazy])').forEach(function (m) { m.setAttribute('data-rv-lazy', ''); ioLazy.observe(m); });
  }

  // Scroll sweep: reveal anything already above the viewport bottom (jumps, End key, anchors).
  var sweepT = 0;
  function sweep() {
    sweepT = 0;
    if (!pending.size) return;
    var h = window.innerHeight, l = [];
    pending.forEach(function (el) { if (el.getBoundingClientRect().top < h) l.push(el); });
    if (l.length) go(l);
  }
  if (reveal) window.addEventListener('scroll', function () { if (!sweepT) sweepT = setTimeout(sweep, 100); }, { passive: true });

  // Infinite decorative animations (pulse dots, shimmer) pause while off screen.
  var ioPause = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { e.target.classList.toggle('rv-paused', !e.isIntersecting); });
  }) : null;
  var pausedSeen = new WeakSet();
  function pauseScan() {
    if (!ioPause) return;
    var all = document.body.getElementsByTagName('*');
    for (var i = 0; i < all.length; i++) {
      var el = all[i];
      if (pausedSeen.has(el)) continue;
      var cs = getComputedStyle(el);
      if (cs.animationName !== 'none' && cs.animationIterationCount === 'infinite') { pausedSeen.add(el); ioPause.observe(el); }
    }
  }

  var queued = false;
  new MutationObserver(function (ms) {
    if (queued) return;
    for (var i = 0; i < ms.length; i++) for (var j = 0; j < ms[i].addedNodes.length; j++) {
      if (ms[i].addedNodes[j].nodeType === 1) { queued = true; queueMicrotask(function () { queued = false; scan(); }); return; }
    }
  }).observe(document.documentElement, { childList: true, subtree: true });

  function start() {
    scan();
    setTimeout(function () { settled = true; scan(); pauseScan(); }, 2500);
    setTimeout(pauseScan, 6000);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
  window.__rvOk = true;
})();
