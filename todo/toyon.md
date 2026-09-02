# Todo — Toyon (Speedo Themes · third-party Shopify 2.0)

*Kaynak (yalnız resmi walk):* https://toyon-toys.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/speedo-shopify-toy-store-theme  
*Preset:* `default` · slug `toyon`

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Toyon-toys-latest V-1.5.0**  
`schema_name` = **toyon_toys** · `schema_version` = **1.5.0** · `role` = **main** · theme id `145295966363`  
`theme_store_id` = **null** (canlıda yok; uydurulmadı)  
`Shopify.shop` = `toyon-toys.myshopify.com` · locale `en` · country `US` · currency `USD`

**Unlock:** Vendor ürün sayfası demo password `1`. Title `TOYON TOYS (password: 1)`. Public storefront unlock; hesap değil. Başka host yok (`toyon-toys-2` Critters — bu walk değil).

**Durum:** Mod A 41 obs · 121 static + 39 interact = 160 PNG · 0 yeni şema  
**PR:** https://github.com/mattiasadem/qante/pull/369 · draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/toyon/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` + `unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **41** |
| Evidence PNG | **160** (121 static + 39 interact) |
| Parallel | `observations/toyon/`, `evidence/toyon/`, `todo/toyon.md`, `candidates/toyon-leftovers.md`, `scripts/unlock-storefront.mjs` |

**Kapsam satırı:**  
`Toyon · default · Toyon-toys-latest V-1.5.0 / schema_name toyon_toys 1.5.0 · theme_store_id null · password 1 (vendor-published) · home→PDP Baby Teddy→PLP best-sellers→/collections→search teddy→cart→our-story/contact/faqs→news+post→404 · 41 obs · 0 yeni şema · leftover: candidates/toyon-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | [x] obs | [x] static |
| Header Shop / Shop By Age 1440 | [x] interact | [x] hover; dropdown panel missingStates |
| Predictive search `teddy` | [x] interact | [x] input missingStates |
| Mobile menu 375 + 768 | [x] interact | [x] probe açık; PNG homepage missingStates |
| Cart drawer empty + filled + qty | [x] interact | [x] filled+qty; empty PNG homepage |
| PDP Baby Teddy Color Brown→Green | [x] interact | [x] probe Green; PNG kahverengi missingStates |
| PLP `/collections/best-sellers` | [x] obs | [x] static |
| Collections `/collections` | [x] obs | [x] static |
| Search `/search?q=teddy` | [x] obs | [x] static |
| Cart page empty + filled + qty | [x] interact | [x] 3vp filled+qty |
| Our Story `/pages/our-story` | [x] obs | [x] static |
| Contact form (submit yok) | [x] obs | [x] static |
| FAQ `/pages/faqs` | [x] obs | [x] static |
| News + publishing post | [x] obs | [x] static |
| 404 | [x] obs | [x] static |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Toyon / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | `__announcement-bar` | `promo-announcement-bar` | reuse · 2 mesaj slider |
| 2 | `__header` | `navigation-header-mega` | reuse · mega yok · dropdown |
| 3 | `__165665788459900955` Pretend Play | `hero-slideshow` | reuse |
| 4 | `__166073931643cbc6dc` Shop By Age | `collection-nav-icon-buttons` | reuse |
| 5 | `__1661948279a8953643` Shop By Category | `collection-nav-cards` | reuse · 6 kart |
| 6 | `__1660365014fa0fe5e9` Best Sellers | `product-showcase-grid-featured` | reuse |
| 7 | `__1660727588cdfe75f5` testimonials | `testimonial-quote-carousel` | reuse |
| 8 | `__1660733128325f776d` Our Story + Why | `editorial-image-with-text` | reuse · video+ikon aynı section |
| 9 | `__16607403140cb387f0` Toyos Party | `editorial-image-with-text.2` | reuse |
| 10 | `__1660741083474771e7` FAQS | `faq-collapsible-tabs` | reuse |
| 11 | `__1656667513043b6e26` @Toyon | `media-shop-the-feed` | reuse |
| 12 | `__16607174073b1a6d1e` Shop By Brand | `social-proof-brand-logos` | reuse |
| 13 | `__footer` | `footer-columns-newsletter` | reuse · newsletter input yok |
| 14 | `#CartDrawer` | `global-cart-drawer` | reuse |
| 15 | `#menu-drawer` | `global-menu-drawer` | reuse · 375/768 |
| 16 | `#header-search` | `global-predictive-search` | reuse |
| — | `#newsletter-popup` h=0 | — | leftover PII |
| — | PDP empty `__16572629707050636d` | — | leftover |

---

## Aday / leftover

[`candidates/toyon-leftovers.md`](../candidates/toyon-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (121 PNG; menu 375/1440 zero-size)
- [x] Interact header / search / menu / cart / PDP / FAQ (bakıldı)
- [x] Cart drawer + cart page filled/qty 3vp — pikseller değişti
- [x] Header hover / search fill / menu / empty drawer / PDP Green / FAQ changed → `missingStates`
- [x] `node scripts/validate-schemas.mjs` — 0 error
