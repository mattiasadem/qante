# Cuts leftovers / adaylar

*Store:* https://www.cutsclothing.com · *Tema (görülen):* yok — Hydrogen + Pack Digital (`powered-by`)  
*Tarih:* 2026-08-15

Şema icat edilmedi. Claiming observation yazılan tipler burada tekrarlanmaz.

---

ADAY: cuts-mens-shop-all-landing  
Gerekçe: `/pages/mens-shop-all` altı ürün şeridi (Tees, Polos, Bottoms, Long Sleeves, Layers, Accessories) — `product-showcase-grid-featured` tekrarı. Home’da aynı tip çekildi.  
Örnekler: https://www.cutsclothing.com/pages/mens-shop-all  
Öneri: ek instance isteğe bağlı  
Karar: leftover

---

ADAY: cuts-about-stack  
Gerekçe: About OUR VISION / OUR ETHOS / OUR INSPIRATION + All Mens/Womens promo. Tip `editorial-rich-text` / `promo-grid-banner`. 2 temsilci çekildi.  
Örnekler: `#mainContent > div > section:nth-of-type(3)`  
Karar: leftover

---

ADAY: cuts-pdp-complete-look-okendo  
Gerekçe: PDP “Complete The Look” tabs section içine gömülü. Okendo reviews (`#oke-*`, 4.4 / 4831) — `testimonial-quote-carousel` değil; reviews ailesi yok.  
Örnekler: https://www.cutsclothing.com/products/white-crew-curve-hem  
Karar: leftover

---

ADAY: cuts-rewards-tiers  
Gerekçe: Cuts Club PRIORITY / VIP kart + How it works + membership Add To Cart. Hesap/PII’ye girilmedi.  
Örnekler: https://www.cutsclothing.com/pages/cuts-club  
Karar: leftover — hero + FAQ temsilci

---

ADAY: cuts-returns-policy-body  
Gerekçe: Returns hero altında Return Policy / boxers / international metin. `page-content-main` ailesi; privacy’de aynı tip var.  
Karar: leftover

---

ADAY: cuts-blog-empty  
Gerekçe: `/blogs/blog` 200 ama `main` section yok; header+footer. Article URL’leri sitemap’te (53).  
Örnekler: https://www.cutsclothing.com/blogs/blog  
Karar: leftover / hydrate boş

---

ADAY: cuts-store-locator-empty  
Gerekçe: `/pages/store-locator` 200, gövde boş (harita hydrate yok).  
Karar: leftover

---

ADAY: cuts-kustomer-help  
Gerekçe: Footer FAQ / Size + Fit / Contact Us → `cutsclothing.kustomer.help` (dış). Şema yok.  
Karar: leftover — PII/form yok

---

ADAY: cuts-plp-sidebar-filters  
Gerekçe: PLP sol kategori ağacı + Filters drawer + View 1/2 + Flat/Model. `product-showcase-grid-plp` delta; panel `changed` çekilmedi.  
Karar: leftover

---

ADAY: cuts-third-party  
Gerekçe: Elfsight Instagram (`eapps-instagram-feed`), Okendo, Searchspring, Playbook, Postscript, Intelligems (`ig-headless-version` 1.2.17), OneTrust cookie, accessiBe.  
Karar: leftover — şema yok

---

## Bilinçli atlananlar

- `/account` / login / checkout  
- Newsletter Sign up + return portal (PII)  
- Cuts Marketplace (`marketplace.cutsclothing.com`)  
- Kit/lookbook landing tekrarı (sitemap 200+ page)  
- Divider / 0px section (`nth-of-type(2)` home)
