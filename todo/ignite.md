# Todo — Ignite (Benchmark, Shopify paid)

*Kaynak:* https://benchmark-electronics-demo.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/ignite  
*Preset:* `default` · Electronics / Ignite Tech demo  
*Slug:* `ignite`  
*70-list:* **#63** — resmi Benchmark Electronics demo (public, no password)

*Tema (vitrinde görülen, uydurulmadı):* `Shopify.theme.name` **DEV - DO NOT EDIT** · `id` `129323303010` · `schema_name` **Ignite** · `schema_version` **2.6.1** · `theme_store_id` **null** · `role` `main`  
*Walk host:* `benchmark-electronics-demo.myshopify.com`

**Durum:** Mod A walk + resmi 3vp · validate clean  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/ignite/default/` |
| Capture | resmi `scripts/capture-observation.mjs` |
| Şema | **0 yeni** |
| Observation | **64** |
| Evidence PNG | **191** |
| Parallel | yalnız `observations/ignite/`, `evidence/ignite/`, `todo/ignite.md`, `candidates/ignite-leftovers.md` |

**Kapsam satırı:**  
`Ignite · default · DEV DO NOT EDIT / schema_name Ignite 2.6.1 · theme_store_id null · home→PDP pixa-9→PLP phones→collections→search headphone→cart→blog Grapevine→footer · 64 obs · 191 PNG · 0 yeni şema · leftover: candidates/ignite-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home sections + announcement/hero/featured/video/compare/hotspots/reel/tabs/footer | [x] | [x] |
| Global menu drawer 375+768 | [x] | [x] 2vp (1440 N/A) |
| Predictive search `headphone` | [x] | [x] |
| Cart drawer empty | [x] | [x] |
| PDP `/products/pixa-9` | [x] | [x] |
| PLP `/collections/phones` | [x] | [x] |
| Collections index `/collections` | [x] | [x] |
| Search `/search?q=headphone` | [x] | [x] |
| Cart `/cart` empty + upsell | [x] | [x] |
| Blog list `/blogs/news` (Grapevine) | [x] | [x] |
| Blog post versatile laptops | [x] | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Bileşen roster (64 obs · 0 yeni şema)

| sayfa | obs | schemaId örnekleri |
|---|---|---|
| home | 30 | promo-announcement-bar · navigation-header-mega · hero-slideshow · … · global-cart-drawer · footer-columns-newsletter |
| product-detail | 16 | product-info-main · faq-collapsible-tabs · editorial-* · trust-icon-row |
| collection | 6 | collection-banner · product-showcase-grid-plp · comparison-quick-table |
| collections | 2 | collection-nav-grid · navigation-breadcrumbs |
| search | 1 | search-results |
| cart | 2 | cart-page-main · product-showcase-grid-featured |
| blog-list | 4 | blog-list-main · editorial-image-with-text · product-showcase-grid-featured |
| blog-post | 3 | blog-post-main · navigation-breadcrumbs · product-showcase-grid-featured |

Gizli tab banner `#…__image_banner_JyNFje` → observation yok (leftover). Detay: `observations/ignite/default/`

---

## Aday / leftover

[`candidates/ignite-leftovers.md`](../candidates/ignite-leftovers.md)

---

## Stop kuralları

Checkout · account login · newsletter/contact submit · PII · gerçek ödeme yok.
