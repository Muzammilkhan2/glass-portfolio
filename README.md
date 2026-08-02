# Muzammil Ullah Khan — Liquid Glass Portfolio

Premium full-screen hero with cursor/touch liquid-glass anatomical reveal.

## Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS

## Setup

```bash
cd glass-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Assets

Place images in `public/images/`:

| File | Purpose |
|------|---------|
| `Base_image_desktop.png` | Normal portrait (desktop) |
| `Reveal_image_desktop.png` | Liquid-glass version (desktop) |
| `Base_image_mobile.png` | Normal portrait (mobile) |
| `Reveal_image_mobile.png` | Liquid-glass version (mobile) |

**Important:** Base and Reveal pairs must be pixel-aligned (same canvas, head size, pose, crop, lighting).

## Customization

- Name / brand → `components/glass-hero.tsx`
- CTA links → LinkedIn currently set
- Heading & copy → same file
- Colors / radius → CSS variables + `DESKTOP_RADIUS` / `MOBILE_RADIUS`

## Notes

- Reveal uses pure CSS `mask-image` radial gradient driven by `--reveal-x`, `--reveal-y`, `--reveal-radius`.
- Pointer + touch supported. One `requestAnimationFrame` loop, no React state for movement.
- Respects `prefers-reduced-motion`.
- Mobile nav links are hidden (brand + CTA remain). No hamburger.
