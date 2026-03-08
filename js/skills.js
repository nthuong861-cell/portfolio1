/* ============================================================
   js/skills.js — Skill bar animation (skills.html only)
   ============================================================ */

const skillFills   = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) skillObserver.unobserve(entry.target);
  });
}, { threshold: 0.3 });

skillFills.forEach(el => {
  const target   = el.style.width;
  el.style.width = '0';
  setTimeout(() => { el.style.width = target; }, 400);
  skillObserver.observe(el);
});
