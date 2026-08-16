# Todo — True Classic Tees (trueclassictees.com)

*Kaynak:* https://trueclassictees.com → https://www.trueclassictees.com/  
*Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* `Shopify.theme.name` **true-classic/main** · `id` `122041106504` · `schema_name` **True Classic Custom Theme** · `schema_version` **2.5.1** · `theme_store_id` **null** · `role` `main` · shop `trueclassictees-com.myshopify.com`

**Durum:** Mod A walk yazılıyor — resmi 3vp + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/trueclassictees/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/trueclassictees/`, `evidence/trueclassictees/`, `todo/trueclassictees.md`, `candidates/trueclassictees-*.md` |

**Kapsam satırı:**  
`True Classic · default · True Classic Custom Theme 2.5.1 (theme_store_id null) · home→PDP→PLP→search→cart-drawer→about→help→policy→blog→404 leftover · 25 obs · 0 yeni şema · leftover: candidates/trueclassictees-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/hero/tee-finder/pillar/footer | [x] obs | [ ] capture |
| Mega hover 1440 | [x] yoklandı — panel yok | leftover |
| Predictive search overlay | [x] obs | [ ] interact |
| Cart drawer empty/filled/qty | [x] obs | [ ] interact |
| Mobile hamburger 375+768 | [x] obs | [ ] interact |
| PDP `/products/white-crew-neck-tee` + size M | [x] obs | [ ] interact |
| PLP `/collections/best-sellers` | [x] obs | [ ] capture |
| Search `/search?q=tee` | [x] obs | [ ] capture |
| Cart `/cart` sayfa | ⛔ `/?cart-open=1` | leftover |
| About `/pages/about-us` (= our-story) | [x] 3 temsilci | [ ] capture |
| Help `/pages/help-center` | [x] 3 temsilci | [ ] capture |
| Privacy `/pages/privacy-policy` | [x] obs | [ ] capture |
| Blog list + fit-guide post | [x] obs | [ ] capture |
| 404 custom | ⛔ 404 ama home gövde | leftover |
| Contact / terms | ⛔ 429 | leftover |
| Newsletter / account / checkout | ⛔ PII | — |

---

## Bileşen roster (25)

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | Flash Deals | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | hover mega yok | reuse | [ ] |
| 3 | media-video-hero | home | [ ] | Videowise | reuse | [ ] |
| 4 | product-showcase-tabs | home | [ ] | menu_with_pdp | reuse | [ ] |
| 5 | features-multicolumn | home | [ ] | Why TC | reuse | [ ] |
| 6 | footer-columns-newsletter | home | [ ] | PII yok | reuse | [ ] |
| 7 | global-cart-drawer | home | [ ] | boş/dolu | reuse | [ ] |
| 8 | global-predictive-search | home | [ ] | crew | reuse | [ ] |
| 9 | global-menu-drawer | home | [ ] | 375/768 | reuse | [ ] |
| 10 | product-info-main | product-detail | [ ] | + M | reuse | [ ] |
| 11 | collection-nav-image-cards | product-detail | [ ] | aile | reuse | [ ] |
| 12 | comparison-quick-table | product-detail | [ ] | Compare Styles | reuse | [ ] |
| 13 | product-showcase-related | product-detail | [ ] | Rebuy | reuse | [ ] |
| 14 | features-multicolumn | product-detail | [ ] | pillar | reuse | [ ] |
| 15 | product-showcase-grid-plp | collection | [ ] | bestsellers | reuse | [ ] |
| 16 | search-results | search | [ ] | tee | reuse | [ ] |
| 17–19 | about editorial ×3 | about-brand | [ ] | | reuse | [ ] |
| 20–22 | FAQ header/anchors/accordion | faq-support | [ ] | | reuse | [ ] |
| 23 | page-content-main | policy | [ ] | privacy | reuse | [ ] |
| 24 | blog-list-main | blog-list | [ ] | | reuse | [ ] |
| 25 | blog-post-main | blog-post | [ ] | | reuse | [ ] |

---

## Interact (yazıldı — PNG bakılacak)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open? | 1440 Men hover panel yok |
| global-predictive-search | initial, input | crew |
| global-cart-drawer | initial, filled, changed | M + ATC |
| global-menu-drawer | open, changed | 375/768 Short Sleeves |
| product-info-main | initial, changed | beden M |

---

## Aday / leftover

[`candidates/trueclassictees-leftovers.md`](../candidates/trueclassictees-leftovers.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Interact yoklandı — PNG bakılacak
- [ ] `npm run validate`
- [ ] Newsletter / account / checkout — **yapılmayacak** (PII)
