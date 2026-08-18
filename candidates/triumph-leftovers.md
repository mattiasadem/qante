# Triumph leftovers / adaylar

*Store:* https://triumph-theme.myshopify.com/  
*Tema (görülen, uydurulmadı):* **Designer check** · `schema_name` **Triumph** · `schema_version` **1.0.0** · `theme_store_id` **null** · role `main` · id `184658100489` · shop `triumph-theme.myshopify.com`  
*Theme Store listing:* https://themes.shopify.com/themes/triumph  
*Tarih:* 2026-08-18

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: triumph-theme-store-id-null  
Gerekçe: `Shopify.theme.name` = Designer check; `schema_name` = Triumph; `schema_version` = 1.0.0; `theme_store_id` = null; role main; id 184658100489. Theme Store listing `triumph` ile runtime id eşleşmedi.  
Örnekler: https://triumph-theme.myshopify.com/  
Öneri: leftover — gözlenen künye  
Karar: onay bekliyor

---

ADAY: triumph-mobile-catalog-button  
Gerekçe: `#…__mobile_catalog_button_J4MaMb` 1440’te 0×0; 375’te 59px “PRODUCT CATALOG” (`catalog-opener`). Ayrı şema yok.  
Örnekler: home, 375  
Öneri: leftover — mobil catalog opener  
Karar: onay bekliyor

---

ADAY: triumph-discount-coupon  
Gerekçe: `#…__discount_coupon_9zjPN6` — USE CODE: TRIUMPH / GET 50% OFF / Copy discount code. Kupon kopyala + checkout. Şema yok. Kod uygulanmadı.  
Örnekler: home; PDP JumpFlex’te de “TRIUMPH” kupon kartı buy box içinde  
Öneri: leftover — kupon kartı  
Karar: onay bekliyor

---

ADAY: triumph-call-to-action-empty  
Gerekçe: `#…__call_to_action_UX3tyj` ~156px; metin/görsel yok (countdown iskeleti boş).  
Örnekler: home  
Öneri: leftover — boş/sticky CTA  
Karar: onay bekliyor

---

ADAY: triumph-home-lazy-unhydrated  
Gerekçe: Scroll + bekleme sonrası `lazy-section-template` kaldı, içerik yok: `featured_collection_scroll_KBhBaL`, `featured_product_information_9UKFYw`, `scrolling_text_section_BBWCzm`, `media_vertical_scroll_FJ3tqX`, `media_tabs_F643C7`.  
Örnekler: home  
Öneri: leftover — hydrate olmadı  
Karar: onay bekliyor

---

ADAY: triumph-newsletter-popup  
Gerekçe: `#…__popup_7HVQ3V` overlay group, h=0. Newsletter/email popup. Açılmadı, submit yok.  
Örnekler: overlay-group  
Öneri: leftover — popup  
Karar: onay bekliyor

---

ADAY: triumph-footer-utilities  
Gerekçe: Sibling `#…__utilities` — © 2026 Triumph Theme · Privacy · Terms · payment ikonları + locale. Newsletter+kolon `footer-columns-newsletter`.  
Örnekler: home footer group  
Öneri: leftover — copyright bar  
Karar: onay bekliyor

---

ADAY: triumph-breadcrumbs  
Gerekçe: Birçok şablonda id’siz 44px `.section__breadcrumbs` (Collections, Search, About, Contact, News, PDP). `navigation-breadcrumbs` yazılmadı — ince şerit.  
Örnekler: `/collections`, `/pages/about-us`  
Öneri: leftover — breadcrumb  
Karar: onay bekliyor

---

ADAY: triumph-header-gender-tabs  
Gerekçe: `lava-nav` WOMEN (`/`) · MEN (`/pages/man-landing`) · KIDS (`/pages/kids-landing`). Header mega yanında cinsiyet tab. Landing sayfaları walk dışı.  
Örnekler: `#HeaderTabMenu-Women`  
Öneri: leftover — header feature  
Karar: onay bekliyor

---

ADAY: triumph-about-extra-sections  
Gerekçe: `/pages/about-us` inventory yalnız title + `media_vertical_scroll`. Yazılmayan: `media_horizontal_scroll_6gmBnR`, `media_collage_scroll_ptgWTc`, `custom_section_tPQ3kA`, `scrolling_logo_Y6gWHa`, `collage_Aa6KR3`, `icons_with_text_rDaHCK`, `images_with_text_VTWmwT`, `call_to_action_4DL94N`, `slideshow_pUpmnw`.  
Örnekler: https://triumph-theme.myshopify.com/pages/about-us  
Öneri: leftover — about extras  
Karar: onay bekliyor

---

ADAY: triumph-contact-faq-shortcut  
Gerekçe: `#…__custom_section_d7BMNT` — FAQ SHORTCUT / VIEW FAQS. Form ayrı `lead-capture-form`.  
Örnekler: https://triumph-theme.myshopify.com/pages/contact  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: triumph-blog-featured-extra  
Gerekçe: `/blogs/news` sibling `#…__featured_blog_kcUhTj` (diğer yazılar). Main list `blog-list-main`.  
Örnekler: https://triumph-theme.myshopify.com/blogs/news  
Öneri: leftover — tekrar featured  
Karar: onay bekliyor

---

ADAY: triumph-blog-post-other  
Gerekçe: Article sibling `#…__blog_posts_jetaPY` OTHER POSTS.  
Örnekler: sports bra article  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: triumph-404-routes  
Gerekçe: Aynı 404 (`#…__main` 404 / PAGE NOT FOUND / CONTINUE SHOPPING): `/pages/about`, `/pages/contact-us`, `/blogs/journal`, `/pages/does-not-exist-qante`. About içeriği `/pages/about-us`. Contact `/pages/contact`. Blog `/blogs/news` + `/blogs/women` + `/blogs/man`.  
Örnekler: https://triumph-theme.myshopify.com/pages/about  
Öneri: observation `not-found/page-content-main` yazıldı  
Karar: onay bekliyor

---

ADAY: triumph-quick-view  
Gerekçe: Home tab/bundle kartlarında Quick view + `quickview-modal`. Tıklanmadı. `global-quick-view` yazılmadı.  
Örnekler: featured_collection_tab  
Öneri: leftover — QV  
Karar: onay bekliyor

---

ADAY: triumph-sitemap-pages-not-walked  
Gerekçe: Sitemap pages walk dışı: `/pages/data-sharing-opt-out`, `/pages/man-landing`, `/pages/kids-landing`, `/pages/theme-features`, `/pages/location`, `/pages/help`, `/pages/material`, `/pages/size-guide`, `/pages/shoe-size-guide`.  
Örnekler: sitemap_pages_1.xml  
Öneri: leftover — walk kapsamı  
Karar: onay bekliyor

---

## 404 URL’ler (aynı şablon)

`/pages/about`  
`/pages/contact-us`  
`/blogs/journal`

---

## Bilinçli atlananlar

- `/account/login` — auth  
- Checkout / Buy it now / cart Check out  
- Newsletter / contact form submit (PII)  
- Coupon apply / copy (TRIUMPH)  
- Locale/currency değiştirme  
- Quick view  
- Filtre/sort interact  
- FAQ accordion açma (static 3vp var)  
