# Todo — Starface (starface.world)

*Kaynak:* https://starface.world · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **Starface Live** · `schema_name`: **Dawn** · `schema_version`: **7.0.0** · `theme_store_id`: null (custom) · shop `starfaceworld.myshopify.com` · theme id `140880543815` · CDN `t/490`

**Durum:** Mod A walk + resmi 3vp + interact bitti (menü/search overlay leftover)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/starface/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| PNG | **78** |
| Observation | **24** · search overlay 0 PNG (leftover) · menü PNG var ama listesi karede yok |
| Parallel | yalnız `observations/starface/`, `evidence/starface/`, `todo/starface.md`, `candidates/starface-*.md` |

**Kapsam satırı:**  
`Starface · default · Starface Live / Dawn 7.0.0 · custom Shopify · home→PDP→PLP→search→cart page+drawer→content→footer→mobile · 24 obs · 0 yeni şema · 78 PNG · leftover aşağıda`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/announcement | ✅ | [x] |
| Search overlay / cart drawer / mobile menu | cart ✅; menü/search leftover | [x] cart · [ ] menü listesi · [ ] predictive |
| PDP `/products/star-strips` | ✅ + related; swatch yok | [x] |
| PLP `/collections/all` + filter | ✅ filter 1440 açık | [x] |
| Search `/search?q=hydro` | ✅ | [x] |
| Cart `/cart` | ✅ boş sayfa + drawer empty/filled | [x] |
| FAQ `/pages/faq` | ✅ + ilk soru açık | [x] |
| Contact `/pages/contact-us` | ✅ form yok | [x] |
| Shipping `/pages/shipping-returns` | ✅ | [x] |
| Policy `/pages/privacy-policy` | ✅ last updated may 06, 2024 | [x] |
| Blog `/blogs/news` (boş) + article | ✅ list boş; post PNG siyah | [x] |
| Store locator `/pages/where-to-shop` | ✅ + aday | [x] |
| Careers | ✅ + Greenhouse aday | [x] |
| Subscribe `/collections/subscribe` | ✅ hero + features + grid | [x] |
| 404 `/pages/support` | ✅ blast off | [x] |
| About `/pages/about` | ⛔ boş main | — |
| Star Corner / rewards / quiz | ⛔ aday | — |
| Mobile 375 menu | leftover (0×44 opener) | [ ] |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | reuse | [x] |
| 3 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 4 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 5 | global-cart-drawer | home | [x] | [x] | reuse | [x] |
| 6 | global-predictive-search | home | [ ] leftover | [x] | reuse | [ ] |
| 7 | global-menu-drawer | home | [x] ama liste yok | [x] | reuse | [ ] |
| 8 | product-info-main | product-detail | [x] | [x] | reuse | [x] |
| 9 | product-showcase-related | product-detail | [x] | [x] | reuse | [x] |
| 10 | product-showcase-grid-plp | collection | [x] + filter | [x] | reuse | [x] |
| 11 | search-results | search | [x] | [x] | reuse | [x] |
| 12 | cart-page-main | cart | [x] | [x] | reuse | [x] |
| 13 | faq-collapsible-tabs | faq | [x] + changed | [x] | reuse | [x] |
| 14 | page-content-main | shipping / contact / policy / 404 / locator / careers | [x] | [x] | reuse | [x] |
| 15 | blog-list-main | blog-list | [x] boş | [x] | reuse | [x] |
| 16 | blog-post-main | blog-post | [x] siyah | [x] | reuse | [x] |
| 17 | editorial-image-with-text-overlay | subscribe | [x] | [x] | reuse | [x] |
| 18 | features-multicolumn | subscribe | [x] | [x] | reuse | [x] |
| 19 | product-showcase-grid-plp | subscribe | [x] | [x] | reuse | [x] |

---

## Interact (kareye bakıldı)

| Bileşen | State | Sonuç |
|---|---|---|
| global-predictive-search | initial, input | **leftover** — input hidden, 2 deneme |
| global-cart-drawer | initial, filled | boş bag 3vp; filled 375 star strips™ $5.94 / 768+1440 hydro-star® clear $12.99 |
| global-menu-drawer | open | **leftover** — 0×44 click; forceOpen PNG = sign-up modal / kapalı home |
| product-showcase-grid-plp | open | 1440 filter & sort (sort / product type 15 / spot type 12 / color 13) + signup modal |
| faq-collapsible-tabs | changed | ilk soru açık + ürün linkleri |

---

## Aday / leftover

[`candidates/starface-leftovers.md`](../candidates/starface-leftovers.md) · [`candidates/starface-404s.md`](../candidates/starface-404s.md)

- About `/pages/about` main section yok
- Star Corner Vite SPA
- Rewards Yotpo/Swell (PII sign up)
- Quiz H1 only
- Yotpo reviews PDP
- Gorgias chat
- Pandectes cookie
- Klaviyo “sign up!” modal (PII)
- free-product-modal Liquid error
- `/pages/support` 404 (yine de page-content-main yazıldı)
- Menu drawer listesi + predictive overlay (opener 0×44)
- Blog post 3vp siyah
- star-balm flavor `changed` (tek varyant strips)
- cart qty `changed`

---

## Evidence backlog

- [x] Claiming obs resmi 3vp (blog-post kare siyah — leftover)
- [x] Overlay / search / menu / filter interact (menü+search leftover)
- [x] PNG bak → stateFindings
