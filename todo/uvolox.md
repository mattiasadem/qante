# Todo — Uvolox (Speedo Themes) · default

*Kaynak (yalnız resmi walk):* https://uvolox-online.myshopify.com/  
*Katalog:* https://speedothemes.com/collections/shopify-themes  
*Ürün:* https://speedothemes.com/products/uvolox-shopify-fashion-themes-shopify-2-0  
*Preset:* `default` · *Slug:* `uvolox`  
*Vendor:* Speedo Themes (third-party Shopify 2.0, Theme Store official değil)

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Uvolox-online V-1.2.0**  
`schema_name` = **uvolox-online** · `schema_version` = **1.2.0** · `role` = **main** · theme id `163401662782`  
`theme_store_id` = **null**  
`Shopify.shop` = `uvolox-online.myshopify.com`  
Title: `Uvolox Online (password: 1)`

**Password:** Speedo ürün sayfası “Please enter password `1` to view demo.” Aynı host `/password` — public storefront-unlock. Başka host yok.

**Durum:** Mod A walk + resmi 3vp + interact  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/uvolox/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `unlock-storefront.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **29** |
| Parallel | yalnız `observations/uvolox/`, `evidence/uvolox/`, `todo/uvolox.md`, `candidates/uvolox-leftovers.md` + unlock host |

**Kapsam satırı:**  
`Uvolox · default · Uvolox-online V-1.2.0 / schema_name uvolox-online 1.2.0 · theme_store_id null · shop uvolox-online.myshopify.com · password 1 · home→PDP ux-covered-zip-shirt Size S→M→PLP /collections/all→/collections→search shirt→cart empty+filled→about-uvolox→community→product-care→contact→faqs→news+article→lookbook /pages/collections→404 · 29 obs · 0 yeni şema · leftover: candidates/uvolox-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home — header / slideshow / collection cards / mantra video / youtube / footer | roster | [ ] capture |
| Mega | ⛔ yok (Dawn drawer-menu, hamburger 1440) | leftover |
| Predictive search `shirt` | roster | [ ] interact |
| Mobile + 1440 hamburger | roster | [ ] interact |
| Cart drawer | ⛔ yok — #cart-notification + /cart | leftover |
| Cart page empty + filled + qty | roster | [ ] interact |
| PDP `/products/ux-covered-zip-shirt` Size S→M | roster | [ ] interact |
| PDP tabs Product description → Style | roster | [ ] interact |
| PLP `/collections/all` + kart hover | roster | [ ] capture + hover |
| Collections index `/collections` | roster | [ ] capture |
| Search `/search?q=shirt` | roster | [ ] capture |
| About `/pages/about-uvolox` | roster | [ ] capture |
| Community `/pages/community` | roster | [ ] capture |
| Product Care `/pages/product-care` | roster | [ ] capture |
| Contact form (submit yok) | roster | [ ] capture |
| FAQ `/pages/faqs` (`/pages/faq` 404) | roster | [ ] capture + interact |
| Lookbook `/pages/collections` mosaic | roster | [ ] capture |
| News + article | roster | [ ] capture |
| 404 | roster | [ ] capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Bileşen roster

| # | schemaId | sayfa | Karar |
|---|---|---|---|
| 1 | navigation-header-mega | home | reuse · mega yok, hamburger 1440 |
| 2 | hero-slideshow | home | reuse · 1 slayt, metin yok |
| 3 | collection-nav-image-cards | home | reuse · 4× SHOP NOW |
| 4 | media-video-hero | home | reuse · MANTRA mp4 + 2 CTA |
| 5 | media-video-hero.2 | home | reuse · YouTube poster |
| 6 | footer-columns-newsletter | home | reuse · submit yok |
| 7 | global-menu-drawer | home | reuse · 375/768/1440 |
| 8 | global-predictive-search | home | reuse · #Search-In-Modal-1 |
| 9 | product-info-main | product-detail | reuse · zip shirt Size |
| 10 | product-info-tabs | product-detail | reuse |
| 11 | product-showcase-related | product-detail | reuse |
| 12–13 | collection-banner + grid-plp | collection | reuse · /collections/all |
| 14 | collection-nav-grid | collections | reuse |
| 15 | search-results | search | reuse · q=shirt |
| 16 | cart-page-main | cart | reuse |
| 17–18 | form + REACH US | contact | reuse |
| 19 | faq-collapsible-tabs | faq-support | reuse |
| 20–21 | title + IWT | about-brand | reuse |
| 22–23 | slider + VISION | about-brand / community | reuse |
| 24–25 | leather + fabric IWT | about-brand / product-care | reuse |
| 26 | media-mosaic-grid | lookbook | reuse · 3-16 tab |
| 27–28 | blog-list + blog-post | blog-* | reuse |
| 29 | page-content-main | not-found | reuse |

---

## Interact (keşif sonrası)

| Bileşen | State | Durum |
|---|---|---|
| navigation-header-mega | initial | mega yok — hamburger 1440 |
| global-menu-drawer | open 375/768/1440 | [ ] |
| global-predictive-search | open + input `shirt` | [ ] |
| cart-page-main | filled + qty 1→2 | [ ] |
| product-info-main | changed Size S→M | [ ] |
| product-info-tabs | changed Style | [ ] |
| product-showcase-grid-plp | hover kart | [ ] |
| faq-collapsible-tabs | changed accordion | [ ] |

Stop: email / account / checkout / newsletter submit / contact SUBMIT / PII

---

## Aday / leftover

[`candidates/uvolox-leftovers.md`](../candidates/uvolox-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact (`capture-interaction.mjs`)
- [ ] PNG bak → stateFindings
- [ ] `node scripts/validate-schemas.mjs`
- [ ] Email / account / checkout / newsletter submit — **yapılmayacak**
