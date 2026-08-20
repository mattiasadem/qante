# Todo — Exhibit (Switch, paid)

*Kaynak:* https://exhibit-theme-preset-1.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/exhibit  
*Preset:* `default` · *Slug:* `exhibit`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **v2.0.1 with build**  
`schema_name` = **Exhibit** · `schema_version` = **2.0.1** · `role` = **main** · theme id `181132263709`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
shop `exhibit-theme-preset-1.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + validate  
**PR:** draft (bu branch)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/exhibit/default/` |
| Capture | resmi `scripts/capture-observation.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **23** · **68 PNG** |
| Parallel | yalnız `observations/exhibit/`, `evidence/exhibit/`, `todo/exhibit.md`, `candidates/exhibit-leftovers.md` |

**Kapsam satırı:**  
`Exhibit · default · v2.0.1 with build · schema_name Exhibit 2.0.1 · theme_store_id null · home→PDP→collection→search→cart→blog-list→blog-post→footer · 23 obs · 68 PNG · 0 yeni şema · leftover: candidates/exhibit-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (header→footer) | roster + capture | [x] |
| PDP Lignes géométriques et ondoyantes | roster + capture | [x] |
| PLP `/collections/all` | roster + capture | [x] |
| Search `/search?q=abstract` | roster + capture | [x] |
| Cart `/cart` empty | roster + capture | [x] |
| Cart drawer empty (prepareClick) | roster + capture | [x] |
| Mobile menu drawer 375 (prepareClick) | roster + capture | [x] |
| Blog list `/blogs/news` | roster + capture | [x] |
| Blog post landscape article | roster + capture | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Exhibit section | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | header | `navigation-header-mega` | reuse · mega yok · delta |
| 2 | hero spacer | — | leftover h=240 |
| 3 | hero-logo | — | leftover SVG logo |
| 4 | product mosaic grid | `editorial-dynamic-grid` | reuse · tile-product bento |
| 5 | welcome text | `editorial-image-with-text` | reuse |
| 6 | 4 feature columns | `features-multicolumn` | reuse |
| 7 | shop by style | `collection-nav-image-cards` | reuse |
| 8 | latest abstract | `product-showcase-grid-featured` | reuse |
| 9 | marquee | `promo-scrolling-marquee` | reuse |
| 10 | landscape banner | `media-lookbook-banner` | reuse |
| 11 | latest landscape | `product-showcase-grid-featured.2` | reuse |
| 12 | publications | `blog-list-main` | reuse |
| 13 | as seen in | `social-proof-brand-logos` | reuse |
| 14 | newsletter band | `lead-capture-newsletter-band` | reuse |
| 15 | footer | `footer-columns-newsletter` | reuse |
| 16 | empty footer section | — | leftover h=686 |
| 17 | DrawerMenu | `global-menu-drawer` | reuse · 375 |
| 18 | right drawer | `global-cart-drawer` | reuse · empty |

---

## Aday / leftover

[`candidates/exhibit-leftovers.md`](../candidates/exhibit-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Drawer/menu prepareClick captures
- [x] `npm run validate` — 0 error
