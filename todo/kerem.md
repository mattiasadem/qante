# Todo — Kerem (ikas Theme Store)

*Kaynak (resmi walk URL):* https://dev-kerem.ikas.shop/  
*Theme Store:* https://themes.ikas.com/themes/5bfeca45-4f60-44d7-aef8-c280be7db7c2  
*Theme Store title (read):* **Kerem | ikas Theme Store**  
*Preset klasör:* `default`  
*Slug:* `kerem`  
*Geliştirici (listing):* ikascom

**Tema (vitrinde okundu, uydurulmadı):**  
`window.Shopify` **yok** · `Shopify.theme` **yok**  
`x-powered-by: ikas`  
`window.__IKAS_DATA__` var · `pageType` INDEX / PRODUCT / CATEGORY / SEARCH / CART / BLOG_INDEX / CUSTOM / NOT_FOUND  
`storefrontThemeId` = `e0e11d6b-d4ef-46c6-bdab-5912cdd1cfc4`  
`storefrontId` = `f0022564-b0a6-4568-b4c0-268715f1cded`  
`storefrontRoutingId` = `909356fb-0dd4-49b9-9d3b-8d3b8cadeb25`  
`storefrontType` = `STOREFRONT`  
`salesChannelId` = `fb519b2f-b246-4207-abf8-9c6e055a19d0`  
`domain` = `dev-kerem.ikas.shop`  
`apiUrl` = `https://api.myikas.com/api/sf/graphql`  
`merchantId` = `70d6ab17-775e-4c3b-9840-7aeb37587d3f`  
`merchantName` / `storeName` = `dev-kerem`  
`locale` / `defaultLocale` = `tr` · `html lang=tr` · `region` = `TR` · `currencyCode` = `TRY`  
`window.IkasEvents` = `{subscribe, unsubscribe}`  
`theme_store_id` = **5bfeca45-4f60-44d7-aef8-c280be7db7c2** (Theme Store UUID; storefront JSON’da Shopify id yok)

**Durum:** Mod A walk + resmi 3vp + interact + validate **bitti** (0 error)  
**PR:** draft https://github.com/mattiasadem/qante/pull/209 — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/kerem/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **31** |
| PNG | **113** |
| Validator | 65 temiz · **0 error** · 0 warn |
| Parallel | yalnız `observations/kerem/`, `evidence/kerem/`, `todo/kerem.md`, `candidates/kerem-leftovers.md` |

**Kapsam satırı:**  
`Kerem · default · ikas Studio · theme_store_id 5bfeca45-4f60-44d7-aef8-c280be7db7c2 · home→PDP Orta Boy Omuz Çantası Siyah→Bej→PLP /bags→search?s=canta→cart empty/filled/qty→FAQ home only→blog boş→404 · about/contact/FAQ page yok · 31 obs · 113 PNG · 0 yeni şema · leftover: candidates/kerem-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home roster (announce→footer) | roster + capture | [x] |
| Mega Çantalar 1440 | interact | [x] |
| Predictive search `canta` | interact 3vp | [x] overlay boş |
| Mobile menu 375 | interact | [x] |
| Mobile menu 768 | interact | [x] |
| Cart drawer empty + filled + qty | interact 3vp | [x] |
| PDP Orta Boy Omuz Çantası Siyah→Bej | interact 3vp | [x] |
| PLP `/bags` | roster + capture | [x] |
| Search `/search?s=canta` (12) | roster + capture | [x] |
| Cart page empty + filled + qty | interact 3vp | [x] |
| About / contact | ⛔ 404 leftover | leftover |
| FAQ | home `section.content-acc` · `/pages/sss` 404 | [x] home |
| Blog `/blog` (boş) | roster + capture | [x] |
| 404 | roster + capture | [x] |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home roster (DOM)

| # | Kerem / class | QANTE schemaId | Karar |
|---|---|---|---|
| 1 | `.vheader__announce` | `promo-announcement-bar` | reuse |
| 2 | `header.vheader` | `navigation-header-mega` | reuse · mega var · interact |
| 3 | `section.hero-slider` | `hero-slideshow` | reuse |
| 4 | `section.marquee` | `promo-scrolling-marquee` | reuse |
| 5 | `section.category-split` | `collection-nav-image-cards` | reuse |
| 6 | `section.editorial-hero` | `editorial-image-with-text` | reuse |
| 7 | `section.product-slider` (Yeni gelenler) | `product-showcase-grid-featured` | reuse |
| 8 | `section.cc` | `promo-banner-countdown` | reuse |
| 9 | `section.shop-look` | `media-lookbook-banner` | reuse · hotspot tıklanmadı |
| 10 | `section.product-slider` (favoriler) | `product-showcase-grid-featured.2` | reuse |
| 11 | `section.image-banner` | `editorial-image-with-text-overlay` | reuse |
| 12 | `section.sticky-showcase` | `product-showcase-grid-featured.3` | reuse · sticky delta |
| 13 | `section.services` | `features-multicolumn` | reuse |
| 14 | `section.content-acc` | `faq-collapsible-tabs` | reuse |
| 15 | `section.pf` | `product-finder-quiz` | reuse · BAŞLAYALIM tıklanmadı |
| 16 | `section.ba` | `before-after-slider` | reuse |
| 17 | `section.newsletter` | `lead-capture-newsletter-band` | reuse · submit yok |
| 18 | `section.rm` | `testimonial-quote-carousel` | reuse · boş |
| 19 | `footer.footer` | `footer-columns-newsletter` | reuse · submit yok |
| 20 | `.hsearch` | `global-predictive-search` | reuse · interact |
| 21 | `aside.hdrawer--left` | `global-menu-drawer` | reuse · 375/768 |
| 22 | `aside.hdrawer--right` | `global-cart-drawer` | reuse · interact |

---

## Interact (pixel-check)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [x] 1440 Çantalar — alt kat + Atelier Kış Kapsülü |
| global-predictive-search | input | [x] `canta` 3vp — overlay «Sonuç bulunamadı»; sayfa 12 |
| global-menu-drawer | open / changed | [x] 375+768 hamburger; Çantalar + açıldı |
| global-cart-drawer | empty/filled/qty | [x] boş → qty1 ₺24 → qty2 ₺48 |
| cart-page-main | empty/filled/qty | [x] aynı |
| product-info-main | changed | [x] Siyah → Bej; ₺24 |

Stop: email / account / checkout / newsletter submit / Hemen Al / PII

---

## Aday / leftover

[`candidates/kerem-leftovers.md`](../candidates/kerem-leftovers.md)

---

## Evidence backlog

- [x] Official 3vp static (`capture-observation.mjs`)
- [x] Interact mega / search / menu 375+768 / cart / PDP Renk
- [x] PNG bak → stateFindings
- [x] `npm run validate` — 65 temiz · 0 error · 0 warn
- [x] Newsletter / account / checkout — **yapılmayacak**
