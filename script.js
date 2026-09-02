// Mobile nav toggle
const header = document.querySelector('.site-header');
const navToggle = document.getElementById('nav-toggle');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu after clicking a link
  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Quote form — currently client-side only.
// This form has no backend yet. To actually receive submissions, connect it to
// a form service (e.g. Formspree, Netlify Forms if hosting on Netlify) or wire
// it to a mailto/backend endpoint of your choice.
const form = document.getElementById('quote-form');
const formNote = document.getElementById('form-note');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.hidden = false;
    formNote.textContent = "This form isn't connected to anything yet — for now, please call or email directly. See the setup notes for how to wire this up.";
  });
}
