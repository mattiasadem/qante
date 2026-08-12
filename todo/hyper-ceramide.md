# Todo — Hyper · Ceramide preset (delta)

*Kaynak:* https://hyper-ceramide.myshopify.com/  
*Parent:* [`hyper.md`](./hyper.md) (default tamam)  
*Amaç:* Full kopya değil — **default’ta olmayan / farklı kurulan** tipleri yakala

**Şu anki odak:** ✅ 5 yeni şema + 5 observation (3vp) — soft-reuse delta notları opsiyonel

---

## Meta

| | |
|---|---|
| Preset | `ceramide` |
| Taranan sayfa | 9 (home, collection, PDP, search, cart, about, contact, faq*, blog-list) |
| Home section | 24 |
| *faq URL | `/pages/faq` → 404 (Ceramide’de farklı slug olabilir) |
| Before-after | ✅ PDP’de `image_comparison` var |

**Kapsam satırı:**  
`Hyper (ceramide) · delta · 5 yeni şema · 5 obs / 15 SS · reuse çoğunluk · Shopify`

---

## Karar özeti

| Durum | Ne |
|---|---|
| **REUSE** | header, footer, topbar, featured_collection, collection_list*, buttons_with_icon, custom_content, countdown, favorites, FAQ tabs, related, cart, breadcrumbs… |
| **REUSE + delta notu** | `image_with_text_slider`→hero · `testimonials_masonry`→testimonial layout · `horizontal_products_list`→showcase slider · `multicolumn_icon`→trust/features · `featured_blog`→blog teaser · `promotion_banner`→promo |
| **NEW** | `products_bundle` · `brand_logos` · `shop_the_feed` · `before-after` (`image_comparison`) · `video_hero` |

---

## NEW checklist

| # | Shopify type | schemaId | kategori | Screenshot | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | `products_bundle` | `commerce-tools-products-bundle` | product-showcase* (aday: commerce-tools) | [x] | [x] | [x] |
| 2 | `brand_logos` | `social-proof-brand-logos` | social-proof | [x] | [x] | [x] |
| 3 | `shop_the_feed` | `media-shop-the-feed` | media | [x] | [x] | [x] |
| 4 | `image_comparison` | `before-after-slider` | before-after | [x] | [x] | [x] |
| 5 | `video_hero` | `media-video-hero` | media | [x] | [x] | [x] |

\* `products_bundle` şeması yazılır; kategori kararı `candidates/commerce-tools.md` ile bağlı.

---

## REUSE (observation opsiyonel — sadece fark notu)

Home’da default ile aynı aile: announcement, header, featured collections, icon buttons, custom content, countdown, favorites, collection list/slider, FAQ, trust icons, footer.

Delta observation yazma koşulu: styleKnob/layout belirgin farklıysa (masonry testimonial, IWT slider hero).

---

## Aday güncelleme

- [x] `commerce-tools` — Ceramide home’da canlı `products_bundle` (“Saving 20% On Bundle”)
- [ ] `shop_the_feed` kategori: `media` mi `testimonial-ugc` mi? (şimdilik media)

---

## Evidence backlog

```bash
cd qante/scripts
node capture-observation.mjs ../observations/hyper/ceramide/home/commerce-tools-products-bundle.json
node capture-observation.mjs ../observations/hyper/ceramide/home/social-proof-brand-logos.json
node capture-observation.mjs ../observations/hyper/ceramide/home/media-shop-the-feed.json
node capture-observation.mjs ../observations/hyper/ceramide/product-detail/before-after-slider.json
node capture-observation.mjs ../observations/hyper/ceramide/product-detail/media-video-hero.json
```
