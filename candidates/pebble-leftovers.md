# Pebble leftovers

*Kaynak:* https://pebble-little.myshopify.com/  
*Tema gözlemi:* **[Live] Pebble-1-0-0** · `schema_name` Pebble · `schema_version` 1.3.0 · `theme_store_id` **null** · theme id `152827625610`

## Tema kimliği

- Canlı `Shopify.theme.theme_store_id` **null**. Theme Store id uydurulmadı.
- `schema_name` **Pebble** (Dawn/Horizon değil). role `main`.
- Preset klasörü `default` = Little vitrin.

## Yok / gitmedi

| Madde | Ne oldu |
|---|---|
| `/pages/about`, `/pages/about-us` | 404. About = `/pages/our-story` |
| `/pages/contact-us` | 404. Contact = `/pages/contact` |
| `/blogs/journal`, `/blogs/blog` | 404. Blog = `/blogs/news` |
| Newsletter popup (`__popup`) | Unlock 10% OFF — PII, dur. Yükseklik 0 kapalı |
| Account / Sign In Register | Header + menu drawer — dur |
| Checkout / Buy It Now | drawer/PDP — tıklanmadı |
| Newsletter Sign Up / contact Send Message / blog comment | PII — dur |
| `/pages/faqs`, help-center, find-a-store, size-chart, policy pages | Walk dışı leftover (sitemap'te var) |
| `/pages/our-journal` | sitemap; news blog walk edildi |
| Store locator (`store_locator_BQJBp9`) | Contact altında NY / LA / Palo Alto — map şeması yok |
| Lookbook hotspot tık | Shop The Look kartları envanterde; overlay leftover |
| Quick-add drawer | `quick-add-drawer` — Choose Options overlay. Interact listesinde yok |
| Size Guide overlay | PDP Size Guide — leftover |
| Mobile submenu `changed` | 375/768 Shop chevron görülebilir; alt menü açılmadı |
| Bundle home `hover` | Scan ikinci-gorsel; section crop'ta thumbnail farkı yok |
| Bundle PDP `hover` | Bag ATC ikonu initial'da görünür; quick-add drawer leftover |
| testimonials_parallax `changed` | Carousel ok/nokta yok — stacked parallax |
| contact form `input` | PII — fill/submit duruldu |
| CRO şemaları sitede yok | before-after-slider, promo-banner-countdown, faq-collapsible-tabs, lead-capture-newsletter-band, comparison-quick-table, product-finder-quiz, media-shop-the-feed, media-scrolling-gallery |
| PLP filtre / sort | Shop All 53 ürün — interact zorunlu değil |
| Search header (`search-header`) | Search results başlık bloğu; `search-results` ayrı |
| Our-story boş görsel (`custom_section_xeNeCm`) | 679px, metin yok — kanıtsız şema yok |
| Our-story quote Jenny Wilson | CEO Garage — leftover |
| Our-story LITTLE PEBBLE marquee | home marquee ile aynı tip |
| PDP custom features / slideshow / FAQ band | home tiplerinin tekrarı — ayrı capture yok |
| Collections ikinci featured (`featured_collection_cXBc3y`) | AH46qU capture; ikincisi leftover |
| Features nav item | 1440 Shop/Collections/Pages mega; Features düz link olabilir |
| Locale / region USD EN | menu drawer — leftover |
| FR/DE/PT sitemap | çok dil; walk yalnız EN |

## Aday (yeni şema yok)

- **testimonials-parallax** — stacked uzun quote + ürün; `testimonial-quote-carousel` + delta.
- **scrolling-cards / scrolling_card_layered** — kaydırmalı editorial + ürün; mevcut editorial şemalar + delta.
- **products_combine** — complete-the-look; `commerce-tools-products-bundle` + delta.
- **flex_carousel** — promo veya koleksiyon şeridi; `promo-grid-banner` / `collection-nav-slider`.
- **custom_section** — Pebble genel konteyner; içeriğe göre reuse.
- **404 template** — taxonomy `pageTypes` içinde yok. `page-content-main` + featured.
- **Collections index** — katalog grid değil; landing (hero + chips + kartlar + featured).

## Interact notları

- Shop mega: `details#Mega-menu-item-sidebar_6tJn4m > summary` hover 1440. Capture `scrollTo(0)` hover'ı kapatıyordu — `forceOpen` details. Kare: sidebar + thumb + The Cozy Crew.
- Predictive: katalog `polo` (Logo Polo Red $45 / Cotton Polo $30 / Stripe Polo Pink $45). 1440 inline; 375/768 drawer.
- Cart: `.cart-drawer-button` → `#cart-drawer-dialog`. ATC UI. qty 1 $45 → qty 2 $90. Free-ship $55 → $10. Checkout tıklanmadı.
- 1440 hamburger yok. 375/768 `.menu-drawer-button` → `#menu-drawer-dialog`. Sign In duruldu.
- PDP Size: 3Y in-stock → 8Y Only 2 items in stock. Color yalnız Red. Fiyat $45.
- **CRO leftover:** home bundle Pink/7Y size select changed. PDP products_combine initial only. testimonials_parallax carousel yok. contact form PII.
