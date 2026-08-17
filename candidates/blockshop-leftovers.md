# Blockshop leftovers

*Kaynak:* https://blockshop-theme-beauty.myshopify.com  
*Tema gözlemi:* **Copy of design [do not delete]** · `schema_name` **Blockshop** · `schema_version` **13.2.0** · `theme_store_id` **null** (uydurulmadı)

## Tema kimliği

- Canlı `Shopify.theme.theme_store_id` **null**. Theme Store id yazılmadı.
- `schema_name` **Blockshop** (Dawn değil). theme id `134976438327` · role `main`.
- Title: **Blockshop Theme – Main Preset – Blockshop theme - Beauty**.
- Yasak URL kullanılmadı: `blockshop-theme.myshopify.com` (password), `blockshop.myshopify.com` (internal).

## Yok / gitmedi

| Madde | Ne oldu |
|---|---|
| Klasik mega panel | 1440/768 Shop = `<details>` accordion (SHOP ALL / SKIN CARE / MAKE UP / HAIR CARE). Kolon + promo görsel yok. |
| 768 hamburger | `button.header--drawer-toggle` display:none; nav `aside.layout--sidebar`. 375 drawer resmi; 768 leftover (eksik çekim değil). |
| Header shopify-section | 1440/768 yükseklik 0 — içerik `element-relocator` ile sidebar’a taşınır. |
| JOIN THE GLOW CLUB popup | Newsletter overlay (EMAIL/SUBMIT). Kapatıldı; gönderilmedi (PII). Blog-list 1440 ilk karede sızdı → close + recapture. |
| Footer-bar | `#…__footer-bar` — Shopify + ENGLISH + COUNTRY SELECTOR. Locale tıklanmadı. |
| PLP collection-header | 14px — yalnız “ALL PRODUCTS”. Ayrı observation yok. |
| PLP recent-products | yükseklik 0. |
| PLP / search FILTER | Sort/Filter bar ayrı section; facet interact yoklandı değil. |
| `/pages/our-approach`, `/pages/ingredients` | Yaşıyor (image_with_text + page main). Walk dışı leftover. |
| About Amy Wilson / Sophia Chen | Rachel ile aynı image-with-text dilbilgisi; ayrı obs yok. |
| Contact map | `map_KU3A3Q` VISIT OUR STORE. Map şeması yok. |
| Contact yardım paragrafı | “Need help with an order…” ayrı section; heading reuse. |
| Blog recents | CONTINUE READING. Ayrı obs yok. |
| Blog comments | NAME/EMAIL/COMMENT — PII, dur. |
| Account / login | Header ACCOUNT — dur. |
| Checkout / Buy it now | dur. Cart/drawer CHECKOUT görünür, tıklanmadı. |
| Newsletter SUBMIT / contact submit | PII — dur. |
| Cart note / REMOVE | LEAVE A NOTE alanı boş bırakıldı; REMOVE yok. |
| Bright Blush Powder PDP | Aynı şablon, varyant yok. Variant interact = Brightening Serum. |
| PDP 200ML galeri | Fiyat 70→135 CAD; şişe görseli 75ML etiketli kaldı. |
| Mobile menu Shop accordion | 375 drawer’da Shop alt menü yoklandı değil (yazılı `<a>` sayfaya gider). |

## Aday (yeni şema yok)

- **Sidebar header** — `data-layout=sidebar`. `navigation-header-mega` reuse + delta. Yeni tip açılmadı.
- **logo_list basın alıntısı** — alıntı + 4 logo (375 slider). `social-proof-brand-logos` reuse (testimonial değil).
- **404** — taxonomy `pageTypes` içinde yok. `page-content-main` + delta.

## Interact notları

- Predictive: boşta POPULAR PRODUCTS (Precision Cut Sponge / Hydrogel / Swirl / Nailboi). `cream` → SUGGESTIONS CREAM / JUNIPER HAND CREAM + PRODUCTS Hydrogel 48 / Luxe 36 / Oat and Juniper 28 + VIEW ALL. 375 ürünler 2 kolon.
- Shop accordion: tıklama `<summary>`; yazılı `<a>` sayfaya gider.
- 768 menü drawer yok — sidebar. Eksik çekim değil.
- Cart drawer + cart page: qty `button.quantity-selector--plus[aria-label='Plus']`. $70 → $140; free-shipping eşiği $100.
- Cart drawer: ATC sonrası home’a dönüp bag açıldı (drawer toggle kapanmasın).
- PDP SIZE `label.radios--value-button`.
