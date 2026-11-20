# Restoran Gigo

Multilingual static website for Restaurant Gigo, built with Astro. The site is
available in Serbian, English, and Russian.

## Development

Requires Node.js 22 and npm.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

The production site is generated in `dist/`. `npm run dev` and `npm run build`
run `scripts/sync-legacy.mjs` first to copy shared images and menu documents into
Astro's generated `public/` directory.

## Project structure

- `src/pages/` defines the localized site routes.
- `src/components/`, `src/layouts/`, and `src/styles/` contain the site UI.
- `src/data/` contains the localized copy, menu, wine, and gallery data.
- `images/` contains shared restaurant images.
- `public/images/gallery/` contains gallery photos and optimized previews.
- `public/` contains the site icons and is otherwise generated/ignored.

## Netlify

The root `netlify.toml` configures Netlify to run `npm run build` and publish
`dist/`. Connect this GitHub repository to Netlify to enable deploys on push.
