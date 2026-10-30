# Dental Clinic Website — Antigravity Build Prompt

Paste everything from "MASTER PROMPT" onward into Antigravity (Agent Manager / Planning mode). Install the skills in Part A first.

---

## PART A — Skills to install before building

Antigravity loads skills from `.agent/skills/<skill-name>/SKILL.md` (workspace) or its global skills folder. Verify the exact paths and repo names in your Antigravity version, then copy these in.

| # | Skill | Purpose | Where to get it |
|---|-------|---------|-----------------|
| 1 | `frontend-design` | Distinctive, non-generic UI: typography, palette, spacing, polish | Anthropic skills repo: `github.com/anthropics/skills` |
| 2 | `web-design-guidelines` | UI/UX and accessibility review of finished pages | Vercel agent skills: `github.com/vercel-labs/agent-skills` |
| 3 | `react-best-practices` | Clean React/Vite structure and performance | Vercel agent skills (same repo) |
| 4 | `webapp-testing` | Run the site in a browser, screenshot, click through flows | Anthropic skills repo |
| 5 | Tailwind CSS skill (any well-rated one) | Consistent utility classes and design tokens | Search GitHub / skills directories |
| 6 | SEO / local-business schema skill (any well-rated one) | Meta tags, JSON-LD `Dentist` schema, sitemap | Search GitHub / skills directories |
| 7 | Accessibility (WCAG 2.2 AA) skill (any well-rated one) | Contrast, focus states, labels, keyboard use | Search GitHub / skills directories |

Also enable in Antigravity: the built-in browser agent (to preview and screenshot each section) and terminal access (to run `npm install` / `npm run dev`).

Install tip: create a `.agent/skills/` folder in the project root, drop each skill folder inside, restart the agent, then ask: "List the skills you have loaded."

---

## MASTER PROMPT

You are a senior frontend engineer and UI designer. Build a **complete, production-ready, single-page dental clinic website template** that a clinic owner can customise by editing one content file. Use your loaded skills (`frontend-design`, `web-design-guidelines`, `react-best-practices`, accessibility, SEO) throughout. Work in Planning mode: first produce a plan and file structure, then build section by section, previewing each in the browser agent and fixing issues before moving on.

### 1. Tech stack
- React + Vite, Tailwind CSS, plain JavaScript or TypeScript (your choice, stay consistent).
- `lucide-react` for icons. No emoji as icons.
- Optional: `framer-motion` for subtle fade/slide-in on scroll (respect `prefers-reduced-motion`).
- No backend required. The booking form posts to a configurable endpoint (`VITE_FORM_ENDPOINT`) or opens a prefilled WhatsApp link as fallback.
- All clinic content (name, phone, address, hours, services, FAQs, reviews, images) lives in `src/content/clinic.js` so the owner edits one file only.

### 2. Design direction
**Feel:** calm, clean, modern, trustworthy — like a bright, hygienic clinic. Sleek, lots of white space, rounded shapes, soft gradients. Not clinical-cold, not template-generic.

**Palette (inspired by clinic scrubs / aprons) — define as Tailwind theme tokens:**
- `sky-100` `#DCEFF7` light blue (soft backgrounds, cards)
- `sky-200` `#BFE3F2` light blue (gradients, accents)
- `mint-100` `#D6EFE3` light green (cards, highlights)
- `mint-300` `#B7E4CC` light green (badges, decorative shapes)
- `deep` `#1F5A4A` dark green (primary buttons, process band, key text)
- `link` `#1F6F99` blue (links, eyebrow labels)
- `ink` `#0F3B4A` deep teal-navy (headings)
- `body` `#33525C` (paragraph text)
- `ground` `#F6FBFC` (page background)
- Footer: `#0F3B4A` background, `#CFE6EE` text

**Typography:** Headings in **Outfit** (600), body in **Inter** (400/500/600). Load via Google Fonts with `display=swap`.
- H1 56–60px desktop / 38px mobile, line-height 1.05
- H2 40px desktop / 30px mobile
- Body 16–18px, line-height 1.6–1.7

**Shape and effects:** card radius 24–36px, pill buttons (999px), soft shadows (`0 8px 24px rgba(15,59,74,.12)`), decorative blurred circles in mint/white. No harsh borders — use 1px `#DCEFF7`.

**Rules:** touch targets ≥ 44px; text contrast ≥ 4.5:1; visible focus rings; every interactive element is a real `<a>`, `<button>`, `<input>` with a `<label>`; icon-only buttons get `aria-label`; decorative SVGs get `aria-hidden`. Mobile-first, works from 360px to 1440px, no horizontal scroll.

### 3. Page structure and sections

Build these as separate components in this order. Each has an `id` for anchor navigation, smooth scrolling and a sticky nav offset.

#### 3.1 Top Bar (`TopBar`)
- Full-width dark-green (`deep`) strip, white 14px text.
- Contents: opening hours ("Open Mon–Sat · [HOURS]"), phone number (tap-to-call link), emergency note ("Emergency appointments same day").
- Mobile: stack or hide the hours, keep phone visible.

#### 3.2 Navigation (`Navbar`)
- Left: logo mark (mint rounded square with tooth icon) + clinic name in Outfit 22px.
- Right: links — Services, About, Your Visit, Reviews, FAQ — and a pill "Book Appointment" button (`deep`).
- Sticky on scroll with a light blur background and subtle bottom shadow after scrolling.
- Mobile: hamburger opens a full-width drawer; the booking button stays visible at the bottom of the drawer. Close on link click and Escape.
- Active link highlights via scroll-spy.

#### 3.3 Hero (`Hero`)
- Two columns on desktop (text left, visual right); stacked on mobile (text first).
- Left subsections:
  - Badge pill (mint-100 bg, deep text): "Gentle, modern dental care".
  - H1: "Healthy smiles, **without the worry.**" — second phrase in `deep`.
  - Supporting paragraph (18px, max-width 520px): comfortable check-ups, honest advice, advanced treatment for the whole family.
  - Two buttons: primary "Book a Visit" (deep, white text) and secondary "Explore Treatments" (sky-100 bg, ink text).
  - Stats row: three items (e.g. `[YEARS]+ years experience`, `[NUMBER]+ happy patients`, `[RATING] Google rating`) in Outfit 30px `deep` with 14px labels.
- Right visual:
  - Rounded 36px panel with a gradient from sky-200 → sky-100 → mint-100, min-height 460px.
  - Decorative circles (mint, white) partially clipped at corners.
  - Slot for a hero photo (smiling patient or doctor) via `content.hero.image`; if empty, show a large outlined tooth icon.
  - Floating white card bottom-left: "Next free slot — [DAY, TIME]" (content-driven).

#### 3.4 Trust Strip (`TrustStrip`)
- White band with top and bottom 1px sky-100 borders.
- Four items in an auto-fit grid, each with a mint dot and 15px medium text in `deep`: sterilised single-use tools; doctor degree/registration; painless modern equipment; transparent pricing. Content-driven.

#### 3.5 Services (`Services`) — `id="services"`
- Section header: eyebrow "OUR TREATMENTS" (14px, uppercase, `link`), H2 "Everything your smile needs, in one place".
- Auto-fit grid, min card width 300px, gap 24px.
- Each card (white, 28px radius, 1px `#E3F1F6` border, 32px padding):
  - 52px rounded icon tile alternating sky-100 and mint-100.
  - H3 (Outfit 22px, ink).
  - 15px description (body colour).
  - "From [PRICE]" in `deep`, 14px semibold.
  - Hover: lift 4px and deepen shadow; whole card is a link to `/services/:slug` if detail pages are enabled.
- Default services (from `clinic.js`): Check-ups & Cleaning, Teeth Whitening, Root Canal Treatment, Braces & Aligners, Dental Implants, Kids' Dentistry.

#### 3.6 About the Doctor (`About`) — `id="about"`
- Two columns; stacked on mobile.
- Left: portrait panel (36px radius, mint→blue gradient) with slot for photo of the doctor in clinic apron.
- Right:
  - Eyebrow "MEET YOUR DENTIST".
  - H2 "Dr. [DOCTOR NAME]".
  - 2–3 sentence bio paragraph (17px) — qualifications, experience, special interests, patient promise.
  - Two credential tiles (sky-100 and mint-100): degree + university; specialty + years of experience.
  - Optional: "Meet the team" row of small round team photos with name and role.

#### 3.7 Your Visit / Process (`Process`) — `id="process"`
- Full-width `deep` background, white text, 80px vertical padding.
- Eyebrow (light mint) and H2 "Simple from the first call to the last check-up".
- Four step cards (translucent white 8%, 24px radius): large number (01–04) in light mint, H3, one-line description.
  1. Book online or call.
  2. Exam & honest advice (written plan with prices).
  3. Comfortable treatment.
  4. Follow-up reminders.

#### 3.8 Results Gallery (`Gallery`)
- Eyebrow "REAL RESULTS", H2 "Smile transformations".
- Grid of before/after pairs: two side-by-side tiles (before = sky-100, after = mint-100) with labels in the bottom corner.
- Optional interactive before/after slider (keyboard accessible).
- Small note: "Photos shown with patient consent."

#### 3.9 Reviews (`Reviews`) — `id="reviews"`
- Eyebrow "PATIENT REVIEWS", H2 "Kind words from our patients".
- Three cards (alternating sky-100 / mint-100, 28px radius): quote text 16px, patient name + treatment in `deep`.
- Reviews come from `clinic.js` and must be real; show a "See all reviews on Google" link. Never generate fake reviews.

#### 3.10 FAQ (`Faq`) — `id="faq"`
- Max-width 860px, H2 "Questions, answered".
- Accessible accordion: each item is a `<button aria-expanded>` controlling a region; plus/minus indicator; first item open by default; only one open at a time; min height 56px.
- Default questions: Is treatment painful? How often should I visit? Do you accept insurance / offer instalments? What to do in a dental emergency?
- Add `FAQPage` JSON-LD from the same data.

#### 3.11 Booking & Contact (`Contact`) — `id="contact"`
- Large rounded (40px) container with sky-100 → mint-100 gradient, 56px padding.
- Left column: H2 "Book your appointment", one-line promise ("We confirm within [TIME]"), contact details (address, phone/WhatsApp, hours), map embed placeholder (Google Maps iframe, lazy loaded).
- Right column: white form card (28px radius) with fields:
  - Full name (required)
  - Phone number (required, validate)
  - Treatment (select from services + "Not sure — need advice")
  - Preferred date (date input, min = today)
  - Optional message
  - Submit "Request Appointment" (deep pill, 52px high)
- Behaviour: client-side validation with inline error text, loading state, success message ("Thanks — we'll confirm shortly"), error fallback with phone number; honeypot field for spam; WhatsApp deep-link fallback.

#### 3.12 Footer (`Footer`)
- Background `#0F3B4A`.
- Columns: brand + one-line tagline; Services links; Contact (phone, email, address); Follow (Instagram, Facebook, Google Reviews).
- Bottom bar: © year, Privacy Policy, Terms.

#### 3.13 Global extras
- Floating mobile action buttons (bottom-right): Call and WhatsApp (44px+ targets, above content, not covering the form).
- Scroll-to-top button after 600px.
- 404 and simple Privacy Policy page stubs.

### 4. Content file contract (`src/content/clinic.js`)
Export an object with: `name`, `tagline`, `phone`, `whatsapp`, `email`, `address`, `mapEmbedUrl`, `hours[]`, `social{}`, `hero{headline, subhead, image, stats[], nextSlot}`, `trust[]`, `services[{slug,title,description,priceFrom,icon}]`, `doctor{name,bio,photo,credentials[]}`, `team[]`, `process[]`, `gallery[]`, `reviews[]`, `faqs[{q,a}]`, `seo{title,description,areaName}`. Use `[PLACEHOLDER]` strings for unknown facts. Never invent statistics, credentials or reviews.

### 5. SEO and performance
- Per-page `<title>` and meta description, Open Graph and Twitter tags, canonical URL.
- JSON-LD: `Dentist` (LocalBusiness) with name, address, phone, hours, geo, `sameAs`; plus `FAQPage`.
- Semantic landmarks (`header`, `nav`, `main`, `section` with headings, `footer`); one H1.
- Images: width/height set, `loading="lazy"` below the fold, WebP/AVIF, descriptive alt text.
- Fonts preloaded, `font-display: swap`. Target Lighthouse ≥ 95 for Performance, Accessibility, Best Practices, SEO.
- Generate `sitemap.xml` and `robots.txt`.

### 6. Definition of done — verify with the browser agent
- [ ] Every section renders at 360, 768, 1024 and 1440px with no overflow.
- [ ] Palette, fonts and radii match the tokens above; no off-palette colours.
- [ ] Nav links scroll to the right sections; mobile drawer works; sticky nav does not hide headings.
- [ ] FAQ accordion works with keyboard (Enter/Space) and screen reader attributes.
- [ ] Booking form validates, shows loading/success/error states.
- [ ] Contrast ≥ 4.5:1 for all text; focus rings visible; tab order logical.
- [ ] All placeholders live only in `clinic.js`.
- [ ] `npm run build` passes with no warnings; Lighthouse targets met.
- [ ] Provide screenshots of each section (desktop + mobile) and a short README explaining how to customise `clinic.js` and deploy to Vercel/Netlify.

### 7. Constraints
- Do not copy another clinic's text or photos. Use clearly marked placeholders.
- Do not add claims like "pain-free guaranteed", "#1 dentist" or specific medical outcomes unless supplied by the owner.
- Keep dependencies minimal and the code readable: one component per section, shared UI primitives (`Button`, `Container`, `SectionHeader`, `Card`) in `src/components/ui`.

Start by outputting your plan: file tree, component list, and the order you will build and verify them. Then proceed.

---

## PART B — Optional follow-up prompts

1. **Service detail pages:** "Add `/services/:slug` pages using the same design: hero, what it involves, who it's for, step-by-step, price range, FAQs, and a booking CTA."
2. **Multi-clinic version:** "Refactor so multiple clinics can be generated by swapping `clinic.js` and a theme object."
3. **Blog / tips:** "Add a `/tips` section with 3 placeholder dental-care articles and Article schema."
4. **QA pass:** "Using `web-design-guidelines` and the accessibility skill, audit the whole site, list issues by severity, and fix all high and medium ones."
