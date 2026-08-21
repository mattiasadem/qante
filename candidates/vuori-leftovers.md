# Vuori leftovers / adaylar

*Store:* https://vuoriclothing.com · *Tema (görülen, uydurulmadı):* yok — **Next.js** on Netlify (`x-powered-by: Next.js`). Headless **Shopify** backend (`Shopify.shop = Vuori Clothing`; `Shopify.theme` / `schema_name` / `theme_store_id` yok). **Contentstack** CMS. MUI + Swiper + Algolia + Yotpo. `#shopify-section-*` yok.

*Tarih:* 2026-08-21

Şema icat edilmedi. Claiming observation yazılan tipler burada tekrarlanmaz.

---

ADAY: vuori-global-cart-drawer  
Gerekçe: `button[aria-label="Bag, 0 items"]` `/cart` sayfasına gider; slide-out drawer yok. `global-cart-drawer` şeması bu sitede uygulanmaz.  
Örnekler: https://vuoriclothing.com/cart  
Karar: leftover — `cart-page-main` observation yeterli

---

ADAY: vuori-pdp-breadcrumbs-mobile  
Gerekçe: PDP `nav.MuiBreadcrumbs-root` yalnız 1440'da render; 375/768 DOM'da yok. Collection PLP breadcrumb tüm viewport'larda var (`observations/vuori/default/collection/navigation-breadcrumbs.json`).  
Örnekler: https://vuoriclothing.com/products/womens-sedona-classic-pullover-hoodie-electric-blue  
Karar: leftover — collection observation temsilci; PDP desktop-only delta

---

ADAY: vuori-ask-vuori-ai  
Gerekçe: `#search-ask-vuori-btn` + `.gtm-search-bar-algolia-agentic` agentic search/chat widget. QANTE şema ailesi yok.  
Karar: leftover

---

ADAY: vuori-community-member-drawer  
Gerekçe: `#flyout_modal_Community Member Drawer` onboarding/signup flyout. PII — submit yok.  
Karar: leftover

---

ADAY: vuori-pdp-yotpo-reviews  
Gerekçe: `section.pdp-reviews` Yotpo UGC widget. Third-party app yüzeyi; section şeması yok.  
Karar: leftover

---

ADAY: vuori-pdp-product-qa  
Gerekçe: “Ask anything about this product” AI Q&A bloğu PDP altında.  
Karar: leftover

---

ADAY: vuori-home-breathe-collection  
Gerekçe: Home'da The Halo Collection observation var; The Breathe Collection ayrı split editorial (aynı `editorial-image-with-text` tipi, ikinci instance).  
Karar: leftover — tek temsilci yeterli Mod A

---

ADAY: vuori-mega-hover-interact  
Gerekçe: 1440 Women/Men hover mega panel açık state çekilmedi (statik bar 3vp). `#desktop-header` hover → `aria-controls` submenu.  
Karar: leftover — interact turu

---

ADAY: vuori-cart-filled  
Gerekçe: Boş sepet 3vp alındı; dolu line-item + qty/checkout interact yok (PII checkout yok).  
Karar: leftover

---

ADAY: vuori-store-locator  
Gerekçe: `/apps/store-locator` Shopify app embed; section değil.  
Karar: leftover

---

ADAY: vuori-newsletter-404  
Gerekçe: `/pages/newsletter` HTTP 404. Footer `button.gtm-email-signup-footer` modal tetikler — submit PII yok.  
Karar: leftover

---

ADAY: vuori-locale-picker  
Gerekçe: Promo bar US locale picker (`button.gtm-promo-banner-button`). `promo-announcement-bar` delta'sında not edildi; ayrı şema yok.  
Karar: leftover

---

ADAY: vuori-account-login  
Gerekçe: `/account/login` PII — walk dışı.  
Karar: leftover — yapılmayacak

---

ADAY: vuori-video-product-cards  
Gerekçe: Home New Arrivals carousel'de `[data-testid="video-container"]` inline video kartları. `product-showcase-featured` alt özellik.  
Karar: leftover

---

ADAY: vuori-collection-landing-pages  
Gerekçe: `/pages/kore-collection`, `/pages/mens-dreamknit-collection` vb. uzun campaign landing'ler. Mod A'da about + policy temsilci yeterli.  
Karar: leftover

---

ADAY: vuori-faq-contact-blog-extra  
Gerekçe: FAQ sayfası, contact form, ek blog kategorileri envanterlenmedi. Journal hub + 1 post temsilci alındı.  
Karar: leftover
