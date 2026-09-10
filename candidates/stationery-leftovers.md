# Stationery leftovers

*Kaynak:* https://book-online-store-2.myshopify.com/  
*Preset:* default · *Slug:* `stationery`  
*Vendor:* Speedo Themes (üçüncü taraf Shopify 2.0; Theme Store resmi değil)  
*Product:* https://speedothemes.com/products/stationery-office-supplies-stationery-store-shopify-2-0-theme  

**Tema (görülen):** Stationary & Office Supplies  V-1.5.0 · `schema_name` Stationary Supplies **1.5.0** · `theme_store_id` null · shop `book-online-store-2.myshopify.com`  
**Unlock:** `/password` → vendor demo şifre `1` (bu host). Başka host yok.

## Yok / gitmedi

| Madde | Ne oldu |
|---|---|
| Home announcement-bar | Header ilk section; üst ticker yok |
| `#shopify-section-newsletter-popup` | h=0; görsel var (newsletter-popup.jpg). Observation yok |
| FAQ `parallax_MU48pr` | Yalnız “Faq's” 300px başlık bandı. `collection-banner` uydurulmadı |
| About `parallax_PVEayx` | Yalnız “About Us” 300px. Aynı leftover aile |
| About `image_with_icons_MDF73t` | Sol görsel + 3 ikon satır (Premium Materials / Tactile Perfection / Precision and Care). Taksonomide image+icon split yok |
| About `Our Team` dbc23b1d | Evelyn / Maverick / Sophia — Fashion Designer / Director / Marketing Manager. Team mosaic aday |
| PDP `172137309121bf68f7` | 0px boş kutu |
| PDP `multirow_nmyQVH` | İki stacked image+text (LATEST / TRENDING). Tek section iki çift — leftover |
| PDP `related-products` | recommended-products, h=136, metin/görsel yok. `product-showcase-related` uydurulmadı |
| Cart `cart-footer` | Boş sepetken 0px |
| Wishlist `/pages/wishlist` | “No products were added to your wishlist.” Custom page — `product-showcase-favorites` slider değil |
| Compare `/pages/compare` | Boş compare sayfa; drawer değil. `global-compare-drawer` uydurulmadı |
| `/pages/our-story` | Header link; walk `/` home’a düştü (ayrı şablon yok) |
| `/pages/about-us` · `/pages/faqs` | 404 — gerçek about `about-layout-1`, FAQ `/pages/faq` |
| Quick-add modal | DOM’da `QUICK-ADD-MODAL`; PLP `quick-add__submit` = ATC. Ayrı quick-view overlay kanıtı yok |
| Account / login | Header Log in — tıklanmadı |
| Checkout | Cart / drawer Check out — tıklanmadı |
| Newsletter Subscribe / contact Submit | PII — dur |
| Policy / Terms of Service | Footer link; walk dışı |

## Aday (yeni şema yok)

- About `ae0f69b9` Finding Unique Items → **rematch** `editorial-image-with-text-overlay` (görsel üstü metin bandı).
- **page-title-parallax** — 300px başlık bandı (FAQ / About).
- **image-with-icons** — görsel + dikey ikon listesi (about).
- **team-mosaic** — 3 kişi kartı (about). Taksonomide team yok.
- **stats-counter** — yok bu demoda.
- **wishlist-page / compare-page** — boş custom template.
- **newsletter-popup** — kapalı modal.
- **multirow-stacked** — PDP iki image+text çifti tek section.

## Açık soru

- PDP buy box countdown + stok + teslimat — `product-info-main` delta; ayrı şema mı?
- lookbook_card_slider hotspot pin merchant seçimi mi, yoksa yalnız kart rayı mı?
- Home featured-product-section class’ı tek ürün şemasına mı map olmalı? Kare ızgara — `product-showcase-grid-featured` tutuldu.
- Tüm ürünler tek varyant mı? `emit:variant.change` Colored pencil Crayon’da yoklandı (interact).
