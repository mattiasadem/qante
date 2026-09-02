# Todo — Saffron (Speedo Themes · Midnight Perfume)

*Kaynak (resmi walk ONLY):* https://midnight-perfume.myshopify.com/  
*Password:* vendor-published storefront `1` (Speedo product page). Aynı host.  
*Preset:* `default` · *Slug:* `saffron`  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/midnight-perfume-shopify-perfume-themes-os-2-0  

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Midnight-perfume V-1.5.0**  
`schema_name` = **midnight_perfume** · `schema_version` = **1.5.0** · `role` = **main** · theme id `171347706169`  
`theme_store_id` = **null** (üçüncü taraf; Shopify Theme Store resmi değil)  
shop `midnight-perfume.myshopify.com`  
Sayfa başlığı: **Saffron Perfume - Shopify Perfume Themes**

**Durum:** Mod A walk + resmi 3vp + interact (nav/search/cart/PDP/FAQ)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/saffron/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `capture-interaction.mjs` |
| Unlock | `scripts/unlock-storefront.mjs` — `/password` + `1` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/saffron/`, `evidence/saffron/`, `todo/saffron.md`, `candidates/saffron-leftovers.md`, capture unlock helper |
| Observation | **39** (hedef) |

**Kapsam satırı (bitince):**  
`Saffron · default · Midnight-perfume V-1.5.0 / schema_name midnight_perfume 1.5.0 · theme_store_id null · Speedo third-party · password 1 · home→PDP Jasmine→PLP best-seller→search perfume→cart→our-story/contact/faqs→blog→footer · 39 obs · 0 yeni şema · leftover: candidates/saffron-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer + conversion | roster | [ ] |
| Mega Shop 1440 | interact | [ ] |
| Predictive search `jasmine` | interact 3vp | [ ] |
| Mobile menu 375 | interact | [ ] |
| Mobile menu 768 | interact | [ ] |
| Cart drawer empty + filled + qty | interact 3vp | [ ] |
| PDP Jasmine Size 50ml→100ml | interact 3vp | [ ] |
| PLP `/collections/best-seller` | roster | [ ] |
| Search `/search?q=perfume` (21) | roster | [ ] |
| Cart page empty + filled + qty | interact 3vp | [ ] |
| Our Story `/pages/our-story` | roster | [ ] |
| Contact `/pages/contact` (submit yok) | roster | [ ] |
| FAQ `/pages/faqs` | roster + interact | [ ] |
| Blog `/blogs/news` + Ut enim… | roster | [ ] |
| 404 leftover | leftover | — |
| Policy pages (no main section) | leftover | — |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Speedo / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | header-group `b0b94611` ticker | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · interact |
| 3 | announcement-bar-section `8ad69381` | `promo-announcement-bar.2` | reuse |
| 4 | slide-show `8c77ee53` | `hero-slideshow` | reuse |
| 5 | `bd1f6a88` Welcome | `editorial-rich-text` | reuse |
| 6 | featured_collection | `product-showcase-grid-featured` | reuse · QuickAdd leftover |
| 7 | `cc09d110` quote | `editorial-image-with-text-overlay` | reuse |
| 8 | section-collection-list `1740af2e` | `collection-nav-grid` | reuse |
| 9 | `4c3d8f88` Maria | `editorial-image-with-text` | reuse |
| 10 | `a5bd3b43` Latest Blog | `blog-list-main` | reuse |
| 11 | `d835426e` testimonials | `testimonial-quote-carousel` | reuse |
| 12 | newsletter-section | `lead-capture-newsletter-band` | reuse · submit yok |
| 13 | `fe3efae2` FAQ | `faq-collapsible-tabs` | reuse · interact |
| 14 | `627eb6c8` multicolumn | `features-multicolumn` | reuse |
| 15 | `09bbe40a` @saffronperfumes | `media-scrolling-gallery` | reuse |
| 16 | footer | `footer-columns-newsletter` | reuse |
| 17 | CartDrawer | `global-cart-drawer` | reuse · interact |
| 18 | details-modal.header__search | `global-predictive-search` | reuse · interact |
| 19 | #menu-drawer | `global-menu-drawer` | reuse · interact |
| — | newsletter-popup h=0 | leftover PII | — |
| — | QuickAdd-* | leftover | — |

---

## Diğer şablonlar

| sayfa | URL | schemaId |
|---|---|---|
| product-detail | `/products/jasmine-and-ambretta-floral-fragrance-for-women` | `product-info-main` · `features-multicolumn` · `editorial-image-with-text` · `product-showcase-related` |
| collection | `/collections/best-seller` | `collection-banner` · `product-showcase-grid-plp` |
| search | `/search?q=perfume` | `search-results` |
| cart | `/cart` | `cart-page-main` · `product-showcase-grid-featured` |
| contact | `/pages/contact` | `page-content-main` · `editorial-image-with-text` · `lead-capture-form` |
| faq-support | `/pages/faqs` | `page-content-main` · `faq-collapsible-tabs` |
| about-brand | `/pages/our-story` | `page-content-main` · IWT ×3 |
| blog-list | `/blogs/news` | `blog-list-main` |
| blog-post | `/blogs/news/ut-enim-ad-minim-veniam-…` | `blog-post-main` |

Aynı tip = şemaya dokunma, observation + delta. Yeni şema yok.

---

## Aday / leftover

[`candidates/saffron-leftovers.md`](../candidates/saffron-leftovers.md)
