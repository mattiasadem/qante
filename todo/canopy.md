# Todo — Canopy (Shopify paid) · Natural / default

*Kaynak:* https://canopy-theme-natural.myshopify.com/  
*Preset:* `default` (Natural) · *Slug:* `canopy`  
*Theme Store:* https://themes.shopify.com/themes/canopy · Clean Canvas

**Tema (storefront, uydurulmadı):**  
`Shopify.theme.name` = **canopy-v7.3.0**  
`schema_name` = **Canopy** · `schema_version` = **7.3.0** · `role` = **main** · theme id `142543028424`  
`theme_store_id` = **null**  
shop `canopy-theme-natural.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact  
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
`Canopy · default (Natural) · canopy-v7.3.0 / schema_name Canopy 7.3.0 · theme_store_id null · home→PDP→PLP→collections→search→cart→about/contact→faq→blog→404 · 65 obs · 0 yeni şema · leftover: candidates/canopy-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/promo/slideshow/icons/collections/offers/featured/countdown/quotes/mosaic/IWT/columns/banner/newsletter/footer | [x] | [ ] capture |
| Mega Groceries 1440 | interact | [ ] |
| Predictive search `cheese` | interact 3vp | [ ] |
| Mobile menu 375+768 | interact | [ ] 1440 hamburger 0×0 leftover |
| Cart drawer empty + filled + qty | interact | [ ] 1440 docked; ikon /cart |
| PDP Soured Cream Weight 7.5oz→15.0oz | interact | [ ] |
| PLP `/collections/fruit-vegetables` | [x] | [ ] |
| Collections index `/collections` | [x] | [ ] |
| Search `/search?q=fresh` | [x] | [ ] |
| Cart `/cart` empty + filled + qty | interact | [ ] |
| About `/pages/about-us` | [x] | [ ] |
| Contact form (Send yok) | [x] | [ ] |
| FAQs `/pages/faqs` | [x] | [ ] |
| Inspiration list + Buying Fresh post | [x] | [ ] |
| 404 | [x] | [ ] |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Interact (pixel-check)

| Bileşen | State | Beklenen |
|---|---|---|
| navigation-header-mega | initial / open | 1440 Groceries hover → sidebar mega (görsel+kolon) |
| global-predictive-search | initial / input | `cheese` → Suggestions + Products/Collections |
| global-menu-drawer | open / changed | 375/768 hamburger + Groceries ok |
| global-cart-drawer | initial / filled / changed | 375/768 overlay; 1440 docked; qty plus |
| cart-page-main | initial / filled / changed | boş → Soured Cream $300 → adet 2 |
| product-info-main | initial / changed | 7.5oz $300 → 15.0oz |

---

## Aday / leftover

[`candidates/canopy-leftovers.md`](../candidates/canopy-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega · search · menu · cart · PDP weight
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
