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
| 768 hamburger | `button.header--drawer-toggle` display:none; nav `aside.layout--sidebar`. 375 drawer resmi; 768 leftover. |
| Header shopify-section | 1440/768 yükseklik 0 — içerik `element-relocator` ile sidebar’a taşınır. |
| JOIN THE GLOW CLUB popup | Newsletter overlay (EMAIL/SUBMIT). Açılmadı / gönderilmedi (PII). |
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
| Checkout / Buy it now | dur. |
| Newsletter SUBMIT / contact submit | PII — dur. |
| Bright Blush Powder PDP | Aynı şablon, varyant yok. Variant interact = Brightening Serum. |

## Aday (yeni şema yok)

- **Sidebar header** — `data-layout=sidebar`. `navigation-header-mega` reuse + delta. Yeni tip açılmadı.
- **logo_list basın alıntısı** — logo yok, 4 quote. `testimonial-quote-carousel` reuse.
- **404** — taxonomy `pageTypes` içinde yok. `page-content-main` + delta.

## Interact notları

- Predictive: boşta POPULAR PRODUCTS; `cream` → Hydrogel / Luxe / Oat and Juniper + VIEW ALL.
- Shop accordion: tıklama `<summary>`; yazılı `<a>` sayfaya gider.
- 768 menü drawer yok — sidebar. Eksik çekim değil.
