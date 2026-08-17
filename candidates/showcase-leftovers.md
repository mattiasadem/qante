# Showcase leftovers

*Kaynak:* https://betty-theme.myshopify.com  
*Tema gözlemi:* **showcase-v10.2.0** · `schema_name` Showcase · `schema_version` 10.2.0 · `theme_store_id` **null**

## Tema kimliği

- Canlı `Shopify.theme.theme_store_id` **null**. Theme Store id uydurulmadı.
- `schema_name` **Showcase** · name `showcase-v10.2.0` · theme id `145737646133` · role `main`.
- Resmi walk: **betty-theme.myshopify.com** only. `showcase-theme.myshopify.com` / `showcase-demo.myshopify.com` kullanılmadı.

## Yok / gitmedi

| Madde | Ne oldu |
|---|---|
| Cart drawer | Header cart `href=/cart`. `cart-drawer` / mini-cart yok. |
| Desktop inline mega | 1440 hamburger görünür. Mega `#page-menu` overlay içinde (Shop çocuk + promo kart). |
| Predictive öneri listesi | `#search-modal` açıldı, `tote` yazıldı; ürün/koleksiyon dropdown belirmadi. Submit `/search`. |
| Announcement bar | Header CSS `.cc-announcement` var; vitrinde şerit yok (h=0 / görünmez). |
| `/pages/about`, `/pages/contact` | 404. Yaşayan: `/pages/about-us`, `/pages/contact-us`, `/pages/story-page`. |
| `/blogs/blog`, `/blogs/journal` | 404. Resmi blog: `/blogs/fablou-blog`. `/blogs/news` 200 ama nav değil. |
| Newsletter popup (`section-popup` / `cc-popup-modal`) | Overlay; dismiss. Submit / e-posta yok. |
| Account | Header `shopify-account` — dur. |
| Checkout | Cart `checkout-btn` — tıklanmadı. |
| Newsletter JOIN / contact Send / blog comment | PII — dur. |
| Presets nav | Aria / Mila / Drake / Ava Theme Store affiliate — walk dışı leftover. |
| Language switcher | Menü + footer English — değiştirilmedi. |
| FAQ accordion açık kare | Statik kapalı; `details.cc-accordion-item` var. Interact zorunlu listede yok. |
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
- Search: `dismiss-overlays` `#search-modal`'ı `display:none` yapabiliyor — `forceOpen` ile geri.
- Katalog `tote` (shirt = No search results).
- Cart qty: `a.plus.quantity-up` / `a.quantity-down.minus`. FLASH SALE 5% OFF satırda.
- PDP MIDI: fiyat $89/$69 aynı kaldı; stok 13→10.
- 375/768 hamburger resmi; 1440 hamburger de var (mega header-mega.open).
