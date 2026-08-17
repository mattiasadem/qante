# Todo — Publisher (Shopify first-party, free)

*Kaynak:* https://theme-publisher-demo.myshopify.com  
*Preset:* `default` · Theme Store: https://themes.shopify.com/themes/publisher  
*Gözlenen tema:* `[Publisher] Theme Store demo (latest)` · `schema_name` Dawn 7.0.1 · `theme.id` 173430341941 · `role` main  
*`Shopify.theme.theme_store_id`:* `null` (canlı JS). Theme Store sayfası: **Publisher · by Shopify · Free**. 1380 sayısal id bu demoda / Theme Store HTML’de okunmadı.

**Şu anki odak:** Mod A walk — observations yazıldı; 3vp capture + interact sırada

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/publisher/default/` |
| Walkthrough / not | Official Publisher demo · blog + commerce |
| Kapsam satırı (bitince) | Publisher · default · 11 sayfa · 33 obs · 0 yeni şema · leftovers 404/announcement |

---

## Faz durumu

- [x] F0 Tema kimliği + sitemap + section haritası
- [x] F1 Observation JSON (33) — şema yok, mevcut tipler
- [ ] F2 3vp `capture-observation.mjs`
- [ ] F3 Interact: predictive search · cart empty/filled/qty · PDP size · mega/menu yok
- [ ] F4 `npm run validate`

---

## Sayfa haritası

| sayfa | URL |
|---|---|
| home | `/` |
| collection | `/collections/books` |
| product-detail | `/products/shop-short-sleeve` |
| search | `/search?q=book` |
| cart | `/cart` |
| cart-drawer | overlay (`cart-drawer`) |
| about-brand | `/pages/about` |
| contact | `/pages/contact` |
| policy | `/pages/shipping-and-returns` |
| blog-list | `/blogs/news` |
| blog-post | `/blogs/news/fresh-launch-new-merch-collection` |
| 404 leftover | `/pages/this-does-not-exist-xyz` → HTTP 404 “Page not found” |

Koleksiyonlar: books · apparel · merch · accessories · all  
Sayfalar: about · contact · shipping-and-returns

---

## Home remap (kanıt)

- rich-text intro → `editorial-rich-text`
- collage Books / Apparel → `editorial-custom-content` (+ `-2`)
- 🌀 NEWEST ARRIVALS → `editorial-rich-text-2` (marquee değil)
- featured_collection slider → `product-showcase-grid-featured`
- featured-product Gift Card → `product-showcase-featured`
- FREE SHIPPING bant → `editorial-rich-text-3`
- image-banner iki yarım görsel + studio CTA → `editorial-image-with-text-overlay`
- header logo+search+cart, mega/hamburger yok → `navigation-header-mega` + delta
- footer = birincil nav + newsletter → `footer-columns-newsletter`

Tekrarlayan şablon blokları (shipping bant + studio banner) home’da çekildi; collection/PDP/about/blog kopyaları ayrı observation değil.

---

## Interact

- [ ] `global-predictive-search` — search ikon → `book` (katalog)
- [ ] `global-cart-drawer` — boş / Shop Short Sleeve / adet+
- [ ] `cart-page-main` — boş + dolu
- [ ] `product-info-main` — Size SM → MD
- [x] mega — **yok** (CSS yüklenir, panel/nav yok)
- [x] mobile menu — **yok** (375/768 hamburger yok; nav footer)

Stop: email / account / checkout / newsletter submit / contact Send / PII

---

## Aday / şemaya sığmayan

- [`candidates/publisher-leftovers.md`](../candidates/publisher-leftovers.md) — 404, boş announcement-bar, theme_store_id null

---

## Evidence backlog

- [ ] 33 observation × 3vp
- [ ] Interact PNG’leri (search / cart / PDP)
