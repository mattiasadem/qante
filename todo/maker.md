# Todo — Maker (Shopify paid / Theme Store official demo)

*Kaynak:* https://maker-theme-food.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/maker  
*Preset:* `default` (Food)  
*Slug:* `maker`

**Tema (storefront, uydurulmadı):**  
`Shopify.theme` = `{"name":"Maker - current","id":74552705096,"schema_name":"Maker","schema_version":"5.2.0","theme_store_id":null,"role":"main"}`  
`Shopify.shop` = `maker-theme-food.myshopify.com`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
Title: Maker Shopify Theme - Food Preset · currency CAD

**Durum:** Mod A walk + resmi 3vp + interact — capture kuyruğu  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/maker/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **22** (yazıldı; PNG capture sonrası) |
| Parallel | yalnız `observations/maker/`, `evidence/maker/`, `todo/maker.md`, `candidates/maker-leftovers.md` |

**Kapsam satırı:**  
`Maker · default (Food) · Maker - current · schema_name Maker 5.2.0 · theme_store_id null · home→PDP Empress Box→PLP juices→/collections→search empress→cart empty/filled/qty→about→contact frontpage→blog+article→404 · 22 obs · 0 yeni şema · leftover: map / no-mega / newsletter-popup / search overlay / FAQ 404`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [ ] capture |
| Header kapalı (mega yok) | [x] obs | [ ] interact |
| Predictive search `empress` | [x] obs | [ ] interact |
| Mobile hamburger 375+768 | [x] obs | [ ] interact |
| Cart drawer empty + filled + qty | [x] obs | [ ] interact |
| PDP Empress BOX Mixed→Green Goddess | [x] obs | [ ] interact |
| PLP `/collections/empress-juice-collection` | [x] obs | [ ] capture |
| Collections index `/collections` | [x] obs | [ ] capture |
| Search `/search?q=empress` | [x] obs | [ ] capture |
| Cart `/cart` empty + filled + qty | [x] obs | [ ] interact |
| About `/pages/about-us` | [x] obs | [ ] capture |
| Contact `/pages/frontpage` (submit yok) | [x] obs | [ ] capture |
| FAQ `/pages/faq` | 404 leftover | — |
| Blog `/blogs/news` + Jamie Dunn article | [x] obs | [ ] capture |
| 404 | [x] obs | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Maker / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · mega **yok** |
| 3 | 1520359927131 featured-content | `editorial-image-with-text-overlay` | reuse · hero |
| 4 | 1558537947647 featured-product | `product-showcase-featured` | reuse |
| 5 | 1520360055050 featured-content | `editorial-image-with-text` | reuse · text left |
| 6 | 1558537159265 featured-blog | `blog-list-main` | reuse |
| 7 | 1522330492385 featured-content | `editorial-image-with-text.2` | reuse · text right |
| 8 | 1520360150159 map | — | leftover |
| 9 | footer | `footer-columns-newsletter` | reuse · ince |
| 10 | .cart--root | `global-cart-drawer` | reuse · interact |
| 11 | .search--root modal | `global-predictive-search` | reuse · interact |
| 12 | .mobile-nav | `global-menu-drawer` | reuse · 375/768 |
| 13 | .popup--root | — | leftover PII |

---

## Interact (pixel-check)

- Header 1440: mega yok (düz link)
- Hamburger 375/768: sol drawer SEARCH/ACCOUNT + nav + newsletter (submit yok)
- Search overlay `empress`: kare bakılacak
- Cart drawer + cart page empty/filled/qty +
- PDP BOX Mixed Box 5-Pack → Green Goddess 5-Pack

Stop: email, account, checkout, newsletter ENTER, contact SEND, PII

---

## Aday / leftover

[`candidates/maker-leftovers.md`](../candidates/maker-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact header / search / cart / menu / PDP BOX
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
