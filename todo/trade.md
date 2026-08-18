# Todo — Trade (Shopify first-party · free · B2B)

*Kaynak:* https://theme-trade-demo.myshopify.com/  
*Preset:* `default`  
*Theme Store:* https://themes.shopify.com/themes/trade  
*Tema (storefront, uydurulmadı):* **[Trade] Theme Store demo (latest)** · `schema_name`: **Trade** · `schema_version`: **15.0.0** · `theme_store_id`: **2699** · role `main` · id `168341995542`  
*Shop:* `theme-trade-demo.myshopify.com` (`Shopify.shop` = `84f654-2.myshopify.com`)

**Durum:** ✅ Mod A walk + resmi 3vp + interact + validate  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/trade/default/` |
| Observation | **33** |
| Evidence PNG | **116** |
| Yeni şema | **0** |
| Validator | 65 temiz · 0 error · 0 warn |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Parallel | yalnız `observations/trade/`, `evidence/trade/`, `todo/trade.md`, `candidates/trade-leftovers.md` |

**Kapsam satırı:**  
`Trade · default · [Trade] Theme Store demo (latest) / schema_name Trade 15.0.0 · theme_store_id 2699 · home→PDP Sham+Cape related→PLP bath-towels→collections→search towel→cart→about/contact→FAQ→blog→404 · 33 obs · 116 PNG · 0 yeni şema · leftover: quick-order-list / cart-notification popup / partner form`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement / banner / logos / rich-text / featured ×2 / collection-list / quotes / features / footer | [x] | [x] |
| Header kapalı + Shop mega 1440 | [x] | [x] |
| Predictive search `towel` | [x] | [x] 375/768/1440 |
| Mobile hamburger 375+768 + Shop drill | [x] | [x] (1440 N/A) |
| Cart notification popup | ⛔ AJAX açmadı | header rozet 1 |
| PDP Brushed Cotton Sham (ATC/variant-radios yok) | [x] | [x] 768/1440 thumb |
| PDP Cape related | [x] | [x] |
| PLP `/collections/bath-towels` | [x] | [x] |
| Collections index `/collections` | [x] | [x] |
| Search `/search?q=towel` | [x] | [x] |
| Cart `/cart` empty + filled + qty | [x] | [x] 1→2 · $499→$998 |
| About `/pages/about-us` | [x] | [x] |
| Contact form (Send yok) | [x] | [x] |
| FAQ `/pages/faq` | [x] | [x] |
| Blog list + Using fabric swatches | [x] | [x] |
| 404 | [x] | [x] |

---

## Home roster (DOM)

| # | Trade / id | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | announcement-bar | `promo-announcement-bar` | reuse |
| 2 | header | `navigation-header-mega` | reuse · Shop mega metin |
| 3 | image_banner | `editorial-image-with-text-overlay` | reuse |
| 4 | multicolumn logos | `social-proof-brand-logos` | reuse |
| 5 | rich_text | `editorial-rich-text` | reuse |
| 6 | featured_collection1 | `product-showcase-grid-featured` | reuse · QuickBulk |
| 7 | collection_list | `collection-nav-image-cards` | reuse |
| 8 | multicolumn1 quotes | `testimonial-quote-carousel` | reuse |
| 9 | featured_collection2 | `product-showcase-grid-featured.2` | reuse |
| 10 | multicolumn2 | `features-multicolumn` | reuse |
| 11 | footer | `footer-columns-newsletter` | reuse · newsletter yok |
| 12 | header-drawer | `global-menu-drawer` | reuse |
| 13 | predictive-search | `global-predictive-search` | reuse |
| 14 | cart-notification | `global-cart-drawer` | reuse · popup açılmadı |

---

## Interact (pixel-checked)

- Header 1440 Shop mega: Shop all + Home decor / Towels / Loungewear / Bedding (görsel yok)
- Hamburger 375/768: Shop → Shop all + 4 kategori ok
- Predictive `towel`: SUGGESTIONS + PRODUCTS Tassel / Organic Cotton / Fouta Stripe / Waffle
- Cart notification: `.active` yok (add.js + QOL plus). Header rozet 1
- Cart page: empty → Cape $499 qty1 → qty2 $998
- PDP: 768/1440 galeri thumb-2 lifestyle. 375 next karesi 1/2 kaldı. Variant-radios yok

Stop: email, account, checkout, newsletter (yok), contact Send, company-account-request, PII

---

## Aday / leftover

[`candidates/trade-leftovers.md`](../candidates/trade-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`) — 27/27
- [x] Interact mega / search / menu / cart / PDP
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 65 temiz · 0 error · 0 warn
