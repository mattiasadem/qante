# Showcase leftovers

*Kaynak:* https://betty-theme.myshopify.com  
*Tema gözlemi:* **showcase-v10.2.0** · `schema_name` Showcase · `schema_version` 10.2.0 · `theme_store_id` **null**

## Tema kimliği

- Canlı `Shopify.theme` (vitrinde yeniden okundu, uydurulmadı): `name` **showcase-v10.2.0** · `schema_name` **Showcase** · `schema_version` **10.2.0** · `theme_store_id` **null** · theme id `145737646133` · `role` `main` · shop `betty-theme.myshopify.com`.
- Resmi walk: **betty-theme.myshopify.com** only. `showcase-theme.myshopify.com` / `showcase-demo.myshopify.com` kullanılmadı.

## Yok / gitmedi

| Madde | Ne oldu |
|---|---|
| Cart drawer | Header cart `href=/cart`. `cart-drawer` / mini-cart yok. |
| Desktop inline mega | 1440 hamburger görünür. Mega `#page-menu` overlay içinde (Shop çocuk + promo kart). Hover-on-bar yok. |
| Predictive öneri listesi | `#search-modal` açıldı, `tote` yazıldı; ürün/koleksiyon dropdown belirmadi. Submit `/search`. |
| Announcement bar | Header CSS `.cc-announcement` var; vitrinde şerit yok (h=0 / görünmez). |
| `/pages/about`, `/pages/contact` | 404. Yaşayan: `/pages/about-us`, `/pages/contact-us`, `/pages/story-page`. |
| `/blogs/blog`, `/blogs/journal` | 404. Resmi blog: `/blogs/fablou-blog`. `/blogs/news` 200 ama nav değil. |
| Newsletter popup (`section-popup` / `cc-popup-modal`) | Overlay; dismiss. Submit / e-posta yok. |
| Account | Header `shopify-account` — dur. |
| Checkout | Cart `CHECK OUT` / Shop Pay / G Pay — tıklanmadı. |
| Newsletter JOIN / contact Send / blog comment | PII — dur. |
| Presets nav | Aria / Mila / Drake / Ava Theme Store affiliate — walk dışı leftover. |
| Language switcher | Menü + footer English — değiştirilmedi. |
| FAQ accordion açık kare | Statik kapalı; `details.cc-accordion-item` var. | **interact bitti** — 4 section × initial/changed |
| Testimonial carousel | Home `cc-testimonial` tek alıntı; slider kontrolü yok. | `testimonial-quote-carousel` → `changed` missing |
| CRO şemaları (observation yok) | before-after / bundle / countdown / compare / quiz / shop-the-feed / scrolling-gallery vitrinde yok. | leftover — icat edilmedi |
| Sticky ATC | PDP sticky scroll-direction class; ayrı bar yoklandı değil. |

## Aday (yeni şema yok)

- **404 template** — taxonomy `pageTypes` içinde yok. `page-content-main` + delta.
- **list-collections** `/collections` — `collection-nav-grid`.
- **Search modal** — önerisiz fullscreen form → `global-predictive-search` + delta (liste yok).
- **Gallery** home `section-gallery` → `collection-nav-image-cards`.
- **Why choose Betty** görselsiz vaat → `trust-icon-row` (features değil).
- **PDP accordion + Pairs well with** — `section-product-template` içinde; ayrı shopify-section yok. `product-info-main` delta.

## Interact notları

- Shop mega: önce `a.menu[href='#page-menu']`, sonra `#page-menu .main-nav > ul > li.has-children > a` (Shop). Presets tıklanmadı.
- `global-menu-drawer` ve `navigation-header-mega` aynı `#page-menu`. Menu-drawer: hamburger + Shop 375/768/1440. Mega: kapalı bar 3vp + Shop mega 1440.
- Search: `dismiss-overlays` `#search-modal`'ı `display:none` yapabiliyor — `forceOpen` + opener. Opener flake: `a.nav-search[data-modal-toggle='#search-modal']` 375/1440; 768 için `a[aria-label='Search']`. 6 resmi PNG birleşik koşulardan.
- Katalog `tote` (shirt = No search results). Canlı öneri 3vp yoklandı, belirmadi.
- Cart qty: `a.plus.quantity-up`. FLASH SALE 5% OFF. Boş → Malibu COMPACT $89 / Subtotal $84.55 → qty 2 / Subtotal $169.10.
- PDP MIDI: fiyat $69/$89 aynı kaldı; stok **13→30** (demo envanter; daha erken yoklamada 10 görüldü). Galeri değişmedi.
- Hero `#slideshow_Y8dKTc` autoplay: resmi 3vp kare **Tote-ally Amazing** (orta slayt). Walk'ta COLORFUL ADVENTURE da görüldü.
- **CRO leftover:** FAQ `details.cc-accordion-item:first-of-type > summary` click → `changed` (4 section, 24 PNG). Testimonial tek statik blok — carousel yok. Newsletter-band + contact form — e-posta/PII dur.
