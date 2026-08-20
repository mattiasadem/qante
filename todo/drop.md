# Todo — Drop (We are Underground, Shopify paid)

*Kaynak:* https://drop-theme-reveal.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/drop  
*Preset:* `default` · Reveal — resmi Theme Store walk (drop-theme-reveal; Unveil/Flash kullanılmadı)  
*Slug:* `drop`  
*70-list:* **#62**

*Tema (vitrinde görülen, uydurulmadı):* `Shopify.theme.name` **drop-update-v5-3-0** · `id` **153563627657** · `schema_name` **Drop** · `schema_version` **5.3.0** · `theme_store_id` **null** · `role` `main`  
*Walk host:* `drop-theme-reveal.myshopify.com`

**Beklenen vs canlı:** Theme Store listing We are Underground Drop $180. Canlı demo **Drop 5.3.0** ve `theme_store_id` **null**. null yazıldı; ID uydurulmadı.

**Durum:** Mod A walk + resmi 3vp + validate temiz  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/drop/default/` |
| Capture | resmi `scripts/capture-observation.mjs` |
| Şema | **0 yeni** |
| Observation | **58** |
| Evidence PNG | **174** |
| Parallel | yalnız `observations/drop/`, `evidence/drop/`, `todo/drop.md`, `candidates/drop-leftovers.md` |

**Kapsam satırı:**  
`Drop · default · drop-update-v5-3-0 / schema_name Drop 5.3.0 · theme_store_id null · home→PDP flatpak-toiletry-bottle→PLP bags→search bag→cart/drawer→about→contact→blog tales-from-the-road→footer · 58 obs · 174 PNG · 0 yeni şema · leftover: candidates/drop-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster | [x] |
| Cart drawer empty (slideout) | capture | [x] |
| Mobile menu drawer 375+768+1440 | capture | [x] |
| Predictive search overlay `bag` | capture | [x] |
| PDP `/products/flatpak-toiletry-bottle` | roster | [x] |
| PLP `/collections/bags` | roster | [x] |
| Search `/search?q=bag` | roster | [x] |
| Cart `/cart` empty | roster | [x] |
| About `/pages/about` | roster | [x] |
| Contact form (submit yok) | roster | [x] |
| Blog `/blogs/tales-from-the-road` | roster | [x] |
| Blog post Discovering the Andes | roster | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Bileşen roster

58 observation · 0 yeni şema · 174 PNG (58×3).

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | 3 satır döngü | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | SHOP mega · union selector | reuse | [x] |
| 3 | hero-slideshow | home | [x] | image_gallery hero | reuse | [x] |
| 4 | editorial-rich-text | home | [x] | SEE WHAT'S TRENDING | reuse | [x] |
| 5 | product-showcase-grid-featured | home | [x] | collection_slider trending | reuse | [x] |
| 6 | features-multicolumn | home | [x] | GREAT DEALS UNDER $20 | reuse | [x] |
| 7 | collection-nav-grid | home | [x] | POPULAR COLLECTIONS | reuse | [x] |
| 8 | editorial-rich-text.2 | home | [x] | SPACE SAVING ESSENTIALS | reuse | [x] |
| 9 | product-showcase-grid-featured.2 | home | [x] | collection_slider 2 | reuse | [x] |
| 10 | product-showcase-featured | home | [x] | SPOTLIGHT: BAGS | reuse | [x] |
| 11 | promo-grid-banner | home | [x] | GlobeRider45 grid | reuse | [x] |
| 12 | features-multicolumn.2 | home | [x] | showcase_columns | reuse | [x] |
| 13 | editorial-image-with-text-overlay | home | [x] | FOR THE TRAVELLERS | reuse | [x] |
| 14 | media-lookbook-slider | home | [x] | shop_the_look GEAR FOCUS | reuse | [x] |
| 15 | before-after-slider | home | [x] | FlatPak before/after | reuse | [x] |
| 16 | testimonial-quote-carousel | home | [x] | Gear Junkie quote | reuse | [x] |
| 17 | media-video-hero | home | [x] | background-video | reuse | [x] |
| 18 | blog-list-main | home | [x] | featured-blog TALES | reuse | [x] |
| 19 | social-proof-brand-logos | home | [x] | FEATURED IN | reuse | [x] |
| 20 | footer-columns-newsletter | home | [x] | WHERE TO BUY footer | reuse | [x] |
| 21 | global-cart-drawer | home | [x] | slideout-ajax-cart boş | reuse | [x] |
| 22 | global-menu-drawer | home | [x] | slideout-mobile-navigation | reuse | [x] |
| 23 | global-predictive-search | home | [x] | searchbox q=bag | reuse | [x] |
| 24 | collection-nav-tabs | product-detail | [x] | linklist sekmeler | reuse | [x] |
| 25 | product-info-main | product-detail | [x] | FlatPak $14 ATC | reuse | [x] |
| 26 | product-info-tabs | product-detail | [x] | The Details tablo | reuse | [x] |
| 27 | editorial-image-with-text | product-detail | [x] | UP CLOSE | reuse | [x] |
| 28 | features-multicolumn | product-detail | [x] | editorial_columns | reuse | [x] |
| 29 | media-video-hero | product-detail | [x] | video embed | reuse | [x] |
| 30 | product-showcase-related | product-detail | [x] | complete_the_look | reuse | [x] |
| 31 | product-showcase-related.2 | product-detail | [x] | YOU MIGHT LIKE | reuse | [x] |
| 32 | collection-nav-grid | product-detail | [x] | EXPLORE COLLECTIONS | reuse | [x] |
| 33 | editorial-image-with-text-overlay | product-detail | [x] | Pack with Purpose | reuse | [x] |
| 34 | product-showcase-grid-featured | product-detail | [x] | SHOP THE LATEST | reuse | [x] |
| 35 | lead-capture-newsletter-band | product-detail | [x] | SUBSCRIBE submit yok | reuse | [x] |
| 36 | collection-banner | collection | [x] | Bags hero | reuse | [x] |
| 37 | collection-nav-tabs | collection | [x] | PLP linklist | reuse | [x] |
| 38 | product-showcase-grid-plp | collection | [x] | 27 Items facet grid | reuse | [x] |
| 39 | collection-nav-grid.2 | collection | [x] | alt COLLECTIONS grid | reuse | [x] |
| 40 | editorial-rich-text | search | [x] | Search results banner | reuse | [x] |
| 41 | search-results | search | [x] | 42 results bag | reuse | [x] |
| 42 | editorial-rich-text | cart | [x] | Your Bag banner | reuse | [x] |
| 43 | cart-page-main | cart | [x] | empty cart | reuse | [x] |
| 44 | product-showcase-grid-featured | cart | [x] | NEWEST ARRIVALS upsell | reuse | [x] |
| 45 | editorial-rich-text | blog-list | [x] | Tales banner | reuse | [x] |
| 46 | blog-list-main | blog-list | [x] | article grid | reuse | [x] |
| 47 | product-showcase-grid-featured | blog-list | [x] | OVERLAND products | reuse | [x] |
| 48 | blog-post-main | blog-post | [x] | article body | reuse | [x] |
| 49 | product-showcase-grid-featured | blog-post | [x] | FOR THE EXPLORER | reuse | [x] |
| 50 | editorial-rich-text | about-brand | [x] | About banner | reuse | [x] |
| 51 | editorial-rich-text.2 | about-brand | [x] | Exploration DNA | reuse | [x] |
| 52 | media-video-hero | about-brand | [x] | full-width media | reuse | [x] |
| 53 | editorial-rich-text.3 | about-brand | [x] | TAKE RISKS | reuse | [x] |
| 54 | editorial-image-with-text | about-brand | [x] | Gear for Adventure | reuse | [x] |
| 55 | editorial-image-with-text.2 | about-brand | [x] | For Explorers | reuse | [x] |
| 56 | editorial-rich-text.4 | about-brand | [x] | Matador note | reuse | [x] |
| 57 | editorial-rich-text | contact | [x] | Contact banner | reuse | [x] |
| 58 | lead-capture-form | contact | [x] | form submit yok | reuse | [x] |

---

## Validator

```bash
npm run validate
# 65 şema · 0 error · 0 warn · validate-apps OK
```
