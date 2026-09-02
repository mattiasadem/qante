# Todo — Loranica Beauty Care (Speedo Themes)

*Kaynak (yalnız resmi walk):* https://women-beauty-5.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/loranica-beauty-care-shopify-beauty-themes-shopify-2-0  
*Preset:* `default` · *Slug:* `loranica`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store resmi değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Loranica beauty care-v-1-5-0**  
`schema_name` = **Loranica beauty care** · `schema_version` = **1.5.0** · `role` = **main** · theme id `170736976174`  
`theme_store_id` = **null**  
shop `women-beauty-5.myshopify.com`  
Sayfa başlığı: **Best Shopify Loranica Beauty Care Store – Women Beauty 5 (password: 1)**

**Password:** Speedo ürün sayfası “Please enter password `1` to view demo.” Aynı host `/password` — public storefront-unlock. Başka host yok.

**Durum:** 🟡 Mod A 3vp + interact 1. tur · retry: menu forceOpen / search inner details / cart plus / featured .card__inner  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/loranica/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Unlock | `scripts/unlock-storefront.mjs` — `/password` + `1` · host `women-beauty-5.myshopify.com` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **38** |
| Parallel | yalnız `observations/loranica/`, `evidence/loranica/`, `todo/loranica.md`, `candidates/loranica-leftovers.md` + password helper |

**Kapsam satırı:**  
`Loranica · default · Loranica beauty care-v-1-5-0 / schema_name Loranica beauty care 1.5.0 · theme_store_id null · shop women-beauty-5.myshopify.com · password 1 · home→PDP lip-tint Rose gold→Pink→PLP new-arrival→collections→search cream→cart→about-us→contact→faqs→news+lazy post→404 · 38 obs · 0 yeni şema · leftover: candidates/loranica-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/hero/featured/rich-text/categories/best-selling/banners/trust/overlay/blog/footer | roster | [ ] |
| Mega 1440 | yok — hamburger all vp | leftover |
| Predictive search `cream`/`nail` | interact sırada | [ ] |
| Mobile + 1440 menu drawer | interact sırada | [ ] |
| Cart drawer empty + filled + qty | interact sırada | [ ] |
| PDP Extra Lip Tint Color Rose gold→Pink | interact sırada | [ ] |
| PLP `/collections/new-arrival` | roster | [ ] |
| Collections `/collections` | roster | [ ] |
| Search `/search?q=cream` | roster | [ ] |
| Cart `/cart` empty + filled | interact sırada | [ ] |
| About `/pages/about-us` | roster | [ ] |
| Contact `/pages/contact` (submit yok) | roster | [ ] |
| FAQ `/pages/faqs` | roster + interact | [ ] |
| Blog `/blogs/news` + lazy-skincare post | roster | [ ] |
| 404 leftover | roster | [ ] |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Home roster (DOM)

| # | Speedo / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | c46903b8 announcement swiper | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · hamburger 1440 (mega yok) |
| 3 | 3b7cb796 slideshow | `hero-slideshow` | reuse |
| 4 | featured_collection SHOP TEES | `product-showcase-grid-featured` | reuse |
| 5 | f585c67b rich-text | `editorial-rich-text` | reuse |
| 6 | 07468762 SHOP BY CATEGORY | `collection-nav-image-cards` | reuse |
| 7 | 74b4724b BEST SELLING | `product-showcase-grid-featured.2` | reuse |
| 8 | 9523e883 Nail Lacquer / Bath & Body | `promo-grid-banner` | reuse |
| 9 | 27810045 USP | `trust-icon-row` | reuse |
| 10 | c5bb1ddd 100% NATURAL SKINCARE | `editorial-image-with-text-overlay` | reuse |
| 11 | 1f806fa0 LATEST NEWS | `blog-list-main` | reuse |
| 12 | footer | `footer-columns-newsletter` | reuse |
| 13 | #CartDrawer | `global-cart-drawer` | reuse · interact |
| 14 | #menu-drawer | `global-menu-drawer` | reuse · 375/768/1440 |
| 15 | details-modal.header__search | `global-predictive-search` | reuse · interact |
| — | newsletter-popup h=0 | leftover | — |
| — | /pages/wishlist | leftover | — |

---

## Diğer şablonlar

| sayfa | URL | schemaId |
|---|---|---|
| product-detail | `/products/extra-lip-tint-balm-with-jojoba-avocado-oil-for-plump-lips` | `product-info-main` · tabs · IWT · overlay · related |
| collection | `/collections/new-arrival` | `collection-banner` · `product-showcase-grid-plp` |
| collections | `/collections` | `collection-nav-grid` |
| search | `/search?q=cream` | `search-results` |
| cart | `/cart` | `cart-page-main` |
| about-brand | `/pages/about-us` | overlay · IWT About Me · features team · overlay.2 Makeup Kit · IWT Our Work |
| contact | `/pages/contact` | overlay · features office · `lead-capture-form` |
| faq-support | `/pages/faqs` | overlay · `faq-collapsible-tabs` |
| blog-list | `/blogs/news` | `blog-list-main` |
| blog-post | `/blogs/news/lazy-skincare-routine-for-a-relaxing-weekend` | `blog-post-main` |
| not-found | `/pages/this-page-does-not-exist-qante` | `page-content-main` |

Aynı tip = şemaya dokunma, observation + delta. Yeni şema yok.

---

## Aday / leftover

[`candidates/loranica-leftovers.md`](../candidates/loranica-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact 1. tur (PDP Pink, tabs, FAQ, cart filled kanıtlı)
- [ ] Retry menu forceOpen / search fill / cart plus / featured hover
- [x] PNG bak → stateFindings (doğrulananlar)
- [ ] `node scripts/validate-schemas.mjs` — şema dokunulmadı
