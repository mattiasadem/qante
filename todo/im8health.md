# Todo — IM8 Health (im8health.com)

*Kaynak:* https://im8health.com · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **shopify-im8-ui/develop** · `schema_name`: **Dawn** · `schema_version`: **15.0.2** · `theme_store_id`: null (custom, Dawn tabanı) · shop `im8store.myshopify.com`

**Durum:** Mod A walk başladı — observation + resmi 3vp sırada  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/im8health/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** (hedef) — mevcut tiplere observation + delta; uymayan `candidates/im8health-*.md` |
| Parallel | yalnız `observations/im8health/`, `evidence/im8health/`, `todo/im8health.md`, `candidates/im8health-*.md` |

**Kapsam satırı (hedef):**  
`IM8 Health · default · shopify-im8-ui/develop / Dawn 15.0.2 · custom Shopify · home→PDP→PLP→search→cart→content→footer→mobile`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/announcement | ⬜ | [ ] |
| Mega / search overlay / cart drawer / mobile menu | ⬜ interact | [ ] |
| PDP `/products/the-beckham-stack-pro` | ⬜ | [ ] |
| PDP `/products/essentials-pro` (ikinci) | ⬜ | [ ] |
| PLP `/collections/all` + merchandise | ⬜ | [ ] |
| Search `/search?q=essentials` | ⬜ | [ ] |
| Cart `/cart` | ⬜ (200 görüldü) | [ ] |
| About `/pages/about-us` | ⬜ | [ ] |
| FAQ `/pages/frequently-asked-questions` | ⬜ | [ ] |
| Contact `/pages/contact-us` | ⬜ | [ ] |
| Science / ingredients / quality / welcome | ⬜ | [ ] |
| Policy privacy | ⬜ | [ ] |
| Blog `/blogs/news` + 1 yazı | ⬜ | [ ] |
| 404 `/pages/this-page-does-not-exist-qante` | ⬜ aday | [ ] |
| Quiz / wall-of-health / kampanya LP | ⬜ leftover | [ ] |
| Mobile 375 menu | ⬜ | [ ] |

---

## Bileşen roster (home — ilk tarama)

| # | id (aday) | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar (timer) | home | [ ] | [ ] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [ ] | reuse | [ ] |
| 3 | hero-slideshow / media-video-hero | home | [ ] | [ ] | reuse | [ ] |
| 4 | social-proof / testimonial (athletes) | home | [ ] | [ ] | reuse | [ ] |
| 5 | product-showcase-grid-featured (pt slider) | home | [ ] | [ ] | reuse | [ ] |
| 6 | social-proof-brand-logos (press) | home | [ ] | [ ] | reuse | [ ] |
| 7 | editorial / promo (welcome kit) | home | [ ] | [ ] | reuse | [ ] |
| 8 | testimonial / Trustpilot iframe | home | [ ] | [ ] | leftover? | [ ] |
| 9 | features / trust (statistics + NSF) | home | [ ] | [ ] | reuse | [ ] |
| 10 | editorial (science advisory) | home | [ ] | [ ] | reuse | [ ] |
| 11 | editorial-image-with-text (Beckham note) | home | [ ] | [ ] | reuse | [ ] |
| 12 | trust (90-day guarantee) | home | [ ] | [ ] | reuse | [ ] |
| 13 | footer-columns-newsletter | home | [ ] | [ ] | reuse | [ ] |
| 14 | global-cart-drawer | home | [ ] | [ ] | reuse | [ ] |
| 15 | global-predictive-search | home | [ ] | [ ] | reuse | [ ] |
| 16 | global-menu-drawer | home | [ ] | [ ] | reuse | [ ] |

---

## Aday / leftover

[`candidates/im8health-leftovers.md`](../candidates/im8health-leftovers.md) — yazılacak

- Trustpilot / FrontrowMD iframe (reviews + clinicians)
- shop-now-bar (1440 height 0)
- Çok sayıda listicle / athlete / quiz LP (sitemap)
- `/pages/about` `/pages/faq` `/pages/contact` 404
- PII: login, newsletter submit, contact form submit — dur

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Overlay / mega / cart / search / FAQ interact (yalnız piksel değişince)
- [ ] Newsletter / contact submit — **yapılmayacak** (PII)
