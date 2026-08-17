# Todo — Ride (Shopify first-party, free)

*Kaynak:* https://theme-ride-demo.myshopify.com  
*Preset:* `default`  
*Tema (storefront, uydurulmadı):* **[Ride] Theme Store demo (latest)** · `schema_name`: **Ride** · `schema_version`: **1.0.0** · `theme_store_id`: **null** (beklenen katalog 1372 `Shopify.theme` üzerinde yok) · role `main` · id `141073449128`  
*Shop:* `theme-ride-demo.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact + validate  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/ride/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/ride/`, `evidence/ride/`, `todo/ride.md`, `candidates/ride-*.md` |

**Kapsam satırı:**  
`Ride · default · [Ride] Theme Store demo (latest) / schema_name Ride 1.0.0 · theme_store_id null (beklenen 1372 yok) · home→PDP(fins)→PLP(fins)→search→cart+notification→contact→team→stories→404→policy · 34 obs · 0 yeni şema · leftover: theme_store_id / policy boş / frontpage IWT / newsletter tekrar / about 404`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/IWT/grid/multicolumn/collapsible/newsletter/footer | [x] | [ ] capture |
| Header kapalı + SHOP dropdown 1440 | [x] | [ ] interact |
| Search modal `fin` | [x] | [ ] interact |
| Cart notification filled (empty/qty yok) | [x] | [ ] interact |
| Mobile hamburger 375+768 + SHOP accordion | [x] | [ ] interact |
| PDP FCS II Performer Neo Glass + Size SMALL | [x] | [ ] interact |
| PLP `/collections/fins` | [x] | [ ] capture |
| Search `/search?q=fin` | [x] | [ ] capture |
| Cart `/cart` empty + filled + qty | [x] | [ ] interact |
| Contact form (submit yok) | [x] | [ ] capture |
| Meet the team | [x] | [ ] capture |
| Stories list + How to choose a board | [x] | [ ] capture |
| Privacy policy (boş gövde) | [x] | [ ] capture |
| 404 | [x] | [ ] capture |

---

## Bileşen roster

34 observation (28 static + 6 interact). 0 yeni şema.

---

## Aday / leftover

[`candidates/ride-leftovers.md`](../candidates/ride-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / cart-notification / menu / PDP size / cart qty
- [ ] PNG bak → stateFindings
- [ ] `npm run validate`
