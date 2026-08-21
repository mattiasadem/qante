# Away leftovers / adaylar

*Store:* https://www.awaytravel.com · *Tema (görülen, uydurulmadı):* `Shopify.theme.name` **RC v1.244.0 08/20/26 - 14.35** · `id` `190642716856` · `schema_name` **Away** · `schema_version` **1.244.0** · `theme_store_id` **null** · `role` `main` · `Shopify.shop` **766ad1-ab.myshopify.com**  
*Tarih:* 2026-08-21

Şema icat edilmedi. Claiming observation yazılan tipler burada tekrarlanmaz.

---

ADAY: away-global-cart-drawer  
Gerekçe: Header cart link `/cart` sayfasına gider. `global-cart-drawer` yok. Sepet `cart-page-main` ile kanıtlandı.  
Örnekler: https://www.awaytravel.com/cart  
Karar: leftover — drawer şeması uygulanmadı

---

ADAY: away-pdp-below-fold-sections  
Gerekçe: PDP `/products/carry-on` alt bölümler (`pdp_v2_reviews_hero_summary`, `bulleted_copy_block`, `product_faqs`, `product_reviews`) walk'ta görüldü; headless capture'ta `display:none` kalıyor (lazy hydrate). `prepareForceOpen` + scroll sonrası h=0. Aynı tipler home/collection/faq-support'ta kanıtlandı.  
Örnekler: https://www.awaytravel.com/products/carry-on  
Karar: leftover — PDP instance PNG yok; tip reuse yeterli

---

ADAY: away-product-reviews-block  
Gerekçe: `#shopify-section-template--28489580970168__product_reviews_kCcLre` tam Yotpo/Okendo tarzı reviews grid. Taksonomide ayrı reviews section yok; `testimonial-quote-carousel` üst özet bandına yakın ama tam grid değil.  
Karar: leftover — şema yok

---

ADAY: away-blog  
Gerekçe: `/blogs/the-away-report`, `/blogs/news`, `/blogs/journal` → 404. Footer'da blog linki yok. `blog-list-main` / `blog-post-main` kanıtsız.  
Karar: leftover — rota yok

---

ADAY: away-about-faq-404  
Gerekçe: `/pages/about`, `/pages/faq` → 404. Canlı: `/pages/our-story` (about), `/pages/faqs` (FAQ).  
Karar: leftover — standart URL'ler yok

---

ADAY: away-contact-gempages  
Gerekçe: `/pages/contact` GemPages (`gps-561511370516857941`). PII form — submit yok. `lead-capture-form` / `page-content-main` kanıtsız (section wrapper `display:contents`, GP içerik).  
Karar: leftover

---

ADAY: away-policy-redirect  
Gerekçe: `/policies/privacy-policy` yalnız lokasyon redirect metni; asıl içerik `/pages/privacy-policy/` (US). `page-content-main` kanıtsız.  
Karar: leftover

---

ADAY: away-stores-locator  
Gerekçe: `/pages/stores` hero + Reasons to Shop IRL (`reasons_to_getaway` reuse). Store kartları / harita locator şeması yok.  
Örnekler: https://www.awaytravel.com/pages/stores  
Karar: leftover

---

ADAY: away-verification-banner  
Gerekçe: `#shopify-section-sections--28489578643640__verification_banner_K63gTC` h=0 public walk'ta.  
Karar: leftover

---

ADAY: away-mopinion-survey  
Gerekçe: `#shopify-section-template--28489582739640__mopinion_KXGQKL` / PLP `mopinion_*` h=0 veya boş embed. Üçüncü parti anket.  
Karar: leftover

---

ADAY: away-plp-filter-panel-changed  
Gerekçe: PLP/search FILTER paneli açılmadı; şerit + chip kanıtı var (`product-showcase-grid-plp`, `search-results`).  
Karar: leftover — interact sonrası

---

ADAY: away-mega-menu-open  
Gerekçe: `js-menuTrigger` mega dropdown hover ile açılır; statik header obs var. Mega panel `visibility:hidden` until hover — interact gerekir.  
Karar: leftover — `navigation-header-mega` statik yeterli Mod A

---

ADAY: away-mobile-menu-accordion  
Gerekçe: Mobil drawer açık kanıtlandı; Luggage/Bags alt akordeon `changed` yok.  
Karar: leftover

---

ADAY: away-home-custom-sections  
Gerekçe: `#shopify-section-template--28489582739640__17804371666202d46f` custom app block h=0.  
Karar: leftover

---

ADAY: away-plp-seo-section-empty  
Gerekçe: `#shopify-section-template--28489582936248__seo_section_BWzY4L` h≈120, metin yok.  
Karar: leftover

---

ADAY: away-gladly-chat  
Gerekçe: Gladly FAQ CSS + chat widget; capture overlay değil section.  
Karar: leftover — üçüncü parti
