# Todo — Ritual (Shopify first-party, Horizon family)

*Kaynak:* https://theme-ritual-demo.myshopify.com  
*Preset:* `default` · Slug: `ritual` · Theme Store: https://themes.shopify.com/themes/ritual

*Tema (vitrinde görülen, uydurulmadı):* `Shopify.theme.name` **Updated copy of Ritual demo store** · `id` `152770511037` · `schema_name` **Ritual** · `schema_version` **3.4.0** · `theme_store_id` **3625** · `role` `main` · shop `horizon-reborn.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact + CRO interact + validate  
**PR:** draft (CRO interact branch)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/ritual/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** |
| Observation | **31** |
| PNG | **112** |
| Validator | 65 temiz · 0 error · 0 warn |
| Parallel | yalnız `observations/ritual/`, `evidence/ritual/`, `todo/ritual.md`, `candidates/ritual-*.md` |

**Kapsam satırı:**  
`Ritual · default · Updated copy of Ritual demo store / Ritual 3.4.0 · theme_store_id 3625 · Horizon (horizon-reborn) · home→PDP→PLP→collections→search→cart/drawer→about→contact→blog→404 · 31 obs · 112 PNG · 0 yeni şema · leftover: candidates/ritual-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/hero/collections/featured/arrivals/layered/marquee/footer | [x] | [x] |
| Mega | ⛔ yok | leftover |
| Predictive search `tee` | [x] | [x] 375/768/1440 |
| Cart drawer empty/filled/qty 1→2 | [x] | [x] $6,500→$13,000 |
| Mobile menu 375 (768 hamburger 0×0) | [x] | [x] 375; 768 leftover |
| PDP `/products/rose-11-bag-1` Color Red→Ivory | [x] | [x] |
| PLP `/collections/tops` | [x] | [x] |
| Collections index `/collections` | [x] | [x] |
| Search `/search?q=tee` | [x] | [x] |
| Cart `/cart` empty + filled + qty | [x] | [x] |
| About `/pages/about-us` | [x] | [x] |
| Contact form (submit yok) | [x] | [x] |
| Shipping & Returns | [x] | [x] |
| Blog `/blogs/news` + Celeb Style | [x] | [x] |
| 404 leftover + Discover something new | [x] | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Bileşen roster

31 observation. 112 PNG. 0 yeni şema.

---

## Interact (kareye bakıldı)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | ⛔ mega yok — NEW/TOPS/BOTTOMS düz link |
| global-predictive-search | open + input `tee` | [x] öneri → chips + 2 tee + View all |
| global-menu-drawer | open 375 | [x] NEW/TOPS/BOTTOMS + product cards |
| global-cart-drawer | initial / filled / changed | [x] boş → qty1 $6,500 → qty2 $13,000 |
| cart-page-main | initial / filled / changed | [x] aynı |
| product-info-main | changed Color Red→Ivory | [x] ana görsel + etiket |

Stop: email / account / checkout / newsletter submit / contact Submit / PII

### CRO interact (2026-08-19)

| schemaId | states | 3vp |
|---|---|---|
| `lead-capture-form` | initial (input → missingStates PII) | ✓ |

CRO disk listesinden **gözlenmeyen** (leftover): before-after-slider · commerce-tools-products-bundle · promo-banner-countdown · faq-collapsible-tabs · lead-capture-newsletter-band · comparison-quick-table · product-finder-quiz · testimonial-quote-carousel · media-shop-the-feed · media-scrolling-gallery

---

## Aday / leftover

[`candidates/ritual-leftovers.md`](../candidates/ritual-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact search / menu 375 / cart empty-filled-qty / PDP Color
- [x] CRO interact PNG: lead-capture-form initial 3
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 65 temiz · 0 error · 0 warn
- [ ] Email / account / checkout / newsletter submit — **yapılmayacak**
