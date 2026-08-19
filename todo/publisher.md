# Todo — Publisher (Shopify first-party, free)

*Kaynak:* https://theme-publisher-demo.myshopify.com  
*Preset:* `default` · Theme Store: https://themes.shopify.com/themes/publisher  
*Gözlenen tema:* `[Publisher] Theme Store demo (latest)` · `schema_name` Dawn 7.0.1 · `theme.id` 173430341941 · `role` main  
*`Shopify.theme.theme_store_id`:* `null` (canlı JS). Theme Store: **Publisher · by Shopify · Free**. Sayısal 1380 demo/Theme Store HTML’de okunmadı.

**Şu anki odak:** ✅ CRO interact kapandı — 2 CRO obs · 9 yeni PNG · validate 0

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/publisher/default/` |
| Walkthrough / not | Official Publisher demo · blog + commerce |
| Kapsam satırı | Publisher · default · 11 sayfa · 33 obs · 123 PNG · 0 yeni şema · leftovers 404/announcement |

---

## Faz durumu

- [x] F0 Tema kimliği + sitemap + section haritası
- [x] F1 Observation JSON (33) — şema yok, mevcut tipler
- [x] F2 3vp `capture-observation.mjs` (33/33 script OK; predictive 375/768 zero-size)
- [x] F3 Interact: predictive search 1440 · cart empty/filled/qty · PDP Size MD→LG · mega/menu yok
- [x] F3b CRO interact: `faq-collapsible-tabs` initial+changed · `lead-capture-form` initial (input PII stop)
- [x] F4 `npm run validate` — 65 şema · 0 error · 0 warn

---

## Sayfa haritası

| sayfa | URL |
|---|---|
| home | `/` |
| collection | `/collections/books` |
| product-detail | `/products/shop-short-sleeve` |
| search | `/search?q=book` |
| cart | `/cart` |
| cart-drawer | overlay (`cart-drawer`) |
| about-brand | `/pages/about` |
| contact | `/pages/contact` |
| policy | `/pages/shipping-and-returns` |
| blog-list | `/blogs/news` |
| blog-post | `/blogs/news/fresh-launch-new-merch-collection` |
| 404 leftover | `/pages/this-does-not-exist-xyz` → HTTP 404 |

Koleksiyonlar: books · apparel · merch · accessories · all  
Sayfalar: about · contact · shipping-and-returns

---

## Home remap (kanıt)

- rich-text intro → `editorial-rich-text`
- collage Books / Apparel → `editorial-custom-content` (+ `-2`)
- 🌀 NEWEST ARRIVALS → `editorial-rich-text-2` (marquee değil)
- featured_collection slider 5 kolon + 1/5 ok → `product-showcase-grid-featured`
- featured-product Gift Card → `product-showcase-featured`
- FREE SHIPPING bant → `editorial-rich-text-3`
- image-banner iki yarım görsel + studio CTA → `editorial-image-with-text-overlay`
- header logo+search+cart, mega/hamburger yok → `navigation-header-mega` + delta
- footer = birincil nav + newsletter → `footer-columns-newsletter`

Tekrarlayan shipping bant + studio banner home’da bir kez.

---

## Interact (pixel-check)

- [x] `global-predictive-search` — 1440: book → PRODUCTS (Celestino, Braulio, Shoplifters, Mary Obering). 375/768 search ikonu yok
- [x] `global-cart-drawer` — boş / Shop Short Sleeve MD $34 / qty 2 → $68 (UI addToCart, drawer açıldı)
- [x] `cart-page-main` — boş + dolu $34 + qty 2 $68, çanta rozeti 1→2
- [x] `product-info-main` — Size MD → LG (label tık; fiyat/görsel aynı)
- [x] mega — **yok**
- [x] mobile menu — **yok** (nav footer)

Stop: email / account / checkout / newsletter submit / contact Send / PII

### CRO interact (2026-08-19)

| schemaId | states | 3vp |
|---|---|---|
| `faq-collapsible-tabs` | initial · changed (Returns açık) | ✓ |
| `lead-capture-form` | initial (input → missingStates PII) | ✓ |

CRO disk listesinden **gözlenmeyen** (leftover): before-after-slider · commerce-tools-products-bundle · promo-banner-countdown · lead-capture-newsletter-band · comparison-quick-table · product-finder-quiz · testimonial-quote-carousel · media-shop-the-feed · media-scrolling-gallery

---

## Aday / şemaya sığmayan

- [`candidates/publisher-leftovers.md`](../candidates/publisher-leftovers.md) — 404, boş announcement-bar, theme_store_id null

---

## Evidence backlog

- [x] 33 observation 3vp (predictive 375/768 kare yok — ikon gizli)
- [x] Interact PNG: search 1440 · cart drawer 3 state · cart page 3 state · PDP size
- [x] CRO interact PNG: faq initial+changed 6 · lead-capture-form initial 3
