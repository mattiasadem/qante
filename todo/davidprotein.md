# Todo — David Protein (davidprotein.com)

*Kaynak:* https://davidprotein.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **`[Production-2.8.1] 8.12.2026`** · `schema_name`: **David Protein** · `schema_version`: **2.8.1** · `theme_store_id`: **null** · role `main`  
*Shop:* `1f74d5-3d.myshopify.com` · theme id `155546681511`

**Durum:** Mod A walk yazıldı — resmi 3vp + interact **henüz koşulmadı** (bu revizyon pre-capture)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/davidprotein/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Gözlem / kanıt | 58 obs · 0 PNG (capture kuyruğu) |
| Parallel | yalnız `observations/davidprotein/` · `evidence/davidprotein/` · `todo/davidprotein.md` · `candidates/davidprotein-*.md` |

**Kapsam satırı (hedef):**  
`David Protein · default · David Protein 2.8.1 ([Production-2.8.1] 8.12.2026) · home→PDP→PLP→search overlay→cart drawer→content→footer→mobile · 58 obs · 0 yeni şema · leftover: CF 429 / Yotpo / locator / Gorgias / interactive-chart`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ✅ obs | [ ] capture |
| Mega Shop all / Bars / … 1440 | ⬜ interact | [ ] |
| Search overlay `[data-search-toggle]` | ✅ selector | [ ] + input |
| Cart drawer `/?modals=cart-drawer-dialog` | ✅ boş görüldü | [ ] + filled |
| Mobile hamburger 375/768 | ⬜ opener netleşecek | [ ] |
| Exposed nav daireler (mobil) | ✅ section 0×0 desktop | [ ] 375/768 |
| PDP `/products/salted-peanut-butter` | ✅ obs | [ ] |
| PDP `/products/canned-cod` | ✅ obs | [ ] |
| Bundle `/products/build-a-bundle` | ✅ obs | [ ] |
| PLP `/collections/shop` + pints | ✅ obs | [ ] |
| Search `/search?q=protein` | ⛔ CF 429 | leftover |
| Cart `/cart` | ⛔ CF 429 (drawer var) | leftover |
| About `/pages/about-our-bar` | ⛔ CF 429 | leftover |
| Our story | ✅ obs | [ ] |
| FAQ | ✅ 3/7 kategori obs | [ ] |
| Contact (form **gönderilmedi**) | ✅ obs | [ ] |
| Help center | ✅ obs (Gorgias aday) | [ ] |
| Reviews landing | ✅ obs | [ ] |
| Subscribe | ✅ obs | [ ] |
| Blog / article | ⛔ CF 429 | leftover |
| Store locator | ⛔ CF 429 | leftover |
| Privacy / terms / wholesale / guarantee / testing / 404 | ⛔ CF 429 | leftover |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] | reuse | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] | reuse | [ ] |
| 4 | promo-scrolling-marquee | home | [ ] | [x] | reuse | [ ] |
| 5 | collection-nav-slider | home | [ ] | [x] | reuse | [ ] |
| 6 | promo-banner-tabs | home | [ ] | [x] | reuse | [ ] |
| 7 | product-showcase-grid-featured | home | [ ] | [x] | reuse | [ ] |
| 8 | features-multicolumn | home bios | [ ] | [x] | reuse | [ ] |
| 9 | comparison-quick-table | home chart | [ ] | [x] | reuse | [ ] |
| 10 | promo-scrolling-marquee.2 | home | [ ] | [x] | reuse | [ ] |
| 11 | testimonial-quote-carousel | home Yotpo | [ ] | [x] | reuse | [ ] |
| 12 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 13 | global-cart-drawer | home | [ ] | [x] boş görüldü | reuse | [ ] |
| 14 | global-predictive-search | home | [ ] | [x] overlay görüldü | reuse | [ ] |
| 15 | global-menu-drawer | home | [ ] | [x] | reuse | [ ] |
| 16 | collection-nav-icon-buttons | home mobil | [ ] | [x] 1440 0×0 | reuse | [ ] |
| 17–29 | PDP + bundle + cod | product-detail | [ ] | [x] | reuse | [ ] |
| 30–36 | PLP shop + pints | collection | [ ] | [x] | reuse | [ ] |
| 37–43 | Our story | about-brand | [ ] | [x] | reuse | [ ] |
| 44–47 | FAQ + help | faq-support | [ ] | [x] | reuse | [ ] |
| 48–49 | contact | contact | [ ] | [x] | reuse | [ ] |
| 50–52 | reviews hero/slider/nav | about-brand | [ ] | [x] | reuse | [ ] |
| 53–57 | subscribe landing | landing-campaign | [ ] | [x] | reuse | [ ] |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | ⬜ Details-HeaderMenu hover — henüz PNG yok |
| global-predictive-search | input | ⬜ katalogSorgu (Blueberry / protein) |
| global-cart-drawer | filled | ⬜ ATC Salted Peanut Butter |
| global-menu-drawer | open | ⬜ 375/768 hamburger |
| promo-banner-tabs (home) | changed | ⬜ Bars → Pints |
| faq-collapsible-tabs (PDP) | changed | ⬜ ilk soru |
| comparison-quick-table (home) | changed | ⬜ Calories / Macros |

---

## Aday / leftover

[`candidates/davidprotein-leftovers.md`](../candidates/davidprotein-leftovers.md) · [`candidates/davidprotein-404s.md`](../candidates/davidprotein-404s.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Overlay / mega / search / cart filled / menu / tabs / FAQ interact
- [ ] CF 429 sayfalar yavaş retry
- [ ] PNG bak → stateFindings
