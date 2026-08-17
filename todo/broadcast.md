# Todo — Broadcast (Shopify paid) · Bold

*Kaynak:* https://broadcast-bold.myshopify.com/  
*Preset:* `bold` · *Slug:* `broadcast`  
*Theme Store:* https://themes.shopify.com/themes/broadcast · Presidio

**Tema (gözlemlendi, uydurulmadı):**  
`Shopify.theme.name` = **Broadcast 6.2.0**  
`schema_name` = **Broadcast** · `schema_version` = **6.2.0** · `role` = **main** · theme id `127211405376`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
shop `broadcast-bold.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact + validate **bitti** (0 error)  
**PR:** draft — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/broadcast/bold/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/broadcast/`, `evidence/broadcast/`, `todo/broadcast.md`, `candidates/broadcast-*` |

**Kapsam satırı:**  
`Broadcast · bold · Broadcast 6.2.0 · theme_store_id null · home→PDP→PLP→collections→search→cart→about/contact→faq→blog→404 · 65 obs · 215 PNG · 0 yeni şema · leftover: candidates/broadcast-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer + conversion blocks | roster + capture | [x] |
| Mega Shop 1440 | interact | [x] |
| Predictive search `magnesium` | interact 3vp | [x] |
| Mobile menu 375 | interact | [x] |
| Mobile menu 768 | ⛔ hamburger 0×0 | leftover |
| Cart drawer empty + filled + qty | interact 3vp | [x] |
| Sticky `#cart-bar` CONFIGURE | interact crop 3vp | [x] |
| PDP Multivitamin 18+ Type Bottle→Refill | interact 3vp | [x] |
| PLP `/collections/best-sellers` | roster + capture | [x] |
| Collections index `/collections` | roster + capture | [x] |
| Search `/search?q=magnesium` | roster + capture | [x] |
| Cart page empty + filled + qty | interact 3vp | [x] |
| About `/pages/about-us` | roster + capture | [x] |
| Contact form (submit yok) | roster + capture | [x] |
| FAQ `/pages/faq` | roster + capture | [x] |
| News + article | roster + capture | [x] |
| 404 leftover | roster + capture | [x] |
| Recently-purchased popup | ⛔ yok (8s bekledi) | leftover |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [x] 1440 Shop hover — 3 kolon + 2 görsel + Immune Support |
| global-predictive-search | input | [x] 3vp `magnesium` — Magnesium Powder From $56 |
| global-menu-drawer | open | [x] 375; 768 leftover |
| global-cart-drawer | filled + changed | [x] (0) → (1) $50 → (2) $100 |
| cart-page-main | filled + changed | [x] CART (1) $50 → CART (2) $100 |
| product-info-main | changed | [x] Bottle $50 → Refill $48 + Only 18 Left |
| product-info-main-2 | sticky | [x] `#cart-bar` CONFIGURE 3vp |

---

## Aday / leftover

[`candidates/broadcast-leftovers.md`](../candidates/broadcast-leftovers.md)

---

## Evidence backlog

- [x] Statik 3vp (177 PNG)
- [x] Mega / search / cart empty+filled+qty / mobile menu 375 / PDP Type / sticky CONFIGURE (38 PNG)
- [x] Email / account / checkout / newsletter submit — **yapılmayacak**
