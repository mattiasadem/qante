# Todo — Chomps (chomps.com)

*Kaynak:* https://chomps.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **`[📆 Back to Routine] PRODUCTION THEME v2.9.4`** · `schema_name`: null · `theme_store_id`: null (custom) · theme id `151474143301` · `chomps.myshopify.com`

**Durum:** Mod A walk kapandı — 56 obs · resmi 3vp · interact piksel değişenlerde · leftover kayıtlı  
**PR:** https://github.com/mattiasadem/qante/pull/10 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/chomps/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/chomps/`, `evidence/chomps/`, `todo/chomps.md`, `candidates/chomps-*.md` |

**Kapsam satırı:**  
`Chomps · default · [📆 Back to Routine] PRODUCTION THEME v2.9.4 · custom Shopify · home→PDP→PLP→search→cart-drawer→content→footer→mobile · 56 obs · 192 PNG · 0 yeni şema`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/instagram | ✅ | ✅ |
| Mega / search overlay / cart drawer / mobile menu | ✅ interact | ✅ (menu 1440 N/A) |
| PDP `/products/gluten-free-snack-beef-jerky-stick-original` | ✅ + 24 PACK | ✅ |
| PLP `/collections/chomps` | ✅ (Quick View leftover) | ✅ |
| Search `/search?q=beef` | ✅ + ARTICLES | ✅ |
| Cart `/cart` | ⛔ drawer-only (`/?viewcart=true`) | — |
| About `/pages/our-story` | ✅ | ✅ |
| Mission `/pages/our-mission` (hero + Non-UPF FAQ) | ✅ + ilk soru | ✅ |
| Contact `/pages/contact` | ✅ form yok / portal | ✅ |
| Blog list + article Types of Jerky | ✅ | ✅ |
| Policy privacy-notice | ✅ | ✅ |
| Subscribe & Save | ✅ FAQ accordion leftover | ✅ static |
| Where to buy / rewards / 404 / help.chomps / refer | ⛔ candidates | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | [x] | [x] |
| 2 | navigation-header-mega | home | [x] bar 3vp + mega 1440 | [x] | [x] | [x] |
| 3 | global-menu-drawer | home | [x] 375+768 | [x] | [x] | [x] |
| 4 | global-predictive-search | home | [x] modal + beef | [x] öneri yok | [x] | [x] |
| 5 | global-cart-drawer | home | [x] boş/dolu/qty2 | [x] | [x] | [x] |
| 6 | footer-columns-newsletter | home | [x] | [x] | [x] | [x] |
| 7 | hero-slideshow | home | [x] | [x] school campaign | [x] | [x] |
| 8 | features-multicolumn | home | [x] | [x] | [x] | [x] |
| 9 | promo-scrolling-marquee | home | [x] | [x] | [x] | [x] |
| 10 | editorial-image-with-text | home | [x] | [x] | [x] | [x] |
| 11 | product-showcase-grid-featured | home | [x] | [x] | [x] | [x] |
| 12 | features-multicolumn-2 | home | [x] | [x] | [x] | [x] |
| 13 | promo-scrolling-marquee-2 | home | [x] | [x] | [x] | [x] |
| 14 | testimonial-quote-carousel | home | [x] | [x] | [x] | [x] |
| 15 | editorial-image-with-text-2 | home | [x] | [x] | [x] | [x] |
| 16 | editorial-image-with-text-overlay | home | [x] | [x] | [x] | [x] |
| 17 | features-multicolumn-3 | home | [x] | [x] | [x] | [x] |
| 18 | social-proof-brand-logos | home | [x] | [x] | [x] | [x] |
| 19 | blog-list-main | home | [x] | [x] | [x] | [x] |
| 20 | media-shop-the-feed | home | [x] | [x] | [x] | [x] |
| 21 | product-info-main | product-detail | [x] + 24 PACK | [x] $25.60→$54.99 | [x] | [x] |
| 22 | features-multicolumn | product-detail | [x] | [x] | [x] | [x] |
| 23 | editorial-image-with-text | product-detail | [x] | [x] ingredients | [x] | [x] |
| 24 | comparison-quick-table | product-detail | [x] | [x] | [x] | [x] |
| 25 | promo-scrolling-marquee | product-detail | [x] | [x] | [x] | [x] |
| 26 | testimonial-quote-carousel | product-detail | [x] | [x] Yotpo delta | [x] | [x] |
| 27 | product-showcase-grid-featured | product-detail | [x] | [x] | [x] | [x] |
| 28 | editorial-image-with-text-2 | product-detail | [x] | [x] | [x] | [x] |
| 29 | faq-collapsible-tabs | product-detail | [x] kapalı + ilk soru | [x] | [x] | [x] |
| 30 | blog-list-main | product-detail | [x] | [x] | [x] | [x] |
| 31 | collection-banner | collection | [x] | [x] | [x] | [x] |
| 32 | collection-nav-icon-buttons | collection | [x] | [x] text chip; URL nav | [x] | [x] |
| 33 | product-showcase-grid-plp | collection | [x] | [x] Quick View leftover | [x] | [x] |
| 34 | editorial-image-with-text | collection | [x] | [x] | [x] | [x] |
| 35 | blog-list-main | collection | [x] | [x] | [x] | [x] |
| 36 | search-results | search | [x] PRODUCTS + ARTICLES | [x] | [x] | [x] |
| 37–41 | about-brand (5) | about-brand | [x] | [x] our-story | [x] | [x] |
| 42–43 | mission hero + FAQ | about-brand | [x] + ilk soru | [x] | [x] | [x] |
| 44–45 | contact (2) | contact | [x] | [x] portal, form yok | [x] | [x] |
| 46 | blog-list-main | blog-list | [x] | [x] | [x] | [x] |
| 47–50 | blog-post (4) | blog-post | [x] | [x] | [x] | [x] |
| 51 | page-content-main | policy | [x] | [x] | [x] | [x] |
| 52–56 | subscribe (5) | subscribe | [x] | [x] FAQ accordion leftover | [x] | [x] |

---

## Interact (piksel değişince — kareden doğrulandı)

| Bileşen | State | Karede görülen |
|---|---|---|
| navigation-header-mega | initial, open | 1440 mega: protein list + 3×3 flavor + SHOP ALL |
| global-predictive-search | initial, input | Modal açık; `beef` yazıldı; **öneri listesi yok** |
| global-cart-drawer | initial, filled, changed | Boş → Original Beef 10pk $25.60 → qty 2 $51.20 + free shipping |
| global-menu-drawer | open | 375/768 hamburger; 1440 N/A |
| product-info-main | initial, changed | 10 PACK $25.60 → 24 PACK $54.99 |
| faq-collapsible-tabs (PDP) | initial, changed | İlk soru + → – + cevap |
| faq-collapsible-tabs (mission) | initial, changed | Non-UPF ilk soru açık |
| search-results | initial, changed | PRODUCTS ızgara → ARTICLES blog kartı |

PLP chip tıkı başka koleksiyon URL'sine gider — in-page filter değil, interact yok.

---

## Aday / leftover

[`candidates/chomps-leftovers.md`](../candidates/chomps-leftovers.md)

- 404 · store locator · rewards · help.chomps · refer · Yotpo reviews-app · cart page redirect  
- PLP Quick View/Shop modal (static ızgara alındı)  
- Subscribe FAQ accordion (static 3vp; interact PDP+mission)  
- GET 10% OFF tab + Gorgias bubble birçok karede (PII yok, doldurulmadı)  
- Klaviyo gecikmeli hydrate — 4s + Escape

---

## Evidence backlog

- [x] Claiming obs resmi 3vp (56/56; menu yalnız 375+768 açık)  
- [x] Overlay / FAQ / pack / cart / search tab interact  
- [x] Capture sonrası PNG bak — hepsi piksel değiştirdi; predictive search öneri üretmedi (dürüst yazıldı)
