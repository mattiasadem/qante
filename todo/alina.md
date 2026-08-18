# Todo — Alina (ikas Theme Store)

*Kaynak:* https://dev-alina.ikas.shop  
*Theme Store:* https://themes.ikas.com/themes/7f5c4b83-e6fa-4cdd-a35b-72eb1911a8e3  
*Preset:* `default`  
*Tema (görülen, uydurulmadı):* **Alina** · developer **ikascom** · Theme Store UUID **`7f5c4b83-e6fa-4cdd-a35b-72eb1911a8e3`**  
*Platform:* **ikas** · `Shopify.theme` **yok** · `x-powered-by: ikas` · `__IKAS_DATA__`  
*Storefront (ikas, uydurulmadı):* `storefrontThemeId` `b19652e2-11ef-4979-97b1-879567363d56` · `storefrontId` `dd2e2c99-fb2a-44b5-82db-bc71532c7e5c` · domain `dev-alina.ikas.shop`

**Durum:** Mod A walk + resmi 3vp + interact  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/alina/default/` |
| Observation | **29** |
| Evidence PNG | **105** |
| Yeni şema | **0** |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Validator | 65 temiz · 0 error · 0 warn |
| Parallel | yalnız `observations/alina/`, `evidence/alina/`, `todo/alina.md`, `candidates/alina-leftovers.md` |

**Kapsam satırı:**  
`Alina · default · ikas Theme Store UUID 7f5c4b83-e6fa-4cdd-a35b-72eb1911a8e3 · home→PDP daily-backpack COLOR Gray→PLP /bags→search?s=backpack 2→cart empty/filled/qty2 ₺62→iletisim→sss→blog+post→404 · 29 obs · 105 PNG · 0 yeni şema · leftover: about yok / cookie / bundle / reviews / q= / guest-track / mobnav chevron`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + hero/trending/showcase×3/cat-strip/accgrid/cta/features/logos/footer | [x] | [x] |
| Header kapalı + Çantalar mega hover 1440 | [x] | [x] |
| Predictive search `backpack` | [x] | [x] 375/768/1440 |
| Mobile hamburger 375+768 + Çantalar chevron | [x] | [x] (1440 hamburger yok) |
| PDP Daily Backpack COLOR Black→Gray | [x] | [x] |
| PLP `/bags` banner + grid | [x] | [x] |
| Search `/search?s=backpack` | [x] | [x] 2 sonuç |
| Cart `/cart` empty + filled + qty | [x] | [x] |
| Cart drawer empty + filled + qty | [x] | [x] |
| Contact `/pages/iletisim` | [x] | [x] PII yok |
| FAQ `/pages/sss` | [x] | [x] |
| Blog list + Batarya yazısı | [x] | [x] |
| 404 | [x] | [x] |
| İade `/pages/iade-kosullari` | [x] | [x] |
| About | ⛔ `/` veya 404 | leftover |

---

## Bileşen roster

29 observation. 0 yeni şema.

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home | [x] | [x] | reuse (mega tabs) | [x] |
| 2 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 3–6 | product-showcase-grid-featured ×4 | home | [x] | [x] | trending + 3 showcase | [x] |
| 7 | collection-nav-slider | home | [x] | [x] | cat-strip | [x] |
| 8 | editorial-dynamic-grid | home | [x] | [x] | accgrid | [x] |
| 9 | editorial-image-with-text | home | [x] | [x] | cta-banner | [x] |
| 10 | features-slider-multicolumn | home | [x] | [x] | cardslider | [x] |
| 11 | social-proof-brand-logos | home | [x] | [x] | endorsed | [x] |
| 12 | footer-columns-newsletter | home | [x] | [x] | e-posta yok | [x] |
| 13 | global-predictive-search | home | [x] | [x] | backpack | [x] |
| 14 | global-menu-drawer | home | [x] | [x] | 375/768 | [x] |
| 15 | global-cart-drawer | home | [x] | [x] | `.cartd` | [x] |
| 16 | product-info-main | product-detail | [x] | [x] | COLOR | [x] |
| 17–18 | features-multicolumn ×2 | product-detail | [x] | [x] | pd__block + mt | [x] |
| 19 | faq-collapsible-tabs | product-detail | [x] | [x] | placeholder | [x] |
| 20–21 | banner + PLP | collection | [x] | [x] | /bags | [x] |
| 22 | search-results | search | [x] | [x] | `?s=` | [x] |
| 23 | cart-page-main | cart | [x] | [x] | empty/filled/qty | [x] |
| 24 | lead-capture-form | contact | [x] | [x] | PII yok | [x] |
| 25 | faq-collapsible-tabs | faq-support | [x] | [x] | reuse | [x] |
| 26–27 | blog-list + post | blog | [x] | [x] | reuse | [x] |
| 28 | page-content-main | not-found | [x] | [x] | 404 | [x] |
| 29 | page-content-main | policy | [x] | [x] | iade | [x] |

---

## Interact (pixel-checked)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | 1440 Çantalar **hover** (tık kapanır) — tabs + ürün kartı |
| global-predictive-search | input | `backpack` → Daily + Foldable + Tüm sonuçları gör |
| global-menu-drawer | open | 375/768 hamburger. changed yok — Çantalar `<a href=/bags>` |
| global-cart-drawer | initial/filled/changed | boş → Daily Backpack qty1 ₺31 → qty2 ₺62 |
| cart-page-main | initial/filled/changed | boş → qty1 ₺31 → qty2 ₺62 |
| product-info-main | changed | COLOR Black → Gray |

---

## Aday / leftover

[`candidates/alina-leftovers.md`](../candidates/alina-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact header / search / cart / menu / PDP Color
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 65 temiz · 0 error · 0 warn
