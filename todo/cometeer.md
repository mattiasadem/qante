# Todo — Cometeer

*Kaynak:* https://cometeer.com · *Preset:* default  
*Tema (storefront):* **Cometeer Theme** (`Shopify.theme.name`) · `schema_name`: **Shiro** · `theme_store_id`: null

**Durum:** ✅ chrome walk + resmi 3vp · interact (mega / melt Hot / cart filled 1440) · draft PR, **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/cometeer/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Gözlem / kanıt | 52 obs · 161 PNG |
| Şema | 0 yeni — mevcut tipler + delta |
| Validate | `npm run validate` → 65 temiz · 0 error · 0 warn |
| PR | draft — **main'e merge yok** |
| Yazma sınırı | `observations/cometeer/` · `evidence/cometeer/` · `todo/cometeer.md` · `candidates/cometeer-*.md` |

**Kapsam satırı:** Cometeer · default · home/PDP/bundle/coffee-menu/search/sidecart/content/footer/mobile-menu · 52 obs · 161 kare · 0 yeni şema · Shiro custom

---

## Checklist — chrome şablonları

| Şablon | Durum | 3vp |
|---|---|---|
| Home section kit + header/footer | ✅ mevcut şemalar | ✅ |
| PDP Mixed Roast + Gift Card | ✅ `product-info-main` + compare/FAQ | ✅ |
| Bundle `/products/build-your-own-box` | ✅ `commerce-tools-products-bundle` | ✅ |
| Coffee menu `/pages/coffee-menu` (müşteri katalog) | ✅ aynı bundle motor | ✅ |
| Search `/search?q=coffee` | ✅ `search-results` (native liste) | ✅ |
| Sidecart empty + filled 1440 | ✅ `global-cart-drawer` | ✅ empty 3vp · filled 1440 |
| Mobile hamburger 375/768 | ✅ `global-menu-drawer` | ✅ 375+768 (1440 N/A) |
| How It Works | ✅ | ✅ |
| Our Story & Mission | ✅ | ✅ |
| Blog list + August 2026 | ✅ | ✅ |
| Contact Us (form yok) | ✅ hours/chat/email + FAQ | ✅ |
| Policy privacy | ✅ native `page-content-main` | ✅ |
| Gifts landing | ✅ splash + 1 card + FAQ | ✅ |
| Stellar / merch / world-mug / roasting-partners | ⛔ roster — tekrarlayan kit | — |
| Store locator / accessibility / CCPA | ⛔ 200; ayrı 3vp yok | — |
| `/collections/all` | ⛔ test SKU | — |
| Predictive search | ⛔ header'da yok | — |
| `/cart` sayfa | ⛔ `/?sidecart=true` | — |
| 404'ler | ⛔ aday | — |

---

## Home roster

| # | Bileşen | 3vp | Done |
|---|---|---|---|
| 1 | navigation-header-mega (+ mega open 1440) | ✅ | [x] |
| 2 | hero-slideshow (1440 BtLFNm / 375 zd8WGL) | ✅ | [x] |
| 3 | features-multicolumn (4 fayda) | ✅ | [x] |
| 4 | product-showcase-featured (World Mug) | ✅ | [x] |
| 5 | editorial-image-with-text (tasting) | ✅ | [x] |
| 6 | faq-collapsible-tabs | ✅ | [x] |
| 7 | editorial-custom-content (melt + Hot changed) | ✅ | [x] |
| 8 | media-video-hero (5 tarif) | ✅ | [x] |
| 9 | media-shop-the-feed (Tolstoy) | ✅ | [x] |
| 10 | social-proof-brand-logos (roasters) | ✅ | [x] |
| 11 | blog-list-main | ✅ | [x] |
| 12 | features-multicolumn-2 (sustain) | ✅ | [x] |
| 13 | testimonial-quote-carousel | ✅ | [x] |
| 14 | editorial-image-with-text-2 (who we are) | ✅ | [x] |
| 15 | footer-columns-newsletter | ✅ | [x] |
| 16 | global-cart-drawer | ✅ | [x] |
| 17 | global-menu-drawer | ✅ | [x] |

---

## Interact

- [x] 1440 Shop All Coffee mega (`open.shop-all-mega`)
- [x] How-to-melt Iced → Hot (`changed.hot-adimlar` 3vp)
- [x] Sidecart empty 3vp
- [x] Sidecart filled 1440 (Mixed Roast one-time → Dark/Medium/Light 8-pack)
- [ ] Filled 375/768 — interact runner `ONE TIME PURCHASE` waitFor timeout (2. deneme; üçüncü yok)
- [ ] Recipe video tab — zorunlu değil; melt yeterli
- [x] Predictive search yok — zorlanmadı

---

## Aday

- [`candidates/cometeer-blocked-pages.md`](../candidates/cometeer-blocked-pages.md)
- [`candidates/cometeer-how-to-melt.md`](../candidates/cometeer-how-to-melt.md)
- [`candidates/cometeer-subscription-plans.md`](../candidates/cometeer-subscription-plans.md)

---

## Açık iş / leftover

- Stellar, merch (çoklu product-card), world-mug, roasting-partners — home/gifts kit tekrarı
- Store locator, accessibility, CCPA opt-out — 200, envanterlenmedi
- `/collections/all` test SKU
- 404 şablon (`Sorry there's no coffee here.`) — şema icat yok
- Contact native form yok (Kustomer/Hark chat)
- Gift card ATC alıcı e-posta ister — PII, doldurulmadı
- Bazı uzun section kırpımlarında `#mini-cart` View Cart bar sızıyor (fixed overlay)
