# ⚡ Lithium Golf Cart Conversions — Website

Premium single-page marketing website for a mobile golf cart lithium battery conversion service.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Google Fonts

---

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
├── app/
│   ├── layout.tsx        # Root layout, Google Fonts (Playfair Display + Inter)
│   ├── page.tsx          # Assembles all sections
│   └── globals.css       # Tailwind base + smooth scroll
├── components/
│   ├── Navbar.tsx        # Sticky nav with mobile hamburger menu
│   ├── Hero.tsx          # Full-screen hero with CTA
│   ├── WhatsIncluded.tsx # Package contents with icon list
│   ├── WhyUpgrade.tsx    # 5 benefit cards
│   ├── Compatibility.tsx # Cart model compatibility grid
│   ├── Pricing.tsx       # Big bold pricing card with urgency
│   ├── Contact.tsx       # Contact form (mailto fallback)
│   └── Footer.tsx        # Links, tagline, copyright
├── tailwind.config.ts    # Custom colors + font tokens
├── next.config.js
└── tsconfig.json
```

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `forest` | `#1a3d2b` | Primary dark green — sections, headings |
| `forest-dark` | `#112a1e` | Deeper green — navbar, footer |
| `gold` | `#c9a84c` | Accent — CTAs, highlights, dividers |
| `gold-light` | `#dfc27a` | Hover states |
| `cream` | `#f9f6ef` | Light background sections |

---

## Customization

- **Contact email:** Update `CONTACT_EMAIL` constant in [`components/Contact.tsx`](components/Contact.tsx)
- **Business name / tagline:** Edit [`components/Navbar.tsx`](components/Navbar.tsx) and [`components/Footer.tsx`](components/Footer.tsx)
- **Pricing:** Update the `$1,600` figure in [`components/Pricing.tsx`](components/Pricing.tsx) and [`components/Hero.tsx`](components/Hero.tsx)
- **Cart compatibility list:** Edit the `carts` array in [`components/Compatibility.tsx`](components/Compatibility.tsx)

---

## Build for Production

```bash
npm run build
npm start
```

Or deploy directly to [Vercel](https://vercel.com) — just connect the repo and it works out of the box with no configuration needed.

---

## Deploy to Vercel (Recommended)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Leave all settings as default → Deploy

Your site will be live on a `.vercel.app` domain in under a minute. Custom domain setup is available in the Vercel dashboard.
