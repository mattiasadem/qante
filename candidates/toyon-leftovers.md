# Toyon leftovers / adaylar

*Store:* https://toyon-toys.myshopify.com/  
*Tema (görülen, uydurulmadı):* **Toyon-toys-latest V-1.5.0** · `schema_name` **toyon_toys** · `schema_version` **1.5.0** · `theme_store_id` **null** · id `145295966363` · role `main` · shop `toyon-toys.myshopify.com`  
*Unlock:* vendor-published password `1` (ürün sayfası + title `TOYON TOYS (password: 1)`)  
*Tarih:* 2026-09-02  
*Host:* yalnız `toyon-toys.myshopify.com` — `toyon-toys-2` Critters, bu walk değil.

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: toyon-theme-store-id-null  
Gerekçe: Canlı `Shopify.theme.theme_store_id` **null**. Speedo Themes third-party; Theme Store id uydurulmadı.  
Örnekler: https://toyon-toys.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: toyon-vendor-published-demo-password  
Gerekçe: Speedo ürün sayfası demo password `1`. Title `(password: 1)`. Public storefront unlock; hesap değil. Capture `scripts/unlock-storefront.mjs` host map.  
Örnekler: https://speedothemes.com/products/speedo-shopify-toy-store-theme  
Öneri: leftover — yayınlanmış demo şifresi  
Karar: onay bekliyor

---

ADAY: toyon-newsletter-popup  
Gerekçe: `#shopify-section-newsletter-popup` h=0. “Get the newsletter Get 10% off.” PII, dur.  
Örnekler: overlay-group newsletter-popup  
Öneri: leftover — gizli popup  
Karar: onay bekliyor

---

ADAY: toyon-no-mega  
Gerekçe: `.mega-menu` yok. Shop / Shop By Age = `details#Details-HeaderMenu-2/3` basit dropdown. `navigation-header-mega` reuse + delta.  
Örnekler: home header  
Öneri: leftover — mega yok  
Karar: onay bekliyor

---

ADAY: toyon-menu-drawer-1440-zero  
Gerekçe: `summary.header__icon--menu` 1440'te 0×0. Open yalnız 375/768.  
Örnekler: home hamburger  
Öneri: leftover — masaüstü drawer host yok  
Karar: onay bekliyor

---

ADAY: toyon-footer-no-newsletter-input  
Gerekçe: Footer kolonları CONTACT US / SHOP / BRAND / SUPPORT. Newsletter input karede yok. `footer-columns-newsletter` reuse + delta.  
Örnekler: `#shopify-section-sections--18675764691099__footer`  
Öneri: leftover — şema slot boş  
Karar: onay bekliyor

---

ADAY: toyon-placeholder-copy  
Gerekçe: PDP 100 Day Returns / Certified Diamonds / Responsibly Sourced jewelry; Tormeti Manufacturing; home FAQ lorem; testimonials yazım “What our are Customer”; Toyos Toys Party; footer divasdolls@brown.com; size-guide yüzük tablosu.  
Örnekler: PDP multicolumn + IWT · `/pages/size-guide`  
Öneri: leftover — demo kopyası  
Karar: onay bekliyor

---

ADAY: toyon-pdp-empty-section  
Gerekçe: `#shopify-section-template--18675764461723__16572629707050636d` h=0, metin yok.  
Örnekler: Baby Teddy PDP  
Öneri: leftover — boş kutu  
Karar: onay bekliyor

---

ADAY: toyon-cart-footer-empty  
Gerekçe: `/cart` `#…__cart-footer` boşken h=0. `cart-page-main` yalnız cart-items.  
Örnekler: https://toyon-toys.myshopify.com/cart  
Öneri: leftover — sibling footer  
Karar: onay bekliyor

---

ADAY: toyon-404-aliases  
Gerekçe: `/pages/about-us` · `/pages/about` · `/pages/faq` · `/pages/contact-us` · `/pages/privacy-policy` 404. Gerçek: our-story / contact / faqs.  
Örnekler: https://toyon-toys.myshopify.com/pages/about-us  
Öneri: leftover — alias 404  
Karar: onay bekliyor

---

ADAY: toyon-wishlist-page  
Gerekçe: Header 0 Wishlist → `/pages/wishlist`. Hesap/PII; tıklanmadı, observation yok.  
Örnekler: https://toyon-toys.myshopify.com/pages/wishlist  
Öneri: leftover — custom page  
Karar: onay bekliyor

---

ADAY: toyon-size-guide-jewelry  
Gerekçe: `/pages/size-guide` yüzük çap/çevre tablosu (Britan & Australia / USA). Toy vitrin + jewelry leftover. `page-content-main` yazılmadı.  
Örnekler: https://toyon-toys.myshopify.com/pages/size-guide  
Öneri: leftover — yanlış sektör sayfası  
Karar: onay bekliyor

---

ADAY: toyon-in-the-press  
Gerekçe: `/pages/in-the-press` Lorem Ipsum passage. Tip `page-content-main` olurdu; walk min home/PLP/PDP/cart + our-story/contact/faqs/blog/404.  
Örnekler: https://toyon-toys.myshopify.com/pages/in-the-press  
Öneri: leftover — lorem page  
Karar: onay bekliyor

---

ADAY: toyon-buy-it-now  
Gerekçe: PDP `shopify-payment-button` BUY IT NOW. Ödeme — tıklanmadı.  
Örnekler: `/products/baby-teddy-animal-toy`  
Öneri: leftover — checkout  
Karar: onay bekliyor

---

ADAY: toyon-lead-capture-pii  
Gerekçe: Contact SEND + newsletter popup 10% off. Submit yok.  
Örnekler: `/pages/contact`  
Öneri: leftover — PII  
Karar: onay bekliyor

---

ADAY: toyon-industry-toys  
Gerekçe: ikas 12 endüstride “Toys” yok. Viewer `KAYNAK_INDUSTRIES` / `KAYNAK_SOURCES` bu slug’a eklenmedi (Speedo third-party; Theme Store `shopify` kaynağı değil). Test sayaçları zaten diğer Speedo disk kaynaksız.  
Örnekler: home Shop By Age / Best Sellers  
Öneri: leftover — endüstri + kaynak map  
Karar: onay bekliyor

---

ADAY: toyon-blogs-json-empty  
Gerekçe: `/blogs.json` HTML/parseError. `/blogs/news` 200 + yazılar var.  
Örnekler: https://toyon-toys.myshopify.com/blogs/news  
Öneri: leftover — JSON endpoint  
Karar: onay bekliyor

---

ADAY: toyon-cart-js-password-html  
Gerekçe: Önceki Speedo walk’larda unlock sonrası `/cart.js` HTML dönebilir. ATC UI tık.  
Örnekler: home cart drawer  
Öneri: leftover — AJAX fallback  
Karar: onay bekliyor
