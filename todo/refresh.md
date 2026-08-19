# Todo — Refresh (Shopify first-party, free)

*Kaynak:* https://theme-refresh-demo.myshopify.com  
*Preset:* `default` · Theme Store: [Refresh](https://themes.shopify.com/themes/refresh) · Free · by Shopify

**Şu anki odak:** ✅ CRO interact kapandı — 4 şema, 16 interaction PNG, validate 0

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/refresh/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Shop | `theme-refresh-demo.myshopify.com` |
| Tema (gözlenen) | `Shopify.theme.name` **refresh/refresh-demo-store** · `schema_name` **Dawn** 5.0.0 · `role` **main** · theme id `132932272380` · `theme_store_id` **null** (vitrinde yok; uydurulmadı) |
| Theme Store sayfası | https://themes.shopify.com/themes/refresh/presets/refresh — Refresh · Free · by Shopify |
| Observation | **47** |
| Evidence PNG | **174** |
| Yeni şema | **0** |
| Validator | 65 temiz · 0 error · 0 warn |
| Kapsam satırı | Refresh · default · 11 sayfa · 47 gözlem · 174 kanıt · 0 yeni şema · Shopify first-party free |

---

## Faz

- [x] F1 Sayfa haritası + section roster
- [x] F2 Observation JSON (47) — reuse only
- [x] F3 Statik 3vp `capture-observation.mjs` (41/41)
- [x] F4 Interact: About dropdown · predictive search · cart empty/filled/qty · mobile menu · PDP Scent
- [x] F4b CRO interact: FAQ accordion · press carousel · newsletter band · contact form
- [x] F5 `npm run validate`

---

## Sayfa özeti

| sayfa | URL | Durum |
|---|---|---|
| `home` | `/` | ✅ 18 obs — announcement, header, menu drawer, search, cart drawer, slideshow, 2× featured, press quotes, 4× IWT, rich-text, multicolumn, featured blog, newsletter, footer |
| `product-detail` | `/products/bar-soap-2-pack-2` | ✅ 8 obs — main (Scent) + accordion + quote + trust + routine + 3× IWT |
| `collection` | `/collections/hair` | ✅ 4 obs — banner + PLP + gift IWT + blog IWT |
| `search` | `/search?q=soap` | ✅ 1 obs — 8 sonuç |
| `cart` | `/cart` | ✅ 2 obs — boş/dolu sayfa + favorites |
| `about-brand` | `/pages/our-story` | ✅ 7 obs |
| `faq-support` | `/pages/shipping-and-returns` | ✅ 2 obs |
| `contact` | `/pages/contact` | ✅ 2 obs — form gönderilmedi |
| `blog-list` | `/blogs/news` | ✅ 1 obs |
| `blog-post` | Leaping Bunny yazısı | ✅ 1 obs |
| `not-found` | 404 template | ✅ 1 obs |

---

## Interact (pixel-checked)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 1440 About: Our story / Blog / Contact. Mega kolon yok |
| global-menu-drawer | open, changed | 375/768 hamburger; About drill-down (geri oku) |
| global-predictive-search | open, input | `soap` → PRODUCTS Bar Soap 2 Pack. 375 fill: görünür `#Search-In-Modal` |
| global-cart-drawer | initial, filled, changed | boş + Bar Soap $15 adet1 → adet2 $30. ATC UI. Checkout yok |
| product-info-main | initial, changed | Scent Original → Sandalwood hap |
| cart-page-main | initial, filled | boş + Bar Soap satırı |

### CRO interact (pixel-checked)

| schemaId | States | Not |
|---|---|---|
| faq-collapsible-tabs | initial, changed | shipping-and-returns: ilk soru açık → ikinci soru (tracking email) açıldı |
| testimonial-quote-carousel | initial, changed (375 only) | Forbes 1/4 → GQ 2/4 Slide right. 768/1440 grid, next disabled |
| lead-capture-newsletter-band | initial | Email boş; fill/submit PII dur |
| lead-capture-form | initial | Name/email/phone/comment boş; Send tıklanmadı. Konu select yok |

---

## Aday / şemaya sığmayan

→ [`candidates/refresh-leftovers.md`](../candidates/refresh-leftovers.md)

---

## Evidence backlog

- [x] Home static 3vp
- [x] PDP / PLP / search 3vp
- [x] Cart / about / faq / contact / blog / 404 3vp
- [x] Interact PNG
- [x] CRO interact PNG (16)
