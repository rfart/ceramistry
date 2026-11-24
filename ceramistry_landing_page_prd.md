# Product Requirements Document (PRD): Ceramistry Landing Page

**Project Name:** Ceramistry Web Landing Page  
**Target Platform:** Web (Responsive: Desktop, Tablet, Mobile)  
**Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion  
**Primary Goal:** Drive iOS App Store downloads by communicating Ceramistry's value proposition—bridging real-world color inspiration with kiln-ready ceramic glaze recipes.

---

## 1. Executive Summary & Objectives

Ceramistry is an iOS application designed for potters and ceramic artists to eliminate "kiln surprises." By extracting color palettes from real-world photography and translating them into measured, predictable glaze recipes with 3D visual previews, Ceramistry saves potters time, clay, materials, and kiln firings.

The landing page must mirror the emotional arc and tactile, nostalgic aesthetic of the 60-second promotional film: **studio frustration → real-world inspiration → technical precision → rewarding physical result**.

### Key Objectives & Success Metrics (KPIs)
* **Primary Conversion:** App Store CTA Click-Through Rate (CTR) — target $\ge 8\%$ of unique visitors.
* **Engagement:** Play rate and completion rate of the 60-second promotional film modal, plus interaction rate on the "Photo-to-Glaze" mini-demo.
* **Performance:** Lighthouse Performance score $\ge 90$, LCP $\le 2.5\text{s}$, CLS $\le 0.1$.

---

## 2. Target Audience

* **Primary: Studio Potters & Ceramic Artists**
  * *Pain points:* Trial-and-error glazing wastes expensive materials and kiln cycles; translating visual inspiration into raw chemical ingredients (feldspar, silica, whiting, colorants) is difficult and unpredictable.
  * *What they need to see:* Proof of accuracy (real fired ceramics vs. app previews), real material breakdowns (grams/percentages), and support for their firing variables (clay body, cone, atmosphere).
* **Secondary: Hobbyist Potters & Ceramics Students**
  * *Pain points:* Intimidated by glaze chemistry and UMF (Unity Molecular Formula) math; looking for an intuitive starting point to mix their own glazes.
  * *What they need to see:* Simplicity of the 3-step workflow and approachable, inspiring visuals.

---

## 3. Brand & Visual Direction

The website should feel like a quiet, sun-drenched ceramics studio—warm, unhurried, and tactile—rather than a sterile SaaS template.

### Color Palette
| Role | Name | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Background (Primary)** | Warm Bisque | `#E8D5B5` | Main page canvas |
| **Surface / Cards** | Bisque Light | `#F0E4D0` | Bento cards, FAQ accordions, demo container |
| **Text (Primary)** | Kiln Charcoal | `#1C1B1A` | Headings and primary body copy |
| **Text (Secondary)** | Stoneware Gray | `#5C5852` | Subheadings, captions, metadata |
| **Accent (Primary)** | Deep Plum | `#4A0072` | Primary CTA buttons, active states |
| **Accent (Secondary)** | Soft Sky Blue | `#8CAFCE` | Highlights, subtle badges, hover accents |
| **Accent (White)** | Warm White | `#FAF8F5` | Light accent backgrounds, contrast surfaces |

### Typography (via `next/font/google`)
* **Display / Headings:** *Instrument Serif* or *Fraunces* (evokes handcrafted editorial warmth).
* **Body / UI:** *Plus Jakarta Sans* or *Inter* (crisp readability for technical glaze recipes and UI previews).
* **Monospace (Recipe Data):** *JetBrains Mono* (for gram weights, percentages, and cone numbers).

### Motion & Media Principles
* Subtle, organic easing (`cubic-bezier(0.22, 1, 0.36, 1)`)—no bouncy or overly aggressive animations.
* Optional subtle CSS film-grain overlay (low opacity `3%–5%`) on hero/dark sections to match the 35mm aesthetic of the promo video.

---

## 4. Page Structure & Content Requirements

### 4.1 Navigation Bar (Sticky, Minimal)
* **Left:** Ceramistry wordmark/logo.
* **Center (Desktop):** Anchor links (`How It Works`, `Features`, `App vs. Reality`, `FAQ`).
* **Right:** Primary CTA button (`Download for iOS`).

### 4.2 Hero Section (Above the Fold)
* **Headline:** *"Turn the colors you love into kiln-ready glaze recipes."*
* **Subheadline:** *"Take the guesswork out of ceramic glazing. Match real-world colors with your camera, generate measured recipes, and preview fired results before you open the kiln."*
* **CTAs:**
  * Primary: **Download on the App Store** (Apple badge or styled button).
  * Secondary: **Watch the 60s Film** (opens Theater Video Modal).
* **Visual:** High-resolution hero photograph (or subtle muted 5-second loop) showing the finished *Olive Khaki* ceramic cup next to the iPhone displaying the matching Ceramistry 3D preview on a warm wooden table.

### 4.3 The Pain Point ("No More Kiln Surprises")
* **Purpose:** Validate the potter's struggle immediately before pitching features.
* **Copy Direction:** Highlight that glazing isn't like painting—a minor shift in recipe or firing temperature can ruin weeks of throwing and trimming, draining time and materials.
* **Visual:** Minimalist typographic layout with subtle contrast (e.g., dark charcoal background strip or understated studio imagery).

### 4.4 Interactive "Photo-to-Glaze" Mini-Demo
* **Purpose:** Let visitors experience the core loop in the browser without downloading first.
* **Layout:** Split interactive widget.
  * *Left:* 3–4 selectable inspiration photos (e.g., *Morning Espresso*, *Rainy Street*, *Studio Clay*, *Mossy Stone*).
  * *Right:* Mock iOS Ceramistry card that dynamically updates on click, displaying:
    1. Extracted dominant color swatches with percentages (e.g., *Warm Ochre 28%*, *Deep Olive Khaki 16%*, *Soft Olive Khaki 12%*).
    2. Clicking a swatch updates the recipe table below (e.g., *Custer Feldspar 30.00g*, *Silica (Flint) 20.00g*, *Whiting 15.00g*, *Redart 35.00g*) and the preview color of a vessel.

### 4.5 How It Works (3-Step Narrative Flow)
1. **Capture Inspiration:** Snap a photo of anything around you and extract its dominant color palette.
2. **Generate the Recipe:** Pick your swatch to receive a balanced, gram-measured recipe ready for the studio scale.
3. **Preview Before You Fire:** Inspect the simulated finish on a 3D form tailored to your clay body, cone, and firing atmosphere.
* **Visuals:** Short, compressed `<video autoPlay muted loop playsInline>` clips of the actual iOS UI inside clean, rounded device frames.

### 4.6 Core Features (Bento Grid)
* **Camera-to-Palette Extraction:** Instant dominant color breakdown from real-world photography.
* **ML-Powered Glaze Prediction:** Predicts fired color, surface texture, and opacity using glaze chemistry & UMF logic.
* **Studio-Ready Variables:** Configurable for different clay bodies, Cones 1–10, and oxidation/reduction atmospheres.
* **3D Visual Preview:** Rotate and inspect your expected glaze finish before loading the kiln.

### 4.7 App vs. Reality (Credibility & Social Proof)
* **Purpose:** Overcome potter skepticism regarding digital glaze predictions.
* **Content:** Side-by-side comparison cards showing the **Ceramistry Digital Preview** next to **Actual Fired Test Tiles / Vessels** (including cone, clay body, and atmosphere metadata).
* **Testimonials:** 2–3 concise quotes from real potters or studio pilot testers.

### 4.8 Potter's FAQ (Accordion)
* *How accurate are the predictions across different kilns?*
* *Can I tweak or substitute base ingredients I already have in my studio?*
* *Which firing cones and atmospheres are supported?*
* *Does Ceramistry work offline in a basement or rural studio?*
* *Is Ceramistry available on Android?* (Optional waitlist capture if relevant).

### 4.9 Final CTA & Footer
* **Final CTA Banner:** *"Capture the colors of your world. Bring them to life in clay."* + App Store Download Button + Desktop QR Code option.
* **Footer:** Brand mark, Contact/Support email, Instagram/TikTok links, Privacy Policy, Terms of Service, Copyright.

---

## 5. Functional Requirements

| ID | Feature | Requirement Details | Priority |
| :--- | :--- | :--- | :--- |
| **FR-1** | **Promo Video Modal** | Clicking "Watch the 60s Film" opens an accessible modal (`Esc` to close, backdrop click to close) embedding a YouTube player (via `react-youtube` or `lite-youtube-embed`) for the demo/teaser video. Pauses automatically on close. YouTube embed is preferred over self-hosted video to reduce bandwidth and leverage adaptive streaming. | P0 (MVP) |
| **FR-2** | **Interactive Mini-Demo** | Client component allowing users to switch between preset photos and swatches with smooth Framer Motion state transitions. Zero external API calls required (static JSON dataset). | P0 (MVP) |
| **FR-3** | **Smart App Store CTA** | On iOS/Mobile, opens the App Store link directly. On Desktop, links to the App Store web preview AND optionally reveals a scannable QR code popover for instant iPhone download. | P1 |
| **FR-4** | **Interactive 3D Cup** | Lightweight `@react-three/fiber` canvas allowing users to drag-rotate a ceramic vessel and toggle between 3–4 sample glaze finishes (Matte/Glossy, Olive Khaki, Ochre). Must lazy-load (`next/dynamic`) so it doesn't block initial page load. | P2 (Post-MVP) |
| **FR-5** | **FAQ Accordion** | Smooth expand/collapse keyboard-accessible accordion for studio questions. | P0 (MVP) |

---

## 6. Technical Specifications

### Tech Stack
* **Framework:** Next.js 15+ (App Router)
* **Language:** TypeScript (strict mode)
* **Styling:** Tailwind CSS v4 (or v3 with custom theme tokens for the clay/olive palette)
* **Animation:** `framer-motion` (with `useReducedMotion` support)
* **Icons:** `lucide-react`
* **3D (Phase 2):** `three`, `@react-three/fiber`, `@react-three/drei`
* **Deployment:** Vercel

### Suggested Folder Structure
```text
src/
├── app/
│   ├── layout.tsx          # Fonts, metadata, global grain/theme
│   ├── page.tsx            # Main landing page assembly
│   ├── privacy/page.tsx    # Privacy Policy (required for App Store)
│   └── terms/page.tsx      # Terms of Service
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── VideoModal.tsx
│   ├── PainPoint.tsx
│   ├── PhotoToGlazeDemo.tsx # Interactive client component
│   ├── HowItWorks.tsx
│   ├── FeatureBento.tsx
│   ├── AppVsReality.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
├── data/
│   └── demoPresets.ts      # Static JSON for photos, swatches, and glaze recipes
└── public/
    ├── images/             # WebP/AVIF optimized studio photography
    └── videos/             # Compressed MP4/WebM UI loops & 60s film
```

### SEO, Metadata & Analytics
* Complete Open Graph (`og:image`, `og:title`, `og:description`) and Twitter Card tags using the closing hero shot (ceramic cup + iPhone).
* Apple Smart App Banner meta tag (`apple-itunes-app`) for iOS Safari visitors.
* Privacy-friendly analytics (Vercel Analytics or Plausible) tracking custom events: `cta_appstore_click`, `video_modal_open`, `demo_swatch_select`.

---

## 7. Non-Functional Requirements

* **Performance:**
  * All images served via `next/image` with proper `sizes` and `priority` on the hero visual.
  * UI loop videos compressed via FFmpeg (`H.264` MP4 / `VP9` WebM, muted, `< 2MB` each).
  * 60-second promo video embedded via YouTube (`react-youtube` or `lite-youtube-embed` for performance) — no self-hosting needed.
* **Accessibility (WCAG 2.1 AA):**
  * Color contrast ratio $\ge 4.5:1$ for all body text (`#1C1B1A` on `#F7F5F0` passes AAA).
  * Proper `aria-label`s on icon buttons, modal focus trapping, and captions/subtitles track (`.vtt`) for the 60s promo video.
* **Responsiveness:** Mobile-first breakpoints (`sm`, `md`, `lg`, `xl`), ensuring the interactive mini-demo stacks cleanly on mobile screens.

---

## 8. Asset Checklist (Needed Before Build)

- [ ] **Hero Photo:** High-res landscape shot of the Olive Khaki cup next to the iPhone on the wooden table.
- [ ] **60s Promo Film:** Uploaded to YouTube (unlisted or public); YouTube video ID needed for embed. Optional `.vtt` subtitle file (or use YouTube's built-in captions).
- [ ] **3 Short UI Clips:** 3–5 second seamless screen recordings (Palette Extraction, Recipe List, 3D Preview).
- [ ] **Demo Dataset:** 3–4 inspiration photos + their real extracted hex codes and matching Ceramistry ingredient lists.
- [ ] **App vs. Reality Photos:** 2–4 pairs of digital preview screenshots alongside actual fired ceramic pieces/test tiles.
- [ ] **Brand Assets:** SVG logo/wordmark, favicon, and App Store URL.

---

## 9. Milestones & Rollout Plan

* **Phase 1 — MVP Launch:**
  * Project setup (Next.js, Tailwind, Fonts, Color tokens).
  * Build Hero, Video Modal, Pain Point, How It Works, Features Bento, App vs. Reality, FAQ, Footer, and Privacy Policy page.
  * Build the interactive `PhotoToGlazeDemo` component.
  * Optimize assets, configure SEO/OG tags, and deploy to Vercel.
* **Phase 2 — Interactive Polish:**
  * Add Desktop QR Code popover on App Store CTAs.
  * Add lazy-loaded `@react-three/fiber` interactive 3D cup preview.
  * Add multi-language toggle (English / Bahasa Indonesia) if targeting local Indonesian pottery studios alongside global potters.