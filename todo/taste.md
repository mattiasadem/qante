# Todo — Taste (Shopify first-party · free)

*Kaynak:* https://theme-taste-demo.myshopify.com  
*Preset:* `default`  
*Theme Store:* https://themes.shopify.com/themes/taste  
*Tema (storefront, uydurulmadı):* **Taste** · `schema_name`: **Dawn** · `schema_version`: **3.0.0** · `theme_store_id`: **null** · role `main` · id `168341897238`  
*Shop:* `theme-taste-demo.myshopify.com`

**Durum:** ✅ Mod A walk + resmi 3vp + interact + validate  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/taste/default/` |
| Observation | **31** |
| Evidence PNG | **105** |
| Yeni şema | **0** |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Parallel | yalnız `observations/taste/`, `evidence/taste/`, `todo/taste.md`, `candidates/taste-*.md` |

**Kapsam satırı:**  
`Taste · default · Taste / schema_name Dawn 3.0.0 (theme_store_id null) · home→PDP→PLP→search→cart→about→contact→recipes→404 · 31 obs · 105 kanıt · 0 yeni şema · leftover: 404 routes / empty news / cart-notification`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement / IWT / grids / slideshow / footer | [x] | [x] |
| Header kapalı + Drinks details 1440 | [x] | [x] |
| Search modal + predictive `ginger` | [x] | [x] 375/768/1440 |
| Cart notification filled (drawer yok) | [x] | [x] |
| Mobile hamburger 375+768 | [x] | [x] (1440 mega) |
| PDP Fiery Ginger Booster + Size Six Pack | [x] | [x] $3.95 → $14.95 |
| PLP `/collections/all-drinks` | [x] | [x] |
| Search `/search?q=ginger` | [x] | [x] 12 results |
| Cart `/cart` empty + filled + qty | [x] | [x] 1→2 · $3.95→$7.90 |
| About `/pages/about-us` | [x] | [x] |
| Contact form (submit yok) | [x] | [x] |
| Recipes list + Grapefruit Kombucha Float | [x] | [x] |
| 404 leftover | [x] | [x] |

---

## Home roster (DOM)

| # | Dawn / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · details dropdown |
| 3 | image-with-text Take a sip | `editorial-image-with-text` | reuse |
| 4 | featured_collection bestsellers | `product-showcase-grid-featured` | reuse |
| 5 | slideshow-component mid-page | `hero-slideshow` | reuse · tek slayt overlay |
| 6 | collection-list 3 kart | `collection-nav-image-cards` | reuse |
| 7 | image-with-text Jane S. | `editorial-image-with-text.2` | reuse |
| 8 | featured-product Fiery Ginger | `product-showcase-featured` | reuse |
| 9 | multicolumn Keeping it green | `features-multicolumn` | reuse |
| 10 | featured-collection bundles | `product-showcase-grid-featured.2` | reuse |
| 11 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 12 | header-drawer | `global-menu-drawer` | reuse |
| 13 | predictive-search | `global-predictive-search` | reuse |
| 14 | cart-notification | `global-cart-drawer` | reuse · popup, drawer değil |

---

## Interact (pixel-checked)

- Header 1440 Drinks: Shop all + 6 koleksiyon (görsel mega yok)
- Hamburger 375/768: Drinks→ Bundles Recipes About→ + sosyal
- Predictive `ginger`: Fiery Ginger / Ginger Turmeric Kombucha / Fiery Ginger Booster
- Cart notification: Item added · View my cart (1) · Check out (tıklanmadı)
- Cart page: empty → qty1 $3.95 → qty2 $7.90
- PDP Size: 60 mL $3.95 → Six Pack $14.95

---

## Aday / leftover

[`candidates/taste-leftovers.md`](../candidates/taste-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact mega / search / cart / menu / PDP Size
- [x] PNG bak → stateFindings
- [x] `npm run validate`
