# Todo — Flow (Eight Themes, paid)

*Kaynak:* https://eight-nourish-demo.myshopify.com/  
*Preset:* `default` (Nourish — official Theme Store preview)  
*Slug:* `flow`  
*Theme Store:* https://themes.shopify.com/themes/flow  

*Tema (vitrinde görülen, uydurulmadı):* `Shopify.theme.name` **Flow R1 — design base** · `id` `150685581382` · `schema_name` **Flow** · `schema_version` **42.0.0** · `theme_store_id` **null** · `role` `main` · shop `flow-queenstown.myshopify.com`

**Yasak URL:** `flow-demo.myshopify.com` (Debut, Flow değil) · `flow-theme.myshopify.com` (password) — kullanılmadı.

**Durum:** ✅ Mod A walk + resmi 3vp + interact + validate  
**PR:** draft https://github.com/mattiasadem/qante/pull/153 · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/flow/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **48** |
| Evidence PNG | **162** |
| Parallel | yalnız `observations/flow/`, `evidence/flow/`, `todo/flow.md`, `candidates/flow-leftovers.md` |

**Kapsam satırı:**  
`Flow · default · Flow R1 — design base / schema_name Flow 42.0.0 · theme_store_id null · home→PDP→PLP→collections→search→cart→about/contact→faq→blog→404 · 48 obs · 162 PNG · 0 yeni şema · leftover: candidates/flow-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/hero/marquee/grid/quiz/videos/bundle/layered/overlay/cards/featured/social/promo/blog/parallax/footer | [x] | [x] |
| Mega Shop 1440 | [x] | [x] DETOX / ENERGY / SUPER GREEN + 2 promo |
| Predictive search `mango` | [x] | [x] 375/768/1440 |
| Mobile menu 375/768 | [x] | [x] 1440 hamburger 0px leftover |
| Cart drawer empty/filled/qty | [x] | [x] $3 → $6 |
| PDP Almond & Banana Size 500ml→330ml | [x] | [x] $3.00 → $2.00 |
| PLP `/collections/all-smoothies` | [x] | [x] |
| Collections index `/collections` (countdown + ürün grid) | [x] | [x] |
| Search `/search?q=mango` | [x] | [x] |
| Cart `/cart` empty + filled + qty | [x] | [x] adet 2; toplam leftover |
| About `/pages/about-us` | [x] | [x] |
| Contact form (submit yok) | [x] | [x] |
| FAQ `/pages/faqs` | [x] | [x] |
| Blog `/blogs/smoothie-blog` + Tropical Smoothies | [x] | [x] |
| 404 | [x] | [x] |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Home roster (DOM)

| # | Flow id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · mega interact |
| 3 | offers-drawer | — | 0px leftover |
| 4 | product_hero_vnext | `hero-slideshow` | reuse |
| 5 | scrolling_banner | `promo-scrolling-marquee` | reuse |
| 6 | featured grid uuid | `product-showcase-grid-featured` | reuse |
| 7 | quiz_vnext | `product-finder-quiz` | reuse · START yok |
| 8 | shoppable_videos | `media-shop-the-feed` | reuse |
| 9 | bundled_products_vnext | `commerce-tools-products-bundle` | reuse |
| 10 | layered_showcase | `editorial-layered-images` | reuse |
| 11 | 7 days overlay | `editorial-image-with-text-overlay` | reuse |
| 12 | 3 collection cards | `collection-nav-image-cards` | reuse |
| 13 | featured_product | `product-showcase-featured` | reuse |
| 14 | social_proof_vnext | `testimonial-quote-carousel` | reuse |
| 15 | 15%/30% cards | `promo-grid-banner` | reuse |
| 16 | From the blog | `blog-list-main` | reuse |
| 17 | parallax | `editorial-image-with-text-overlay` `.2` | reuse |
| 18 | footer-main | `footer-columns-newsletter` | reuse |
| 19 | footer-bottom | — | leftover copyright |

---

## Interact (pixel-checked)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | initial / open | [x] 1440 Shop mega — 3 kolon + 2 promo |
| global-predictive-search | initial / input | [x] `mango` — Avocado & Mango / Mango & Coconut |
| global-menu-drawer | open | [x] 375/768; 1440 leftover |
| global-cart-drawer | initial / filled / changed | [x] (0) → (1) $3 → (2) $6 |
| cart-page-main | initial / filled / changed | [x] adet 2; subtotal $3 leftover |
| product-info-main | initial / changed | [x] 500ml $3.00 → 330ml $2.00 |

---

## Aday / leftover

[`candidates/flow-leftovers.md`](../candidates/flow-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact mega / search / cart / menu / PDP Size / cart qty
- [x] PNG bak → stateFindings
- [x] `npm run validate`
