# Handoff: GoLab Automation Website

A liquid-glass, interactive marketing website for **GoLab Automation** — a GoHighLevel-focused automation + integration agency.

---

## ⚠ About the files in this bundle

The files under `design/` are a **working HTML/CSS/JSX prototype** built to demonstrate the intended look, behavior, and interactions. They are **design references**, not production code.

Your job is to **recreate this design inside the target codebase's environment** — React with Tailwind, Next.js + shadcn, Vue, SvelteKit, Astro, whatever the team uses. Use the codebase's existing patterns, component library, font loader, build setup, and routing. If no environment exists yet, choose the most appropriate stack for a marketing site (recommended: **Next.js 14 App Router + Tailwind + Framer Motion**) and implement the designs there.

Do not ship the HTML files directly. They use Babel-in-browser, inline `<style>`, and global `window.*` injection — fine for a static prototype, not production.

## Fidelity

**High-fidelity.** Pixel-accurate colors, typography, spacing, and interaction states are defined. Hover states, animations, and the 3D workflow card behavior are all production-intent. Recreate as-is using the target codebase's primitives.

---

## Brand & visual system

### Brand color (red — from logo)
```
--brand-red:        #E81A2D   /* primary */
--brand-red-soft:   #FF3D4F   /* hover/accent */
--brand-red-deep:   #B8131F   /* pressed / dark gradient stop */
--brand-red-glow:   rgba(232, 26, 45, 0.55)
--brand-red-tint:   rgba(232, 26, 45, 0.18)
```

### Dark theme (default — dark red environment)
```
--bg-base:   #11070A   /* near-black w/ red undertone */
--bg-deep:   #080305
--bg-elev:   #1A0A0E
--fg-1:      #F4ECEE   /* primary text */
--fg-2:      #B9A8AE   /* secondary text */
--fg-3:      #6E5A60   /* muted / labels */
--hairline:        rgba(255, 220, 225, 0.08)
--hairline-strong: rgba(255, 220, 225, 0.16)
```

### Light theme
```
--bg-base:   #F4F5F8
--bg-deep:   #E8EAF0
--bg-elev:   #FFFFFF
--fg-1:      #0A0B12
--fg-2:      #3A4055
--fg-3:      #7A8095
```

### Glass tokens (apply on dark)
```
--glass-bg:           rgba(255, 235, 240, 0.05)
--glass-bg-hover:     rgba(255, 235, 240, 0.09)
--glass-border:       rgba(255, 235, 240, 0.13)
--glass-border-hover: rgba(255, 235, 240, 0.26)
--glass-blur:         22px
```

### Typography
- **Display:** `Sora` — weights 600/700/800. Used for headlines, button labels, big numbers. `letter-spacing: -0.025em` for headlines, `-0.03em` for big stats.
- **Body / UI:** `Inter` — 400/500/600/700.
- **Mono / labels:** `JetBrains Mono` — 400/500/600/700. Used for eyebrows, tags, timestamps, technical strings. Tracked `letter-spacing: 0.10em–0.18em` with `text-transform: uppercase`.

Load from Google Fonts in the target codebase. Headlines should be 700 weight, never the lighter 600.

### Spacing scale
4-based: 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 128.

### Radii
```
--r-sm:   8px    /* inputs, small chips */
--r-md:   14px   /* cards */
--r-lg:   22px   /* large containers, nav pill */
--r-xl:   32px   /* enterprise band */
--r-pill: 999px  /* buttons, chips */
```

### Motion
```
--ease-out:    cubic-bezier(0.22, 1, 0.36, 1)
--ease-glass:  cubic-bezier(0.34, 1.56, 0.64, 1)   /* slight overshoot for glass hover */
```
Durations: 220ms (fast), 350ms (default), 600ms (slow / theme switch).

### Shadows
Glass shadows always include an inset top highlight + drop shadow tinted with `rgba(0,0,0,...)`:
```
--glass-shadow:       0 8px 32px rgba(0,0,0,0.4),  inset 0 1px 0 rgba(255,255,255,0.10)
--glass-shadow-hover: 0 16px 48px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.22)
```

---

## Information architecture (routes)

Single-page React app with client-side routing between these pages. Each page is composed of section components.

| Route        | Sections rendered                                                                |
|--------------|----------------------------------------------------------------------------------|
| `/`          | Hero · LogoMarquee · HighLevelSection · Industries · Services · HowItWorks · EnterpriseBand · Products · Testimonials · Team · Blog · Contact |
| `/services`  | Services · HowItWorks · HighLevelSection · EnterpriseBand · Contact              |
| `/products`  | Products · Testimonials · Contact                                                |
| `/about`     | About · Team · Testimonials                                                      |
| `/team`      | Team · Contact                                                                   |
| `/blog`      | Blog                                                                             |
| `/contact`   | Contact                                                                          |

All pages share **Nav** (sticky pill at top) and **FooterV2** (red footer).

---

## Component inventory

### Atoms

#### `GlassButton` (`src/glass.jsx` → `btn-glass`)
- Pill shape, glass backdrop-filter, inset top highlight.
- **Variants:** `primary` (red gradient, white text, glow shadow) | default (translucent)
- **Sizes:** `sm` (0.82×) | default | `lg` (1.18×)
- **Hover:** cursor-tracked radial tint (`--mx`, `--my` CSS vars set on mouse move) + specular sweep across the pill (`::after` animates left:-100% → 130%).
- **Active:** `transform: scale(0.98)`.
- Required props: `children`, `variant?`, `size?`, `icon?`, `iconRight?`, `onClick?`.

#### `LiquidToggle`
- Pill track 64×34px; thumb is a radial-gradient sphere that translates `calc(track-w - track-h)` when on.
- On state: track becomes red gradient with glow.

#### `ThemeSwitch`
- Pill 72×36 with sun/moon icons and a single thumb that crossfades white → gold and translates right when light theme is active.

#### `MacCard`
- Glass card with a header row of three traffic-light dots (red `#FF5F57`, yellow `#FEBC2E`, green `#28C840`) and a centered mono title.
- Base of every section card on the site.

### Sections (in render order on `/`)

1. **Nav** — Sticky glass pill at top center. Logo wordmark on left (swaps between color & all-white based on theme), page links in middle with active state showing `--brand-red-tint` background, ThemeSwitch + "Book a quick discovery call" primary CTA on right.

2. **Hero** — Two-column grid:
   - Left: red eyebrow chip with live pulse dot · big Sora headline ("Revenue infrastructure for teams that **run on automation.**", red gradient on accent words) · subhead · two CTAs ("Book a quick discovery call" primary, "See live workflows" outline) · three meta stats (200+ funnels shipped, 10 specialist team, 99.7% workflow uptime).
   - Right: **3D workflow card** (see below — its own component).
   - 3 hero layout variants exposed via Tweaks: workflow (default), dashboard (with bar chart), orbit (glass orb + satellites).

3. **LogoMarquee** — Single eyebrow ("Trusted across the stack — and the platforms we integrate"), then an infinite horizontal scroll of glass logo chips for: **HighLevel · LeadConnector · Zapier · Make · n8n · Twilio · monday.com · Salesforce · Zoho · HubSpot · Mailgun · ClickFunnels**. 32s linear loop, edges faded with mask gradients.

4. **HighLevelSection** — One large mac-card. Left column has the HighLevel logo in a smaller glass frame, a chip ("Certified specialists"), eyebrow, big headline ("We don't just use HighLevel. We **engineer it.**"), copy, and two CTAs. Right column is a 2-column grid of 6 capability cards: Sub-account setup · Snapshot library · Workflow engineering · Custom dashboards · Pipeline architecture · White-label deployment. Bottom strip: 4-stat metrics row (200+ GHL accounts · 4+ yrs · A2P 10DLC dialed · 14d turnaround).

5. **Industries** — 4×3 grid of 12 vertical glass cards (Healthcare & Medspas, Home Services, Real Estate, Financial Services, B2B SaaS, Coaches & Creators, Legal & Professional, Solar & Energy, E-commerce, Fitness & Wellness, Marketing Agencies, Custom / Any Niche). Each: small letter monogram icon, title, mono caption.

6. **Services** — 3×3 grid of 9 mac-card service tiles. Each tile has: red-tinted square icon (lucide-style stroke icon, 18–24px), service title (Sora 20/700), description, then bottom row of pill tags. Services:
   - GHL funnels & landing pages
   - Automation workflows
   - Email + SMS infrastructure
   - Phone, IVR & call routing
   - Integrations & glue code
   - Review management
   - Onboarding & migration
   - AI agents & receptionists
   - Audits & A/B testing

7. **HowItWorks** — 4-column grid of mac-cards. Each numbered `01–04` in mono red, with title and copy. Content:
   1. **Discovery call** — listen to goals, no script.
   2. **Pre-built or custom** — recommend a snapshot or scope a custom build with fixed timeline + written spec.
   3. **Build & deliver** — built in sandbox, reviewed live, shipped inside agreed window.
   4. **Integrate the rest** — iClosed, Calendly, HubSpot, Salesforce wired up; webhooks, native, or Zapier/Make.

8. **EnterpriseBand** — Red-gradient rounded card (32px radius) with a radial red glow blob. Left side: copy + 2 CTAs. Right side: 2×2 grid of glass stat cards (200+ shipped, 99.7% uptime, 14d avg audit-to-live, 10 specialists).

9. **Products** — 2-column grid of 6 snapshot cards, each with a colored gradient thumbnail + glass icon, title, niche, description, price ($297–$697 + Custom "From $1,500"), and a `See snapshot` outline button.

10. **Testimonials** — 3-column grid of mac-cards. Each: 5 yellow stars, quote text, footer row with circular gradient avatar (initial) + name + role. Placeholders ready to be replaced with real quotes.

11. **Team** — 5-column grid (responsive down to 2). 12 members:

    | Name | Role | Chip |
    |---|---|---|
    | Nokhaiz Fareed Awan | CEO & Founder | Strategy |
    | Hassaan Mehdi | COO | Operations |
    | Anees Ur Rehman | CTO | Engineering |
    | Salahuddin | Head of HR | People |
    | Arslan Rana | HR Co-Head | People |
    | Ayesha Khalid | Sales | Sales |
    | Rahima Niazi | Sales | Sales |
    | Hamza Irshad | A2P & DNS Specialist | Compliance |
    | Talha Ismail | Integration Expert | Integrations |
    | Ahmad Faraz | Integration & Dev Expert | Engineering |
    | Zain Ali | Automation Consultation Specialist | Automation |
    | Gull Sher Fareed | Team Lead | Delivery |

    Each card: photo slot (currently a tinted gradient bg with grid pattern + member initials), a small chip pinned bottom-left of photo, then a body row with name, mono role label, two social icon circles (LinkedIn, email).

    **In production, replace the initials/gradient with real photos.** Photo aspect should be `1 / 1.1`.

12. **Blog** — 3-column grid of 3 latest posts. Card has gradient thumb with grid pattern + accent-colored icon, body shows category (mono red), date (mono muted), title (Sora 700), excerpt, then "Read post →" link in red.

13. **Contact** — Two-column section. Left: 4 contact info rows with red-tinted icon squares (Email, Call/WhatsApp, Hours, Typical turnaround). Right: glass contact form (mac-card) with name+email row, "What do you need help with?" select, message textarea, and a "Send message" primary CTA. On submit, transitions to a success state (green check + confirmation copy).

14. **FooterV2** — Dark-red gradient background `linear-gradient(180deg, #B8131F 0%, #500810 100%)` with subtle grid overlay masked to fade at edges. Layout:
    - **Top:** brand block left (white wordmark, tagline, partner chips) + subscribe block right (eyebrow, big headline, copy, glass pill input + white pill button "Subscribe →").
    - **Middle:** 4 link columns (Services / Products / Company / Resources). Each link: Sora 600 white text, on hover the link slides right 18px and an "↗" arrow icon fades in to the right; an arrow character appears on the left edge.
    - **Bottom bar:** copyright · Privacy/Terms/Cookies/Status small links · "OFFICE OPEN · 9–7 PT" pulse indicator + 4 social icon circles (LinkedIn, X, YouTube, Instagram).
    - **No** big "GOLAB AUTOMATION" wordmark — explicitly removed per final spec.

### The Hero 3D Workflow Card — most important piece

The card is the visual centerpiece of the hero. It's a **mac-window-style box** (max-width 540px, 440px tall canvas) showing a **node-mesh workflow** for what GoLab actually does.

**Behavior:**
- **Mouse tilt:** subtle. On hover the card tilts toward cursor with a max ±3° on both X and Y axes, smoothed with `0.06` lerp coefficient. Hover also scales the card by `1.01`. Uses `perspective(1600px) rotateY() rotateX() scale()`.
- **Active-node pulse:** A `setInterval(1100ms)` cycles through `['ghl-trigger', 'assign', 'opp', 'source', 'value', 'dashboard', 'webhook']` and applies an `is-active` class that triggers a 1.1s pulse-ring animation on the current node.

**Node layout (canvas is 100×100 coordinate space, stretched to the inner box):**

| Node | x% | y% | Type |
|---|---|---|---|
| Form | 15 | 10 | input (badge) |
| HubSpot | 50 | 10 | input |
| CallSling | 85 | 10 | input |
| Zapier | 28 | 27 | via (integration tool) |
| Make | 72 | 27 | via |
| GHL Workflow | 50 | 42 | center, highlighted (red filled pill) |
| Assign user | 12 | 60 | action |
| Update opp. | 35 | 60 | action |
| Set source | 58 | 60 | action |
| Lead value | 82 | 60 | action |
| Update dashboard | 50 | 78 | action (wide) |
| Webhook fired | 50 | 90 | output (red mono pill) |
| Sheets | 16 | 96 | output |
| Airtable | 84 | 96 | output |

**Edges (lines connecting nodes — STATIC, no animated travelling dots):**
- `form → zapier`, `hubspot → ghl` (straight), `callsling → make`
- `zapier → ghl`, `make → ghl`
- `ghl → assign` (curve), then sequential straight chain: `assign → opp → source → value`, then `value → dashboard` (curve)
- `dashboard → webhook` (straight)
- `webhook → sheets`, `webhook → airtable`

Lines are SVG paths inside a `viewBox="0 0 100 100"` with `preserveAspectRatio="none"`. Each edge has a transparent wide hit-target sibling for forgiving hover. **On hover** the line brightens from `rgba(232,26,45,0.45)` to `#FF3D4F` with `drop-shadow(0 0 4px ...)` glow and `stroke-width: 1.8`.

The curve helper builds an S-curve between two points using both control points at the midpoint Y; `opts.straight: true` draws a straight `L` line instead.

**Action pills** have a red-tinted bg (`rgba(232,26,45,0.10)`), border, and a small `◆` glyph prefix.

**Footer of the card** shows three compact stats: `2,847 routed · 12s latency · 99.7% uptime`.

Two floating chips sit outside the card edges and animate with the same float keyframe — top-left "form submitted" (red chip), bottom-right "+47% conversion" (neutral chip).

---

## Interactions & motion details

| Element | Trigger | Effect |
|---|---|---|
| Glass button | hover | radial cursor tint + specular sweep, lift -2px |
| Glass button | active | scale 0.98 |
| Nav link | hover | bg `rgba(255,255,255,0.06)`, text → fg-1 |
| Theme switch | click | thumb translates +36px, color crossfades white↔gold, theme attribute on `<html>` swaps |
| Workflow card | mousemove | ±3° tilt, smooth lerp |
| Workflow card | active step | 1.1s pulse ring on current node |
| Workflow edge | hover | brighten + glow |
| Service / product / blog card | hover | translateY(-4 to -6px) |
| Footer link | hover | padding-left +18px, "↗" arrow fades in right, "→" prefix fades in left |
| Industry / how-step / capability card | hover | translateY(-3 to -4px), border red tint |
| Hero card | mount | floaty translateY animation, 7s ease infinite |
| Scroll-reveal | element enters viewport | fade up from translateY(24px) |

---

## Assets

Already bundled in `design/assets/`:

**Logos (PNG):**
- `golab-wordmark-color.png` — primary logo, color on white
- `golab-wordmark-white.png` — all-white for dark backgrounds
- `golab-monogram-red.png` — square red monogram
- `golab-monogram-white.png` — square white monogram
- `logos/highlevel.png` `leadconnector.png` `zapier.png` `make.png` `n8n.png` `twilio.png` `monday.png` `salesforce.png` `zoho.png` — third-party platform logos used in the trust marquee and HighLevel section.

**Team photos:** placeholders — replace with real headshots cropped to `1 / 1.1` aspect.

**Icons:** Lucide-style inline SVGs (stroke 2, round caps) defined as a global `I` object in `src/glass.jsx`. In a real codebase, use `lucide-react` or the team's existing icon library — names map 1:1 (arrow, zap, workflow, layers, mail, phone, funnel, rocket, star, check, plus, bot, globe, spark).

---

## Recommended target stack (if none chosen)

- **Next.js 14** App Router
- **Tailwind CSS** — define the brand tokens above in `tailwind.config.ts` under `theme.extend.colors` and `theme.extend.fontFamily`
- **Framer Motion** for the hero card tilt + node pulse, the float animations, scroll reveals
- **lucide-react** for icons
- **next/font** for Sora, Inter, JetBrains Mono
- **Sanity / Contentful / MDX** for blog content
- Forms via **react-hook-form** + **Resend** (or HighLevel webhook) for submissions
- Newsletter subscribe → ConvertKit/Beehiiv/Substack API
- Hosting: Vercel

---

## Implementation checklist (suggested order)

1. **Tokens** — port colors / fonts / spacing / radii / motion vars into Tailwind config and a global CSS layer
2. **Atoms** — `<GlassButton>` (with the radial-cursor hover + specular sweep), `<LiquidToggle>`, `<ThemeSwitch>`, `<MacCard>`
3. **Layout** — `<Nav>` sticky pill, `<FooterV2>`
4. **Hero workflow card** — use Framer Motion's `useMotionValue` + `useTransform` for the tilt; SVG node-mesh with hover-able paths
5. **Section components** one at a time matching the IA table above
6. **Routing** — App Router pages composing the section components
7. **Theme switching** — `next-themes` or simple `<html data-theme>` attribute + CSS-var-based theming
8. **Polish** — scroll reveals, ambient glow blobs in background, marquee animation
9. **CMS hookup** — blog posts, testimonials, team members, products if these should be editable

---

## Files in this bundle

```
design/
├── index.html              ← entry; loads all CSS + JSX
├── styles.css              ← tokens, glass system, buttons, toggles, nav, ambient
├── styles-sections.css     ← hero card, services, products, testimonials, blog, contact, team, industries, how-it-works, enterprise band
├── styles-extras.css       ← HighLevel section + FooterV2
├── tweaks-panel.jsx        ← in-design tweaks panel (NOT for production — strip)
├── src/
│   ├── glass.jsx           ← GlassButton, LiquidToggle, ThemeSwitch, MacCard, icon set
│   ├── hero.jsx            ← WorkflowCard3D (the node mesh), DashboardCard3D, OrbitCard3D, platform badges
│   ├── sections.jsx        ← Nav, LogoMarquee, Hero, Services, Products, Testimonials, Blog, About, Contact, Industries, EnterpriseBand, HowItWorks, Team + old Footer (replaced by FooterV2)
│   ├── highlevel-footer.jsx← HighLevelSection, FooterV2 (current footer)
│   └── app.jsx             ← page routing + Tweaks wiring
└── assets/                 ← logos
```

To preview the prototype: serve the `design/` folder with any static file server and open `index.html`.

---

## Notes on copy & content

- Hero headline: **"Revenue infrastructure for teams that run on automation."** with "run on automation" in red gradient. Don't change this without product input.
- Brand name is always **GoLab Automation** (one word + space). Logo wordmark uses a custom blocky tech font; matching it in CSS isn't necessary — keep the logo as an image.
- Voice is direct, slightly editorial, lightly first-person ("we"). No emoji in headlines or as iconography. Numbers stay numerals.
- Testimonials, blog posts, prices, and contact details are **placeholders** — replace with real content before launch.
