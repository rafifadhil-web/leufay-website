# Leufay Production

A static, editorial website for an anime, games, and pop-culture creative media brand. The visual direction is warm, playful, Japanese-inspired, and intentionally avoids cyberpunk or SaaS aesthetics.

## Run and build

```bash
npm install
npm run dev
npm run lint
npm run build
```

`npm run build` creates `/out`, which is ready to upload to InfinityFree. Upload the *contents* of `out` to the domain's `htdocs` directory. No Node.js, server routes, API routes, middleware, or image optimizer are required.

## Configuration

Edit `src/config/site.ts` to set the future domain, Instagram URL, email, and Link Shoppe URL. Content, projects, and affiliate-ready product links are separated into `src/data/content.ts`, `src/data/projects.ts`, and `src/data/products.ts`.

## Replacing visual placeholders

The site deliberately uses visible, labeled asset placeholders. Add official files beneath:

```
public/assets/logo/
public/assets/mascot/
public/assets/hero/
public/assets/projects/
public/assets/content/
public/assets/shop/
public/assets/icons/
```

Replace the relevant `AssetPlaceholder` component in the page/component with an `<img>` tag pointing at the final asset. Recommended filenames are `logo-leufay-production.png`, `mascot-main.png`, `mascot-glasses.png`, `mascot-contact.png`, and descriptive WebP project/content filenames. Use an appropriate mascot pose in each location; preserve aspect ratio and never distort the character.

## Deployment and domain

Build locally, upload `out` contents to InfinityFree, then point your custom domain DNS to the values supplied by InfinityFree. Set `siteConfig.url` after the final domain is live, then rebuild so canonical and social metadata use it. If client-side links return 404, confirm the host preserves the generated trailing-slash folders and `index.html` files.

## Notes

The contact form is deliberately static: after adding `email` in `src/config/site.ts`, it uses `mailto:`. Affiliate URLs are configurable only and do not create fake checkout functionality. The included `robots.txt` is usable immediately; update `public/sitemap.xml` with your final domain's URLs once known.
