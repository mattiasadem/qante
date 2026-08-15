# Todo — Grüns (gruns.co)

*Kaynak:* https://gruns.co · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **Live Theme (May 18 2026)** · `schema_name`: **Gruns** · `schema_version`: **1.0.0** · `theme_store_id`: null (custom) · shop `grunsnutrition.myshopify.com`

**Durum:** Mod A walk yazıldı — 64 obs · 3vp henüz yok · leftover taslak  
**PR:** (draft, capture öncesi)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/gruns/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta; uymayan `candidates/gruns-leftovers.md` |
| PNG | 0 (capture bekliyor) |
| Observation | **64** · evidence boş |
| Parallel | yalnız `observations/gruns/`, `evidence/gruns/`, `todo/gruns.md`, `candidates/gruns-*.md` |

**Kapsam satırı:**  
`Grüns · default · Live Theme (May 18 2026) / schema_name Gruns 1.0.0 · custom Shopify · home→PDP→PLP→search→cart→content→footer→mobile · 64 obs · 0 yeni şema · 3vp bekliyor · leftover aşağıda`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/announcement | JSON yazıldı | [ ] |
| Mega / search overlay / cart drawer / mobile menu | hamburger her vp · predictive yok · cart drawer DOM yok | [ ] |
| PDP `/products/gruns` | JSON yazıldı | [ ] |
| PDP `/products/gruns-kids` | JSON yazıldı (buybox + press + icons) | [ ] |
| PLP `/collections/all` | JSON yazıldı · filtre/sort yok | [ ] |
| Merch `/collections/merch` | JSON yazıldı · ayrı header leftover | [ ] |
| Search `/search?q=gruns` | ⛔ `main-search.liquid` yok — leftover, claiming yok | — |
| Cart `/cart` | JSON yazıldı · empty + ATC interact planlı | [ ] |
| About `/pages/how-gruns-works` | JSON yazıldı · `/pages/about-us` 404 | [ ] |
| Our Story / Science | JSON yazıldı | [ ] |
| FAQ `/pages/help-center` | JSON yazıldı · `/pages/faq` redirect | [ ] |
| Contact `/pages/contact` | Hark iframe · form **gönderilmedi** | [ ] |
| Reviews / store-locator | Junip + StoreLocators | [ ] |
| Policy privacy (native) | JSON yazıldı · `/pages/privacy-policy` 404 | [ ] |
| Blog `/blogs/news` + 1 yazı (supergreens) | JSON yazıldı | [ ] |
| Ü Snacks / exclusives / referrals | JSON yazıldı | [ ] |
| 404 `/pages/this-page-does-not-exist-qante` | JSON yazıldı · pageType yok | [ ] |
| Campaign `/pages/first-order-minions` | JSON yazıldı · kardeş LP leftover | [ ] |
| Mobile 375 menu | hamburger 375/768/1440 | [ ] |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] + hamburger interact | [x] | reuse | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] tek slayt | reuse | [ ] |
| 4 | social-proof-brand-logos | home | [ ] | [x] press marquee | reuse | [ ] |
| 5 | product-showcase-grid-featured | home | [ ] | [x] Find Your Flavor | reuse | [ ] |
| 6 | features-multicolumn | home | [ ] | [x] value props | reuse | [ ] |
| 7 | features-multicolumn-2 | home | [ ] | [x] 60+ stats | reuse | [ ] |
| 8 | trust-icon-row | home | [ ] | [x] 3rd party tested | reuse | [ ] |
| 9 | product-info-main | home | [ ] | [x] home buybox | reuse | [ ] |
| 10 | editorial-image-with-text | home | [ ] | [x] birthday CTA | reuse | [ ] |
| 11 | media-shop-the-feed | home | [ ] | [x] UGC wall | reuse | [ ] |
| 12 | editorial-image-with-text-2 | home | [ ] | [x] final CTA | reuse | [ ] |
| 13 | footer-columns-newsletter | home | [ ] | [x] SMS+email PII yok | reuse | [ ] |
| 14 | global-menu-drawer | home | [ ] viewport + prepareClick | [x] 1440 hamburger | reuse | [ ] |
| 15 | global-predictive-search | — | [ ] | yok | leftover | [x] |
| 16 | global-cart-drawer | — | [ ] | Keepcart CSS, DOM yok | leftover | [x] |
| 17 | product-info-main | product-detail | [ ] + flavor interact | [x] | reuse | [ ] |
| 18 | promo-grid-banner | product-detail | [ ] | [x] minions CTA | reuse | [ ] |
| 19 | editorial / comparison / UGC / FAQ / Junip | product-detail | [ ] | [x] | reuse | [ ] |
| 20 | product-info-main-2 + press + icons | kids PDP | [ ] | [x] | reuse | [ ] |
| 21 | product-showcase-grid-plp | collection | [ ] | [x] | reuse | [ ] |
| 22 | merch hero + grid | merch | [ ] | [x] | reuse | [ ] |
| 23 | search-results | search | [ ] | kırık liquid | leftover | [x] |
| 24 | cart-page-main | cart | [ ] + filled interact | [x] | reuse | [ ] |
| 25 | about / story / science / help / contact / reviews / locator / policy | mixed | [ ] | [x] | reuse | [ ] |
| 26 | blog-list + blog-post | blog-* | [ ] | [x] | reuse | [ ] |
| 27 | usnacks / exclusives / referrals / campaign | landings | [ ] | [x] | reuse | [ ] |
| 28 | page-content-main | not-found | [ ] | [x] leftover pageType | reuse | [ ] |

---

## Interact (kareye bakılacak)

| Bileşen | State | Plan |
|---|---|---|
| navigation-header-mega | initial, open | hamburger 375/768/1440 → `#HeaderMenuDrawer-header_v2` |
| global-menu-drawer | open | prepareClick + viewport |
| product-info-main (PDP) | initial, changed | Bello Banana Berry flavor `#` |
| testimonial-quote-carousel (PDP) | initial, changed | Vs Powders tab |
| faq-collapsible-tabs (PDP) | initial, changed | `#trigger-…-4` shipping |
| cart-page-main | initial, filled | empty `/cart` → Start Now ATC → `/cart` · checkout yok |

---

## Aday / leftover

[`candidates/gruns-leftovers.md`](../candidates/gruns-leftovers.md)

- Search `main-search.liquid` yok
- Predictive search yok
- Keepcart CSS preload, drawer DOM yok; home cart ikon URL değiştirmiyor
- Junip / Hark / StoreLocators / SocialSnowball / Siena / Light Labs / Vimeo
- Kampanya LP ailesi
- Merch ayrı header
- 0px sticky CTA / usnacks_anchor
- Account / checkout / form submit (PII)
- 404 pageType taksonomide yok
- `/pages/about-us` · `/pages/privacy-policy` 404

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Overlay / menu / flavor / tab / FAQ / cart interact
- [ ] Newsletter / contact / referral / locator zip — **yapılmayacak** (PII)
- [ ] PNG bak → stateFindings
