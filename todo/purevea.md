# Todo — Purevea (Shopify paid)

*Kaynak (resmi walk ONLY):* https://purevea-theme-demo.myshopify.com/  
*Yasak URL yok (bu vitrin açık).*  
*Preset:* `default` · *Slug:* `purevea`  
*Theme Store:* https://themes.shopify.com/themes/purevea

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **purevea-v2**  
`schema_name` = **Purevea** · `schema_version` = **2.0.0** · `role` = **main** · theme id `189012377878`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
`Shopify.shop` = `purevea-theme-demo.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact pixel-check — **bitti**  
**PR:** https://github.com/mattiasadem/qante/pull/187 (draft) — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/purevea/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **60** |
| PNG | **200** (162 static + 38 interact) |
| Parallel | yalnız `observations/purevea/`, `evidence/purevea/`, `todo/purevea.md`, `candidates/purevea-leftovers.md` |

**Kapsam satırı:**  
`Purevea · default · purevea-v2 / schema_name Purevea 2.0.0 · theme_store_id null · home→PDP Herbal Hair Oil→PLP best-sellers→collections landing→search serum→cart→about-us/contact-us→faqs→blog news→404 · 60 obs · 200 PNG · 0 yeni şema · leftover: candidates/purevea-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer + conversion | roster | [x] 3vp |
| Mega Shop 1440 | interact | [x] pixel-check |
| Predictive search `serum` | interact 3vp | [x] pixel-check |
| Mobile menu 375 | interact | [x] pixel-check |
| Mobile menu 768 | interact | [x] pixel-check |
| Cart drawer empty + filled + qty | interact 3vp | [x] pixel-check |
| PDP Herbal Hair Oil Hair type Normal→Colored | interact 3vp | [x] pixel-check |
| PLP `/collections/best-sellers` | roster | [x] 3vp |
| Collections index `/collections` (designed landing) | roster | [x] 3vp |
| Search `/search?q=serum` | roster | [x] 3vp |
| Cart page empty + filled + qty | interact 3vp | [x] pixel-check |
| About `/pages/about-us` (`/pages/about` 404) | roster | [x] 3vp |
| Contact `/pages/contact-us` (submit yok; `/pages/contact` aynı şablon) | roster | [x] 3vp |
| FAQ `/pages/faqs` (`/pages/faq` 404) | roster | [x] 3vp |
| Blog `/blogs/news` | roster | [x] 3vp |
| 404 leftover | roster | [x] 3vp |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Purevea / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | marquee_HkTcYy | `promo-announcement-bar` | reuse · header ticker |
| 2 | header | `navigation-header-mega` | reuse · interact · kutu `header.header` (section h=0) |
| 3 | product_slideshow_NAHFjM | `hero-slideshow` | reuse |
| 4 | divider_jDwgFW | — | leftover 0px |
| 5 | product_tab_zLUFjH | `product-showcase-tabs` | reuse |
| 6 | highlight_text_with_image_mCWPna | `editorial-highlight-text-image` | reuse |
| 7 | scrolling_cards_ege7ae | `collection-nav-cards` | reuse |
| 8 | marquee_eT8HRB | `promo-scrolling-marquee` | reuse |
| 9 | collection_with_image_Hh8GYx | `collection-nav-image-cards` | reuse |
| 10 | promo_banners_TeTUt8 | `promo-grid-banner` | reuse |
| 11 | featured_collection_KGjMEQ | `product-showcase-grid-featured` | reuse |
| 12 | marquee_zlTcYz | `promo-scrolling-marquee.2` | reuse |
| 13 | sale_highlight_RgyeQc | `promo-banner-countdown` | reuse |
| 14 | reviews_spotlight_cwxNwQ | `testimonial-quote-carousel` | reuse |
| 15 | products_with_featured_image_ngFCJY | `product-showcase-featured` | reuse · delta |
| 16 | press_card_jmYiAq | `features-multicolumn` | reuse · press quotes |
| 17 | shoppable_videos_6RdNkr | `media-shop-the-feed` | reuse |
| 18 | icon_cards_jgWfUw | `trust-icon-row` | reuse |
| 19 | marquee_HkTcYz | `promo-scrolling-marquee.3` | reuse |
| 20 | collection_tabs_UAGeiw | `collection-nav-tabs` | reuse · delta ürün grid |
| 21 | accordion_JTNidn | `faq-collapsible-tabs` | reuse |
| 22 | image_box_x6ctxq | `collection-nav-cards.2` | reuse |
| 23 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 24 | #offcanvasMenuMobile | `global-menu-drawer` | reuse · 375/768 |
| 25 | #offcanvasSearch | `global-predictive-search` | reuse |
| 26 | #CartDrawer | `global-cart-drawer` | reuse |
| 27 | quick-view / compare / popup | — | leftover 0px / PII |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [x] Shop hover 1440 — Shop All / Categories / Concern / Own Your Glow + Glow & Go Set |
| global-predictive-search | input | [x] `serum` 3vp — Products (4) + Suggestions + Collections |
| global-menu-drawer | open / changed | [x] 375/768 hamburger + Shop accordion |
| global-cart-drawer | filled + changed | [x] empty (0) → ATC $115 qty1 → qty2 $230 |
| cart-page-main | filled + changed | [x] empty → ATC $115 qty1 → qty2 $230 |
| product-info-main | changed | [x] Hair type Normal→Colored; stok 12→22; fiyat $115 |

---

## Aday / leftover

[`candidates/purevea-leftovers.md`](../candidates/purevea-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact mega / search / menu / cart / PDP Hair type
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 0 error
- [x] Email / account / checkout / newsletter submit — **yapılmayacak**
