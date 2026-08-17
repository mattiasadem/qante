# Todo — Showcase (Clean Canvas, paid) · Betty

*Kaynak:* https://betty-theme.myshopify.com/  
*Preset:* `default` (Showcase / Betty — resmi Theme Store preview)  
*Slug:* `showcase`  
*Theme Store:* https://themes.shopify.com/themes/showcase  

**Yasak URL:** `showcase-theme.myshopify.com` · `showcase-demo.myshopify.com` (password) — kullanılmadı.

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **showcase-v10.2.0**  
`schema_name` = **Showcase** · `schema_version` = **10.2.0** · `role` = **main** · theme id `145737646133`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
shop `betty-theme.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact + validate **bitti** (0 error)  
**PR:** draft https://github.com/mattiasadem/qante/pull/159 — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/showcase/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **52** |
| PNG | **172** |
| Parallel | yalnız `observations/showcase/`, `evidence/showcase/`, `todo/showcase.md`, `candidates/showcase-leftovers.md` |

**Kapsam satırı:**  
`Showcase · default · showcase-v10.2.0 / schema_name Showcase 10.2.0 · theme_store_id null · home→PDP→PLP→collections→search→cart→about/contact→faq→blog→404 · 52 obs · 172 PNG · 0 yeni şema · leftover: candidates/showcase-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement yok + header/footer + conversion | roster + capture | [x] |
| Mega Shop (hamburger → Shop) 1440 | interact | [x] |
| Predictive search `tote` | interact — öneri yok | [x] |
| Mobile menu 375 + 768 (+ 1440 hamburger) | interact | [x] |
| Cart drawer | ⛔ yok (`/cart` sayfa) | leftover |
| Cart page empty + filled + qty | interact | [x] |
| PDP City All Black COMPACT→MIDI | interact | [x] |
| PLP `/collections/all` | roster + capture | [x] |
| Collections index `/collections` | roster + capture | [x] |
| Search `/search?q=tote` | roster + capture | [x] |
| About `/pages/story-page` + `/pages/about-us` | roster + capture | [x] |
| Contact form (submit yok) | roster + capture | [x] |
| FAQ `/pages/faqs` | roster + capture | [x] |
| Blog `/blogs/fablou-blog` + article | roster + capture | [x] |
| 404 | roster + capture | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | initial / open | [x] 1440 Shop: Silicone + Leather Like + Gift Cards / Like Leather SHOP |
| global-menu-drawer | open / changed | [x] 375/768/1440 hamburger; 375 list, 768/1440 two-col mega |
| global-predictive-search | initial / input | [x] 3vp modal + `tote`; öneri listesi belirmadi |
| cart-page-main | initial / filled / changed | [x] boş → Malibu $84.55 → qty 2 $169.10 |
| product-info-main | initial / changed | [x] COMPACT 13 stock → MIDI 30 stock; fiyat $69/$89 aynı |
| global-cart-drawer | — | yok |

---

## Aday / leftover

[`candidates/showcase-leftovers.md`](../candidates/showcase-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact mega / search / menu / cart / PDP Size
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 0 error / 0 warn
- [x] Email / account / checkout / newsletter submit — **yapılmayacak**
