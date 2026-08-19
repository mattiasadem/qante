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

**Durum:** Mod A walk + resmi 3vp + interact (CRO leftover) + validate **bitti**  
**PR:** draft — CRO interact turu

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/be-yours/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/be-yours/`, `evidence/be-yours/`, `todo/be-yours.md`, `candidates/be-yours-leftovers.md` |

**Kapsam satırı:**  
`Be Yours · default · Be Yours 8.3.1 - live / schema_name Be Yours 8.3.1 (theme_store_id null) · home→PDP→PLP→collections→search→cart→about/contact→faq→news→404 · 47 obs · CRO interact 4 şema · 0 yeni şema · leftover: candidates/be-yours-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer + conversion blocks | roster + capture | [x] |
| Shop sağ drawer 1440 (mega class yok) | interact | [x] |
| Predictive search `plant` | interact | [x] |
| Mobile menu 375 | interact | [x] |
| Mobile menu 768 | interact | [x] |
| Cart drawer empty + filled + qty | interact | [x] |
| PDP Money Tree Size S→M | interact 768/1440 | [x] (375 leftover) |
| PLP `/collections/all` | roster + capture | [x] |
| Collections index `/collections` | roster + capture | [x] |
| Search `/search?q=plant` | roster + capture | [x] |
| Cart page empty + filled + qty | interact | [x] |
| About `/pages/about` | roster + capture | [x] |
| Contact `/pages/contact` (submit yok) | roster + capture | [x] |
| FAQ `/pages/faq` | roster + capture | [x] |
| News + Christmas article | roster + capture | [x] |
| 404 | roster + capture | [x] |
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
| navigation-header-mega | open | Shop sağ drawer 1440 — 6 koleksiyon; mega class yok |
| global-predictive-search | input | `plant` 3vp — Suggestions + Pages + Products |
| global-menu-drawer | open | 375/768 hamburger |
| global-cart-drawer | filled + changed | Spider Plant €12,99 qty1 → qty2 €25,98 |
| cart-page-main | filled + changed | empty → qty1 €12,99 → qty2 €25,98 |
| product-info-main | changed | S €14,99 → M €49,99 (768/1440). 375 leftover |
| before-after-slider | initial + changed | drag pct:70 — 3vp |
| commerce-tools-products-bundle | initial + filled | ADD SET TO CART → drawer €37,97 — 3vp |
| faq-collapsible-tabs | initial + changed | kargo sorusu açık — 3vp |
| testimonial-quote-carousel | initial + changed | Paige → Sara Bond (768/1440). 375 changed leftover |
| lead-capture-form | — | PII/submit dur — static 3vp |

---

## Aday / leftover

[`candidates/be-yours-leftovers.md`](../candidates/be-yours-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact Shop / search / cart / menu / PDP Size
- [x] CRO interact: before-after / bundle / FAQ / testimonial
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 0 error
