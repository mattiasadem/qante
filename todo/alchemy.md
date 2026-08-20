# Todo — Alchemy (Shopify) · Sharp preset

*Kaynak:* https://alchemy-theme-sharp.myshopify.com/  
*Preset:* `sharp` (Sharp) · *Slug:* `alchemy`  
*Theme Store:* https://themes.shopify.com/themes/alchemy · Clean Canvas

**Tema (storefront, yeniden okundu, uydurulmadı):**  
`Shopify.theme.schema_name` = **Alchemy** · `schema_version` = **7.0.1** · `role` = **main**  
shop `alchemy-theme-sharp.myshopify.com`

**Durum:** Mod A walk tamam · resmi 3vp · validate temiz  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/alchemy/sharp/` |
| Capture | resmi `scripts/capture-observation.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/alchemy/`, `evidence/alchemy/`, `todo/alchemy.md`, `candidates/alchemy-*.md` |

**Kapsam satırı:**  
`Alchemy · sharp (Sharp) · Alchemy 7.0.1 · home→PDP→collection→search→cart/drawer→blog→content/footer · 41 obs · 122 PNG · 0 yeni şema · leftover: candidates/alchemy-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home — announcement / header / slideshow / featured / marquee / collections / video / slideshow+text / multicolumn / testimonials / countdown / featured-product / banner / featured-blog / newsletter / footer | [x] | [x] |
| Home — cart drawer (prepareClick) | [x] | [x] |
| Home — search drawer + predictive (prepareClick + fill sock) | [x] | [x] |
| Home — menu drawer 375+768 (1440 skip) | [x] | [x] 2/3 |
| PDP `/products/norrebro-run-crew` — main / rich-text / video / related / trust icons | [x] | [x] |
| Collection `/collections/men` — banner / PLP / collection slider | [x] | [x] |
| Search `/search?q=sock` — banner / results / collection slider | [x] | [x] |
| Cart `/cart` — banner / empty cart / upsell | [x] | [x] |
| Blog list `/blogs/news` | [x] | [x] |
| Blog post `/blogs/news/barefoot-running-what-the-hell-is-it` | [x] | [x] |
| Content `/pages/our-athletes` | [x] | [x] |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Bileşen checklist

| # | Bileşen / id | scope | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | Mod A walk (41 obs) | mixed | [x] | [x] | [x] | [x] |

---

## Aday / leftover

[`candidates/alchemy-leftovers.md`](../candidates/alchemy-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 41 obs · 122 PNG
- [x] `npm run validate` — 0 error
