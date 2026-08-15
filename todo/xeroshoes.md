# Todo — Xero Shoes (xeroshoes.com)

*Kaynak:* https://xeroshoes.com · *Preset:* `default`  
*Tema (vitrinde görülen):* **xeroshoes-com-theme/main** · `schema_name`: Feel the World · `schema_version`: 1.2.0 · `theme_store_id`: null (custom) · shop `shopxeroshoes.myshopify.com` · theme id `151676485810` · role `main`

**Durum:** Mod A walk yazıldı — resmi 3vp / interact sırada  
**PR:** draft (main'e merge yok)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/xeroshoes/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/xeroshoes/`, `evidence/xeroshoes/`, `todo/xeroshoes.md`, `candidates/xeroshoes-*.md` |

**Kapsam satırı:**  
`Xero Shoes · default · xeroshoes-com-theme/main (Feel the World 1.2.0, custom) · home→PDP→PLP→search→cart→content→footer→mobile · obs yazıldı · 3vp bekliyor`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/tabs/collections | [x] obs | [ ] |
| Mega (Men 1440) / search / cart drawer / mobile menu | [x] obs | [ ] interact |
| PDP `/products/prio-men` | [x] obs | [ ] |
| PLP `/collections/mens` | [x] obs | [ ] |
| Search `/search?q=hfs` | [x] obs | [ ] |
| Cart `/cart` boş + drawer | [x] obs | [ ] |
| About `/pages/about-us` | [x] obs | [ ] |
| Contact `/pages/contact` | [x] obs · form yok | [ ] |
| Blog `/blogs/blog` + flat-feet post | [x] obs | [ ] |
| Policy privacy | [x] obs | [ ] |
| Warranty / returns / sizing | [x] obs | [ ] |
| Stores `/pages/stores` | [x] obs | [ ] |
| Shoe finder Digioh iframe | [x] obs | [ ] |
| Xero Circle | [x] obs · PII yok | [ ] |
| 404 | ⛔ aday + parent obs | [ ] |
| Newsletter / warranty claim / contact submit | ⛔ PII yok | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 3 | promo-announcement-bar.2 | home teaser | [ ] | [x] | reuse | [ ] |
| 4 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 5 | product-showcase-tabs | home | [ ] | [x] | reuse | [ ] |
| 6 | collection-nav-image-cards | home | [ ] | [x] | reuse | [ ] |
| 7 | features-multicolumn | home SEO | [ ] | [x] | reuse | [ ] |
| 8 | features-multicolumn.2 | home Natural | [ ] | [x] | reuse | [ ] |
| 9 | collection-nav-image-cards.2 | home activity | [ ] | [x] | reuse | [ ] |
| 10 | editorial-image-with-text | home X1/Mesa | [ ] | [x] | reuse | [ ] |
| 11 | editorial-image-with-text.2 | home community | [ ] | [x] | reuse | [ ] |
| 12 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 13 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 14 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 15 | global-menu-drawer | home 375/768 | [ ] | [x] | reuse | [ ] |
| 16 | global-quick-view | home Quick Add | [ ] | [x] | reuse | [ ] |
| 17 | navigation-breadcrumbs | product-detail | [ ] | [x] | reuse | [ ] |
| 18 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 19 | product-info-tabs | product-detail | [ ] | [x] | reuse | [ ] |
| 20 | features-multicolumn | product-detail | [ ] | [x] | reuse | [ ] |
| 21 | editorial-image-with-text | product-detail | [ ] | [x] | reuse | [ ] |
| 22 | faq-collapsible-tabs | product-detail | [ ] | [x] | reuse | [ ] |
| 23 | collection-banner | collection | [ ] | [x] | reuse | [ ] |
| 24 | collection-nav-tabs | collection | [ ] | [x] | reuse | [ ] |
| 25 | product-showcase-grid-plp | collection | [ ] | [x] | reuse | [ ] |
| 26 | faq-collapsible-tabs | collection | [ ] | [x] | reuse | [ ] |
| 27 | search-results | search | [ ] | [x] | reuse | [ ] |
| 28 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 29–31 | about (3) | about-brand | [ ] | [x] | reuse | [ ] |
| 32–33 | contact + stores | contact | [ ] | [x] | reuse | [ ] |
| 34–36 | blog list + post | blog-* | [ ] | [x] | reuse | [ ] |
| 37 | page-content-main | policy | [ ] | [x] | reuse | [ ] |
| 38–41 | warranty / returns / sizing | faq-support | [ ] | [x] | reuse | [ ] |
| 42 | product-finder-quiz | landing-campaign | [ ] | [x] | reuse | [ ] |
| 43 | lead-capture-newsletter-band | landing-campaign | [ ] | [x] | reuse | [ ] |
| 44 | page-content-main | not-found | [ ] | [x] | reuse | [ ] |

---

## Aday / leftover

[`candidates/xeroshoes-leftovers.md`](../candidates/xeroshoes-leftovers.md)

- Stamped reviews (PDP)
- Gorgias chat
- Cart Bought Together ~13k px
- Home tab/collection kutuları şişik (gizli panel height)
- `/pages/about` `/pages/faq` 302 home
- `/pages/find-a-store` `/pages/help` `/pages/5000-mile-sole-warranty` 404
- featured-mobile-header 0px
- Newsletter / claim submit — PII

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Mega / search / cart / menu / quiz interact (piksel değişirse)
- [ ] Newsletter / contact / claim — **yapılmayacak** (PII)
