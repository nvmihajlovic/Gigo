import type { Locale } from './site';

export type WineCategoryId =
  | 'bela'
  | 'crna'
  | 'roze'
  | 'penusava'
  | 'alkoholna'
  | 'piva'
  | 'bezalkoholna'
  | 'voda'
  | 'kafa';

interface DrinkItem {
  name: string;
  price: string;
  producer?: string;
  measure?: string;
}

function parseItems(rows: string): DrinkItem[] {
  return rows.trim().split('\n').map((row) => {
    const separator = row.lastIndexOf('|');
    const rawName = row.slice(0, separator);
    const measureMatch = rawName.match(/(?:,\s*|\s+)(\d+(?:[.,]\d+)?\s*l)$/i);

    if (measureMatch?.index !== undefined) {
      return {
        name: rawName.slice(0, measureMatch.index).trim(),
        price: row.slice(separator + 1),
        measure: measureMatch[1],
      };
    }

    return {
      name: rawName,
      price: row.slice(separator + 1),
    };
  });
}

function parseWineItems(rows: string): DrinkItem[] {
  return parseItems(rows).map((item) => {
    const details = item.name.match(/^(.*?)\s+\(([^)]+)\)$/);
    if (!details) return item;

    const [, name, detail] = details;
    if (/^(bottle|flaša|бутылка)$/i.test(detail)) {
      return { ...item, name, measure: detail };
    }

    return { ...item, name, producer: detail };
  });
}

export const wineCatalog = {
  sr: {
    bela: parseWineItems(`Tamjanika (Aleksandrović)|550 / 2.800
Chardonnay (Vinarija Kovačević)|480 / 2.400
Sauvignon Blanc (Despotika)|600 / 3.200
Riesling (Vinski podrum Radovanović)|520 / 2.600`),
    crna: parseWineItems(`Prokupac (Toplički vinogradi)|580 / 3.000
Cabernet Sauvignon (Aleksandrović)|620 / 3.400
Merlot (Vinarija Šumadija)|560 / 2.900
Vranac (13. Jul Plantaže)|590 / 3.100
Pinot Noir (Vinski podrum Zvonko Bogdan)|680 / 3.800`),
    roze: parseWineItems(`Rosé (Aleksandrović)|490 / 2.500
Pink Tamjanika (Vinski podrum Janko)|520 / 2.700`),
    penusava: parseWineItems(`Tri Morave Brut (Aleksić)|780 / 4.200
Rubin Brut (Rubin)|450 / 2.400
Moët & Chandon Impérial|12.500`),
    alkoholna: parseItems(`Lozovača|280
Šljivovica|295
Dunjevača|295
Viljamovka|295
Kajsijevača|295
Gorki List|300
Jägermeister|390
Vodka Finlandia|390
Vinjak „Palić“|280
Konjak „Courvoisier“|490
Johnny Walker|380
Jameson|380
Ballantine’s|380
Jack Daniel’s|450
Chivas Regal|450
Campari|350
Vermouth|250
Baileys|380
Gin Bickens|380
Gin Bombay Saphire|420
Martini|360
Kuvano vino, 0,2 l|320
„Akov“ šljiva / loza / kajsija / dunja|450
Zarić „Medena“|390
„Bojkovčanka“ šljiva|430
„Bojkovčanka“ kruška / dunja / kajsija|450
„Djedova“ šljiva|450`),
    piva: parseItems(`Točeni Lav Premium, 0,3 l|290
Točeni Lav Premium, 0,5 l|360
Tuborg, 0,33 l|350
Tuborg Ice|330
Budweiser|320
Budweiser tamno|320
Erdinger mutno|450
Kronenbourg Blanc|330
Carlsberg, 0,25 l|350
Somersby, 0,33 l|290`),
    bezalkoholna: parseItems(`Coca Cola|310
Coca Cola Zero|310
Fanta|310
Sprite|310
Bitter Lemon|310
Tonic|310
Pink Tonic|310
Tangerina|310
Narandža|310
Jagoda|310
Šumsko voće|310
Jabuka|310
Breskva|310
Limunada|310
Ceđena pomorandža|450
Ceđeni grejp|450
Ceđeni miks|490
Fuze Tea|350`),
    voda: parseItems(`Rosa gazirana, 0,75 l|360
Rosa gazirana, 0,33 l|190
Rosa negazirana, 0,75 l|360
Rosa negazirana, 0,33 l|190
Romerquelle, 0,33 l|260`),
    kafa: parseItems(`Domaća kafa|210
Espresso|240
Dupli espresso|290
Espresso sa mlekom|270
Cappuccino|290
Ness kafa|250
Espresso sa šlagom|290
Čaj (nana, kamilica, crni, zeleni, voćni)|290`),
  },
  en: {
    bela: parseWineItems(`Tamjanika (Aleksandrović)|550 / 2.800
Chardonnay (Vinarija Kovačević)|480 / 2.400
Sauvignon Blanc (Despotika)|600 / 3.200
Riesling (Vinski podrum Radovanović)|520 / 2.600`),
    crna: parseWineItems(`Prokupac (Toplički vinogradi)|580 / 3.000
Cabernet Sauvignon (Aleksandrović)|620 / 3.400
Merlot (Vinarija Šumadija)|560 / 2.900
Vranac (13. Jul Plantaže)|590 / 3.100
Pinot Noir (Vinski podrum Zvonko Bogdan)|680 / 3.800`),
    roze: parseWineItems(`Rosé (Aleksandrović)|490 / 2.500
Pink Tamjanika (Vinski podrum Janko)|520 / 2.700`),
    penusava: parseWineItems(`Tri Morave Brut (Aleksić)|780 / 4.200
Rubin Brut (Rubin)|450 / 2.400
Moët & Chandon Impérial (bottle)|12.500`),
    alkoholna: parseItems(`Lozovača|280
Šljivovica|295
Dunjevača|295
Viljamovka|295
Kajsijevača|295
Gorki List|300
Jägermeister|390
Vodka Finlandia|390
Vinjak “Palić”|280
Konjak “Courvoisier”|490
Johnny Walker|380
Jameson|380
Ballantine’s|380
Jack Daniel’s|450
Chivas Regal|450
Campari|350
Vermouth|250
Baileys|380
Gin Bickens|380
Gin Bombay Saphire|420
Martini|360
Mulled wine, 0.2 l|320
“Akov” plum / grape / apricot / quince|450
Zarić “Medena”|390
“Bojkovčanka” plum|430
“Bojkovčanka” pear / quince / apricot|450
“Djedova” plum|450`),
    piva: parseItems(`Draft Lav Premium, 0.3 l|290
Draft Lav Premium, 0.5 l|360
Tuborg, 0.33 l|350
Tuborg Ice|330
Budweiser|320
Dark Budweiser|320
Erdinger wheat beer|450
Kronenbourg Blanc|330
Carlsberg, 0.25 l|350
Somersby, 0.33 l|290`),
    bezalkoholna: parseItems(`Coca Cola|310
Coca Cola Zero|310
Fanta|310
Sprite|310
Bitter Lemon|310
Tonic|310
Pink Tonic|310
Tangerina|310
Narandža|310
Jagoda|310
Šumsko voće|310
Jabuka|310
Breskva|310
Limunada|310
Fresh orange juice|450
Fresh grapefruit juice|450
Fresh mixed juice|490
Fuze Tea|350`),
    voda: parseItems(`Rosa sparkling water, 0.75 l|360
Rosa sparkling water, 0.33 l|190
Rosa still water, 0.75 l|360
Rosa still water, 0.33 l|190
Romerquelle, 0.33 l|260`),
    kafa: parseItems(`Turkish coffee|210
Espresso|240
Double espresso|290
Espresso with milk|270
Cappuccino|290
Nescafe|250
Espresso with whipped cream|290
Tea (mint, chamomile, black, green, fruit)|290`),
  },
  ru: {
    bela: parseWineItems(`Tamjanika (Aleksandrović)|550 / 2.800
Chardonnay (Vinarija Kovačević)|480 / 2.400
Sauvignon Blanc (Despotika)|600 / 3.200
Riesling (Vinski podrum Radovanović)|520 / 2.600`),
    crna: parseWineItems(`Prokupac (Toplički vinogradi)|580 / 3.000
Cabernet Sauvignon (Aleksandrović)|620 / 3.400
Merlot (Vinarija Šumadija)|560 / 2.900
Vranac (13. Jul Plantaže)|590 / 3.100
Pinot Noir (Vinski podrum Zvonko Bogdan)|680 / 3.800`),
    roze: parseWineItems(`Rosé (Aleksandrović)|490 / 2.500
Pink Tamjanika (Vinski podrum Janko)|520 / 2.700`),
    penusava: parseWineItems(`Tri Morave Brut (Aleksić)|780 / 4.200
Rubin Brut (Rubin)|450 / 2.400
Moët & Chandon Impérial (бутылка)|12.500`),
    alkoholna: parseItems(`Lozovača|280
Šljivovica|295
Dunjevača|295
Viljamovka|295
Kajsijevača|295
Gorki List|300
Jägermeister|390
Vodka Finlandia|390
Vinjak “Palić”|280
Konjak “Courvoisier”|490
Johnny Walker|380
Jameson|380
Ballantine’s|380
Jack Daniel’s|450
Chivas Regal|450
Campari|350
Vermouth|250
Baileys|380
Gin Bickens|380
Gin Bombay Saphire|420
Martini|360
Kuvano vino, 0,2 l|320
“Akov” šljiva / loza / kajsija / dunja|450
Zarić “Medena”|390
“Bojkovčanka” šljiva|430
“Bojkovčanka” kruška / dunja / kajsija|450
“Djedova” šljiva|450`),
    piva: parseItems(`Točeni Lav Premium, 0,3 l|290
Točeni Lav Premium, 0,5 l|360
Tuborg, 0,33 l|350
Tuborg Ice|330
Budweiser|320
Budweiser tamno|320
Erdinger mutno|450
Kronenbourg Blanc|330
Carlsberg, 0,25 l|350
Somersby, 0,33 l|290`),
    bezalkoholna: parseItems(`Coca Cola|310
Coca Cola Zero|310
Fanta|310
Sprite|310
Bitter Lemon|310
Tonic|310
Pink Tonic|310
Tangerina|310
Narandža|310
Jagoda|310
Šumsko voće|310
Jabuka|310
Breskva|310
Limunada|310
Ceđena pomorandža|450
Ceđeni grejp|450
Ceđeni miks|490
Fuze Tea|350`),
    voda: parseItems(`Rosa gazirana, 0,75 l|360
Rosa gazirana, 0,33 l|190
Rosa negazirana, 0,75 l|360
Rosa negazirana, 0,33 l|190
Romerquelle, 0,33 l|260`),
    kafa: parseItems(`Domaća kafa|210
Espresso|240
Dupli espresso|290
Espresso sa mlekom|270
Cappuccino|290
Ness kafa|250
Espresso sa šlagom|290
Čaj (nana, kamilica, crni, zeleni, voćni)|290`),
  },
} satisfies Record<Locale, Record<WineCategoryId, DrinkItem[]>>;

export const wineCategoryIds: WineCategoryId[] = [
  'bela',
  'crna',
  'roze',
  'penusava',
  'alkoholna',
  'piva',
  'bezalkoholna',
  'voda',
  'kafa',
];
