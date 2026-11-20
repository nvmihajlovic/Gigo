import type { Locale, SitePage } from './site';

export const siteLocales = ['sr', 'en', 'ru'] as const satisfies readonly Locale[];
export const sitePages = [
  'home',
  'about',
  'menu',
  'wine',
  'gallery',
  'contact',
] as const satisfies readonly SitePage[];

export const languageTags: Record<Locale, string> = {
  sr: 'sr-RS',
  en: 'en',
  ru: 'ru',
};

export const openGraphLocales: Record<Locale, string> = {
  sr: 'sr_RS',
  en: 'en_GB',
  ru: 'ru_RU',
};

export function absoluteSiteUrl(path: string, site: URL): string {
  const url = new URL(path, site);
  url.search = '';
  url.hash = '';
  return url.href;
}
