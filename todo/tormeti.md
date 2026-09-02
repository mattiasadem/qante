# Todo — Tormeti (Speedo Themes, third-party Shopify 2.0)

*Kaynak (yalnız resmi walk):* https://tormeti-fashi.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/speedo-pandora-jewellery-shopify-theme-os-2-0  
*Preset:* `default` · *Slug:* `tormeti`  
*Vendor:* Speedo Themes (Theme Store official değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Pandora-jewellery V-1.5.0 final**  
`schema_name` = **Pandora_Jewellery** · `schema_version` = **1.5.0** · `role` = **main** · theme id `143506604249`  
`theme_store_id` = **null**  
`Shopify.shop` = `tormeti-fashi.myshopify.com`  
locale `en` · country `US` · currency `USD`

**Password:** `/` **302** → `/password`. Speedo ürün sayfası: “Please enter password 1 to view demo.” Public storefront unlock `1` — hesap değil. Başka host yok. Şifre `1` açtı.

**Durum:** Mod A walk + resmi 3vp + interact (pixel-check)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/tormeti/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` · `unlock-storefront.mjs` (`storefrontPassword: "1"`) |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **36** |
| Evidence PNG | **146** |
| Parallel | yalnız `observations/tormeti/`, `evidence/tormeti/`, `todo/tormeti.md`, `candidates/tormeti-leftovers.md`, `scripts/unlock-storefront.mjs` |

**Kapsam satırı:**  
`Tormeti · default · Pandora-jewellery V-1.5.0 final / schema_name Pandora_Jewellery 1.5.0 · theme_store_id null · shop tormeti-fashi.myshopify.com · public /password 1 · home→PDP gold-and-diamond-stud-earrings Metal Gold→Yellow Gold→PLP /collections/best-seller 8→/collections→search gold→cart empty/filled qty→about-us→contact→faq→news+seasonal-trends→404 · 36 obs · 0 yeni şema · leftover: candidates/tormeti-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announce→footer) | [x] obs | [x] |
| Desktop Jewellery mega 1440 | interact | [x] crop |
| Predictive search | interact | [ ] input missing |
| Mobile menu 375 + 768 | interact | [ ] resmi kare homepage |
| Cart drawer empty + filled + qty | interact | [x] filled/changed · empty missing |
| PDP Gold And Diamond Stud Earrings Metal Gold→Yellow Gold | interact | [x] |
| PLP `/collections/best-seller` | [x] obs | [x] |
| Collections `/collections` | [x] obs | [x] |
| Search `/search?q=gold` | [x] obs | [x] |
| Cart `/cart` empty + filled + qty | interact | [x] |
| About `/pages/about-us` | [x] obs | [x] |
| Contact `/pages/contact` (submit yok) | [x] obs | [x] |
| FAQ `/pages/faq` | [x] obs | [x] |
| News `/blogs/news` + Seasonal Trends post | [x] obs | [x] |
| 404 | [x] obs | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Tormeti / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · mega crop |
| 3 | slideshow 4ab34acd | `hero-slideshow` | reuse · 3 slayt |
| 4 | custom_icon SHOP BY SHAPE | `collection-nav-icon-buttons` | reuse · 9 kesim |
| 5 | collection-list YOU MAY LOVE | `collection-nav-cards` | reuse |
| 6 | home-page-tab TRENDY | `product-showcase-tabs` | reuse · hover/tab kare değişmedi |
| 7 | banner LAB GROWN | `editorial-image-with-text-overlay` | reuse |
| 8 | sub-banner EXCLUSIVE | `promo-grid-banner` | reuse · timer yok |
| 9 | blog OUR LATEST | `blog-list-main` | reuse · home instance |
| 10 | sectionreviews | `testimonial-quote-carousel` | reuse |
| 11 | custom_instagram @PANDORA | `media-shop-the-feed` | reuse |
| 12 | services 4 ikon | `trust-icon-row` | reuse |
| 13 | footer | `footer-columns-newsletter` | reuse · submit yok |
| 14 | newsletter-popup | — | leftover h=0 |
| 15 | #CartDrawer | `global-cart-drawer` | reuse · filled/changed |
| 16 | #menu-drawer | `global-menu-drawer` | reuse · resmi open kare yalan |
| 17 | details-modal.header__search | `global-predictive-search` | reuse · input missing |

---

## Bileşen checklist

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1–17 | home + overlays | home | [x] | [x] | reuse | [x] |
| 18–19 | banner + PLP | collection | [x] | [x] | reuse | [x] |
| 20 | collection-nav-grid | collections | [x] | [x] | reuse | [x] |
| 21–25 | PDP + IWT + related | product-detail | [x] | [x] | reuse | [x] |
| 26–27 | cart + featured | cart | [x] | [x] | reuse | [x] |
| 28 | search-results | search | [x] | [x] | reuse | [x] |
| 29–31 | about | about-brand | [x] | [x] | reuse | [x] |
| 32–33 | contact | contact | [x] | [x] | reuse | [x] |
| 34 | faq | faq-support | [x] | [x] | reuse | [x] |
| 35 | blog list | blog-list | [x] | [x] | reuse | [x] |
| 36 | blog-post-main | blog-post | [x] | [x] | reuse | [x] |
| 37 | 404 | not-found | [x] | [x] | reuse | [x] |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [x] Jewellery mega crop — 3 kolon + 100% Real/Ethical + featured $150→$140 |
| global-predictive-search | input | missing — resmi kare kapalı homepage; fill input gizli |
| global-menu-drawer | open / changed | missing — 768 viewport homepage; 375 0px |
| global-cart-drawer | filled + changed | [x] ATC ui · adet 1→2 · $140→$280 · kargo $500/$800 |
| global-cart-drawer | initial empty | missing — viewport homepage |
| cart-page-main | filled + changed | [x] boş / satır 1 / adet 2 $280 |
| product-info-main | changed | [x] Metal: Gold → Yellow Gold |
| product-showcase-tabs | hover / changed | missing — kare BEST SELLERS ile aynı |

Stop: email / account / checkout / newsletter submit / contact SUBMIT / PII

---

## Aday / leftover

[`candidates/tormeti-leftovers.md`](../candidates/tormeti-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact mega / cart filled / PDP Metal / cart page
- [x] PNG bak → stateFindings
- [x] `node scripts/validate-schemas.mjs`
- [ ] Predictive search açık + sonuç (ikinci deneme de kapalı kare)
- [ ] Menu drawer resmi kare (Dawn overlay)
