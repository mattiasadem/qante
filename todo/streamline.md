# Todo — Streamline (Archetype · Core preset)

*Kaynak (yalnız resmi walk):* https://streamline-theme-core.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/streamline  
*Preset klasör:* `core` · slug `streamline`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Streamline v6.6.1 final published**  
`schema_name` = **Streamline** · `schema_version` = **6.6.1** · `role` = **main** · theme id `127083937874`  
`theme_store_id` = **null** (canlı Core vitrinde yok)  
Walk host `streamline-theme-core.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + validate **bitti** (0 error)  
**PR:** draft (bu branch) · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/streamline/core/` |
| Capture | resmi `scripts/capture-observation.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **36** |
| PNG | **108** |
| Parallel | yalnız `observations/streamline/`, `evidence/streamline/`, `todo/streamline.md`, `candidates/streamline-leftovers.md` |

**Kapsam satırı:**  
`Streamline · core · Streamline v6.6.1 final published / schema_name Streamline 6.6.1 · theme_store_id null · shop streamline-theme-core.myshopify.com · home→PDP Bolt Legging Grey→PLP leggings→search shirt→cart empty→blog news+spring-summer post→footer · 36 obs · 108 PNG · 0 yeni şema · leftover: candidates/streamline-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [x] capture |
| Header `.header-wrapper` overlay | [x] obs | [x] capture |
| Predictive search `shirt` (1440 ikon; 375/768 SlideNav) | [x] obs | [x] capture |
| Mobile slide nav 375/768 (+ 1440 force-open) | [x] obs | [x] capture |
| Cart page empty + Popular picks | [x] obs | [x] capture |
| Cart drawer | ⛔ yok | — (sticky cart bar leftover) |
| PDP Bolt Legging Grey | [x] obs | [x] capture |
| PLP `/collections/leggings` | [x] obs | [x] capture |
| Search `/search?q=shirt` | [x] obs | [x] capture |
| Blog list `/blogs/news` | [x] obs | [x] capture |
| Blog post `/blogs/news/spring-summer-2021` | [x] obs | [x] capture |
| Footer newsletter (submit yok) | [x] obs | [x] capture |

---

## Home roster (DOM)

| # | Streamline / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | header-section | `navigation-header-mega` | reuse · `.header-wrapper` · dropdown nav |
| 3 | video-section hero | `media-video-hero` | reuse |
| 4 | Black Friday countdown | `promo-banner-countdown` | reuse |
| 5 | featured-collection Leggings | `product-showcase-grid-featured` | reuse |
| 6 | hotspots-section | `media-lookbook-banner` | reuse · tek hotspot |
| 7 | hero-animated | `hero-slideshow` | reuse · delta animated promo |
| 8 | featured-collection Tops | `product-showcase-grid-featured.2` | reuse |
| 9 | Our story | `editorial-image-with-text` | reuse |
| 10 | featured-collection Clearance | `product-showcase-grid-featured.3` | reuse |
| 11 | scrolling-text | `promo-scrolling-marquee` | reuse |
| 12 | slideshow-section | `hero-slideshow.2` | reuse |
| 13 | article grid | `blog-list-main` | reuse · home'da 3 makale |
| 14 | skrim-grid Shop all | `collection-nav-image-cards` | reuse |
| 15 | footer-section | `footer-columns-newsletter` | reuse |
| 16 | SearchModal | `global-predictive-search` | reuse |
| 17 | SlideNav | `global-menu-drawer` | reuse |

---

## Diğer sayfalar

| Sayfa | schemaId | Not |
|---|---|---|
| PDP | product-info-main, promo-banner-countdown, features-multicolumn, promo-scrolling-marquee, media-video-hero, product-showcase-related, navigation-breadcrumbs, before-after-slider, editorial-rich-text | image-comparison 500px |
| collection | collection-banner, product-showcase-grid-plp, promo-banner-countdown | filtre sibling leftover |
| search | search-results | shirt → Stadium Tee |
| cart | cart-page-main, product-showcase-grid-featured | drawer yok |
| blog-list | promo-banner-countdown, blog-list-main | Lookbooks |
| blog-post | blog-post-main, blog-list-main.2 | related posts |

---

## Validator

```bash
npm run validate   # 0 error · 0 warn (şema)
```

---

## Açık soru

- Core preset'te `#CartDrawer` DOM'da yok — sticky cart bar mı varsayılan? (leftover)
- `hero-animated` ayrı schemaId adayı mı yoksa `hero-slideshow` delta yeterli mi?
