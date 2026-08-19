# Todo — Flow (Eight Themes, paid)

*Kaynak:* https://eight-nourish-demo.myshopify.com/  
*Preset:* `default` (Nourish — official Theme Store preview)  
*Slug:* `flow`  
*Theme Store:* https://themes.shopify.com/themes/flow  

*Tema (vitrinde görülen, uydurulmadı):* `Shopify.theme.name` **Flow R1 — design base** · `id` `150685581382` · `schema_name` **Flow** · `schema_version` **42.0.0** · `theme_store_id` **null** · `role` `main` · shop `flow-queenstown.myshopify.com`

**Yasak URL:** `flow-demo.myshopify.com` (Debut, Flow değil) · `flow-theme.myshopify.com` (password) — kullanılmadı.

**Durum:** ✅ Mod A walk + resmi 3vp + interact (nav/cart + CRO) + validate  
**PR:** draft (CRO interact turu)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/flow/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **48** |
| Evidence PNG | **218** |
| Parallel | yalnız `observations/flow/`, `evidence/flow/`, `todo/flow.md`, `candidates/flow-leftovers.md` |

**Kapsam satırı:**  
`Flow · default · Flow R1 — design base / schema_name Flow 42.0.0 · theme_store_id null · home→PDP→PLP→collections→search→cart→about/contact→faq→blog→404 · 48 obs · 218 PNG · 0 yeni şema · leftover: candidates/flow-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/hero/marquee/grid/quiz/videos/bundle/layered/overlay/cards/featured/social/promo/blog/parallax/footer | [x] | [x] |
| Mega Shop 1440 | [x] | [x] DETOX / ENERGY / SUPER GREEN + 2 promo |
| Predictive search `mango` | [x] | [x] 375/768/1440 |
| Mobile menu 375/768 | [x] | [x] 1440 hamburger 0px leftover |
| Cart drawer empty/filled/qty | [x] | [x] $3 → $6 |
| PDP Almond & Banana Size 500ml→330ml | [x] | [x] $3.00 → $2.00 |
| PLP `/collections/all-smoothies` | [x] | [x] |
| Collections index `/collections` (countdown + ürün grid) | [x] | [x] |
| Search `/search?q=mango` | [x] | [x] |
| Cart `/cart` empty + filled + qty | [x] | [x] adet 2; toplam leftover |
| About `/pages/about-us` | [x] | [x] |
| Contact form (submit yok) | [x] | [x] |
| FAQ `/pages/faqs` | [x] | [x] |
| Blog `/blogs/smoothie-blog` + Tropical Smoothies | [x] | [x] |
| 404 | [x] | [x] |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Interact — nav/cart/PDP (pixel-checked)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | initial / open | [x] 1440 Shop mega — 3 kolon + 2 promo |
| global-predictive-search | initial / input | [x] `mango` — Avocado & Mango / Mango & Coconut |
| global-menu-drawer | open | [x] 375/768; 1440 leftover |
| global-cart-drawer | initial / filled / changed | [x] (0) → (1) $3 → (2) $6 |
| cart-page-main | initial / filled / changed | [x] adet 2; subtotal $3 leftover |
| product-info-main | initial / changed | [x] 500ml $3.00 → 330ml $2.00 |

---

## Interact — CRO (pixel-checked)

| schemaId | sayfa | States | Sonuç |
|---|---|---|---|
| commerce-tools-products-bundle | home | initial / changed | [x] Almond 500ml→330ml · $3.00→$2.00 |
| promo-banner-countdown | collections | initial | [x] flash sale sayaç · changed yok |
| faq-collapsible-tabs | faq-support | initial / changed | [x] Can I change my order… açık |
| faq-collapsible-tabs | contact | initial / changed | [x] Do you ship overseas? açık |
| product-finder-quiz | home | initial | [x] START ekranı · quiz PII stop |
| testimonial-quote-carousel | home | initial | [x] auto vertical scroll · changed yok |
| testimonial-quote-carousel | product-detail | initial | [x] statik yığın · carousel yok |
| media-shop-the-feed | home | initial / changed | [x] 768/1440 Next slide · 375 ok gizli |
| media-scrolling-gallery | faq-support | initial / hover | [x] 1440/768 overlay hover · 375 always-on |
| comparison-quick-table | product-detail | initial / changed | [x] Per 100ml → Per serving |
| lead-capture-form | about-brand | initial | [x] boş form · input PII stop |
| lead-capture-form | contact | initial | [x] boş form · input PII stop |
| lead-capture-newsletter-band | search | initial | [x] boş band · email PII stop |

**Diskte şema var, observation yok:** `before-after-slider` — Flow Nourish’te görülmedi.

---

## Aday / leftover

[`candidates/flow-leftovers.md`](../candidates/flow-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact mega / search / cart / menu / PDP Size / cart qty
- [x] Interact CRO (13 observation · yukarı tablo)
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 0 error
