# Warehouse leftovers

*Kaynak:* https://warehouse-theme-metal.myshopify.com/  
*Tema gözlemi:* **Warehouse 3.1.0** · `schema_name` Warehouse · `schema_version` **3.1.0** · `theme_store_id` **null**  
`Shopify.theme.name` **Warehouse new font** · id `132658626611` · role `main`

## Canlı tema vs Theme Store

- Vitrin `Shopify.theme.theme_store_id` **null**. Theme Store listing ID yazılmadı.
- `schema_version` **3.1.0** — Theme Store 7.x iddiasından eski Metal kopya. 7.x uydurulmadı.
- Resmi walk URL yalnız `warehouse-theme-metal.myshopify.com`.

## Yok / gitmedi

| Madde | Ne oldu |
|---|---|
| `#shopify-section-popups` | h=0. Newsletter/popup overlay. E-posta — dur. |
| Home `map` (`data-section-type=map`) | Our stores + Harrisburg adresi + Get directions. Map şeması yok; zorlanmadı. |
| Home recently-viewed | `display:none` (ürün yok). PLP’de warmup ile çekildi. |
| `/pages/about-us`, `/pages/contact` | 404 (aynı 404 kabuğu). Yaşayan: `/pages/about`, `/pages/contact-us`. |
| `/blogs/journal`, `/blogs/blog` | 404. Blog = `/blogs/news`. |
| `/pages/theme-features` | 404. |
| `/pages/brands` | list-collections (logo-list CTA). Walk dışı; `/collections` ile aynı tip. |
| `/pages/meet-the-team` | Founding Partners kartları. Team şeması yok; walk dışı. |
| Presets mega (`#desktop-menu-0-7`) | Theme Store preset satışı. Walk dışı. |
| Information dropdown | Blog / Meet the team / About / FAQ / Contact. Düz dropdown, mega değil. |
| Announcement **Subscribe & Save** | Newsletter — tıklanmadı. |
| Header **My account** | `/account` — dur. |
| Header para birimi | United States (USD $) — leftover. |
| Newsletter Subscribe / contact Send / blog comment | PII — dur. |
| Checkout / Buy it now | dur. |
| PDP Description / Shipping accordion | `product-info-main` içinde; ayrı şema yok. |
| Mobile All Products `open-panel` | Akordeon yoklandı değil (kaçış). |
| PLP facet/sort interact | Filtre DOM’da var; walk zorunlu interact değil. |

## Aday (yeni şema yok)

- **map / Our stores** — adres + saat + Get directions. Overlay/aday.
- **offers** → `features-multicolumn` (2 kart, CTA yok).
- **quick-links** → `collection-nav-icon-buttons` (ikon yok).
- **mosaic** → `promo-grid-banner` (CTA var; `media-mosaic-grid` değil).
- **404** → `page-content-main` + delta. `pageType` 404 listede yok.
- **search / cart / collections / blog-list** klasörleri taksonomi `pageTypes` dışında (diğer temalarla aynı pratik).

## Interact notları

- Mega: `a.nav-bar__link[aria-controls='desktop-menu-0-1']` hover. href=`/collections` — tıklama sayfaya kaçar. Viewport `scrollTo(0,0)` hover'ı kapatıyordu → crop `#desktop-menu-0-1` + forceOpen.
- Predictive: katalog `jbl` (Stage A125C / A135C / Charge 3). 375 Close overlay + input görünür.
- 375 **ve** 768 hamburger var (`20×16`). 1440 hamburger 0×0.
- Mini-cart `#mini-cart` overlay. ATC UI açar; toggle tekrar kapatır. Qty `data-action=increase-quantity` (picker değil).
- Cart sayfa aynı qty action. Gift wrap $2.50 / Estimate shipping doldurulmadı.
- PDP Color `label.color-swatch__item[title=Blue]` (radio 0×0). Black SKU JBL-859042 / 56 stok → Blue JBL-472498 / 116 stok. Fiyat $99.95.
