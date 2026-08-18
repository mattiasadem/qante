# Todo — Kumsal (ikas Theme Store official demo)

*Kaynak:* https://0esw4-dev-kumsal.myikas.com/  
*Theme Store:* https://themes.ikas.com/themes/79a4d272-c76f-49e1-aeb9-22ad3a5c5066  
*Preset:* `default`  
*Tema:* **Kumsal** · developer **ikascom** · slug `kumsal`  
*Platform (storefront, uydurulmadı):* **ikas** · `window.Shopify` **yok** · `window.__IKAS_DATA__`  
*Fingerprint:* host `0esw4-dev-kumsal.myikas.com` · `merchantId` `232ff515-76eb-4634-ba96-87fcdf0c5064` · `storeName` `dev-kumsal` · `salesChannelId` `df371fb7-ae8e-4a2f-a7ad-993a17e931af` · `storefrontId` `711b0133-dfba-4f0d-bdc0-7ef9e3c3d079` · `apiUrl` `https://api.myikas.com/api/sf/graphql` · locale `tr` · `TRY` ₺ · routing `5c580a7f-ea01-492e-b36d-08eae125b90a` · `logoText` Kumsal · Theme Store UUID `79a4d272-c76f-49e1-aeb9-22ad3a5c5066`

**Durum:** ✅ Mod A walk + resmi 3vp + interact + validate  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/kumsal/default/` |
| Observation | **19** |
| Evidence PNG | **77** |
| Yeni şema | **0** |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Validator | 65 temiz · 0 error · 0 warn |
| Parallel | yalnız `observations/kumsal/`, `evidence/kumsal/`, `todo/kumsal.md`, `candidates/kumsal-leftovers.md` |

**Kapsam satırı:**  
`Kumsal · default · ikas / Shopify yok / __IKAS_DATA__ / merchantId 232ff515-76eb-4634-ba96-87fcdf0c5064 / storeName dev-kumsal / Theme Store 79a4d272-c76f-49e1-aeb9-22ad3a5c5066 · home→PDP Chukka Oatmeal→Stormy Blue→PLP /erkek 22→/search chukka 5→cart empty/filled/qty2 ₺22900→about hakkimizda→iletisim→FAQ home only→blog 404→404 · 19 obs · 77 PNG · 0 yeni şema · leftover: dual-hero / search-is-page / blog-404 / faq-routes`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/hero/slider/triple/IWT/FAQ/footer | [x] | [x] |
| Header kapalı + Erkek mega 1440 | [x] | [x] hover |
| Search `/search` + `chukka` | [x] | [x] 375/768/1440 |
| Mobile hamburger 375+768 + Erkek nested | [x] | [x] |
| PDP Chukka renk Oatmeal→Stormy Blue | [x] | [x] |
| PLP `/erkek` | [x] | [x] 22 ürün |
| Search page | [x] | [x] 53→5 |
| Cart `/cart` empty + filled + qty | [x] | [x] qty 1→2 · ₺11450→₺22900 |
| Cart drawer empty + filled + qty | [x] | [x] aynı |
| About `/pages/hakkimizda` | [x] | [x] |
| Contact `/pages/iletisim` form | [x] | [x] PII yok |
| FAQ dedicated | leftover 404 — home `section.faq` | — |
| Blog `/blog` | leftover 404 | — |
| 404 | [x] | [x] |

---

## Bileşen roster

19 observation. 0 yeni şema.

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse marquee | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | reuse mega hover | [x] |
| 3 | hero-slideshow | home | [x] | [x] | dual panel | [x] |
| 4 | product-showcase-grid-featured | home | [x] | [x] | slider + ATC | [x] |
| 5 | promo-grid-banner | home | [x] | [x] | triple | [x] |
| 6 | editorial-image-with-text | home | [x] | [x] | 375 görselsiz | [x] |
| 7 | faq-collapsible-tabs | home | [x] | [x] | home only | [x] |
| 8 | footer-columns-newsletter | home | [x] | [x] | submit yok | [x] |
| 9 | global-predictive-search | home | [x] | [x] | /search page | [x] |
| 10 | global-menu-drawer | home | [x] | [x] | 375/768 | [x] |
| 11 | global-cart-drawer | home | [x] | [x] | .cdw-panel | [x] |
| 12 | product-info-main | product-detail | [x] | [x] | renk | [x] |
| 13 | product-showcase-related | product-detail | [x] | [x] | reuse slider | [x] |
| 14 | product-showcase-grid-plp | collection | [x] | [x] | /erkek 22 | [x] |
| 15 | search-results | search | [x] | [x] | 53 | [x] |
| 16 | cart-page-main | cart | [x] | [x] | empty/filled | [x] |
| 17 | editorial-image-with-text | about-brand | [x] | [x] | sticky | [x] |
| 18 | lead-capture-form | contact | [x] | [x] | PII yok | [x] |
| 19 | page-content-main | not-found | [x] | [x] | 404 | [x] |

---

## Interact (pixel-checked)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | **1440 Erkek hover** — kolon + promo Yeni Sezon. Click kapar. |
| global-predictive-search | input | `/search` overlay yok. `chukka` → **5 ürün** (53→5) |
| global-menu-drawer | open/changed | 375/768 hamburger; Erkek nested Tişört…Mayo |
| global-cart-drawer | initial/filled/changed | boş + recent → Chukka qty1 ₺11450 → qty2 ₺22900 |
| cart-page-main | initial/filled/changed | boş → qty1 ₺11450 → qty2 ₺22900 |
| product-info-main | changed | Oatmeal → Stormy Blue; ₺11450 aynı |

---

## Aday / leftover

[`candidates/kumsal-leftovers.md`](../candidates/kumsal-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact header / search / cart / menu / PDP renk
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 65 temiz · 0 error · 0 warn
