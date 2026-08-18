# Todo — Be Yours (Shopify paid) · RoarTheme

*Kaynak:* https://beyours-theme.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/be-yours  
*Preset:* `default` · *Slug:* `be-yours`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Be Yours 8.3.1 - live**  
`schema_name` = **Be Yours** · `schema_version` = **8.3.1** · `role` = **main** · theme id `138665296059`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
`handle` = `"null"` · `style.id` / `style.handle` = **null**  
shop `beyours-theme.myshopify.com` · locale `en` · country `DE` · currency `EUR`

**Durum:** Mod A walk + resmi 3vp + interact + validate  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/be-yours/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/be-yours/`, `evidence/be-yours/`, `todo/be-yours.md`, `candidates/be-yours-leftovers.md` |

**Kapsam satırı:**  
`Be Yours · default · Be Yours 8.3.1 - live / schema_name Be Yours 8.3.1 (theme_store_id null) · home→PDP Money Tree→PLP all→collections→search plant→cart→about/contact→faq→news→404 · 47 obs · 0 yeni şema · leftover: candidates/be-yours-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer + conversion blocks | roster | [ ] capture |
| Shop dropdown 1440 (mega class yok) | interact | [ ] |
| Predictive search `plant` | interact | [ ] |
| Mobile menu 375 | interact | [ ] |
| Mobile menu 768 | interact | [ ] |
| Cart drawer empty + filled + qty | interact | [ ] |
| PDP Money Tree Size S→M | interact | [ ] |
| PLP `/collections/all` | roster | [ ] |
| Collections index `/collections` | roster | [ ] |
| Search `/search?q=plant` | roster | [ ] |
| Cart page empty + filled + qty | interact | [ ] |
| About `/pages/about` | roster | [ ] |
| Contact `/pages/contact` (submit yok) | roster | [ ] |
| FAQ `/pages/faq` | roster | [ ] |
| News + Christmas article | roster | [ ] |
| 404 | roster | [ ] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Be Yours / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse · iç sayfada 0px |
| 2 | header | `navigation-header-mega` | reuse · interact · mega class yok |
| 3 | banner-reveal 16357444957e11cc38 | `editorial-image-with-text-overlay` | reuse · PLAY VIDEO leftover |
| 4 | guarantees Why Be Yours | `features-multicolumn` | reuse |
| 5 | product-grid 163179706485df7ac6 | `product-showcase-grid-featured` | reuse |
| 6 | image-with-text Meaningful Gifting | `editorial-image-with-text` | reuse |
| 7 | tab-collage Roomscapes | `collection-nav-tabs` | reuse |
| 8 | shop-the-look | `media-lookbook-slider` | reuse |
| 9 | lookbook | `media-lookbook-banner` | reuse |
| 10 | featured-product Prayer Plant | `product-showcase-featured` | reuse |
| 11 | bundle-products | `commerce-tools-products-bundle` | reuse |
| 12 | image-comparison | `before-after-slider` | reuse |
| 13 | tab-collage How It Works | `features-multicolumn.2` | reuse |
| 14 | banner-overlay Chat Expert | `editorial-image-with-text-overlay.2` | reuse |
| 15 | testimonials | `testimonial-quote-carousel` | reuse |
| 16 | scrolling-promotion | `promo-scrolling-marquee` | reuse |
| 17 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 18 | popup | — | leftover 0px / PII |
| 19 | mobile-dock | — | leftover · 375 HOME/SHOP/ACCOUNT |
| 20 | predictive-search | `global-predictive-search` | reuse · interact |
| 21 | menu-drawer | `global-menu-drawer` | reuse · 375/768 |
| 22 | mini-cart / cart-drawer | `global-cart-drawer` | reuse · interact |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | Shop disclosure 1440 — 6 koleksiyon; mega class yok |
| global-predictive-search | input | `plant` 3vp |
| global-menu-drawer | open | 375/768 hamburger |
| global-cart-drawer | filled + changed | empty → Spider Plant €12,99 → qty+ |
| cart-page-main | filled + changed | empty → Spider Plant → qty+ |
| product-info-main | changed | Size S €14,99 → M €49,99 |

---

## Aday / leftover

[`candidates/be-yours-leftovers.md`](../candidates/be-yours-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact Shop / search / cart / menu / PDP Size
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
