# Borders leftovers

*Kaynak (resmi walk URL):* https://borders-theme-raw.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/borders  
*Tema gözlemi:* **raw-build/raw** · `schema_name` Borders · `schema_version` **2.2.0** · `theme_store_id` **null** · theme id `151504519457`  
`Shopify.shop` = `borders-theme-raw.myshopify.com`  
Canlı host `borders-theme-raw.myshopify.com` → **301** → `borders-theme-main.myshopify.com` (aynı shop, aynı theme JSON).  
locale `en` · country `US` · currency `USD`  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

## Tema kimliği

- Canlı `Shopify.theme.theme_store_id` **null**. Theme Store numeric id uydurulmadı.
- `schema_name` **Borders** · `schema_version` **2.2.0** · role `main`.
- Preset klasörü `default` = **Raw** (`raw-build/raw`). Theme Store diğer preset’ler yürünmedi.
- Gözlem URL’leri resmi walk host `borders-theme-raw.myshopify.com` üzerinde bırakıldı (301 main host).

---

ADAY: borders-host-redirect  
Gerekçe: Walk URL `borders-theme-raw.myshopify.com`. Canlı 301 `borders-theme-main.myshopify.com`. `Shopify.shop` hâlâ `borders-theme-raw.myshopify.com`.  
Örnekler: https://borders-theme-raw.myshopify.com/  
Öneri: leftover — alias vs public host  
Karar: onay bekliyor

---

ADAY: borders-theme-store-id-null  
Gerekçe: Vitrin `theme_store_id` null. Listing id yazılmadı.  
Örnekler: `Shopify.theme`  
Öneri: leftover — null bırak  
Karar: onay bekliyor

---

## Yok / gitmedi

| Madde | Ne oldu |
|---|---|
| `/pages/about` | 404. About = `/pages/about-us` |
| `/pages/contact-us` | 404. Contact = `/pages/contact` |
| `/pages/faq` `/pages/faqs` `/pages/our-story` | 404. FAQ sayfası yok |
| `/blogs/blog` `/blogs/journal` | 404. Blog = `/blogs/news` |
| Newsletter modal `#modal-newsletter` | h=0. PII — submit yok |
| Cookie popover ACCEPT/DECLINE | dismiss; submit yok |
| Header language / currency | görüldü — değiştirilmedi |
| Account / login | yok veya tıklanmadı |
| Checkout / cart Checkout / Apply | dur |
| Footer Email / Discord | PII / dış link — dur |
| Contact SUBMIT | PII — dur |
| Home newsletter Submit | PII — dur |
| Blog comment form | PII — dur |
| SIZE GUIDE (PDP) | overlay adayı; tıklanmadı |
| Bomber Jacket PDP | Temporarily out of stock / SOLD OUT. Walk PDP = Utility Overshirt |
| `/collections/all` | Knitwear PLP ile aynı şablon; yazılan knitwear |
| Quick-buy / Select options kart overlay | interact listesinde yok |
| Home RAW logo card (`d22c6958`) | tek dekoratif logo — şema yok |
| Home `buttons_N8pp3j` | INSTAGRAM/FACEBOOK/TIK TOK… sosyal buton sırası |
| Footer-bar | © 2026 Borders Theme Raw. Powered by Shopify |
| rotating-badges | 1000px kutu, metin yok |
| Contact 138px sibling | boş; map şeması yok |
| Cart recommendations | 0px boş |
| Article comments + prev/next | sibling; comment submit dur |
| Size-chart page (pages.json) | walk dışı |

---

## Aday (yeni şema yok)

- **vertical-slider** → `hero-slideshow` + delta (dikey slayt).
- **text_columns_images** → `collection-nav-slider` + delta.
- **COLLECTION-TABS** sarmalayıcı (Featured / On Sale / About products) — görünür sekme yok → `product-showcase-grid-featured`.
- **Goes Well Together MIX & MATCH** → `media-lookbook-banner` + delta (ürün rayı; bundle builder değil).
- **rotating-images** → `media-scrolling-gallery`.
- **social buttons** — `buttons_N8pp3j`. Sosyal link sırası; şema yok.
- **RAW logo card** — tek marka görseli.
- **404** → `page-content-main` + delta. `pageType` 404 listede yok.
- **search / cart / collections / blog-list** klasörleri taksonomi `pageTypes` dışında (diğer temalarla aynı pratik).

---

## 404 URL’ler (aynı şablon)

`/pages/about`  
`/pages/contact-us`  
`/pages/faq`  
`/pages/faqs`  
`/pages/our-story`  
`/blogs/blog`  
`/blogs/journal`  
`/pages/does-not-exist-qante-borders`

---

## Interact notları

- Mega: `#menu-item-shop-classic > a.menu-link` href `#` — yalnız hover 1440.
- Predictive: opener `a.area__icon[href='/search']`; input `#search-form-sidebar`. katalog `shirt`.
- 375 **ve** 768 `.mobile-menu-button` görünür. 1440 0×0.
- Cart: `a.cart-button` → `#site-cart-sidebar`. ATC Utility Overshirt $89.95.
- PDP: Color Sandy Brown → Dark Olive Green (`label[for=utility-overshirt-option-color-2-…]`). Size leftover (Color yeterli).
- Checkout tıklanmadı.

---

## Bilinçli atlananlar

- `/account/login` — auth  
- Checkout / cart Check out  
- Newsletter / contact / comment submit (PII)  
- SIZE GUIDE popup  
- Quick-buy / quick-add overlay  
- `/collections/all`  
- Policy / size-chart page  
- FAQ (yok)  
- Bomber Jacket (sold out)  
