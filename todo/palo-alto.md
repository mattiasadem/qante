# Todo — Palo Alto (Shopify paid) · default

*Kaynak:* https://palo-alto-theme-main.myshopify.com/  
*Yasak URL:* `palo-alto-demo.myshopify.com` (password) — **kullanılmadı**  
*Preset:* `default` (Palo Alto main / clothing) · *Slug:* `palo-alto`  
*Theme Store:* https://themes.shopify.com/themes/palo-alto · Presidio

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **PA 9.2.0**  
`schema_name` = **Palo Alto** · `schema_version` = **9.2.0** · `role` = **main** · theme id `157413572796`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
shop `palo-alto-theme-main.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact + validate (devam)  
**PR:** draft — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/palo-alto/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/palo-alto/`, `evidence/palo-alto/`, `todo/palo-alto.md`, `candidates/palo-alto-leftovers.md` |

**Kapsam satırı:**  
`Palo Alto · default · PA 9.2.0 / schema_name Palo Alto 9.2.0 · theme_store_id null · home→PDP→PLP→collections→search→cart→about/contact→faq→blog→404 · 57 obs · 0 yeni şema · leftover: candidates/palo-alto-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer + conversion blocks | roster | [ ] capture |
| Mega Apparel 1440 | interact | [ ] |
| Predictive search `shirt` | interact 3vp | [ ] |
| Mobile menu 375 + 768 | interact | [ ] |
| Cart drawer empty + filled + qty | interact 3vp | [ ] |
| PDP Revive Dress Color Checkered→Black | interact 3vp | [ ] |
| PLP `/collections/all` | roster | [ ] capture |
| Collections index `/collections` | roster | [ ] capture |
| Search `/search?q=shirt` | roster | [ ] capture |
| Cart page empty + filled + qty | interact 3vp | [ ] |
| About `/pages/about` | roster | [ ] capture |
| Contact form (submit yok) | roster | [ ] capture |
| FAQ `/pages/faq` | roster | [ ] capture |
| News + Ultimate Gift Guide | roster | [ ] capture |
| 404 leftover | roster | [ ] capture |
| Email popup / account / checkout / newsletter submit | ⛔ dur | — |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [ ] 1440 Apparel hover |
| global-predictive-search | input | [ ] 3vp `shirt` |
| global-menu-drawer | open | [ ] 375 + 768 |
| global-cart-drawer | filled + changed | [ ] |
| cart-page-main | filled + changed | [ ] |
| product-info-main | changed | [ ] Color Black |

---

## Aday / leftover

[`candidates/palo-alto-leftovers.md`](../candidates/palo-alto-leftovers.md)

---

## Evidence backlog

- [ ] Statik 3vp
- [ ] Mega / search / cart empty+filled+qty / mobile menu 375+768 / PDP Color
- [x] Email / account / checkout / newsletter submit — **yapılmayacak**
