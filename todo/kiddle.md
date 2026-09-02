# Todo — Kiddle (Speedo Themes) · default

*Kaynak (resmi walk URL):* https://toyon-toys-3.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/kiddle-best-shopify-kids-themes-for-toy-store-os-2-0  
*Preset:* `default` · *Slug:* `kiddle`  
*Vendor:* Speedo Themes (üçüncü taraf Shopify 2.0; Theme Store resmi değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Kiddle-v-1-5-0**  
`schema_name` = **Kiddle** · `schema_version` = **1.5.0** · `role` = **main** · theme id `143929966812`  
`theme_store_id` = **null**  
`Shopify.shop` = `toyon-toys-3.myshopify.com` · locale `en` · country `US` · currency `USD`  
Storefront password (ürün sayfasında yayınlı): **`1`** — aynı host, başka demo uydurulmadı.

**Durum:** ✅ Mod A + interact — 43 obs · ~161 PNG · 0 yeni şema  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/kiddle/default/` |
| Capture | `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` · `unlock-storefront.mjs` (`storefrontPassword: "1"`) |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **43** |
| Parallel | yalnız `observations/kiddle/`, `evidence/kiddle/`, `todo/kiddle.md`, `candidates/kiddle-leftovers.md`, unlock host satırı |

**Kapsam satırı:**  
`Kiddle · default · Kiddle-v-1-5-0 / schema_name Kiddle 1.5.0 / theme_store_id null · toyon-toys-3 · password 1 (vendor) · home→PDP 128pcs-big-coloring-trunk-1 Size/Color→PLP /collections/all→/collections→search toy→cart→about/contact/faqs→news+post→404 · 43 obs · 0 yeni şema · leftover: candidates/kiddle-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (header→footer) | [x] obs | [x] capture |
| Header Shop All / Discover 1440 | [x] obs | [x] Shop All mega |
| Predictive search host | [x] obs | [x] rainbow input |
| Mobile menu drawer 375/768 | [x] obs | [x] missingStates |
| Cart drawer empty | [x] obs | [x] filled + changed |
| Quick shop modal | [x] obs | [x] missingStates |
| PDP `/products/128pcs-big-coloring-trunk-1` | [x] obs | [x] Color Red |
| PLP `/collections/all` | [x] obs | [x] |
| Collections index `/collections` | [x] obs | [x] |
| Search `/search?q=toy` | [x] obs | [x] |
| Cart `/cart` empty | [x] obs | [x] filled + changed |
| About `/pages/about-us` | [x] obs | [x] |
| Contact `/pages/contact` (submit yok) | [x] obs | [x] |
| FAQ `/pages/faqs` | [x] obs | [x] ilk soru |
| Blog list `/blogs/news` + article | [x] obs | [x] |
| 404 | [x] obs | [x] |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Home roster (DOM)

| # | Section id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | `__header` | `navigation-header-mega` | reuse · Shop All mega 1440 |
| 2 | `#menu-drawer` | `global-menu-drawer` | reuse · open/changed missingStates |
| 3 | `details-modal.header__search` | `global-predictive-search` | reuse · rainbow |
| 4 | `#CartDrawer` | `global-cart-drawer` | reuse · $79 → $158 |
| 5 | `quick-add-modal` | `global-quick-view` | reuse · open missingStates |
| 6 | `__3b7cb796…` slideshow | `hero-slideshow` | reuse · EASY STUDY |
| 7 | `__multicolumn_Fb6EtW` | `features-multicolumn` | reuse · WHY KIDDLE? |
| 8 | `__homepage_product_tab_wd7ikC` | `product-showcase-tabs` | reuse · PLAY missingStates |
| 9 | `__section_sub_banner_CGUyed` | `promo-grid-banner` | reuse · 2 kolon |
| 10 | `__image_with_text_list_UApkzV` | `editorial-image-with-text` | reuse · IGNITE THE JOY |
| 11 | `__0617c2f2…` featured | `product-showcase-grid-featured` | reuse · FEATURE PRODUCT |
| 12 | `__customer_reviews_rtWW49` | `testimonial-quote-carousel` | reuse |
| 13 | `__featured_blogs_UmrhYq` | `blog-list-main` | reuse |
| 14 | `__multicolumn_brands_7R4VVE` | `social-proof-brand-logos` | reuse |
| 15 | `__instagram_feed_6hxpnf` | `media-shop-the-feed` | reuse · @KIDDLE · hotspot yok |
| 16 | `__newsletter_GHKMfE` | `lead-capture-newsletter-band` | reuse · submit yok |
| 17 | `__footer` | `footer-columns-newsletter` | reuse |
| — | `newsletter-popup` h=0 | — | leftover social-proof popup |
| — | announcement | — | yok |

---

## Interact (shopper-state)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open 1440 | [x] 6 koleksiyon karesi |
| global-predictive-search | input | [x] rainbow · 2 ürün |
| global-menu-drawer | open + changed 375/768 | [x] missingStates — menu-opening |
| global-cart-drawer | filled + changed | [x] $79 → $158 · 1440 YOU MAY LIKE modal |
| cart-page-main | filled + changed | [x] $79 → $158 |
| product-info-main | changed | [x] Color Blue → Red · $79 aynı |
| product-showcase-tabs | changed | [x] missingStates — PLAY tık ESSENTIALS |
| faq-collapsible-tabs | changed | [x] ilk soru açık |
| global-quick-view | open | [x] missingStates — modal[open] yok |

Şema upgrade yok — boş↔dolu / açık↔kapalı / swatch. Kanıtsız slot yok.

---

## Aday / leftover

[`candidates/kiddle-leftovers.md`](../candidates/kiddle-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact mega / search / cart / PDP swatch / FAQ; menu / tabs / QV missingStates
- [x] PNG bak → stateFindings
- [x] `node scripts/validate-schemas.mjs` — şema dokunulmadı
