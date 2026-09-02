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
Vendor password `1` yayınlı; walk sırasında `/password` formu **yoktu** (mağaza açıktı). Başka host uydurulmadı.

**Durum:** Mod A walk + resmi 3vp + interact + validate  
**PR:** draft (bu branch) · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/paw/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/paw/`, `evidence/paw/`, `todo/paw.md`, `candidates/paw-leftovers.md` |

**Kapsam satırı:**  
`PAW · default · petz-online-store-v-1-5-0 / schema_name petz_online_store 1.5.0 · theme_store_id null · shop petz-online-store.myshopify.com · Speedo Themes · home→PDP Cat Costumes Pink→White→PLP /collections/all→/collections→search dog→cart empty/filled/qty→about-us→contact→faq→news+training post→404 · leftover: candidates/paw-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster | [ ] capture |
| SHOP ALL dropdown 1440 | interact | [ ] |
| Predictive search `chicken` | interact 3vp | [ ] |
| Mobile menu 375 + 768 | interact | [ ] |
| Cart drawer empty + filled | interact 3vp | [ ] |
| PDP Cat Costumes Color Pink→White | interact 3vp | [ ] |
| PLP `/collections/all` | roster | [ ] capture |
| Collections `/collections` | roster | [ ] capture |
| Search `/search?q=dog` | roster | [ ] capture |
| Cart page empty + filled + qty | interact 3vp | [ ] |
| About `/pages/about-us` (`/pages/about` 404) | roster | [ ] capture |
| Contact `/pages/contact` (submit yok) | roster | [ ] capture |
| FAQ `/pages/faq` (`/pages/faqs` 404) | roster | [ ] capture |
| News + training post | roster | [ ] capture |
| 404 | roster | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | PAW / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · mega yok, SHOP ALL dropdown |
| 3 | slideshow `__166452734096e2ae53` | `hero-slideshow` | reuse · görsel-only |
| 4 | rich-text Welcome | `editorial-rich-text` | reuse |
| 5 | featured_collection YOU MAY LOVE | `product-showcase-grid-featured` | reuse |
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
| 18 | predictive-search | `global-predictive-search` | reuse · interact |
| 19 | #menu-drawer | `global-menu-drawer` | reuse · interact 375/768 |
| 20 | cart-drawer | `global-cart-drawer` | reuse · drawer VAR |

---

## Aday / şemaya sığmayan

→ `candidates/paw-leftovers.md`

---

## Evidence backlog

- [ ] Home + chrome 3vp
- [ ] PDP / PLP / collections / search / cart 3vp
- [ ] about + contact + faq + blog + 404 3vp
- [ ] Interact header / search / menu / drawer / PDP / cart
- [ ] `node scripts/validate-schemas.mjs` 0 error
