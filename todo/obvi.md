# Todo — Obvi (myobvi.com)

*Kaynak:* https://myobvi.com · *Preset:* default · *Tema:* Platter custom (Theme Store skin değil)

**Durum:** ✅ **KAPALI** — tam envanter + quiz iframe piercing

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
| 1 | **Home** — tüm section'lar | ✅ done | 21 obs | Marquee → footer newsletter |
| 2 | **PDP** — Detox + farklı şablon | ✅ done | `product-info-main`, `product-info-main-2`, `before-after-slider` | Burn PDP'de before/after slider |
| 3 | **PLP** — shop-all + benefit | ✅ done | `collection-nav-tabs`, `product-showcase-grid-plp`, `*-2` (weight-loss) | |
| 4 | **Search results** — `collagen` tam sayfa | ✅ done | `search/search-results` | Overlay değil `/search?q=collagen` |
| 5 | **Cart** — `/cart` + drawer boş + dolu | ✅ done | `cart/cart-page-main`, `home/global-cart-drawer` | initial + filled + changed (qty2) 3vp |
| 6 | **Quiz** — ekran 1–3 | ✅ done | `quiz/product-finder-quiz` | iframe **pierced** — 3vp × 3 state |
| 7 | **Blog** — liste + post | ✅ done | `blog-list/blog-list-main`, `blog-post/blog-post-main` | |
| 8 | **Recipes** — liste + post | ✅ done | `blog-list/blog-list-main-2`, `blog-post/blog-post-main-2` | |
| 9 | **Learn** — Our Story + How To Start | ✅ done | `about-brand/*` | `/pages/our-story` 404; Our Story = `/pages/about-us-1` |
| 10 | **Bundle builder** | ⛔ blocked | — | `/pages/bundle-builder` broken |
| 11 | **Mobile menu** — 375 hamburger | ✅ done | `home/navigation-header-mega` · `open.mobil-menu` 375+768 | LEARN mega yalnız 1440 |
| 12 | **Community join 404** | ⛔ blocked | delta only | `/pages/join-obvi-community` → 404 |

---

## Quiz — iframe piercing (2026-08-15)

**Bug:** `page.locator('iframe >> text=…')` aynı belgede kalır; Octane içeriği görünmezdi.

**Fix:** `scripts/capture-interaction.mjs` — `iframe[sel] >> inner` → `page.frameLocator(sel).locator(inner)`. Escape overlay dismiss lightbox'ı kapatırsa settle iframe'i yeniden yükler.

| State | Ekran | 375 | 768 | 1440 |
|---|---|---|---|---|
| `initial` · goal-screen | What is your ultimate health and beauty goal? | ✅ | ✅ | ✅ |
| `changed` · weightloss-struggle | What do you struggle with in your weightloss journey? (multi-select + Next/Back) | ✅ | ✅ | ✅ |
| `open` · exercise-frequency | How often do you currently exercise? (Next, no PII) | ✅ | ✅ | ✅ |

- iframe `src` = **about:blank** (standalone public quiz URL yok; in-page lightbox yakalandı)
- Next seçim zorunlu olmadan ilerledi; e-posta/isim/telefon yok
- **Duruldu** — ekran 4+ yoklanmadı (PII duvarına gelmeden)
- Home FIND YOUR PERFECT MATCH bandı ayrı CTA (`editorial-image-with-text-2`), ikinci quiz şeması değil

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
| Image+text | editorial-image-with-text | home/editorial-image-with-text | ✅ | ✅ |
| Quiz CTA band | editorial-image-with-text | home/editorial-image-with-text-2 | ✅ | ✅ (CTA, ikinci quiz şeması değil) |
| Trust icons | trust-icon-row | home/trust-icon-row | ✅ | ✅ |
| Community band | editorial-image-with-text | home/editorial-image-with-text-3 | ✅ | ✅ (CTA 404) |
| Subscribe & save | editorial-image-with-text | home/editorial-image-with-text-4 | ✅ | ✅ |
| UGC feed | media-shop-the-feed | home/media-shop-the-feed | ✅ | ✅ |
| Blog teaser | editorial-image-with-text | home/editorial-image-with-text-5 | ✅ | ✅ |
| Cart drawer | global-cart-drawer | home/global-cart-drawer | ✅ | ✅ |
| Footer newsletter | footer-columns-newsletter | home/footer-columns-newsletter | ✅ | ✅ |

---

## Blocker kayıtları (honest — icat edilmedi)

| Blocker | Kayıt | Durum |
|---|---|---|
| Quiz iframe click | ~~missingStates.changed~~ | **Çözüldü** — frameLocator; 9/9 kare |
| Quiz ekran 4+ / e-posta gate | `interactionNote` | Duruldu; PII yoklandı değil |
| Bundle builder | `candidates/obvi-blocked-pages.md` | `/pages/bundle-builder` broken |
| Community join 404 | `editorial-image-with-text-3` + candidates | `/pages/join-obvi-community` 404 |
| Scratch-card popup | `candidates/obvi-gamified-offer.md` | Hâlâ yok; şema açılmadı |

---

## Yeni şema

| schemaId | Dosya | Gerekçe |
|---|---|---|
| product-finder-quiz | `sections/instance/product-finder-quiz.json` | Octane/lightbox quiz — mevcut şemalara sığmıyor |

---

## Evidence özeti

- Quiz: **9 PNG** (3 state × 3 vp) — `missingStates` boş
- `capture-interaction.mjs` iframe sözleşmesi: `iframe[…] >> inner`

---

## Açık iş

*Quiz iframe kapandı. Kalan blocker'lar: bundle builder, community 404, scratch-card (aday).*
