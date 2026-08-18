# Todo — Market (ikas Theme Store)

*Kaynak:* https://dev-market.ikas.shop/  
*Theme Store:* https://themes.ikas.com/themes/704c0da7-16ad-4448-9dc7-7487d759145b  
*Preset:* `default` · *Slug:* `market`  
*Geliştirici:* ikascom · *Tema adı:* Market

**Tema (vitrinde okundu, uydurulmadı):**  
Theme Store UUID `704c0da7-16ad-4448-9dc7-7487d759145b` · demoLink `https://dev-market.ikas.shop/`  
`window.Shopify` **yok** · `Shopify.theme` yok  
`__IKAS_DATA__.pageType` home=`INDEX` · search=`SEARCH` · cart=`CART` · 404=`NOT_FOUND` · account=`LOGIN` (stop)  
`storefrontThemeId` `603d7c7f-e893-4904-bb45-2981d141ac34`  
`storefrontId` `956f79e3-3286-411c-aaa4-a2df5adafff1`  
`merchantName` `dev-market` · `merchantId` `f9a80178-ff98-4d82-8ba6-094caa04bd39`  
`storefrontConfig.domain` `dev-market.myikas.com` (config; public host `dev-market.ikas.shop`)  
locale `tr` · `currencyCode` `TRY` · `currencySymbol` `₺` · region `TR`

**Durum:** Mod A walk yazıldı · resmi 3vp + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/market/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **7** |
| Evidence PNG | *(capture sonrası)* |
| Parallel | yalnız `observations/market/`, `evidence/market/`, `todo/market.md`, `candidates/market-leftovers.md` |

**Kapsam satırı:**  
`Market · default · Theme Store 704c0da7-16ad-4448-9dc7-7487d759145b · ikascom · host dev-market.ikas.shop · Shopify.theme yok · pageType INDEX/SEARCH/CART/NOT_FOUND · home (katalog+rail)→PDP modal Salatalık 500g→1kg→PLP=INDEX (category 404)→search avokado 1→cart empty/filled/qty→about/contact/FAQ/blog leftover (href=/ veya 404)→404 blank · 7 obs · 0 yeni şema · leftover: candidates/market-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + store header / category tabs+grids / cart rail / footer | [x] | [x] |
| Header kapalı — mega yok | [x] | [x] leftover |
| Search `/search` `avokado` | [x] | [x] 375/768/1440 |
| Mobile hamburger 375 + 768 | ⛔ yok | leftover |
| Cart rail empty + filled + qty | [x] | [x] 1440 (375/768 0×0) |
| PDP modal Salatalık Miktar 500g→1kg | [x] | [x] |
| PLP ayrı rota | ⛔ INDEX | leftover |
| Search `/search` + `?s=avokado` | [x] | [x] |
| Cart page empty + filled + qty | [x] | [x] |
| About / contact / FAQ | ⛔ href=/ veya 404 | leftover |
| Blog | ⛔ 404 | leftover |
| 404 blank `NOT_FOUND` | [x] | leftover |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Market class | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | `.market-header` | `navigation-header-mega` | reuse · mega yok |
| 2 | `.m-home-account-bar` | — | leftover · Ara + Giriş yap |
| 3 | `.m-product-list` + tabs + `.m-category-block` ×6 | `product-showcase-tabs` | reuse · INDEX=PLP |
| 4 | `.m-cart-rail` | `global-cart-drawer` | reuse · rail 1440 |
| 5 | `.m-footer` | `footer-columns-newsletter` | reuse · newsletter yok |
| 6 | `.m-product-modal` | `product-info-main` | reuse · PDP overlay |
| 7 | `#MenuDrawer` / hamburger | — | leftover · yok |
| 8 | predictive overlay | — | leftover · full page `/search` |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | ⛔ mega / hamburger yok |
| global-predictive-search | input | leftover — `/search` fill `avokado` |
| search-results | input | [x] 24 → 1 Avokado |
| global-menu-drawer | open | ⛔ 375/768 hamburger yok |
| global-cart-drawer | filled + changed | [x] 1440 qty1 ₺29.90 → qty2 ₺59.80 |
| cart-page-main | filled + changed | [x] Avokado + qty+ |
| product-info-main | changed | [x] Salatalık 500 g → 1 kg |

---

## Aday / leftover

[`candidates/market-leftovers.md`](../candidates/market-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact header / search / cart / PDP Miktar
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
