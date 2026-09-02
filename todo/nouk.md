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
| Parallel | yalnız `observations/nouk/`, `evidence/nouk/`, `todo/nouk.md`, `candidates/nouk-leftovers.md`, capture password helper |

**Kapsam satırı:**  
`Nouk · default · Nouk Jewellery 1.5.0 (theme_store_id null, Speedo) · jewelry-online-shop-3 · storefront password 1 (vendor published) · home→PDP→PLP→search→cart→about/contact/faq→blog→compare/wishlist→policy→collections · 44 obs · 0 yeni şema · leftover: candidates/nouk-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster + capture | [ ] |
| Mega SHOP/RINGS/DIAMONDS 1440 | interact | [ ] |
| Predictive search `diamond` | interact | [ ] |
| Mobile menu 375+768 | interact | [ ] |
| Cart drawer empty + filled + qty | interact | [ ] |
| PDP Princess stud variant | interact | [ ] |
| PLP `/collections/earrings` | roster + capture | [ ] |
| Collections index `/collections` | roster + capture | [ ] |
| Search `/search?q=diamond` | roster + capture | [ ] |
| Cart page empty + filled | interact | [ ] |
| About `/pages/about-us` | roster + capture | [ ] |
| Contact `/pages/contact` (submit yok) | roster + capture | [ ] |
| FAQ `/pages/faqs` | roster + capture + accordion | [ ] |
| Journal + article | roster + capture | [ ] |
| Compare / wishlist empty | roster + capture | [ ] |
| Privacy policy | roster + capture | [ ] |
| Email / account / checkout / newsletter submit | ⛔ PII | — |

---

## Bileşen roster (44)

Home + chrome, PLP, PDP, search, cart, about, contact, FAQ, blog, compare, wishlist, policy, collections index. Şema reuse — `todo` satırları capture sonrası `[x]`.

---

## Aday / leftover

[`candidates/nouk-leftovers.md`](../candidates/nouk-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / cart / menu / PDP / FAQ / QV
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
