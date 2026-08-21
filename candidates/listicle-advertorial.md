# Listicle-advertorial — şema adayları / boşluklar

*Taksonomi pageType:* `listicle-advertorial` (v0.1.0)  
*Tarih:* 2026-08-21

Şema icat edilmedi. Mevcut tiplere observation + `delta` yazıldıysa burada tekrarlanmaz.

---

ADAY: listicle-item-block  
Gerekçe: HexClad Posts listicle (`/blogs/posts/fathers-day-gift-ideas-for-home-cooks`) tek `mod_article_new` Shopify section içinde H2 **“{Product}: For the Dad Who {persona}”** + copy + opsiyonel inline `<img>` + metin içi `/products/` linkleri. Ayrı section yok; `editorial-image-with-text` yan-yana layout değil.  
Örnekler: https://hexclad.com/blogs/posts/fathers-day-gift-ideas-for-home-cooks  
Öneri: ertele — `editorial-image-with-text` + `editorial-rich-text` delta ile temsil  
Karar: onay bekliyor

---

ADAY: listicle-toc-anchor-list  
Gerekçe: “Table of Contents” H2 + düz `<ul>`; anchor/hash link yok, sticky TOC yok. `editorial-rich-text` UL kırpımı alındı.  
Örnekler: https://hexclad.com/blogs/posts/fathers-day-gift-ideas-for-home-cooks  
Öneri: `editorial-rich-text` reuse  
Karar: onay bekliyor

---

ADAY: listicle-inline-product-card  
Gerekçe: Sayfada `product-showcase-featured` buy box / fiyat / ATC kartı yok — yalnızca richtext içi ürün hyperlinkleri. Taksonomide listicle “product cards” grameri bu sitede kart UI değil.  
Örnekler: https://hexclad.com/blogs/posts/fathers-day-gift-ideas-for-home-cooks  
Öneri: ertele — ayrı `product-showcase-featured` observation yok  
Karar: onay bekliyor

---

ADAY: listicle-static-faq  
Gerekçe: “FAQs” H2 + H3 soru + P cevap; accordion/sekme/`emit:accordion.toggle` yok. `faq-collapsible-tabs` delta ile statik Q&A.  
Örnekler: https://hexclad.com/blogs/posts/fathers-day-gift-ideas-for-home-cooks  
Öneri: `faq-collapsible-tabs` reuse + delta  
Karar: onay bekliyor

---

## Bilinçli atlananlar

- Alt “Read more” carousel `#shopify-section-template--19294934892678__14295a1e-*` — `blog-list-main` reuse mümkün; bu tur yalnız listicle gövdesi
- Newsletter footer band — PII yok
- 5 listicle maddenin 3’ünde inline görsel yok (Knife Set, BBQ, Apron metin-only kısımları `editorial-image-with-text-2` dışında ayrı obs yok)
