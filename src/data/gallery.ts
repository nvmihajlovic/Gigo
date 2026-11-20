import type { Locale } from './site';

export const galleryImageFiles = [
  'img_4010_new.jpg',
  'img_4152.png',
  'img_4011.png',
  'img_4103.png',
  'img_4502.jpg',
  'img_4154.png',
  'img_4069.png',
  'img_4517.jpg',
  'dv709081.png',
  'img_4067.png',
  'img_4074.png',
  'img_4505.jpg',
  'dv71001.png',
  'img_4155.png',
  'dv70911.png',
  'img_4527.jpg',
  'dv713101.png',
  'dv71314.png',
  'dv71060.png',
  'img_4569.jpg',
  'dv713121.png',
  'img_4537.jpg',
  'img_4629.jpg',
  'img_4542.jpg',
  '1645625035516.png',
  'img_4170.png',
  'img_4611.jpg',
  'img_4582.jpg',
  'dv71066.png',
  'dv71330.png',
  'img_4486.jpg',
  'img_4168.png',
  'img_4598.jpg',
  'img_4600.jpg',
] as const;

export const galleryCopy = {
  sr: {
    eyebrow: 'Restoran Gigo',
    title: 'Galerija',
    description: 'Zavirite u restoran Gigo, osetite atmosferu naše sale i pogledajte domaća jela, roštilj i specijalitete iz sača.',
    galleryLabel: 'Fotografije restorana Gigo',
    photoAlt: 'Fotografija restorana Gigo broj',
    lightboxLabel: 'Pregled fotografija restorana Gigo',
    close: 'Zatvori fotografiju',
    previous: 'Prethodna fotografija',
    next: 'Sledeća fotografija',
  },
  en: {
    eyebrow: 'Restaurant Gigo',
    title: 'Gallery',
    description: 'Step inside Restaurant Gigo, get a feel for our dining room, and discover homestyle dishes, grilled favourites, and sač specialties.',
    galleryLabel: 'Photos of Restaurant Gigo',
    photoAlt: 'Photo of Restaurant Gigo, number',
    lightboxLabel: 'Restaurant Gigo photo viewer',
    close: 'Close photo',
    previous: 'Previous photo',
    next: 'Next photo',
  },
  ru: {
    eyebrow: 'Ресторан Gigo',
    title: 'Галерея',
    description: 'Загляните в ресторан Gigo, почувствуйте атмосферу нашего зала и познакомьтесь с домашними блюдами, грилем и угощениями из-под сача.',
    galleryLabel: 'Фотографии ресторана Gigo',
    photoAlt: 'Фотография ресторана Gigo, номер',
    lightboxLabel: 'Просмотр фотографий ресторана Gigo',
    close: 'Закрыть фотографию',
    previous: 'Предыдущая фотография',
    next: 'Следующая фотография',
  },
} satisfies Record<Locale, {
  eyebrow: string;
  title: string;
  description: string;
  galleryLabel: string;
  photoAlt: string;
  lightboxLabel: string;
  close: string;
  previous: string;
  next: string;
}>;
