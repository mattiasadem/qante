# Hollow Socks leftovers / adaylar

*Store:* https://hollowsocks.com · *Tema (görülen):* followhollow/main · schema_name Shopify Theme Lab 1.1.0 · custom (`theme_store_id` null)  
*Shop:* followhollow.myshopify.com · theme id 151218847913  
*Tarih:* 2026-08-15 · **retry 2026-08-20** (PR #278 · #67 devam değil)

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: hollowsocks-404  
Gerekçe: 2026-08-20 yeniden: `/pages/this-page-does-not-exist-qante` ve `/pages/about` → HTTP 404, title “404 Not Found – Hollow Socks”, “404 Page Not Found” (`#shopify-section-template--20352645333161__main`, 136px). Taksonomide 404 pageType yok. `page-content-main` zorlama.  
Örnekler: https://hollowsocks.com/pages/this-page-does-not-exist-qante · https://hollowsocks.com/pages/about  
Öneri: ertele / candidate  
Karar: onay bekliyor

---

ADAY: hollowsocks-cart-page-stub  
Gerekçe: 2026-08-20 yeniden: GET `/cart` 200, title “Your Shopping Cart – Hollow Socks”, `#shopify-section-template--20352646217897__main` ve `main#main-content` height 0. Asıl sepet `[data-cart-drawer].ds-cart-drawer`. `cart-page-main` yok.  
Örnekler: https://hollowsocks.com/cart  
Öneri: leftover — drawer observation home’da  
Karar: onay bekliyor

---

ADAY: hollowsocks-blog-empty  
Gerekçe: 2026-08-20 yeniden: `/blogs/news` ve `/blogs/news/why-we-believe-in-alpaca-socks` 200; template `__main` height 0; yalnız social gallery + footer.  
Örnekler: https://hollowsocks.com/blogs/news · https://hollowsocks.com/blogs/news/why-we-believe-in-alpaca-socks  
Öneri: leftover — kırık/boş blog şablonu  
Karar: onay bekliyor

---

ADAY: hollowsocks-junip-reviews  
Gerekçe: PDP Junip histogram leftover (şema yok). `/pages/reviews` hâlâ yalnız “REVIEWS” (`ds_main_page_mkGjVk`, 209px). **2026-08-20:** `/pages/all-reviews` artık hydrate — `ds_junip_reviews_P3pjga` 3599px, “Product reviews / Store reviews / 4.82 / 27,446 reviews” + histogram + Latest/Oldest sort. `testimonial-quote-carousel` zorlama (filtre/histogram). Alt BEST SELLERS marquee resmi 3vp var (`all-reviews/product-showcase-grid-featured`).  
Örnekler: https://hollowsocks.com/products/crew-performance-alpaca-socks · https://hollowsocks.com/pages/reviews · https://hollowsocks.com/pages/all-reviews  
Öneri: ertele / commerce-tools  
Karar: onay bekliyor

---

ADAY: hollowsocks-gorgias-help  
Gerekçe: `/pages/faqs` ve `/pages/contact-us` `ds_custom_liquid` + Gorgias iframe. Contact form gönderilmedi (PII). Wrapper observation var.  
Örnekler: https://hollowsocks.com/pages/faqs · https://hollowsocks.com/pages/contact-us  
Öneri: leftover — iframe help-center  
Karar: onay bekliyor

---

ADAY: hollowsocks-advertorial-lps  
Gerekçe: `sitemap_pages` ~111 URL; çoğu `10r-*` / `a63-*` / `lp-*` / `voc-advetorial` / `comp-advertorial`. 2026-08-20: `/pages/10r-compression-v1` 200, main 6879px, Replo head styles; `/pages/comp-advertorial` 200, main 25734px, Replo. Shopify section 3vp yok. Şema uydurulmadı.  
Örnekler: https://hollowsocks.com/pages/10r-compression-v1 · https://hollowsocks.com/pages/comp-advertorial  
Öneri: ertele — roster  
Karar: onay bekliyor

---

ADAY: hollowsocks-compression-pdp-replo  
Gerekçe: 2026-08-20: `/products/alpaca-compression-socks` 200 → `?variant=46867876544681`. Shopify map’te görünür section yalnız social+footer. `main` 7426px; Replo host (`replo__productTemplate`). Crew `ds_pdp_hero` değil. Şema uydurulmadı.  
Örnekler: https://hollowsocks.com/products/alpaca-compression-socks  
Öneri: leftover — Replo LP/PDP  
Karar: onay bekliyor

---

ADAY: hollowsocks-quiz  
Gerekçe: 2026-08-20: `/pages/compression-quiz-v1` 200, title “Find the Perfect Compression Socks for your Legs!”. `main` height 0; `.shopify-section` 0. **Start tıklanmadı** (PII).  
Örnekler: https://hollowsocks.com/pages/compression-quiz-v1  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: hollowsocks-store-locator  
Gerekçe: 2026-08-20: `/pages/store-locator` `ds_store_locator_page_MahgQF` 737px, görünür metin “STORE LOCATOR” (harita hydrate belirsiz). `store-locator` şeması yok. Alt BEST SELLERS marquee resmi 3vp var (`store-locator/product-showcase-grid-featured`).  
Örnekler: https://hollowsocks.com/pages/store-locator  
Öneri: leftover — locator bloğu  
Karar: onay bekliyor

---

## 404 URL’ler (şema yok)

`/pages/about` → `/pages/about-us`  
`/pages/contact` → `/pages/contact-us`  
`/pages/faq` → `/pages/faqs`  
`/pages/help` · `/pages/support` · `/pages/returns` · `/pages/privacy` · `/pages/terms` · `/pages/blog` · `/pages/journal`

---

## Diğer leftover (aday değil)

- Home `intro_reveal_Eqqjhj` height 0
- PLP `plp_callout_BNgx8J` 375’te 39px “LABOR DAY SALE: BUY 2 GET 2 FREE”; 768/1440 height 0
- Search filters section (`SHOW FILTER + SORT` / VIEW AS MODEL|PRODUCT) — ayrı 3vp yok
- PLP resmi 3vp **hâlâ yok** (2026-08-20 official `capture-observation.mjs` `/collections/best-sellers` `product-showcase-grid-plp`). Script’e dokunulmadı. Overlay probe (`dismiss-overlays.mjs` + `assertCleanForScreenshot`, evidence yok):
  1. Tema t=0: `Shopify.theme.name` **followhollow/main** · schema_name Shopify Theme Lab 1.1.0 · theme id 151218847913 · shop followhollow.myshopify.com.
  2. QV host `DS-QUICK-VIEW` `never is-open`, `opacity-0`, `pointer-events-none`, `aria-hidden=true`. Close `[aria-label=Close]` 40×40, **opacity 1**, visibility visible, href yok, Playwright-visible; host `pointer-events-none`.
  3. Kapalı `ds-cart-drawer.pointer-events-none.fixed.inset-0` her vp’de **before-blocker** (opacity 1, header/main dışında). 375/1440’te `dismissAllOverlays` URL değiştirmez ve after-blocker boş (assertClean geçer).
  4. **768** dismiss `force` Close → URL kaydı: `/collections/best-sellers` → `/products/hunt-socks?variant=47338929029289` (official capture 3× “Dismiss sonrası URL kaydı”). Overlay probe `/collections/all` 768 → `/products/crew-performance-alpaca-socks?variant=42647235362985`.
  5. Capture 3 kez geri alıyor; loop çıkınca son `goto` PLP (başarısız dismiss). `assertCleanForScreenshot` kırılıyor: aynı `ds-cart-drawer` 768×1024. Exact: `Screenshot iptal: ekranda hâlâ overlay var`.
  6. 375/1440 PLP dismiss URL değiştirmez; official sıra 375→768→1440 olduğu için 768’de duruyor. Tabs + grid ikisi de aynı URL — ikincisine resmi koşu yok (aynı blocker).
  7. Orphan `evidence/hollowsocks/default/collection/product-showcase-grid-plp.375.png` (2026-08-20 retry yazdı; 2 kolon BEST SELLERS grid) — `evidence[]` boş, **claim yok**.
- Sub-nav görsel şerit 375: 114px (BEST SELLERS…RUNNING); 768/1440 `sm:h-0`. `ds_categories` 375 height 0, 768/1440 149/175px.
- Header mega drawer DOM (`.ds-meganav`) — nav `data-meganav-ignore`; hover panel getirmedi
- Freegifts / BOGOS / Recart overlay (doldurulmadı)
- Newsletter footer — doldurulmadı
- Native `/policies/*` stub (pages/privacy-policy observation var)
- About `features-slider-multicolumn` ok/perk değişimi interact edilmedi (statik 3vp var)
- Cart drawer Checkout / + SELECT NOW tıklanmadı
- Home trust-line resmi kare 21k/1M/90-day; sonraki viewport karelerinde siyah şerit 27k/4M/99-day (canlı kopya)
- `/pages/reviews` 768 official dismiss → `/products/trades-socks?variant=45706827759785` ×3 (aynı QV Close flake; title-only leftover)
