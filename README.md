# Summit Frame & Build

Portfolio case study: a production-style marketing site for a family framing crew in Aurora and the Denver metro.

Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

## What this project shows

- Brand system (forest / brass / paper) applied across homepage, case studies, and 404
- Content modeled as data (`data/projects.ts`, `data/site.ts`) instead of copy pasted into pages
- Dynamic routes with `generateStaticParams` and per-page metadata
- Local SEO: JSON-LD `HomeAndConstructionBusiness`, sitemap, robots, Open Graph image
- Accessibility: skip link, focus styles, reduced-motion, semantic headings
- Image-led layout with `next/image` (priority hero, sized galleries)

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
```

## Map

| Route | Purpose |
| --- | --- |
| `/` | Homepage |
| `/work` | Case-study index |
| `/work/[slug]` | Job write-up |
| `/services` | Services and galleries |
| `/process` | How we work |
| `/about` | Company history |
| `/crew` | Names, photos, and positions |
| `/contact` | Project inquiry |
| `/testimonials` | Reviews |
| `/faq` | Common questions |
| `/area` | Metro city index |
| `/area/[slug]` | Local climate notes |

## Note

Inquiry form posts to the public inbox when the browser can reach it, and falls back to the device mail app. Job photos are generated stand-ins for layout and storytelling — swap in real job-site photos for a live client.

Finish-line additions: scope desk, Front Range climate notes, `/area` city pages, job tracker timelines, and text-the-address contact.
