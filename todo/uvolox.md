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

**Durum:** Mod A walk + resmi 3vp + interact kapandı  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/uvolox/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` + `unlock-storefront.mjs` |
| Şema | **0 yeni · 0 güncelleme** — mevcut tiplere observation + delta |
| Observation | **29** |
| Evidence | **126 PNG** (statik 3vp + shopper states) |
| Parallel | yalnız `observations/uvolox/`, `evidence/uvolox/`, `todo/uvolox.md`, `candidates/uvolox-leftovers.md` + unlock host |

**Kapsam satırı:**  
`Uvolox · default · Uvolox-online V-1.2.0 / schema_name uvolox-online 1.2.0 · theme_store_id null · shop uvolox-online.myshopify.com · password 1 · home→PDP ux-covered-zip-shirt Size S→M→PLP /collections/all hover→/collections→search shirt→cart empty+filled+qty2→about-uvolox→community→product-care→contact→faqs accordion→news+article→lookbook /pages/collections→404 · 29 obs · 126 PNG · 0 yeni şema · leftover: candidates/uvolox-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home — header / slideshow / collection cards / mantra video / youtube / footer | done | [x] |
| Mega | ⛔ yok (Dawn drawer-menu, hamburger 1440) | leftover |
| Predictive search `shirt` | done | [x] interact |
| Mobile + 1440 hamburger | done | [x] interact (375 `.icon-hamburger`) |
| Cart drawer | ⛔ yok — #cart-notification + /cart | leftover |
| Cart page empty + filled + qty | done | [x] interact |
| PDP `/products/ux-covered-zip-shirt` Size S→M | done | [x] interact |
| PDP tabs Product description → Style | done | [x] interact |
| PLP `/collections/all` + kart hover | done | [x] hover 1440 |
| Collections index `/collections` | done | [x] |
| Search `/search?q=shirt` | done | [x] |
| About `/pages/about-uvolox` | done | [x] |
| Community `/pages/community` | done | [x] |
| Product Care `/pages/product-care` | done | [x] |
| Contact form (submit yok) | done | [x] |
| FAQ `/pages/faqs` (`/pages/faq` 404) | done | [x] interact |
| Lookbook `/pages/collections` mosaic | done | [x] |
| News + article | done | [x] |
| 404 | done | [x] |
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
| 7 | global-menu-drawer | home | reuse · 375/768/1440 open |
| 8 | global-predictive-search | home | reuse · shirt öneri + 3 ürün |
| 9 | product-info-main | product-detail | reuse · Size S→M $85 aynı |
| 10 | product-info-tabs | product-detail | reuse · Style tab |
| 11 | product-showcase-related | product-detail | reuse |
| 12–13 | collection-banner + grid-plp | collection | reuse · hover 2. medya |
| 14 | collection-nav-grid | collections | reuse |
| 15 | search-results | search | reuse · q=shirt |
| 16 | cart-page-main | cart | reuse · empty / $85 / $170 |
| 17–18 | form + REACH US | contact | reuse |
| 19 | faq-collapsible-tabs | faq-support | reuse · Q1 açık |
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
| global-menu-drawer | open 375/768/1440 | [x] 375 `.icon-hamburger` |
| global-predictive-search | initial + input `shirt` | [x] öneri + 3 ürün |
| cart-page-main | filled + qty 1→2 | [x] $85 → $170 |
| product-info-main | changed Size S→M | [x] fiyat aynı |
| product-info-tabs | changed Style | [x] turtleneck kopyası |
| product-showcase-grid-plp | hover kart | [x] 1440 2. medya |
| faq-collapsible-tabs | changed accordion | [x] Q1 Visa/PayPal |

Stop: email / account / checkout / newsletter submit / contact SUBMIT / PII

Şema: piksel değişti ama yeni merchant alanı / overlay yok — **şemaya dokunulmadı**.

---

## Aday / leftover

[`candidates/uvolox-leftovers.md`](../candidates/uvolox-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact (`capture-interaction.mjs`)
- [x] PNG bak → stateFindings
- [x] `node scripts/validate-schemas.mjs`
- [x] Email / account / checkout / newsletter submit — **yapılmayacak**
