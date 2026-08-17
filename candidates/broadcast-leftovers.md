# Broadcast leftovers

*Kaynak:* https://broadcast-bold.myshopify.com  
*Tema gözlemi:* **Broadcast 6.2.0** · `schema_name` Broadcast · `schema_version` 6.2.0 · `theme_store_id` **null**

## Tema kimliği

- Canlı `Shopify.theme.theme_store_id` **null**. Theme Store id uydurulmadı.
- `schema_name` **Broadcast** (Dawn değil). theme id `127211405376` · role `main`.

## Yok / gitmedi

| Madde | Ne oldu |
|---|---|
| Recently-purchased / social-proof toast | Home’da 8s bekledi; fixed toast yok. Theme Features metni özelliği anlatıyor — Bold vitrinde belirmadi. |
| `/pages/about`, `/pages/contact` | 404 (`/pages/about-us`, `/pages/contact-us` yaşıyor) |
| `/blogs/journal` | 404; blog = `/blogs/news` + `/blogs/blog` |
| Pre-footer `#…__section-newsletter` | yükseklik 0 — form footer’da |
| `anchor-logo` footer bloğu | 306px, metin yok — kanıtsız şema yok |
| Divider section’lar | ince çizgi; observation yok |
| Demo announcement | “This is just a demo store…” — leftover şerit |
| Contact **map** (`data-section-type=map`) | Visit the shop + adres. Map şeması yok; zorlanmadı |
| Sold-out notify (`product-soldout-notification`) | e-posta formu — PII, dur |
| Account / login | Header Account — dur |
| Checkout | drawer/sayfa Check out — tıklanmadı |
| Newsletter JOIN / contact submit / blog comment | PII — dur |
| `/pages/theme-features` | Tema satış sayfası; walk dışı leftover |
| `/pages/shop-by-benefit`, `/pages/best-sellers` | footer link; ayrı walk yok |

## Aday (yeni şema yok)

- **sticky cart-bar** — PDP `#cart-bar` “CONFIGURE”. `product-info-main` delta + 2. observation; yeni tip açılmadı.
- **highlights** — Shop by Category ikon sırası → `collection-nav-icon-buttons`.
- **list-collections** `/collections` ~9980px → `collection-nav-grid`.
- **404 template** — taxonomy `pageTypes` içinde yok. `page-content-main` + delta.
- **map** — iletişim haritası. Overlay/aday; şema açılmadı.

## Interact notları

- Shop mega: `hover-disclosure` + `a.navlink--toplevel` (`href=/collections/all`) — tıklama sayfaya kaçar; yalnız hover.
- Predictive: `shirt` 0 sonuç; katalog `magnesium` (4 sonuç).
- Sticky bar metni **CONFIGURE** (ATC değil) — buy box’a kaydırır.
