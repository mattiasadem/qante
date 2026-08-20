# Everlane leftovers / adaylar

*Store:* https://www.everlane.com · *Tema (görülen):* `everlane/MAIN` · Dawn **15.3.0** · shop `m34kzg-ke.myshopify.com` · Theme Store id yok  
*Home/About:* Builder.io section (`builder_io_*`) — Shopify `#shopify-section-*` yok  
*Tarih:* 2026-08-20

Şema icat edilmedi. Observation yazılan tipler burada tekrarlanmaz.

---

ADAY: everlane-predictive-search  
Gerekçe: Header search `header__icon--search` → `/search` sayfasına gider. Home'da `predictive-search` overlay / inline input yok. `global-predictive-search` kanıtlanamadı.  
Örnekler: https://www.everlane.com/ · https://www.everlane.com/search?q=denim  
Karar: leftover

---

ADAY: everlane-pdp-reviews  
Gerekçe: `#shopify-section-template--21231355822166__1750869899c69a722b` ~2286px — üçüncü parti reviews (3.9 · 242 REVIEWS · AI-generated summary). `sections/` içinde review şeması yok.  
Örnekler: https://www.everlane.com/products/womens-way-high-jean-2-dark-indigo  
Karar: leftover

---

ADAY: everlane-pdp-related-products  
Gerekçe: `related-products` section h≈64px / boş; `related_products_LRk8Gp` h=0. `product-showcase-related` kanıtsız.  
Karar: leftover

---

ADAY: everlane-pdp-faq  
Gerekçe: `faq_wN7NU9` h=0 PDP'de.  
Karar: leftover

---

ADAY: everlane-blog-post  
Gerekçe: `/blogs/news` list minimal; makale linki bulunamadı veya 404. `blog-post-main` kanıt yok.  
Örnekler: https://www.everlane.com/blogs/news  
Karar: leftover

---

ADAY: everlane-builder-home-subblocks  
Gerekçe: Home tek `builder_io` section (~5579px). Mod A'da temsilci bloklar ayrı observation; kalan bloklar (NATURAL ISN'T scroll, promo banner duplicate, vb.) ayrı çekilmedi.  
Örnekler: https://www.everlane.com/  
Karar: leftover — interact veya Mod A+ backlog

---

ADAY: everlane-mega-interact  
Gerekçe: Women/Men tab mega kapalı karede görünmüyor. `navigation-header-mega` statik header kanıtı var; hover/open interact yok.  
Karar: leftover — `interact.md` backlog

---

ADAY: everlane-cart-filled  
Gerekçe: Mod A yalnız boş drawer (`prepareClick #cart-icon-bubble`). ADD TO BAG + dolu sepet interact yok.  
Karar: leftover — interact backlog

---

ADAY: everlane-plp-facet-panel  
Gerekçe: Filter & Sort paneli açık `open/changed` state çekilmedi. PLP kanıt filtre üst bandı.  
Karar: leftover

---

ADAY: everlane-sustainability-everworld  
Gerekçe: Header SUSTAINABILITY / EVERWORLD linkleri ayrı landing'ler; bu walk'ta envanterlenmedi.  
Karar: leftover

---

ADAY: everlane-cloudflare-rate  
Gerekçe: Yoğun script taramasında `/policies/*`, `/pages/about`, `/blogs/news` ara sıra Cloudflare "Just a moment…" döndü. Capture script retry ile geçti veya leftover.  
Karar: not — tek URL walk geçerli (200)
