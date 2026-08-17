# Todo — Taiga (Woolman, paid) · Sage

*Kaynak:* https://taiga-demo-sage.myshopify.com/  
*Preset:* `default` (Taiga / Sage) · *Slug:* `taiga`  
*Theme Store:* https://themes.shopify.com/themes/taiga · Woolman

**Tema (vitrinde okundu, uydurulmadı):**  
`Shopify.theme.name` = **Taiga / LIVE update**  
`schema_name` = **Taiga** · `schema_version` = **8.1.0** · `role` = **main** · theme id `159278366958`  
`theme_store_id` = **null** (canlı JS; uydurulmadı)  
shop `taiga-demo-sage.myshopify.com`

**Durum:** Mod A walk + resmi 3vp + interact + validate (devam)  
**PR:** draft — **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/taiga/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Observation | **38** |
| Parallel | yalnız `observations/taiga/`, `evidence/taiga/`, `todo/taiga.md`, `candidates/taiga-leftovers.md` |

**Kapsam satırı:**  
`Taiga · default · Taiga / LIVE update / schema_name Taiga 8.1.0 · theme_store_id null · home→PDP→PLP→collections→search→cart→about/contact→blog→404 · 38 obs · 0 yeni şema · leftover: candidates/taiga-leftovers.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/hero/collections/featured×3/hotspots/marquee/look/countdown/video/footer | obs | capture |
| Header overlay + Shop mega 1440 | interact | capture |
| Predictive search `backpack` | interact 3vp | capture |
| Mobile menu 375 + 768 | interact | capture |
| Cart drawer empty + filled + qty | interact 3vp | capture |
| PDP Jääkäri M Desert Brown → Olive Green | interact | capture |
| PLP `/collections/all` | obs | capture |
| Collections index `/collections` | obs | capture |
| Search `/search?q=backpack` | obs | capture |
| Cart `/cart` empty + filled + qty | interact 3vp | capture |
| About `/pages/about` | obs | capture |
| Contact form (submit yok) | obs | capture |
| Journal + article | obs | capture |
| 404 leftover | obs | capture |
| Email / account / checkout / newsletter submit | ⛔ dur | — |

---

## Home remap (kanıt)

- announcements-bar → `promo-announcement-bar`
- header overlay + Shop drawer mega → `navigation-header-mega`
- hero Savotta Jääkäri → `hero-slideshow`
- collection cards Backpacks/Duffel/Stoves/Accessories → `collection-nav-image-cards`
- Savotta copy + CTAs → `editorial-rich-text`
- THE JÄÄKÄRI LINEUP → `product-showcase-grid-featured`
- image-with-hotspots Genius Features → `media-lookbook-banner`
- sliding_text Modern/Elegant → `promo-scrolling-marquee`
- featured_look Go EXTREME → `media-lookbook-banner-2`
- countdown 50% off → `promo-banner-countdown`
- featured-collection-2 → `product-showcase-grid-featured-2`
- the-rich-text Keikka → `editorial-rich-text-2`
- hero-2 video → `media-video-hero`
- harness grid → `product-showcase-grid-featured-3`
- footer + newsletter (submit yok) → `footer-columns-newsletter`
- drawer-menu → `global-menu-drawer`
- #drawer-search → `global-predictive-search`
- drawer-cart → `global-cart-drawer`

---

## Interact (pixel-check)

- [ ] `navigation-header-mega` — 1440 Shop tık mega
- [ ] `global-predictive-search` — `backpack` 375/768/1440
- [ ] `global-menu-drawer` — 375 + 768 hamburger
- [ ] `global-cart-drawer` — boş / Backpack 202 qty 1 / qty 2
- [ ] `cart-page-main` — boş + dolu + qty
- [ ] `product-info-main` — Desert Brown → Olive Green

Stop: email / account / checkout / newsletter submit / contact Send / PII

---

## Aday / leftover

[`candidates/taiga-leftovers.md`](../candidates/taiga-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact mega / search / menu 375+768 / cart / PDP color
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
- [ ] Newsletter / account / checkout — **yapılmayacak** (PII)
