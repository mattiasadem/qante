# Todo — PAW (Speedo Themes) · Petz / default

*Kaynak (yalnız resmi walk):* https://petz-online-store.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/speedo-petz-shopify-theme-os-2-0  
*Preset:* `default` · *Slug:* `paw`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store resmi değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **petz-online-store-v-1-5-0**  
`schema_name` = **petz_online_store** · `schema_version` = **1.5.0** · `role` = **main** · theme id `176281059615`  
`theme_store_id` = **null** (canlıda yok; Theme Store id uydurulmadı)  
shop `petz-online-store.myshopify.com` · locale `en` · country `US` · currency `USD`  
Storefront title: `PAW - Best Shopify Pet Store – petz online store (password: 1)`  
Vendor password `1` yayınlı. Walk’ta 375 capture `/password` duvarına düştü — aynı host’ta `1` ile açıldı. Başka host uydurulmadı.

**Durum:** Mod A walk + resmi 3vp + interact + validate **bitti** (0 error)  
**PR:** draft https://github.com/mattiasadem/qante/pull/344 · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/paw/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **42** |
| PNG | **152** |
| Parallel | yalnız `observations/paw/`, `evidence/paw/`, `todo/paw.md`, `candidates/paw-leftovers.md` + capture password unlock |

**Kapsam satırı:**  
`PAW · default · petz-online-store-v-1-5-0 / schema_name petz_online_store 1.5.0 · theme_store_id null · shop petz-online-store.myshopify.com · Speedo Themes · home→PDP Cat Costumes Pink→White→PLP /collections/all→/collections→search dog→cart empty/filled/qty2 $30→about-us→contact→faq→news+training post→404 · 42 obs · 152 PNG · 0 yeni şema · leftover: candidates/paw-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] | [x] |
| SHOP ALL hover 1440 | [x] | [x] (tık PLP’ye kaçar) |
| Predictive search `chicken` | [x] | [x] 375/768/1440 |
| Mobile menu 375 + 768 + SHOP ALL nested | [x] | [x] (1440 hamburger yok) |
| Cart drawer empty + filled | [x] | [x] Chicken Pulao $15 |
| PDP Cat Costumes Color Pink→White | [x] | [x] galeri pembe→beyaz |
| PLP `/collections/all` | [x] | [x] |
| Collections `/collections` | [x] | [x] |
| Search `/search?q=dog` | [x] | [x] |
| Cart page empty + filled + qty | [x] | [x] qty 1→2 · $15→$30 |
| About `/pages/about-us` | [x] | [x] |
| Contact `/pages/contact` (submit yok) | [x] | [x] |
| FAQ `/pages/faq` | [x] | [x] |
| News + training post | [x] | [x] |
| 404 | [x] | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | PAW / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · mega yok, SHOP ALL hover |
| 3 | slideshow | `hero-slideshow` | reuse · Organic Pet Food + ok/dot |
| 4 | rich-text Welcome | `editorial-rich-text` | reuse |
| 5 | featured YOU MAY LOVE | `product-showcase-grid-featured` | reuse |
| 6 | image_banner | `editorial-image-with-text-overlay` | reuse · metin boş |
| 7 | collection-list | `collection-nav-image-cards` | reuse |
| 8 | parallax NEW COLLECTION 2022 | `editorial-image-with-text-overlay.2` | reuse |
| 9 | featured BEST SELLER | `product-showcase-grid-featured.2` | reuse |
| 10 | newsletter | `lead-capture-newsletter-band` | reuse · submit yok |
| 11 | blog posts | `blog-list-main` | reuse |
| 12 | image-with-text Maria | `editorial-image-with-text` | reuse |
| 13 | testimonial | `testimonial-quote-carousel` | reuse |
| 14 | video | `media-video-hero` | reuse |
| 15 | multicolumn | `features-multicolumn` | reuse |
| 16 | INSTAGRAM FEED | `media-shop-the-feed` | reuse |
| 17 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 18 | predictive-search | `global-predictive-search` | reuse · interact chicken |
| 19 | #menu-drawer | `global-menu-drawer` | reuse · 375/768 |
| 20 | cart-drawer | `global-cart-drawer` | reuse · drawer VAR |

---

## Aday / şemaya sığmayan

→ `candidates/paw-leftovers.md`

---

## Evidence backlog

- [x] Home + chrome 3vp
- [x] PDP / PLP / collections / search / cart 3vp
- [x] about + contact + faq + blog + 404 3vp
- [x] Interact header / search / menu / drawer / PDP / cart
- [x] `node scripts/validate-schemas.mjs` 0 error · 13 warn (önceki borç, PAW şema yok)
