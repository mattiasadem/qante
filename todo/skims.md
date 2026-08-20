# Todo — SKIMS

*Kaynak:* https://skims.com/ · *Preset:* default · *Platform:* Shopify Hydrogen/Oxygen (headless; `shopify-section` yok)

**Şu anki odak:** Mod A first inventory kapalı — statik walk + 3vp evidence

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/skims/default/` |
| Capture | `scripts/capture-observation.mjs` + `scripts/run-skims-captures.mjs` |
| Shop | skims.com · Hydrogen storefront |
| Kapsam satırı | SKIMS · default · home/PDP/collection/search/cart/blog/footer · 22 obs · 66 kanıt · 0 yeni şema |

---

## Checklist — walk rota

Rota: **home → PDP → collection → search → cart/drawer → content/blog → footer**

| # | Sayfa / schemaId | scope | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | home · promo-announcement-bar | global | [x] | [x] | [x] | [x] |
| 2 | home · navigation-header-mega | global | [x] | [x] | [x] | [x] |
| 3 | home · hero-slideshow | page-template | [x] | [x] | [x] | [x] |
| 4 | home · collection-nav-cards | page-template | [x] | [x] | [x] | [x] |
| 5 | home · hero-slideshow (.2) | page-template | [x] | [x] | [x] | [x] |
| 6 | home · promo-grid-banner | page-template | [x] | [x] | [x] | [x] |
| 7 | home · editorial-rich-text | page-template | [x] | [x] | [x] | [x] |
| 8 | home · footer-columns-newsletter | global | [x] | [x] | [x] | [x] |
| 9 | home · global-cart-drawer (empty) | global | [x] | [x] | [x] | [x] |
| 10 | home · global-cart-drawer (.2 filled) | global | [x] | [x] | [x] | [x] |
| 11 | collection · collection-banner | page-template | [x] | [x] | [x] | [x] |
| 12 | collection · product-showcase-grid-plp | page-template | [x] | [x] | [x] | [x] |
| 13 | collection · product-showcase-related | page-template | [x] | [x] | [x] | [x] |
| 14 | collection · collection-nav-cards (.2) | page-template | [x] | [x] | [x] | [x] |
| 15 | search · search-results | page-template | [x] | [x] | [x] | [x] |
| 16 | product-detail · product-info-main | page-template | [x] | [x] | [x] | [x] |
| 17 | product-detail · product-info-tabs | page-template | [x] | [x] | [x] | [x] |
| 18 | product-detail · product-showcase-related | page-template | [x] | [x] | [x] | [x] |
| 19 | product-detail · product-showcase-related (.2) | page-template | [x] | [x] | [x] | [x] |
| 20 | product-detail · testimonial-quote-carousel | page-template | [x] | [x] | [x] | [x] |
| 21 | blog-list · hero-slideshow | page-template | [x] | [x] | [x] | [x] |
| 22 | blog-list · blog-list-main | page-template | [x] | [x] | [x] | [x] |

---

## URL'ler (kanıtlı)

| Sayfa | URL |
|---|---|
| Home | https://skims.com/ |
| PDP (bra) | https://skims.com/products/skims-ultimate-strapless-push-up-bra-clay |
| PDP (cart fill) | https://skims.com/products/tangle-teezer-x-skims-the-ultimate-detangler-straight-to-wavy-clay |
| Collection | https://skims.com/collections/best-sellers |
| Search | https://skims.com/search?q=bra |
| Blog | https://skims.com/blogs/solutions |

---

## Aday / şemaya sığmayan

→ `candidates/skims-leftovers.md`

---

## Evidence backlog

- [x] Home static 3vp (8 section + header)
- [x] Collection / search 3vp
- [x] PDP 3vp
- [x] Blog 3vp
- [x] Cart drawer empty + filled 3vp
- [x] `npm run validate` temiz
