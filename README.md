# Scroll-Driven Hero Section Animation (KineticHero)

A Next.js + GSAP implementation of a scroll-driven hero section inspired by the reference demo.

## Submission Links

- Live Webpage: 
- GitHub Repository: `<ADD_YOUR_GITHUB_REPO_URL_HERE>`

## Tech Stack

- Next.js (App Router)
- React
- GSAP + ScrollTrigger
- Tailwind CSS (global import) + custom CSS

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Assignment Requirement Verification

### 1) Hero Section Layout

- Above-the-fold full-screen hero is implemented in `src/app/page.tsx`.
- Letter-spaced headline (`WELCOME ITZFIZZ`) is implemented in `src/app/page.tsx`.
- Impact metric cards are implemented below the headline in `src/app/page.tsx`.

### 2) Initial Load Animation

- Headline reveal uses staggered fade + movement via GSAP timeline in `src/app/page.tsx`.
- Stats animate in sequence with subtle delay via GSAP timeline in `src/app/page.tsx`.
- Timing/easing tuned with `power3.out` for smoother premium motion.

### 3) Scroll-Based Animation (Core)

- Scroll-driven timeline implemented with GSAP `ScrollTrigger` (`scrub`) in `src/app/page.tsx`.
- Main visual (vehicle + environment layers) moves based on scroll progress, not autoplay.
- Scene includes coordinated transforms for car, wheels, hills, fog, sun, road lines, and camera scale.

### 4) Motion & Performance Guidelines

- Uses `transform` and opacity-based animation properties for smooth rendering.
- Avoids layout-reflow-heavy updates during scroll.
- Adds `will-change` hints to animated elements in `src/app/globals.css`.

## Main Files

- `src/app/page.tsx`: Hero markup + GSAP intro/scroll animation logic.
- `src/app/globals.css`: Visual styling, responsive layout, animation-ready scene layers.
- `src/app/layout.tsx`: Metadata and global app layout.

## Validation

- `npm run lint` passed.
- `npm run build` passed.
# kinetichero
