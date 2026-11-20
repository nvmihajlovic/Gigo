import type { Locale } from './site';

export type MenuCategoryId =
  | 'predjela'
  | 'dorucak'
  | 'corbe'
  | 'prilozi'
  | 'dame'
  | 'glavna-jela'
  | 'riba'
  | 'salate'
  | 'deserti';

export interface MenuItem {
  name: string;
  price: string;
  measure?: string;
}

function parseItems(rows: string): MenuItem[] {
  return rows.trim().split('\n').map((row) => {
    const separator = row.lastIndexOf('|');
    const rawName = row.slice(0, separator).trim();
    const measureMatch = rawName.match(/(?:,\s*|\s+)?(\d+(?:[.,]\d+)?\s*(?:kg|gr|g|кг|г))(?=\s|$)/i);
    const price = row.slice(separator + 1);

    if (!measureMatch || measureMatch.index === undefined) {
      return { name: rawName, price };
    }

    const name = `${rawName.slice(0, measureMatch.index)}${rawName.slice(measureMatch.index + measureMatch[0].length)}`.trim();
    return { name, measure: measureMatch[1], price };
  });
}

export const menuCatalog = {
  sr: {
    predjela: parseItems(`Sirevi „Škopski merak“|850
Sir ovčiji, 100 gr|450
Sir kravlji sa Jastrebca, 200 gr|390
Sir koziji pirotski, 100 gr|450
Grilovano makedonsko sirenje|490
Kajmak, 100 gr|450
Paprika u pavlaci, 100 gr|450
Njeguška pršuta, 100 gr|790
Goveđa pršuta, 100 gr|650
Kulen, 100 gr|690
Suvi jelenjski ramstek|990
Sir koziji u maslinovom ulju, 100 gr|490
Pohovani kačkavalj, 100 gr|550
Prebranac|550
Pihtije|550
Masline, 100 gr|350
Pečurke na žaru, 200 gr|490
Pohovane punjene paprike|790`),
    dorucak: parseItems(`Doručak 1|490
Srpski doručak 2|590
Doručak 3|590
Doručak 4|590
Doručak 5 - komplet lepinja|490
Komplet lepinja sa pršutom|590
Komplet lepinja sa kulenom|590
Komplet lepinja sa duvan čvarcima|590
Doručak 6|550
Gigo doručak 7|650
Doručak 8|650
Doručak 9|590`),
    corbe: parseItems(`Teleća čorba|390
Riblja čorba|450
Pileća supa - domaća|350
Paradajz čorba|390`),
    prilozi: parseItems(`Pomfrit|350
Dalmatinsko varivo|450
Grilovano povrće|450
Pirinač|290
Hleb|100
Začinjeni hleb|150`),
    dame: parseItems(`Rižoto sa povrćem|890
Rižoto sa lignjama|1150
Cezar salata|990`),
    'glavna-jela': parseItems(`Pileći file|880
Ćureći file|950
Svinjski file|990
Gorgonzola sos|390
Vrganj-pršuta sos|390
Pikant sos|390
Šampinjoni sos|390
Kikiriki sos|390
Piletina punjena|1190
Ćureći file u mlincima|1250
Svinjski file „Gigo“ na naš način|1350
Teleća rebra ispod sača, 300 gr|1990
Jagnjetina ispod sača, 400 gr|1680
Gulaš od divljači sa njokama|1590
Biftek sa vrganjima i pršutom|2950
Ćevapi (porcija)|920
Ćevapi (pola porcije)|720
Ćevapi sa kajmakom (porcija)|980
Ćevapi sa kajmakom (pola porcije)|780
Ćevapi Gigo|1100
Uštipci (porcija)|1050
Pljeskavica (porcija)|920
Pljeskavica gurmanska, 430 gr (porcija)|1150
Pljeskavica punjena, 450 gr (porcija)|1190
Kobasica domaća dimljena (porcija)|950
Kobasica lovačka (porcija)|1190
Karađorđeva šnicla, 400 gr (porcija)|1290
Bečka šnicla|1190
Punjeni svinjski file u slanini|1290
Biftek na žaru, 300 gr|2500
Biftek sa gorgonzolom, 300 gr|2950
Biftek „Gigo“, 300 gr|3150
Biftek 1 kg sa začinjenim krompirom i sosom po želji|7990
Svinjska rebra dimljena, 350 gr|1390
Teletina sa mlincima u sosu od kajmaka|1590
Teleći medaljoni sa dimljenim kačkavaljem|1590
Juneći ribić na kajmaku sa pirinčem|1250
Tava „Gigo“|1390
Teleća glava u škembetu|1390
Dimljene butkice u kupusu, 300 gr|1150
Leskovačka mućkalica|950
Preporuka šefa kuhinje za 2 osobe|2400
Dnevno kuvano jelo|790 / 1590`),
    riba: parseItems(`Smuđ, 1 kg|3900
Smuđ fileti, 1 kg|6500
Fileti smuđa u belom sosu, 350 gr|1490
Lignje na žaru, 300 gr|1650`),
    salate: parseItems(`Kupus|320
Krastavac|350
Paradajz|350
Paradajz sa sirom|420
Zelena salata|350
Srpska salata|390
Šopska salata|450
Vitaminska salata|390
Pečene slatke paprike (2 kom)|350
Pečene ljute paprike (1 kom)|120
Mešana salata|420
Tarator|390
Ajvar domaći|420
Kiseli kupus|390
Grčka salata|450
Miks zelenih salata|390
Miks zelenih salata sa čerijem i pinjolima|490
Urnebes|330
Rotkvice|190
Rukola, čeri, parmezan domaći|490
Bašta za dve osobe|800
Moravska salata|450`),
    deserti: parseItems(`Baklava sa sladoledom|420
Tufahija|360
Orasnice (1 kom)|250
Tri leće|380
Čokoladni tart sa sladoledom i prelivom od višanja|550
Palačinke po izboru|420
„Reforma“ torta|490
Čoko malina|550
Palačinke sa Nutelom|490
Krempita|420`),
  },
  en: {
    predjela: parseItems(`Cheese selection “Skopski merak”|850
Sheep cheese, 100 g|450
Cow cheese from Jastrebac, 200 g|390
Pirot goat cheese, 100 g|450
Grilled Macedonian cheese|490
Kajmak, 100 g|450
Pepper in sour cream, 100 g|450
Njegusi prosciutto, 100 g|790
Beef prosciutto, 100 g|650
Kulen, 100 g|690
Dry-aged venison rump steak|990
Goat cheese in olive oil, 100 g|490
Breaded kashkaval cheese, 100 g|550
Baked beans|550
Aspic|550
Olives, 100 g|350
Grilled mushrooms, 200 g|490
Breaded stuffed peppers|790`),
    dorucak: parseItems(`Breakfast 1|490
Serbian breakfast 2|590
Breakfast 3|590
Breakfast 4|590
Breakfast 5 - komplet lepinja|490
Komplet lepinja with prosciutto|590
Komplet lepinja with kulen|590
Komplet lepinja with shredded cracklings|590
Breakfast 6|550
Gigo breakfast 7|650
Breakfast 8|650
Breakfast 9|590`),
    corbe: parseItems(`Veal soup|390
Fish soup|450
Homemade chicken soup|350
Tomato soup|390`),
    prilozi: parseItems(`French fries|350
Dalmatian-style chard and potatoes|450
Grilled vegetables|450
Rice|290
Bread|100
Seasoned bread|150`),
    dame: parseItems(`Vegetable risotto|890
Squid risotto|1150
Caesar salad|990`),
    'glavna-jela': parseItems(`Chicken fillet|880
Turkey fillet|950
Pork tenderloin|990
Gorgonzola sauce|390
Porcini and prosciutto sauce|390
Spicy sauce|390
Mushroom sauce|390
Peanut sauce|390
Stuffed chicken|1190
Turkey fillet with mlinci|1250
Gigo-style pork tenderloin|1350
Veal ribs under the sach, 300 g|1990
Lamb under the sach, 400 g|1680
Game goulash with gnocchi|1590
Beefsteak with porcini and prosciutto|2950
Cevapi, portion|920
Cevapi, half portion|720
Cevapi with kajmak, portion|980
Cevapi with kajmak, half portion|780
Gigo cevapi|1100
Savory fritters, portion|1050
Pljeskavica burger, portion|920
Gourmet pljeskavica, 430 g|1150
Stuffed pljeskavica, 450 g|1190
Homemade smoked sausage, portion|950
Hunter sausage, portion|1190
Karadjordje schnitzel, 400 g|1290
Viennese schnitzel|1190
Stuffed pork tenderloin wrapped in bacon|1290
Grilled beefsteak, 300 g|2500
Beefsteak with gorgonzola, 300 g|2950
Gigo beefsteak, 300 g|3150
1 kg beefsteak with seasoned potatoes and sauce of your choice|7990
Smoked pork ribs, 350 g|1390
Veal with mlinci in kajmak sauce|1590
Veal medallions with smoked kashkaval|1590
Beef shank on kajmak with rice|1250
Gigo pan|1390
Veal head in tripe|1390
Smoked pork hocks with cabbage, 300 g|1150
Leskovac muckalica stew|950
Chef recommendation for 2 people|2400
Daily cooked dish|790 / 1590`),
    riba: parseItems(`Pike-perch, 1 kg|3900
Pike-perch fillets, 1 kg|6500
Pike-perch fillets in white sauce, 350 g|1490
Grilled squid, 300 g|1650`),
    salate: parseItems(`Cabbage|320
Cucumber|350
Tomato|350
Tomato with cheese|420
Green salad|350
Serbian salad|390
Shopska salad|450
Vitamin salad|390
Roasted sweet peppers (2 pcs)|350
Roasted hot pepper (1 pc)|120
Mixed salad|420
Tarator|390
Homemade ajvar|420
Sauerkraut|390
Greek salad|450
Mixed green salad|390
Mixed green salad with cherry tomatoes and pine nuts|490
Urnebes|330
Radishes|190
Arugula, cherry tomatoes and local parmesan|490
Garden salad for two|800
Morava salad|450`),
    deserti: parseItems(`Baklava with ice cream|420
Tufahija|360
Walnut cookie, 1 pc|250
Tres leches|380
Chocolate tart with ice cream and sour cherry topping|550
Pancakes of your choice|420
“Reforma” cake|490
Chocolate raspberry cake|550
Pancakes with Nutella|490
Cream pie|420`),
  },
  ru: {
    predjela: parseItems(`Сырная тарелка “Skopski merak”|850
Овечий сыр, 100 г|450
Коровий сыр с Ястребца, 200 г|390
Пиротский козий сыр, 100 г|450
Жареный македонский сыр|490
Каймак, 100 г|450
Перец в сметане, 100 г|450
Негушский пршут, 100 г|790
Говяжий пршут, 100 г|650
Кулен, 100 г|690
Suvi jelenjski ramstek|990
Sir koziji u maslinovom ulju, 100 gr|490
Панированный качкавал, 100 г|550
Пребранац|550
Pihtije|550
Masline, 100 gr|350
Грибы на гриле, 200 г|490
Панированные фаршированные перцы|790`),
    dorucak: parseItems(`Doručak 1|490
Srpski doručak 2|590
Doručak 3|590
Doručak 4|590
Doručak 5 - komplet lepinja|490
Komplet lepinja sa pršutom|590
Komplet lepinja sa kulenom|590
Komplet lepinja sa duvan čvarcima|590
Doručak 6|550
Gigo doručak 7|650
Doručak 8|650
Doručak 9|590`),
    corbe: parseItems(`Телячий суп|390
Рыбный суп|450
Домашний куриный суп|350
Томатный суп|390`),
    prilozi: parseItems(`Картофель фри|350
Dalmatinsko varivo|450
Овощи на гриле|450
Рис|290
Хлеб|100
Приправленный хлеб|150`),
    dame: parseItems(`Ризотто с овощами|890
Ризотто с кальмарами|1150
Cezar salata|990`),
    'glavna-jela': parseItems(`Куриное филе|880
Филе индейки|950
Свиная вырезка|990
Gorgonzola sos|390
Vrganj-pršuta sos|390
Pikant sos|390
Šampinjoni sos|390
Kikiriki sos|390
Фаршированная курица|1190
Филе индейки u mlincima|1250
Свиная вырезка “Gigo” na naš način|1350
Телячьи ребра из-под сача, 300 г|1990
Ягненок из-под сача, 400 г|1680
Гуляш из дичи с ньокки|1590
Biftek sa vrganjima i pršutom|2950
Чевапи, порция|920
Чевапи, полпорции|720
Чевапи с каймаком, порция|980
Чевапи с каймаком, полпорции|780
Ćevapi Gigo|1100
Уштипцы, порция|1050
Плескавица, порция|920
Pljeskavica gurmanska, 430 gr|1150
Pljeskavica punjena, 450 gr|1190
Домашняя копченая колбаса, порция|950
Kobasica lovačka, porcija|1190
Караджорджева шницла, 400 г|1290
Венский шницель|1190
Punjeni svinjski file u slanini|1290
Бифштекс на гриле, 300 г|2500
Biftek sa gorgonzolom, 300 gr|2950
Biftek “Gigo”, 300 gr|3150
Biftek 1 kg sa začinjenim krompirom i sosom po želji|7990
Копченые свиные ребра, 350 г|1390
Teletina sa mlincima u sosu od kajmaka|1590
Teleći medaljoni sa dimljenim kačkavaljem|1590
Juneći ribić na kajmaku sa pirinčem|1250
Tava “Gigo”|1390
Teleća glava u škembetu|1390
Dimljene butkice u kupusu, 300 gr|1150
Leskovačka mućkalica|950
Препорука šefa kuhinje za 2 osobe|2400
Блюдо дня|790 / 1590`),
    riba: parseItems(`Судак, 1 кг|3900
Филе судака, 1 кг|6500
Fileti smuđa u belom sosu, 350 gr|1490
Кальмары на гриле, 300 г|1650`),
    salate: parseItems(`Капуста|320
Огурец|350
Помидор|350
Помидор sa sirom|420
Зеленый салат|350
Сербский салат|390
Шопский салат|450
Vitaminska salata|390
Печеный сладкий перец (2 шт.)|350
Печеный острый перец (1 шт.)|120
Смешанный салат|420
Таратор|390
Ajvar domaći|420
Kiseli kupus|390
Греческий салат|450
Miks zelenih salata|390
Miks zelenih salata sa čerijem i pinjolima|490
Урнебес|330
Редис|190
Rukola, čeri, parmezan domaći|490
Bašta za dve osobe|800
Moravska salata|450`),
    deserti: parseItems(`Пахлава с мороженым|420
Туфахия|360
Orasnice (1 kom)|250
Tri leće|380
Čokoladni tart sa sladoledom i prelivom od višanja|550
Блинчики на выбор|420
“Reforma” torta|490
Čoko malina|550
Palačinke sa Nutelom|490
Кремпита|420`),
  },
} satisfies Record<Locale, Record<MenuCategoryId, MenuItem[]>>;

export const menuCategoryIds: MenuCategoryId[] = [
  'predjela',
  'dorucak',
  'corbe',
  'prilozi',
  'dame',
  'glavna-jela',
  'riba',
  'salate',
  'deserti',
];
