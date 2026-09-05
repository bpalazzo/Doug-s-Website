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

## 2. Connect the quote form (no phone number shown on the site)

The site has no phone number displayed anywhere on purpose — quote requests come through the form instead, and get delivered straight to the owner without his number ever being public.

**Setup (Formspree, free):**

1. Go to formspree.io and create a free account.
2. Create a new form and set the notification email to whatever inbox the owner checks — most naturally, an email that already sends push notifications to his phone (Gmail, Outlook, iCloud Mail all do this by default on a phone with the app installed and notifications on).
3. Formspree gives you a form ID/endpoint like `https://formspree.io/f/abcd1234`. Open `index.html`, find the `<form ... action="https://formspree.io/f/YOUR_FORM_ID" ...>` tag near the bottom, and replace `YOUR_FORM_ID` with your real one.
4. That's it — submissions now land in that inbox instantly, which triggers a normal phone notification, all without the phone number ever appearing on the page. The free tier covers 50 submissions/month, plenty for a small local business site.

**If you'd rather it land as a text message instead of email:** most US carriers offer an email-to-SMS gateway address (e.g. `1234567890@vtext.com` for Verizon, `@txt.att.net` for AT&T, `@tmomail.net` for T-Mobile). You can add that address as a second notification recipient in Formspree's settings, so every quote request also arrives as a text. Note these carrier gateways have gotten less reliable in recent years and some carriers have scaled them back — a quick search for "[carrier] email to text gateway" will confirm your carrier's current address, and it's worth testing once you set it up. Email notifications alone are usually the more dependable route.

**Alternative:** Netlify Forms — if you host on Netlify (see below), add `data-netlify="true"` to the `<form>` tag instead and Netlify handles submissions automatically, also free, with the same email-forwarding approach for phone notifications.

## 3. Host it (free options)

Since this is a static site with no server-side code, you have several free hosting routes:

- **Netlify** — drag-and-drop the whole `site` folder at app.netlify.com/drop, or connect a GitHub repo for auto-deploys on every change. Free tier is generous, includes free HTTPS and Netlify Forms.
- **Cloudflare Pages** — similar drag-and-drop or GitHub-connected deploy, also free with HTTPS.
- **GitHub Pages** — free if you're already comfortable with GitHub; push this folder to a repo and enable Pages in settings.

Any of these let you point your real domain (e.g. dougemchconstruction.com) at the site for free — you'd just buy the domain itself (~$10-15/year from a registrar like Namecheap or Cloudflare Registrar) and update its DNS to point at whichever host you pick.

## 4. Local preview

To preview before publishing, just double-click `index.html` — no server needed for this site as built.