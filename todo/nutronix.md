# Todo — Nutronix (Speedo Themes, third-party Shopify 2.0)

*Kaynak (yalnız resmi walk):* https://speedo-nutronix.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/speedo-nutronix-shopify-theme  
*Preset klasör:* `default` · slug `nutronix`  
*Vendor:* Speedo Themes (üçüncü taraf; Shopify Theme Store resmi değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Speedo-nutronix-v-1-5-0**  
`schema_name` = **Speedo nutronix** · `schema_version` = **1.5.0** · `role` = **main** · theme id `170790388006`  
`theme_store_id` = **null** (canlıda yok; Theme Store id uydurulmadı)  
`handle` = `"null"` · `style.id` / `style.handle` = **null**  
Walk host = `Shopify.shop` = **speedo-nutronix.myshopify.com**  
`/` **302** → `/password` · title `Speedo Nutronix (password: 1)` · ürün sayfası: *Please enter password "1" to view demo.*  
Public storefront-unlock `1` — başka host yok.

**Durum:** 🟡 Mod A observation yazıldı — 3vp capture + interact sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/nutronix/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **50** |
| Parallel | yalnız `observations/nutronix/`, `evidence/nutronix/`, `todo/nutronix.md`, `candidates/nutronix-leftovers.md` + capture script unlock |

**Kapsam satırı:**  
`Nutronix · default · Speedo-nutronix-v-1-5-0 / schema_name Speedo nutronix 1.5.0 · theme_store_id null · shop speedo-nutronix.myshopify.com · password 1 · home→PDP gummies→PLP best-sellers→/collections→search quercetin→cart→about-us→contact→faqs→news(boş)→404 · 50 obs · 0 yeni şema · leftover: candidates/nutronix-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announce→footer) | [x] obs | [ ] capture |
| Supplements mega hover 1440 | [ ] interact | [ ] |
| Predictive search `quercetin` | [ ] interact | [ ] |
| Mobile menu 375 + 768 | [ ] interact | [ ] |
| Cart drawer empty + filled + qty | [ ] interact | [ ] |
| PDP gummies qty (varyant yok) | [ ] interact | [ ] |
| PLP `/collections/best-sellers` | [x] obs | [ ] capture |
| Collections `/collections` | [x] obs | [ ] capture |
| Search `/search?q=quercetin` | [x] obs | [ ] capture |
| Cart page empty + filled + qty | [ ] interact | [ ] |
| About `/pages/about-us` | [x] obs | [ ] capture |
| Contact form (submit yok) | [x] obs | [ ] capture |
| FAQ `/pages/faqs` | [x] obs | [ ] capture |
| News `/blogs/news` (boş) | [x] obs | [ ] capture |
| 404 | [x] obs | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Nutronix / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar-section | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · interact |
| 3 | slideshow Quercetin Gummies | `hero-slideshow` | reuse |
| 4 | Our Story | `editorial-rich-text` | reuse |
| 5 | logo-1..4 | `social-proof-brand-logos` | reuse |
| 6 | Harness Quercetin | `editorial-image-with-text` | reuse |
| 7 | Why Choose (2 kolon) | `comparison-quick-table` | reuse · delta: tablo çizgisi yok |
| 8 | Top Products tabs | `product-showcase-tabs` | reuse · interact |
| 9 | 4 IN 1 IMMUNE SUPPORT | `editorial-image-with-text-overlay` | reuse |
| 10 | QUERCETIN ZINC SUPPLEMENT | `editorial-image-with-text-overlay.2` | reuse |
| 11 | Over 20,0000 The Purgenx | `testimonial-quote-carousel` | reuse |
| 12 | FAQ's | `faq-collapsible-tabs` | reuse · interact |
| 13 | video-block | `media-video-hero` | reuse |
| 14 | Free Gift With Order | `trust-icon-row` | reuse |
| 15 | @Nutronix IG | `media-shop-the-feed` | reuse |
| 16 | footer | `footer-columns-newsletter` | reuse |
| 17 | cart-drawer | `global-cart-drawer` | reuse · interact |
| 18 | search modal | `global-predictive-search` | reuse · interact |
| 19 | #menu-drawer | `global-menu-drawer` | reuse · interact |

---

## Aday / şemaya sığmayan

- `candidates/nutronix-leftovers.md`

---

## Evidence backlog

- [ ] resmi 3vp `capture-observation.mjs`
- [ ] interact: mega / search / menu / cart drawer / cart page / PDP qty / FAQ / tabs
