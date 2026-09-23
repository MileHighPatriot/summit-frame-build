# Summit Frame & Build

A concept marketing site for a fictional, family-run framing company in Aurora, Colorado. Built as a portfolio piece to show editorial web design for a trade business. The people, projects, and reviews are illustrative, and most photography is generated. The homepage drone footage is by K on [Pexels](https://www.pexels.com/video/an-aerial-view-of-a-house-being-built-17506765/) (free to use), encoded to 1440p, 1080p, and a portrait cut for phones.

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Motion**, and **Lenis**.

## Highlights

- Editorial design system: warm neutrals, Fraunces + Inter Tight, fluid type scale, 12-column grid (`app/globals.css`)
- Full-bleed video hero, scroll-linked parallax imagery, and restrained reveal motion that respects `prefers-reduced-motion`
- Services hover list, magazine-style case studies, and an accessible, keyboard-operable before/after slider
- Content modeled as data (`data/`) rather than hard-coded in pages
- Working contact form via [Web3Forms](https://web3forms.com) on a fully static export
- Local SEO: JSON-LD, sitemap, robots, and a generated Open Graph image

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form

Create `.env.local` with a free Web3Forms access key (it is safe to expose publicly):

```bash
NEXT_PUBLIC_WEB3FORMS_KEY=your-access-key
```

Without a key, the form falls back to opening the visitor's email app with the details filled in.

## Publish to GitHub Pages

```bash
npm run pages
```

This builds with the `/summit-frame-build` base path and writes the static site to `docs/`.

## Map

| Route | Purpose |
| --- | --- |
| `/` | Home |
| `/work` | Project index |
| `/work/[slug]` | Case study |
| `/services` | Services and galleries |
| `/process` | How we work |
| `/about` | Story, values, and crew |
| `/testimonials` | Reviews |
| `/faq` | Common questions |
| `/contact` | Project inquiry |
