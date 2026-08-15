# Todo — Made In (madeincookware.com)

*Kaynak:* https://madeincookware.com · *Preset:* `default`  
*Tema (storefront):* **görünmedi** — custom headless (Tailwind + UUID `section` id; `Shopify.theme` / `schema_name` / Theme Store id yok). Ad uydurulmadı.

**Durum:** Mod A walk kapandı — 49 obs · resmi 3vp · interact piksel değişenlerde · leftover kayıtlı  
**PR:** https://github.com/mattiasadem/qante/pull/36 (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/madeincookware/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Validate | `validate-schemas.mjs` → şema dosyasına dokunulmadı |
| Gözlem / kanıt | 49 obs · 171 PNG |
| Parallel | yalnız `observations/madeincookware/`, `evidence/madeincookware/`, `todo/madeincookware.md`, `candidates/madeincookware-*.md` |

**Kapsam satırı:**  
`Made In · default · tema adı görünmedi (custom headless) · home→PDP→PLP→search→cart drawer→content→footer→mobile · 49 obs · 171 PNG · 0 yeni şema · leftover: reviews / PLP full grid / Compare Sets / locations / privacy host / home A/B / 404`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer | ✅ | ✅ |
| Mega / search overlay / cart drawer / mobile menu | ✅ interact | ✅ (mega open 1440; menu 1440 N/A) |
| PDP `/products/the-stainless-sets/10-piece` | ✅ + 13-Piece | ✅ (375 size `changed` pixel yok) |
| PDP frying pan + gift card | ✅ | ✅ |
| PLP `/collections/cookware` + `/collections/sets` | ✅ toolbar + banner | ✅ (full grid leftover) |
| Search `/search?s=griddle` | ✅ Shop + Learn | ✅ |
| Cart `/cart` | ⛔ home — drawer | ✅ empty + filled 3vp |
| About `/pages/our-story` | ✅ (`/pages/about` 404) | ✅ |
| Help `/pages/help-center` | ✅ + ilk soru | ✅ |
| Contact `/pages/contact-us` | ✅ form **gönderilmedi** | ✅ |
| Warranty / returns / accessibility | ✅ | ✅ |
| Blog `/blogs` + Kamagata | ✅ | ✅ |
| Recycle LP | ✅ | ✅ |
| Reviews / locations / privacy host | ⛔ leftover | — |
| 404 `/pages/about` + qante | ⛔ candidates | — |
| Newsletter / contact submit | ⛔ PII yok | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home | [x] | [x] | reuse | [x] |
| 2 | global-predictive-search | home | [x] 3vp | [x] | reuse | [x] |
| 3 | global-cart-drawer | home | [x] empty+filled | [x] | reuse | [x] |
| 4 | global-menu-drawer | home | [x] 375+768 | [x] | reuse | [x] |
| 5 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 6 | product-showcase-tabs | home | [x] | [x] | reuse | [x] |
| 7 | collection-nav-image-cards | home | [x] | [x] | reuse | [x] |
| 8 | product-showcase-grid-featured | home | [x] | [x] | reuse | [x] |
| 9 | editorial-rich-text | home reviews band | [x] | [x] | reuse | [x] leftover tip |
| 10 | media-shop-the-feed | home | [x] | [x] | reuse | [x] |
| 11 | editorial-image-with-text-2 | home craft | [x] | [x] | reuse | [x] |
| 12 | editorial-image-with-text-overlay | home stacked | [x] | [x] | reuse | [x] |
| 13 | collection-nav-slider | home | [x] | [x] | reuse | [x] |
| 14 | blog-list-main | home recipes | [x] | [x] | reuse | [x] |
| 15 | editorial-image-with-text | home founders | [x] | [x] | reuse | [x] |
| 16 | features-multicolumn | home help | [x] | [x] | reuse | [x] |
| 17 | product-showcase-grid-featured.2 | home trending | [x] | [x] | reuse | [x] |
| 18 | footer-columns-newsletter | home | [x] | [x] | reuse | [x] |
| 19 | product-info-main | product-detail | [x] | [x] | reuse | [x] 375 size leftover |
| 20 | product-showcase-grid-featured | PDP included | [x] | [x] | reuse | [x] |
| 21 | features-multicolumn | PDP | [x] | [x] | reuse | [x] |
| 22 | testimonial-quote-carousel | PDP press | [x] | [x] | reuse | [x] |
| 23 | media-shop-the-feed | PDP | [x] | [x] | reuse | [x] |
| 24 | editorial-image-with-text | PDP | [x] | [x] | reuse | [x] |
| 25 | faq-collapsible-tabs | PDP | [x] | [x] | reuse | [x] |
| 26 | product-showcase-related | PDP | [x] | [x] | reuse | [x] |
| 27 | product-info-main.2 | frying pan | [x] | [x] | reuse | [x] |
| 28 | product-info-main.3 | gift card | [x] | [x] | reuse | [x] |
| 29 | collection-nav-slider | collection | [x] | [x] | reuse | [x] |
| 30 | product-showcase-grid-plp | collection | [x] toolbar | [x] | reuse | [x] leftover grid |
| 31 | editorial-rich-text | collection | [x] | [x] | reuse | [x] |
| 32 | collection-banner | sets | [x] | [x] | reuse | [x] |
| 33 | search-results | search | [x] | [x] | reuse | [x] |
| 34–36 | about (3) | about-brand | [x] | [x] | reuse | [x] |
| 37–38 | help | faq-support | [x] | [x] | reuse | [x] |
| 39–40 | contact | contact | [x] | [x] | reuse | [x] |
| 41–44 | policy (4) | policy | [x] | [x] | reuse | [x] |
| 45–46 | blog list | blog-list | [x] | [x] | reuse | [x] |
| 47–48 | Kamagata | blog-post | [x] | [x] | reuse | [x] |
| 49 | recycle | landing-campaign | [x] | [x] | reuse | [x] |

Silinen A/B (bu oturumda DOM’da yok): `promo-grid-banner`, `collection-nav-icon-buttons`, `media-video-hero`, `lead-capture-newsletter-band` + `.2` — leftover.

---

## Interact (piksel değişti)

| Bileşen | State | Not |
|---|---|---|
| navigation-header-mega | initial, open | 375/768 mobile bar; 1440 Cookware mega (Materials / Shapes / promo) |
| global-predictive-search | initial, input | 3vp Popular + `griddle` ürünler ($179 / $99 / $99 / $199) |
| global-cart-drawer | initial, filled | boş + Stainless Clad Frying Pan $99; Checkout’a girilmedi |
| global-menu-drawer | open | 375/768 hamburger (1440 0px) |
| product-info-main | changed | 768/1440 13-Piece $1,199; **375 kare değişmedi** |
| faq-collapsible-tabs (PDP) | changed | “What is 5-Ply Stainless Cookware?” |
| faq-collapsible-tabs (Help) | changed | “Where are Made In products made?” |

---

## Aday / leftover

[`candidates/madeincookware-leftovers.md`](../candidates/madeincookware-leftovers.md) · [`candidates/madeincookware-404s.md`](../candidates/madeincookware-404s.md)

- Reviews widget (şema yok; home band `editorial-rich-text` zorlama)
- `/cart` → home — drawer only; `/cart.js` HTML
- PLP full grid ~30k px — toolbar karesi
- Compare Sets (stabil selector yok)
- Store locator `/pages/locations`
- Privacy `privacy.madeincookware.com`
- Home A/B (2-up promo / Chef Favorites / video / newsletter band kayboldu)
- PDP 375 size `changed` resmi kare değişmedi
- Account / newsletter / contact submit — PII

---

## Evidence backlog

- [x] Claiming obs resmi 3vp — **171 PNG**
- [x] Overlay / mega / search / cart / menu / FAQ / size interact
- [x] Predictive `griddle` 3vp
- [x] Cart empty + filled 3vp (UI ATC; add.js yok)
- [ ] PDP 375 13-Piece pixel (iki resmi koşu identical)
- [ ] PLP full grid / filter `changed`
- [ ] Compare Sets selector
- [ ] Cart qty `changed`
- [ ] Newsletter / contact submit — **yapılmayacak** (PII)
