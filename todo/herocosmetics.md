# Todo — Hero Cosmetics (herocosmetics.com)

*Kaynak:* https://herocosmetics.com → **https://www.herocosmetics.us/** (302/301 canonical)  
*Preset:* `default`  
*Tema (storefront, uydurulmadı):* **CleansersFullLaunch - 080426 M** · `schema_name`: **Hero Cosmetics** · `schema_version`: **2.0.0** · `theme_store_id`: null (custom) · role `main` · id `149057110058`  
*Shop:* `tbate.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact + validate  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/herocosmetics/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/herocosmetics/`, `evidence/herocosmetics/`, `todo/herocosmetics.md`, `candidates/herocosmetics-*.md` |

**Kapsam satırı:**  
`Hero Cosmetics · default · CleansersFullLaunch / schema_name Hero Cosmetics 2.0.0 custom (theme_store_id null) · home→PDP→PLP→search→mocart→content→footer→mobile · 55 obs · 0 yeni şema · leftover: .com redirect / cart page / Yotpo / quiz PII / C&D privacy / Attentive`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/hero/grids/promo/blog/footer | [x] | [x] (desktop hero 375=0px; mobile hero yalnız 375) |
| Header kapalı + Shop mega 1440 | [x] | [x] |
| Search overlay `patch` | [x] | [x] 375/768/1440 |
| Cart drawer empty + filled + qty | [x] | [x] |
| Mobile hamburger 375+768 | [x] | [x] (1440 mega; accordion leftover) |
| PDP Mighty Patch + 72 count | [x] | [x] |
| PLP `/collections/best-sellers` | [x] | [x] |
| Search `/search?q=patch` | [x] | [x] |
| Cart `/cart` | ⛔ `/?cart=true` leftover | — |
| About `/pages/about-us` | [x] | [x] |
| FAQ `/pages/faq` | [x] | [x] |
| Contact form | [x] | [x] PII yok |
| Privacy `/policies/` + terms + returns | [x] | [x] |
| Blog list + Cleansing 101 | [x] | [x] |
| Reviews + store locator | [x] | [x] |
| Quiz intros (start yok) | [x] | [x] |
| Offers / rewards / FSA / collab / careers / intl | [x] | [x] |
| Bundle builder | [x] | [x] |
| 404 | [x] | [x] |

---

## Bileşen roster

55 observation (50 static + 5 home overlay/interact). 0 yeni şema.

---

## Aday / leftover

[`candidates/herocosmetics-leftovers.md`](../candidates/herocosmetics-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs` + interaction `initial.bolum`)
- [x] Interact mega / search / cart / menu / PDP 72
- [x] PNG bak → stateFindings
- [x] `npm run validate`
