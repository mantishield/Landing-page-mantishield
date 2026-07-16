# MantisShield Landing Page

## Overview

Landing page for **MantisShield** — a security research firm specializing in fraud, scam, phishing/spoofing, crypto-scam, malicious-miner and deepfake investigation. The design follows the **Verdict design system** (Apple/Mac dark aesthetic) layered on top of the original cyberpunk visual effects (pixelated video background, noise, custom cursors, glitch, flip cards).

- **Framework**: Next.js 16.2.x (App Router, Turbopack)
- **React**: 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4 + Custom CSS (globals.css)
- **Animations**: Framer Motion 12
- **Icons**: Lucide React
- **Dev server**: `npm run dev` → `http://localhost:3000`
- **Build**: `npm run build` (default `.next` output)
- **Analyze bundle**: `npm run analyze`
- **Dark mode only** — light mode was removed entirely.
- **i18n**: EN/ES via `lib/i18n.ts` + `useLang()`

## Hosting / Deployment

- **mantishield.xyz** (this landing) → **Vercel**, Mantis account, project connected to GitHub repo `mantishield/Landing-page-mantishield` (public), branch `main`. Every push to `main` auto-deploys.
- **verdict.mantishield.xyz** (Verdict product) → **AWS EC2** behind Caddy (separate repo/infra, do not touch from here).
- DNS: Namecheap (`registrar-servers.com` nameservers). Apex A record → Vercel; `_vercel` TXT used for domain verification.

---

## Project Structure

```
landing-mantis/
├── app/
│   ├── layout.tsx                # Root layout (metadata, Providers, Navbar, video bg)
│   ├── page.tsx                  # Homepage (Hero, Stats, Services, Why, Verdict, CTA, Footer)
│   ├── globals.css               # Global styles + CSS variables + animations
│   ├── icon.png / apple-icon.png # Favicons
│   ├── contact/page.tsx          # Contact page
│   ├── services/page.tsx         # Services page (6 capabilities)
│   └── api/contact/route.ts      # POST /api/contact
│
├── components/
│   ├── layout/Navbar.tsx         # Logo, SERVICES / VERDICT↗ / CONTACT, lang toggle
│   ├── sections/
│   │   ├── Hero.tsx              # DecodingText effect, Hero.jpeg (hue-rotated blue)
│   │   ├── Services.tsx          # 3 flip cards (fraud/crypto scams, phishing, deepfakes)
│   │   ├── WhySection.tsx        # 3 flip cards
│   │   ├── StatsBar.tsx          # 24/7, <60s, EN/ES, AI+Human (values via i18n)
│   │   ├── VerdictSection.tsx    # Verdict product panel (glass, badge-pill, external CTA)
│   │   ├── CTASection.tsx        # CTA → /contact + Verdict external
│   │   ├── ContactContent.tsx    # Contact page client content
│   │   └── ServicesPageContent.tsx
│   ├── ui/                       # Card, FlipCard (3D), TypewriterText
│   ├── visuals/
│   │   ├── PixelatedVideoBackground.tsx  # Canvas Bayer dithering, blue tint
│   │   └── VideoBackgroundClient.tsx     # Client wrapper: dynamic(ssr:false) — required by Next 15+
│   ├── ContactForm.tsx           # Honeypot, validation, status states
│   ├── Footer.tsx                # CTA, Product column (Verdict), links, info@mantishield.xyz
│   ├── NoiseOverlay.tsx          # Canvas noise grain (1/4 res, 12fps)
│   └── Providers.tsx             # <LanguageProvider> only
│
├── lib/
│   ├── i18n.ts                   # EN/ES translations
│   ├── LanguageContext.tsx       # useLang() hook, localStorage "mantis-lang"
│   └── utils.ts                  # cn()
│
├── public/assets/                # Hero.jpeg, Navar.jpeg, city_noise_web.mp4, favicon.jpeg
├── next.config.mjs               # No distDir (Vercel), no swcMinify (removed in Next 15+)
├── tailwind.config.ts            # Remapped black/white, accent, system fonts
└── tsconfig.json                 # strict, @/* alias
```

**Deleted (do not re-add)**: `lib/ThemeContext.tsx`, `app/protocol/`, `components/Terminal.tsx` — light mode and the /protocol terminal page were removed in the redesign.

---

## Design System (Verdict-derived)

### Colors (CSS vars in globals.css + Tailwind remap)
| Token | Value | Notes |
|---|---|---|
| `--bg-primary` / Tailwind `black` | `#06070f` | Blue-black; all `bg-black` utilities resolve to this |
| `--text-primary` / Tailwind `white` | `#edf2f8` | All `text-white/XX` utilities resolve to this |
| `--accent` / Tailwind `accent` | `#38bdf8` | Sky blue; glows use `rgba(56,189,248,…)` |
| `--panel` | `rgba(226,236,245,.045)` | Glass panels |
| `--hairline` | `rgba(226,236,245,.14)` | Hairline borders |

Body background: `#06070f` + radial gradient `circle at 50% 42%, rgba(8,12,20,.92) → rgba(4,6,12,.96)`.

### Typography (system fonts — no Google Fonts)
- **Sans**: `-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Inter", system-ui, sans-serif`
- **Mono**: `ui-monospace, "SF Mono", Menlo, monospace`
- h1: weight 700, `letter-spacing: -0.035em`, `line-height: 1.04`; h2/h3: weight 700, `-0.02em`
- Headlines are **sentence case** (like Verdict's "Analyze your email."), NOT uppercase.

### Key CSS utilities (globals.css)
- `.text-gradient` — white→`#a9cdf2` via `background-clip: text`. Has `padding-bottom: 0.12em` + negative margin to prevent descender clipping (g, y, p) — do not remove.
- `.badge-pill` — pill with luminous accent dot (Verdict style).
- `.glass-panel` — `--panel` bg + `backdrop-filter: blur(8px)` + hairline border.
- Custom cursors (crosshair/target/text) re-tinted to `#38bdf8`.
- Kept effects: glitch, blink, flicker, digitalPulse, fadeIn, `.grid-bg`, `.scanlines`, dithered patterns, flip-card 3D (blue glow).

### Green assets → blue
`Hero.jpeg` and `Navar.jpeg` are green source images; they are turned blue at render time with `filter: hue-rotate(140deg)` (+ brightness/drop-shadow). `PixelatedVideoBackground` tints white pixels to `rgb(120,200,255)`.

---

## Positioning & Copy (i18n)

Honest security-research copy — **no invented metrics, no military jargon** (kill chains, zk-SNARKs, fake $2.4B stats were removed). Topics: phishing, spoofing, crypto scams (rug pulls, wallet drainers, fraudulent exchanges), malicious miners/cryptojacking, BEC, deepfakes.

- Hero: EN "We investigate / digital fraud / & scams." · ES "Investigamos / el fraude / digital."
- Stats: `24/7` monitoring · `<60s` Verdict email analysis · `EN/ES` coverage · `AI + Human`
- Contact email everywhere: **info@mantishield.xyz** (never `.io`)

### Translation key groups (`lib/i18n.ts`)
```
nav.services, nav.verdict, nav.contact
hero.status, hero.line1-3, hero.subtitle, hero.cta1, hero.cta2, hero.scroll
stats.value1-4 + stats.response/monitoring/secured/audited
services.label/heading/01-03.title/desc/viewAll
why.01-03.title/desc
verdict.badge/name/tagline/feature1-3/cta
cta.heading/subtitle/btn1/btn2
footer.*, contact.*, form.*
servicesPage.* (6 capability cards)
```
No `protocol.*` keys exist.

---

## Navbar

```
Desktop: [SERVICES] ——— [🦗 MANTIS] ——— [VERDICT ↗] [CONTACT]  ...  [ES]
```
- Verdict is an external link (`https://verdict.mantishield.xyz/`, `target="_blank" rel="noopener noreferrer"`, ArrowUpRight icon).
- Language toggle only — there is NO theme toggle.

---

## Routing

| Route | Type | Description |
|---|---|---|
| `/` | Static | Hero, Stats, Services, Why, VerdictSection, CTA, Footer |
| `/services` | Static | 6 capabilities |
| `/contact` | Static | Form + direct channel (info@mantishield.xyz) |
| `/api/contact` | Dynamic | POST endpoint (currently logs to console; TODO email service) |

`/protocol` no longer exists (404).

---

## Next.js 16 Gotchas

- `dynamic(..., { ssr: false })` is **forbidden in Server Components**. The video background is wrapped in `components/visuals/VideoBackgroundClient.tsx` (`"use client"`); import that from `layout.tsx`.
- `swcMinify` config option was removed — do not re-add to next.config.mjs.
- Build uses Turbopack by default.
- eslint 9 + eslint-config-next 16.

## Security Notes

- Repo is **public** — never commit secrets; env vars go in Vercel project settings only. `.env*` is gitignored.
- `npm audit`: one known residual moderate (postcss vendored inside Next itself, no upstream fix, no practical risk for static output).

---

## API: POST `/api/contact`

Body: `{ name, email, protocol?, message }` → 200 `{ success: true }` | 400 validation | 500.
Currently logs to console. TODO: integrate email service (Resend/SendGrid) via Vercel env vars.

---

## Provider Architecture

```
<html><body>
  <Providers>                    ← LanguageProvider only
    <VideoBackgroundClient />    ← dynamic(ssr:false) inside client wrapper
    <NoiseOverlay />
    <Navbar />
    <main>{children}</main>
  </Providers>
</body></html>
```

## Performance

- Video: `city_noise_web.mp4` (960x540, 2MB). `city_noise.mp4` (117MB 4K) and `MantisLogo.png` (11MB) are legacy, unused.
- NoiseOverlay: 1/4 res, 12fps. PixelatedVideoBackground: 18fps.
- `experimental.optimizePackageImports`: framer-motion, lucide-react.
- Static asset cache headers: 1yr immutable (next.config.mjs `headers()`).
