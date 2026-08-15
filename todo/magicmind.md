# Todo — Magic Mind (magicmind.com)

*Kaynak:* https://magicmind.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **Copy of [DEV PEACHY] - Tire US Only** · `schema_name`: **Magic Mind Theme** · `schema_version`: **2.0.0** · `theme_store_id`: **null** (custom) · theme id `141790118022` · shop `getmagicmind.myshopify.com` · role `treatment`

**Durum:** Mod A walk — observation roster yazıldı; resmi 3vp + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/magicmind/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/magicmind/`, `evidence/magicmind/`, `todo/magicmind.md`, `candidates/magicmind-*.md` |

**Kapsam satırı (hedef):**  
`MagicMind · default · Copy of [DEV PEACHY] - Tire US Only (Magic Mind Theme 2.0.0 custom, role treatment) · home→PDP→PLP→search→cart drawer→learn→faq→content→footer→mobile · 0 yeni şema`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | JSON | [ ] |
| Shop mega 1440 / cart drawer / mobile menu | JSON hipotez | [ ] |
| PDP Original + FREE buy box | JSON | [ ] |
| PLP `/collections/all` | JSON | [ ] |
| Search `/search?q=shot` | JSON | [ ] |
| `/cart` → `/?cart=open` (sayfa yok) | drawer | [ ] |
| Learn `/pages/learn` | JSON | [ ] |
| FAQ `/pages/faq` | JSON | [ ] |
| Reviews / testimonials | JSON | [ ] |
| Blog list + science article | JSON | [ ] |
| Policy privacy | JSON | [ ] |
| Loyalty / TrueMed | JSON | [ ] |
| Store locator (Aisle iframe) | heading + leftover | [ ] |
| Wholesale Faire / merch / creator Growi / 404 | ⛔ leftover | — |
| Predictive search | ⛔ header’da yok | leftover |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] mega | reuse | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 4 | promo-scrolling-marquee | home | [ ] | [x] | reuse | [ ] |
| 5 | features-multicolumn | home | [ ] | [x] | reuse | [ ] |
| 6–8 | editorial-image-with-text ×3 | home | [ ] | [x] | reuse | [ ] |
| 9 | product-showcase-grid-featured | home | [ ] | [x] | reuse | [ ] |
| 10 | testimonial-quote-carousel | home | [ ] | [x] | reuse | [ ] |
| 11 | features-multicolumn.2 (absorption) | home | [ ] | [x] faq id | reuse | [ ] |
| 12 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 13 | global-cart-drawer | home | [ ] | hipotez | reuse | [ ] |
| 14 | global-menu-drawer | home | [ ] | hipotez | reuse | [ ] |
| 15 | product-showcase-grid-plp | collection | [ ] | [x] | reuse | [ ] |
| 16–26 | PDP kit + FREE buy box | product-detail | [ ] | [x] | reuse | [ ] |
| 27 | search-results | search | [ ] | [x] | reuse | [ ] |
| 28–38 | learn kit | about-brand | [ ] | [x] | reuse | [ ] |
| 39–40 | FAQ title + Ordering | faq-support | [ ] | [x] | reuse | [ ] |
| 41–54 | reviews / testi / blog / policy / loyalty / truemed / store | — | [ ] | [x] | reuse | [ ] |

---

## Aday / şemaya sığmayan

→ `candidates/magicmind-leftovers.md`

---

## Evidence backlog

- [ ] Home static 3vp
- [ ] PDP / PLP / search 3vp
- [ ] Content templates 3vp
- [ ] Drawer / mega / mobile interact (piksel değişince)
