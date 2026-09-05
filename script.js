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

// Quote form — submits to Formspree (see README for setup).
// Until a real Formspree form ID is set in the action attribute below,
// this shows a warning instead of silently failing.
const form = document.getElementById('quote-form');
const formNote = document.getElementById('form-note');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (form.action.includes('YOUR_FORM_ID')) {
      formNote.hidden = false;
      formNote.textContent = "This form isn't connected yet — set up a free Formspree endpoint (see README.md) and paste it into the form's action attribute.";
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.reset();
        formNote.hidden = false;
        formNote.textContent = "Thanks — your request was sent. We'll be in touch soon.";
      } else {
        formNote.hidden = false;
        formNote.textContent = "Something went wrong sending that. Please try again or email us directly.";
      }
    } catch (err) {
      formNote.hidden = false;
      formNote.textContent = "Something went wrong sending that. Please try again or email us directly.";
    } finally {
      submitBtn.disabled = false;
    }
  });
}
