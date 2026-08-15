# Todo — David Protein (davidprotein.com)

*Kaynak:* https://davidprotein.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **`[Production-2.8.1] 8.12.2026`** · `schema_name`: **David Protein** · `schema_version`: **2.8.1** · `theme_store_id`: **null** · role `main`  
*Shop:* `1f74d5-3d.myshopify.com` · theme id `155546681511`

**Durum:** Mod A walk kapandı — 74 obs · resmi 3vp (istisna: exposed-nav + menu 375/768 · PDP comparison 375/768 · PDP anchor 0 PNG) · interact piksel değişenlerde · leftover kayıtlı  
**PR:** https://github.com/mattiasadem/qante/pull/56 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/davidprotein/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Gözlem / kanıt | 74 obs · 231 PNG |
| Validate | `validate-schemas.mjs` → 65 temiz · 0 error · 0 warn |
| Parallel | yalnız `observations/davidprotein/` · `evidence/davidprotein/` · `todo/davidprotein.md` · `candidates/davidprotein-*.md` |

**Kapsam satırı:**  
`David Protein · default · [Production-2.8.1] 8.12.2026 (schema_name David Protein 2.8.1) · home→PDP→PLP→search→cart-drawer→content→footer→mobile · 74 obs · 231 PNG · 0 yeni şema · leftover: Klaviyo/Yotpo/locator/Gorgias/mega-panel/PDP-anchor/chart-aile`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | ✅ | ✅ |
| Mega Shop all panel 1440 | ⛔ hover 0×0 — leftover | initial bar ✅ |
| Search overlay `[data-search-toggle]` | ✅ open + blueberry | ✅ |
| Cart drawer boş + dolu | ✅ | ✅ (`/cart` → home) |
| Mobile hamburger 375/768 | ✅ `#menu-drawer` | ✅ (1440 N/A) |
| Exposed nav daireler | ✅ | ✅ 375/768 (1440 0×0) |
| PDP `/products/salted-peanut-butter` | ✅ | ✅ (anchor 0 PNG · comparison 1440 skip) |
| PDP `/products/canned-cod` | ✅ | ✅ |
| Bundle `/products/build-a-bundle` | ✅ | ✅ |
| PLP `/collections/shop` + pints | ✅ | ✅ |
| Search `/search?q=blueberry` | ✅ | ✅ |
| Our story | ✅ | ✅ |
| FAQ 3/7 kategori | ✅ | ✅ |
| Contact (form **gönderilmedi**) | ✅ | ✅ |
| Help center | ✅ Gorgias aday | ✅ |
| Reviews landing | ✅ | ✅ |
| Subscribe | ✅ | ✅ |
| About our bar | ✅ | ✅ |
| Blog list + article | ✅ | ✅ |
| Store locator | ✅ başlık; harita leftover | ✅ |
| Privacy + terms | ✅ | ✅ |
| Wholesale hero + wizard step 1 | ✅ PII yok | ✅ |
| 404 native | ⛔ CF challenge | leftover |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | home | [x] | [x] mega open leftover | reuse | [x] |
| 3 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 4 | promo-scrolling-marquee | home | [x] | [x] | reuse | [x] |
| 5 | collection-nav-slider | home | [x] | [x] | reuse | [x] |
| 6 | promo-banner-tabs | home | [x] | [x] Pints changed | reuse | [x] |
| 7 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 8 | features-multicolumn | home bios | [x] | [x] | reuse | [x] |
| 9 | comparison-quick-table | home chart | [x] | [x] Macros changed | reuse | [x] |
| 10 | promo-scrolling-marquee.2 | home | [x] | [x] | reuse | [x] |
| 11 | testimonial-quote-carousel | home Yotpo | [x] | [x] | reuse | [x] |
| 12 | footer-columns-newsletter | home | [x] | [x] submit yok | reuse | [x] |
| 13 | global-cart-drawer | home | [x] | [x] boş+dolu | reuse | [x] |
| 14 | global-predictive-search | home | [x] | [x] open+input | reuse | [x] |
| 15 | global-menu-drawer | home | [x] 375/768 | [x] | reuse | [x] |
| 16 | collection-nav-icon-buttons | home mobil | [x] 375/768 | [x] | reuse | [x] |
| 17–29 | PDP + bundle + cod | product-detail | [x] | [x] anchor 0 · cmp 1440 skip | reuse | [x] |
| 30–36 | PLP shop + pints | collection | [x] | [x] | reuse | [x] |
| 37– | Our story / about-bar / reviews | about-brand | [x] | [x] | reuse | [x] |
| | FAQ + help | faq-support | [x] | [x] 3/7 kat | reuse | [x] |
| | contact + locator | contact | [x] | [x] form yok | reuse | [x] |
| | subscribe + wholesale | landing-campaign | [x] | [x] PII yok | reuse | [x] |
| | search page | search | [x] | [x] blueberry | reuse | [x] |
| | blog list + article | blog-list / blog-post | [x] | [x] | reuse | [x] |
| | privacy + terms | policy | [x] | [x] | reuse | [x] |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| promo-banner-tabs | changed | ✅ Pints: külah + Customize your 6-pack (3vp) |
| comparison-quick-table | changed | ✅ Macros tablo + rakip toggle (3vp) |
| global-predictive-search | open + input | ✅ overlay boş + blueberry (3vp) |
| global-cart-drawer | filled | ✅ Salted Peanut Butter + Mystery Pack (3vp) |
| navigation-header-mega | open | ⛔ panel 0×0 — leftover |
| global-menu-drawer | open | ✅ URL `?modals=mobile-menu-drawer` 375/768 (statik) |
| Klaviyo quiz | — | Escape ile kapatıldı; şema yok |

---

## Aday / leftover

[`candidates/davidprotein-leftovers.md`](../candidates/davidprotein-leftovers.md) · [`candidates/davidprotein-404s.md`](../candidates/davidprotein-404s.md)

---

## Evidence backlog

- [x] Claiming obs resmi 3vp (istisnalar yukarıda)
- [x] Overlay / search / cart filled / tabs / macros
- [x] CF 429 sayfalar yavaş retry (story/blog/policy/wholesale/locator)
- [x] PNG bak → stateFindings
- [ ] Mega panel kanıtı
- [ ] PDP comparison 1440
- [ ] PDP anchor 0×0
