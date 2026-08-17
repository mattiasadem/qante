# Todo — Tinker (Shopify first-party, Horizon family)

*Kaynak:* https://theme-tinker-demo.myshopify.com  
*Preset:* `default` · Theme Store: https://themes.shopify.com/themes/tinker  
*Tema (storefront, uydurulmadı):* **Updated copy of Tinker demo store** · `schema_name`: **Tinker** · `schema_version`: **3.4.0** · `theme_store_id`: **3627** · role `main` · id `183829266735`  
*Shop:* `se-horizon6-en-ixxd.myshopify.com`

**Durum:** ✅ Mod A walk + resmi 3vp + interact + validate  
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
- [x] F2 3vp `capture-observation.mjs` (26/26 static)
- [x] F3 Interact: header (mega yok) · predictive `tray` 375/768/1440 · menu 375 (768 leftover) · cart drawer empty/filled/qty · cart page empty/filled/qty · PDP Brass→Black Steel
- [x] F4 `npm run validate` — 0 error

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

---

## Home remap (kanıt)

- announcement → `promo-announcement-bar`
- header-component (mega yok) → `navigation-header-mega` + delta
- hero Introducing / Newest Arrivals → `hero-slideshow`
- generic `section` “Make Your Workspace Yours” (yalnız heading) → `editorial-rich-text`
- media_with_content Productivity Essentials + Shop Now → `editorial-image-with-text`
- collection_list Shop by Collection (445/903 bento span) → `collection-nav-cards`
- footer-group newsletter → `lead-capture-newsletter-band`
- migrated_footer_content kolonlar → `footer-columns-newsletter`
- footer_utilities © 2026 → leftover

---

## Interact (pixel-check)

- [x] `navigation-header-mega` — 1440 hover mega **yok** (düz link). Account ikonu var, login yok.
- [x] `global-predictive-search` — `tray` → chips + Valet/Gather Tray + View all. 375/768/1440
- [x] `global-menu-drawer` — 375 hamburger + nested Gather kartları. 768 hamburger 0px
- [x] `global-cart-drawer` — boş / Desk Knife qty 1 $75 / qty 2 $150
- [x] `cart-page-main` — boş + dolu $75 + qty 2 $150
- [x] `product-info-main` — Handle color Brass → Black Steel (görsel + swatch)

Stop: email / account / checkout / newsletter submit / contact Send / PII

---

## Bileşen roster

32 observation. 0 yeni şema.

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | reuse (mega yok) | [x] |
| 3 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 4 | editorial-rich-text | home | [x] | [x] | heading-only nested | [x] |
| 5 | editorial-image-with-text | home | [x] | [x] | media_with_content | [x] |
| 6 | collection-nav-cards | home | [x] | [x] | bento span | [x] |
| 7 | lead-capture-newsletter-band | home | [x] | [x] | e-posta yok | [x] |
| 8 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 9 | global-predictive-search | home | [x] | [x] | tray | [x] |
| 10 | global-menu-drawer | home | [x] 375 | [x] | 768 leftover | [x] |
| 11 | global-cart-drawer | home | [x] | [x] | empty/filled/qty | [x] |
| 12 | collection-nav-grid | collections | [x] | [x] | reuse | [x] |
| 13–14 | banner + grid-plp | collection | [x] | [x] | objects/Decor | [x] |
| 15 | search-results | search | [x] | [x] | tray | [x] |
| 16–17 | cart-page + related | cart | [x] | [x] | reuse | [x] |
| 18–20 | PDP info / video / related | product-detail | [x] | [x] | Desk Knife | [x] |
| 21 | lead-capture-form | contact | [x] | [x] | Send yok | [x] |
| 22–26 | about ×5 | about-brand | [x] | [x] | our-story-2 | [x] |
| 27 | faq-collapsible-tabs | faq-support | [x] | [x] | düz Q&A | [x] |
| 28 | page-content-main | policy | [x] | [x] | reuse | [x] |
| 29–30 | blog list + post | blog-* | [x] | [x] | reuse | [x] |
| 31–32 | 404 + related | not-found | [x] | [x] | leftover | [x] |

---

## Aday / leftover

[`candidates/tinker-leftovers.md`](../candidates/tinker-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact search / menu 375 / cart / PDP variant
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 0 error
- [x] Newsletter / account / checkout — **yapılmayacak** (PII)
