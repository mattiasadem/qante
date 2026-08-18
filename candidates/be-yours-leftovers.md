# Be Yours leftovers

*Kaynak:* https://beyours-theme.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/be-yours  
*Tema gözlemi:* **Be Yours 8.3.1 - live** · `schema_name` Be Yours · `schema_version` 8.3.1 · `theme_store_id` **null** · theme id `138665296059`

## Tema kimliği

- Canlı `Shopify.theme.theme_store_id` **null**. Theme Store id uydurulmadı.
- `schema_name` **Be Yours** (Dawn/Horizon değil). role `main`.
- `Shopify.theme.name` = `Be Yours 8.3.1 - live`. `handle` string `"null"`. `style.id` / `style.handle` null.
- Preset klasörü `default` = resmi bitki vitrin.

---

ADAY: be-yours-theme-store-id-null  
Gerekçe: `theme_store_id` canlıda null. Listing https://themes.shopify.com/themes/be-yours id uydurulmadı.  
Örnekler: https://beyours-theme.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: be-yours-no-mega  
Gerekçe: `.mega-menu` / `[class*='mega-menu']` yok. Shop = `nav.header__inline-menu details` + `header__submenu list-menu--disclosure`. `list-menu-item` `data-image` taşıyor ama panel dikey liste. `navigation-header-mega` + delta.  
Örnekler: https://beyours-theme.myshopify.com/  
Öneri: leftover — mega yok  
Karar: onay bekliyor

---

ADAY: be-yours-newsletter-popup  
Gerekçe: `#shopify-section-sections--17270937682107__popup` yükseklik 0. Metin GET 10% OFF + sosyal. PII, dur.  
Örnekler: overlay-group `__popup`  
Öneri: leftover — gizli popup  
Karar: onay bekliyor

---

ADAY: be-yours-mobile-dock  
Gerekçe: `__mobile-dock` 1440'te 0px; 375'te HOME / SHOP / ACCOUNT. Şema yok. Account dur.  
Örnekler: https://beyours-theme.myshopify.com/ 375  
Öneri: leftover — dock  
Karar: onay bekliyor

---

ADAY: be-yours-quick-view  
Gerekçe: Kart + lookbook `details` Quick view. Interact listesinde yok; leftover.  
Örnekler: home product-grid / Shop The Look  
Öneri: leftover — `global-quick-view` yazılmadı  
Karar: onay bekliyor

---

ADAY: be-yours-play-video  
Gerekçe: Home reveal banner PLAY VIDEO. Modal açılmadı.  
Örnekler: `__16357444957e11cc38`  
Öneri: leftover — video modal  
Karar: onay bekliyor

---

ADAY: be-yours-cart-footer-split  
Gerekçe: `/cart` `__cart-items` + `__cart-footer` ayrı. Boşken footer 72px boş; shipping-calculator + cart-recommendations 0px. `cart-page-main` yalnız cart-items.  
Örnekler: https://beyours-theme.myshopify.com/cart  
Öneri: leftover — sibling footer  
Karar: onay bekliyor

---

ADAY: be-yours-pdp-zero  
Gerekçe: PDP `__product-recommendations` + `__16464474589658ec7c` ilk ziyarette 0px.  
Örnekler: https://beyours-theme.myshopify.com/products/money-tree  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: be-yours-plp-filter  
Gerekçe: PLP FILTER / SORT / kolon 2-3-4. Filtre drawer interact listesinde yok.  
Örnekler: https://beyours-theme.myshopify.com/collections/all  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: be-yours-search-dress-empty  
Gerekçe: `/search?q=dress` 0 sonuç. Katalog `plant` (46).  
Örnekler: https://beyours-theme.myshopify.com/search?q=dress  
Öneri: leftover — yanlış katalog kelimesi  
Karar: onay bekliyor

---

ADAY: be-yours-buy-it-now  
Gerekçe: PDP + featured `BUY IT NOW` / accelerated checkout. Tıklanmadı.  
Örnekler: /products/money-tree  
Öneri: leftover — checkout  
Karar: onay bekliyor

---

ADAY: be-yours-country-picker  
Gerekçe: Header GERMANY (EUR €) ülke listesi. Tıklanmadı.  
Öneri: leftover  
Karar: onay bekliyor

---

## Yok / gitmedi

| Madde | Ne oldu |
|---|---|
| `/pages/about-us`, `/pages/contact-us`, `/pages/our-story` | 404 — aynı `__main` 404 |
| `/blogs/journal`, `/blogs/blog` | 404 |
| About | `/pages/about` |
| Contact | `/pages/contact` |
| Blog | `/blogs/news` |
| Account / Log in | Header — dur |
| Checkout | drawer/sayfa — tıklanmadı |
| Newsletter Apply / contact Send / blog comment | PII — dur |
| `/pages/plant-drop`, `/pages/visit` | Walk dışı leftover |
| `/pages/shipping`, `/pages/privacy`, `/pages/terms`, `/pages/cookies`, `/pages/careers` | Policy leftover |
| FAQ accordion open | Static kapalı; `changed` çekilmedi |
| Lookbook hotspot tık | Quick view leftover |
| Bundle ADD SET TO CART | Tıklanmadı |
| Before/after handle | Static 3vp |
| FR/AR sitemap locale | Walk dışı |

## Interact notları

- Shop: `nav.header__inline-menu details:first-of-type > summary` — tık open. Hover boş.
- Predictive: `plant` (Prayer Plant & Pot / Spider Plant). `input.search__input[name='q']`.
- Cart: `#cart-icon-bubble` → `mini-cart.cart-drawer`. ATC Spider Plant €12,99 otomatik açar. Qty `button[name='plus']`.
- 1440 hamburger yok. 375/768 `summary.header__icon--menu`.
- PDP Size: S €14,99 → M (`label[for='template--17270937452731__main-1-1']`) €49,99.
