# MantisShield Landing Page

## Overview

Landing page for **MantisShield** — a cybersecurity company specializing in DeFi/Fintech security with autonomous AI agents. The design follows a **cyberpunk dystopian / brutalist** aesthetic inspired by [colossus.credit](https://colossus.credit).

- **Framework**: Next.js 14.2.35 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4 + Custom CSS (globals.css)
- **Animations**: Framer Motion 12.34
- **Icons**: Lucide React 0.563
- **Branch**: `automatization`
- **Dev server**: `npm run dev` → `http://localhost:3000`
- **Build**: `npm run build` (output: `./dist`)
- **Analyze bundle**: `npm run analyze`

---

## Project Structure

```
landing-mantis/
├── app/                          # Next.js App Router (pages)
│   ├── layout.tsx                # Root layout (fonts, Providers, Navbar, video bg)
│   ├── page.tsx                  # Homepage (server component)
│   ├── globals.css               # Global styles + CSS variables + animations
│   ├── icon.png                  # Favicon (32x32, generated from favicon.jpeg)
│   ├── apple-icon.png            # Apple touch icon (180x180)
│   ├── contact/
│   │   └── page.tsx              # Contact page (server component)
│   ├── protocol/
│   │   └── page.tsx              # Protocol page (terminal demo)
│   ├── services/
│   │   └── page.tsx              # Services page (all capabilities)
│   └── api/
│       └── contact/
│           └── route.ts          # POST /api/contact — contact form endpoint
│
├── components/
│   ├── layout/
│   │   └── Navbar.tsx            # Main navbar (logo, links, theme toggle, lang toggle)
│   ├── sections/
│   │   ├── Hero.tsx              # Hero section (DecodingText effect, Hero.jpeg bg)
│   │   ├── Services.tsx          # Homepage "Core Protocols" flip cards (3 cards)
│   │   ├── WhySection.tsx        # "Why MantisShield" flip cards (3 cards)
│   │   ├── StatsBar.tsx          # Stats row (100ms, 24/7, $2.4B, 847+)
│   │   ├── CTASection.tsx        # "Initiate Protocol" CTA with buttons
│   │   ├── ContactContent.tsx    # Contact page client content wrapper
│   │   └── ServicesPageContent.tsx # Services page client content wrapper
│   ├── ui/
│   │   ├── Card.tsx              # Basic brutalist card (hover invert)
│   │   ├── FlipCard.tsx          # 3D flip card (CSS perspective + rotateY)
│   │   └── TypewriterText.tsx    # Character-by-character typing animation
│   ├── visuals/
│   │   └── PixelatedVideoBackground.tsx  # Canvas video processor (Bayer dithering)
│   ├── ContactForm.tsx           # Form with honeypot, validation, status states
│   ├── Footer.tsx                # Footer (CTA, links, brand, copyright)
│   ├── NoiseOverlay.tsx          # Canvas noise grain (1/4 res, 12fps)
│   ├── Providers.tsx             # Client wrapper: ThemeProvider + LanguageProvider
│   └── Terminal.tsx              # Live audit terminal simulation (protocol page)
│
├── lib/
│   ├── i18n.ts                   # Translation strings (EN/ES, ~90 keys each)
│   ├── LanguageContext.tsx        # Language context (useLang hook, localStorage)
│   ├── ThemeContext.tsx           # Theme context (useTheme hook, dark/light)
│   └── utils.ts                  # cn() utility (clsx + tailwind-merge)
│
├── public/
│   ├── assets/
│   │   ├── city_noise_web.mp4    # Background video (960x540, 2MB, compressed)
│   │   ├── city_noise.mp4        # Original 4K video (4096x2160, 117MB — NOT USED)
│   │   ├── Navar.jpeg            # Navbar logo (white mantis head + "MANTIS" text)
│   │   ├── Hero.jpeg             # Hero mantis (green cyberpunk, mix-blend-mode: screen)
│   │   ├── favicon.jpeg          # Source for generated favicons (pixel art mantis)
│   │   ├── MantisLogo.png        # Old logo (11MB — NOT USED, legacy)
│   │   ├── horizontal-logo-*.jpeg   # Alternative logo (unused)
│   │   └── minimalist-geometric-*.jpeg # Alternative logo (unused)
│   ├── apple-touch-icon.png      # Apple touch icon copy
│   ├── favicon-16x16.png         # 16x16 favicon
│   ├── favicon-32x32.png         # 32x32 favicon
│   └── _headers                  # Static asset cache headers (1yr immutable)
│
├── next.config.mjs               # Next.js config (no export, SWC minify, cache headers)
├── tailwind.config.ts            # Tailwind config (custom fonts, animations, keyframes)
├── tsconfig.json                 # TypeScript (strict, bundler resolution, @/* alias)
├── postcss.config.mjs            # PostCSS (tailwindcss plugin)
├── .eslintrc.json                # ESLint (next/core-web-vitals + next/typescript)
├── .gitignore                    # Standard Next.js gitignore
├── package.json                  # Dependencies and scripts
└── PERFORMANCE.md                # Performance optimization notes
```

---

## Dependencies

### Production
| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 14.2.35 | React framework (App Router) |
| `react` | ^18 | UI library |
| `react-dom` | ^18 | React DOM renderer |
| `framer-motion` | ^12.34.0 | Animations (hero entrance, terminal logs, navbar, mobile menu) |
| `lucide-react` | ^0.563.0 | Icons (ArrowUpRight, Menu, X) |
| `clsx` | ^2.1.1 | Conditional classname utility |
| `tailwind-merge` | ^3.4.0 | Merge Tailwind classes without conflicts |

### Development
| Package | Version | Purpose |
|---------|---------|---------|
| `typescript` | ^5 | Type safety |
| `tailwindcss` | ^3.4.1 | Utility-first CSS |
| `postcss` | ^8 | CSS processing |
| `eslint` | ^8 | Linting |
| `eslint-config-next` | 14.2.35 | Next.js ESLint rules |
| `@next/bundle-analyzer` | ^16.1.6 | Bundle size analysis |
| `@types/node` | ^20 | Node.js types |
| `@types/react` | ^18 | React types |
| `@types/react-dom` | ^18 | React DOM types |

---

## Fonts

Loaded via `next/font/google` in `app/layout.tsx`:

| Font | CSS Variable | Usage |
|------|-------------|-------|
| **EB Garamond** | `--font-garamond` | Headings (h1, h2, h3), serif text |
| **JetBrains Mono** | `--font-mono` | Body text, labels, UI, code-style elements |

---

## Images & Assets

### Active (used in production)
| File | Location | Size | Usage |
|------|----------|------|-------|
| `Navar.jpeg` | `/public/assets/` | 47KB | Navbar logo (mix-blend-mode: lighten) |
| `Hero.jpeg` | `/public/assets/` | 53KB | Hero background mantis (mix-blend-mode: screen, digitalPulse animation) |
| `favicon.jpeg` | `/public/assets/` | 72KB | Source for favicon generation |
| `city_noise_web.mp4` | `/public/assets/` | 2MB | Background video (960x540, compressed from 4K) |
| `icon.png` | `/app/` | 1.7KB | Favicon 32x32 |
| `apple-icon.png` | `/app/` | 23KB | Apple touch icon 180x180 |
| `favicon-32x32.png` | `/public/` | 1.7KB | Fallback favicon |
| `favicon-16x16.png` | `/public/` | 858B | Small favicon |
| `apple-touch-icon.png` | `/public/` | 23KB | Fallback apple icon |

### Legacy (not used, can be deleted)
| File | Size | Reason |
|------|------|--------|
| `MantisLogo.png` | 11MB | Replaced by Navar.jpeg |
| `city_noise.mp4` | 117MB | Replaced by city_noise_web.mp4 (compressed) |
| `horizontal-logo-*.jpeg` | 40KB | Alternative logo, never used |
| `minimalist-geometric-*.jpeg` | 102KB | Alternative logo, never used |

---

## API Endpoints

### POST `/api/contact`
Contact form submission handler.

**Request body:**
```json
{
  "name": "string (required)",
  "email": "string (required, validated)",
  "protocol": "string (optional)",
  "message": "string (required)"
}
```

**Responses:**
- `200` → `{ "success": true }`
- `400` → `{ "error": "Missing required fields" }` or `{ "error": "Invalid email address" }`
- `500` → `{ "error": "Internal server error" }`

**Note:** Currently logs to console. TODO: Integrate with email service (Resend, SendGrid, etc.)

---

## Feature: Dark/Light Mode

### Architecture
- **Context**: `lib/ThemeContext.tsx` → `ThemeProvider` + `useTheme()` hook
- **Persistence**: `localStorage` key `mantis-theme`
- **Detection**: Falls back to `prefers-color-scheme` on first visit
- **Mechanism**: Toggles `light-mode` class on `<html>` element

### CSS Variables (`globals.css`)
| Variable | Dark (default) | Light |
|----------|---------------|-------|
| `--bg-primary` | `#000000` | `#F5F5F0` |
| `--bg-secondary` | `#0A0A0A` | `#EAEAE5` |
| `--text-primary` | `#FFFFFF` | `#0A0A0A` |
| `--text-secondary` | `rgba(255,255,255,0.6)` | `rgba(0,0,0,0.6)` |
| `--accent-green` | `#00FF00` | `#00CC00` |
| `--accent-red` | `#FF0000` | `#CC0000` |
| `--border-color` | `#FFFFFF` | `#0A0A0A` |
| `--card-bg` | `rgba(255,255,255,0.03)` | `rgba(0,0,0,0.03)` |
| `--card-border` | `rgba(255,255,255,0.15)` | `rgba(0,0,0,0.15)` |

### Light Mode Overrides
Comprehensive CSS overrides in `globals.css` targeting Tailwind hardcoded classes:
- `html.light-mode section`, `footer` → `var(--bg-primary)`
- `html.light-mode .text-white` → `var(--text-primary)`
- `html.light-mode .text-white/XX` → inverted opacity equivalents
- `html.light-mode .border-white/XX` → inverted borders
- `html.light-mode .bg-black/XX` → light equivalents
- Video background: dims to 6% opacity + `filter: invert(1)`

### Toggle Button
- Desktop: `[☀]` / `[☾]` in navbar (right side)
- Mobile: `[☀ LIGHT]` / `[☾ DARK]` in mobile menu

---

## Feature: i18n (EN/ES)

### Architecture
- **Translations**: `lib/i18n.ts` — ~90 keys per language
- **Context**: `lib/LanguageContext.tsx` → `LanguageProvider` + `useLang()` hook
- **Hook returns**: `{ lang, toggleLang, t }` where `t(key)` returns translated string
- **Persistence**: `localStorage` key `mantis-lang`
- **HTML**: Updates `document.documentElement.lang` attribute

### Toggle Button
- Desktop: `[ES]` / `[EN]` in navbar (right side, before theme toggle)
- Mobile: Same in mobile menu

### Translated Components
All visible text across the site uses `t("key")`:
- Navbar links, Hero (headlines, subtitle, CTAs), Stats Bar, Services (Core Protocols cards), WhySection (flip cards), CTA Section, Footer, Contact page, Contact form (labels, placeholders, status messages), Services page (all cards), Terminal (headers, stats)

### Translation Key Pattern
```
nav.services, nav.protocol, nav.contact
hero.status, hero.line1, hero.line2, hero.line3, hero.subtitle
stats.response, stats.monitoring, stats.secured, stats.audited
services.01.title, services.01.desc (through 03)
why.01.title, why.01.desc (through 03)
cta.heading, cta.subtitle, cta.btn1, cta.btn2
footer.heading1, footer.heading2, footer.cta, footer.brand.desc
contact.heading, contact.subtitle, contact.directChannel
form.name, form.email, form.protocol, form.message, form.submit
protocol.label, protocol.heading, protocol.contractsAudited
servicesPage.heading1, servicesPage.mcp.title, servicesPage.mcp.desc
```

---

## Feature: Flip Cards (3D)

### Component: `components/ui/FlipCard.tsx`
- Receives `front` and `back` as `ReactNode` props
- CSS-only 3D animation (no JS for flip)
- `perspective: 1000px`, `transform: rotateY(180deg)` on hover
- `backface-visibility: hidden` on both faces
- `transition: transform 0.6s ease`
- Green glow `box-shadow` on hover

### Used in:
- **Services section** (homepage): 3 cards — Kill Chain Ontology, Autonomous Intervention, Adversarial War-Testing
- **WhySection** (homepage): 3 cards — Autonomous Detection, Zero-Latency Response, Formal Verification

---

## Visual Effects

### PixelatedVideoBackground (`components/visuals/PixelatedVideoBackground.tsx`)
- Canvas-based video processor with **Bayer 4x4 dithering matrix**
- Dual rendering: CSS-filtered `<video>` (immediate) + Canvas (progressive)
- Video source: `/assets/city_noise_web.mp4` (2MB, 960x540)
- Green/cyan tint on white pixels
- Throttled to 18fps
- Includes: scanlines, CRT vignette, sweeping scan line, dithered dot pattern
- Loaded via `dynamic()` with `ssr: false`

### NoiseOverlay (`components/NoiseOverlay.tsx`)
- Canvas noise grain at **1/4 resolution**, throttled to **12fps**
- Low opacity, pointer-events-none

### Custom Cursors (CSS-only, globals.css)
- Default: Crosshair SVG (circle + lines)
- Interactive elements: Square targeting cursor
- Text inputs: Vertical line cursor

### Animations (globals.css + Tailwind config)
| Animation | Type | Usage |
|-----------|------|-------|
| `glitch` | CSS keyframes | Glitch text effect (clip-path + transform) |
| `blink` | CSS keyframes | Terminal cursor blink (1s step-end) |
| `flicker` | CSS keyframes | Subtle opacity flicker (4s) |
| `digitalPulse` | CSS keyframes | Hero mantis bg (opacity 0.12→0.20, 4s) |
| `fadeIn` | CSS keyframes | Page transition (opacity 0→1, 0.3s) |
| `scanline` | Tailwind keyframes | Scanning line effect (8s translateY) |
| `DecodingText` | JS (Hero.tsx) | Character-by-character decode from random chars |
| `TypewriterText` | JS (TypewriterText.tsx) | Sequential character typing |

---

## CSS Architecture (globals.css)

### Sections
1. **Tailwind directives** — `@tailwind base/components/utilities`
2. **CSS Variables** — `:root` (dark) and `html.light-mode` (light)
3. **Base styles** — box-sizing, scroll-behavior, body font
4. **Custom cursors** — SVG data URIs for crosshair, pointer, text
5. **Typography hierarchy** — h1-h3 (serif), p/label (mono), responsive clamp sizes
6. **Selection & Scrollbar** — Green selection, thin custom scrollbar
7. **Light mode overrides** — Comprehensive overrides for Tailwind hardcoded classes
8. **Navbar toggles** — `.navbar-toggle` button styles
9. **Brutalist components** — `.brutal-card`, `.brutal-button`, `.brutal-input`
10. **Nav link hover** — Underline on hover with `::after` pseudo-element
11. **Animations** — glitch, blink, flicker, digitalPulse, fadeIn
12. **Background effects** — `.grid-bg`, `.scanlines`
13. **Colossus-style patterns** — `.dithered-pattern`, `.currency-lines`, `.engraved-text`, `.monochrome-border`
14. **Navbar logo glow** — Green drop-shadow on hover
15. **Hero mantis visual** — digitalPulse animation class
16. **Flip card 3D** — perspective, transform-style, backface-visibility
17. **Utilities** — `.border-brutal`, `.hover-invert`

---

## Routing

| Route | File | Type | Description |
|-------|------|------|-------------|
| `/` | `app/page.tsx` | Static | Homepage (Hero, Stats, Services, Why, CTA, Footer) |
| `/services` | `app/services/page.tsx` | Static | All 6 service capabilities |
| `/protocol` | `app/protocol/page.tsx` | Static | Terminal audit demo |
| `/contact` | `app/contact/page.tsx` | Static | Contact form + info cards |
| `/api/contact` | `app/api/contact/route.ts` | Dynamic | POST endpoint for form |

---

## Navbar Layout

```
Desktop:
[SERVICES] ——— [🦗 MANTIS] ——— [PROTOCOL] [CONTACT]  ...  [ES] [☀]

Mobile (hamburger menu):
        [🦗 MANTIS]
        SERVICES
        PROTOCOL
        CONTACT
        [ES]  [☀ LIGHT]
```

---

## Build Configuration

### next.config.mjs
- `distDir: "dist"` — Custom build output directory
- `images.unoptimized: true` — No image optimization (static deploy)
- `swcMinify: true` — SWC-based minification
- `compress: true` — Gzip compression
- `poweredByHeader: false` — Remove X-Powered-By header
- `experimental.optimizePackageImports` — Tree-shake framer-motion and lucide-react
- **Cache headers**: 1-year immutable for static assets (svg, jpg, png, webp, mp4)

### Performance Optimizations
- Video compressed from 4K/117MB → 540p/2MB via ffmpeg
- NoiseOverlay renders at 1/4 resolution, 12fps
- PixelatedVideoBackground throttled to 18fps
- `dynamic()` imports with `ssr: false` for heavy client components (PixelatedVideoBackground, Terminal, ContactForm)
- Package imports optimized for tree-shaking

---

## Provider Architecture

```
<html>
  <body>
    <Providers>                    ← components/Providers.tsx (client)
      <ThemeProvider>              ← lib/ThemeContext.tsx
        <LanguageProvider>         ← lib/LanguageContext.tsx
          <PixelatedVideoBackground />  ← dynamic, ssr: false
          <NoiseOverlay />
          <Navbar />               ← uses useTheme + useLang
          <main>{children}</main>  ← pages
        </LanguageProvider>
      </ThemeProvider>
    </Providers>
  </body>
</html>
```

---

## Server vs Client Components

### Server Components (export metadata)
- `app/layout.tsx`
- `app/page.tsx`
- `app/services/page.tsx`
- `app/contact/page.tsx`
- `app/protocol/page.tsx`

### Client Components ("use client")
- All components in `components/` (Navbar, Hero, Services, WhySection, Footer, etc.)
- All contexts in `lib/` (ThemeContext, LanguageContext)
- `components/Providers.tsx` — bridges server layout to client contexts

---

## Design Tokens

### Colors
- **Primary**: Black `#000000` / White `#FFFFFF`
- **Accent Green**: `#00FF00` (dark) / `#00CC00` (light) / `#4ade80` (Tailwind green-400)
- **Accent Red**: `#FF0000` (dark) / `#CC0000` (light)
- **Text muted**: `rgba(255,255,255,0.4-0.7)` (dark) / `rgba(0,0,0,0.3-0.6)` (light)

### Typography Scale
- h1: `clamp(2.5rem, 8vw, 6rem)` — serif
- h2: `clamp(2rem, 5vw, 3.5rem)` — serif
- h3: `clamp(1.5rem, 3vw, 2rem)` — serif
- Body: `0.875rem` — mono
- Labels/UI: `10-11px` — mono, uppercase, tracking `0.2-0.3em`

### Spacing
- Max content width: `1400px` (homepage), `1600px` (services), `1200px` (terminal, contact)
- Section padding: `py-32 px-6 md:px-12`
- Navbar height: `h-20 md:h-24`
