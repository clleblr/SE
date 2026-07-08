# Images — swap manual

Every photo on the site lives **directly in this `images/` folder** (no subfolders).
To change a picture, drop a new file in here with the **exact same filename** and it
updates everywhere that slot appears — no code editing needed.

**Tips**
- Keep roughly the same shape (aspect ratio) as noted below for the best fit;
  `object-fit: cover` crops the rest gracefully.
- Keep the same filename and extension. Same name = same picture everywhere.
- Optimise large photos (aim < 400 KB each) so pages load fast.

> **Note on the current files:** the client's live-site host was unreachable when
> this site was built (blocked by network policy), so every photo below is a plain
> **solid-navy placeholder** at the right shape. Replace each one with the real
> photo — see `MISSING.txt`. The **source** column shows which original file on the
> live site each slot maps to.

| Filename | Where it appears | Aspect ratio · min size | Source (live site) |
|---|---|---|---|
| `home-hero.jpg` | Homepage — hero background | 16:9 · 1600×900 | `home/sportsskill.jpg` |
| `home-schools.jpg` | Homepage — "For Schools" pathway card | ~4:3 · 900×760 | `home/sportscoach.jpg` |
| `home-parents.jpg` | Homepage — "For Parents" pathway card | ~4:3 · 900×760 | `home/camps.jpg` |
| `home-offering-curriculum.jpg` | Homepage — offering card 1 (Curriculum) | 3:2 · 900×600 | `home/sportsskill.jpg` |
| `home-offering-coaching.jpg` | Homepage — offering card 2 (Coaching) | 3:2 · 900×600 | `home/sportscoach.jpg` |
| `home-offering-camps.jpg` | Homepage — offering card 3 (Camps) | 3:2 · 900×600 | `home/camps.jpg` |
| `home-offering-progress.jpg` | Homepage — offering card 4 (Progress) | 3:2 · 900×600 | `home/progress.jpg` |
| `home-about-1.jpg` | Homepage — about preview (left photo) | 3:4 · 600×800 | `home/about-us.jpg` |
| `home-about-2.jpg` | Homepage — about preview (right photo) | 3:4 · 600×800 | `home/about-us-1.jpg` |
| `home-cta.jpg` | Homepage — big CTA band background | ~16:6 · 1600×620 | `home/progress.jpg` |
| `about-hero.jpg` | About — hero background | ~2:1 · 1600×760 | `home/about-us-sporting-edge.jpg` |
| `about-team.jpg` | About — "Who we are" photo | 4:5 · 800×1000 | `about/about-philosophy.jpg` |
| `coaching-hero.jpg` | Coaching & Camps — hero background | ~2:1 · 1600×760 | `home/sportscoach.jpg` |
| `coaching-sport-football.jpg` | Coaching & Camps — Football card | 4:5 · 800×1000 | `what we do/what-we-do1.png` |
| `coaching-sport-basketball.jpg` | Coaching & Camps — Basketball card | 4:5 · 800×1000 | `what we do/what-we-do2.png` |
| `coaching-sport-athletics.jpg` | Coaching & Camps — Athletics card | 4:5 · 800×1000 | `what we do/what-we-do3.png` |
| `coaching-sport-cricket.jpg` | Coaching & Camps — Cricket card | 4:5 · 800×1000 | `what we do/what-we-do4.png` |
| `coaching-sport-tabletennis.jpg` | Coaching & Camps — Table Tennis card | 4:5 · 800×1000 | `home/sportsskill.jpg` |
| `coaching-camp-annual.jpg` | Coaching & Camps — Annual camp card | 16:10 · 1600×1000 | `home/camps.jpg` |
| `coaching-camp-summer.jpg` | Coaching & Camps — Summer camp card | 16:10 · 1600×1000 | `home/sportsskill.jpg` |
| `coaching-camp-little.jpg` | Coaching & Camps — Little Athletes card | 16:10 · 1600×1000 | `home/about-us.jpg` |
| `coaching-cta.jpg` | Coaching & Camps — CTA band background | ~16:6 · 1600×560 | `home/sportscoach.jpg` |
| `schools-hero.jpg` | Programs for Schools — hero background | ~2:1 · 1600×760 | `what we do/sports-k12.jpg` |
| `schools-coaching-1.jpg` | Programs for Schools — coaching gallery 1 | 4:5 · 800×1000 | `what we do/what-we-do5.png` |
| `schools-coaching-2.jpg` | Programs for Schools — coaching gallery 2 | 4:5 · 800×1000 | `what we do/what-we-do6.png` |
| `schools-coaching-3.jpg` | Programs for Schools — coaching gallery 3 | 4:5 · 800×1000 | `what we do/what-we-do7.png` |
| `schools-coaching-4.jpg` | Programs for Schools — coaching gallery 4 | 4:5 · 800×1000 | `what we do/what-we-do8.png` |
| `schools-curriculum.jpg` | Programs for Schools — K–12 curriculum photo | 16:10 · 1600×1000 | `what we do/wellness-k12.jpg` |
| `schools-cta.jpg` | Programs for Schools — CTA band 1 background | ~16:6 · 1600×520 | `what we do/what-we-do7.png` |
| `flagship-annual-hero.jpg` | Flagship — Annual Sports Camp hero | ~2:1 · 1600×760 | `our flagship program/Annual Sports Camp1.jpg` |
| `flagship-annual-1.jpg` | Flagship — Annual photo 1 | ~16:9 · 900×520 | `our flagship program/Annual Sports Camp1.jpg` |
| `flagship-annual-2.jpg` | Flagship — Annual photo 2 | ~16:9 · 900×520 | `our flagship program/Annual Sports Camp2.jpg` |
| `flagship-summer-hero.jpg` | Flagship — Summer Sports Camp hero | ~2:1 · 1600×760 | `our flagship program/Summer Sports Camp1.jpg` |
| `flagship-summer-1.jpg` | Flagship — Summer photo 1 | ~16:9 · 900×520 | `our flagship program/Summer Sports Camp1.jpg` |
| `flagship-summer-2.jpg` | Flagship — Summer photo 2 | ~16:9 · 900×520 | `our flagship program/Summer Sports Camp2.jpg` |
| `flagship-little-hero.jpg` | Flagship — Little Athletes hero | ~2:1 · 1600×760 | `our flagship program/Little Athletes1.jpg` |
| `flagship-little-1.jpg` | Flagship — Little Athletes photo 1 | 3:4 · 600×800 | `our flagship program/Little Athletes1.jpg` |
| `flagship-little-2.jpg` | Flagship — Little Athletes photo 2 | 3:4 · 600×800 | `our flagship program/Little Athletes2.jpg` |
| `why-hero.jpg` | Why Choose Us — hero background | ~2:1 · 1600×760 | `why choose us/why-choose.jpg` |
| `why-gallery-1.jpg` | Why Choose Us — gallery photo 1 | 16:11 · 1600×1100 | `why choose us/why-choose1.png` |
| `why-gallery-2.jpg` | Why Choose Us — gallery photo 2 | 16:11 · 1600×1100 | `why choose us/why-choose2.png` |
| `partner-vidyaniketan-school.png` | Homepage — "In association with" logo 1 | ~13:5 · transparent PNG | `Vidyaniketan Public School.png` |
| `partner-vidyaniketan-early-years.png` | Homepage — "In association with" logo 2 | ~13:5 · transparent PNG | `Vidyaniketan Early Years.png` |
| `logo.png` | Alternate copy of the Sporting Edge logo | square-ish PNG | `assets/sporting-edge-logo.png` |

**Logo note:** the header and footer logo is loaded from `assets/sporting-edge-logo.png`
(kept in `assets/`, not here). `images/logo.png` is an extra copy provided per the
naming scheme; to change the on-page logo, replace the file in `assets/`.
