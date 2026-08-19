# Todo — Origin (Shopify first-party, free)

*Kaynak:* https://theme-origin-demo.myshopify.com  
*Preset:* `default` · Slug: `origin`

*Tema (vitrinde görülen, uydurulmadı):* `Shopify.theme.name` **[Origin] Theme Store demo (latest)** · `id` `168342061078` · `schema_name` **Origin** · `schema_version` **15.1.0** · `theme_store_id` **1841** · `role` `main` · shop `theme-origin-demo.myshopify.com`

**Beklenen vs canlı:** görev 2291 dedi; canlı `theme_store_id` **1841**. 2291 yazılmadı.

**Durum:** Mod A walk + resmi 3vp + interact (search / cart / PDP / CRO) bitti  
**PR:** (bu tur — CRO interact)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/origin/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** |
| Observation | **31** |
| PNG | **122** |
| Parallel | yalnız `observations/origin/`, `evidence/origin/`, `todo/origin.md`, `candidates/origin-*.md` |

**Kapsam satırı:**  
`Origin · default · [Origin] Theme Store demo (latest) / Origin 15.1.0 · theme_store_id 1841 (beklenen 2291 değil) · home→PDP→PLP→search→cart/drawer→contact→shipping→blog→404 leftover · 31 obs · 122 PNG · 0 yeni şema · leftover: candidates/origin-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer/newsletter | ✅ | [x] |
| Mega | ⛔ yok | — |
| Predictive search | ✅ 1440 open+input `bag` | 375/768 opener 0×0 leftover |
| Cart drawer empty/filled/qty | ✅ 1→2 $995→$1990 | [x] |
| Mobile menu | ⛔ hamburger yok | leftover |
| PDP `/products/2unfold-bag-copy` Color Gray | ✅ görsel+etiket değişti | [x] |
| PLP `/collections/all` | ✅ 2 kart, filtre yok | [x] |
| Collections list `/collections` | ✅ tek text kart Home page | [x] |
| Search `?q=bag` | ✅ 3 sonuç (2 ürün + blog) | [x] |
| Cart `/cart` boş + dolu | ✅ | [x] |
| Contact `/pages/about` + form (gönderilmedi) | ✅ | [x] |
| Shipping `/pages/shipping-and-returns` | ✅ | [x] |
| Blog `/blogs/news` + Only for the brave | ✅ | [x] |
| 404 leftover | ✅ | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Interact (kareye bakıldı)

| Bileşen | State | Sonuç |
|---|---|---|
| mega | ⛔ | yok |
| mobile menu | ⛔ | hamburger / menu-drawer yok |
| global-predictive-search | open, input | 1440: boş Search → SUGGESTIONS bag + PRODUCTS 2Unfold Bag |
| global-cart-drawer | initial, filled, changed | boş → 2Unfold $995 adet 1 → adet 2 / $1,990 |
| product-info-main | initial, changed | Brown tan → Gray gri çanta |
| cart-page-main | initial, filled | boş → 2Unfold satır $995 |
| lead-capture-form | initial | boş Name/Email/Phone/Comment + Send; input ⛔ PII |
| lead-capture-newsletter-band | initial | THE UPDATES / Stay in the know + boş Email; input ⛔ PII |
| testimonial-quote-carousel | initial | statik 3×2 multicolumn grid; changed/hover ⛔ kontrol yok |

### CRO şema envanteri (görev listesi)

| schemaId | Observation | Interact |
|---|---|---|
| lead-capture-form | ✅ contact | initial 3vp |
| lead-capture-newsletter-band | ✅ home | initial 3vp |
| testimonial-quote-carousel | ✅ home | initial 3vp (statik grid, carousel değil) |
| before-after-slider | ⛔ yok | — |
| commerce-tools-products-bundle | ⛔ yok | — |
| promo-banner-countdown | ⛔ yok | — |
| faq-collapsible-tabs | ⛔ yok | — |
| comparison-quick-table | ⛔ yok | — |
| product-finder-quiz | ⛔ yok | — |
| media-shop-the-feed | ⛔ yok | — |
| media-scrolling-gallery | ⛔ yok | — |

---

## Aday / şemaya sığmayan

- [`candidates/origin-leftovers.md`](../candidates/origin-leftovers.md)

---

## Evidence backlog

- [x] Home static 3vp
- [x] PDP / PLP / search / collections 3vp
- [x] Content (contact, shipping, blog, 404) 3vp
- [x] Drawer / search / PDP renk / cart filled
- [x] CRO interact: lead-capture-form / newsletter-band / testimonial (initial 3vp)
