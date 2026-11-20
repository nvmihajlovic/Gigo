# Quick start

## Run locally

1. Install Node.js 22.
2. Install dependencies with `npm ci`.
3. Start the development server with `npm run dev`.
4. Create a production build with `npm run build`.
5. Preview the build with `npm run preview`.

The build output is written to `dist/`.

## Deploy to Netlify

The repository includes `netlify.toml` with the build command, Node.js version,
and publish directory. Import the GitHub repository in Netlify; no extra build
settings are required.

## Update content

- Page content and layout are in `src/`.
- Shared restaurant images are in `images/`.
- Gallery originals and previews are in `public/images/gallery/`.
- Menu and wine details are in `src/data/`.
