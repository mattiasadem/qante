# Todo — Stiletto (Shopify paid) · Fluorescent · Vogue

*Kaynak (resmi walk URL):* https://stiletto-theme-vogue.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/stiletto  
*Preset klasör:* `default` (Vogue)  
*Slug:* `stiletto`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **stiletto-v6-1-0**  
`schema_name` = **Stiletto** · `schema_version` = **6.1.0** · `role` = **main** · theme id `160008405141`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
`Shopify.shop` = `stiletto-theme-vogue.myshopify.com`  
Canlı host: `stiletto-theme-vogue.myshopify.com` → **301 primary_domain_redirection** → `stiletto-theme-stiletto.myshopify.com` (aynı mağaza, aynı theme JSON).

**Durum:** Mod A walk + resmi 3vp + nav/cart/PDP interact + **CRO interact** + validate **bitti** (0 error)  
**PR:** draft — CRO interact leftover pass

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/stiletto/default/` |
| Capture | `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **60** |
| PNG | walk + nav interact + **32 CRO interact** (aşağı) |
| Parallel | yalnız `observations/stiletto/`, `evidence/stiletto/`, `todo/stiletto.md`, `candidates/stiletto-leftovers.md` |

**Kapsam satırı:**  
`Stiletto · default (Vogue) · stiletto-v6-1-0 · schema_name Stiletto 6.1.0 · theme_store_id null · home→PDP→PLP→collections→search→cart→about/contact→faq→blog→404 · 60 obs · CRO interact 6 schema · 0 yeni şema · leftover: candidates/stiletto-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster + capture | [x] |
| Mega CLOTHING 1440 | interact | [x] |
| Predictive search `dress` | interact 3vp | [x] |
| Mobile menu 375 | interact | [x] |
| Mobile menu 768 | interact | [x] |
| Cart drawer empty + filled + qty | interact | [x] empty/filled 3vp · qty 1440 |
| PDP Behati XS→S | interact 3vp | [x] |
| PLP `/collections/dresses-1` | roster + capture | [x] |
| Collections index `/collections` | roster + capture | [x] |
| Search `/search?q=dress` | roster + capture | [x] |
| Cart page empty + filled + qty | interact 3vp | [x] |
| About `/pages/about-us` | roster + capture | [x] |
| Contact `/pages/contact` (submit yok) | roster + capture | [x] |
| FAQ `/pages/faq` | roster + capture | [x] |
| Journal + article | roster + capture | [x] |
| 404 | roster + capture | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## CRO interact (scan → capture → pixel-check)

| schemaId | sayfa | States | Sonuç |
|---|---|---|---|
| `promo-banner-countdown` | home | initial | GET IT BEFORE IT'S GONE + DAYS/HOURS/MINUTES. Tıklanabilir kontrol yok → changed yok |
| `testimonial-quote-carousel` | home | initial, changed | swiper-fade + oklar. Sağ ok → farklı alıntı 3vp |
| `testimonial-quote-carousel` | product-detail | initial, changed | testimonials__navigation-button--next → farklı alıntı 3vp |
| `media-shop-the-feed` | home | initial, changed, open | carousel 768/1440; Choose options → .quick-product 3vp; 375 changed yok |
| `faq-collapsible-tabs` | faq-support | initial, changed | ORDERS: How do I make a purchase? → cevap açılır 3vp |
| `lead-capture-form` | contact | initial | Boş form. PII stop → input yok |

**Gözlemli ama bu pass'te interact edilmedi:** `faq-collapsible-tabs` (about-brand, contact, faq-support-2/3) — statik initial kaldı.

**Diskte şema var, Stiletto'da observation yok:** `before-after-slider`, `commerce-tools-products-bundle`, `comparison-quick-table`, `product-finder-quiz`, `media-scrolling-gallery`, `lead-capture-newsletter-band`.

---

## Interact (nav/cart — önceki pass)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | 1440 CLOTHING: 2 kolon + THE CITY EDIT / DISCOVER |
| global-predictive-search | input | `dress` — suggestions + Coastline $349→$259 / Chloe $319 + VIEW ALL RESULTS |
| global-menu-drawer | open | 375/768 siyah drawer + thumb/chevron. Register/Login tıklanmadı |
| global-cart-drawer | filled + changed | empty + Behati $249 3vp; qty 2 / $498 yalnız 1440 |
| cart-page-main | filled + changed | empty → qty1 $249 → qty2 $498 + free shipping 3vp |
| product-info-main | changed | XS → S chip; $249 aynı; Color Pearl |

---

## Aday / leftover

[`candidates/stiletto-leftovers.md`](../candidates/stiletto-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs` / recapture `capture-interaction.mjs`)
- [x] JOIN US + walkthrough kapatıldı; Get 10% Off tab leftover
- [x] Interact mega / search / cart / menu / PDP Size
- [x] **CRO interact** countdown / testimonials / shop-feed / FAQ / contact form
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 0 error
