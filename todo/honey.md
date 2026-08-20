# Todo — Honey (Shopify paid) · Archer Commerce · Paws

*Kaynak:* https://honey-paws-theme.myshopify.com/  
*Preset:* `paws` (Paws vitrin) · *Slug:* `honey`  
*Theme Store:* https://themes.shopify.com/themes/honey

**Durum:** Mod A walk + resmi 3vp · validate · draft PR  
**Walk URL (resmi):** https://honey-paws-theme.myshopify.com/

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/honey/paws/` |
| Capture | `scripts/capture-observation.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | `observations/honey/`, `evidence/honey/`, `todo/honey.md`, `candidates/honey-leftovers.md` |

**Kapsam satırı (bitince):**  
`Honey · paws (Paws) · home→PDP→PLP→search→cart→FAQ→contact→blog→theme-features · 46 obs · 137 PNG · 0 yeni şema · leftover: candidates/honey-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer + conversion blocks | roster + capture | [x] |
| Cart drawer empty (prepareClick) | capture viewport | [x] |
| Predictive search `dog` | capture viewport | [x] |
| Mobile menu drawer 375/768 | capture viewport | [x] |
| PDP `/products/all-in-one-grooming-kit` | roster + capture | [x] |
| PLP `/collections/all` | roster + capture | [x] |
| Search `/search?q=dog` | roster + capture | [x] |
| Cart page empty | roster + capture | [x] |
| FAQ `/pages/faq` | roster + capture | [x] |
| Contact `/pages/contact` (submit yok) | roster + capture | [x] |
| Blog list + article | roster + capture | [x] |
| Theme Features `/pages/theme-features` | roster + capture | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Sayfa haritası

| sayfa | URL |
|---|---|
| home | `/` |
| product-detail | `/products/all-in-one-grooming-kit` |
| collection | `/collections/all` |
| search | `/search?q=dog` |
| cart | `/cart` |
| faq-support | `/pages/faq` |
| contact | `/pages/contact` |
| blog-list | `/blogs/news` |
| blog-post | `/blogs/news/the-healthiest-foods-for-your-cat` |
| about-brand | `/pages/theme-features` |

Aynı tip = şemaya dokunma, observation + delta. Yeni şema yalnızca kanıtsız tip.

---

## Home roster (DOM)

| # | Honey / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | — | leftover 0px gizli |
| 2 | header | `navigation-header-mega` | reuse |
| 3 | cd23bce3 hero | `hero-slideshow` | reuse |
| 4 | logo_banner | `social-proof-brand-logos` | reuse |
| 5 | collage | `editorial-dynamic-grid` | reuse |
| 6 | multicolor-cards | `collection-nav-image-cards` | reuse |
| 7 | media-grid | `editorial-dynamic-grid.2` | reuse · bento |
| 8 | media-with-text | `editorial-image-with-text` | reuse |
| 9 | shop-the-look | `media-lookbook-banner` | reuse |
| 10 | testimonials | `testimonial-quote-carousel` | reuse |
| 11 | feature-cards | `features-multicolumn` | reuse |
| 12 | 94c99646 SHOP BY PET | `collection-nav-image-cards.2` | reuse |
| 13 | checklist | `trust-icon-row` | reuse |
| 14 | featured-product | `product-showcase-featured` | reuse |
| 15 | 186b366b gifts | `editorial-image-with-text-overlay` | reuse |
| 16 | featured_collection | `product-showcase-grid-featured` | reuse |
| 17 | b30f67f4 countdown | `promo-banner-countdown` | reuse |
| 18 | before_after | `before-after-slider` | reuse |
| 19 | 5a3a15b3 sale 50% | `promo-grid-banner` | reuse |
| 20 | collection_list | `collection-nav-grid` | reuse |
| 21 | featured-shops | `collection-nav-image-cards.3` | reuse |
| 22 | f86bb395 quote | `testimonial-quote-carousel.2` | reuse · tek kart |
| 23 | social-media-banner | `promo-grid-banner.2` | reuse · Instagram |
| 24 | video-column | `media-video-hero` | reuse |
| 25 | FAQ | `faq-collapsible-tabs` | reuse · home inline |
| 26 | 50a2cf5a visit us | `editorial-rich-text` | reuse |
| 27 | multicolumn-banner | `features-multicolumn.2` | reuse |
| 28 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 29 | 7d63fab8 footer app | `lead-capture-newsletter-band` | reuse |
| 30 | sub-footer | — | leftover · ödeme/dil |
| 31 | cart-drawer | `global-cart-drawer` | reuse · prepareClick |
| 32 | search modal | `global-predictive-search` | reuse |
| 33 | menu-drawer | `global-menu-drawer` | reuse · mobil |

---

## PDP roster

| Honey / id | schemaId | Not |
|---|---|---|
| product-information | `product-info-main` | grooming kit |
| product-content | `product-info-tabs` | tabs |
| 17137985669a3a7dbb | — | leftover reviews app 20px |
| product-recommendations | `product-showcase-related` | reuse |
| d2ecda70 hero | `hero-slideshow.2` | reuse |

---

## Aday / şemaya sığmayan

→ [`candidates/honey-leftovers.md`](../candidates/honey-leftovers.md)

---

## Evidence backlog

- [x] Mod A walk + 3vp capture batch
- [x] validate clean
- [x] draft PR
