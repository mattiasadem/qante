# Todo — Moom Health (moom.health)

*Kaynak:* https://moom.health · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **[20260801] Moom x Kinetic (SG)** · `schema_name`: **Impact** · `schema_version`: **4.4.1** · `theme_store_id`: null · role `main` · theme.id `160979845333`  
*Shop:* `moomhealth.myshopify.com` · CDN `t/198`

**Durum:** Mod A walk yazıldı — resmi 3vp + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/moom/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/moom/`, `evidence/moom/`, `todo/moom.md`, `candidates/moom-*.md` |

**Kapsam satırı:**  
`Moom Health · default · [20260801] Moom x Kinetic (SG) / Impact 4.4.1 (theme_store_id null) · home→PDP Mama Water→PLP bestsellers→search→cart→about→faq→contact→privacy→moom-u→404→mobile · 47 obs · 0 yeni şema · leftover: candidates/moom-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | [x] obs | [ ] capture |
| Mega Shop 1440 | [x] obs | [ ] interact |
| Predictive search overlay | [x] obs | [ ] interact |
| Cart drawer boş + dolu + qty | [x] obs | [ ] interact |
| Mobile menu 375+768 | [x] obs | [ ] interact |
| PDP `/products/mama-water` + accordion | [x] obs | [ ] interact |
| PLP `/collections/bestsellers` | [x] obs | [ ] capture |
| Search `/search?q=moom` | [x] obs | [ ] capture |
| Cart `/cart` boş + dolu | [x] obs | [ ] interact |
| About `/pages/about` | [x] obs | [ ] capture |
| FAQ `/pages/faq` + Moom 101 | [x] obs | [ ] interact |
| Contact `/pages/contact` form **gönderilmedi** | [x] obs | [ ] capture |
| Privacy `/pages/privacy-policy` | [x] obs | [ ] capture |
| Moom U `/pages/moom-u` (blog yerine) | [x] obs | [ ] capture |
| 404 | [x] obs | [ ] capture |
| Quiz / Club Moom / stockists / clinical / reviews | ⛔ leftover | — |
| Newsletter / account / checkout | ⛔ PII | — |

---

## Bileşen roster

47 observation — hepsi mevcut şema. Evidence capture sonrası `[x]`.

---

## Aday / leftover

[`candidates/moom-leftovers.md`](../candidates/moom-leftovers.md)
