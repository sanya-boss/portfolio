(function () {
  'use strict';
  var EASE = 0.1;      // доля оставшегося пути за кадр: меньше — плавнее и медленнее
  var MAX_LEAD = 0.3;  // насколько экранов цель может убегать вперёд: это ограничение скорости
  var STOP_AT = 1;
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var desktop = window.matchMedia ? matchMedia('(hover: hover) and (pointer: fine) and (min-width: 900px)') : null;
  var target = 0, raf = 0;
  function maxScroll() { return document.documentElement.scrollHeight - window.innerHeight; }
  function stop() { if (raf) cancelAnimationFrame(raf); raf = 0; }
  function frame() {
    var cur = window.scrollY, d = target - cur;
    if (Math.abs(d) <= STOP_AT) { window.scrollTo({ top: target, behavior: 'instant' }); raf = 0; return; }
    var step = d * EASE;
    if (Math.abs(step) < 1) step = d > 0 ? Math.min(1, d) : Math.max(-1, d); // браузер округляет до целых px
    window.scrollTo({ top: cur + step, behavior: 'instant' });
    raf = requestAnimationFrame(frame);
  }
  function inDialog(el) {
    // Окна с собственной прокруткой и слои поверх страницы: диалоги, popover-слои
    // (рамка кадрирования image-slot), всё, что помечено data-native-scroll.
    return el && el.closest && el.closest('[role="dialog"], [role="alertdialog"], dialog, [popover], .spill, [data-native-scroll]');
  }
  window.addEventListener('wheel', function (e) {
    if (e.defaultPrevented || e.ctrlKey) return;
    if (desktop && !desktop.matches) return;
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    if (inDialog(e.target)) return;
    if (document.body.style.overflow === 'hidden' || document.documentElement.style.overflow === 'hidden') return;
    e.preventDefault();
    var cur = window.scrollY;
    if (!raf) target = cur;
    var dy = e.deltaY * (e.deltaMode === 1 ? 40 : e.deltaMode === 2 ? window.innerHeight : 1);
    var lead = MAX_LEAD * window.innerHeight;
    target = Math.max(0, Math.min(maxScroll(), target + dy));
    target = Math.max(cur - lead, Math.min(cur + lead, target)); // ограничение скорости
    if (!raf) raf = requestAnimationFrame(frame);
  }, { passive: false });
  ['keydown', 'mousedown', 'touchstart'].forEach(function (t) { window.addEventListener(t, stop, { passive: true }); });
  window.addEventListener('resize', function () { if (raf) target = Math.min(target, maxScroll()); });
})();
