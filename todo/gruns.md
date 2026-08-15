# Todo — Grüns (gruns.co)

*Kaynak:* https://gruns.co · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **Live Theme (May 18 2026)** · `schema_name`: **Gruns** · `schema_version`: **1.0.0** · `theme_store_id`: null (custom) · shop `grunsnutrition.myshopify.com`

**Durum:** Mod A walk kapandı — 64 obs · resmi 3vp · interact piksel değişenlerde · leftover kayıtlı  
**PR:** https://github.com/mattiasadem/qante/pull/65 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/gruns/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta; uymayan `candidates/gruns-leftovers.md` |
| PNG | **225** (192 statik 3vp + 33 interact) |
| Observation | **64** · 64 tam 3vp · 0 zero-size |
| Parallel | yalnız `observations/gruns/`, `evidence/gruns/`, `todo/gruns.md`, `candidates/gruns-*.md` |

**Kapsam satırı:**  
`Grüns · default · Live Theme (May 18 2026) / schema_name Gruns 1.0.0 · custom Shopify · home→PDP→PLP→search→cart→content→footer→mobile · 64 obs · 0 yeni şema · 225 PNG · leftover aşağıda`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/announcement | ✅ | [x] |
| Mega / search overlay / cart drawer / mobile menu | hamburger 375/768/1440 · predictive yok · cart drawer DOM yok | [x] menu 3vp |
| PDP `/products/gruns` | ✅ + flavor / tabs / FAQ interact | [x] |
| PDP `/products/gruns-kids` | ✅ buybox + press + icons | [x] |
| PLP `/collections/all` | ✅ filtre/sort yok | [x] |
| Merch `/collections/merch` | ✅ ayrı chrome | [x] |
| Search `/search?q=gruns` | ⛔ `main-search.liquid` yok — leftover, claiming yok | — |
| Cart `/cart` | ✅ empty + ATC filled · checkout yok | [x] |
| About `/pages/how-gruns-works` | ✅ · `/pages/about-us` 404 | [x] |
| Our Story / Science | ✅ science extra leftover | [x] |
| FAQ `/pages/help-center` | ✅ custom_liquid index · `/pages/faq` redirect | [x] |
| Contact `/pages/contact` | Hark iframe · form **gönderilmedi** | [x] |
| Reviews / store-locator | Junip + StoreLocators | [x] |
| Policy privacy (native) | ✅ tall element · `/pages/privacy-policy` 404 | [x] |
| Blog `/blogs/news` + 1 yazı (supergreens) | ✅ | [x] |
| Ü Snacks / exclusives / referrals | ✅ | [x] |
| 404 `/pages/this-page-does-not-exist-qante` | ✅ pageType yok | [x] |
| Campaign `/pages/first-order-minions` | ✅ kardeş LP leftover | [x] |
| Mobile 375 menu | ✅ hamburger 375/768/1440 | [x] |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] birthday ticker | reuse | [x] |
| 2 | navigation-header-mega | home | [x] + hamburger 3vp | [x] mega yok | reuse | [x] |
| 3 | hero-slideshow | home | [x] | [x] tek slayt | reuse | [x] |
| 4 | social-proof-brand-logos | home | [x] | [x] press marquee | reuse | [x] |
| 5 | product-showcase-grid-featured | home | [x] | [x] Find Your Flavor | reuse | [x] |
| 6 | features-multicolumn | home | [x] | [x] value props | reuse | [x] |
| 7 | features-multicolumn-2 | home | [x] | [x] 60+ stats | reuse | [x] |
| 8 | trust-icon-row | home | [x] | [x] 3rd party tested | reuse | [x] |
| 9 | product-info-main | home | [x] | [x] home buybox | reuse | [x] |
| 10 | editorial-image-with-text | home | [x] | [x] birthday CTA | reuse | [x] |
| 11 | media-shop-the-feed | home | [x] | [x] UGC wall | reuse | [x] |
| 12 | editorial-image-with-text-2 | home | [x] | [x] final CTA | reuse | [x] |
| 13 | footer-columns-newsletter | home | [x] | [x] SMS+email PII yok | reuse | [x] |
| 14 | global-menu-drawer | home | [x] viewport + prepareClick | [x] 1440 hamburger | reuse | [x] |
| 15 | global-predictive-search | — | [ ] | yok | leftover | [x] |
| 16 | global-cart-drawer | — | [ ] | Keepcart CSS, DOM yok | leftover | [x] |
| 17 | product-info-main | product-detail | [x] + flavor | [x] Original→Bello | reuse | [x] |
| 18 | promo-grid-banner | product-detail | [x] | [x] minions CTA | reuse | [x] |
| 19 | editorial / comparison / UGC / FAQ / Junip | product-detail | [x] | [x] | reuse | [x] |
| 20 | product-info-main-2 + press + icons | kids PDP | [x] | [x] | reuse | [x] |
| 21 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [x] |
| 22 | merch hero + grid | merch | [x] | [x] Ü Snacks Shack | reuse | [x] |
| 23 | search-results | search | [ ] | kırık liquid | leftover | [x] |
| 24 | cart-page-main | cart | [x] empty + filled | [x] | reuse | [x] |
| 25 | about / story / science / help / contact / reviews / locator / policy | mixed | [x] | [x] | reuse | [x] |
| 26 | blog-list + blog-post | blog-* | [x] | [x] | reuse | [x] |
| 27 | usnacks / exclusives / referrals / campaign | landings | [x] | [x] | reuse | [x] |
| 28 | page-content-main | not-found | [x] | [x] leftover pageType | reuse | [x] |

---

## Interact (kareye bakıldı)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | initial, open | 375/768/1440 hamburger. Drawer: SHOP ALL + 4 SKU + Bello promo + Manage Your Account + Science / Store / Ü Snacks. Mega hover yok. |
| global-menu-drawer | open (prepareClick) | 3vp viewport. 1440 N/A değil. |
| product-info-main (PDP) | initial, changed | Original yeşil $66.65 → Bello mavi Minions $70.38. Piksel değişti. |
| testimonial-quote-carousel (PDP) | initial, changed | Taste (Dustin/Kate/Kevin) → Vs Powders (Samuel/Bradley/Jaxon). |
| faq-collapsible-tabs (PDP) | initial, changed | Başlangıç 7 soru kapalı. Q4 shipping açık: 24h / 3-5 gün. |
| cart-page-main | initial, filled | Empty → ATC Start Now → Grüns Low Sugar 28 Packs / 4 weeks · $49.99 / subtotal $29.99. Checkout girilmedi. |

---

## Aday / leftover

[`candidates/gruns-leftovers.md`](../candidates/gruns-leftovers.md)

- Search `main-search.liquid` yok
- Predictive search yok
- Keepcart CSS preload, drawer DOM yok
- Junip / Hark / StoreLocators / SocialSnowball / Siena / Light Labs / Vimeo
- Kampanya LP ailesi
- Merch + Ü Snacks ayrı chrome
- Sticky CTA scroll'da görünür (statik 0px leftover)
- Science charts/cards + exclusives extra
- Account / checkout / form submit (PII)
- 404 pageType taksonomide yok
- `/pages/about-us` · `/pages/privacy-policy` 404

---

## Evidence backlog

- [x] Claiming obs resmi 3vp (64/64, 0 zero-size)
- [x] Overlay / menu / flavor / tab / FAQ / cart interact
- [x] Newsletter / contact / referral / locator zip — **yapılmayacak** (PII)
- [x] PNG bak → stateFindings yazıldı
