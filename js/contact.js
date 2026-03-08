/* ============================================================
   js/contact.js — Contact form validation (contact.html only)
   ============================================================ */

const contactForm  = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name    = contactForm.name.value.trim();
    const email   = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      formFeedback.textContent = '⚠ Fill in all required fields, hero!';
      formFeedback.style.color = '#E8161B';
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formFeedback.textContent = '⚠ That email looks sus…';
      formFeedback.style.color = '#E8161B';
      return;
    }

    const submitBtn       = contactForm.querySelector('button[type="submit"]');
    submitBtn.disabled    = true;
    submitBtn.textContent = '📨 SENDING…';

    setTimeout(() => {
      formFeedback.textContent = '✅ MESSAGE SENT! Your mission is on its way!';
      formFeedback.style.color = '#005BAC';
      contactForm.reset();
      submitBtn.disabled    = false;
      submitBtn.textContent = '⚡ SEND IT! ⚡';
    }, 1200);
  });
}
