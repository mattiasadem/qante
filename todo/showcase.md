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

**Durum:** Mod A walk + resmi 3vp + interact (yazılı; kanıt çekilecek)  
**PR:** draft — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/showcase/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **52** |
| Parallel | yalnız `observations/showcase/`, `evidence/showcase/`, `todo/showcase.md`, `candidates/showcase-leftovers.md` |

**Kapsam satırı:**  
`Showcase · default · showcase-v10.2.0 / schema_name Showcase 10.2.0 · theme_store_id null · home→PDP→PLP→collections→search→cart→about/contact→faq→blog→404 · 52 obs · 0 yeni şema · leftover: candidates/showcase-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement yok + header/footer + conversion | roster | [ ] capture |
| Mega Shop (hamburger → Shop) 1440 | interact yazılı | [ ] |
| Predictive search `tote` | interact yazılı — öneri yok | [ ] |
| Mobile menu 375 + 768 | interact yazılı | [ ] |
| Cart drawer | ⛔ yok (`/cart` sayfa) | leftover |
| Cart page empty + filled + qty | interact yazılı | [ ] |
| PDP City All Black COMPACT→MIDI | interact yazılı | [ ] |
| PLP `/collections/all` | roster | [ ] |
| Collections index `/collections` | roster | [ ] |
| Search `/search?q=tote` | roster | [ ] |
| About `/pages/story-page` + `/pages/about-us` | roster | [ ] |
| Contact form (submit yok) | roster | [ ] |
| FAQ `/pages/faqs` | roster | [ ] |
| Blog `/blogs/fablou-blog` + article | roster | [ ] |
| 404 | roster | [ ] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | initial / open | Shop mega 1440 — çekilecek |
| global-menu-drawer | open / changed | 375/768 hamburger + Shop — çekilecek |
| global-predictive-search | initial / input | Modal + `tote`; öneri listesi yoklandı, belirmadi |
| cart-page-main | initial / filled / changed | `/cart` boş → Malibu $89 → qty+ |
| product-info-main | initial / changed | COMPACT 13 stock → MIDI 10 stock; fiyat $89/$69 aynı |
| global-cart-drawer | — | yok |

---

## Aday / leftover

[`candidates/showcase-leftovers.md`](../candidates/showcase-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / menu / cart / PDP Size
- [ ] PNG bak → stateFindings
- [ ] `npm run validate`
