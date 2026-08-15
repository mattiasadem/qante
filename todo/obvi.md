# Todo — Obvi (myobvi.com)

*Kaynak:* https://myobvi.com · *Preset:* default · *Tema:* Platter custom (Theme Store skin değil)

**Durum:** ✅ **KAPALI** — tam envanter (33 obs · 110 kanıt · 1 yeni şema)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/obvi/default/` |
| Capture yöntemi | Resmi `capture-observation.mjs` + `capture-interaction.mjs` (375 / 768 / 1440) |
| Batch script | `scripts/run-obvi-captures.mjs` |
| Kapsam | Obvi · default · 12 sayfa tipi · 33 obs · 1 yeni şema (`product-finder-quiz`) |
| Validate | `npm run validate` → **65 temiz · 0 error · 0 warn** |
| PR | https://github.com/mattiasadem/qante/pull/1 (draft, merge yok) |

---

## Sayfa tipi checklist (definition of done)

| # | Sayfa tipi | Durum | Observation(s) | Not |
|---|---|---|---|---|
| 1 | **Home** — tüm section'lar | ✅ done | 21 obs (aşağıda) | Marquee → footer newsletter |
| 2 | **PDP** — Detox + farklı şablon | ✅ done | `product-info-main`, `product-info-main-2`, `before-after-slider` | Burn PDP'de before/after slider |
| 3 | **PLP** — shop-all + benefit | ✅ done | `collection-nav-tabs`, `product-showcase-grid-plp`, `*-2` (weight-loss) | |
| 4 | **Search results** — `collagen` tam sayfa | ✅ done | `search/search-results` | Overlay değil `/search?q=collagen` |
| 5 | **Cart** — `/cart` + drawer boş + dolu | ✅ done | `cart/cart-page-main`, `home/global-cart-drawer` | initial + filled + changed (qty2) 3vp |
| 6 | **Quiz** — ekran 1–2 | 🟡 partial | `quiz/product-finder-quiz` | Ekran 1: 3vp ✅ · Ekran 2: **blocked** (iframe click) |
| 7 | **Blog** — liste + post | ✅ done | `blog-list/blog-list-main`, `blog-post/blog-post-main` | |
| 8 | **Recipes** — liste + post (farklı şablon) | ✅ done | `blog-list/blog-list-main-2`, `blog-post/blog-post-main-2` | Aynı blog şablonu, farklı koleksiyon |
| 9 | **Learn** — Our Story + How To Start | ✅ done | `about-brand/editorial-image-with-text` (`/pages/about-us-1`), `about-brand/collection-nav-slider` | `/pages/our-story` 404 |
| 10 | **Bundle builder** | ⛔ blocked | — | `/pages/bundle-builder` broken; `candidates/obvi-blocked-pages.md` |
| 11 | **Mobile menu** — 375 hamburger | ✅ done | `home/navigation-header-mega` · `open.mobil-menu` 375+768 | `changed` (LEARN mega) yalnız 1440 |
| 12 | **Community join 404** | ⛔ blocked | delta only | `/pages/join-obvi-community` → 404; home band `editorial-image-with-text-3` |

---

## Home section checklist (21 obs)

| Section | schemaId | obs dosyası | 3vp | Done |
|---|---|---|---|---|
| Promo bar | promo-announcement-bar | home/promo-announcement-bar | ✅ | ✅ |
| Header + mega + mobil menu | navigation-header-mega | home/navigation-header-mega | ✅ | ✅ |
| Hero slideshow | hero-slideshow | home/hero-slideshow | ✅ | ✅ |
| Predictive search overlay | global-predictive-search | home/global-predictive-search | ✅ | ✅ |
| Marquee | promo-scrolling-marquee | home/promo-scrolling-marquee | ✅ | ✅ |
| Category tiles (benefit) | collection-nav-slider | home/collection-nav-slider | ✅ | ✅ |
| Category tiles 2 | collection-nav-slider | home/collection-nav-slider-2 | ✅ | ✅ |
| Product tabs | product-showcase-tabs | home/product-showcase-tabs | ✅ | ✅ |
| Image+text (quiz band) | editorial-image-with-text | home/editorial-image-with-text | ✅ | ✅ |
| Trust icons | trust-icon-row | home/trust-icon-row | ✅ | ✅ |
| Community band | editorial-image-with-text | home/editorial-image-with-text-3 | ✅ | ✅ (CTA 404) |
| Subscribe & save | editorial-image-with-text | home/editorial-image-with-text-4 | ✅ | ✅ |
| UGC feed | media-shop-the-feed | home/media-shop-the-feed | ✅ | ✅ |
| Blog teaser | editorial-image-with-text | home/editorial-image-with-text-5 | ✅ | ✅ |
| Image+text 2 | editorial-image-with-text | home/editorial-image-with-text-2 | ✅ | ✅ |
| Cart drawer | global-cart-drawer | home/global-cart-drawer | ✅ | ✅ |
| Footer newsletter | footer-columns-newsletter | home/footer-columns-newsletter | ✅ | ✅ |

---

## Blocker kayıtları (honest — icat edilmedi)

| Blocker | Kayıt | Retry |
|---|---|---|
| Quiz ekran 2 (iframe Next) | `quiz/product-finder-quiz` · `missingStates.changed` | ✅ 1 retry — iframe piercing başarısız |
| Bundle builder | `candidates/obvi-blocked-pages.md` | Sayfa "Something went wrong" |
| Community join 404 | `editorial-image-with-text-3` delta + candidates | `/pages/join-obvi-community` 404 |
| Scratch-card popup | `candidates/obvi-gamified-offer.md` | Koşullu görünürlük; kanıt yok |

---

## Yeni şema

| schemaId | Dosya | Gerekçe |
|---|---|---|
| product-finder-quiz | `sections/instance/product-finder-quiz.json` | Octane/lightbox quiz — mevcut şemalara sığmıyor |

---

## Evidence özeti

- **110 PNG** — `evidence/obvi/default/`
- Tüm obs: kanıt iddiası olan state'lerde 375+768+1440 **veya** `missingStates` (quiz changed, nav changed@mobil N/A)
- Predictive search + mobil menu selector düzeltmeleri ikinci pass'te uygulandı

---

## Açık iş

*Yok — checklist kapalı. Blocker'lar yukarıda kayıtlı.*
