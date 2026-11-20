import type { Locale, SitePage } from './site';

export const pageMeta = {
  sr: {
    home: {
      title: 'Restoran Gigo | Domaća kuhinja u Zemunu',
      description: 'Domaća kuhinja, roštilj i odabrana vina u prijatnom ambijentu u Zemunu.',
    },
    about: {
      title: 'O nama | Restoran Gigo',
      description: 'Upoznajte priču porodičnog restorana Gigo u Zemunu i našu domaću kuhinju.',
    },
    menu: {
      title: 'Jelovnik | Restoran Gigo',
      description: 'Pogledajte jelovnik restorana Gigo: domaća jela, roštilj, salate i deserti.',
    },
    wine: {
      title: 'Vinska karta i pića | Restoran Gigo',
      description: 'Odabrana vina i pića restorana Gigo u Zemunu.',
    },
    gallery: {
      title: 'Galerija | Restoran Gigo',
      description: 'Pogledajte fotografije restorana Gigo, njegove trpeze i domaće kuhinje u Zemunu.',
    },
    contact: {
      title: 'Rezervišite sto | Restoran Gigo',
      description: 'Kontakt informacije, radno vreme i rezervacije restorana Gigo u Zemunu.',
    },
  },
  en: {
    home: {
      title: 'Restaurant Gigo | Homestyle Dining in Zemun',
      description: 'Homestyle cooking, grilled favourites, and selected wines at Restaurant Gigo in Zemun.',
    },
    about: {
      title: 'About | Restaurant Gigo',
      description: 'Discover the story of Restaurant Gigo, a family-run restaurant in Zemun.',
    },
    menu: {
      title: 'Menu | Restaurant Gigo',
      description: 'Explore the menu at Restaurant Gigo, from Serbian favourites to grilled dishes and desserts.',
    },
    wine: {
      title: 'Wine and Drinks | Restaurant Gigo',
      description: 'Explore the wine and drinks list at Restaurant Gigo in Zemun.',
    },
    gallery: {
      title: 'Gallery | Restaurant Gigo',
      description: 'Explore photos of Restaurant Gigo, its dining room, and homestyle cuisine in Zemun.',
    },
    contact: {
      title: 'Book a Table | Restaurant Gigo',
      description: 'Contact details, opening hours, and reservation information for Restaurant Gigo in Zemun.',
    },
  },
  ru: {
    home: {
      title: 'Ресторан Gigo | Домашняя кухня в Земуне',
      description: 'Домашняя кухня, блюда на гриле и выбранные вина в ресторане Gigo в Земуне.',
    },
    about: {
      title: 'О нас | Ресторан Gigo',
      description: 'История семейного ресторана Gigo в Земуне и нашей домашней кухни.',
    },
    menu: {
      title: 'Меню | Ресторан Gigo',
      description: 'Меню ресторана Gigo: домашние блюда, гриль, салаты и десерты.',
    },
    wine: {
      title: 'Винная карта и напитки | Ресторан Gigo',
      description: 'Винная карта и напитки ресторана Gigo в Земуне.',
    },
    gallery: {
      title: 'Галерея | Ресторан Gigo',
      description: 'Фотографии ресторана Gigo, его зала и домашней кухни в Земуне.',
    },
    contact: {
      title: 'Забронировать стол | Ресторан Gigo',
      description: 'Контакты, часы работы и информация о бронировании ресторана Gigo в Земуне.',
    },
  },
} satisfies Record<Locale, Record<SitePage, { title: string; description: string }>>;
