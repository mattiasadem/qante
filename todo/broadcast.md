# Todo — Broadcast (Shopify paid) · Bold

*Kaynak:* https://broadcast-bold.myshopify.com/  
*Preset:* `bold` · *Slug:* `broadcast`  
*Theme Store:* https://themes.shopify.com/themes/broadcast · Presidio

**Tema (gözlemlendi, uydurulmadı):**  
`Shopify.theme.name` = **Broadcast 6.2.0**  
`schema_name` = **Broadcast** · `schema_version` = **6.2.0** · `role` = **main** · theme id `127211405376`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
shop `broadcast-bold.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact (yazılıyor)  
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
`Broadcast · bold · Broadcast 6.2.0 · theme_store_id null · home→PDP→PLP→collections→search→cart→about/contact→faq→blog→404 · 65 obs · 0 yeni şema · leftover: candidates/broadcast-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer + conversion blocks | roster yazıldı | [ ] |
| Mega Shop 1440 | interact yazıldı | [ ] |
| Predictive search `magnesium` | interact yazıldı | [ ] |
| Mobile menu 375+768 | interact yazıldı | [ ] |
| Cart drawer empty + filled + qty | interact yazıldı | [ ] |
| Sticky ATC `#cart-bar` | obs yazıldı | [ ] |
| PDP Multivitamin 18+ Type Bottle→Refill | interact yazıldı | [ ] |
| PLP `/collections/best-sellers` | roster yazıldı | [ ] |
| Collections index `/collections` | roster yazıldı | [ ] |
| Search `/search?q=magnesium` | roster yazıldı | [ ] |
| Cart page empty + filled + qty | interact yazıldı | [ ] |
| About `/pages/about-us` | roster yazıldı | [ ] |
| Contact form (submit yok) | roster yazıldı | [ ] |
| FAQ `/pages/faq` | roster yazıldı | [ ] |
| News + article | roster yazıldı | [ ] |
| 404 leftover | roster yazıldı | [ ] |
| Recently-purchased popup | ⛔ yok (8s bekledi) | leftover |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [ ] 1440 Shop hover |
| global-predictive-search | input | [ ] 3vp `magnesium` |
| global-menu-drawer | open | [ ] 375/768 |
| global-cart-drawer | filled + changed | [ ] |
| cart-page-main | filled + changed | [ ] |
| product-info-main | changed | [ ] Type Refill |
| product-info-main-2 | sticky | [ ] `#cart-bar` CONFIGURE |

---

## Aday / leftover

[`candidates/broadcast-leftovers.md`](../candidates/broadcast-leftovers.md)

---

## Evidence backlog

- [ ] Statik 3vp
- [ ] Mega / search / cart empty+filled+qty / mobile menu / PDP Type / sticky ATC
- [ ] Email / account / checkout / newsletter submit — **yapılmayacak**
