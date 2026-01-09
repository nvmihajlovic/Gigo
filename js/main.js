/* ====================================
   RESTORAN GIGO - JAVASCRIPT
   Modern UI/UX Interactions
   ==================================== */

// ====================================
// INITIALIZATION
// ====================================
document.addEventListener('DOMContentLoaded', () => {
    // AOS disabled for premium look
    // if (typeof AOS !== 'undefined') {
    //     AOS.init({
    //         duration: 800,
    //         easing: 'ease-in-out',
    //         once: true,
    //         offset: 100,
    //         delay: 100
    //     });
    // }

    // Initialize all components
    initDynamicYears();
    initNavbar();
    initMobileMenu();
    initBackToTop();
    initHeroSlider();
    initMenuFilter();
    initMenuPrices();
    initWineFilter();
    initWinePrices();
    initContactForm();
    initFAQ();
    initSmoothScroll();
    initLazyLoading();
    initGalleryLightbox();
    initMobileReadMore();
    initMobileFooterAccordion();
});

// ====================================
// MENU PRICES (format amount + currency)
// ====================================
function initMenuPrices() {
    const priceEls = document.querySelectorAll('.menu-price');
    if (priceEls.length === 0) return;

    priceEls.forEach(el => {
        // Skip if already formatted
        if (el.querySelector('.price-amount, .price-currency')) return;

        const raw = (el.textContent || '').replace(/\u00A0/g, ' ').trim();
        if (!raw) return;

        // Expect formats like: "650 RSD" or "1,200 RSD"
        const parts = raw.split(/\s+/).filter(Boolean);
        if (parts.length < 2) return;

        const currency = parts[parts.length - 1];
        const amount = parts.slice(0, -1).join(' ');

        // Basic sanity: amount should start with a digit
        if (!/^\d/.test(amount)) return;

        el.setAttribute('aria-label', raw);
        el.innerHTML = `<span class="price-amount">${amount}</span> <span class="price-currency">${currency}</span>`;
    });
}

// ====================================
// WINE PRICES (format amount + currency)
// ====================================
function initWinePrices() {
    const priceEls = document.querySelectorAll('.wine-price');
    if (priceEls.length === 0) return;

    priceEls.forEach(el => {
        // Determine kind from the nearest previous label inside the same price block
        const parent = el.parentElement;
        if (parent && parent.classList.contains('wine-prices')) {
            const prev = el.previousElementSibling;
            if (prev && prev.classList.contains('wine-price-label')) {
                const label = (prev.textContent || '').trim().toLowerCase();
                if (label.includes('čaš') || label.includes('glass')) el.dataset.kind = 'glass';
                if (label.includes('flaš') || label.includes('bottle')) el.dataset.kind = 'bottle';
            } else {
                el.dataset.kind = el.dataset.kind || 'bottle';
            }
        }

        // Skip if already formatted
        if (el.querySelector('.price-amount, .price-currency')) return;

        const raw = (el.textContent || '').replace(/\u00A0/g, ' ').trim();
        if (!raw) return;

        const parts = raw.split(/\s+/).filter(Boolean);
        if (parts.length < 2) return;

        const currency = parts[parts.length - 1];
        const amount = parts.slice(0, -1).join(' ');
        if (!/^\d/.test(amount)) return;

        el.setAttribute('aria-label', raw);
        el.innerHTML = `<span class="price-amount">${amount}</span> <span class="price-currency">${currency}</span>`;
    });
}

// ====================================
// DYNAMIC YEARS (since YYYY)
// ====================================
function initDynamicYears() {
    const yearNow = new Date().getFullYear();

    const yearNodes = document.querySelectorAll('[data-years-since]');
    yearNodes.forEach(node => {
        const since = Number.parseInt(node.getAttribute('data-years-since'), 10);
        if (!Number.isFinite(since)) return;
        const years = Math.max(0, yearNow - since);
        node.textContent = String(years);
    });

    const titleEl = document.querySelector('title[data-years-template]');
    if (titleEl) {
        const tpl = titleEl.getAttribute('data-years-template');
        if (tpl) {
            const years = Math.max(0, yearNow - 1998);
            titleEl.textContent = tpl.replaceAll('{years}', String(years));
        }
    }

    const metaDesc = document.querySelector('meta[name="description"][data-years-template]');
    if (metaDesc) {
        const tpl = metaDesc.getAttribute('data-years-template');
        if (tpl) {
            const years = Math.max(0, yearNow - 1998);
            metaDesc.setAttribute('content', tpl.replaceAll('{years}', String(years)));
        }
    }
}

// ====================================
// I18N (SR / EN)
// ====================================
const LOCALE = (document.documentElement.getAttribute('lang') || 'sr').toLowerCase().startsWith('en') ? 'en' : 'sr';

const I18N = {
    sr: {
        contactErrName: 'Molimo unesite vaše ime i prezime.',
        contactErrPhone: 'Molimo unesite ispravan broj telefona.',
        contactErrEmail: 'Molimo unesite ispravnu email adresu.',
        contactErrGuests: 'Molimo izaberite broj gostiju.',
        contactErrDate: 'Molimo izaberite datum.',
        contactErrTime: 'Molimo izaberite vreme.',
        readMore: 'Pročitajte više',
        readLess: 'Prikaži manje',
        footerLinksToggle: 'Brzi linkovi'
    },
    en: {
        contactErrName: 'Please enter your full name.',
        contactErrPhone: 'Please enter a valid phone number.',
        contactErrEmail: 'Please enter a valid email address.',
        contactErrGuests: 'Please select the number of guests.',
        contactErrDate: 'Please select a date.',
        contactErrTime: 'Please select a time.',
        readMore: 'Read more',
        readLess: 'Show less',
        footerLinksToggle: 'Quick links'
    }
};

function t(key) {
    return (I18N[LOCALE] && I18N[LOCALE][key]) || I18N.sr[key] || '';
}

// ====================================
// NAVBAR
// ====================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const logoImages = navbar.querySelectorAll('img.logo-img[data-logo-default][data-logo-inverse]');

    function updateNavbarLogo() {
        const useInverse = navbar.classList.contains('scrolled');
        logoImages.forEach(img => {
            const nextSrc = useInverse ? img.dataset.logoInverse : img.dataset.logoDefault;
            if (nextSrc && img.getAttribute('src') !== nextSrc) {
                img.setAttribute('src', nextSrc);
            }
        });
    }

    function updateNavbarStickyOffset() {
        const height = Math.ceil(navbar.getBoundingClientRect().height);
        document.documentElement.style.setProperty('--navbar-sticky-offset', `${height}px`);
    }

    let lastScrollTop = 0;
    const scrollThreshold = 100;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add/remove scrolled class
        if (scrollTop > scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        updateNavbarLogo();
        updateNavbarStickyOffset();

        lastScrollTop = scrollTop;
    });

    window.addEventListener('resize', () => {
        updateNavbarStickyOffset();
    });

    // Initial state
    if (window.pageYOffset > scrollThreshold) {
        navbar.classList.add('scrolled');
    }
    updateNavbarLogo();
    updateNavbarStickyOffset();

    // Set active link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ====================================
// MOBILE MENU
// ====================================
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (!mobileToggle || !navMenu) return;

    mobileToggle.setAttribute('aria-controls', 'navMenu');
    mobileToggle.setAttribute('aria-expanded', 'false');
    navMenu.setAttribute('aria-hidden', 'true');

    const firstNavLink = navMenu.querySelector('.nav-link');

    function setMenuOpen(isOpen, { restoreFocus } = { restoreFocus: false }) {
        mobileToggle.classList.toggle('active', isOpen);
        navMenu.classList.toggle('active', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
        mobileToggle.setAttribute('aria-expanded', String(isOpen));
        navMenu.setAttribute('aria-hidden', String(!isOpen));

        if (isOpen && firstNavLink) {
            firstNavLink.focus();
        }

        if (!isOpen && restoreFocus) {
            mobileToggle.focus();
        }
    }

    // Toggle menu
    mobileToggle.addEventListener('click', () => {
        const willOpen = !navMenu.classList.contains('active');
        setMenuOpen(willOpen);
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            setMenuOpen(false);
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('active')) {
            setMenuOpen(false);
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            setMenuOpen(false, { restoreFocus: true });
        }
    });
}

// ====================================
// HERO SLIDER
// ====================================
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.slider-dot');
    
    if (slides.length === 0 || dots.length === 0) return;

    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    let currentSlide = 0;
    const slideInterval = 7000;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // Auto advance slides (disabled when user prefers reduced motion)
    let autoSlide = null;
    if (!prefersReducedMotion) {
        autoSlide = setInterval(nextSlide, slideInterval);
    }
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (autoSlide) clearInterval(autoSlide);
            currentSlide = index;
            showSlide(currentSlide);
            if (!prefersReducedMotion) {
                autoSlide = setInterval(nextSlide, slideInterval);
            }
        });
    });
    
    // Pause only when hovering slider navigation (prevents full-hero accidental pause)
    const sliderNav = document.querySelector('.hero-slider-nav');
    if (sliderNav) {
        sliderNav.addEventListener('mouseenter', () => {
            if (autoSlide) {
                clearInterval(autoSlide);
                autoSlide = null;
            }
        });

        sliderNav.addEventListener('mouseleave', () => {
            if (!prefersReducedMotion && !autoSlide) {
                autoSlide = setInterval(nextSlide, slideInterval);
            }
        });
    }
}

// ====================================
// GALLERY LIGHTBOX (vanilla)
// ====================================
function initGalleryLightbox() {
    const gallery = document.querySelector('.gallery-grid');
    if (!gallery) return;

    const galleryImages = Array.from(gallery.querySelectorAll('.gallery-item img'));
    if (galleryImages.length === 0) return;

    let lightbox = document.querySelector('.lightbox');
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.setAttribute('role', 'dialog');
        lightbox.setAttribute('aria-modal', 'true');
        lightbox.setAttribute('aria-label', LOCALE === 'en' ? 'Image preview' : 'Pregled slike');

        lightbox.innerHTML = `
            <div class="lightbox-overlay" data-lightbox-close="true" aria-hidden="true"></div>
            <div class="lightbox-content" role="document">
                <button type="button" class="lightbox-close" data-lightbox-close="true" aria-label="${LOCALE === 'en' ? 'Close' : 'Zatvori'}">&times;</button>
                <button type="button" class="lightbox-nav lightbox-prev" aria-label="${LOCALE === 'en' ? 'Previous image' : 'Prethodna slika'}">
                    <span aria-hidden="true">&#8249;</span>
                </button>
                <button type="button" class="lightbox-nav lightbox-next" aria-label="${LOCALE === 'en' ? 'Next image' : 'Sledeća slika'}">
                    <span aria-hidden="true">&#8250;</span>
                </button>
                <img src="" alt="">
            </div>
        `;

        document.body.appendChild(lightbox);
    }

    const imgEl = lightbox.querySelector('img');
    const closeTargets = lightbox.querySelectorAll('[data-lightbox-close="true"]');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');

    let lastFocus = null;
    let currentIndex = 0;

    function setImageByIndex(nextIndex) {
        if (galleryImages.length === 0) return;
        const normalized = ((nextIndex % galleryImages.length) + galleryImages.length) % galleryImages.length;
        currentIndex = normalized;
        const src = galleryImages[currentIndex].getAttribute('src');
        const alt = galleryImages[currentIndex].getAttribute('alt') || '';
        imgEl.src = src;
        imgEl.alt = alt;
    }

    function openLightbox(index) {
        lastFocus = document.activeElement;
        setImageByIndex(index);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';

        const closeBtn = lightbox.querySelector('.lightbox-close');
        if (closeBtn) closeBtn.focus();
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        imgEl.src = '';
        document.body.style.overflow = '';
        if (lastFocus && typeof lastFocus.focus === 'function') {
            lastFocus.focus();
        }
    }

    // Mobile gestures: swipe left/right to navigate, swipe down to close
    const contentEl = lightbox.querySelector('.lightbox-content');
    if (contentEl) {
        let touchStartX = 0;
        let touchStartY = 0;
        let touchActive = false;

        contentEl.addEventListener('touchstart', (event) => {
            if (!lightbox.classList.contains('active')) return;
            if (!event.touches || event.touches.length !== 1) return;
            touchActive = true;
            touchStartX = event.touches[0].clientX;
            touchStartY = event.touches[0].clientY;
        }, { passive: true });

        contentEl.addEventListener('touchend', (event) => {
            if (!touchActive) return;
            touchActive = false;
            if (!lightbox.classList.contains('active')) return;
            if (!event.changedTouches || event.changedTouches.length !== 1) return;

            const endX = event.changedTouches[0].clientX;
            const endY = event.changedTouches[0].clientY;
            const dx = endX - touchStartX;
            const dy = endY - touchStartY;
            const absX = Math.abs(dx);
            const absY = Math.abs(dy);

            if (absY > 90 && absY > absX) {
                closeLightbox();
                return;
            }

            if (absX > 70 && absX > absY) {
                if (dx < 0) setImageByIndex(currentIndex + 1);
                else setImageByIndex(currentIndex - 1);
            }
        }, { passive: true });
    }

    gallery.addEventListener('click', (e) => {
        const img = e.target && e.target.closest ? e.target.closest('.gallery-item img') : null;
        if (!img) return;
        const index = galleryImages.indexOf(img);
        openLightbox(Math.max(0, index));
    });

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (!lightbox.classList.contains('active')) return;
            setImageByIndex(currentIndex - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (!lightbox.classList.contains('active')) return;
            setImageByIndex(currentIndex + 1);
        });
    }

    closeTargets.forEach(el => {
        el.addEventListener('click', closeLightbox);
    });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') {
            closeLightbox();
        }

        if (e.key === 'ArrowLeft') {
            setImageByIndex(currentIndex - 1);
        }

        if (e.key === 'ArrowRight') {
            setImageByIndex(currentIndex + 1);
        }
    });
}

// ====================================
// MOBILE READ MORE (<= 768px)
// Keeps content unchanged; toggles visibility only
// ====================================
function initMobileReadMore() {
    const mq = window.matchMedia('(max-width: 768px)');
    const selector = 'body.page-about .story-content';

    function apply() {
        document.querySelectorAll(selector).forEach((container) => {
            if (container.dataset.mobileReadmoreOriginal) return;

            const paragraphs = Array.from(container.querySelectorAll('p'));
            if (paragraphs.length < 2) return;

            container.dataset.mobileReadmoreOriginal = container.innerHTML;

            const title = container.querySelector('.section-title');
            if (!title) return;

            // Wrap all paragraphs into a clamped block
            const textWrap = document.createElement('div');
            textWrap.className = 'mobile-readmore-lines';
            textWrap.id = `readmore-${Math.random().toString(36).slice(2, 9)}`;

            paragraphs.forEach((p) => textWrap.appendChild(p));

            const toggle = document.createElement('button');
            toggle.type = 'button';
            toggle.className = 'btn btn-secondary mobile-readmore-toggle';
            toggle.setAttribute('aria-expanded', 'false');
            toggle.setAttribute('aria-controls', textWrap.id);
            toggle.textContent = t('readMore');

            toggle.addEventListener('click', () => {
                const isOpen = toggle.getAttribute('aria-expanded') === 'true';
                toggle.setAttribute('aria-expanded', String(!isOpen));
                toggle.textContent = isOpen ? t('readMore') : t('readLess');
                container.classList.toggle('is-open', !isOpen);
            });

            title.insertAdjacentElement('afterend', textWrap);
            textWrap.insertAdjacentElement('afterend', toggle);
        });
    }

    function cleanup() {
        document.querySelectorAll(selector).forEach((container) => {
            const original = container.dataset.mobileReadmoreOriginal;
            if (!original) return;
            container.innerHTML = original;
            delete container.dataset.mobileReadmoreOriginal;
            container.classList.remove('is-open');
        });
    }

    function sync() {
        if (mq.matches) apply();
        else cleanup();
    }

    sync();
    if (mq.addEventListener) mq.addEventListener('change', sync);
    else mq.addListener(sync);
}

// ====================================
// FOOTER ACCORDION (<= 768px)
// Keeps contact/hours visible; collapses quick links only
// ====================================
function initMobileFooterAccordion() {
    const mq = window.matchMedia('(max-width: 768px)');

    function apply() {
        document.querySelectorAll('footer.footer').forEach((footer) => {
            if (footer.dataset.mobileFooterOriginal) return;
            const grid = footer.querySelector('.footer-grid');
            if (!grid) return;

            footer.dataset.mobileFooterOriginal = footer.innerHTML;

            const cols = Array.from(footer.querySelectorAll('.footer-col'));
            const linksCol = cols.find((col) => col.querySelector('.footer-links'));
            if (!linksCol) return;

            const heading = linksCol.querySelector('h4');
            const list = linksCol.querySelector('.footer-links');
            if (!heading || !list) return;

            const id = `footer-links-${Math.random().toString(36).slice(2, 9)}`;
            list.id = id;
            list.hidden = true;

            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'footer-accordion-toggle';
            button.setAttribute('aria-expanded', 'false');
            button.setAttribute('aria-controls', id);
            button.textContent = heading.textContent.trim() || t('footerLinksToggle');

            button.addEventListener('click', () => {
                const isOpen = button.getAttribute('aria-expanded') === 'true';
                button.setAttribute('aria-expanded', String(!isOpen));
                list.hidden = isOpen;
                linksCol.classList.toggle('is-open', !isOpen);
            });

            heading.replaceWith(button);
        });
    }

    function cleanup() {
        document.querySelectorAll('footer.footer').forEach((footer) => {
            const original = footer.dataset.mobileFooterOriginal;
            if (!original) return;
            footer.innerHTML = original;
            delete footer.dataset.mobileFooterOriginal;
        });
    }

    function sync() {
        if (mq.matches) apply();
        else cleanup();
    }

    sync();
    if (mq.addEventListener) mq.addEventListener('change', sync);
    else mq.addListener(sync);
}

// ====================================
// BACK TO TOP BUTTON
// ====================================
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ====================================
// MENU FILTER (Jelovnik Page)
// ====================================
function initMenuFilter() {
    const menuFilter = document.querySelector('.menu-filter');
    const tabList = document.querySelector('.filter-buttons[role="tablist"]');
    const tabs = Array.from(document.querySelectorAll('.filter-buttons [role="tab"].filter-btn'));
    const sections = Array.from(document.querySelectorAll('.menu-section'));

    if (!menuFilter || !tabList || tabs.length === 0 || sections.length === 0) return;

    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function getStickyOffset() {
        const navbar = document.getElementById('navbar');
        const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
        const filterHeight = menuFilter.getBoundingClientRect().height;
        return Math.ceil(navbarHeight + filterHeight + 12);
    }

    function scrollToSection(sectionId) {
        const target = sectionId === 'all' ? sections[0] : document.getElementById(sectionId);
        if (!target) return;

        const top = target.getBoundingClientRect().top + window.pageYOffset - getStickyOffset();
        window.scrollTo({
            top,
            behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
    }

    function setActiveTab(nextTab, { focus = false } = {}) {
        tabs.forEach(tab => {
            const isActive = tab === nextTab;
            tab.classList.toggle('active', isActive);
            tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
            if (isActive) {
                tab.setAttribute('aria-current', 'true');
            } else {
                tab.removeAttribute('aria-current');
            }
            tab.tabIndex = isActive ? 0 : -1;
        });

        if (focus) nextTab.focus();
    }

    function getTabByTarget(targetId) {
        return tabs.find(t => (t.getAttribute('data-target') || t.getAttribute('data-filter') || '').trim() === targetId);
    }

    // Init: ensure aria + roving tabindex are consistent
    const initial = tabs.find(t => t.getAttribute('aria-selected') === 'true') || tabs.find(t => t.classList.contains('active')) || tabs[0];
    setActiveTab(initial);

    // Click -> smooth scroll
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            setActiveTab(tab);
            const targetId = (tab.getAttribute('data-target') || 'all').trim();
            scrollToSection(targetId);
        });
    });

    // Keyboard nav (Left/Right, Home/End, Enter/Space)
    tabList.addEventListener('keydown', (e) => {
        const foundIndex = tabs.findIndex(t => t.tabIndex === 0);
        const currentIndex = foundIndex >= 0 ? foundIndex : 0;
        const isHorizontal = e.key === 'ArrowLeft' || e.key === 'ArrowRight';

        if (isHorizontal || e.key === 'Home' || e.key === 'End') {
            e.preventDefault();
            let nextIndex = currentIndex;
            if (e.key === 'Home') nextIndex = 0;
            if (e.key === 'End') nextIndex = tabs.length - 1;
            if (e.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
            if (e.key === 'ArrowRight') nextIndex = (currentIndex + 1) % tabs.length;

            setActiveTab(tabs[nextIndex], { focus: true });
            return;
        }

        if (e.key === 'Enter' || e.key === ' ') {
            const activeTab = tabs.find(t => t.tabIndex === 0) || tabs[0];
            if (!activeTab) return;
            e.preventDefault();
            const targetId = (activeTab.getAttribute('data-target') || 'all').trim();
            scrollToSection(targetId);
        }
    });

    // Scrollspy: update active tab based on scroll position
    let rafPending = false;
    let lastActiveSectionId = null;

    function findActiveSectionId() {
        const offset = getStickyOffset();
        const probeY = offset + 8;

        // Above the first section? Keep "All" highlighted.
        const firstRect = sections[0].getBoundingClientRect();
        if (firstRect.top > probeY + 24) return 'all';

        let best = sections[0];
        for (const section of sections) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= probeY) best = section;
        }
        return best ? best.id : null;
    }

    function updateFromScroll() {
        rafPending = false;
        const sectionId = findActiveSectionId();
        if (!sectionId || sectionId === lastActiveSectionId) return;

        lastActiveSectionId = sectionId;
        const nextTab = getTabByTarget(sectionId);
        if (nextTab) setActiveTab(nextTab);
    }

    window.addEventListener('scroll', () => {
        if (rafPending) return;
        rafPending = true;
        window.requestAnimationFrame(updateFromScroll);
    }, { passive: true });

    window.addEventListener('resize', () => {
        if (rafPending) return;
        rafPending = true;
        window.requestAnimationFrame(updateFromScroll);
    });

    // Initial sync
    updateFromScroll();
}

// Animate section when filtering
function animateSection(section) {
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        const items = section.querySelectorAll('.menu-item');
        items.forEach(item => {
            item.style.opacity = '1';
            item.style.transform = 'none';
            item.style.transition = 'none';
        });
        return;
    }

    const items = section.querySelectorAll('.menu-item');
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

// ====================================
// WINE FILTER (Vinska Karta Page)
// ====================================
function initWineFilter() {
    const wineFilter = document.querySelector('.wine-filter');
    const tabList = document.querySelector('.wine-filter .filter-buttons[role="tablist"]');
    const tabs = Array.from(document.querySelectorAll('.wine-filter .filter-buttons [role="tab"].filter-btn'));
    const sections = Array.from(document.querySelectorAll('.wine-section'));

    if (!wineFilter || !tabList || tabs.length === 0 || sections.length === 0) return;

    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function getStickyOffset() {
        const navbar = document.getElementById('navbar');
        const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
        const filterHeight = wineFilter.getBoundingClientRect().height;
        return Math.ceil(navbarHeight + filterHeight + 12);
    }

    function scrollToSection(sectionId) {
        const target = sectionId === 'all' ? sections[0] : document.getElementById(sectionId);
        if (!target) return;
        const top = target.getBoundingClientRect().top + window.pageYOffset - getStickyOffset();
        window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }

    function setActiveTab(nextTab, { focus = false } = {}) {
        tabs.forEach(tab => {
            const isActive = tab === nextTab;
            tab.classList.toggle('active', isActive);
            tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
            if (isActive) {
                tab.setAttribute('aria-current', 'true');
            } else {
                tab.removeAttribute('aria-current');
            }
            tab.tabIndex = isActive ? 0 : -1;
        });

        if (focus) nextTab.focus();
    }

    function getTabByTarget(targetId) {
        return tabs.find(t => (t.getAttribute('data-target') || t.getAttribute('data-filter') || '').trim() === targetId);
    }

    const initial = tabs.find(t => t.getAttribute('aria-selected') === 'true') || tabs.find(t => t.classList.contains('active')) || tabs[0];
    setActiveTab(initial);

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            setActiveTab(tab);
            const targetId = (tab.getAttribute('data-target') || 'all').trim();
            scrollToSection(targetId);
        });
    });

    tabList.addEventListener('keydown', (e) => {
        const foundIndex = tabs.findIndex(t => t.tabIndex === 0);
        const currentIndex = foundIndex >= 0 ? foundIndex : 0;
        const isHorizontal = e.key === 'ArrowLeft' || e.key === 'ArrowRight';

        if (isHorizontal || e.key === 'Home' || e.key === 'End') {
            e.preventDefault();
            let nextIndex = currentIndex;
            if (e.key === 'Home') nextIndex = 0;
            if (e.key === 'End') nextIndex = tabs.length - 1;
            if (e.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
            if (e.key === 'ArrowRight') nextIndex = (currentIndex + 1) % tabs.length;
            setActiveTab(tabs[nextIndex], { focus: true });
            return;
        }

        if (e.key === 'Enter' || e.key === ' ') {
            const activeTab = tabs.find(t => t.tabIndex === 0) || tabs[0];
            if (!activeTab) return;
            e.preventDefault();
            const targetId = (activeTab.getAttribute('data-target') || 'all').trim();
            scrollToSection(targetId);
        }
    });

    let rafPending = false;
    let lastActiveSectionId = null;

    function findActiveSectionId() {
        const offset = getStickyOffset();
        const probeY = offset + 8;

        const firstRect = sections[0].getBoundingClientRect();
        if (firstRect.top > probeY + 24) return 'all';

        let best = sections[0];
        for (const section of sections) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= probeY) best = section;
        }
        return best ? best.id : null;
    }

    function updateFromScroll() {
        rafPending = false;
        const sectionId = findActiveSectionId();
        if (!sectionId || sectionId === lastActiveSectionId) return;
        lastActiveSectionId = sectionId;
        const nextTab = getTabByTarget(sectionId);
        if (nextTab) setActiveTab(nextTab);
    }

    window.addEventListener('scroll', () => {
        if (rafPending) return;
        rafPending = true;
        window.requestAnimationFrame(updateFromScroll);
    }, { passive: true });

    window.addEventListener('resize', () => {
        if (rafPending) return;
        rafPending = true;
        window.requestAnimationFrame(updateFromScroll);
    });

    updateFromScroll();
}

// ====================================
// CONTACT FORM
// ====================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    // Allow normal form submission (e.g., FormSubmit) and only block if validation fails.
    form.addEventListener('submit', (e) => {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        if (!validateContactForm(data)) {
            e.preventDefault();
        }
    });

    // Set min date to today
    const dateInput = form.querySelector('#date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
}

function validateContactForm(data) {
    const errors = [];

    if (!data.name || data.name.trim().length < 2) {
        errors.push(t('contactErrName'));
    }

    if (!data.phone || !isValidPhone(data.phone)) {
        errors.push(t('contactErrPhone'));
    }

    if (!data.email || !isValidEmail(data.email)) {
        errors.push(t('contactErrEmail'));
    }

    if (!data.guests) {
        errors.push(t('contactErrGuests'));
    }

    if (!data.date) {
        errors.push(t('contactErrDate'));
    }

    if (!data.time) {
        errors.push(t('contactErrTime'));
    }

    if (errors.length > 0) {
        showFormMessage('error', errors.join(' '));
        return false;
    }

    return true;
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isValidPhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 9;
}

function showFormMessage(type, message) {
    const messageDiv = document.getElementById('formMessage');
    if (!messageDiv) return;

    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = message;
    messageDiv.style.display = 'block';

    // Scroll to message
    messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Hide message after 5 seconds
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
}

function simulateFormSubmission(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Form submitted:', data);
            resolve();
        }, 1500);
    });
}

// ====================================
// FAQ ACCORDION
// ====================================
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length === 0) return;

    const questions = Array.from(document.querySelectorAll('.faq-question'));

    function getAnswerEl(item) {
        return item.querySelector('.faq-answer');
    }

    function setCollapsed(item, collapsed) {
        const question = item.querySelector('.faq-question');
        const answer = getAnswerEl(item);
        if (!question || !answer) return;

        if (collapsed) {
            item.classList.remove('active');
            question.setAttribute('aria-expanded', 'false');
            const doHide = () => {
                answer.setAttribute('hidden', '');
            };

            // If it's already hidden/collapsed, finish fast
            if (answer.hasAttribute('hidden') || answer.style.maxHeight === '0px') {
                answer.style.maxHeight = '0px';
                doHide();
                return;
            }

            // Animate close: current height -> 0, then hide
            answer.style.maxHeight = `${answer.scrollHeight}px`;
            window.requestAnimationFrame(() => {
                answer.style.maxHeight = '0px';
            });

            answer.addEventListener('transitionend', (e) => {
                if (e.propertyName !== 'max-height') return;
                doHide();
            }, { once: true });
        } else {
            item.classList.add('active');
            question.setAttribute('aria-expanded', 'true');
            answer.removeAttribute('hidden');

            // Animate to real height
            answer.style.maxHeight = '0px';
            const next = () => {
                answer.style.maxHeight = `${answer.scrollHeight}px`;
            };
            window.requestAnimationFrame(next);
        }
    }

    // Initial state (no load animation)
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = getAnswerEl(item);
        if (!question || !answer) return;

        const shouldBeOpen = question.getAttribute('aria-expanded') === 'true' || item.classList.contains('active');
        if (shouldBeOpen) {
            item.classList.add('active');
            question.setAttribute('aria-expanded', 'true');
            answer.removeAttribute('hidden');
            answer.style.maxHeight = `${answer.scrollHeight}px`;
        } else {
            item.classList.remove('active');
            question.setAttribute('aria-expanded', 'false');
            answer.setAttribute('hidden', '');
            answer.style.maxHeight = '0px';
        }

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(faqItem => setCollapsed(faqItem, true));
            if (!isActive) setCollapsed(item, false);
        });

        question.addEventListener('keydown', (e) => {
            const key = e.key;
            if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(key)) return;
            e.preventDefault();

            const idx = questions.indexOf(question);
            if (idx === -1) return;

            if (key === 'Home') {
                questions[0]?.focus();
                return;
            }

            if (key === 'End') {
                questions[questions.length - 1]?.focus();
                return;
            }

            const dir = key === 'ArrowDown' ? 1 : -1;
            const nextIdx = (idx + dir + questions.length) % questions.length;
            questions[nextIdx]?.focus();
        });
    });
}

// ====================================
// SMOOTH SCROLL
// ====================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignore empty anchors
            if (href === '#' || href === '#!') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const yOffset = -80; // Offset for fixed navbar
                const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
                
                window.scrollTo({
                    top: y,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ====================================
// LAZY LOADING IMAGES
// ====================================
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px'
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
}

// ====================================
// PERFORMANCE OPTIMIZATION
// ====================================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for resize events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ====================================
// UTILITIES
// ====================================
// Format phone number
function formatPhoneNumber(phoneNumber) {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{2})(\d{3})(\d{4})$/);
    if (match) {
        return '+' + match[1] + ' ' + match[2] + ' ' + match[3] + ' ' + match[4];
    }
    return phoneNumber;
}

// Detect if user prefers reduced motion
function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Adjust animations for users who prefer reduced motion
if (prefersReducedMotion()) {
    document.documentElement.style.setProperty('--transition-fast', '0.01s');
    document.documentElement.style.setProperty('--transition-normal', '0.01s');
    document.documentElement.style.setProperty('--transition-slow', '0.01s');
}

// ====================================
// CONSOLE MESSAGE
// ====================================
console.log('%cRestoran Gigo', 'font-size: 24px; font-weight: bold; color: #c9a961;');
console.log('%c70 godina tradicije i ukusa', 'font-size: 14px; font-style: italic; color: #666;');
console.log('%cWebsite powered by modern web technologies', 'font-size: 12px; color: #999;');
