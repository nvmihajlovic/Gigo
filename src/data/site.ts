export type Locale = 'sr' | 'en' | 'ru';
export type SitePage = 'home' | 'about' | 'menu' | 'wine' | 'gallery' | 'contact';

const routeHref = (path: string) =>
  import.meta.env.DEV ? `${path}?preview=refresh` : path;

export const siteRoutes: Record<Locale, Record<SitePage, string>> = {
  sr: {
    home: routeHref('/'),
    about: routeHref('/o-nama'),
    menu: routeHref('/jelovnik'),
    wine: routeHref('/vinska-karta'),
    gallery: routeHref('/galerija'),
    contact: routeHref('/kontakt'),
  },
  en: {
    home: routeHref('/en/index'),
    about: routeHref('/en/o-nama'),
    menu: routeHref('/en/jelovnik'),
    wine: routeHref('/en/vinska-karta'),
    gallery: routeHref('/en/galerija'),
    contact: routeHref('/en/kontakt'),
  },
  ru: {
    home: routeHref('/ru/index'),
    about: routeHref('/ru/o-nama'),
    menu: routeHref('/ru/jelovnik'),
    wine: routeHref('/ru/vinska-karta'),
    gallery: routeHref('/ru/galerija'),
    contact: routeHref('/ru/kontakt'),
  },
};

export const siteCopy = {
  sr: {
    home: 'Početna',
    about: 'O nama',
    menu: 'Jelovnik',
    wine: 'Vinska karta',
    gallery: 'Galerija',
    contact: 'Rezervišite sto',
    call: 'Pozovite',
    reserve: 'Rezervišite sto',
    address: 'Gornjogradska 76, Zemun',
    hours: 'Pon-Sub, 10:00-23:00',
    footerTagline: 'Domaća kuhinja kojoj se uvek vraćate.',
    footerSocial: 'Društvene mreže',
    footerSocialPlatforms: 'Instagram · Facebook',
    footerNavigation: 'Navigacija',
    languageLabel: 'Izaberite jezik',
    languages: { sr: 'Srpski', en: 'English', ru: 'Ruski' },
  },
  en: {
    home: 'Home',
    about: 'About',
    menu: 'Menu',
    wine: 'Wine list',
    gallery: 'Gallery',
    contact: 'Book a table',
    call: 'Call',
    reserve: 'Book a table',
    address: 'Gornjogradska 76, Zemun',
    hours: 'Mon-Sat, 10:00-23:00',
    footerTagline: 'Homemade food worth coming back for.',
    footerSocial: 'Follow us',
    footerSocialPlatforms: 'Instagram · Facebook',
    footerNavigation: 'Explore',
    languageLabel: 'Choose language',
    languages: { sr: 'Serbian', en: 'English', ru: 'Russian' },
  },
  ru: {
    home: 'Главная',
    about: 'О нас',
    menu: 'Меню',
    wine: 'Винная карта',
    gallery: 'Галерея',
    contact: 'Забронировать стол',
    call: 'Позвонить',
    reserve: 'Забронировать стол',
    address: 'Gornjogradska 76, Земун',
    hours: 'Пн-Сб, 10:00-23:00',
    footerTagline: 'Домашняя кухня, к которой хочется возвращаться.',
    footerSocial: 'Мы в соцсетях',
    footerSocialPlatforms: 'Instagram · Facebook',
    footerNavigation: 'Навигация',
    languageLabel: 'Выберите язык',
    languages: { sr: 'Сербский', en: 'Английский', ru: 'Русский' },
  },
} satisfies Record<Locale, Record<string, unknown>>;
