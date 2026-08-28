# Listicle-advertorial — aday & gap notları

*Sayfa tipi:* `listicle-advertorial` (taxonomy v0.1.0)  
*İlk kanıt:* Into The Gloss · Holiday Gift Guide 2025

---

## ADAY: editorial-listicle-category-block

Gerekçe: Named-category editorial gift guide grameri — kategori başlığı (h2) + ürün carousel (slick Previous/Next) + uzun editoryal prose tek DOM bloğunda (`RichBlocks_block`). Mevcut `editorial-custom-content` bloklar[] dizisi ile birebir oturmuyor; `product-showcase-*` vitrin şemaları prose slot'u taşımıyor; `media-lookbook-slider` hotspot/lookbook semantiği taşıyor, gift-guide değil.

Örnekler:
- https://intothegloss.com/2025/11/holiday-gift-guide-2025 — THE WEARABLES · THE INNOVATIONS · PURE COMFORT · THE HOME STUFF · THE SMALL WONDERS · THE SCENTS

Öneri: Yeni `editorial` varyant veya `listicle-advertorial` alt-şema — slots: `kategoriBaslik` (text) · `urunler` (ref[] veya DataSource.productList manual) · `metin` (richtext) · opsiyonel `ustEtiket`. styleKnobs: `layout: slider|grid` · `okGoster` · `noktaGoster` · `hizalama`.

Karar: onay bekliyor

Geçici eşleme: `editorial-custom-content` (delta ile) — `observations/intothegloss/default/listicle-holiday-2025/editorial-custom-content*.json`

---

## ADAY: post-hero-listicle-intro

Gerekçe: ITG PostHero üç kolon: başlık + intro paragraf + byline/foto kredisi. `blog-post-main` başlık+meta+icerik bekler; burada intro listicle hero'su, gövde ayrı RichBlocks.

Örnekler:
- https://intothegloss.com/2025/11/holiday-gift-guide-2025 — `.PostHero_wrap`

Öneri: `blog-post-main` delta yeterli mi yoksa `hero`/`editorial` varyant mı — taksonomi onayına bırak.

Karar: onay bekliyor · geçici eşleme `blog-post-main`

---

## Leftover (3vp yok)

| Parça | Sebep |
|---|---|
| Glossier promo şeridi (header üstü) | `navigation-header-mega` karesinde; ayrı `promo-announcement-bar` observation açılmadı |
| `page_richTagWrap` — "More: HOLIDAY" | Alt etiket bandı; tek satır, ayrı section sınırı belirsiz |
| OneTrust cookie banner | PII / overlay — dismiss sonrası kanıt alınmadı |
| Ürün kartı hover / slick slide değişimi | Statik 3vp envanter; interact backlog |

---

## intothegloss · listicle-holiday-2025 envanter özeti

| schemaId | # | Not |
|---|---|---|
| navigation-header-mega | 1 | Editorial nav + Glossier CTA, mega yok |
| blog-post-main | 1 | PostHero listicle intro |
| editorial-custom-content | 6 | Named-category blocks (gap yukarıda) |
| footer-columns-newsletter | 1 | Newsletter yok, link bandı |
| **Toplam** | **9 obs · 27 PNG** | Yeni schemaId yok |
