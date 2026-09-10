# Todo — Photo Camera (Speedo Themes)

*Kaynak (yalnız resmi walk):* https://photography-online-store.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/photo-camera-best-camera-store-shopify-2-0-theme  
*Preset klasör:* `default` · slug `photo-camera`  
*Vendor:* Speedo Themes (üçüncü taraf Shopify 2.0; Theme Store resmi değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Photo-camera-v-1-5-0-latest-updates-new**  
`schema_name` = **Photo camera** · `schema_version` = **1.5.0** · `role` = **main** · theme id `168518320375`  
`theme_store_id` = **null** (canlıda yok; Theme Store id uydurulmadı)  
`handle` = `"null"` · `style.id` / `style.handle` = **null**  
Walk host = `Shopify.shop` = **photography-online-store.myshopify.com**  
`/` **302** → `/password` · title `Photo Camera - Best Camera Store – photography-online-store`  
Public storefront-unlock `1` (Speedo ürün sayfası) — başka host yok.

**Durum:** ✅ Mod A walk + 3vp + interact  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/photo-camera/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **48** |
| PNG | **200** (143 static + 57 interact) |
| Parallel | yalnız `observations/photo-camera/`, `evidence/photo-camera/`, `todo/photo-camera.md`, `candidates/photo-camera-leftovers.md` + unlock host satırı |

**Kapsam satırı:**  
`Photo Camera · default · Photo-camera-v-1-5-0-latest-updates-new / schema_name Photo camera 1.5.0 · theme_store_id null · shop photography-online-store.myshopify.com · password 1 · home→PDP melcam-hd-digital-camera→PLP accessories→/collections→search camera→cart empty/filled→about-us+our-story→contact→faq→news+article→404 · 48 obs · 200 PNG · 0 yeni şema · leftover: candidates/photo-camera-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announce→footer) + overlays | done | [x] capture |
| SHOP mega 1440 | done | [x] interact |
| Predictive search `camera` | done | [x] interact |
| Mobile hamburger 375+768 | done | [x] interact |
| Cart drawer empty + filled + qty | done | [x] interact |
| PDP Color Black→Powder Blue | done | [x] interact |
| PLP `/collections/accessories` + Color Black | done | [x] capture + interact (1440; 375/768 missingStates) |
| Collections `/collections` | done | [x] capture |
| Search `/search?q=camera` | done | [x] capture |
| Cart page empty + filled + qty | done | [x] interact |
| About `/pages/about-us` | done | [x] capture |
| Our Story `/pages/our-story` | done | [x] capture |
| Contact form (submit yok) | done | [x] capture |
| FAQ `/pages/faq` | done | [x] interact |
| News + Lights Camera Feast | done | [x] capture |
| 404 | done | [x] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Speedo / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement_bar_fHNTbB | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · SHOP `#Details-HeaderMenu-1` |
| 3 | slideshow_FnJ9xJ | `hero-slideshow` | reuse |
| 4 | rich_text_Tzzgah | `editorial-rich-text` | reuse |
| 5 | `__07468762` Shop By Categories | `collection-nav-image-cards` | reuse |
| 6 | image_with_text_kcFg43 About Us | `editorial-image-with-text` | reuse |
| 7 | `__0617c2f2` Best Selling | `product-showcase-grid-featured` | reuse · hover 2. görsel |
| 8 | image_with_text_UVtfNe + % bar | `editorial-image-with-text.2` | reuse · delta |
| 9 | video_slider_admkce | `media-scrolling-gallery` | reuse · delta |
| 10 | featured_collection_iyjTqX New Product | `product-showcase-grid-featured.2` | reuse |
| 11 | testimonial_d6pHJf | `testimonial-quote-carousel` | reuse |
| 12 | featured_product_N9pBJT | `product-showcase-featured` | reuse |
| 13 | `__588ae6a9` Latest Blog | `blog-list-main` | reuse |
| 14 | service_icon_cRV7DD | `trust-icon-row` | reuse |
| 15 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 16 | newsletter-popup | — | leftover PII |
| 17 | #menu-drawer | `global-menu-drawer` | reuse · 375/768 open |
| 18 | predictive-search / #Search-In-Modal | `global-predictive-search` | reuse |
| 19 | #CartDrawer | `global-cart-drawer` | reuse |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–19 | home static + overlays | home | [x] | [x] | reuse | [x] |
| 20–28 | PDP main/tabs/video/IWT/trust/banner/FAQ/marquee | product-detail | [x] | [x] | reuse | [x] |
| 29–31 | banner + slider + PLP grid | collection | [x] | [x] | reuse | [x] |
| 32 | collection-nav-grid | collections | [x] | [x] | reuse | [x] |
| 33 | search-results | search | [x] | [x] | reuse | [x] |
| 34 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 35–42 | about + our-story | about-brand | [x] | [x] | reuse | [x] |
| 43–44 | contact title + form | contact | [x] | [x] | reuse | [x] |
| 45–46 | FAQ banner + accordion | faq-support | [x] | [x] | reuse | [x] |
| 47–49 | news + article + 404 | blog-* / not-found | [x] | [x] | reuse | [x] |

---

## Interact (kanıt)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open 1440 | 6 kart (Travel…Accessories); SHOP altı çizili |
| global-predictive-search | open + input `camera` | PRODUCTS listesi 375/768/1440 |
| global-menu-drawer | open 375/768 | düz linkler; expander yok; initial 375 missing |
| global-cart-drawer | initial / filled / changed | boş → Melcam $400 qty1 → qty2 $800 |
| cart-page-main | initial / filled / changed | aynı Melcam qty |
| product-info-main | changed Color | Black → Powder Blue mint gövde |
| product-info-tabs | changed | Description → Additional Information (lorem) |
| product-showcase-grid-featured | hover 1440 | 2. görsel (elde kamera); Quick Shop yazısı yok |
| product-showcase-grid-plp | changed Color Black | 1440: 7/10 + çip; 375/768 missingStates |
| faq-collapsible-tabs | changed | Q1+Q2 birlikte açık |

Stop: email / account / checkout / newsletter submit / contact SUBMIT / PII

---

## Aday / leftover

[`candidates/photo-camera-leftovers.md`](../candidates/photo-camera-leftovers.md)

---

## Evidence backlog

- [x] resmi 3vp `capture-observation.mjs` (143 PNG; menu-drawer 1440 yok)
- [x] interact: mega / hamburger / search / cart / PDP / FAQ / hover / PLP filter (57 PNG)
- [x] `node scripts/validate-schemas.mjs`
- [x] Email / account / checkout / newsletter submit — **yapılmayacak**
