# Todo — Studio (Shopify free / Theme Store demo)

*Kaynak:* https://theme-studio-demo.myshopify.com  
*Preset:* `default`  
*Tema (storefront, uydurulmadı):* **[Studio] Theme Store demo (latest)** · `schema_name`: **Dawn** · `schema_version`: **3.0.0** · `theme_store_id`: **null** (beklenen 1378 değil) · role `main` · id `141073547432`  
*Shop:* `theme-studio-demo.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact + validate  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/studio/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/studio/`, `evidence/studio/`, `todo/studio.md`, `candidates/studio-*.md` |

**Kapsam satırı:**  
`Studio · default · [Studio] Theme Store demo (latest) / schema_name Dawn 3.0.0 (theme_store_id null) · home→PDP Rhyme+Gift Card→PLP prints→search vessel→cart page→about-us→contact→journal→404 · 43 obs · 0 yeni şema · leftover: theme_store_id / no mega / cart-notification / cart-footer / no collection-banner / 404 routes`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/rich-text/slideshow/featured/IWT/artists/newsletter/footer | [x] | [ ] capture |
| Header kapalı + Shop by Artist dropdown 1440 | [x] | [ ] interact |
| Predictive search `vessel` | [x] | [ ] interact |
| Mobile hamburger 375+768 + Shop by Artist accordion | [x] | [ ] interact |
| PDP Rhyme (varyant yok) | [x] | [ ] capture |
| Gift Card Amount $50→$100 | [x] | [ ] interact |
| PLP `/collections/prints` | [x] | [ ] capture |
| Search `/search?q=vessel` | [x] | [ ] capture |
| Cart `/cart` empty + filled + qty | [x] | [ ] interact |
| Cart drawer | ⛔ cart-notification leftover | — |
| About `/pages/about-us` | [x] | [ ] capture |
| Contact form | [x] | [ ] PII yok |
| Journal list + Rachel Crummey | [x] | [ ] capture |
| 404 | [x] | [ ] capture |

---

## Bileşen roster

43 observation. 0 yeni şema.

---

## Aday / leftover

[`candidates/studio-leftovers.md`](../candidates/studio-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact header / search / cart / menu / gift Amount
- [ ] PNG bak → stateFindings
- [ ] `npm run validate`
