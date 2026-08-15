# Todo — Cometeer

*Kaynak:* https://cometeer.com · *Preset:* default · *Tema (storefront):* **Cometeer Theme** (`Shopify.theme.name`) · `schema_name`: **Shiro** · `theme_store_id`: null (Theme Store değil)

**Durum:** ⬜ yürüyüş + resmi 3vp — draft PR, **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/cometeer/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Yazma sınırı | `observations/cometeer/` · `evidence/cometeer/` · `todo/cometeer.md` · `candidates/cometeer-*.md` |
| Şema | mevcut tiplere observation + delta; `sections/*.json` **dokunulmadı** |
| Validate | `npm run validate` — mevcut şemalar; yeni şema yok |

**Kapsam satırı (hedef):** Cometeer · default · home/PDP/bundle/coffee-menu/search/cart-drawer/content/footer/mobile-menu · mevcut şemalar · Shiro custom · `/cart` yok

---

## Checklist — chrome şablonları

| Şablon | Durum | 3vp |
|---|---|---|
| Home (section kit + header/footer) | ⬜ observation yazıldı | ⬜ |
| PDP Mixed Roast Box | ⬜ | ⬜ |
| PDP Gift Card | ⬜ | ⬜ |
| Bundle `/products/build-your-own-box` | ⬜ | ⬜ |
| Coffee menu `/pages/coffee-menu` (müşteri PLP) | ⬜ | ⬜ |
| Search `/search?q=coffee` | ⬜ | ⬜ |
| Cart drawer (sidecart) + mini-cart bar | ⬜ | ⬜ |
| Mobile 375/768 hamburger | ⬜ | ⬜ |
| How It Works | ⬜ | ⬜ |
| Our Story & Mission | ⬜ | ⬜ |
| Blog list + August 2026 post | ⬜ | ⬜ |
| Contact Us (form yok) | ⬜ | ⬜ |
| Policy privacy | ⬜ | ⬜ |
| Gifts landing (splash + 1 card + FAQ) | ⬜ | ⬜ |
| Stellar / merch / world-mug / roasting-partners | ⛔ roster — tekrarlayan splash/card; ayrı 3vp yok | — |
| `/collections/all` | ⛔ test SKU (KH Test) — aday | — |
| Predictive search | ⛔ header'da yok | — |
| `/cart` sayfa | ⛔ redirect `/?sidecart=true` | — |
| 404'ler | ⛔ aday | — |

---

## Home roster

| # | Bileşen / id | scope | Screenshot | JSON | Done |
|---|---|---|---|---|---|
| 1 | navigation-header-mega | global | [ ] | [x] | [ ] |
| 2 | hero-slideshow (`sol_splash`) | instance | [ ] | [x] | [ ] |
| 3 | features-multicolumn (4 fayda) | instance | [ ] | [x] | [ ] |
| 4 | product-showcase-featured (World Mug) | instance | [ ] | [x] | [ ] |
| 5 | editorial-image-with-text (tasting) | instance | [ ] | [x] | [ ] |
| 6 | faq-collapsible-tabs | instance | [ ] | [x] | [ ] |
| 7 | editorial-custom-content (how-to-melt) | instance | [ ] | [x] | [ ] |
| 8 | media-video-hero (5 tarif) | instance | [ ] | [x] | [ ] |
| 9 | media-shop-the-feed (Tolstoy) | instance | [ ] | [x] | [ ] |
| 10 | collection-nav-image-cards (roasters) | instance | [ ] | [x] | [ ] |
| 11 | blog-list-main | instance | [ ] | [x] | [ ] |
| 12 | features-multicolumn-2 (sustain) | instance | [ ] | [x] | [ ] |
| 13 | testimonial-quote-carousel | instance | [ ] | [x] | [ ] |
| 14 | editorial-image-with-text-2 (who we are) | instance | [ ] | [x] | [ ] |
| 15 | footer-columns-newsletter | global | [ ] | [x] | [ ] |
| 16 | global-cart-drawer | global | [ ] | [x] | [ ] |
| 17 | global-menu-drawer | global | [ ] | [x] | [ ] |

`#shopify-section-global-banner` height 0 — duyuru yok, observation yok.

---

## Interact (piksel değişince)

- [ ] Header mega hover (1440) — kapalı kare 118px; panel açılırsa `capture-interaction`
- [ ] Hamburger open 375/768
- [ ] Sidecart empty → add (gift card veya merch) → filled; adet changed
- [ ] How-to-melt Iced ↔ Hot
- [ ] Recipe video tab
- [ ] Predictive search — **yok**; zorlama

---

## Aday / şemaya sığmayan

- [`candidates/cometeer-blocked-pages.md`](../candidates/cometeer-blocked-pages.md) — 404 + test collection
- [`candidates/cometeer-how-to-melt.md`](../candidates/cometeer-how-to-melt.md) — Iced/Hot how-to
- [`candidates/cometeer-subscription-plans.md`](../candidates/cometeer-subscription-plans.md) — Replo plans
- Header'da arama yok; `/search` native sonuç sayfası var

---

## Evidence backlog

- [ ] Resmi 3vp tüm claiming observation'lar
- [ ] Interact yalnız piksel değişenler
- [ ] Validator (0 yeni şema → mevcut temiz kalmalı)
