# Todo — Crave (Shopify free)

*Kaynak:* https://theme-crave-demo.myshopify.com  
*Preset:* `default`  
*Tema (görülen):* **[Crave] Theme store demo (latest)** · `schema_name`: Dawn · `schema_version`: 2.5.0 · `theme_store_id`: **null** (beklenen 1382 canlıda yok) · theme id `139772461290` · role `main`  
*Shop:* `theme-crave-demo.myshopify.com` · Shopify first-party (Dawn 2.5 iskeleti)

**Durum:** Mod A walk — observations yazıldı; resmi 3vp + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/crave/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/crave/` · `evidence/crave/` · `todo/crave.md` · `candidates/crave-*` |

**Kapsam satırı:**  
`Crave · default · [Crave] Theme store demo (latest) · Dawn 2.5.0 · theme_store_id null · home/PDP/PLP/search/cart/meet-us/contact/recipes/article · 0 yeni şema · leftover: 404 / news boş / page-template kopyası / cart-notification`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | [x] JSON | [ ] |
| Shop dropdown 1440 | [x] interact steps | [ ] |
| Predictive search | [x] interact steps | [ ] |
| Mobile menu 375+768 | [x] interact steps | [ ] (1440 N/A) |
| PDP Sisig starter (IWT + banner + recipes) | [x] JSON | [ ] |
| PDP Crewneck Size change (sold out) | [x] interact steps | [ ] |
| PLP `/collections/all` | [x] JSON | [ ] |
| PLP `/collections/meal-starters` + Hungry for more | [x] JSON | [ ] |
| Search `/search?q=larb` | [x] JSON | [ ] |
| Cart empty + filled + qty | [x] interact steps | [ ] |
| Meet us `/pages/meet-us` | [x] JSON | [ ] |
| Contact form (submit yok) | [x] JSON | [ ] |
| Recipes `/blogs/recipes` | [x] JSON | [ ] |
| Article bulgogi pork belly | [x] JSON | [ ] |
| 404 / news / policies / ingredients clone | ⛔ leftover | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | [x] | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | [x] | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] | [x] | [ ] |
| 4 | product-showcase-grid-featured | home | [ ] | [x] | [x] | [ ] |
| 5 | collection-nav-image-cards | home | [ ] | [x] | [x] | [ ] |
| 6 | editorial-image-with-text | home | [ ] | [x] | [x] | [ ] |
| 7 | lead-capture-newsletter-band | home | [ ] | [x] | [x] | [ ] |
| 8 | editorial-image-with-text-2 | home | [ ] | [x] | [x] | [ ] |
| 9 | testimonial-quote-carousel | home | [ ] | [x] | [x] | [ ] |
| 10 | footer-columns-newsletter | home | [ ] | [x] | [x] | [ ] |
| 11 | global-predictive-search | home | [ ] | [x] | [x] | [ ] |
| 12 | global-menu-drawer | home | [ ] | [x] | [x] | [ ] |
| 13–16 | banner / grid / newsletter / recipes | collection | [ ] | [x] | [x] | [ ] |
| 17–21 | banner / grid / newsletter / recipes / hungry | collection-meal-starters | [ ] | [x] | [x] | [ ] |
| 22–26 | product-info + IWT + overlay + recipes + news | product-detail | [ ] | [x] | [x] | [ ] |
| 27 | product-info-main (Size) | product-detail-crewneck | [ ] | [x] | [x] | [ ] |
| 28 | search-results | search | [ ] | [x] | [x] | [ ] |
| 29–30 | cart-page-main + favorites | cart | [ ] | [x] | [x] | [ ] |
| 31–33 | overlay / IWT / overlay-2 | about-brand | [ ] | [x] | [x] | [ ] |
| 34–35 | page-content + form | contact | [ ] | [x] | [x] | [ ] |
| 36–37 | blog-list + newsletter | blog-list | [ ] | [x] | [x] | [ ] |
| 38–39 | blog-post + related | blog-post | [ ] | [x] | [x] | [ ] |

---

## Aday / şemaya sığmayan

→ [`candidates/crave-leftovers.md`](../candidates/crave-leftovers.md)

---

## Evidence backlog

- [ ] Home static 3vp
- [ ] Home interact (Shop / search / menu)
- [ ] PDP / PLP / search 3vp
- [ ] Cart empty + filled + qty
- [ ] Crewneck Size changed
- [ ] Content templates 3vp
