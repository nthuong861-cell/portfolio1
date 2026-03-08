/* ============================================================
   script.js — Comic Book Portfolio (vanilla JS)
   ============================================================ */

// ── Navbar scroll class ───────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  highlightNavLink();
});

// ── Mobile nav toggle ─────────────────────────────────────────
const navToggle   = document.getElementById('navToggle');
const mobileMenu  = document.getElementById('mobileMenu');
const hamLines    = navToggle.querySelectorAll('.ham-line');

navToggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('hidden') === false;
  // Animate hamburger ↔ X
  if (!mobileMenu.classList.contains('hidden')) {
    hamLines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    hamLines[1].style.opacity   = '0';
    hamLines[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    hamLines[0].style.transform = '';
    hamLines[1].style.opacity   = '1';
    hamLines[2].style.transform = '';
  }
});

// Close mobile nav when a link is clicked
document.querySelectorAll('#mobileMenu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    hamLines[0].style.transform = '';
    hamLines[1].style.opacity   = '1';
    hamLines[2].style.transform = '';
  });
});

// ── Active nav link highlighting ──────────────────────────────
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
  const scrollPos = window.scrollY + 80;
  sections.forEach(section => {
    const top    = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id     = section.getAttribute('id');
    const link   = document.querySelector(`#navLinks a[href="#${id}"]`);
    if (link) link.classList.toggle('active', scrollPos >= top && scrollPos < bottom);
  });
}

// ── Scroll reveal (IntersectionObserver) ──────────────────────
const revealTargets = document.querySelectorAll(
  '.comic-panel, .section-bang, .thought-bubble, .filter-bubble'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    // Stagger siblings
    const siblings = [...entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')];
    const delay    = Math.min(siblings.indexOf(entry.target) * 90, 450);
    setTimeout(() => entry.target.classList.add('visible'), delay);
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.1 });

revealTargets.forEach(el => revealObserver.observe(el));

// ── Portfolio filter ──────────────────────────────────────────
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

// ── Skill bar animate on scroll ───────────────────────────────
const skillFills = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.style.width; // trigger reflow
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
skillFills.forEach(el => {
  const target = el.style.width;
  el.style.width = '0';
  setTimeout(() => { el.style.width = target; }, 400);
  skillObserver.observe(el);
});

// ── Contact form ──────────────────────────────────────────────
const contactForm  = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name    = contactForm.name.value.trim();
    const email   = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      formFeedback.textContent  = '⚠ Fill in all required fields, hero!';
      formFeedback.style.color  = '#E8161B';
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formFeedback.textContent  = '⚠ That email looks sus…';
      formFeedback.style.color  = '#E8161B';
      return;
    }

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.disabled    = true;
    submitBtn.textContent = '📨 SENDING…';

    setTimeout(() => {
      formFeedback.textContent  = '✅ MESSAGE SENT! Your mission is on its way!';
      formFeedback.style.color  = '#005BAC';
      contactForm.reset();
      submitBtn.disabled    = false;
      submitBtn.textContent = '⚡ SEND IT! ⚡';
    }, 1200);
  });
}
