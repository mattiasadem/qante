# ADAY: listicle-advertorial — Seed Cultured gaps

**Durum:** bekliyor · **Kaynak:** Seed (seed.com) · Cultured WordPress · `listicle-gi-tips` · 2026-08-21

## Gerekçe

`listicle-advertorial` sayfa tipi taksonomide var; mevcut şemalar (`blog-post-main`, `editorial-rich-text`, `editorial-image-with-text`) gövde + intro + summary kutusu için reuse edildi. Aşağıdaki bloklar ayrı section şeması gerektiriyor veya tekrarlayan listicle atomları mevcut slot setine sığmıyor.

## Şemaya sığmayan / aday bloklar

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

## Platform notu

- Non-Shopify Cultured (WordPress) · Cloudflare bot koruması · headless capture başarısız → `QANTE_HEADED=1` ile resmi script
- Ürün grid yok (beklentiyle uyumlu); shop yalnız inline link

## Karar

- [ ] Onayla → yeni listicle atom / citations / related şemaları
- [ ] Reddet — mevcut 3 şema yeterli
- [ ] Ertele
