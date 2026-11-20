import type { APIRoute } from 'astro';
import { absoluteSiteUrl } from '../data/seo';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error('Set the site URL in astro.config.mjs to generate robots.txt.');
  }

  const contents = `User-agent: *
Allow: /

Sitemap: ${absoluteSiteUrl('/sitemap.xml', site)}
`;

  return new Response(contents, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
