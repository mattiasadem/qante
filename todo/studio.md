# Todo — Studio (Shopify free / Theme Store demo)

*Kaynak:* https://theme-studio-demo.myshopify.com  
*Preset:* `default`  
*Tema (storefront, uydurulmadı):* **[Studio] Theme Store demo (latest)** · `schema_name`: **Dawn** · `schema_version`: **3.0.0** · `theme_store_id`: **null** (beklenen 1378 değil) · role `main` · id `141073547432`  
*Shop:* `theme-studio-demo.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact + **CRO interact** + validate  
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
`Studio · default · Dawn 3.0.0 (theme_store_id null) · home→PDP Rhyme+Gift Card→PLP prints→search vessel→cart page→about-us→contact→journal→404 · 43 obs · 154 PNG · 0 yeni şema · CRO interact: 2/11 · leftover: theme_store_id / no mega / cart-notification / cart-footer / cart qty AJAX / no collection-banner / 404 routes + 9 CRO yok`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/rich-text/slideshow/featured/IWT/artists/newsletter/footer | [x] | [x] |
| Header kapalı + Shop by Artist dropdown 1440 | [x] | [x] (mega yok) |
| Predictive search `vessel` | [x] | [x] |
| Mobile hamburger 375+768 + Shop by Artist nested | [x] | [x] (1440 menu-drawer 0px) |
| PDP Rhyme (varyant yok) | [x] | [x] |
| Gift Card Amount $50→$100 | [x] | [x] |
| PLP `/collections/prints` | [x] | [x] |
| Search `/search?q=vessel` | [x] | [x] |
| Cart `/cart` empty + filled + qty | [x] | [x] (qty 2; toplam AJAX hata) |
| Cart drawer | ⛔ cart-notification leftover | — |
| About `/pages/about-us` | [x] | [x] |
| Contact form | [x] | [x] PII yok |
| Journal list + Rachel Crummey | [x] | [x] |
| 404 | [x] | [x] |
| CRO interact (lead-capture ×3) | [x] | [x] initial only — PII |
| CRO disk (9 şema) | ⛔ storefront yok | — |

---

## Bileşen roster

43 observation (38 static 3vp + 4 vitrine interact + menu-drawer 375/768 + **3 CRO initial interact**). 0 yeni şema.

---

## CRO interact — schemaId → states

| schemaId | States | Sayfa |
|---|---|---|
| `lead-capture-newsletter-band` | `initial` | home |
| `lead-capture-form` | `initial` | about-us, contact |

`input` — tüm lead-capture obs: fill/submit PII → `missingStates`.

---

## Aday / leftover

[`candidates/studio-leftovers.md`](../candidates/studio-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact header / search / cart / menu / gift Amount
- [x] CRO interact lead-capture initial 3vp (`capture-interaction.mjs`)
- [x] PNG bak → stateFindings
- [x] `npm run validate`
