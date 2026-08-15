# Todo — Starface (starface.world)

*Kaynak:* https://starface.world · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **Starface Live** · `schema_name`: **Dawn** · `schema_version`: **7.0.0** · `theme_store_id`: null (custom) · shop `starfaceworld.myshopify.com` · theme id `140880543815` · CDN `t/490`

**Durum:** Mod A walk + home/PDP/PLP/search/cart 3vp çekildi — content 3vp + interact sırada  
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
`Starface · default · Starface Live / Dawn 7.0.0 · custom Shopify · home→PDP→PLP→search→cart page+drawer→content→footer→mobile · 24 obs · 0 yeni şema · 27 PNG (content/interact bekliyor) · leftover aşağıda`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/announcement | ✅ | [x] 27 PNG kısmi |
| Search overlay / cart drawer / mobile menu | ✅ adımlar düzeltildi (1440 hamburger) | [ ] interact |
| PDP `/products/star-strips` | ✅ + related | [x] |
| PLP `/collections/all` + filter | ✅ 3vp; filter interact | [x] statik |
| Search `/search?q=hydro` | ✅ | [x] |
| Cart `/cart` | ✅ boş sayfa; drawer interact | [x] sayfa |
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
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | reuse | [x] |
| 3 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 4 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 5 | global-cart-drawer | home | [ ] | [x] | reuse | [ ] |
| 6 | global-predictive-search | home | [ ] | [x] | reuse | [ ] |
| 7 | global-menu-drawer | home | [ ] | [x] | reuse | [ ] |
| 8 | product-info-main | product-detail | [x] | [x] | reuse | [x] |
| 9 | product-showcase-related | product-detail | [x] | [x] | reuse | [x] |
| 10 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [ ] filter |
| 11 | search-results | search | [x] | [x] | reuse | [x] |
| 12 | cart-page-main | cart | [x] | [x] | reuse | [x] |
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
| global-predictive-search | initial, input | hamburger → boş alan → `hydro` (drawer içi, her VP) |
| global-cart-drawer | initial, filled | boş Bag + star-strips ATC |
| global-menu-drawer | open | hamburger 375/768/**1440** (kapalı karede nav yok) |
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

- [x] Home / PDP / PLP / search / cart sayfa 3vp (27 PNG)
- [ ] Content + subscribe 3vp
- [ ] Overlay / search / menu / filter / FAQ interact
- [ ] PNG bak → stateFindings
