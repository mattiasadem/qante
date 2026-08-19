# Todo — Crave (Shopify free)

*Kaynak:* https://theme-crave-demo.myshopify.com  
*Preset:* `default`  
*Tema (görülen):* **[Crave] Theme store demo (latest)** · `schema_name`: Dawn · `schema_version`: 2.5.0 · `theme_store_id`: **null** (beklenen 1382 canlıda yok) · theme id `139772461290` · role `main`  
*Shop:* `theme-crave-demo.myshopify.com` · Shopify first-party (Dawn 2.5 iskeleti)

**Durum:** ✅ Mod A walk + resmi 3vp + interact + CRO leftover  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/crave/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/crave/` · `evidence/crave/` · `todo/crave.md` · `candidates/crave-*` |
| Validator | `npm run validate` → 65 temiz · 0 error · 0 warn |

**Kapsam satırı:**  
`Crave · default · [Crave] Theme store demo (latest) · Dawn 2.5.0 · theme_store_id null · 11 şablon · 39 obs · 152 PNG · 0 yeni şema · CRO interact: testimonial + newsletter + contact form · leftover: 404 / news / cart-notification / 7 CRO şema yok`

---

## CRO interact (bu tur)

| schemaId | States | Kanıt |
|---|---|---|
| `testimonial-quote-carousel` | initial (changed missing: statik multicolumn) | 3 PNG (ilk-hal × 3vp) |
| `lead-capture-newsletter-band` | initial (input missing: PII) | 3 PNG (ilk-hal × 3vp) |
| `lead-capture-form` | initial (input missing: PII) | 3 PNG (bos-form × 3vp) |

**CRO disk şemaları observation'da yok (çekilmedi):** before-after-slider, commerce-tools-products-bundle, promo-banner-countdown, faq-collapsible-tabs, comparison-quick-table, product-finder-quiz, media-shop-the-feed, media-scrolling-gallery.

**Yakın ama farklı schemaId:** announcement bar → `promo-announcement-bar` (timer/marquee yok); footer e-posta → `footer-columns-newsletter` (submit yok); sticky header → `navigation-header-mega` (interact walk'ta).

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ✅ | ✅ |
| Shop dropdown 1440 | ✅ interact | ✅ (375/768 N/A) |
| Predictive search `larb` | ✅ interact | ✅ |
| Mobile menu 375+768 | ✅ interact | ✅ (1440 N/A) |
| PDP Sisig starter (IWT + banner + recipes) | ✅ | ✅ |
| PDP Crewneck Size XS→M (sold out) | ✅ interact | ✅ |
| PLP `/collections/all` | ✅ | ✅ |
| PLP `/collections/meal-starters` + Hungry for more | ✅ | ✅ |
| Search `/search?q=larb` | ✅ | ✅ |
| Cart empty + filled (Larb) + qty 1→2 | ✅ interact | ✅ |
| Meet us `/pages/meet-us` | ✅ | ✅ |
| Contact form (submit yok) | ✅ | ✅ |
| Recipes `/blogs/recipes` | ✅ | ✅ |
| Article bulgogi pork belly | ✅ | ✅ |
| 404 / news / policies / ingredients clone | ⛔ leftover | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | [x] | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | [x] | [x] |
| 3 | hero-slideshow | home | [x] | [x] | [x] | [x] |
| 4 | product-showcase-grid-featured | home | [x] | [x] | [x] | [x] |
| 5 | collection-nav-image-cards | home | [x] | [x] | [x] | [x] |
| 6 | editorial-image-with-text | home | [x] | [x] | [x] | [x] |
| 7 | lead-capture-newsletter-band | home | [x] | [x] | [x] | [x] |
| 8 | editorial-image-with-text-2 | home | [x] | [x] | [x] | [x] |
| 9 | testimonial-quote-carousel | home | [x] | [x] | [x] | [x] |
| 10 | footer-columns-newsletter | home | [x] | [x] | [x] | [x] |
| 11 | global-predictive-search | home | [x] | [x] | [x] | [x] |
| 12 | global-menu-drawer | home | [x] 375+768 | [x] | [x] | [x] |
| 13–16 | banner / grid / newsletter / recipes | collection | [x] | [x] | [x] | [x] |
| 17–21 | banner / grid / newsletter / recipes / hungry | collection-meal-starters | [x] | [x] | [x] | [x] |
| 22–26 | product-info + IWT + overlay + recipes + news | product-detail | [x] | [x] | [x] | [x] |
| 27 | product-info-main (Size) | product-detail-crewneck | [x] | [x] | [x] | [x] |
| 28 | search-results | search | [x] | [x] | [x] | [x] |
| 29–30 | cart-page-main + favorites | cart | [x] | [x] | [x] | [x] |
| 31–33 | overlay / IWT / overlay-2 | about-brand | [x] | [x] | [x] | [x] |
| 34–35 | page-content + form | contact | [x] | [x] | [x] | [x] |
| 36–37 | blog-list + newsletter | blog-list | [x] | [x] | [x] | [x] |
| 38–39 | blog-post + related | blog-post | [x] | [x] | [x] | [x] |

---

## Aday / şemaya sığmayan

→ [`candidates/crave-leftovers.md`](../candidates/crave-leftovers.md)

---

## Evidence backlog

- [x] Home static 3vp
- [x] Home interact (Shop / search / menu)
- [x] PDP / PLP / search 3vp
- [x] Cart empty + filled + qty
- [x] Crewneck Size changed
- [x] Content templates 3vp
- [x] CRO interact: testimonial-quote-carousel · lead-capture-newsletter-band · lead-capture-form
