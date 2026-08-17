# Todo — Craft (Shopify free)

*Kaynak:* https://theme-craft-demo.myshopify.com  
*Preset:* `default`  
*Tema (storefront, uydurulmadı):* **`[Craft] Theme store demo (latest)`** · `schema_name`: **Dawn** · `schema_version`: **2.5.0** · `theme_store_id`: **null** · role `main` · id `144021061886`  
*Shop:* `theme-craft-demo.myshopify.com`  
*Theme Store listing (beklenen, storefront alanı değil):* Craft · [themes.shopify.com/themes/craft](https://themes.shopify.com/themes/craft)

**Durum:** Mod A walk + resmi 3vp + interact + validate  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/craft/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/craft/`, `evidence/craft/`, `todo/craft.md`, `candidates/craft-*.md` |

**Kapsam satırı:**  
`Craft · default · [Craft] Theme store demo (latest) / schema_name Dawn 2.5.0 · theme_store_id null · home→PDP Carafe Set→PLP dinnerware→search bowl→cart page+notification→about→contact→magazine→policy→404 · 0 yeni şema`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/collage/collection-list/video/quotes/blog/newsletter/footer | [ ] | [ ] |
| Header Dinnerware submenu 1440 + hamburger 375/768 | [ ] | [ ] |
| Predictive search `bowl` | [ ] | [ ] |
| Cart notification empty + filled | [ ] | [ ] |
| Mobile menu drawer 375+768 | [ ] | [ ] |
| PDP Ceramic Carafe Set Color → Blush Pink | [ ] | [ ] |
| PLP `/collections/dinnerware` | [ ] | [ ] |
| Collections index `/collections` | [ ] | [ ] |
| Search `/search?q=bowl` | [ ] | [ ] |
| Cart `/cart` empty + filled + qty | [ ] | [ ] |
| About `/pages/about-us` | [ ] | [ ] |
| Contact form (Send yok) | [ ] | [ ] |
| Magazine list + Sweet & Savory post | [ ] | [ ] |
| Privacy policy | [ ] | [ ] |
| 404 | [ ] | [ ] |

---

## Bileşen roster

Observation dosyaları `observations/craft/default/`. 0 yeni şema.

---

## Aday / leftover

[`candidates/craft-leftovers.md`](../candidates/craft-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega/dropdown · search · cart · menu · PDP color
- [ ] PNG bak → stateFindings
- [ ] `npm run validate`
