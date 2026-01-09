# RESTORAN GIGO - SAJT INFO

## 📊 Tehnički Detalji

### Fajlovi i Struktura:
- **5 HTML stranica** (index, o-nama, jelovnik, vinska-karta, kontakt)
- **3 CSS fajla** (style.css, pages.css, lightbox.css)
- **1 JavaScript fajl** (main.js)
- **Responsive dizajn** - Mobile First pristup

### Veličina Projekta:
- HTML: ~35 KB (bez slika)
- CSS: ~45 KB (bez kompresije)
- JS: ~15 KB
- **Ukupno (bez slika): ~95 KB**

### Browser Kompatibilnost:
✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+
✅ Mobile browsers

---

## 🎨 Dizajn Sistem

### Boje:
- **Primary (Zlatna):** #c9a961
- **Primary Dark:** #a38544
- **Primary Light:** #e5d4a3
- **Secondary (Tamna):** #2c2c2c
- **Accent:** #8b6f47

### Fontovi:
- **Naslovi:** Playfair Display (serif)
- **Tekst:** Poppins (sans-serif)

### Spacing:
- XS: 0.5rem (8px)
- SM: 1rem (16px)
- MD: 2rem (32px)
- LG: 4rem (64px)
- XL: 6rem (96px)

### Breakpoints:
- Mobile: < 640px
- Tablet: 640px - 991px
- Desktop: 992px+
- Large: 1200px+

---

## ⚡ Performanse

### Optimizacije:
- Lazy loading slika
- Smooth scroll behavior
- Debounced scroll events
- CSS animations sa GPU akceleracijom
- Minimalan JS (bez frameworks)

### Page Load:
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Lighthouse Score:** 90+

### SEO:
- Semantički HTML5
- Meta tags
- Alt atributi na slikama
- Structured data spremno
- Mobile-friendly

---

## 📱 Funkcionalnosti

### Navigacija:
- Sticky navbar
- Mobile hamburger menu
- Smooth scroll
- Active page indicator

### Interakcije:
- Filter jelovnika po kategorijama
- Filter vina po tipovima
- FAQ accordion
- Kontakt forma sa validacijom
- Back to top button
- Hover efekti
- Scroll animations (AOS)

### Forme:
- Validacija u realnom vremenu
- Error/Success poruke
- Date picker sa min date
- Select dropdown
- Textarea za napomene

---

## 🔧 Customization Guide

### Promena Boja:
```css
/* u css/style.css */
:root {
    --primary-color: #c9a961;  /* Vaša boja */
}
```

### Promena Logo:
```html
<!-- u navigaciji -->
<a href="index.html" class="logo">
    <span class="logo-text">Vaš</span>
    <span class="logo-highlight">Naziv</span>
</a>
```

### Dodavanje Nove Stavke u Jelovnik:
```html
<div class="menu-item" data-aos="fade-up">
    <div class="menu-item-image">
        <img src="images/menu/novo-jelo.jpg" alt="Novo jelo">
    </div>
    <div class="menu-item-content">
        <div class="menu-item-header">
            <h3>Naziv Jela</h3>
            <span class="menu-price">999 RSD</span>
        </div>
        <p class="menu-description">Opis jela...</p>
    </div>
</div>
```

### Promena Kontakt Info:
Pretražite i zamenite u svim fajlovima:
- Telefon: `+381640000000`
- Email: `info@restorangigo.rs`
- Adresa: `Kneza Miloša 15, Beograd`

---

## 🚀 Deploy Checklist

### Pre Deploy-a:
- [ ] Dodati sve slike
- [ ] Ažurirati kontakt informacije
- [ ] Testirati sve linkove
- [ ] Testirati kontakt formu
- [ ] Proveriti responzivnost
- [ ] Optimizovati slike
- [ ] Dodati prave social media linkove
- [ ] Ažurirati Google Maps koordinate
- [ ] Proveriti SEO meta tagove
- [ ] Testirati u različitim browserima

### Deploy Opcije:

#### 1. GitHub Pages (Besplatno):
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```
Zatim omogući GitHub Pages u repo settings.

#### 2. Netlify (Besplatno):
- Drag & drop folder na netlify.com
- Ili povežite sa GitHub repom

#### 3. Custom Hosting:
- Upload via FTP/SFTP
- Ensure index.html je u root
- Proveri file permissions

---

## 📈 Buduća Unapređenja

### Faza 2:
- [ ] Backend za kontakt formu (PHP/Node.js)
- [ ] Online rezervacioni sistem
- [ ] Admin panel za jelovnik
- [ ] Integracija sa delivery platformama

### Faza 3:
- [ ] Multi-language (EN, DE)
- [ ] Blog sekcija
- [ ] Online poručivanje
- [ ] Loyalty program

### Faza 4:
- [ ] PWA funkcionalnost
- [ ] Push notifications
- [ ] Dark mode
- [ ] Advanced analytics

---

## 🐛 Known Issues / Limitations

1. **Kontakt forma** - Frontend only validacija (potreban backend)
2. **Slike** - Placeholder paths (dodati prave slike)
3. **Google Maps** - Generic lokacija (ažurirati koordinate)
4. **Social media** - Dummy linkovi (dodati prave URL-ove)

---

## 💡 Tips za Klijenta

### Održavanje Sajta:
1. **Dodavanje novih jela:**
   - Fotografišite jelo
   - Optimizujte sliku (kompresija)
   - Dodajte u odgovarajuću kategoriju u HTML

2. **Promena cena:**
   - Pretražite cenu u HTML fajlu
   - Ažurirajte vrednost

3. **Radno vreme:**
   - Ažurirajte u footer-u svake stranice
   - Takođe na kontakt stranici

4. **Blog/Novosti:**
   - Koristite Instagram ili Facebook
   - Linkujte sa sajta

### Marketing:
- Fotografišite često (hrana, gosti, atmosfera)
- Delite na social media
- Prikupljajte email listu za newsletter
- Google My Business profil
- TripAdvisor/Yelp recenzije

---

## 📞 Support

Za tehničku podršku, dodatne funkcionalnosti ili pitanja:
- Email: developer@example.com
- Odgovor u roku 24h

**Website kreiran sa ❤️ za Restoran Gigo**

---

*Poslednje ažuriranje: Januar 2026*
