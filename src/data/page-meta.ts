import type { Locale, SitePage } from './site';

export const pageMeta = {
  sr: {
    home: {
      title: 'Restoran Gigo u Zemunu | Domaća kuhinja',
      description: 'Posetite restoran Gigo u Zemunu i uživajte u domaćoj kuhinji, roštilju i jelima iz sača. Pogledajte jelovnik i rezervišite sto u Gornjogradskoj 76.',
    },
    about: {
      title: 'Porodični restoran u Zemunu | Restoran Gigo',
      description: 'Upoznajte priču restorana Gigo, porodičnu tradiciju od 1998. godine i domaću kuhinju, roštilj i specijalitete iz sača u Zemunu.',
    },
    menu: {
      title: 'Jelovnik restorana Gigo u Zemunu',
      description: 'Pogledajte jelovnik restorana Gigo u Zemunu: domaća jela, doručak, roštilj, specijaliteti iz sača, salate i domaći deserti.',
    },
    wine: {
      title: 'Vinska karta i pića | Restoran Gigo, Zemun',
      description: 'Istražite vinsku kartu restorana Gigo u Zemunu: domaća i regionalna vina, penušavci i pića odabrana da prate domaću kuhinju.',
    },
    gallery: {
      title: 'Galerija restorana Gigo u Zemunu',
      description: 'Pogledajte fotografije restorana Gigo u Zemunu: enterijer, atmosfera za stolom, domaća jela, roštilj i specijaliteti iz sača.',
    },
    contact: {
      title: 'Kontakt i rezervacije | Restoran Gigo, Zemun',
      description: 'Rezervišite sto u restoranu Gigo u Zemunu. Pronađite adresu u Gornjogradskoj 76, radno vreme, telefone, e-poštu i mapu do restorana.',
    },
  },
  en: {
    home: {
      title: 'Restaurant Gigo in Zemun | Homestyle Dining',
      description: 'Visit Restaurant Gigo in Zemun for Serbian homestyle cooking, grilled favourites, and sač dishes. Explore the menu and book a table at Gornjogradska 76.',
    },
    about: {
      title: 'Our Story | Restaurant Gigo in Zemun',
      description: 'Discover Restaurant Gigo, a family-run restaurant in Zemun since 1998, serving homestyle Serbian dishes, grilled favourites, and sač specialties.',
    },
    menu: {
      title: 'Menu | Restaurant Gigo in Zemun',
      description: 'Explore the Restaurant Gigo menu in Zemun: Serbian homestyle dishes, breakfast, grilled favourites, sač specialties, salads, and homemade desserts.',
    },
    wine: {
      title: 'Wine List and Drinks | Restaurant Gigo, Zemun',
      description: 'Browse the wine and drinks list at Restaurant Gigo in Zemun, with Serbian and regional wines selected to pair with our homestyle menu.',
    },
    gallery: {
      title: 'Restaurant Gallery | Gigo in Zemun',
      description: 'Take a look inside Restaurant Gigo in Zemun: the dining room, welcoming atmosphere, homestyle dishes, grilled favourites, and sač specialties.',
    },
    contact: {
      title: 'Contact & Reservations | Restaurant Gigo',
      description: 'Book a table at Restaurant Gigo in Zemun. Find our Gornjogradska 76 address, opening hours, phone numbers, email, and directions.',
    },
  },
  ru: {
    home: {
      title: 'Ресторан Gigo в Земуне | Домашняя кухня',
      description: 'Посетите ресторан Gigo в Земуне: домашняя сербская кухня, блюда на гриле и из-под сача. Посмотрите меню и забронируйте стол на Gornjogradska 76.',
    },
    about: {
      title: 'О ресторане Gigo в Земуне | Наша история',
      description: 'Узнайте историю семейного ресторана Gigo в Земуне, который с 1998 года готовит домашние блюда, блюда на гриле и из-под сача.',
    },
    menu: {
      title: 'Меню ресторана Gigo в Земуне',
      description: 'Ознакомьтесь с меню ресторана Gigo в Земуне: домашние блюда, завтраки, гриль, блюда из-под сача, салаты и домашние десерты.',
    },
    wine: {
      title: 'Винная карта и напитки | Ресторан Gigo',
      description: 'Винная карта ресторана Gigo в Земуне: сербские и региональные вина, игристые вина и напитки к домашней кухне и блюдам на гриле.',
    },
    gallery: {
      title: 'Галерея ресторана Gigo в Земуне',
      description: 'Посмотрите фотографии ресторана Gigo в Земуне: зал, атмосфера за столом, домашние блюда, гриль и специалитеты из-под сача.',
    },
    contact: {
      title: 'Контакты и бронирование | Ресторан Gigo',
      description: 'Забронируйте стол в ресторане Gigo в Земуне. Адрес: Gornjogradska 76; часы работы, телефоны, электронная почта и карта проезда.',
    },
  },
} satisfies Record<Locale, Record<SitePage, { title: string; description: string }>>;
