import type { APIRoute } from 'astro';
import { absoluteSiteUrl, languageTags, siteLocales, sitePages } from '../data/seo';
import { siteRoutes } from '../data/site';

export const prerender = true;

const escapeXml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error('Set the site URL in astro.config.mjs to generate the sitemap.');
  }

  const entries = siteLocales.flatMap((locale) =>
    sitePages.map((page) => {
      const location = absoluteSiteUrl(siteRoutes[locale][page], site);
      const alternateLinks = siteLocales
        .map((alternateLocale) => {
          const href = absoluteSiteUrl(siteRoutes[alternateLocale][page], site);
          return `    <xhtml:link rel="alternate" hreflang="${languageTags[alternateLocale]}" href="${escapeXml(href)}" />`;
        })
        .join('\n');
      const defaultHref = absoluteSiteUrl(siteRoutes.sr[page], site);

      return `  <url>
    <loc>${escapeXml(location)}</loc>
${alternateLinks}
    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(defaultHref)}" />
  </url>`;
    }),
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
