# Todo — Blockshop (Shopify paid) · Beauty

*Kaynak:* https://blockshop-theme-beauty.myshopify.com/  
*Preset:* `default` (Beauty — resmi Theme Store preview) · *Slug:* `blockshop`  
*Theme Store:* https://themes.shopify.com/themes/blockshop · Troop Themes

**Yasak URL:** `blockshop-theme.myshopify.com` (password) · `blockshop.myshopify.com` (internal) — kullanılmadı.

*Tema (vitrinde görülen, uydurulmadı):* `Shopify.theme.name` **Copy of design [do not delete]** · `id` `134976438327` · `schema_name` **Blockshop** · `schema_version` **13.2.0** · `theme_store_id` **null** · `role` `main` · shop `blockshop-theme-beauty.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact + validate **bitti**  
**PR:** https://github.com/mattiasadem/qante/pull/156 — **draft · main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/blockshop/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **38** |
| Parallel | yalnız `observations/blockshop/`, `evidence/blockshop/`, `todo/blockshop.md`, `candidates/blockshop-leftovers.md` |

**Kapsam satırı:**  
`Blockshop · default · Copy of design [do not delete] / schema_name Blockshop 13.2.0 · theme_store_id null · home→PDP→PLP→collections→search→cart→about/contact→faq→blog→404 · 38 obs · 0 yeni şema · leftover: candidates/blockshop-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + sidebar header / featured-grid / bestsellers / footer | bitti | [x] |
| Shop accordion 768/1440 (mega yok) | interact | [x] |
| Predictive search `cream` | interact 3vp | [x] |
| Mobile menu 375 | interact | [x] |
| Mobile menu 768 | ⛔ hamburger 0×0 (sidebar) | leftover |
| Cart drawer empty + filled + qty | interact 3vp | [x] |
| PDP Brightening Serum 75ML→200ML | interact 3vp | [x] |
| PLP `/collections/all` | roster | [x] |
| Collections index `/collections` | roster | [x] |
| Search `/search?q=cream` | roster | [x] |
| Cart page empty + filled + qty | interact 3vp | [x] |
| About `/pages/about-us` | roster | [x] |
| Contact form (submit yok) | roster | [x] |
| FAQ `/pages/faqs` | roster | [x] |
| News + Future Tones (FALL-ING FOR YOU) | roster | [x] |
| 404 | roster | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home | [x] | sidebar; mega yok | reuse | [x] |
| 2 | global-menu-drawer | home | [x] | 375 | reuse | [x] |
| 3 | global-predictive-search | home | [x] | cream | reuse | [x] |
| 4 | global-cart-drawer | home | [x] | boş+dolu+qty | reuse | [x] |
| 5 | collection-nav-image-cards | home | [x] | SKINCARE/MAKEUP | reuse | [x] |
| 6 | product-showcase-grid-featured | home | [x] | BEST SELLERS | reuse | [x] |
| 7 | editorial-rich-text | home | [x] | Avalon | reuse | [x] |
| 8 | collection-nav-image-cards-2 | home | [x] | 3 hikâye | reuse | [x] |
| 9 | social-proof-brand-logos | home | [x] | logo_list alıntı+logo | reuse | [x] |
| 10 | editorial-image-with-text | home | [x] | Ritual | reuse | [x] |
| 11 | trust-icon-row | home | [x] | kargo/iade | reuse | [x] |
| 12 | collection-nav-cards | home | [x] | routine | reuse | [x] |
| 13 | editorial-rich-text-2 | home | [x] | manifesto | reuse | [x] |
| 14 | footer-columns-newsletter | home | [x] | submit yok | reuse | [x] |
| 15 | product-info-main | product-detail | [x] | 75→200 | reuse | [x] |
| 16 | faq-collapsible-tabs-2 | product-detail | [x] | KEY INGREDIENTS | reuse | [x] |
| 17 | editorial-image-with-text | product-detail | [x] | Glow Guide | reuse | [x] |
| 18 | product-showcase-related | product-detail | [x] | Boost | reuse | [x] |
| 19 | trust-icon-row | product-detail | [x] | icons_row | reuse | [x] |
| 20 | faq-collapsible-tabs | product-detail | [x] | PDP FAQ | reuse | [x] |
| 21 | media-shop-the-feed | product-detail | [x] | @YOUR.BRAND | reuse | [x] |
| 22 | testimonial-quote-carousel | product-detail | [x] | journeys | reuse | [x] |
| 23 | product-showcase-grid-plp | collection | [x] | all | reuse | [x] |
| 24 | collection-nav-image-cards | collection | [x] | latest/best | reuse | [x] |
| 25 | collection-nav-grid | collections | [x] | index | reuse | [x] |
| 26 | search-results | search | [x] | cream | reuse | [x] |
| 27 | cart-page-main | cart | [x] | boş+dolu+qty | reuse | [x] |
| 28 | editorial-image-with-text | about-brand | [x] | Our Story | reuse | [x] |
| 29 | editorial-rich-text | about-brand | [x] | kurucular | reuse | [x] |
| 30 | editorial-image-with-text-2 | about-brand | [x] | Rachel | reuse | [x] |
| 31 | editorial-rich-text-2 | about-brand | [x] | quote | reuse | [x] |
| 32 | editorial-rich-text | contact | [x] | How can we help | reuse | [x] |
| 33 | lead-capture-form | contact | [x] | submit yok | reuse | [x] |
| 34 | faq-collapsible-tabs | faq-support | [x] | shipping | reuse | [x] |
| 35 | editorial-rich-text | faq-support | [x] | further | reuse | [x] |
| 36 | blog-list-main | blog-list | [x] | news | reuse | [x] |
| 37 | blog-post-main | blog-post | [x] | future-tones | reuse | [x] |
| 38 | page-content-main | not-found | [x] | 404 | reuse | [x] |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | initial / open | [x] 768/1440 SHOP accordion: SHOP ALL / SKIN CARE / MAKE UP / HAIR CARE. Mega kolon yok. |
| global-predictive-search | initial / input | [x] boş POPULAR PRODUCTS; `cream` → SUGGESTIONS + 3 ürün + VIEW ALL. 375 2 kolon. |
| global-menu-drawer | open | [x] 375; 768 leftover |
| global-cart-drawer | initial / filled / changed | [x] boş → Serum $70 qty1 → qty2 $140 + free shipping |
| cart-page-main | initial / filled / changed | [x] aynı delta; 375 empty + qty resmi |
| product-info-main | initial / changed | [x] 75ML $70 → 200ML $135; şişe foto 75ML kaldı |

---

## Aday / leftover

[`candidates/blockshop-leftovers.md`](../candidates/blockshop-leftovers.md)

---

## Evidence backlog

- [x] Statik 3vp
- [x] Interact 3vp
- [x] `npm run validate` 0 error
