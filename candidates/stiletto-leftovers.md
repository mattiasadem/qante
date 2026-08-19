# Stiletto leftovers

*Kaynak (resmi walk URL):* https://stiletto-theme-vogue.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/stiletto  
*Tema gözlemi:* **stiletto-v6-1-0** · `schema_name` Stiletto · `schema_version` 6.1.0 · `theme_store_id` **null** · theme id `160008405141`  
`Shopify.shop` = `stiletto-theme-vogue.myshopify.com`

## Tema kimliği

- Canlı `Shopify.theme.theme_store_id` **null**. Theme Store id uydurulmadı.
- `schema_name` **Stiletto** (Dawn/Horizon değil). role `main`.
- Preset klasörü `default` = Vogue walk URL. Theme Store listing hâlâ `stiletto-theme-vogue.myshopify.com` gösteriyor.
- **301:** `stiletto-theme-vogue.myshopify.com` → `stiletto-theme-stiletto.myshopify.com` (`x-redirect-reason: primary_domain_redirection`). Aynı shop, aynı theme JSON. Gözlem URL’leri resmi Vogue host’ta bırakıldı.
- Theme Store preset isimleri (listing): stiletto / luster / linen / glimmer / tapestry. **Vogue ayrı preset path yok**; kullanıcı `default (Vogue)` dedi, klasör `default`.

## Yok / gitmedi

| Madde | Ne oldu |
|---|---|
| `/pages/about` | 404. About = `/pages/about-us` |
| `/pages/contact-us` | 404. Contact = `/pages/contact` |
| Newsletter popup (`data-is-signup=true`, JOIN US / GET OFFER) | Scroll-delay. PII — submit yok. Statik kareler popup kapatılarak çekildi |
| Theme walkthrough popup | WATCH NOW / `/pages/theme#stiletto-walkthrough`. `.popup--flyout [data-dismiss-popup]` ile kapatıldı |
| “Get 10% Off” tab | Popup kapanınca köşe tab. Bazı PNG’de kalır — leftover, kabul |
| Account / Register / Login | Mobil menüde görüldü — tıklanmadı |
| Checkout | Drawer + cart sayfa CHECKOUT — tıklanmadı |
| Footer SIGN UP, contact SUBMIT, blog comment | PII — dur |
| `/pages/lookbook`, shoppable-sections, theme, grids/heros/promos… | Tema satış / section demo; walk dışı |
| `/pages/fit-guide`, `/pages/size-guide`, `/pages/stockists` | Walk dışı |
| About 80px boş rich-text (`rich_text_ki99Er`, `rich_text_TyWcVm`) | Metin yok |
| FAQ `promotion-bar` (“DIDN'T FIND YOUR ANSWER?”) | CTA bant; `cta-band` şeması yok |
| PDP `scrolling-content` END OF SEASON SALE | Home’da envanter |
| PDP sticky ATC | Kesite sızıyor; ayrı observation yok |
| Mobile submenu `changed` | 375/768 chevron görüldü; alt menü açılmadı |
| SECTIONS mega | Tema satış; hover/tık yok |
| `/collections/all` | Aynı PLP şablonu (`dresses-1` çekildi) |
| Cart drawer qty 375/768 | Plus tık 2. denemede de eşleşmedi. Qty 1440 drawer + cart sayfa 3vp var |

## CRO şemalar — diskte var, Stiletto'da observation yok

| schemaId | Not |
|---|---|
| `before-after-slider` | Demo’da section görülmedi |
| `commerce-tools-products-bundle` | Bundle section yok |
| `comparison-quick-table` | Karşılaştırma tablosu yok |
| `product-finder-quiz` | Quiz yok |
| `media-scrolling-gallery` | Scrolling gallery yok (shoppable-videos var → `media-shop-the-feed`) |
| `lead-capture-newsletter-band` | Footer `footer-columns-newsletter` farklı schema |

## CRO interact — bu pass

| schemaId | States | Not |
|---|---|---|
| `promo-banner-countdown` | initial | Sayaç otomatik; changed anlamsız |
| `testimonial-quote-carousel` | initial, changed | home + PDP |
| `media-shop-the-feed` | initial, changed (768/1440), open | 375 carousel ok yok; quick-view viewport capture |
| `faq-collapsible-tabs` | initial, changed | yalnız `faq-support` ORDERS grubu |
| `lead-capture-form` | initial | PII stop |

**FAQ interact edilmedi (statik initial):** `about-brand`, `contact`, `faq-support` `-2`, `-3` — aynı accordion pattern; tekrar çekilmedi.

## Aday (yeni şema yok)

- **shoppable-hero** — video/görsel + ürün rayı. `media-video-hero` / `media-lookbook-banner` + delta.
- **shoppable-videos** — `media-shop-the-feed` + delta.
- **sales-banner / grid** — `promo-grid-banner` + delta.
- **scrolling-text-banner** — görselli marquee. `promo-scrolling-marquee` + delta.
- **gallery-carousel** — özellik slaytları. `features-slider-multicolumn` + delta.
- **list-collections** — `collection-nav-grid`.
- **404 template** — taxonomy `pageTypes` içinde yok. `page-content-main` + delta.
- **quick-cart** — parent 0px; kutu `.quick-cart__container`. `global-cart-drawer` + delta.
- **#MainQuickSearch** — sağ overlay `.quick-search.active`. `global-predictive-search` + delta.
- **drawer-menu** — `button[data-js-menu-button]`. `global-menu-drawer` + delta.

## Interact notları

- CLOTHING mega: `[data-meganav-handle=clothing]` — yalnız hover. 2 kolon + THE CITY EDIT / DISCOVER.
- Predictive: opener `a[data-search]`; `input#search`. katalog `dress`.
- Cart: `a[data-js-cart-icon=cart]` → `.quick-cart__container`. Behati XS $249 → qty2 $498 (drawer 1440 + cart sayfa 3vp).
- 1440 hamburger yok. 375/768 `.drawer-menu.active.visible`. Register/Login dur.
- PDP: Color Pearl swatch + Size XS→S. Fiyat $249.
- **CRO:** home quote `.slider-nav-button-next`; PDP `.testimonials__navigation-button--next`; shop-feed `.carousel__navigation-button--forward` (768/1440); FAQ `button[aria-controls=content-1]`; quick-view `button[data-quick-shop-trigger=quick-view]` → `.quick-product`.
