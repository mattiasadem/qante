# Aday — Topicals Hydrogen / Sanity

*Kaynak:* https://mytopicals.com · 2026-08-15

## Platform

Canlı vitrin **Shopify Hydrogen + Oxygen** (`powered-by: Shopify, Oxygen, Hydrogen`) + **Sanity** (`projectId=8jzc05dl`).  

Theme Store adı / `Shopify.theme.name` **görünmüyor** — uydurulmadı. Envanter slug’ı `topicals` (görev).

Hydrogen sayfalarında `#shopify-section-*` yok. Sanity homepage `_type`: `hero` · `productCarousel` · `fullBleed` · `grid` · `socialGallery`.

## Şemaya sokulmayan

| Gördük | Neden aday | En yakın mevcut tip |
|---|---|---|
| Alia `#alia-root-*` scratch-card (“Try your luck”) | Üçüncü parti overlay; e-posta/PII’ye girilmedi | — |
| Okendo PDP reviews (4.7, filtre, sort) | `testimonial-quote-carousel` değil; reviews ailesi yok | — |
| Store locator (Sephora / 772 stores) | Harita + mağaza listesi | `page-content-main` (gözlem var) |
| 404 video (“404 are you lost?”) | Özel 404 şablonu | `page-content-main` (gözlem var) |
| Blog list `/blogs/news` | Hydrogen **404**; article URL yaşıyor | — |
| `/campaigns` | Hydrate boş / video hub | — |
| Rewards loyalty widget | Üçüncü parti; boş section’lar | `page-content-main` |
| Selling-plan sıklık (subscription PLP) | commerce-tools adayı | `product-showcase-grid-featured` |

## 404 (şema yok)

`/blogs/news` · `/blogs/flareupfiles` (list) · sitemap child XML Hydrogen’da homepage/PLP’ye 301
