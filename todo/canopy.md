# Todo — Canopy (Shopify paid) · Natural / default

*Kaynak:* https://canopy-theme-natural.myshopify.com/  
*Preset:* `default` (Natural) · *Slug:* `canopy`  
*Theme Store:* https://themes.shopify.com/themes/canopy · Clean Canvas

**Tema (storefront, yeniden okundu, uydurulmadı):**  
`Shopify.theme.name` = **canopy-v7.3.0**  
`schema_name` = **Canopy** · `schema_version` = **7.3.0** · `role` = **main** · theme id `142543028424`  
`theme_store_id` = **null**  
shop `canopy-theme-natural.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact + validate  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/canopy/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/canopy/`, `evidence/canopy/`, `todo/canopy.md`, `candidates/canopy-*.md` |

**Kapsam satırı:**  
`Canopy · default (Natural) · canopy-v7.3.0 / schema_name Canopy 7.3.0 · theme_store_id null · home→PDP→PLP→collections→search→cart→about/contact→faq→blog→404 · 65 obs · 215 PNG · 0 yeni şema · leftover: candidates/canopy-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/promo/slideshow/icons/collections/offers/featured/countdown/quotes/mosaic/IWT/columns/banner/newsletter/footer | [x] | [x] |
| Mega Groceries 1440 | interact | [x] |
| Predictive search `cheese` | interact 3vp | [x] 1440 panel; 375/768 crop leftover |
| Mobile menu 375+768 | interact | [x] 1440 hamburger 0×0 leftover |
| Cart drawer empty + filled + qty | interact | [x] 1440 docked; ikon /cart |
| PDP Soured Cream Weight 7.5oz→15.0oz | interact | [x] |
| PLP `/collections/fruit-vegetables` | [x] | [x] |
| Collections index `/collections` | [x] | [x] |
| Search `/search?q=fresh` | [x] | [x] |
| Cart `/cart` empty + filled + qty | interact | [x] |
| About `/pages/about-us` | [x] | [x] |
| Contact form (Send yok) | [x] | [x] |
| FAQs `/pages/faqs` | [x] | [x] |
| Inspiration list + Buying Fresh post | [x] | [x] |
| 404 | [x] | [x] |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Interact (pixel-check)

| Bileşen | State | Karede |
|---|---|---|
| navigation-header-mega | initial / open | 1440 Groceries hover → sidebar mega (görsel+kolon) |
| global-predictive-search | initial / input | 1440 `cheese` → Products + Suggestions; 375/768 crop leftover |
| global-menu-drawer | open / changed | 375/768 hamburger + Groceries ok |
| global-cart-drawer | initial / filled / changed | 375/768 overlay; 1440 docked; qty plus $3→$6 |
| cart-page-main | initial / filled / changed | boş → Soured Cream $3.00 → adet 2 $6.00 |
| product-info-main | initial / changed | 7.5oz $3.00 → 15.0oz $5.00 + backorder |

---

## Aday / leftover

[`candidates/canopy-leftovers.md`](../candidates/canopy-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 59 × 3
- [x] Interact mega · search · menu · cart · PDP weight
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 0 error
