# Todo — Digitech (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://digital-gallery-shop.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/digital-gallery-shop-shopify-digital-gallery-themes-shopify-2-0  
*Preset:* `default` · *Slug:* `digitech`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store official değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Digital Gallery Shop V-1.5.0**  
`schema_name` = **Digital gallery shop** · `schema_version` = **1.5.0** · `role` = **main** · theme id `143567782103`  
`theme_store_id` = **null**  
`Shopify.shop` = `digital-gallery-shop.myshopify.com`  
Title: `Digitech - Digital Gallery Store – Digital Gallery Shop (password: 1)`  
Storefront password (ürün sayfasında yayın): **`1`** — aynı host `/password`, başka vitrin yok.

**Durum:** ✅ Mod A walk + resmi 3vp + interact (pixel-check)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/digitech/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **38** |
| Evidence | **141 PNG** (96 static 3vp + 45 interact) |
| Parallel | yalnız `observations/digitech/`, `evidence/digitech/`, `todo/digitech.md`, `candidates/digitech-leftovers.md` + `unlock-storefront` host |

**Kapsam satırı:**  
`Digitech · default · Digital Gallery Shop V-1.5.0 / schema_name Digital gallery shop 1.5.0 · theme_store_id null · shop digital-gallery-shop.myshopify.com · Speedo Themes · home→PDP digital-planner-email-templates→PLP /collections/all→/collections→search planner→cart empty+filled→about-us→faqs→contact→news+article→404 · 38 obs · 141 PNG · 0 yeni şema · leftover: candidates/digitech-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/hero/multicolumn/featured/IWT/collections/favorites/newsletter/trust/footer | roster | [x] capture |
| Mega SHOP | roster | [x] interact 1440 |
| Predictive search `planner` | roster | [x] interact 375/768 |
| Mobile hamburger + Shop nested | roster | [x] interact 375/768 |
| Cart drawer empty + filled + qty | roster | [x] interact |
| PDP qty 1→2 | roster | [x] interact |
| PLP `/collections/all` | roster | [x] capture |
| Collections `/collections` | roster | [x] capture |
| Search `/search?q=planner` | roster | [x] capture |
| Cart page empty + filled + qty | roster | [x] interact |
| About `/pages/about-us` | roster | [x] capture |
| Contact form (submit yok) | roster | [x] capture |
| FAQ `/pages/faqs` | roster | [x] capture + interact |
| News + influencer article | roster | [x] capture |
| 404 | roster | [x] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | initial / open | [x] 1440 SHOP mega 4 koleksiyon |
| global-menu-drawer | open / changed | [x] 375/768 + Shop nested |
| global-predictive-search | initial / input | [x] 375/768 `planner` (1440 arama yok) |
| global-cart-drawer | initial / filled / changed | [x] boş → $39 qty1 → $78 qty2 |
| cart-page-main | initial / filled / changed | [x] boş → $39 qty1 → $78 qty2 |
| product-info-main | initial / changed | [x] qty 1→2 |
| faq-collapsible-tabs | initial / changed | [x] Q1 açık; Q2 açılınca multi-open |

Stop: email / account / checkout / newsletter submit / contact SUBMIT / PII

---

## Aday / leftover

[`candidates/digitech-leftovers.md`](../candidates/digitech-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact mega / hamburger / search / cart / PDP qty / FAQ
- [x] PNG bak → stateFindings
- [x] `node scripts/validate-schemas.mjs`
- [x] Email / account / checkout / newsletter submit — **yapılmayacak**
