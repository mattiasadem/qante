# Todo — Topicals (mytopicals.com)

*Kaynak:* https://mytopicals.com · *Preset:* `default` · *Tema adı vitrinde yok*

**Platform:** Shopify **Hydrogen + Oxygen** + **Sanity CMS** (`powered-by: Shopify, Oxygen, Hydrogen`). Theme Store / `Shopify.theme.name` yok — uydurulmadı. Envanter slug’ı `topicals`.

**Durum:** ✅ walk + resmi 3vp kapandı · leftover’lar aşağıda (şema icat yok)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/topicals/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | mevcut tiplere observation + delta — `sections/*.json` dokunulmadı |
| Yeni şema | 0 |
| Gözlem / kanıt | 40 obs · 135 PNG (120 statik 3vp + interact) |
| Kapsam satırı | Topicals · default · Hydrogen/Sanity · home→PDP→PLP→search→cart→content→footer→mobile menu · 40 obs · 0 yeni şema · adaylar açık |

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home (6 Sanity section + chrome) | ✅ | ✅ |
| PDP `/products/faded-dark-spot-peel-pads` | ✅ buy box `<main>` üstü | ✅ |
| PLP `/collections/all` | ✅ `<main>` yok | ✅ |
| Search `?q=faded` | ✅ 28 ürün | ✅ |
| Cart `/cart` + drawer | ✅ aynı sağ dialog | ✅ boş + dolu |
| About `/pages/about` | ✅ 6 section | ✅ |
| FAQ `/pages/faq` | ✅ + ilk soru `changed` | ✅ |
| Contact `/pages/contact-us` | ✅ form **gönderilmedi** | ✅ |
| Rewards `/pages/rewards` | ✅ Spline hero + how-it-works | ✅ |
| Subscription `/pages/subscription` | ✅ selling-plan satır | ✅ |
| Promotions `/pages/topicals-promotions` | ✅ | ✅ |
| Policy `/policies/privacy-policy` | ✅ `<main>` yok | ✅ |
| Store locator `/pages/store-locator` | ⛔ aday (Sephora/Mapbox) · en yakın `page-content-main` | ✅ |
| Blog article `/blogs/news/who-cares-looks-fade` | ✅ list 404 | ✅ |
| 404 `/blogs/news` | ⛔ aday video 404 · `page-content-main` | ✅ |
| Mobile 375 menu | ✅ 375/768 open · 1440 N/A | ✅ |
| Predictive search | ✅ fill `faded` | ✅ |
| Footer | ✅ newsletter **doldurulmadı** | ✅ |
| Campaigns `/campaigns` | ⛔ hydrate boş — aday | — |
| Blog list `/blogs/news`, `/blogs/flareupfiles` | ⛔ Hydrogen 404 | — |

---

## Home roster (Sanity `_type`)

| # | Sanity | QANTE schemaId | Karar |
|---|---|---|---|
| — | banner | `promo-announcement-bar` | reuse |
| — | header mega | `navigation-header-mega` | reuse · SHOP hover 1440 |
| 1 | hero | `hero-slideshow` | reuse · tek slayt |
| 2 | productCarousel | `product-showcase-grid-featured` | reuse · slider |
| 3 | fullBleed (subscribe) | `product-showcase-featured` | reuse |
| 4 | grid (WE'RE TOPICALS) | `editorial-image-with-text` | reuse |
| 5 | fullBleed video | `media-video-hero` | reuse |
| 6 | socialGallery | `media-shop-the-feed` | reuse |
| — | footer | `footer-columns-newsletter` | reuse |
| — | cart dialog | `global-cart-drawer` | reuse · boş + dolu |
| — | search overlay | `global-predictive-search` | reuse · fill |
| — | 375 sticky menu | `global-menu-drawer` | reuse · 375/768 |

---

## Bileşen checklist

| # | Bileşen / id | scope | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | global | [x] | [x] | reuse | [x] |
| 2 | navigation-header-mega | global | [x] | [x] | reuse | [x] |
| 3 | hero-slideshow | instance | [x] | [x] | reuse | [x] |
| 4 | product-showcase-grid-featured | instance | [x] | [x] | reuse | [x] |
| 5 | product-showcase-featured | instance | [x] | [x] | reuse | [x] |
| 6 | editorial-image-with-text | instance | [x] | [x] | reuse | [x] |
| 7 | media-video-hero | instance | [x] | [x] | reuse | [x] |
| 8 | media-shop-the-feed | instance | [x] | [x] | reuse | [x] |
| 9 | footer-columns-newsletter | global | [x] | [x] | reuse | [x] |
| 10 | global-cart-drawer | global | [x] | [x] | reuse | [x] |
| 11 | global-predictive-search | global | [x] | [x] | reuse | [x] |
| 12 | global-menu-drawer | global | [x] | [x] | reuse | [x] |
| 13 | product-info-main | instance | [x] | [x] | reuse | [x] |
| 14 | before-after-slider (PDP RESULTS) | instance | [x] | [x] | reuse | [x] |
| 15 | media-video-hero (how-to) | instance | [x] | [x] | reuse | [x] |
| 16 | features-multicolumn (ingredients) | instance | [x] | [x] | reuse | [x] |
| 17 | faq-collapsible-tabs (PDP) | instance | [x] | [x] | reuse | [x] |
| 18 | product-showcase-related | instance | [x] | [x] | reuse | [x] |
| 19 | product-showcase-grid-plp | instance | [x] | [x] | reuse | [x] |
| 20 | search-results | instance | [x] | [x] | reuse | [x] |
| 21 | cart-page-main | instance | [x] | [x] | reuse | [x] |
| 22 | about + faq + contact + rewards + sub + promo + policy + locator + blog + 404 | mixed | [x] | [x] | reuse | [x] |

---

## Interact

| Component | State | Kanıt | Not |
|---|---|---|---|
| navigation-header-mega | open 1440 | `open.shop-mega.1440` | SHOP hover · 3 kolon + Featured |
| global-menu-drawer | open 375/768 | `open.hamburger.{375,768}` | 1440 hamburger yok |
| global-predictive-search | input | `input.faded.{375,768,1440}` | 1440 ürün satırı; 375/768 chip |
| global-cart-drawer | initial + filled | `cart-bos` + `peel-pads` | Add to bag click; addToCart yok |
| faq-collapsible-tabs | changed | `changed.ilk-soru` | gluten-free cevap açık |

---

## Aday / şemaya sığmayan

- Alia scratch-card popup (`#alia-root-*`, “Try your luck”) — üçüncü parti; e-posta/PII’ye girilmedi
- Okendo PDP reviews (section 5) — reviews şeması yok
- Store locator harita (Mapbox / Sephora, 772 stores)
- 404 video hero (“404 are you lost?”)
- Blog **list** (`/blogs/news`, `/blogs/flareupfiles`) Hydrogen 404; article URL yaşıyor
- `/campaigns` hydrate boş
- Loyalty/rewards widget + Spline 3D (“Built with Spline”)
- Selling-plan sıklık (subscription PLP satırları)
- Hydrogen/Sanity section id yok — selector `main#main > section:nth-of-type(n)` / class

Ayrıntı: `candidates/topicals-hydrogen.md` · `candidates/topicals-404s.md`

---

## Leftover (interact / yoklama)

- [ ] Cart adet `changed` (+/−)
- [ ] PLP Filter / Sort panel
- [ ] PDP before-after sürükle (statik kare zaten BEFORE\|AFTER kesik)
- [ ] PDP FAQ accordion `changed`
- [ ] About OUR PRINCIPLES madde 2–4 (görsel/caption değişir)
- [ ] FAQ kategori tık (SHIPPING vb.)
- [ ] 375/768 predictive search ürün satırı (2 deneme — yalnız chip)
- [ ] Alia overlay (PII yok)
- [ ] `/campaigns` hydrate
- [ ] Newsletter / contact submit — **yapılmayacak** (PII)
