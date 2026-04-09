# Kydon AI Workforce Factory — Landing Page

Production-ready Next.js 14 landing page for the Kydon AI Workforce Factory & OPC Launchpad initiative.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules (zero external CSS dependencies)
- **Fonts:** Plus Jakarta Sans + JetBrains Mono (via next/font/google)
- **Form:** HubSpot Embed v2
- **Deployment:** Vercel (recommended) or any Node.js host

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## HubSpot Form Setup

Your waitlist form is embedded via HubSpot Forms API v2.

### Step 1 — Find your Portal ID
1. Log into HubSpot
2. Click your account name (top right) → **Account & Billing**
3. Your **Portal ID** is shown at the top (e.g. `12345678`)

### Step 2 — Find your Form ID
1. In HubSpot, go to **Marketing → Forms**
2. Open your waitlist form
3. Click **Actions → Share** or look at the embed code
4. Copy the `formId` value (format: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

### Step 3 — Add to the codebase

Open `components/FinalCTA.tsx` and replace:

```tsx
<HubSpotForm
  portalId="YOUR_PORTAL_ID"   // ← replace with e.g. "12345678"
  formId="YOUR_FORM_ID"       // ← replace with your UUID
  region="na1"                // ← use "eu1" if your HubSpot is EU-hosted
/>
```

---

## SEO & Open Graph Setup

Open `app/layout.tsx` and update:

```ts
metadataBase: new URL("https://factory.kydongrp.com"), // ← your domain
```

Add your OG image at:
```
public/og-image.png   (1200 × 630px recommended)
public/favicon.ico
public/apple-touch-icon.png
```

---

## Deployment on Vercel (Recommended — Free)

### Option A: Drag & Drop (fastest)
1. Run `npm run build` locally
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import from GitHub **or** drag the project folder

### Option B: GitHub → Vercel (auto-deploy on every push)
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import Git Repo
3. Select the repo → click **Deploy**
4. Every `git push` to `main` auto-deploys

### Custom Domain (e.g. factory.kydongrp.com)
1. In Vercel → Project Settings → Domains
2. Add `factory.kydongrp.com`
3. In your DNS provider, add a `CNAME` record:
   - Name: `factory`
   - Value: `cname.vercel-dns.com`
4. Vercel auto-provisions SSL

---

## Project Structure

```
kydon-factory/
├── app/
│   ├── layout.tsx          # Root layout, SEO meta tags, fonts
│   ├── page.tsx            # Main page — assembles all sections
│   └── globals.css         # Brand CSS variables, utility classes
├── components/
│   ├── Navbar.tsx          # Sticky nav with mobile hamburger
│   ├── Navbar.module.css
│   ├── Hero.tsx            # Hero section with stats bar
│   ├── Hero.module.css
│   ├── Sections.tsx        # TrustBar, Problem, Solution, Individuals, Enterprises, Trust
│   ├── Sections.module.css
│   ├── FAQ.tsx             # Accordion FAQ (client component)
│   ├── HubSpotForm.tsx     # HubSpot embed component
│   ├── HubSpotForm.module.css
│   ├── FinalCTA.tsx        # Final CTA section with HubSpot form
│   ├── FinalCTA.module.css
│   ├── Footer.tsx
│   └── Footer.module.css
├── public/
│   ├── og-image.png        # Add your 1200×630 OG image here
│   └── favicon.ico         # Add your favicon here
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## Customisation Quick Reference

| What to change | File |
|---|---|
| Hero headline / subtext | `components/Hero.tsx` |
| Stat bar numbers | `components/Hero.tsx` → `stats` array |
| Brand colours | `app/globals.css` → `:root` variables |
| FAQ questions | `components/FAQ.tsx` → `faqs` array |
| Stage descriptions | `components/Sections.tsx` → `stages` array |
| HubSpot form IDs | `components/FinalCTA.tsx` |
| SEO title & description | `app/layout.tsx` → `metadata` |
| Footer links | `components/Footer.tsx` → `cols` array |
| OG / social preview image | `public/og-image.png` |

---

## Brand Colours

```css
--k-orange:   #FF6B2B   /* Primary orange */
--k-orange2:  #F97316   /* Secondary orange */
--k-amber:    #FBBF24   /* Amber accent */
--k-bg:       #0A0B14   /* Dark navy background */
--k-bg2:      #0E1020   /* Slightly lighter navy */
--k-grad:     linear-gradient(135deg, #FF6B2B 0%, #FBBF24 100%)
```

---

## Support

Built by Claude for Kydon Group.  
For questions: [contact@kydongrp.com](mailto:contact@kydongrp.com)  
Kydon website: [www.kydongrp.com](https://www.kydongrp.com)
