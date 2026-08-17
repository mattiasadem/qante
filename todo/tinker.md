# Todo — Tinker (Shopify first-party, Horizon family)

*Kaynak:* https://theme-tinker-demo.myshopify.com  
*Preset:* `default` · Theme Store: https://themes.shopify.com/themes/tinker  
*Tema (storefront, uydurulmadı):* **Updated copy of Tinker demo store** · `schema_name`: **Tinker** · `schema_version`: **3.4.0** · `theme_store_id`: **3627** · role `main` · id `183829266735`  
*Shop:* `se-horizon6-en-ixxd.myshopify.com`

**Durum:** Mod A walk JSON yazıldı — 3vp + interact + validate sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/tinker/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/tinker/`, `evidence/tinker/`, `todo/tinker.md`, `candidates/tinker-*.md` |

**Kapsam satırı:**  
`Tinker · default · Updated copy of Tinker demo store / schema_name Tinker 3.4.0 · theme_store_id 3627 · home→PDP→PLP→collections→search→cart→about/contact→blog→404 · 32 obs · 0 yeni şema · bento/Horizon nested theme-blocks`

---

## Faz durumu

- [x] F0 Tema kimliği + sitemap + section haritası
- [x] F1 Observation JSON (32) — şema yok, mevcut tipler
- [ ] F2 3vp `capture-observation.mjs`
- [ ] F3 Interact: mega/header · predictive search `tray` · menu 375 (768 leftover) · cart empty/filled/qty · PDP Brass→Black Steel
- [ ] F4 `npm run validate` — 0 error

---

## Sayfa haritası

| sayfa | URL |
|---|---|
| home | `/` |
| product-detail | `/products/craighill-desk-knife-brass` |
| collection | `/collections/objects` (Decor) |
| collections | `/collections` |
| search | `/search?q=tray` |
| cart | `/cart` |
| cart-drawer | overlay (`dialog.cart-drawer__dialog`) |
| about-brand | `/pages/our-story-2` |
| contact | `/pages/contact` |
| faq-support | `/pages/faq` |
| policy | `/pages/policies` |
| blog-list | `/blogs/news` |
| blog-post | `/blogs/news/cultivating-a-creative-practice-with-journalling` |
| not-found | `/pages/this-page-does-not-exist-xyz-tinker` → HTTP 404 |

Koleksiyonlar: gather · analog · the-analog-system · the-gather-collection · objects · sale · chargers · workspace · our-story  
Sayfalar: contact · faq · policies · our-story-2

---

## Home remap (kanıt)

- announcement → `promo-announcement-bar`
- header-component (mega yok) → `navigation-header-mega` + delta
- hero Introducing / Newest Arrivals → `hero-slideshow`
- generic `section` “Make Your Workspace Yours” (yalnız heading, nested blocks boş) → `editorial-rich-text`
- media_with_content Productivity Essentials + Play video → `editorial-image-with-text`
- collection_list Shop by Collection (445/903 bento span) → `collection-nav-cards`
- footer-group newsletter → `lead-capture-newsletter-band`
- migrated_footer_content kolonlar → `footer-columns-newsletter`
- footer_utilities © 2026 → leftover

---

## Interact (pixel-check)

- [ ] `navigation-header-mega` — 1440 hover mega **yok** (düz link)
- [ ] `global-predictive-search` — `tray` (12 sonuç). 375 hidden-on-menu · 768/1440 hidden-on-drawer
- [ ] `global-menu-drawer` — 375 hamburger + nested Gather kartları. 768 hamburger 0px
- [ ] `global-cart-drawer` — boş / Desk Knife / qty
- [ ] `cart-page-main` — boş + dolu + qty
- [ ] `product-info-main` — Handle color Brass → Black Steel

Stop: email / account / checkout / newsletter submit / contact Send / PII

---

## Bileşen roster

32 observation. 0 yeni şema.

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | reuse (mega yok) | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 4 | editorial-rich-text | home | [ ] | [x] | heading-only nested | [ ] |
| 5 | editorial-image-with-text | home | [ ] | [x] | media_with_content | [ ] |
| 6 | collection-nav-cards | home | [ ] | [x] | bento span | [ ] |
| 7 | lead-capture-newsletter-band | home | [ ] | [x] | e-posta yok | [ ] |
| 8 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 9 | global-predictive-search | home | [ ] | [x] | tray | [ ] |
| 10 | global-menu-drawer | home | [ ] | [x] | 375 | [ ] |
| 11 | global-cart-drawer | home | [ ] | [x] | empty/filled/qty | [ ] |
| 12 | collection-nav-grid | collections | [ ] | [x] | reuse | [ ] |
| 13–14 | banner + grid-plp | collection | [ ] | [x] | objects/Decor | [ ] |
| 15 | search-results | search | [ ] | [x] | tray | [ ] |
| 16–17 | cart-page + related | cart | [ ] | [x] | reuse | [ ] |
| 18–20 | PDP info / video / related | product-detail | [ ] | [x] | Desk Knife | [ ] |
| 21 | lead-capture-form | contact | [ ] | [x] | Send yok | [ ] |
| 22–26 | about ×5 | about-brand | [ ] | [x] | our-story-2 | [ ] |
| 27 | faq-collapsible-tabs | faq-support | [ ] | [x] | reuse | [ ] |
| 28 | page-content-main | policy | [ ] | [x] | reuse | [ ] |
| 29–30 | blog list + post | blog-* | [ ] | [x] | reuse | [ ] |
| 31–32 | 404 + related | not-found | [ ] | [x] | leftover | [ ] |

---

## Aday / leftover

[`candidates/tinker-leftovers.md`](../candidates/tinker-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact search / menu 375 / cart / PDP variant
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
- [x] Newsletter / account / checkout — **yapılmayacak** (PII)
