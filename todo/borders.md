# Borders inventory (Shopify paid)

- Slug: `borders`
- Theme Store: https://themes.shopify.com/themes/borders
- Walk: https://borders-theme-raw.myshopify.com/
- Preset: `default` (Raw)
- Live theme: `{"name":"raw-build/raw","id":151504519457,"schema_name":"Borders","schema_version":"2.2.0","theme_store_id":null,"role":"main"}`
- `theme_store_id`: **null** (invent yok)
- PDP: `/products/utility-overshirt`
- PLP: `/collections/knitwear`

## Durum

- [x] Home + PDP + PLP + collections + search + cart + about-us + contact + blog list + article + 404
- [x] Interact: mega (click), predictive, menu 375/768, cart drawer empty/filled/qty, cart page empty/filled/qty, PDP color
- [x] Official 3vp + interact PNG
- [x] `npm run validate -- --errors-only` — 0
- [x] leftovers
- [x] Draft PR — **merge etme** (koordinatör)

## Sayı

- Observation: **38**
- Evidence PNG: **132** (111 unique basename — `page-content-main` 3 sayfada)
- Yeni schema: **0**

## Interact

| Bileşen | Aç | Sonuç |
|---|---|---|
| Mega 1440 | Click `#menu-item-shop-classic > a.menu-link` | Autumn/Summer + Vibrant Hues + City Trail |
| Menu | `.mobile-menu-button` | 375 tam ekran; 768 sağ drawer; 1440 yok |
| Search | `a.area__icon[href='/search']` + `shirt` | Drawer + POPULAR; ürün predict yok |
| PDP color | Color option 2 | Sandy Brown → Dark Olive Green |
| Cart page | empty / ATC / qty-plus | 0 / 1 / 2 + SALE10 qty2 |
| Cart drawer | empty / add.js+reload / qty-plus | 0 / Utility Overshirt / qty 2 |

## Kapsam

borders / default / 38 obs / 0 yeni schema / 132 PNG / validate 0
