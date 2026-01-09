# Restoran Gigo - Moderan Responzivni Website

## 📋 Pregled

Moderan, potpuno responzivan website za Restoran Gigo kreiran sa fokusom na UI/UX dizajn i mobile-first pristup. Website sadrži sve neophodne stranice za restoran sa elegantnim dizajnom i glatkim animacijama.

## ✨ Karakteristike

### 🎨 Dizajn
- **Mobile-First pristup** - Optimizovan za sve uređaje
- **Moderne animacije** - Smooth transitions i scroll animacije koristeći AOS library
- **Elegantna tipografija** - Playfair Display za naslove, Poppins za tekst
- **Responzivan layout** - Savršeno funkcioniše na mobilu, tabletu i desktopu
- **Accessibility** - Pristupačan dizajn sa ARIA atributima

### 📄 Stranice

1. **Početna (index.html)**
   - Hero sekcija sa paraallax efektom
   - O nama preview
   - Features sekcija
   - Menu preview
   - Vinska sekcija
   - Galerija
   - CTA sekcija

2. **O nama (o-nama.html)**
   - Istorija restorana
   - Vrednosti
   - Tim (šef kuhinje, somelijer, menadžer)
   - Filozofija

3. **Jelovnik (jelovnik.html)**
   - Kategorije: Predjela, Čorbe, Glavna jela, Salate, Deserti
   - Filter po kategorijama
   - Slike jela sa opisom i cenama
   - Responsive card layout

4. **Vinska karta (vinska-karta.html)**
   - Bela vina
   - Crna vina
   - Roze vina
   - Penušava vina
   - Preporuke somelijera
   - Wine pairing savetי

5. **Kontakt (kontakt.html)**
   - Kontakt forma za rezervacije
   - Informacije (adresa, telefon, email, radno vreme)
   - Google Maps integracija
   - FAQ sekcija
   - Social media linkovi

### 🛠️ Tehnologije

- **HTML5** - Semantički markup
- **CSS3** - Custom properties, Flexbox, Grid, Animations
- **JavaScript (ES6+)** - Vanilla JS, bez zavisnosti
- **AOS Library** - Animate On Scroll
- **Font Awesome** - Ikone
- **Google Fonts** - Playfair Display & Poppins

## 📁 Struktura Projekta

```
restoran-gigo/
├── index.html
├── o-nama.html
├── jelovnik.html
├── vinska-karta.html
├── kontakt.html
├── css/
│   ├── style.css       # Glavni CSS fajl
│   └── pages.css       # Stilovi za specifične stranice
├── js/
│   └── main.js         # Sav JavaScript kod
├── images/             # Folder za slike (potrebno dodati)
│   ├── hero-bg.jpg
│   ├── restaurant-interior.jpg
│   ├── wine-collection.jpg
│   ├── gallery-1.jpg
│   ├── gallery-2.jpg
│   ├── gallery-3.jpg
│   ├── gallery-4.jpg
│   ├── menu/          # Slike jela
│   └── ...
└── README.md
```

## 🚀 Pokretanje Projekta

### Lokalno pokretanje

1. Preuzmite ili klonirajte projekat
2. Otvorite `index.html` u vašem browseru

### Live Server (preporučeno)

Koristite VS Code ekstenziju "Live Server":
1. Instalirajte Live Server ekstenziju
2. Desni klik na `index.html`
3. Kliknite "Open with Live Server"

## 🖼️ Dodavanje Slika

Za potpuno funkcionalan sajt, potrebno je dodati slike u `images/` folder:

### Potrebne slike:

**Glavne slike:**
- `hero-bg.jpg` (1920x1080px) - Pozadina hero sekcije
- `restaurant-interior.jpg` (800x600px) - Enterijer restorana
- `wine-collection.jpg` (800x600px) - Vinska kolekcija
- `page-header-bg.jpg` (1920x600px) - Header pozadina
- `wine-header-bg.jpg` (1920x600px) - Vinska karta header
- `cta-bg.jpg` (1920x600px) - CTA sekcija pozadina

**Galerija:**
- `gallery-1.jpg` do `gallery-4.jpg` (600x600px)

**O nama stranica:**
- `history.jpg` (800x600px)
- `kitchen.jpg` (800x600px)
- `chef-1.jpg` (400x500px)
- `sommelier.jpg` (400x500px)
- `sommelier-2.jpg` (800x600px)
- `manager.jpg` (400x500px)

**Jelovnik (images/menu/):**
- Predjela: `kajmak.jpg`, `prsuta.jpg`, `ajvar.jpg`, `gibanica.jpg`
- Čorbe: `corba-teleca.jpg`, `corba-pileca.jpg`, `gulas.jpg`
- Glavna jela: `karadjordjeva.jpg`, `cevapi.jpg`, `punjene-paprike.jpg`, `rostilj.jpg`, `sarma.jpg`, `pasulj.jpg`
- Salate: `sopska.jpg`, `srpska.jpg`, `grcka.jpg`
- Deserti: `palacinke.jpg`, `tulumbe.jpg`, `baklava.jpg`, `krempita.jpg`

**Menu preview:**
- `predjela.jpg`, `glavna-jela.jpg`, `dezert.jpg`

### Preporučene dimenzije i optimizacija:

- Hero slike: 1920x1080px, JPG, kvalitet 85%
- Card slike: 600x600px, JPG, kvalitet 80%
- Portrait slike: 400x500px, JPG, kvalitet 80%
- Optimizujte slike za web (kompresija bez gubitka kvaliteta)
- Koristite WebP format za bolje performanse (opciono)

## 🎨 Prilagođavanje

### Boje

Promenite CSS varijable u `css/style.css`:

```css
:root {
    --primary-color: #c9a961;      /* Zlatna */
    --primary-dark: #a38544;       /* Tamno zlatna */
    --primary-light: #e5d4a3;      /* Svetlo zlatna */
    --secondary-color: #2c2c2c;    /* Tamno siva */
    --accent-color: #8b6f47;       /* Braon */
}
```

### Fontovi

Zamenite Google Fonts linkove u `<head>` sekciji HTML fajlova.

### Kontakt informacije

Ažurirajte kontakt informacije u footer-u i kontakt stranici:
- Adresa
- Telefon
- Email
- Radno vreme
- Social media linkovi

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 991px
- **Desktop:** 992px+
- **Large Desktop:** 1200px+

## ⚡ Performanse

### Optimizacije:
- Lazy loading za slike
- Minimizovane CSS/JS fajlove (za produkciju)
- Debounce/Throttle za scroll events
- Smooth scroll behavior
- Optimizovane animacije sa `will-change`

### Preporuke:
1. Kompresuјte sve slike
2. Koristite CDN za biblioteke
3. Omogućite browser caching
4. Minimizuјte CSS i JS za produkciju

## 🌐 Browser Podrška

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📝 Budući Dodaci

- [ ] Backend integracija za kontakt formu
- [ ] Online rezervacioni sistem
- [ ] Multilingual support (EN)
- [ ] Blog sekcija
- [ ] Online dostava menü
- [ ] Dark mode
- [ ] PWA funkcionalnost

## 👤 Autor

Kreirano za Restoran Gigo - 70 godina tradicije i ukusa

## 📄 Licenca

Sva prava zadržana © 2026 Restoran Gigo

---

## 🆘 Česta Pitanja

**P: Kako mogu promeniti broj telefona?**
O: Pretražite `+381640000000` u svim HTML fajlovima i zamenite sa pravim brojem.

**P: Kako dodati više jela u jelovnik?**
O: Kopirajte postojeći `.menu-item` div u `jelovnik.html` i prilagodite sadržaj.

**P: Kako promeniti boje sajta?**
O: Ažurirajte CSS varijable u `:root` sekciji `css/style.css` fajla.

**P: Da li mogu koristiti ovaj template za drugi restoran?**
O: Da, ali molimo kontaktirajte autora za licencu.

---

**Napomena:** Ovaj sajt je dizajniran sa najboljim UI/UX praksama i optimizovan je za performanse i pristupačnost. Za najbolje iskustvo, dodajte kvalitetne slike i prilagodite sadržaj vašim potrebama.
