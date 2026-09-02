# Todo — Nouk (Speedo Themes) · default

*Kaynak (resmi walk URL):* https://jewelry-online-shop-3.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/nouk-shopify-jewelry-theme-shopify-os-2-0  
*Preset klasör:* `default`  
*Slug:* `nouk`  
*Vendor:* Speedo Themes (third-party Shopify 2.0 — Theme Store official değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Nouk Jewellery V-1.5.0 | New Mega menu**  
`schema_name` = **Nouk Jewellery** · `schema_version` = **1.5.0** · `role` = **main** · theme id `138617356443`  
`theme_store_id` = **null**  
`Shopify.shop` = `jewelry-online-shop-3.myshopify.com`

**Storefront password:** vendor ürün sayfası + password wall başlığı **`1`** (`Please enter password "1" to view demo.`). Başka host kullanılmadı.

**Durum:** Mod A walk + resmi 3vp + interact  
**PR:** draft — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/nouk/default/` |
| Capture | `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/nouk/`, `evidence/nouk/`, `todo/nouk.md`, `candidates/nouk-leftovers.md`, storefront password helper |

**Kapsam satırı:**  
`Nouk · default · Nouk Jewellery 1.5.0 (theme_store_id null, Speedo) · jewelry-online-shop-3 · storefront password 1 (vendor published) · home→PDP→PLP→search→cart→about/contact/faq→blog→compare/wishlist→policy→collections · 44 obs · ~185 PNG · 0 yeni şema · leftover: candidates/nouk-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster + capture | [x] |
| Mega SHOP 1440 | interact open | [x] |
| Predictive search `diamond` | interact input 375/768/1440 | [x] |
| Mobile menu 375+768 | interact open; RINGS submenu missing | [x] |
| Cart drawer empty + filled + qty | interact | [x] |
| PDP Princess stud White Gold | interact changed | [x] |
| PLP `/collections/earrings` | roster + capture | [x] |
| Collections index `/collections` | roster + capture | [x] |
| Search `/search?q=diamond` | roster + capture | [x] |
| Cart page empty + filled + qty | interact | [x] |
| About `/pages/about-us` | roster + capture | [x] |
| Contact `/pages/contact` (submit yok) | roster + capture | [x] |
| FAQ `/pages/faqs` | roster + capture + 2. soru | [x] |
| Journal + article | roster + capture | [x] |
| Compare / wishlist empty | roster + capture | [x] |
| Privacy policy | roster + capture | [x] |
| Quick view modal | probe var; capture settle 0px | [ ] |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Bileşen roster (44)

Home + chrome, PLP, PDP, search, cart, about, contact, FAQ, blog, compare, wishlist, policy, collections index. Şema reuse — 0 yeni dosya.

---

## Aday / leftover

[`candidates/nouk-leftovers.md`](../candidates/nouk-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact mega / search / cart / menu / PDP / FAQ / tabs
- [x] PNG bak → stateFindings
- [x] `node scripts/validate-schemas.mjs` — 0 error
- [ ] QV official interact karesi (settle tuzağı)
- [ ] Featured kart hover karesi (capture hover düşürdü)
- [ ] Menu RINGS alt liste
