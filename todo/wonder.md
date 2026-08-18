# Todo — Wonder (Shopify paid) · NETHYPE · Beauty

*Kaynak:* https://wonder-theme-beauty.myshopify.com/  
*Preset:* `default` (Beauty) · *Slug:* `wonder`  
*Theme Store:* https://themes.shopify.com/themes/wonder

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **wonder-theme/wonder-demo-v2.5**  
`schema_name` = **Wonder** · `schema_version` = **2.5.0** · `role` = **main** · theme id `142646771912`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
shop `wonder-theme-beauty.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact — yazıldı, capture kuyrukta  
**PR:** draft — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/wonder/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/wonder/`, `evidence/wonder/`, `todo/wonder.md`, `candidates/wonder-leftovers.md` |

**Kapsam satırı:**  
`Wonder · default (Beauty) · wonder-theme/wonder-demo-v2.5 · schema_name Wonder 2.5.0 · theme_store_id null · home→PDP→PLP→collections→search→cart→about-us/contact→faq→blog→404 · leftover: candidates/wonder-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer + conversion blocks | roster | [ ] capture |
| Mega Shop 1440 | interact | [ ] |
| Predictive search `serum` | interact 3vp | [ ] |
| Mobile menu 375 | interact | [ ] |
| Mobile menu 768 | interact | [ ] |
| Cart drawer empty + filled + qty | interact 3vp | [ ] |
| PDP Body salt scrub Size 180→300 ml | interact 3vp | [ ] |
| PLP `/collections/all` | roster | [ ] capture |
| Collections index `/collections` | roster | [ ] capture |
| Search `/search?q=serum` | roster | [ ] capture |
| Cart page empty + filled + qty | interact 3vp | [ ] |
| About `/pages/about-us` (`/pages/about` 404) | roster | [ ] capture |
| Contact `/pages/contact` (submit yok) | roster | [ ] capture |
| FAQ `/pages/faq` | roster | [ ] capture |
| Beauty journal + article | roster | [ ] capture |
| 404 leftover | roster | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Wonder / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · interact Shop 1440 |
| 3 | page_header_logo_banner | `media-video-hero` | reuse · WHERE SKINCARE BEGINS |
| 4 | rich_text_with_image | `editorial-image-with-text` | reuse |
| 5 | 1645137069750a4751 grid-box | `promo-grid-banner` | reuse · Orchid mosaic |
| 6 | parallax | `editorial-image-with-text-overlay` | reuse · uzun kaydırma |
| 7 | brands | `social-proof-brand-logos` | reuse |
| 8 | rich_text Nm4gMM | `editorial-rich-text` | Your Daily Routine |
| 9 | shoppable_video | `media-lookbook-banner` | reuse |
| 10 | rich_text KEeNKx | `editorial-rich-text.2` | skin type metin |
| 11 | featured_collections_tabs | `product-showcase-tabs` | Our Bestsellers |
| 12 | button J4rEcY / AcgMnQ | — | leftover standalone CTA |
| 13 | product_slider | `product-showcase-grid-featured` | reuse |
| 14 | video_reels | `media-shop-the-feed` | reuse |
| 15 | 1645292346 Argan Oil | `editorial-image-with-text.2` | reuse |
| 16 | collection_feature | `collection-nav-image-cards` | Popular Collection |
| 17 | rich_text tJmRxp | `editorial-rich-text.3` | Love Your Skin |
| 18 | shoppable_image | `media-lookbook-banner.2` | reuse |
| 19 | 1645701451 | `product-showcase-grid-featured.2` | New Beauty Products |
| 20 | testimonials | `testimonial-quote-carousel` | reuse |
| 21 | rich_text 8VjD4K | `editorial-rich-text.4` | #Beauty Vibes |
| 22 | marquee_images | `media-scrolling-gallery` | reuse |
| 23 | 1645803315 | `trust-icon-row` | Vegan / shipping |
| 24 | 1649160937 | `lead-capture-newsletter-band` | reuse · submit yok |
| 25 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 26 | #wt-drawer-nav | `global-menu-drawer` | reuse · 375/768 |
| 27 | search-drawer | `global-predictive-search` | reuse |
| 28 | #CartDrawer | `global-cart-drawer` | reuse |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | Shop hover 1440 — bekleniyor |
| global-predictive-search | input | `serum` 3vp — bekleniyor |
| global-menu-drawer | open | 375/768 hamburger — bekleniyor |
| global-cart-drawer | filled + changed | empty → Body salt scrub → qty — bekleniyor |
| cart-page-main | filled + changed | empty → filled → qty — bekleniyor |
| product-info-main | changed | Size 180 ml → 300 ml — bekleniyor |

---

## Aday / leftover

[`candidates/wonder-leftovers.md`](../candidates/wonder-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / cart / menu / PDP Size
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
