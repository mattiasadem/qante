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
| Header **compare** (terazi, badge 0) | leftover. |
| Newsletter Subscribe / contact Send / blog comment | PII — dur. |
| Checkout / Buy it now / CartDrawer-Checkout | dur. |
| SALE30 / SALE50 kopyala | kupon — dur. |
| PDP warranty / Trade In / complementary Pairs well with | leftover. |
| PDP empty `product-recommendations` | h≈80/0 ilk ziyaret. |
| PDP specs / include-in-box / Boundless marquee / extra IWT | walk dışı tekrarlar. |
| Lookbook hotspot tık | leftover. |
| Pinning cards sticky | `promo-grid-banner` delta. |
| Mobile submenu chevron | kaçış — leftover. |
| PLP facet/sort interact | DOM’da var; walk zorunlu interact değil. |
| Policy pages | walk dışı; page-content kabuğu. |
| Okendo reviews | üçüncü taraf leftover. |

## Aday (yeni şema yok)

- **promotion_cards_pinning** → `promo-grid-banner` (pin davranış leftover).
- **shoppable_reels** → `media-shop-the-feed`.
- **splash_featured_product** → `product-showcase-featured`.
- **text-icons** → `features-multicolumn`.
- **404** → `page-content-main` + delta. `pageType` 404 listede yok.
- **search / cart / collections / blog-list** klasörleri taksonomi `pageTypes` dışında (diğer temalarla aynı pratik).
- **contact store hours + Get Direction** → IWT; map şeması yok.

## Interact notları

- Mega: `#Details-HeaderMenu-1 > summary` hover. 1440 Stores 4 kolon + NexaTime Alpha Sync From $800. forceOpen details. Tıklama koleksiyona kaçar.
- Predictive: katalog `watch`. 1440 `#Search-In-Inline`; 375/768 `summary.header__icon--search` + `#Search-In-Modal`. Tweed $625,000 / Generation I / BX4 + Watch Generation 40 products.
- 375 **ve** 768 hamburger 44×44. 1440 hamburger 0×0.
- Cart drawer `#CartDrawer`. ATC UI (`addToCart → ui`). Empty SALE30; filled Watch I7 black/41mm $249; qty2 $498.
- 375 `quantity__button[name=plus]` **0×0**. Qty `input.quantity__input` fill `2` + Enter. 768/1440 plus tık.
- PDP Color `label[for=template--20218412368173__main-1-1]` gym red. black 98 stok SKU SACWN58-M1 → gym red 41mm Sold out SKU SACwNSB-M3. Next-earphone varyantsız.
