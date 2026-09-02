# Todo — Sonix (Speedo Themes, third-party Shopify 2.0)

*Kaynak (resmi walk ONLY):* https://sonix-electronics-store.myshopify.com/  
*Vendor catalog:* https://speedothemes.com/collections/shopify-themes  
*Product:* https://speedothemes.com/products/sonix-shopify-electronics-theme-shopify-os-2-0  
*Preset:* `default` · *Slug:* `sonix`  
*Vendor:* Speedo Themes (Theme Store official değil)

**Yasak:** başka host uydurma. Password wall: vendor `1` — **bu hostta** `/password`.

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = ** Sonix V-1.5.0** (başta boşluk)  
`schema_name` = **Sonix** · `schema_version` = **1.5.0** · `role` = **main** · theme id `169615360300`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
shop `sonix-electronics-store.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact · validate  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/sonix/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Unlock | `scripts/unlock-storefront.mjs` · observation `storePassword: "1"` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **39** |
| Parallel | yalnız `observations/sonix/`, `evidence/sonix/`, `todo/sonix.md`, `candidates/sonix-leftovers.md`, unlock + interact script sertleştirmesi |

**Kapsam satırı:**  
`Sonix · default · Sonix V-1.5.0 / schema_name Sonix 1.5.0 · theme_store_id null · home→PDP Echo Dot→PLP alexa→collections→search iphone→cart→about-us/contact→faqs→news+article→404 · 39 obs · 151 PNG · 0 yeni şema · leftover: candidates/sonix-leftovers.md · interact: mega/menu/search1440/FAQ/PLP Color/PDP White/cart-drawer boş · missing: hero slayt2 piksel, search 375/768, cart filled`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/slideshow/marquee/categories/featured/promo/blog/trust/footer | roster | [x] |
| Mega SHOP 1440 | interact | [x] 6 kart |
| Predictive search `iphone` | interact | [x] 1440 · 375/768 missing |
| Mobile menu 375 + 768 | interact | [x] |
| Cart drawer empty + filled + qty | interact | [x] boş · filled missing |
| PDP Echo Dot Color Black→White | interact | [x] etiket White, galeri charcoal |
| PLP `/collections/alexa` Color Black | interact | [x] 1440 8→2 |
| Collections index `/collections` | roster | [x] |
| Search `/search?q=iphone` | roster | [x] |
| Cart `/cart` empty + filled + qty | interact | [x] statik boş · filled missing |
| About `/pages/about-us` | roster | [x] |
| Contact `/pages/contact` (submit yok) | roster | [x] |
| FAQ `/pages/faqs` | roster + interact | [x] ikinci soru açık |
| Blog `/blogs/news` + launching article | roster | [x] |
| 404 leftover | roster | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [x] SHOP 6 kart |
| global-predictive-search | input | [x] 1440 iphone PRODUCTS · 375/768 missing |
| global-menu-drawer | open | [x] 375/768 koyu liste |
| global-cart-drawer | filled + changed | [ ] boş kanıt · filled missing (CF / add.js) |
| cart-page-main | filled + changed | [ ] statik boş · filled missing |
| product-info-main | changed | [x] Color: White |
| hero-slideshow | changed | [ ] iki çekimde de slayt 1 |
| faq-collapsible-tabs | changed | [x] 1+2 açık |
| product-showcase-grid-plp | changed | [x] Color Black 2 of 8 |

---

## Aday / leftover

[`candidates/sonix-leftovers.md`](../candidates/sonix-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 39 obs
- [x] Interact mega / menu / search 1440 / PDP Color / FAQ / PLP Color / cart-drawer boş
- [x] PNG bak → stateFindings
- [x] `node scripts/validate-schemas.mjs` — 0 yeni şema
- [x] Email / account / checkout / newsletter submit — **yapılmayacak**
