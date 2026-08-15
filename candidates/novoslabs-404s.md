# NOVOS Labs 404 / boş şablonlar

*URL:* https://novoslabs.com  
*Tema:* NOVOS Blocks 0.9.101  
*Tarih:* 2026-08-15

Taksonomide `404` pageType yok. Görünür gövde varsa burada; `page-content-main` zorlanmadı.

---

ADAY: novoslabs-404-template  
Gerekçe: `body.error404`. H1 “Page not found”. “The page you are looking for does not exist. It may have moved, or it never aged well in the first place.” + Back to the homepage. Main ~458px.  
Örnekler: https://novoslabs.com/this-page-does-not-exist-qante · https://novoslabs.com/blog/ · https://novoslabs.com/search/ · https://novoslabs.com/collections/all · https://novoslabs.com/product-category/  
Öneri: ertele — 404 pageType yok  
Karar: onay bekliyor

---

ADAY: novoslabs-search-page  
Gerekçe: `/search/` 404. `/?s=core` home’a düşer (Jetpack overlay). `search-results` şeması bağlanmadı.  
Örnekler: https://novoslabs.com/search/ · https://novoslabs.com/?s=core  
Öneri: leftover — overlay observation yeterli  
Karar: onay bekliyor

---

ADAY: novoslabs-blog-index  
Gerekçe: `/blog/` custom 404. Kategori arşivi çalışır (`/blog/longevity/`).  
Örnekler: https://novoslabs.com/blog/  
Öneri: leftover  
Karar: onay bekliyor
