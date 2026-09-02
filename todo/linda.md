# Todo — LINDA (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://pandora-vintage.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/speedo-boho-jewellery-shopify-theme-os-2-0  
*Preset klasör:* `default` · slug `linda`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store official değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Pandora Vintage V-1.5.0**  
`schema_name` = **pandora_vintage** · `schema_version` = **1.5.0** · `role` = **main** · theme id `168503476417`  
`theme_store_id` = **null**  
`Shopify.shop` = `pandora-vintage.myshopify.com`  
Storefront `/` **302** → `/password`. Vendor product page: *Please enter password "1" to view demo.* Public unlock used; no other host.

**Durum:** Mod A walk + 3vp + interact (devam)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/linda/default/` |
| Capture | `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `scripts/unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **49** |
| Parallel | yalnız `observations/linda/`, `evidence/linda/`, `todo/linda.md`, `candidates/linda-leftovers.md`, unlock host satırı |

**Kapsam satırı:**  
`LINDA · default · Pandora Vintage V-1.5.0 / schema_name pandora_vintage 1.5.0 · theme_store_id null · shop pandora-vintage.myshopify.com · public /password 1 · home→PLP jewellery→PDP beautiful-woman-wearing-ring→cart→search ring→collections→our-story→faq→contact→news+article→404 · 49 obs · 0 yeni şema · leftover: candidates/linda-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [x] capture |
| Shop By mega hover 1440 | interact | [ ] |
| Predictive search `ring` | interact | [ ] |
| Mobile menu 375 + 768 | interact | [x] 375/768 open via prepareClick; 1440 zero-size |
| Cart drawer empty + filled + qty | interact | [x] empty 3vp |
| PDP ring Size 8→9 | interact | [ ] |
| PLP `/collections/jewellery` | [x] obs | [x] capture |
| Collections `/collections` | [x] obs | [x] capture |
| Search `/search?q=ring` | [x] obs | [x] capture |
| Cart page empty + filled + qty | [x] obs | [x] empty |
| Our Story / FAQ / contact / blog | [x] obs | [x] capture |
| 404 | [x] obs | [x] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | LINDA / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | header + Shop By mega | `navigation-header-mega` | reuse · interact |
| 3 | slideshow 2 slayt (metin boş) | `hero-slideshow` | reuse |
| 4 | rich_text Welcome | `editorial-rich-text` | reuse |
| 5 | featured YOU MAY LOVE | `product-showcase-grid-featured` | reuse |
| 6 | image_banner (metin boş) | `editorial-image-with-text-overlay` | reuse |
| 7 | collection-list 3 kart | `collection-nav-slider` | reuse |
| 8 | NEW COLLECTION 2022 IWT | `editorial-image-with-text` | reuse |
| 9 | featured BEST SELLER | `product-showcase-grid-featured.2` | reuse |
| 10 | newsletter | `lead-capture-newsletter-band` | reuse · submit yok |
| 11 | BLOG POSTS | `blog-list-main` | reuse |
| 12 | Hi, I am Linda! IWT | `editorial-image-with-text.2` | reuse |
| 13 | Our Customers | `testimonial-quote-carousel` | reuse |
| 14 | video | `media-video-hero` | reuse |
| 15 | multicolumn 3 USP | `features-multicolumn` | reuse |
| 16 | INSTAGRAM FEED | `media-scrolling-gallery` | reuse |
| 17 | footer | `footer-columns-newsletter` | reuse |
| 18 | CartDrawer | `global-cart-drawer` | reuse · interact |
| 19 | menu-drawer | `global-menu-drawer` | reuse · interact |
| 20 | predictive-search | `global-predictive-search` | reuse · interact |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–20 | home static + overlays | home | [x] | [x] | reuse | [x] |
| 21–22 | banner / PLP | collection | [x] | [x] | reuse | [x] |
| 23 | collection-nav-grid | collections | [x] | [x] | reuse | [x] |
| 24–27 | PDP blocks | product-detail | [x] | [x] | reuse | [x] |
| 28–29 | cart + featured | cart | [x] | [x] | reuse | [x] |
| 30 | search-results | search | [x] | [x] | reuse | [x] |
| 31–37 | our-story | about-brand | [x] | [x] | reuse | [x] |
| 38–41 | FAQ page | faq-support | [x] | [x] | reuse | [x] |
| 42–45 | contact | contact | [x] | [x] | reuse | [x] |
| 46–47 | news list | blog-list | [x] | [x] | reuse | [x] |
| 48 | article | blog-post | [x] | [x] | reuse | [x] |
| 49 | 404 | not-found | [x] | [x] | reuse | [x] |

---

## Interact

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | pending |
| global-predictive-search | input | pending |
| global-menu-drawer | open | pending |
| global-cart-drawer | filled + changed | pending |
| cart-page-main | filled + changed | pending |
| product-info-main | changed | pending |

Stop: email / account / checkout / newsletter submit / PII

---

## Aday / leftover

[`candidates/linda-leftovers.md`](../candidates/linda-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 145 PNG (menu/search 1440 zero-size)
- [ ] Interact Shop By mega / search / cart / menu / PDP Size
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
