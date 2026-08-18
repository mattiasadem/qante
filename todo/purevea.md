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

**Durum:** Mod A walk + resmi 3vp + interact — **capture devam**  
**PR:** draft — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/purevea/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **60** |
| PNG | (capture sonrası) |
| Parallel | yalnız `observations/purevea/`, `evidence/purevea/`, `todo/purevea.md`, `candidates/purevea-leftovers.md` |

**Kapsam satırı:**  
`Purevea · default · purevea-v2 / schema_name Purevea 2.0.0 · theme_store_id null · home→PDP Herbal Hair Oil→PLP best-sellers→collections landing→search serum→cart→about-us/contact-us→faqs→blog news→404 · 60 obs · 0 yeni şema · leftover: candidates/purevea-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer + conversion | roster | [ ] capture |
| Mega Shop 1440 | interact | [ ] |
| Predictive search `serum` | interact 3vp | [ ] |
| Mobile menu 375 | interact | [ ] |
| Mobile menu 768 | interact | [ ] |
| Cart drawer empty + filled + qty | interact 3vp | [ ] |
| PDP Herbal Hair Oil Hair type Normal→Colored | interact 3vp | [ ] |
| PLP `/collections/best-sellers` | roster | [ ] |
| Collections index `/collections` (designed landing) | roster | [ ] |
| Search `/search?q=serum` | roster | [ ] |
| Cart page empty + filled + qty | interact 3vp | [ ] |
| About `/pages/about-us` (`/pages/about` 404) | roster | [ ] |
| Contact `/pages/contact-us` (submit yok; `/pages/contact` aynı şablon) | roster | [ ] |
| FAQ `/pages/faqs` (`/pages/faq` 404) | roster | [ ] |
| Blog `/blogs/news` | roster | [ ] |
| 404 leftover | roster | [ ] |
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
| navigation-header-mega | open | [ ] Shop hover 1440 |
| global-predictive-search | input | [ ] `serum` 3vp |
| global-menu-drawer | open / changed | [ ] 375/768 hamburger + Shop expander |
| global-cart-drawer | filled + changed | [ ] empty → ATC → qty |
| cart-page-main | filled + changed | [ ] empty → ATC → qty |
| product-info-main | changed | [ ] Hair type Normal→Colored |

---

## Aday / leftover

[`candidates/purevea-leftovers.md`](../candidates/purevea-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / menu / cart / PDP Hair type
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
- [ ] Email / account / checkout / newsletter submit — **yapılmayacak**
