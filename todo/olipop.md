# Todo — OLIPOP (drinkolipop.com)

*Kaynak:* https://drinkolipop.com/ · *Preset:* `default`  
*Tema (storefront):* **Production \| ehouse** · `schema_name`: **Olipop** · `schema_version`: 1.0 · `theme_store_id`: null · shop `olipop-store.myshopify.com`

**Durum:** Mod A walk kapandı — resmi 3vp · leftover kayıtlı  
**PR:** draft (cursor/olipop-discover-a160) · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/olipop/default/` |
| Capture | resmi `scripts/capture-observation.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/olipop/` · `evidence/olipop/` · `todo/olipop.md` · `candidates/olipop-leftovers.md` |
| Gözlem / kanıt | 30 obs · **86 PNG** |

**Kapsam satırı:**  
`OLIPOP · default · Production\|ehouse (Olipop 1.0 custom) · home→PDP→PLP→search→cart drawer→blog→our-story→footer · listicle-advertorial flavors · 30 obs · 86 PNG · 0 yeni şema · leftover: search drawer Liquid error / cart redirect / hybrid PLP / cheat-sheet sidebar`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | [x] obs | [x] |
| Mega nav / cart drawer / mobile menu | [x] obs | [x] cart boş+dolu · menu 375/768 |
| Predictive search overlay | [x] obs | ⛔ 0 PNG (Liquid error) |
| PDP `/products/blackberry-vanilla` | [x] obs | [x] |
| PLP `/collections/drinks` | [x] obs | [x] hybrid meta |
| Search `/search?q=grape` | [x] obs | [x] |
| Blog list `/blogs/digest` | [x] obs | [x] |
| Blog post CEO message | [x] obs | [x] |
| Content `/pages/our-story` | [x] obs | [x] |
| Listicle `/blogs/digest/get-to-know-the-olipop-flavors` | [x] obs | [x] |
| Footer newsletter (home scroll) | [x] obs | [x] |
| Privacy policy | ⛔ leftover | — |
| `/cart` sayfası | ⛔ redirect PLP | drawer obs |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [x] | [x] | [x] | [x] |
| 2 | navigation-header-mega | home | [x] | [x] | [x] | [x] |
| 3 | media-video-hero | home | [x] | [x] | [x] | [x] |
| 4 | product-showcase-tabs | home | [x] | [x] | [x] | [x] |
| 5 | editorial-image-with-text | home | [x] | [x] | [x] | [x] Why OLIPOP |
| 6 | testimonial-quote-carousel | home | [x] | [x] | [x] | [x] press slider |
| 7 | editorial-image-with-text-2 | home | [x] | [x] | [x] | [x] 9g/6g lines |
| 8 | editorial-image-with-text-3 | home | [x] | [x] | [x] | [x] real ingredients |
| 9 | social-proof-brand-logos | home | [x] | [x] | [x] | [x] retailers |
| 10 | footer-columns-newsletter | home | [x] | [x] | [x] | [x] footer element |
| 11 | global-cart-drawer | home | [x] | [x] | [x] | [x] boş |
| 12 | global-cart-drawer.2 | home | [x] | [x] | [x] | [x] dolu warmupUrl |
| 13 | global-menu-drawer | home | [x] 375/768 | [x] | [x] | [x] |
| 14 | global-predictive-search | home | ⛔ | [x] | [x] | [x] 0 PNG leftover |
| 15 | product-info-main | product-detail | [x] | [x] | [x] | [x] |
| 16 | editorial-custom-content | product-detail | [x] | [x] | [x] | [x] ingredients |
| 17 | product-showcase-related | product-detail | [x] | [x] | [x] | [x] Rebuy |
| 18 | product-showcase-grid-plp | collection | [x] | [x] | [x] | [x] |
| 19 | search-results | search | [x] | [x] | [x] | [x] |
| 20 | blog-list-main | blog-list | [x] | [x] | [x] | [x] |
| 21 | editorial-image-with-text.2 | blog-list | [x] | [x] | [x] | [x] blog-hero |
| 22 | lead-capture-newsletter-band | blog-list | [x] | [x] | [x] | [x] |
| 23 | blog-post-main | blog-post | [x] | [x] | [x] | [x] #MainContent |
| 24 | hero-slideshow | about-brand | [x] | [x] | [x] | [x] our-story hero |
| 25 | editorial-rich-text | about-brand | [x] | [x] | [x] | [x] our-story body |
| 26 | editorial-image-with-text | listicle-flavors | [x] | [x] | [x] | [x] article banner |
| 27 | blog-post-main | listicle-flavors | [x] | [x] | [x] | [x] named flavor roster |
| 28 | product-showcase-grid-featured | listicle-flavors | [x] | [x] | [x] | [x] Featured Pops |
| 29 | blog-list-main | listicle-flavors | [x] | [x] | [x] | [x] Related Articles |
| 30 | lead-capture-newsletter-band | listicle-flavors | [x] | [x] | [x] | [x] Digest subscribe |

---

## Aday / leftover

[`candidates/olipop-leftovers.md`](../candidates/olipop-leftovers.md)

---

## Evidence backlog

- [x] Mod A walk home → PDP → collection → search → cart drawer → blog → our-story → footer
- [x] Listicle-advertorial walk `/blogs/digest/get-to-know-the-olipop-flavors` (5 obs · 15 PNG)
- [x] Resmi 3vp capture-observation (86 PNG)
- [x] `npm run validate` temiz
- [ ] Interact (mega hover, tab toggle, FAQ) — sonraki tur
