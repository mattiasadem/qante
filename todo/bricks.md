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

**Durum:** Mod A walk + resmi 3vp + interact + validate **devam**  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/bricks/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **35** (pre-capture) |
| Parallel | yalnız `observations/bricks/`, `evidence/bricks/`, `todo/bricks.md`, `candidates/bricks-leftovers.md` |

**Kapsam satırı:**  
`Bricks · default · Bricks / schema_name Bricks 1.0.0 (theme_store_id null) · Shopify.shop gsc-2theme-demo1.myshopify.com · host bricks-theme-demo.myshopify.com · home→PDP green-floral-puff-dress→PLP womens→/collections→search dress→cart→contact (about 404)→faq→news+kibbe→404 · 35 obs · 0 yeni şema · leftover: candidates/bricks-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + slideshow / marquee / featured / IWT grids / collections / trust / hero / before-after / countdown / faq / video / blog / footer | roster | capture pending |
| Header kapalı + WOMEN mega 1440 | roster | interact pending |
| Predictive search `dress` | roster | interact pending |
| Mobile hamburger 375 + 768 | roster | interact pending |
| Cart drawer empty + filled + qty | roster | interact pending |
| PDP Lovely Green Mini Dress Size 2XS→M | roster | interact pending |
| PLP `/collections/womens` | roster | capture pending |
| Collections index `/collections` | roster | capture pending |
| Search `/search?q=dress` | roster | capture pending |
| Cart page empty + filled + qty | roster | interact pending |
| About `/pages/about` `/pages/about-us` | ⛔ 404 | leftover |
| Contact form (submit yok) | roster | capture pending |
| FAQ `/pages/faq` | roster | capture pending |
| News + Kibbe article | roster | capture pending |
| 404 leftover | roster | capture pending |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Bricks / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | header_krVwVb | `navigation-header-mega` | reuse · interact · WOMEN mega |
| 2 | cart-drawer | `global-cart-drawer` | reuse · interact |
| 3 | quick-view | — | leftover 0px |
| 4 | predictive-search | `global-predictive-search` | reuse · interact |
| 5 | slideshow_Md9zH6 | `hero-slideshow` | reuse · 3 kare |
| 6 | scrolling_text_GDnR3Q | `promo-scrolling-marquee` | reuse |
| 7 | product_list_4dhwqn | `product-showcase-grid-featured` | reuse |
| 8 | image_with_text_ierpXt | `product-showcase-grid-featured.2` | reuse · IWT + jean grid |
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
| 22 | menu-drawer #MenuDrawer | `global-menu-drawer` | reuse · 375/768 |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | pending — 1440 WOMEN hover mega |
| global-predictive-search | input | pending — `dress` |
| global-menu-drawer | open | pending — 375/768 |
| global-cart-drawer | filled + changed | pending |
| cart-page-main | filled + changed | pending |
| product-info-main | changed | pending — Size 2XS→M |

---

## Aday / leftover

[`candidates/bricks-leftovers.md`](../candidates/bricks-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact header / search / cart / menu / PDP Size
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — hedef 0 error
