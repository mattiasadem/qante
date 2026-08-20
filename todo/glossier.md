# Todo — Glossier (glossier.com)

*Kaynak:* https://www.glossier.com/ · *Preset:* `default`  
*Tema (storefront):* **3/19 Release 3.49.0** · `schema_name`: Glossier · `schema_version`: 3.49.0 · shop `glossier-admin.myshopify.com`

**Durum:** Mod A walk — resmi 3vp capture koşuyor  
**PR:** draft — cursor/glossier-discover-94ec

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/glossier/default/` |
| Capture | resmi `capture-observation.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/glossier/` · `evidence/glossier/` · `todo/glossier.md` · `candidates/glossier-leftovers.md` |

**Kapsam satırı (bitince):**  
`Glossier · default · 3/19 Release 3.49.0 (Glossier 3.49.0) · home→PDP→PLP→search→cart drawer→about→footer · N obs · N PNG · 0 yeni şema · leftover: external blog / cart shell / reviews app / bot-wall`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + promo/header/footer | [x] obs | [ ] capture |
| Hero + featured sets + two-column + visual links | [x] obs | [ ] |
| Campaign video + UGC | [x] obs | [ ] |
| Search modal | [x] obs | [ ] |
| Cart drawer (bag) | [x] obs | [ ] |
| Mobile menu 375/768 | [x] obs | [ ] |
| PDP `/products/boy-brow` | [x] obs | [ ] |
| PLP `/collections/makeup` | [x] obs | [ ] |
| Search `/search?q=brow` | [x] obs | [ ] |
| About `/pages/about` | [x] obs | [ ] |
| Blog `/blogs/gloss` | ⛔ leftover 404 | — |
| Cart `/cart` page | ⛔ leftover shell h=0 | — |
| PDP reviews app | ⛔ leftover widget | — |
| Checkout / account / newsletter submit | ⛔ PII | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 4 | product-showcase-grid-featured | home | [ ] | [x] | reuse | [ ] |
| 5 | editorial-image-with-text | home | [ ] | [x] | reuse | [ ] |
| 6 | collection-nav-image-cards | home | [ ] | [x] | reuse | [ ] |
| 7 | testimonial-quote-carousel | home | [ ] | [x] | reuse | [ ] |
| 8 | media-shop-the-feed | home | [ ] | [x] | reuse | [ ] |
| 9 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 10 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 11 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 12 | global-menu-drawer | home | [ ] | [x] | reuse | [ ] |
| 13 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 14 | testimonial-quote-carousel | product-detail | [ ] | [x] | reuse | [ ] |
| 15 | faq-collapsible-tabs | product-detail | [ ] | [x] | reuse | [ ] |
| 16 | editorial-image-with-text | product-detail | [ ] | [x] | reuse | [ ] |
| 17 | product-showcase-related | product-detail | [ ] | [x] | reuse | [ ] |
| 18 | media-shop-the-feed | product-detail | [ ] | [x] | reuse | [ ] |
| 19 | product-showcase-grid-plp | collection | [ ] | [x] | reuse | [ ] |
| 20 | search-results | search | [ ] | [x] | reuse | [ ] |
| 21 | editorial-rich-text | about-brand | [ ] | [x] | reuse | [ ] |
| 22 | editorial-image-with-text | about-brand | [ ] | [x] | reuse | [ ] |
| 23 | media-lookbook-banner | about-brand | [ ] | [x] | reuse | [ ] |

---

## Aday / leftover

[`candidates/glossier-leftovers.md`](../candidates/glossier-leftovers.md)

---

## Evidence backlog

- [ ] Resmi 3vp — `node scripts/run-glossier-captures.mjs`
- [ ] `npm run validate` temiz
- [ ] Draft PR
