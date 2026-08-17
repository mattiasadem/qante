# Todo — Origin (Shopify first-party, free)

*Kaynak:* https://theme-origin-demo.myshopify.com  
*Preset:* `default` · Slug: `origin`

*Tema (vitrinde görülen, uydurulmadı):* `Shopify.theme.name` **[Origin] Theme Store demo (latest)** · `id` `168342061078` · `schema_name` **Origin** · `schema_version` **15.1.0** · `theme_store_id` **1841** · `role` `main` · shop `theme-origin-demo.myshopify.com`

**Beklenen vs canlı:** kullanıcı 2291 dedi; canlı `theme_store_id` **1841**. 2291 uydurulmadı.

**Şu anki odak:** Mod A walk + resmi 3vp + interact (search / cart / PDP renk)

**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/origin/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/origin/`, `evidence/origin/`, `todo/origin.md`, `candidates/origin-*.md` |

**Kapsam satırı (bitince güncelle):**  
`Origin · default · [Origin] Theme Store demo (latest) / Origin 15.1.0 · theme_store_id 1841 (beklenen 2291 değil) · home→PDP→PLP→search→cart/drawer→contact→shipping→blog→404 leftover · N obs · 0 yeni şema`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer/newsletter | [ ] | [ ] |
| Mega | ⛔ yok | — |
| Predictive search | [ ] 1440 opener | [ ] 375/768 opener 0×0 leftover |
| Cart drawer empty/filled/qty | [ ] | [ ] |
| Mobile menu | ⛔ hamburger yok | leftover |
| PDP `/products/2unfold-bag-copy` + Color changed | [ ] | [ ] |
| PLP `/collections/all` | [ ] | [ ] |
| Collections list `/collections` | [ ] | [ ] |
| Search `?q=bag` | [ ] | [ ] |
| Cart `/cart` boş + dolu | [ ] | [ ] |
| Contact `/pages/about` + form (gönderilmedi) | [ ] | [ ] |
| Shipping `/pages/shipping-and-returns` | [ ] | [ ] |
| Blog `/blogs/news` + Only for the brave | [ ] | [ ] |
| 404 leftover | [ ] | [ ] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM → QANTE)

| # | Origin section | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · mega/hamburger yok |
| 3 | rich-text (100px boş) | — | leftover |
| 4 | featured-product | `product-showcase-featured` | reuse |
| 5 | image-banner (split) | `editorial-image-with-text-overlay` | reuse · metin yok |
| 6 | image_banner_hqw89f | `editorial-image-with-text-overlay.2` | reuse |
| 7 | image_banner_pwaDjJ | `editorial-image-with-text-overlay.3` | reuse |
| 8 | rich-text-1 Reviews | `editorial-rich-text` | reuse |
| 9 | multicolumn quotes | `testimonial-quote-carousel` | reuse · statik 3 kolon |
| 10 | rich_text Journal | `editorial-rich-text.2` | reuse |
| 11 | featured_blog | `blog-list-main` | reuse |
| 12 | rich_text Story | `editorial-rich-text.3` | reuse |
| 13 | collage | `media-mosaic-grid` | reuse · 1 görsel |
| 14 | multicolumn_6jnAyE | `features-multicolumn` | reuse |
| 15 | multicolumn_zePfd8 | `features-multicolumn.2` | reuse |
| 16 | newsletter_tLLgmr | `lead-capture-newsletter-band` | reuse · submit yok |
| 17 | footer | `footer-columns-newsletter` | reuse |
| 18 | cart-drawer | `global-cart-drawer` | reuse · interact |
| 19 | predictive-search | `global-predictive-search` | reuse · 1440 |

---

## Bileşen checklist

| # | Bileşen / id | sayfa | Screenshot | JSON | Done |
|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | reuse | [ ] |
| 3 | product-showcase-featured | home | [ ] | reuse | [ ] |
| 4–6 | editorial-image-with-text-overlay ×3 | home | [ ] | reuse | [ ] |
| 7–9 | editorial-rich-text ×3 | home | [ ] | reuse | [ ] |
| 10 | testimonial-quote-carousel | home | [ ] | reuse | [ ] |
| 11 | blog-list-main | home | [ ] | reuse | [ ] |
| 12 | media-mosaic-grid | home | [ ] | reuse | [ ] |
| 13–14 | features-multicolumn ×2 | home | [ ] | reuse | [ ] |
| 15 | lead-capture-newsletter-band | home | [ ] | reuse | [ ] |
| 16 | footer-columns-newsletter | home | [ ] | reuse | [ ] |
| 17 | global-cart-drawer | home | [ ] | reuse | [ ] |
| 18 | global-predictive-search | home | [ ] | reuse | [ ] |
| 19 | product-info-main | product-detail | [ ] | reuse | [ ] |
| 20 | collection-banner | collection | [ ] | reuse | [ ] |
| 21 | product-showcase-grid-plp | collection | [ ] | reuse | [ ] |
| 22 | collection-nav-grid | collections | [ ] | reuse | [ ] |
| 23 | search-results | search | [ ] | reuse | [ ] |
| 24 | cart-page-main | cart | [ ] | reuse | [ ] |
| 25 | page-content-main | contact | [ ] | reuse | [ ] |
| 26 | lead-capture-form | contact | [ ] | reuse | [ ] |
| 27 | page-content-main | shipping | [ ] | reuse | [ ] |
| 28 | blog-list-main | blog-list | [ ] | reuse | [ ] |
| 29 | blog-post-main | blog-post | [ ] | reuse | [ ] |
| 30 | blog-list-main | blog-post | [ ] | reuse | [ ] |
| 31 | page-content-main | not-found | [ ] | reuse | [ ] |

---

## Interact

| Bileşen | State | Not |
|---|---|---|
| mega | ⛔ | yok |
| mobile menu | ⛔ | hamburger yok |
| global-predictive-search | open/input | 1440 `bag`; 375/768 opener yok |
| global-cart-drawer | empty/filled/qty | 2Unfold Bag |
| product-info-main | changed | Color Brown → Gray |
| cart-page-main | empty/filled | `/cart` |

---

## Aday / şemaya sığmayan

- [`candidates/origin-leftovers.md`](../candidates/origin-leftovers.md)

---

## Evidence backlog

- [ ] Home static 3vp
- [ ] PDP / PLP / search / collections 3vp
- [ ] Content (contact, shipping, blog, 404) 3vp
- [ ] Drawer / search / PDP renk / cart filled
