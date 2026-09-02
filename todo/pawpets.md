# Todo — PawPets (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://petz-online-store-2.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/pawpets-shop-best-shopify-pet-themes-store-os-2-0  
*Preset klasör:* `default` · slug `pawpets`  
*Vendor:* Speedo Themes (üçüncü taraf Shopify 2.0 — Theme Store resmi değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Mightypetz V-1.5.0**  
`schema_name` = **Mightypetz** · `schema_version` = **1.5.0** · `role` = **main** · theme id `171030774048`  
`theme_store_id` = **null**  
`handle` = `"null"` · `style.id` / `style.handle` = **null**  
Walk host + `Shopify.shop` = `petz-online-store-2.myshopify.com` · locale `en` · country `US` · currency `USD`  
Storefront password (vendor product page): **`1`** — bu hostta girildi.

**Durum:** Mod A walk + resmi 3vp + interact (retry kapandı) + validate  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/pawpets/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `storefront-password.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **39** |
| Parallel | yalnız `observations/pawpets/`, `evidence/pawpets/`, `todo/pawpets.md`, `candidates/pawpets-leftovers.md`, capture password helper |

**Kapsam satırı:**  
`PawPets · default · Mightypetz V-1.5.0 / schema_name Mightypetz 1.5.0 · theme_store_id null · shop petz-online-store-2.myshopify.com · home→PDP Max Omega-3 10kg→20kg→PLP /collections/all→/collections→search dog→cart empty/filled→about-us→contact→faqs→news+rescues post→404 · 39 obs · 0 yeni şema · leftover: candidates/pawpets-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [x] capture |
| Shop details 1440 | [x] interact | RABBIT/FISH/CHEMELON |
| Predictive search `omega` | [x] interact | öneri + 3 ürün |
| Mobile menu 375 + 768 | [x] interact | HOME/SHOP→/DOGS… |
| Cart drawer empty + filled + qty | [x] interact | boş + $44.95→$89.90 |
| PDP Max Omega-3 Size 10kg→20kg | [x] interact | 200→400 stok, $44.95 |
| PLP `/collections/all` | [x] obs | [x] capture |
| Collections `/collections` | [x] obs | [x] capture |
| Search `/search?q=dog` | [x] obs | [x] capture |
| Cart page empty + filled | [x] interact | empty + Max Omega-3 |
| About `/pages/about-us` | [x] obs | [x] capture |
| Contact form (submit yok) | [x] obs | [x] capture |
| FAQ `/pages/faqs` | [x] interact | 1. açık; 2. de açık |
| News + Local Rescues post | [x] obs | [x] capture |
| 404 `/pages/about` | [x] obs | [x] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Mightypetz / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | `__af43fd42…` utility-bar | `promo-announcement-bar` | reuse |
| 2 | `__header` | `navigation-header-mega` | reuse · interact |
| 3 | `__3b7cb796…` slideshow-component | `hero-slideshow` | reuse · 2 slayt |
| 4 | `__featured_collection` | `product-showcase-grid-featured` | reuse |
| 5 | `__97815a00…` custom-icons slider | `collection-nav-slider` | reuse |
| 6 | `__22a6bbf8…` Did You Know? | `editorial-image-with-text` | reuse |
| 7 | `__74b4724b…` Our New Arrivals | `product-showcase-grid-featured.2` | reuse |
| 8 | `__2958c082…` Pet Parents Love | `testimonial-quote-carousel` | reuse |
| 9 | `__5309185c…` Hand Picked | `product-showcase-grid-featured.3` | reuse |
| 10 | `__59b12e57…` SECURE PAYMENT | `trust-icon-row` | reuse |
| 11 | `__1f806fa0…` LATEST NEWS | `blog-list-main` | reuse · home instance |
| 12 | `__92529a0f…` Subscribe | `lead-capture-newsletter-band` | reuse · submit yok |
| 13 | `__footer` | `footer-columns-newsletter` | reuse |
| 14 | `newsletter-popup` | — | leftover 0px / PII |
| 15 | `#CartDrawer` | `global-cart-drawer` | reuse · interact |
| 16 | `predictive-search` | `global-predictive-search` | reuse · interact |
| 17 | `#menu-drawer` | `global-menu-drawer` | reuse · 375/768 |

---

## Aday / şemaya sığmayan

- [`candidates/pawpets-leftovers.md`](../candidates/pawpets-leftovers.md)

---

## Evidence backlog

- [x] resmi 3vp batch (~158 PNG)
- [x] interact yazıldı: mega, featured hover (token), cart filled/qty, cart page, PDP size, FAQ, tabs
- [x] retry 1: search omega / menu 375+768 / hero slayt-2 / boş cart drawer — pikseller değişti
