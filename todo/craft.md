# Todo — Craft (Shopify free)

*Kaynak:* https://theme-craft-demo.myshopify.com  
*Preset:* `default`  
*Tema (storefront, uydurulmadı):* **`[Craft] Theme store demo (latest)`** · `schema_name`: **Dawn** · `schema_version`: **2.5.0** · `theme_store_id`: **null** · role `main` · id `144021061886`  
*Shop:* `theme-craft-demo.myshopify.com`  
*Theme Store listing (beklenen, storefront alanı değil):* Craft · [themes.shopify.com/themes/craft](https://themes.shopify.com/themes/craft)

**Durum:** ✅ Mod A walk + resmi 3vp + interact + validate  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/craft/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Observation | **38** |
| Evidence PNG | **135** |
| Şema | **0 yeni** |
| Parallel | yalnız `observations/craft/`, `evidence/craft/`, `todo/craft.md`, `candidates/craft-*.md` |

**Kapsam satırı:**  
`Craft · default · [Craft] Theme store demo (latest) / schema_name Dawn 2.5.0 · theme_store_id null · 12 sayfa · 38 obs · 135 kare · 0 yeni şema · leftover: 404 routes / cart-notification / rec h=0 / alternate PDP`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/collage/collection-list/video/quotes/blog/newsletter/footer | [x] | [x] |
| Header Dinnerware submenu 1440 + hamburger 375/768 | [x] | [x] |
| Predictive search `bowl` | [x] | [x] (1440 input `#Search-In-Modal-1`) |
| Cart notification empty + filled | [x] | [x] (`#cart-notification.active`) |
| Mobile menu drawer 375+768 | [x] | [x] (1440 N/A) |
| PDP Ceramic Carafe Set Color → Blush Pink | [x] | [x] |
| PLP `/collections/dinnerware` | [x] | [x] |
| Collections index `/collections` | [x] | [x] |
| Search `/search?q=bowl` | [x] | [x] |
| Cart `/cart` empty + filled + qty 1→2 | [x] | [x] |
| About `/pages/about-us` | [x] | [x] |
| Contact form (Send yok) | [x] | [x] |
| Magazine list + Sweet & Savory post | [x] | [x] |
| Privacy policy | [x] | [x] |
| 404 | [x] | [x] |

---

## Bileşen roster

38 observation. 0 yeni şema.

---

## Interact (pixel-checked)

- `navigation-header-mega` — 1440 Dinnerware dropdown (5 renk koleksiyonu); 375/768 hamburger + Dinnerware drill
- `global-predictive-search` — bowl → PRODUCTS The Serving Bowl ×4 + Search for "bowl"
- `global-menu-drawer` — 375/768 drawer + Dinnerware accordion
- `global-cart-drawer` — Dawn notification (drawer değil): Item added + View my cart (1). Qty yok
- `cart-page-main` — boş / Carafe Set $97.20 FIRSTTIMER / adet 2 → $194.40
- `product-info-main` — Speckled White → Blush Pink (galeri değişti)

---

## Aday / leftover

[`candidates/craft-leftovers.md`](../candidates/craft-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 32/32
- [x] Interact mega/dropdown · search · cart · menu · PDP color
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 65 temiz · 0 error · 0 warn
