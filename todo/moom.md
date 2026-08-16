# Todo — Moom Health (moom.health)

*Kaynak:* https://moom.health · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **[20260801] Moom x Kinetic (SG)** · `schema_name`: **Impact** · `schema_version`: **4.4.1** · `theme_store_id`: null · role `main` · theme.id `160979845333`  
*Shop:* `moomhealth.myshopify.com` · CDN `t/198`

**Durum:** Mod A walk + resmi 3vp + interact bitti · validator temiz  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/moom/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/moom/`, `evidence/moom/`, `todo/moom.md`, `candidates/moom-*.md` |
| Observation | **47** |
| PNG | **151** (boş mega-open 1440 silindi) |
| Validator | 65 temiz · 0 error · 0 warn |

**Kapsam satırı:**  
`Moom Health · default · [20260801] Moom x Kinetic (SG) / Impact 4.4.1 (theme_store_id null) · home→PDP Mama Water→PLP bestsellers→search→cart→about→faq→contact→privacy→moom-u→404→mobile · 47 obs · 151 PNG · 0 yeni şema · leftover: candidates/moom-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | [x] obs | [x] capture |
| Mega Shop 1440 | [x] obs | ⛔ leftover (no-js; checkbox gizli) |
| Predictive search overlay | [x] obs | ⛔ leftover (drawer 0×0 → /search) |
| Cart drawer boş + dolu + qty | [x] obs | ⛔ leftover (drawer 0×0 → /cart) |
| Mobile menu 375+768 | [x] obs | [x] interact (open + New Arrivals) |
| PDP `/products/mama-water` + accordion | [x] obs | [x] interact |
| PLP `/collections/bestsellers` | [x] obs | [x] capture |
| Search `/search?q=moom` | [x] obs | [x] capture |
| Cart `/cart` boş + dolu | [x] obs | [x] empty+filled · qty leftover |
| About `/pages/about` | [x] obs | [x] capture |
| FAQ `/pages/faq` + Moom 101 | [x] obs | [x] interact |
| Contact `/pages/contact` form **gönderilmedi** | [x] obs | [x] capture |
| Privacy `/pages/privacy-policy` | [x] obs | [x] capture |
| Moom U `/pages/moom-u` (blog yerine) | [x] obs | [x] capture |
| 404 | [x] obs | [x] capture |
| Quiz / Club Moom / stockists / clinical / reviews | ⛔ leftover | — |
| Newsletter / account / checkout | ⛔ PII | — |

---

## Interact özeti

| Component | State | Sonuç |
|---|---|---|
| `navigation-header-mega` | initial 3vp | [x] viewport |
| `navigation-header-mega` | open 1440 | ⛔ leftover |
| `global-menu-drawer` | open + changed 375/768 | [x] |
| `global-predictive-search` | forceOpen / fill | ⛔ 0×0 |
| `global-cart-drawer` | forceOpen | ⛔ 0×0 |
| `cart-page-main` | empty + filled | [x] (filled = cramp/less, ilk form id) |
| `cart-page-main` | qty + | ⛔ no-js adet değişmedi |
| `product-info-main` | initial + RESULTS TIMELINE | [x] |
| `faq-collapsible-tabs` PDP | initial + Q1 | [x] |
| `faq-collapsible-tabs` FAQ | initial + Q1 | [x] |
| PDP swatch | — | ⛔ h=0 |

---

## Bileşen roster

47 observation — hepsi mevcut şema. 0 yeni `sections/*.json`.

**home (16):** promo-announcement-bar · navigation-header-mega · hero-slideshow · promo-scrolling-marquee · collection-nav-cards · features-multicolumn · product-showcase-grid-featured · comparison-quick-table · testimonial-quote-carousel · editorial-rich-text · testimonial-quote-carousel-2 · features-multicolumn-2 · footer-columns-newsletter · global-cart-drawer · global-predictive-search · global-menu-drawer

**product-detail (9):** product-info-main · features-multicolumn · trust-icon-row · editorial-image-with-text · features-multicolumn-2 · editorial-timeline · comparison-quick-table · editorial-image-with-text-2 · faq-collapsible-tabs

**collection (4):** collection-banner · product-showcase-grid-plp · editorial-rich-text · testimonial-quote-carousel

**search (1):** search-results  
**cart (1):** cart-page-main  
**about-brand (4):** editorial-image-with-text-overlay · product-showcase-grid-featured · features-multicolumn · features-multicolumn-2  
**faq-support (2):** editorial-rich-text · faq-collapsible-tabs  
**contact (3):** editorial-rich-text · lead-capture-form · editorial-rich-text-2  
**policy (1):** page-content-main  
**moom-u (5):** editorial-rich-text · editorial-image-with-text · features-multicolumn · editorial-image-with-text-2 · media-lookbook-banner  
**not-found (1):** page-content-main

---

## Aday / leftover

[`candidates/moom-leftovers.md`](../candidates/moom-leftovers.md)
