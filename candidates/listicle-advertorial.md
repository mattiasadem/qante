# Listicle-advertorial — şema adayları / boşluklar

*Taksonomi pageType:* `listicle-advertorial` (v0.1.0)  
*Tarih:* 2026-08-21 · combine PR (#297–#318 draft pile)

Şema icat edilmedi. Mevcut tiplere observation + `delta` yazıldıysa burada tekrarlanmaz.

---

## Caraway · best-kitchen-gifts

ADAY: listicle-numbered-best-of  
Gerekçe: Caraway `/blog/best-kitchen-gifts` — numaralı 1–11 luxury best-of maddeleri kendi marka SKU'larına inline prose linklerle blog gövdesinde (`blog-post-main.icerik`). Ayrı `product-showcase-featured` / grid section yok; her madde H3 + paragraf + ürün adı linki.  
Örnekler: https://www.carawayhome.com/blog/best-kitchen-gifts  
Öneri: `blog-post-main` reuse + delta; veya gelecekte `editorial-listicle-ranked` varyantı (numara slot + ref product min/max)  
Karar: onay bekliyor — bu turda yeni schemaId açılmadı

---

ADAY: inline-empty-cart-sidebar  
Gerekçe: Sayfa yüklenince `main > div` (600px genişlik) sağda boş sepet + ürün öneri kartları (Cookware Set, Food Storage, Bundles). 1440'ta viewport dışında (x=1440); mobilde overlay. `global-cart-drawer` partial fit — her zaman açık sidebar, raffle promo üstünde.  
Örnekler: https://www.carawayhome.com/blog/best-kitchen-gifts  
Öneri: interact pass veya ayrı obs `global-cart-drawer` + `captureMode: viewport` + prepareClick cart icon  
Karar: onay bekliyor — bu turda 3VP capture edilmedi

---

ADAY: caraway-custom-react-platform  
Gerekçe: Caraway headless/custom React; `#shopify-section-*` yok. Selector'lar `#global-promo-bar`, `#main-nav`, `section:has(h1)`, `footer`.  
Örnekler: https://www.carawayhome.com/blog/best-kitchen-gifts  
Öneri: `kaynak` map'te platform notu; selector stabilitesi için data-testid PR (merchant)  
Karar: onay bekliyor

---

## Seed Cultured · gi-tips

**Kaynak:** Seed (seed.com) · Cultured WordPress · `listicle-gi-tips` · 2026-08-21

| Blok | DOM / davranış | Öneri |
|---|---|---|
| Share toolbar | Intro içi Facebook/Twitter/LinkedIn/email/PDF | `navigation` feature veya `promo` aday — global chrome değil, makale içi |
| Expert review strip | "Expert Review By" + reviewer link | `trust` veya editorial meta — blog-post-main `delta` |
| Seed Digest callout | H2 + bullet list (4 D özeti) | Tekrarlayan `editorial-rich-text` varyantı; ayrı wrapper yok |
| Numaralı ipucu atomu | H2 (1–4) + gövde + "The Seed Difference" H3 + EXPLORE FURTHER link | Listicle item şeması adayı — şu an blog-post-main richtext içinde |
| Summary highlight box | `.block-hightlight-box` ×4 | Tek şema reuse; dördüncü instance observation değil |
| Citations accordion | `.blog-detail-content__citations-container` + genişletilmiş liste | `editorial` veya `faq` aday |
| Filed-under tags | `.cultured-section--tags` | `collection-nav` veya editorial meta aday |
| Author / reviewer bio | `.cultured-section--bio` (Written By + Reviewed By) | `editorial-timeline` / trust bio aday |
| Next article card | `.cultured-section--next` | `blog-list-main` kart reuse aday |
| Related articles grid | `.cultured-section--related` + `.theme-posts-grid--3` | `blog-list-main` veya `product-showcase-grid-featured` benzeri — **ürün grid değil**, makale grid |
| Inline shop CTAs | `daily-synbiotic` metin linkleri gövde içinde | Ayrı `cta-band` yok; advertorial beklentisi inline link |

Platform: Non-Shopify Cultured (WordPress) · Cloudflare bot koruması · headless capture başarısız → `QANTE_HEADED=1` ile resmi script

---

## Ridge · 5-last-minute-gifts

ADAY: listicle-shop-the-list  
Gerekçe: Numaralı H2 blokları (1–5) her biri ürün anlatımı + "Shop …" CTA linki. `blog-post-main` `icerik` slotuna sığdırılabilir ama tekrarlayan item yapısı (başlık, fiyat, bullet, shop link) ayrı section ailesi adayı.  
Örnekler: https://ridge.com/a/blog/5-last-minute-gifts-to-get-from-ridge-this-holiday-season  
Öneri: Yeni `instance` şema — `items[]` (baslik, metin, cta, link ref) + `styleKnobs` layout  
Karar: onay bekliyor

---

ADAY: listicle-table-of-contents  
Gerekçe: "Table of Contents" anchor listesi article gövdesinde; blog-post içi leftover değil — ayrı navigasyon bloğu.  
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

## Into The Gloss · holiday-gift-guide-2025

ADAY: editorial-listicle-category-block  
Gerekçe: Named-category editorial gift guide grameri — kategori başlığı (h2) + ürün carousel (slick Previous/Next) + uzun editoryal prose tek DOM bloğunda (`RichBlocks_block`). Mevcut `editorial-custom-content` bloklar[] dizisi ile birebir oturmuyor.  
Örnekler: https://intothegloss.com/2025/11/holiday-gift-guide-2025 — THE WEARABLES · THE INNOVATIONS · PURE COMFORT · THE HOME STUFF · THE SMALL WONDERS · THE SCENTS  
Öneri: Yeni `editorial` varyant veya `listicle-advertorial` alt-şema  
Karar: onay bekliyor · geçici eşleme `editorial-custom-content`

---

ADAY: post-hero-listicle-intro  
Gerekçe: ITG PostHero üç kolon: başlık + intro paragraf + byline/foto kredisi. `blog-post-main` başlık+meta+icerik bekler; burada intro listicle hero'su, gövde ayrı RichBlocks.  
Örnekler: https://intothegloss.com/2025/11/holiday-gift-guide-2025 — `.PostHero_wrap`  
Karar: onay bekliyor · geçici eşleme `blog-post-main`

---

## HexClad · fathers-day-gift-ideas

ADAY: listicle-item-block  
Gerekçe: HexClad Posts listicle tek `mod_article_new` Shopify section içinde H2 **"{Product}: For the Dad Who {persona}"** + copy + opsiyonel inline `<img>` + metin içi `/products/` linkleri. Ayrı section yok; `editorial-image-with-text` yan-yana layout değil.  
Örnekler: https://hexclad.com/blogs/posts/fathers-day-gift-ideas-for-home-cooks  
Öneri: ertele — `editorial-image-with-text` + `editorial-rich-text` delta ile temsil  
Karar: onay bekliyor

---

ADAY: listicle-toc-anchor-list  
Gerekçe: "Table of Contents" H2 + düz `<ul>`; anchor/hash link yok, sticky TOC yok. `editorial-rich-text` UL kırpımı alındı.  
Örnekler: https://hexclad.com/blogs/posts/fathers-day-gift-ideas-for-home-cooks  
Öneri: `editorial-rich-text` reuse  
Karar: onay bekliyor

---

ADAY: listicle-inline-product-card  
Gerekçe: Sayfada `product-showcase-featured` buy box / fiyat / ATC kartı yok — yalnızca richtext içi ürün hyperlinkleri.  
Örnekler: https://hexclad.com/blogs/posts/fathers-day-gift-ideas-for-home-cooks  
Öneri: ertele — ayrı `product-showcase-featured` observation yok  
Karar: onay bekliyor

---

ADAY: listicle-static-faq  
Gerekçe: "FAQs" H2 + H3 soru + P cevap; accordion/sekme/`emit:accordion.toggle` yok. `faq-collapsible-tabs` delta ile statik Q&A.  
Örnekler: https://hexclad.com/blogs/posts/fathers-day-gift-ideas-for-home-cooks  
Öneri: `faq-collapsible-tabs` reuse + delta  
Karar: onay bekliyor

---

## Away · best-travel-gifts

*URL:* https://www.awaytravel.com/blogs/the-away-pages/best-travel-gifts  
*Observations:* `observations/away/default/listicle-best-travel-gifts/` · 3 obs · 9 PNG

| Görülen blok | schemaId | Karar |
|---|---|---|
| Article shell (title, meta, kapak, breadcrumbs) | `blog-post-main` | reuse · `.blog-article` |
| Persona h2 segmentleri (4× + intro/outro) | `blog-post-main` · `icerik` items | reuse · tek `.blog-article__content`; ayrı DOM kabı yok |
| Inline `/products/` linkleri | — | leftover · `product-showcase-featured` kart yok |
| You may also like | `blog-list-main` | reuse · `.related-articles` |
| Share footer (Facebook/Twitter/Pinterest) | — | leftover · şema yok |

---

## OLIPOP · digest flavors (PR #300)

*URL:* `/blogs/digest/get-to-know-the-olipop-flavors` — named flavor roster (19 H3), not numbered gift guide.  
Geçici eşleme: `editorial-image-with-text` hero · `blog-post-main` roster · `product-showcase-grid-featured` embed · `blog-list-main` related · `lead-capture-newsletter-band` subscribe.  
Cheat-sheet sticky sidebar → leftover (feature, not section).

---

## Casper · casper-gifts (PR #310)

*URL:* `/blogs/article/casper-gifts` · 7 obs · 21 PNG  
`blog-post-main` hero · `editorial-rich-text` intro+TOC · `editorial-image-with-text` ×3 numbered items · `editorial-rich-text-2` closing · `blog-list-main` related.  
Leftover: `std-toc-container` anchor TOC, numbered item DOM wrapper, no buy boxes.

---

## Bilinçli atlananlar (cross-theme)

- Alt "Read more" carousel — `blog-list-main` reuse mümkün; listicle gövdesi turu yeterli
- Newsletter footer band — PII yok
- Global header / footer — listicle-only turda storefront chrome atlanabilir
- Diğer temalar (Boka, Comrad, IM8) — henüz claiming yok; bkz. ilgili `candidates/*-leftovers.md`
