# Sachin Gautam — Portfolio

Personal portfolio site for Sachin Gautam (Cybersecurity Student & Associate SOC Analyst), built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4. Supports light/dark/system theme, is fully SEO-optimized (metadata, sitemap, robots, JSON-LD, OG image), and is ready to deploy on Vercel with the custom domain `sachin01.com.np`.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **Tailwind CSS v4**
- **next-themes** for light/dark/system mode
- **lucide-react** for icons
- All resume content lives in one place: [`src/lib/data.ts`](src/lib/data.ts) — edit that file to update experience, projects, skills, certifications, etc.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Editing content

Everything on the page (name, bio, experience, projects, skills, certifications, achievements, education, social links) comes from [`src/lib/data.ts`](src/lib/data.ts). Update that file and the whole site updates — no need to touch component files for content changes.

To swap the résumé PDF that the "Download resume" button links to, replace [`public/Sachin_Gautam_Resume.pdf`](public/Sachin_Gautam_Resume.pdf) with the new file (keep the same filename, or update the `href` in [`src/components/hero.tsx`](src/components/hero.tsx)).

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new), import the repository, and click **Deploy**. No environment variables are required.
3. Once deployed, go to your Vercel project → **Settings → Domains** and add `sachin01.com.np` (and `www.sachin01.com.np` if you want the `www` subdomain too).
4. Vercel will show you the DNS records to add at your domain registrar (wherever `sachin01.com.np` is registered):
   - For the apex domain (`sachin01.com.np`): add an **A record** pointing to `76.76.21.21` (Vercel will confirm the exact value to use).
   - For `www.sachin01.com.np`: add a **CNAME record** pointing to `cname.vercel-dns.com`.
5. DNS propagation can take a few minutes to a few hours. Vercel automatically issues an SSL certificate once the domain verifies.
6. Update `site.url` in [`src/lib/data.ts`](src/lib/data.ts) if it ever changes — it drives canonical URLs, Open Graph tags, and the sitemap.

## SEO checklist (already done)

- Per-page `<title>`/`<meta description>` via the Metadata API
- Open Graph + Twitter Card tags with a generated 1200×630 OG image (`/opengraph-image`)
- `sitemap.xml` and `robots.txt` generated at build time
- `manifest.webmanifest` for PWA installability
- JSON-LD `Person` structured data for rich search results
- Semantic HTML, descriptive alt/aria labels, and a fully responsive layout
