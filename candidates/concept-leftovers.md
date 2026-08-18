# Concept leftovers

*Kaynak:* https://concept-theme.myshopify.com/  
*Tema gözlemi:* **Concept-1-1-2-sections-ready (Beauty Blossom)** · `schema_name` Concept · `schema_version` **1.1.2** · `theme_store_id` **null**  
theme id `137476276463` · role `main` · shop `concept-theme.myshopify.com`

## Canlı tema vs Theme Store

- Vitrin `Shopify.theme.theme_store_id` **null**. Theme Store listing ID yazılmadı.
- `schema_version` **1.1.2** — Theme Store / Envato sürüm iddiası uydurulmadı.
- Resmi walk URL yalnız `concept-theme.myshopify.com` (preview_theme_id yok).
- Preset klasörü `default` = canlı **Beauty Blossom** (main).

## Diğer Concept preset'ler (yürünmedi)

THEME DEMO mega `preview_theme_id` ile başka kopyalar:

| Preset | theme id |
|---|---|
| Luxe Beauty | 137577660655 |
| Accessories Avenue | 137622028527 |
| Furniture Fusion | 137322856687 |
| Cosmetic Harmony | 138330046703 |
| Furniture Finesse | 137894789359 |
| Dreamy Decor | 139085644015 |
| Vogue Vault (New) | 141404373231 |

Mega "Collection List: Default/Grid", "Product: Classic/Standard", "Standard Blog" bu id'lere gider — **kullanılmadı**.

## Yok / gitmedi

| Madde | Ne oldu |
|---|---|
| Newsletter popup (`__33cd359b-…`) | h=0. PII — dur. |
| recently-purchased popup | 0×0. |
| before-you-leave | 0×0. BEFORE YOU LEAVE overlay. |
| Header **Log in** / `#Drawer-Account` | `/account/login` — dur. |
| Wishlist drawer | tıklanmadı. |
| BUY CONCEPT | Envato dış link — leftover. |
| Footer / popup Subscribe | PII — dur. |
| Contact **Send** | PII — dur. |
| FAQ `example@example.com` / Message Us | e-posta — dur. |
| Checkout / Buy it now | dur. |
| `/pages/lookbook` | section__lookbook + hotspot. Walk dışı leftover (`media-lookbook-banner` aday). |
| `/pages/brands` | section__az-brands A–Z. Şema yok; leftover. |
| `/policies/*` | Privacy policy 200 ama **main section yok** (yalnız header/footer). |
| PDP `__1679044770251ee1c2` | 138px, child=LINK, metin yok. |
| PDP / PLP `recently-products` | "Sorry, there are no products." ilk ziyaret. |
| Blog list ek bloklar | f-blog / f-b-post / all-article-tags. Ana liste envanterde. |
| `/blogs/blog-home-beauty` | `/blogs/blog-new` ile aynı şablon id. Ayrı walk yok. |
| Blog post "You may also like" | PDP related ile aynı tip; post altında leftover. |
| Contact `section__map` | 400px, metin yok. Map şeması yok. |
| PLP facet/sort interact | DOM'da var; walk zorunlu interact değil. |
| Must-have / PDP tab `changed` | Sekmeler görüldü; tab tık leftover. |
| Mobile submenu `changed` | 375/768 chevron görüldü; alt menü açılmadı (kaçış). |
| Quick add / `#QuickAdd-*` | kart overlay. Interact listesinde yok. |
| Multitasking bar | `#Drawer-Multitasking-Bar` leftover. |
| Country/region + language | header form leftover. |

## Aday (yeni şema yok)

- **spotlight-products** → `product-showcase-featured` + delta (1/2/3 numaralı vitrin, 3 ürün).
- **az-brands** — A–Z marka dizini. Overlay/aday.
- **lookbook page** — hotspot + Show products.
- **map** — contact harita.
- **404** → `page-content-main` + delta. `pageType` 404 listede yok.
- **search / cart / collections / blog-list** klasörleri taksonomi `pageTypes` dışında (diğer temalarla aynı pratik).

## Interact notları

- Mega: `header-menu` custom element (`id="Details-HeaderMenu-2 test-4"`). SHOPS `<a>` href koleksiyon — tıklama kaçırır. Hover + `#MegaMenu-Content-2` forceOpen.
- Predictive: katalog `cream`. 1440 `#Search-In-Modal` header. 375/768 `side-drawer-opener.header__icon--search`.
- 375 **ve** 768 hamburger `summary.header__icon--menu` 24×24. 1440 0×0.
- Cart drawer `#CartDrawer`. ATC `#ProductSubmitButton-template--16903853998319__main`.
- PDP Color White $70.00 → Blue $72.00 (75ml). Size 75/100/120ml leftover (Color yeterli).
