# Todo — Taiga (Woolman, paid) · Sage

*Kaynak:* https://taiga-demo-sage.myshopify.com/  
*Preset:* `default` (Taiga / Sage) · *Slug:* `taiga`  
*Theme Store:* https://themes.shopify.com/themes/taiga · Woolman

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Taiga / LIVE update**  
`schema_name` = **Taiga** · `schema_version` = **8.1.0** · `role` = **main** · theme id `159278366958`  
`theme_store_id` = **null** (canlı JS; uydurulmadı)  
shop `taiga-demo-sage.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact (nav/cart/PDP + **CRO**) + validate **bitti** (0 error)  
**PR:** draft — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/taiga/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **38** |
| Evidence PNG | **133** |
| Parallel | yalnız `observations/taiga/`, `evidence/taiga/`, `todo/taiga.md`, `candidates/taiga-leftovers.md` |

**Kapsam satırı:**  
`Taiga · default · Taiga / LIVE update / schema_name Taiga 8.1.0 · theme_store_id null · home→PDP→PLP→collections→search→cart→about/contact→blog→404 · 38 obs · 130 PNG · 0 yeni şema · leftover: candidates/taiga-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/hero/collections/featured×3/hotspots/marquee/look/countdown/video/footer | [x] | [x] |
| Header overlay + Shop drawer-mega 1440 | [x] | [x] |
| Predictive search `backpack` | [x] | [x] 375/768/1440 |
| Mobile menu 375 + 768 | [x] | [x] |
| Cart drawer empty + filled + qty | [x] | [x] (375 qty leftover) |
| PDP Jääkäri M Desert Brown → Olive Green | [x] | [x] |
| PLP `/collections/all` | [x] | [x] |
| Collections index `/collections` | [x] | [x] |
| Search `/search?q=backpack` (42) | [x] | [x] |
| Cart `/cart` empty + filled + qty | [x] | [x] (375 qty leftover) |
| About `/pages/about` | [x] | [x] |
| Contact form (Send yok) | [x] | [x] |
| Journal + article | [x] | [x] |
| 404 leftover | [x] | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [x] 1440 Shop → iki panelli drawer (Backpacks…All products). Görsel kolon yok |
| global-predictive-search | input | [x] 3vp `backpack` — SUGGESTIONS + PRODUCTS + Search for 'backpack' |
| global-menu-drawer | open | [x] 375 + 768 hamburger |
| global-cart-drawer | filled + changed | [x] boş → €61,95 (1) → €123,90 (2) · 375 plus 0×0 leftover |
| cart-page-main | filled + changed | [x] aynı fiyatlar · 375 leftover |
| product-info-main | changed | [x] Desert Brown low-stock → Olive Green In stock |
| promo-banner-countdown | initial | [x] 3vp countdown bant — tıklanabilir kontrol yok |
| lead-capture-form | initial | [x] 3vp boş form — input PII stop |
| testimonial-quote-carousel | initial + changed | [x] 3vp gridy-arrow next — ultimate load hauler → perfect daypack |

Stop: email / account / checkout / newsletter submit / contact Send / PII

---

## Aday / leftover

[`candidates/taiga-leftovers.md`](../candidates/taiga-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 32/32
- [x] Interact mega / search / menu 375+768 / cart / PDP color / **CRO (countdown, contact, testimonials)**
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 0 error
- [x] Newsletter / account / checkout — **yapılmayacak**
