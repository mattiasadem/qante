# Startup leftovers

*Kaynak:* https://startup-theme-tech.myshopify.com/ · *Tema:* Startup Tech v12.3.3 · `schema_name` **Startup** · `schema_version` **12.3.3** · `theme_store_id` **null** (uydurulmadı)

Şemaya sokulmayan / durulan şeyler. Kanıtsız tip uydurulmadı.

## Canlı tema vs Theme Store

- Vitrin `Shopify.theme.theme_store_id` **null**. Theme Store listing ID yazılmadı.
- Resmi Tech preset: `startup-theme-tech.myshopify.com` — ürünler canlı, password yok.

## Chrome / conversion (observation yok)

| Öğe | Demo durumu |
|---|---|
| `global-predictive-search` | Header search `<a href="/search">` — inline predictive yok. `input.header-search__input` opacity 0 / 0×0. Arama `/search` sayfasında (`search-results` observation var). |
| `global-cart-drawer` | Cart drawer yok. `site-header__cart-button` → `/cart`. `cart-page-main` boş state capture edildi; dolu/qty interact backlog. |
| Mega menü | `site-header--nav-position-none` — nav yalnız drawer (`global-menu-drawer`). Kolon/promo panel yok. |
| Sticky ATC | PDP'de yok. |
| Koleksiyon facet | PLP `/collections/shave` facet yok. |
| Countdown / low-stock | Yok. |
| Quick view | Yok. |

## PDP — product reviews (şema yok)

- `#shopify-section-template--17121058750515__product-reviews` — Customer Reviews / Based on 6 reviews / WRITE A REVIEW.
- QANTE'de `product-reviews-*` şeması yok → observation açılmadı. Yorum submit PII.

## Cart / checkout

- Sepet **drawer değil** tam sayfa. Mod A: boş cart 3vp.
- Dolu sepet + qty + checkout interact backlog (`capture-interaction.mjs`).
- Checkout / account / newsletter submit duruldu (PII).

## İçerik sayfaları

- Footer linkleri: Our Story, Ingredients, Sustainability, FAQ — ayrı walk yapılmadı (Mod A rota: blog yeterli).
- `/pages/*` observation backlog.

## CRO şemaları (diskte var, demo'da yok)

Resmi Tech demo'da observation açılmayan CRO tipleri (örnek): `before-after-slider`, `commerce-tools-products-bundle`, `promo-banner-countdown`, `lead-capture-form`, `lead-capture-newsletter-band`, `comparison-quick-table`, `product-finder-quiz`, `media-shop-the-feed`, `media-scrolling-gallery`, `social-proof-brand-logos`.

## Interact backlog

- `global-menu-drawer` — submenu Learn/Presets chevron
- `faq-collapsible-tabs` — ilk soru açık state
- `product-info-main` — Color swatch değişimi (Carrot/Onyx/Pine)
- `cart-page-main` — ATC + qty
- `testimonial-quote-carousel` — carousel kontrolü yok (statik)
