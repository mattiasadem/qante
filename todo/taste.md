# Todo — Taste (Shopify first-party · free)

*Kaynak:* https://theme-taste-demo.myshopify.com  
*Preset:* `default`  
*Theme Store:* https://themes.shopify.com/themes/taste  
*Tema (storefront, uydurulmadı):* **Taste** · `schema_name`: **Dawn** · `schema_version`: **3.0.0** · `theme_store_id`: **null** · role `main` · id `168341897238`  
*Shop:* `theme-taste-demo.myshopify.com`

**Durum:** ✅ Mod A walk + resmi 3vp + interact (CRO) + validate  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/taste/default/` |
| Observation | **31** |
| Evidence PNG | **108** |
| Yeni şema | **0** |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Parallel | yalnız `observations/taste/`, `evidence/taste/`, `todo/taste.md`, `candidates/taste-*.md` |

**Kapsam satırı:**  
`Taste · default · Dawn 3.0.0 · 31 obs · 108 kanıt · 0 yeni şema · CRO interact: faq-collapsible-tabs + lead-capture-form · leftover: CRO şemaları demo'da yok`

---

## CRO interact (bu tur)

| schemaId | States | Kanıt |
|---|---|---|
| `faq-collapsible-tabs` | initial → changed | 6 PNG (ilk-acik / shipping-acik × 3vp) |
| `lead-capture-form` | initial (input missing: PII) | 3 PNG (bos-form × 3vp) |

**CRO disk şemaları observation'da yok (çekilmedi):** before-after-slider, commerce-tools-products-bundle, promo-banner-countdown, lead-capture-newsletter-band, comparison-quick-table, product-finder-quiz, testimonial-quote-carousel, media-shop-the-feed, media-scrolling-gallery.

**Yakın ama farklı schemaId:** bundles grid → `product-showcase-grid-featured.2`; footer e-posta → `footer-columns-newsletter` (submit yok).

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
| PDP FAQ accordion shipping | [x] | [x] |
| Contact form (submit yok) | [x] | [x] |
| PLP `/collections/all-drinks` | [x] | [x] |
| Search `/search?q=ginger` | [x] | [x] 12 results |
| Cart `/cart` empty + filled + qty | [x] | [x] 1→2 · $3.95→$7.90 |
| About `/pages/about-us` | [x] | [x] |
| Recipes list + Grapefruit Kombucha Float | [x] | [x] |
| 404 leftover | [x] | [x] |

---

## Interact (pixel-checked)

- Header 1440 Drinks: Shop all + 6 koleksiyon (görsel mega yok)
- Hamburger 375/768: Drinks→ Bundles Recipes About→ + sosyal
- Predictive `ginger`: Fiery Ginger / Ginger Turmeric Kombucha / Fiery Ginger Booster
- Cart notification: Item added · View my cart (1) · Check out (tıklanmadı)
- Cart page: empty → qty1 $3.95 → qty2 $7.90
- PDP Size: 60 mL $3.95 → Six Pack $14.95
- FAQ: shelf life açık → shipping tık (çoklu açık; $70+ ücretsiz / altı $10)
- Contact form: boş alanlar; fill/submit PII stop

---

## Aday / leftover

[`candidates/taste-leftovers.md`](../candidates/taste-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact mega / search / cart / menu / PDP Size / FAQ / contact
- [x] PNG bak → stateFindings
- [x] `npm run validate`
