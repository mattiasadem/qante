# Palo Alto leftovers

*Kaynak:* https://palo-alto-theme-main.myshopify.com  
*Yasak:* https://palo-alto-demo.myshopify.com (password) — gidilmedi  
*Tema gözlemi:* **PA 9.2.0** · `schema_name` Palo Alto · `schema_version` 9.2.0 · `theme_store_id` **null**

## Tema kimliği

- Canlı `Shopify.theme.theme_store_id` **null**. Theme Store id uydurulmadı.
- `schema_name` **Palo Alto** · `name` **PA 9.2.0** · theme id `157413572796` · role `main`.
- Preset: official main / clothing (Alohas ürünleri).

## Yok / gitmedi

| Madde | Ne oldu |
|---|---|
| `palo-alto-demo.myshopify.com` | Password — kullanılmadı |
| `/pages/about-us`, `/pages/contact-us` | 404; yaşayan `/pages/about`, `/pages/contact` |
| `/blogs/journal`, `/blogs/blog` | 404; blog = `/blogs/news` |
| Overlay `#…__popup` | 0px — e-posta popup; açılmadı / submit yok |
| Divider section’lar | 1–31px çizgi; observation yok |
| Contact **locations** (`#…__locations`) | OUR STORES · 566 Emerson Street Palo Alto + saatler. Map şeması yok; zorlanmadı |
| `/pages/theme-features` | Tema satış sayfası; walk dışı leftover |
| `/pages/size-chart` | Clothing Size Chart yaşıyor; ayrı walk yok |
| Account / login / Create account | Header + drawer — dur |
| Checkout / BUY IT NOW | PDP + drawer/sayfa — tıklanmadı |
| Newsletter SIGN UP / contact SEND / blog comment | PII — dur |
| SIZE GUIDE popup | PDP buton görüldü; açılmadı |
| QUICK BUY / shop-the-look QV | Kartta yazı var; overlay yoklandı değil |
| Recently viewed (PDP sekme) | “You may also like / Recently viewed” etiketi; sekme değiştirilmedi |
| global-menu-drawer 1440 | Hamburger yok — mega var. 1440 PNG yok (N/A) |

## Aday (yeni şema yok)

- **sticky-image-cards** — home ~2620px pin kartlar → `editorial-images-scroll` + delta
- **hero-scrolling** — 650px tek görsel + kayan “spring style” → `media-scrolling-gallery` + delta
- **banner-with-text-columns** — 3 kolon kampanya → `promo-grid-banner`
- **collections-spotlight** — The Edits → `collection-nav-cards`
- **promotion-row** — 30% OFF + FREE TOTE → `promo-grid-banner`
- **press** — IN THE PRESS → `social-proof-brand-logos`
- **list-collections** `/collections` → `collection-nav-grid`; PLP üstü 4 kart → `collection-nav-slider`
- **404 template** — taxonomy `pageTypes` içinde yok. `page-content-main` + delta
- **locations** — mağaza adresi/saat. Overlay/aday; şema açılmadı

## CRO şemaları (diskte var · observation yok)

| schemaId | Durum |
|---|---|
| before-after-slider | Sitede yok — observation uydurulmadı |
| commerce-tools-products-bundle | Sitede yok |
| comparison-quick-table | Sitede yok |
| product-finder-quiz | Sitede yok |

## CRO interact (2026-08-19)

| schemaId | State | Not |
|---|---|---|
| promo-banner-countdown | initial + changed | Canlı SEC tick (waitFor 3sn) |
| faq-collapsible-tabs | initial + changed | Home görselli + FAQ 4 bölüm; accordion click |
| lead-capture-form | initial | PII — input/SEND dur |
| lead-capture-newsletter-band | initial | SIGN UP dur |
| testimonial-quote-carousel | initial + changed (home) | Flickity; 375 swipe, 768/1440 Next |
| testimonial-quote-carousel | initial (PDP) | Statik grid — changed yok |
| media-shop-the-feed | initial + hover | Shop the look hover overlay |
| media-scrolling-gallery | initial + changed | CSS ticker + zoomOut animasyonu |

## Interact notları

- Apparel mega: `hover-disclosure.menu__item.grandparent.kids-3 > a.navlink--toplevel` — Playwright hover custom element’te açılmadı; inner `<a>` ile açıldı. Tıklama `/collections/all`.
- Predictive: `shirt` → Suggestions + 4 ürün. 1440 `#searchInput-desktop`; 375/768 `#searchInput-desktop-compress`. `#searchInput-mobile` 0×0. Enter/submit yok.
- 375 **ve** 768 hamburger `button.mobile-menu__button--burger` 44×44 — ikisi de resmi. 1440 N/A.
- Cart drawer: ATC `cart-drawer is-open` (375 tam ekran; 768/1440 ~400px). `a.cart__toggle` açıkken kapatır — filled’da tıklanmadı. qty 1→2 / $150→$300 3vp.
- Cart sayfa: `.cart__item__quantity-plus` 375/768/1440. qty 1→2 / SUBTOTAL $150→$300.
- PDP: Revive Dress (handle `exclesa-dress-scacchi-black-ivory`) Color Checkered → Black. Fiyat $150 kaldı.
