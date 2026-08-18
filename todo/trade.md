# Todo — Trade (Shopify first-party · free · B2B)

*Kaynak:* https://theme-trade-demo.myshopify.com/  
*Preset:* `default`  
*Theme Store:* https://themes.shopify.com/themes/trade  
*Tema (storefront, uydurulmadı):* **[Trade] Theme Store demo (latest)** · `schema_name`: **Trade** · `schema_version`: **15.0.0** · `theme_store_id`: **2699** · role `main` · id `168341995542`  
*Shop:* `theme-trade-demo.myshopify.com` (`Shopify.shop` = `84f654-2.myshopify.com`)

**Durum:** Mod A walk + resmi 3vp + interact (devam)  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/trade/default/` |
| Observation | **33** |
| Evidence PNG | (capture sonrası) |
| Yeni şema | **0** |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Parallel | yalnız `observations/trade/`, `evidence/trade/`, `todo/trade.md`, `candidates/trade-leftovers.md` |

**Kapsam satırı:**  
`Trade · default · [Trade] Theme Store demo (latest) / schema_name Trade 15.0.0 · theme_store_id 2699 · home→PDP→PLP bath-towels→collections→search towel→cart→about/contact→FAQ→blog→404 · 33 obs · 0 yeni şema · leftover: quick-order-list / cart-notification / partner form / shipping-return`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement / banner / logos / rich-text / featured ×2 / collection-list / quotes / features / footer | [x] | [ ] |
| Header kapalı + Shop mega 1440 | [x] | [ ] |
| Predictive search `towel` | [x] | [ ] |
| Mobile hamburger 375+768 + Shop drill | [x] | [ ] |
| Cart notification (drawer yok) | [x] | [ ] |
| PDP Brushed Cotton Sham (buy box ATC/variant yok) | [x] | [ ] |
| PDP Cape related | [x] | [ ] |
| PLP `/collections/bath-towels` | [x] | [ ] |
| Collections index `/collections` | [x] | [ ] |
| Search `/search?q=towel` | [x] | [ ] |
| Cart `/cart` empty + filled + qty | [x] | [ ] |
| About `/pages/about-us` | [x] | [ ] |
| Contact form (Send yok) | [x] | [ ] |
| FAQ `/pages/faq` | [x] | [ ] |
| Blog list + Using fabric swatches | [x] | [ ] |
| 404 | [x] | [ ] |

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
| 14 | cart-notification | `global-cart-drawer` | reuse · popup, drawer değil |

---

## Interact (pixel-check)

- Header 1440 Shop mega: Shop all + Home decor / Towels / Loungewear / Bedding kolonları (görsel yok)
- Hamburger 375/768: Shop drill-down
- Predictive `towel`
- Cart notification: ATC UI yok → add.js fallback (bildirim açılmazsa leftover)
- Cart page: empty → Cape $499 → qty 2
- PDP: variant-radios yok; galeri thumb-2 changed. Quick-order-list leftover

Stop: email, account, checkout, newsletter (yok), contact Send, company-account-request, PII

---

## Aday / leftover

[`candidates/trade-leftovers.md`](../candidates/trade-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / menu / cart / PDP gallery
- [ ] PNG bak → stateFindings
- [ ] `npm run validate`
