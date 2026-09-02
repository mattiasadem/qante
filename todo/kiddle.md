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

**Durum:** 🟡 Mod A observation yazıldı · 3vp capture + interact sırada  
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
| Home roster (header→footer) | [x] obs | [ ] capture |
| Header Shop All / Discover 1440 | [x] obs | [ ] interact |
| Predictive search host | [x] obs | [ ] interact |
| Mobile menu drawer 375/768 | [x] obs | [ ] interact |
| Cart drawer empty | [x] obs | [ ] + filled/changed |
| Quick shop modal | [x] obs | [ ] open |
| PDP `/products/128pcs-big-coloring-trunk-1` | [x] obs | [ ] Size/Color |
| PLP `/collections/all` | [x] obs | [ ] |
| Collections index `/collections` | [x] obs | [ ] |
| Search `/search?q=toy` | [x] obs | [ ] |
| Cart `/cart` empty | [x] obs | [ ] + filled/changed |
| About `/pages/about-us` | [x] obs | [ ] |
| Contact `/pages/contact` (submit yok) | [x] obs | [ ] |
| FAQ `/pages/faqs` | [x] obs | [ ] accordion |
| Blog list `/blogs/news` + article | [x] obs | [ ] |
| 404 | [x] obs | [ ] |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Home roster (DOM)

| # | Section id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | `__header` | `navigation-header-mega` | reuse · mega yok · disclosure |
| 2 | `#menu-drawer` | `global-menu-drawer` | reuse · prepareClick hamburger |
| 3 | `details-modal.header__search` | `global-predictive-search` | reuse · prepareClick Search |
| 4 | `#CartDrawer` | `global-cart-drawer` | reuse · prepareClick `#cart-icon-bubble` |
| 5 | `quick-add-modal` | `global-quick-view` | reuse · QUICK SHOP |
| 6 | `__3b7cb796…` slideshow | `hero-slideshow` | reuse · EASY STUDY |
| 7 | `__multicolumn_Fb6EtW` | `features-multicolumn` | reuse · WHY KIDDLE? |
| 8 | `__homepage_product_tab_wd7ikC` | `product-showcase-tabs` | reuse · BEST SELLER/ESSENTIALS/PLAY/SALE OFF |
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

## Interact (shopper-state) — sırada

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open 1440 | [ ] Shop All / Discover |
| global-predictive-search | input | [ ] katalogSorgu |
| global-menu-drawer | open + changed 375/768 | [ ] hamburger + Discover |
| global-cart-drawer | filled + changed | [ ] |
| cart-page-main | filled + changed | [ ] |
| product-info-main | changed | [ ] Size/Color |
| product-showcase-tabs | changed | [ ] ESSENTIALS→PLAY |
| faq-collapsible-tabs | changed | [ ] ilk soru |
| global-quick-view | open | [ ] QUICK SHOP |

Şema upgrade yok beklenir — boş↔dolu / açık↔kapalı / sekme / swatch.

---

## Aday / leftover

[`candidates/kiddle-leftovers.md`](../candidates/kiddle-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / cart / menu / PDP swatch / tabs / FAQ / QV
- [ ] PNG bak → stateFindings
- [ ] `node scripts/validate-schemas.mjs` — şema dokunulmadı
