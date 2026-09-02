# Vedzila leftovers

*Kaynak:* https://vedzila-organic.myshopify.com/  
*Tema gözlemi:* **Copy of speedo-vedzila-organic-v-1-5-0** · `schema_name` vedzila-organic · `schema_version` 1.5.0 · `theme_store_id` **null** · theme id `174316257564`  
*Vendor:* Speedo Themes · ürün https://speedothemes.com/products/vedzila-organic-shopify-hair-oli-and-shampoo-theme-os-2-0  
*Password:* `1` (ürün sayfasında yayınlı; aynı host)

## Tema kimliği

- Canlı `Shopify.theme.theme_store_id` **null**. Theme Store id uydurulmadı.
- `schema_name` **vedzila-organic** (Dawn türevi + Speedo custom). role `main`.
- Preset klasörü `default` = organik saç/cilt vitrin.
- Başka host yok. `vedzila-organic.myshopify.com` tek walk.

## Yok / gitmedi

| Madde | Ne oldu |
|---|---|
| `/pages/about` | 404. About = `/pages/about-us` |
| `/pages/contact-us` | 404. Contact = `/pages/contact` |
| `/pages/faqs` | 404. FAQ = `/pages/faq` |
| `/blogs/blog` | 404. Blog = `/blogs/news` |
| `/pages/privacy-policy` | 404. Policy = `/policies/privacy-policy` |
| `/policies/privacy-policy` gövde | Native Shopify policy — `shopify-section` gövde yok (yalnız header/footer/newsletter). Observation yok |
| 404 `/this-page-does-not-exist-qante` | `template-404` 230px “Page not found / CONTINUE SHOPPING”. Leftover; şema uydurulmadı |
| newsletter-popup | 0px kapalı. Subscribe PII — dur |
| `/collections/all` | Shop nav. Banner title-only (97px “Collection: Products”) + Size/Availability/Price facet. Yazılan PLP = `/collections/hair-shampoo` (görsel hero) |
| `/collections/frontpage` | “Home page” koleksiyon. Walk dışı |
| Saffron Facial Oil PDP | Bestsellers ilk ürün; varyantsız. Walk PDP = Chilli Hair Oil (Size 100/200/400) |
| Wishlist “Add to wishlist” | PDP buton. App/overlay yoklandı değil — leftover |
| Buy it now | Shopify dynamic checkout. Tıklanmadı |
| Language English / Français | Header + footer disclosure. Locale değiştirilmedi |
| Account / Log in | Header + cart “Have an account?” — dur |
| Checkout / Check out | drawer + cart CTA — tıklanmadı |
| Newsletter SUBSCRIBE / Contact SEND | PII — dur |
| Home FAQ VIEW ALL | `/pages/faq` (ayrı observation). Home accordion kapalı |
| cart-footer | Boş sepet 0px. Dolu hâl interact |
| Quick view / compare | DOM’da quick-view yok |
| Social proof toast | “Someone liked and Buy … Verified” — app popup, PDP/home karelerinde. Şema yok |
| global-cart-drawer / menu static | Dawn host kutu viewport dolduruyor; kapalı kare homepage. Açık/dolu interact |

## Açık soru

- Shop mega kolon başlıkları interact karesinde doğrulanacak (`details#Details-HeaderMenu-2`).
- 1440 hamburger 0×0 — menu drawer yalnız 375/768 anlamlı mı?
- Size dropdown 100→200 ml fiyat $20→$40 bekleniyor (ürün JSON).
