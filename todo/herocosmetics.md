# Todo — Hero Cosmetics (herocosmetics.com)

*Kaynak:* https://herocosmetics.com → **https://www.herocosmetics.us/** (302/301 canonical)  
*Preset:* `default`  
*Tema (storefront, uydurulmadı):* **CleansersFullLaunch - 080426 M** · `schema_name`: **Hero Cosmetics** · `schema_version`: **2.0.0** · `theme_store_id`: null (custom) · role `main` · id `149057110058`  
*Shop:* `tbate.myshopify.com`

**Durum:** Mod A walk yazıldı — resmi 3vp + interact sırada  
**PR:** (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/herocosmetics/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/herocosmetics/`, `evidence/herocosmetics/`, `todo/herocosmetics.md`, `candidates/herocosmetics-*.md` |

**Kapsam satırı:**  
`Hero Cosmetics · default · CleansersFullLaunch / schema_name Hero Cosmetics 2.0.0 custom (theme_store_id null) · home→PDP→PLP→search→mocart→content→footer→mobile · 54 obs · 0 yeni şema · leftover: .com redirect / cart page / Yotpo / UGC 0 / quiz PII / C&D privacy`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/hero/grids/promo/blog/footer | [x] JSON | [ ] capture |
| Header kapalı + Shop mega 1440 | [x] interact JSON | [ ] |
| Search overlay `patch` | [x] interact JSON | [ ] |
| Cart drawer empty + filled + qty | [x] interact JSON | [ ] |
| Mobile hamburger 375+768 | [x] interact JSON | [ ] |
| PDP Mighty Patch + 72 count | [x] JSON | [ ] |
| PLP `/collections/best-sellers` | [x] JSON | [ ] |
| Search `/search?q=patch` | [x] JSON | [ ] |
| Cart `/cart` | ⛔ `/?cart=true` leftover | — |
| About `/pages/about-us` | [x] JSON | [ ] |
| FAQ `/pages/faq` | [x] JSON | [ ] |
| Contact form | [x] JSON | [ ] PII yok |
| Privacy `/policies/` + terms + returns | [x] JSON | [ ] |
| Blog list + Cleansing 101 | [x] JSON | [ ] |
| Reviews + store locator | [x] JSON | [ ] |
| Quiz intros (start yok) | [x] JSON | [ ] |
| Offers / rewards / FSA / collab / careers / intl | [x] JSON | [ ] |
| Bundle builder | [x] JSON | [ ] |
| 404 | [x] JSON | [ ] |

---

## Bileşen roster

54 observation (50 static + 4 home overlay). Capture sonrası işaretlenecek.

---

## Aday / leftover

[`candidates/herocosmetics-leftovers.md`](../candidates/herocosmetics-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static
- [ ] Interact mega / search / cart / menu / PDP 72
- [ ] PNG bak → stateFindings
- [ ] `npm run validate`
