# Todo — Starface (starface.world)

*Kaynak:* https://starface.world · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **Starface Live** · `schema_name`: **Dawn** · `schema_version`: **7.0.0** · `theme_store_id`: null (custom) · shop `starfaceworld.myshopify.com` · theme id `140880543815` · CDN `t/490`

**Durum:** Mod A walk yazıldı — resmi 3vp + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/starface/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/starface/`, `evidence/starface/`, `todo/starface.md`, `candidates/starface-*.md` |

**Kapsam satırı:**  
`Starface · default · Starface Live / Dawn 7.0.0 · custom Shopify · home→PDP→PLP→search→cart page+drawer→content→footer→mobile · obs yazıldı · 3vp/interact bekliyor · leftover aşağıda`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/announcement | ✅ yazıldı | [ ] |
| Search overlay / cart drawer / mobile menu | ✅ interact adımları | [ ] |
| PDP `/products/star-strips` | ✅ + related | [ ] |
| PLP `/collections/all` + filter | ✅ | [ ] |
| Search `/search?q=hydro` | ✅ 48 sonuç | [ ] |
| Cart `/cart` | ✅ boş sayfa + drawer | [ ] |
| FAQ `/pages/faq` | ✅ + top question | [ ] |
| Contact `/pages/contact-us` | ✅ form yok | [ ] |
| Shipping `/pages/shipping-returns` | ✅ | [ ] |
| Policy `/pages/privacy-policy` | ✅ | [ ] |
| Blog `/blogs/news` (boş) + `/blogs/faq/what-are-hydro-stars` | ✅ | [ ] |
| Store locator `/pages/where-to-shop` | ✅ + aday | [ ] |
| Careers | ✅ + Greenhouse aday | [ ] |
| Subscribe `/collections/subscribe` | ✅ hero + features + grid | [ ] |
| 404 `/pages/support` | ✅ + aday | [ ] |
| About `/pages/about` | ⛔ boş main | — |
| Star Corner / rewards / quiz | ⛔ aday | — |
| Mobile 375 menu | interact | [ ] |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 3 | product-showcase-grid-featured | home | [ ] | [x] | reuse | [ ] |
| 4 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 5 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 6 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 7 | global-menu-drawer | home | [ ] | [x] | reuse | [ ] |
| 8 | product-info-main | product-detail | [ ] | [x] | reuse | [ ] |
| 9 | product-showcase-related | product-detail | [ ] | [x] | reuse | [ ] |
| 10 | product-showcase-grid-plp | collection | [ ] | [x] | reuse | [ ] |
| 11 | search-results | search | [ ] | [x] | reuse | [ ] |
| 12 | cart-page-main | cart | [ ] | [x] | reuse | [ ] |
| 13 | faq-collapsible-tabs | faq | [ ] | [x] | reuse | [ ] |
| 14 | page-content-main | shipping / contact / policy / 404 / locator / careers | [ ] | [x] | reuse | [ ] |
| 15 | blog-list-main | blog-list | [ ] | [x] | reuse | [ ] |
| 16 | blog-post-main | blog-post | [ ] | [x] | reuse | [ ] |
| 17 | editorial-image-with-text-overlay | subscribe | [ ] | [x] | reuse | [ ] |
| 18 | features-multicolumn | subscribe | [ ] | [x] | reuse | [ ] |
| 19 | product-showcase-grid-plp | subscribe | [ ] | [x] | reuse | [ ] |

---

## Interact (kareye bakılacak)

| Bileşen | State | Plan |
|---|---|---|
| global-predictive-search | initial, input | `hydro` fill — overlay değil, sidebar input |
| global-cart-drawer | initial, filled | boş Bag + star-strips ATC |
| global-menu-drawer | open | 375/768; 1440 N/A |
| product-showcase-grid-plp | open | filter & sort |
| faq-collapsible-tabs | changed | top question |

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
- free-product-modal Liquid error
- `/pages/support` 404 (yine de page-content-main yazıldı)
- star-balm flavor `changed` (tek varyant strips)
- cart qty `changed`

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Overlay / search / menu / filter interact
- [ ] PNG bak → stateFindings
