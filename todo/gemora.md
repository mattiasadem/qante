# Todo — Gemora (Speedo Themes) · default

*Kaynak (resmi walk URL):* https://jewelry-online-shop1.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/best-luxury-jewellery-shopify-theme-0s-2-0  
*Preset:* `default` · Slug: `gemora`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store resmi değil)

*Tema (vitrinde okundu, uydurulmadı):*  
`Shopify.theme.name` = **jewelry-online-shop1-v-1-5-0**  
`schema_name` = **Jewelry_online_shop1** · `schema_version` = **1.5.0** · `role` = **main** · theme id `178835947838`  
`theme_store_id` = **null**  
`Shopify.shop` = `jewelry-online-shop1.myshopify.com`

*Password wall:* vendor ürün sayfası “Please enter password `1` to view demo.” Aynı host `/password` — public storefront unlock.

**Durum:** Mod A roster + resmi 3vp (41 tam · menu-drawer 768) · interact sırada  
**PR:** draft — main’e merge yok

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/gemora/default/` |
| Capture | `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **42** |
| Parallel | yalnız `observations/gemora/`, `evidence/gemora/`, `todo/gemora.md`, `candidates/gemora-leftovers.md`, capture unlock helper |

**Kapsam satırı:**  
`Gemora · default · jewelry-online-shop1-v-1-5-0 / Jewelry_online_shop1 1.5.0 · theme_store_id null · Speedo · home→PDP→PLP→collections→search→cart→our-story→contact→faq→blog→404 · 42 obs · 0 yeni şema · leftover: candidates/gemora-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announcement→footer) | roster + 3vp | [x] |
| Mega SHOP 1440 | roster + 3vp kapalı | [ ] interact |
| Predictive search `ring` | roster + 3vp kapalı | [ ] interact |
| Mobile menu 375+768 | 768 homepage kare | [ ] interact |
| Cart drawer empty + filled | empty 3vp | [ ] interact filled |
| PDP earrings Yellow Gold→White Gold | roster + 3vp | [ ] interact |
| PLP `/collections/rings` | roster + 3vp | [x] |
| Collections `/collections` | roster + 3vp | [x] |
| Search `/search?q=ring` | roster + 3vp | [x] |
| Cart `/cart` empty + filled | empty 3vp | [ ] interact filled |
| Our Story `/pages/our-story` | roster + 3vp | [x] |
| Contact form (Send yok) | roster + 3vp | [x] |
| FAQ `/pages/faqs` | roster + 3vp | [ ] interact accordion |
| News + article | roster + 3vp | [x] |
| 404 | roster + 3vp | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Speedo / Dawn class | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar / utility-bar | `promo-announcement-bar` | reuse |
| 2 | header + details.mega-menu SHOP | `navigation-header-mega` | reuse |
| 3 | slideshow-component | `hero-slideshow` | reuse |
| 4 | rich-text (Pandora) | `editorial-rich-text` | reuse |
| 5 | custom_icon Shop By Shape | `collection-nav-icon-buttons` | reuse |
| 6 | collection-list 4 kart | `collection-nav-image-cards` | reuse |
| 7 | new_collection RINGS/EARRINGS | `promo-grid-banner` | reuse |
| 8 | featured tabs New Arrival/Best Seller | `product-showcase-tabs` | reuse |
| 9 | new_collection BRACELETS/PENDANTS | `promo-grid-banner.2` | reuse |
| 10 | rich-text Talk about your brand | `editorial-rich-text.2` | reuse |
| 11 | logo_bar 6 logo | `social-proof-brand-logos` | reuse |
| 12 | FAQ accordion | `faq-collapsible-tabs` | reuse |
| 13 | offer-banner PAN40 | `promo-scrolling-marquee` | reuse |
| 14 | custom_instagram 4 kare | `media-scrolling-gallery` | reuse |
| 15 | footer | `footer-columns-newsletter` | reuse |
| 16 | cart-drawer | `global-cart-drawer` | reuse |
| 17 | #menu-drawer | `global-menu-drawer` | reuse |
| 18 | details-modal#header-search | `global-predictive-search` | reuse |
| — | newsletter-popup h=0 | — | leftover |
| — | quick-add-modal | — | leftover (interact adayı) |

---

## Bileşen checklist (42)

| # | id | sayfa | Screenshot | JSON | Done |
|---|---|---|---|---|---|
| 1–18 | home chrome + sections | home | [ ] | reuse | [ ] |
| 19–22 | PDP main + IWT + related | product-detail | [ ] | reuse | [ ] |
| 23–24 | banner + grid | collection | [ ] | reuse | [ ] |
| 25 | collection-nav-grid | collections | [ ] | reuse | [ ] |
| 26 | search-results | search | [ ] | reuse | [ ] |
| 27–28 | cart empty + featured | cart | [ ] | reuse | [ ] |
| 29–34 | our-story | about-brand | [ ] | reuse | [ ] |
| 35–36 | contact title + form | contact | [ ] | reuse | [ ] |
| 37–39 | faq page | faq-support | [ ] | reuse | [ ] |
| 40–41 | news + article | blog | [ ] | reuse | [ ] |
| 42 | 404 | not-found | [ ] | reuse | [ ] |

---

## Interact (sırada)

| Bileşen | State | Beklenen |
|---|---|---|
| navigation-header-mega | open 1440 | SHOP mega panel |
| global-menu-drawer | open/changed 375+768 | hamburger + SHOP drill |
| global-predictive-search | input | `ring` öneri |
| global-cart-drawer | initial/filled/changed | boş → ATC earrings → adet |
| cart-page-main | initial/filled/changed | boş → satır → qty |
| product-info-main | changed | Yellow Gold → White Gold |
| product-showcase-tabs | changed | New Arrival → Best Seller |
| faq-collapsible-tabs | changed | ilk soru açık |
| hero-slideshow | changed | slayt 1→2 |
| product-showcase-grid-plp | changed | Color Gold filtre |

---

## Aday / leftover

[`candidates/gemora-leftovers.md`](../candidates/gemora-leftovers.md)

---

## Evidence backlog

- [x] Resmi 3vp `capture-observation.mjs` (password unlock) · 124 PNG · menu-drawer 375/1440 zero-size
- [ ] Interact scan → capture → pixel-check
- [ ] `node scripts/validate-schemas.mjs`
