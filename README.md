# Doug Emch Construction — website

A self-contained static site: `index.html`, `styles.css`, `script.js`. No build step, no dependencies to install — open `index.html` in a browser and it works.

## 1. Replace the placeholders

Search each file for these and swap in your real details:

- **Phone number** — currently `(440) 555-0182` / `tel:+14405550182` in `index.html` (header, hero, footer) — replace both the display text and the `tel:` link.
- **Email** — currently `info@dougemchconstruction.com` in the footer.
- **About section** — the two bracketed placeholder paragraphs under "About Doug Emch Construction" need your real business story and license/insurance info if applicable.
- **Recent work photos** — the four tan/dashed boxes in the "Recent work" section are placeholders. Once you have real job photos, replace each `.work-item` in `index.html` with an `<img>` tag, e.g.:
  ```html
  <figure class="work-item">
    <img src="images/kitchen-painesville.jpg" alt="Kitchen remodel in Painesville, OH">
    <figcaption>Kitchen remodel<span>Painesville, OH</span></figcaption>
  </figure>
  ```
  Add `.work-item img { width:100%; height:100%; object-fit:cover; }` to `styles.css` once you do.
- **Hours** — footer currently says Mon–Fri 7–6, Saturdays by appointment. Adjust as needed.

## 2. Connect the quote form

Right now the form on the page doesn't send anywhere — submitting it just shows a message. Easiest free options:

- **Formspree** (formspree.io) — sign up free, add `action="https://formspree.io/f/yourFormId"` and `method="POST"` to the `<form>` tag in `index.html`, done.
- **Netlify Forms** — if you host on Netlify (see below), add `data-netlify="true"` to the `<form>` tag and Netlify handles submissions automatically, free.

## 3. Host it (free options)

Since this is a static site with no server-side code, you have several free hosting routes:

- **Netlify** — drag-and-drop the whole `site` folder at app.netlify.com/drop, or connect a GitHub repo for auto-deploys on every change. Free tier is generous, includes free HTTPS and Netlify Forms.
- **Cloudflare Pages** — similar drag-and-drop or GitHub-connected deploy, also free with HTTPS.
- **GitHub Pages** — free if you're already comfortable with GitHub; push this folder to a repo and enable Pages in settings.

Any of these let you point your real domain (e.g. dougemchconstruction.com) at the site for free — you'd just buy the domain itself (~$10-15/year from a registrar like Namecheap or Cloudflare Registrar) and update its DNS to point at whichever host you pick.

## 4. Local preview

To preview before publishing, just double-click `index.html` — no server needed for this site as built.
