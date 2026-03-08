/* ============================================================
   js/reveal.js — Scroll-reveal animation (all pages)
   ============================================================ */

const revealTargets = document.querySelectorAll(
  '.comic-panel, .section-bang, .thought-bubble, .filter-bubble'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const siblings = [...entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')];
    const delay    = Math.min(siblings.indexOf(entry.target) * 90, 450);
    setTimeout(() => entry.target.classList.add('visible'), delay);
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.1 });

revealTargets.forEach(el => revealObserver.observe(el));
