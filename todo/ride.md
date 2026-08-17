# Todo — Ride (Shopify first-party, free)

*Kaynak:* https://theme-ride-demo.myshopify.com  
*Preset:* `default`  
*Tema (storefront, uydurulmadı):* **[Ride] Theme Store demo (latest)** · `schema_name`: **Ride** · `schema_version`: **1.0.0** · `theme_store_id`: **null** (beklenen katalog 1372 `Shopify.theme` üzerinde yok) · role `main` · id `141073449128`  
*Shop:* `theme-ride-demo.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact + validate  
**PR:** draft https://github.com/mattiasadem/qante/pull/132 · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/ride/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/ride/`, `evidence/ride/`, `todo/ride.md`, `candidates/ride-*.md` |

**Kapsam satırı:**  
`Ride · default · [Ride] Theme Store demo (latest) / schema_name Ride 1.0.0 · theme_store_id null (beklenen 1372 yok) · home→PDP(fins)→PLP(fins)→search→cart+notification→contact→team→stories→404→policy · 34 obs · 116 PNG · 0 yeni şema · leftover: theme_store_id / policy boş / frontpage IWT / newsletter tekrar / about 404`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/IWT/grid/multicolumn/collapsible/newsletter/footer | [x] | [x] |
| Header kapalı + SHOP dropdown 1440 (click; hover açmaz) | [x] | [x] |
| Search modal `fin` | [x] | [x] 375/768/1440 |
| Cart notification filled (empty/qty yok) | [x] | [x] |
| Mobile hamburger 375+768 + SHOP accordion | [x] | [x] (1440 mega) |
| PDP FCS II Performer Neo Glass + Size SMALL | [x] | [x] |
| PLP `/collections/fins` | [x] | [x] |
| Search `/search?q=fin` | [x] | [x] |
| Cart `/cart` empty + filled + qty | [x] | [x] |
| Contact form (submit yok) | [x] | [x] |
| Meet the team | [x] | [x] |
| Stories list + How to choose a board | [x] | [x] |
| Privacy policy (boş gövde) | [x] | [x] |
| 404 | [x] | [x] |

---

## Bileşen roster

34 observation (28 static + 6 interact). 116 PNG. 0 yeni şema.

---

## Aday / leftover

[`candidates/ride-leftovers.md`](../candidates/ride-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact mega / search / cart-notification / menu / PDP size / cart qty
- [x] PNG bak → stateFindings (SHOP hover fail → click recapture)
- [x] `npm run validate`
