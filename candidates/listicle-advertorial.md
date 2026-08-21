# Aday — listicle-advertorial (sayfa tipi)

Ridge `listicle-5-last-minute-gifts` keşfinde şemaya sığmayan / ayrı schemaId gerektiren kalıplar.

---

ADAY: listicle-shop-the-list  
Gerekçe: Numaralı H2 blokları (1–5) her biri ürün anlatımı + “Shop …” CTA linki. `blog-post-main` `icerik` slotuna sığdırılabilir ama tekrarlayan item yapısı (başlık, fiyat, bullet, shop link) ayrı section ailesi adayı.  
Örnekler: https://ridge.com/a/blog/5-last-minute-gifts-to-get-from-ridge-this-holiday-season (Wallet, Power Bank, Rings, Long Haul Kit, Daily Survival Kit)  
Öneri: Yeni `instance` şema — `items[]` (baslik, metin, cta, link ref) + `styleKnobs` layout  
Karar: onay bekliyor

---

ADAY: listicle-table-of-contents  
Gerekçe: “Table of Contents” anchor listesi article gövdesinde; blog-post içi leftover değil — ayrı navigasyon bloğu.  
Örnekler: Ridge listicle TOC (9 anchor + alt maddeler)  
Öneri: `blog-post-main` delta veya editorial-nav TOC varyantı  
Karar: onay bekliyor

---

ADAY: dib-listicle-app-host  
Gerekçe: İçerik `#dib-posts` / `#dib-template-2` üçüncü parti DIB embed; Shopify `shopify-section` değil.  
Örnekler: `#main-content > #dib-posts`  
Öneri: Platform/app leftover — şema icat yok; observation `delta`  
Karar: onay bekliyor

---

## Bilinçli reuse (yeni schemaId yok)

| schemaId | Ridge selector | Not |
|---|---|---|
| `blog-post-main` | `#dib-post-single` | Numaralı 1–5 shop-the-list + intro/closing |
| `faq-collapsible-tabs` | `#dib-post-single .dib-faq` | 9 FAQ accordion |
| `blog-list-main` | `.dib-related` | 3 related article kart |

## Bilinçli atlanan (bu sayfa turu)

- Global header / footer / announcement — storefront walk değil; yalnız listicle-advertorial
- Newsletter / form submit — PII stop
