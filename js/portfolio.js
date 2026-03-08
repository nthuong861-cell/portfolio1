/* ============================================================
   js/portfolio.js — Portfolio filter (portfolio.html only)
   ============================================================ */

document.querySelectorAll('.filter-bubble').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-bubble').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.portfolio-item').forEach(item => {
      const match = filter === 'all' || item.dataset.category === filter;
      item.classList.toggle('hidden', !match);
    });
  });
});
