# Todo — Highlight (Shopify paid)

*Kaynak (resmi walk ONLY):* https://highlight-theme.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/highlight  
*Preset klasör:* `default`  
*Slug:* `highlight`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **highlight-build/highlight**  
`schema_name` = **Highlight** · `schema_version` = **4.0.2** · `role` = **main** · theme id `126683480225`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
`Shopify.shop` = `highlight-theme.myshopify.com`  
*Canonical host (redirect):* `highlight-theme-main.myshopify.com` — aynı vitrin, başka preset değil.

**Durum:** Mod A walk + resmi 3vp + interact + validate **devam**  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/highlight/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **31** |
| PNG | (capture sonrası) |
| Parallel | yalnız `observations/highlight/`, `evidence/highlight/`, `todo/highlight.md`, `candidates/highlight-leftovers.md` |

**Kapsam satırı:**  
`Highlight · default · highlight-build/highlight · schema_name Highlight 4.0.2 · theme_store_id null · home→PDP Writable sweatshirt→PLP apparel→collections→search reflective→cart→about unusual-usual-things/contact-us→news+Valise→404 · 31 obs · 0 yeni şema · leftover: candidates/highlight-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (header→footer) | roster + obs | [ ] capture |
| Mega / nav hover | yok — leftover | [x] dürüst |
| Predictive search `reflective` | interact 3vp | [ ] |
| Mobile menu 375 | interact | [ ] |
| Mobile menu 768 | interact | [ ] |
| Menu 1440 (hamburger var) | interact | [ ] |
| Cart drawer empty + filled + qty | interact 3vp | [ ] $79→$158 |
| PDP Writable sweatshirt Color Black→White | interact 3vp | [ ] |
| PLP `/collections/apparel` | roster + obs | [ ] |
| Collections index `/collections` | roster + obs | [ ] |
| Search `/search?q=reflective` | roster + obs | [ ] |
| Cart page empty + filled + qty | interact 3vp | [ ] |
| About `/pages/unusual-usual-things` | roster + obs | [ ] |
| Contact `/pages/contact-us` (submit yok) | roster + obs | [ ] |
| News + Valise post | roster + obs | [ ] |
| 404 leftover | roster + obs | [ ] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM `shopify-section` + chrome)

| # | Highlight / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | header | `navigation-header-mega` | reuse · mega yok · delta |
| 2 | 163186463508de9885 vertical-slider | `hero-slideshow` | reuse · delta |
| 3 | 163186464490ff9176 Most Popular | `product-showcase-grid-featured` | reuse |
| 4 | 16318659684ff7363b About Us | `editorial-image-with-text` | reuse |
| 5 | 163186597224c648dc Explore collections | `collection-nav-image-cards` | reuse |
| 6 | 1631875799480e8971 CTA | `editorial-rich-text` | reuse |
| 7 | 1632382181fad54150 Last items | `product-showcase-grid-featured.2` | reuse · slider |
| 8 | 1632118671909058df Collection list | `collection-nav-grid` | reuse |
| 9 | 1632123403ad7b996a LAST KNOT | `media-video-hero` | reuse |
| 10 | 163211862947160d8f Reflective t-shirt | `product-showcase-featured` | reuse |
| 11 | 1628782268aab83134 Latest Articles | `blog-list-main` | reuse |
| 12 | 735b402c scrolling-text | `promo-scrolling-marquee` | reuse |
| 13 | 77e1aa86 before-after | `before-after-slider` | reuse |
| 14 | text-columns-with-icons | `trust-icon-row` | reuse |
| 15 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 16 | popups | — | leftover 0px / PII |
| 17 | #site-menu-sidebar | `global-menu-drawer` | reuse · 375/768/1440 |
| 18 | #site-search-sidebar | `global-predictive-search` | reuse |
| 19 | #site-cart-sidebar | `global-cart-drawer` | reuse |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | hover mega | yok — leftover |
| global-predictive-search | input | [ ] `reflective` — yoklamada sonuç kutusu boş |
| global-menu-drawer | open | [ ] All/Reflective/Writable… 375+768+1440 |
| global-cart-drawer | filled + changed | [ ] $79 → qty2 (plus yok, input.qty) |
| cart-page-main | filled + changed | [ ] aynı |
| product-info-main | changed | [ ] Color Black→White |

---

## Aday / leftover

[`candidates/highlight-leftovers.md`](../candidates/highlight-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact menu / search / cart / PDP Color
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
- [x] Email / account / checkout / newsletter submit — **yapılmayacak**
