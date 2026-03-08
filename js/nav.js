/* ============================================================
   js/nav.js — Shared navigation (all pages)
   ============================================================ */

// ── Navbar scroll shadow ──────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Hamburger / mobile menu ───────────────────────────────────
const navToggle  = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
const hamLines   = navToggle.querySelectorAll('.ham-line');

function openMenu() {
  mobileMenu.classList.remove('hidden');
  hamLines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
  hamLines[1].style.opacity   = '0';
  hamLines[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
}
function closeMenu() {
  mobileMenu.classList.add('hidden');
  hamLines[0].style.transform = '';
  hamLines[1].style.opacity   = '1';
  hamLines[2].style.transform = '';
}

navToggle.addEventListener('click', () => {
  mobileMenu.classList.contains('hidden') ? openMenu() : closeMenu();
});

document.querySelectorAll('#mobileMenu a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// ── Active link — highlight current page ─────────────────────
const page = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
document.querySelectorAll('[data-page]').forEach(link => {
  if (link.dataset.page === page) link.classList.add('active');
});
