# Woodstock leftovers

*Kaynak:* https://woodstock-theme-light.myshopify.com/  
*Tema gözlemi:* **Woodstock 3.3.0** · `schema_name` Woodstock · `schema_version` **3.3.0** · `theme_store_id` **null**  
`Shopify.theme.name` **Woodstock-Shopify-theme/electronics** · id `155629781293` · role `main`

## Canlı tema vs Theme Store

- Vitrin `Shopify.theme.theme_store_id` **null**. Theme Store listing ID yazılmadı.
- `schema_version` **3.3.0** — canlı Light kopya. Başka sürüm uydurulmadı.
- Resmi walk URL yalnız `woodstock-theme-light.myshopify.com`.

## Yok / gitmedi

| Madde | Ne oldu |
|---|---|
| `#shopify-section-email-signup-popup` | h=0. E-posta popup — dur. |
| `#shopify-section-cookies-banner` | h=0. |
| Home spacer `sections--…__048623a6` | 40px boş. |
| `/pages/about`, `/pages/contact-us`, `/pages/faq` | 404 (aynı 404 kabuğu). Yaşayan: `/pages/about-us`, `/pages/contact`. |
| `/blogs/journal`, `/blogs/blog` | 404. Blog = `/blogs/news`. |
| Header **Customer support** / account | `/account` — dur. |
| Header Country/region + Language | leftover. |
| Newsletter Subscribe / contact Send / blog comment | PII — dur. |
| Checkout / Buy it now / CartDrawer-Checkout | dur. |
| SALE50 kopyala | kupon — dur. |
| PDP warranty add-on / complementary / Okendo | leftover. |
| PDP empty `product-recommendations` | h=80/0 ilk ziyaret. |
| PDP specs / include-in-box / Boundless marquee | walk dışı IWT tekrarları. |
| Lookbook hotspot tık | leftover. |
| Pinning cards sticky | `promo-grid-banner` delta. |
| Mobile submenu accordion | kaçış riski — leftover. |
| PLP facet/sort interact | DOM’da var; walk zorunlu interact değil. |
| Policy pages (`/pages/shipping-policy` vb.) | walk dışı; page-content kabuğu. |

## Aday (yeni şema yok)

- **promotion_cards_pinning** → `promo-grid-banner` (pin davranış leftover).
- **shoppable_reels** → `media-shop-the-feed`.
- **splash_featured_product** → `product-showcase-featured`.
- **text-icons** → `features-multicolumn`.
- **404** → `page-content-main` + delta. `pageType` 404 listede yok.
- **search / cart / collections / blog-list** klasörleri taksonomi `pageTypes` dışında (diğer temalarla aynı pratik).
- **contact store hours + Get Direction** → IWT; map şeması yok.

## Interact notları

- Mega: `#Details-HeaderMenu-1 > summary` Stores. Tıklama koleksiyona kaçabilir → hover + forceOpen `#MegaMenu-Content-1`.
- Predictive: katalog `watch` (45 sonuç). 1440 `#Search-In-Inline`; 375/768 `summary.header__icon--search` + `#Search-In-Modal`.
- 375 **ve** 768 hamburger 44×44. 1440 hamburger 0×0.
- Mini-cart `#CartDrawer`. ATC UI açabilir. Checkout tıklanmadı.
- PDP Color `label[for=template--20218412368173__main-1-1]` gym red. Next-earphone varyantsız.
