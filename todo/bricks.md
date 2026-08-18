# Todo — Bricks (Shopify paid)

*Kaynak:* https://bricks-theme-demo.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/bricks  
*Preset:* `default` · *Slug:* `bricks`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Bricks**  
`schema_name` = **Bricks** · `schema_version` = **1.0.0** · `role` = **main** · theme id `205031473490`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
`handle` = `"null"` · `style.id` / `style.handle` = **null**  
`Shopify.shop` = `gsc-2theme-demo1.myshopify.com`  
public host `bricks-theme-demo.myshopify.com` · locale `en` · country `CY` · currency `EUR`

**Durum:** Mod A walk + resmi 3vp + interact + validate **bitti** (0 error)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/bricks/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **35** |
| Evidence PNG | **123** |
| Parallel | yalnız `observations/bricks/`, `evidence/bricks/`, `todo/bricks.md`, `candidates/bricks-leftovers.md` |

**Kapsam satırı:**  
`Bricks · default · Bricks / schema_name Bricks 1.0.0 (theme_store_id null) · Shopify.shop gsc-2theme-demo1.myshopify.com · host bricks-theme-demo.myshopify.com · home→PDP green-floral-puff-dress Size 2XS→M→PLP womens 74→/collections→search dress 50→cart empty/filled/qty2 €79,80→contact (about 404)→faq→news+kibbe→404 · 35 obs · 123 PNG · 0 yeni şema · leftover: candidates/bricks-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + slideshow / marquee / featured / IWT grids / collections / trust / hero / before-after / countdown / faq / video / blog / footer | [x] | [x] |
| Header kapalı + WOMEN mega 1440 | [x] | [x] |
| Predictive search `dress` | [x] | [x] 375/768/1440 |
| Mobile hamburger 375 + 768 | [x] | [x] (1440 hamburger yok) |
| Cart drawer empty + filled + qty | [x] | [x] qty1 €39,90 → qty2 €79,80 |
| PDP Lovely Green Mini Dress Size 2XS→M | [x] | [x] 3vp M chip |
| PLP `/collections/womens` | [x] | [x] 74 products |
| Collections index `/collections` | [x] | [x] |
| Search `/search?q=dress` | [x] | [x] 50 products |
| Cart page empty + filled + qty | [x] | [x] qty1 €39,90 → qty2 €79,80 |
| About `/pages/about` `/pages/about-us` | ⛔ 404 | leftover |
| Contact form (submit yok) | [x] | [x] |
| FAQ `/pages/faq` | [x] | [x] |
| News + Kibbe article | [x] | [x] |
| 404 leftover | [x] | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Bricks / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | header_krVwVb | `navigation-header-mega` | reuse · WOMEN mega 1440 |
| 2 | cart-drawer | `global-cart-drawer` | reuse · interact |
| 3 | quick-view | — | leftover 0px |
| 4 | predictive-search | `global-predictive-search` | reuse · dress |
| 5 | slideshow_Md9zH6 | `hero-slideshow` | reuse · 3 kare |
| 6 | scrolling_text_GDnR3Q | `promo-scrolling-marquee` | reuse |
| 7 | product_list_4dhwqn | `product-showcase-grid-featured` | reuse |
| 8 | image_with_text_ierpXt | `product-showcase-grid-featured.2` | reuse · jean grid |
| 9 | collection_list_BeEwtg | `collection-nav-cards` | reuse |
| 10 | image_with_text_fiwYAU | `product-showcase-grid-featured.3` | reuse · etek grid |
| 11 | custom_section_NzNXe8 | `trust-icon-row` | reuse |
| 12 | hero_bp7Bzx | `editorial-image-with-text-overlay` | reuse |
| 13 | before_after_aAhbGF | `before-after-slider` | reuse |
| 14 | countdown_FBkr84 | `promo-banner-countdown` | reuse |
| 15 | faq_UMgnCA | `faq-collapsible-tabs` | reuse |
| 16 | video_wDw8YT | `media-video-hero` | reuse |
| 17 | blog_posts_section_DnNPB4 | `blog-list-main` | reuse |
| 18 | newsletter_acwaqt | `lead-capture-newsletter-band` | reuse · submit yok |
| 19 | scrolling_text_tcmagT | `promo-scrolling-marquee.2` | reuse |
| 20 | footer_A7GpXd | `footer-columns-newsletter` | reuse · submit yok |
| 21 | footer_utilities_6UQrV4 | — | leftover copyright |
| 22 | #MenuDrawer | `global-menu-drawer` | reuse · 375/768 |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [x] 1440 WOMEN — 6 link + 3 ürün kartı |
| global-predictive-search | input | [x] 3vp `dress` — Suggestions + Products |
| global-menu-drawer | open | [x] 375 + 768 (mock-burger); 1440 yok |
| global-cart-drawer | filled + changed | [x] qty1 €39,90 → qty2 €79,80 |
| cart-page-main | filled + changed | [x] qty1 €39,90 rozet 1 → qty2 €79,80 rozet 2 |
| product-info-main | changed | [x] 2XS → M; fiyat/galeri aynı |

---

## Aday / leftover

[`candidates/bricks-leftovers.md`](../candidates/bricks-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 29/29
- [x] Interact header / search / cart / menu / PDP Size
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 0 error
