# Sporting Edge — website

A production-ready, fully **static** marketing website for **Sporting Edge**, a youth
sports education & coaching organisation in Bengaluru (associated with Vidyaniketan
schools). Plain hand-written HTML, one shared CSS file, and a small amount of vanilla
JavaScript. **No build step, no framework, no dependencies.** It opens by double-clicking
`index.html` and works identically on any static host.

## File tree

```
/
├── index.html                 Homepage
├── about.html                 About Us
├── coaching-and-camps.html    Coaching & Camps (for parents)
├── programs-for-schools.html  Programs for Schools
├── flagship-programs.html     Flagship Programs (tabbed: Annual / Summer / Little Athletes)
├── why-choose-us.html         Why Choose Us (+ #gallery)
├── contact.html               Contact (details + form)
├── css/
│   └── styles.css             One shared stylesheet for the whole site
├── js/
│   └── main.js                Mobile nav toggle + flagship tab switcher
├── assets/
│   └── sporting-edge-logo.png Logo used in header & footer
├── images/                    All photography (flat, no subfolders)
│   ├── README.md              Image swap manual (which file → where)
│   └── MISSING.txt            Notes the current placeholder images
└── README.md                  This file
```

## Run it locally

The site is pure static files. The simplest way to preview:

```bash
python3 -m http.server 8000
```

then open <http://localhost:8000>. (Double-clicking `index.html` also works; a local
server just avoids any relative-path quirks.)

## Deploy (no build step anywhere)

- **GitHub Pages:** push to a repo → **Settings → Pages** → deploy from `main` / root.
- **Netlify / Cloudflare Pages / Vercel:** drag-and-drop the folder, or connect the repo.
  No build command; **publish directory = root**.
- **Firebase Hosting:** `firebase init hosting` (public dir = `.` / root, single-page = **No**),
  then `firebase deploy`.

After deploying, click through every page, the flagship tabs, the mobile menu, and check
that all internal links, images and fonts load.

## Swapping photos (for the client)

Every image lives directly in `images/` with a descriptive, stable filename that says
**where** it is used (e.g. `home-hero.jpg`, `about-team.jpg`). To change any picture,
drop a new file into `images/` with the **same filename** — it updates everywhere that
slot appears, no code editing. Full mapping and recommended sizes are in
[`images/README.md`](images/README.md).

> **Heads-up:** the images currently in the folder are solid-navy **placeholders** — the
> client's live-site photo host was blocked when this site was built. Replace each one with
> the real photo (same filename). See [`images/MISSING.txt`](images/MISSING.txt).

## Design system (quick reference)

- **Colours:** Edge Navy `#262261`, Deep Navy `#17143B`, Sporting Gold `#FFCB05`,
  Paper `#F6F5F0`, Slate `#5A5870`. Roughly 60% neutral / 30% navy / 10% gold.
- **Type:** Archivo (headings, buttons, stats) + Figtree (body), from Google Fonts.
- **Responsive:** fluid `clamp()` sizing; grids collapse below ~900px; below ~640px the
  nav becomes a hamburger menu and everything stacks to one column.
- Colour tokens live as CSS custom properties at the top of `css/styles.css`.

## The contact form

`contact.html` has a working form layout that currently posts to `#` (no-op). To make it
live, set the `<form action="…">` to your endpoint — e.g. a
[Formspree](https://formspree.io) URL. There's a comment in the file marking exactly where.

## Accessibility & quality

- Semantic HTML5 (`<header> <nav> <main> <section> <footer>`), one `<h1>` per page.
- Keyboard-accessible nav, tabs (arrow-key support) and skip link; visible focus states.
- `alt` text on every image; images sized to avoid layout shift; hero images load eagerly,
  the rest lazily.
- Per-page `<title>`, `meta description`, and Open Graph tags; favicon from the logo.
