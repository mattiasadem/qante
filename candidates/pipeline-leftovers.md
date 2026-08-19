# Pipeline leftovers

*Kaynak:* https://pipeline-theme-fashion.myshopify.com/  
*Tema (görülen, uydurulmadı):* **Pipeline 8.2.0** · `schema_name` **Pipeline** · `schema_version` **8.2.0** · `theme_store_id` **null** · role `main` · id `162762195160` · shop `pipeline-theme-fashion.myshopify.com`  
*Theme Store listing:* https://themes.shopify.com/themes/pipeline — Paid · by Groupthought  
*Preset:* default = Fashion / official Theme Store preview (title suffix **Pipeline Clean**)  
*Tarih:* 2026-08-17

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: pipeline-bright-sibling  
Gerekçe: `pipeline-theme.myshopify.com` Bright sibling. Kullanıcı yasağı — yürünmedi.  
Örnekler: Theme Store Fashion preview only  
Öneri: leftover — ayrı preset  
Karar: onay bekliyor

---

ADAY: pipeline-announcement-section-empty  
Gerekçe: `#shopify-section-sections--22817358217432__announcement` 0px / boş. Ticker `Fall collection is out now \| Shop our fall collection` header `.header__inner--bar` içinde.  
Örnekler: home header  
Öneri: leftover — ayrı announcement section yok  
Karar: onay bekliyor

---

ADAY: pipeline-subfooter  
Gerekçe: `__subfooter` 131px © PIPELINE CLEAN 2026 + Language/Currency + Fringe/Shoreside/Wayfarer. Footer observation yalnız `__footer`.  
Örnekler: her sayfa altı  
Öneri: leftover — copyright şeridi  
Karar: onay bekliyor

---

ADAY: pipeline-popups-empty  
Gerekçe: `sections--22817358250200__popups` 0px / boş HTML. Newsletter popup bu demoda kapalı.  
Örnekler: overlay group  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: pipeline-hamburger-768  
Gerekçe: 375 `button.header__mobile__button` 60×53. 768/1440 hamburger 0×0; 768 inline Shop/Lookbooks/Contact/News.  
Örnekler: 768 home header  
Öneri: leftover — tablet hamburger yok  
Karar: onay bekliyor

---

ADAY: pipeline-account  
Gerekçe: Header “My Account”. Login tıklanmadı (PII).  
Örnekler: header  
Öneri: PII stop  
Karar: onay bekliyor

---

ADAY: pipeline-lookbooks  
Gerekçe: `/pages/lookbook` `/pages/wayfarer-lookbook` `/pages/shoreside` nav’da. Walk listesi lookbook istemedi — yürünmedi. Home split CTA’lar bu sayfalara gider.  
Örnekler: header Lookbooks  
Öneri: leftover — lookbook sayfaları  
Karar: onay bekliyor

---

ADAY: pipeline-map-section  
Gerekçe: Contact `#…__db15fb73-8e51-417b-a4ce-2c766759e521` `.map-section` Flagship 123 Curtain Rd London. Map şeması yok.  
Örnekler: `/pages/contact`  
Öneri: leftover — harita  
Karar: onay bekliyor

---

ADAY: pipeline-locations-theme-features  
Gerekçe: `/pages/locations` `/pages/theme-features` footer/nav’da. Walk dışı.  
Örnekler: footer  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: pipeline-about-main-empty  
Gerekçe: About `__main` 0px.  
Örnekler: `/pages/about`  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: pipeline-plp-subcollections-empty  
Gerekçe: Fall 2022 `__subcollections` 0px.  
Örnekler: `/collections/fall-2022`  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: pipeline-collection-split-shape  
Gerekçe: Home holiday/fringe/wayfarer + PDP pairs = `collection-split` (kampanya kolonu + ürün şeridi). `product-showcase-grid-featured` / `product-showcase-related` reuse + delta. Yeni şema yok.  
Örnekler: home collection-split  
Öneri: leftover — ayrı tip adayı  
Karar: onay bekliyor

---

ADAY: pipeline-quick-add  
Gerekçe: Kartlarda QUICK ADD. global-quick-view interact edilmedi.  
Örnekler: home tabs / bestsellers  
Öneri: leftover — quick add  
Karar: onay bekliyor

---

ADAY: pipeline-plp-filter-interact  
Gerekçe: PLP HIDE FILTERS + PRODUCT TYPE/COLOR görüldü. Facet changed çekilmedi.  
Örnekler: `/collections/fall-2022`  
Öneri: leftover — filtre derinliği  
Karar: onay bekliyor

---

ADAY: pipeline-404-routes  
Gerekçe: Aynı 404 (`template--22817365885144__main`): `/pages/about-us` `/pages/contact-us` `/blogs/journal` `/blogs/the-journal` + rastgele path.  
Örnekler: https://pipeline-theme-fashion.myshopify.com/pages/about-us  
Öneri: leftover — tek 404 şablon  
Karar: onay bekliyor

---

ADAY: pipeline-taxonomy-404  
Gerekçe: 404 `page-content-main` reuse; `pageType` 404 listede yok.  
Örnekler: `/pages/this-does-not-exist-xyz-pipeline`  
Öneri: leftover — taksonomi  
Karar: onay bekliyor

---

ADAY: pipeline-tenoff-coupon  
Gerekçe: Cart sayfası “Use code TENOFF at checkout for 10% off”. Kupon uygulanmadı.  
Örnekler: `/cart` filled  
Öneri: leftover — kupon  
Karar: onay bekliyor

---

ADAY: pipeline-buy-it-now  
Gerekçe: PDP terracotta BUY IT NOW (dynamic checkout). Tıklanmadı.  
Örnekler: Andre Luxe Cashmere Set  
Öneri: leftover — checkout  
Karar: onay bekliyor

---

ADAY: pipeline-pdp-accordions  
Gerekçe: DESCRIPTION 3vp açıldı (changed.desc-acik). CARE / SHIPPING + RETURNS + BUY IT WITH Quick View hâlâ kapalı. QV tık viewport dışı / dialog görülmedi.  
Örnekler: product-info-main  
Öneri: leftover — CARE/SHIPPING/QV  
Karar: onay bekliyor

---

ADAY: pipeline-pii-stop  
Gerekçe: Footer/home JOIN newsletter, contact SEND, checkout, account login tıklanmadı.  
Örnekler: newsletter · `/pages/contact` · cart  
Öneri: PII / checkout stop  
Karar: onay bekliyor

---

ADAY: pipeline-cro-no-countdown  
Gerekçe: Fashion demo’da countdown section / timer yok. PDP “Only N left” stok metni — ayrı countdown şeması yok.  
Örnekler: home section listesi  
Öneri: leftover — observation yok, interact icat etmedi  
Karar: onay bekliyor

---

ADAY: pipeline-cro-no-reviews  
Gerekçe: testimonial / reviews section yok. `social-proof-brand-logos` statik logo şeridi.  
Örnekler: home `__logos`  
Öneri: leftover — observation yok  
Karar: onay bekliyor

---

ADAY: pipeline-cro-no-comparison  
Gerekçe: comparison / us-vs-them yok.  
Örnekler: home + PDP  
Öneri: leftover — observation yok  
Karar: onay bekliyor

---

ADAY: pipeline-cro-no-before-after  
Gerekçe: before-after slider yok.  
Örnekler: home + PDP  
Öneri: leftover — observation yok  
Karar: onay bekliyor

---

ADAY: pipeline-cro-no-quiz  
Gerekçe: quiz / finder yok.  
Örnekler: home  
Öneri: leftover — observation yok  
Karar: onay bekliyor

---

ADAY: pipeline-size-guide-page  
Gerekçe: PDP “SIZE GUIDE” → `/pages/sizing`. Sayfa yürünmedi; size-guide observation yok. Interact şema icat etmez.  
Örnekler: product-info-main  
Öneri: leftover — ilk envanter `/qante-discover`  
Karar: onay bekliyor

---

ADAY: pipeline-sticky-atc-css  
Gerekçe: PDP `product__inner is-sticky` buy kolonunu yapıştırır. Ayrı fixed sticky ATC bar / observation yok.  
Örnekler: Andre Luxe  
Öneri: leftover — feature, yeni tip değil  
Karar: onay bekliyor

---

ADAY: pipeline-bestsellers-no-slider  
Gerekçe: Home BEST SELLERS (`product-showcase-grid-featured-3`) ok yok; statik ızgara. Changed zorlanmadı. QUICK ADD leftover.  
Örnekler: `#…__16637296905e47ad83`  
Öneri: leftover — slider yok  
Karar: onay bekliyor
