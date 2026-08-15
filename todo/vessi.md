# Todo — Vessi (vessi.com)

*Kaynak:* https://vessi.com · *Preset:* `default`  
*Tema (vitrinde görülen, uydurulmadı):* **vessi-storefront/main-us** · `schema_name`: **Vessi** · `schema_version`: 1.0.0 · `theme_store_id`: null (custom) · shop `vessi-footwear.myshopify.com` · theme id `129927970901` · role `main`

**Durum:** Mod A walk kapandı · 46 obs · 164 PNG · 0 yeni şema  
**PR:** draft https://github.com/mattiasadem/qante/pull/58 · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/vessi/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/vessi/`, `evidence/vessi/`, `todo/vessi.md`, `candidates/vessi-*.md` |

**Kapsam satırı:**  
`Vessi · default · vessi-storefront/main-us (Vessi 1.0.0, custom) · home→PDP→PLP→search→cart-drawer→content→footer→mobile · 46 obs · 164 PNG · 0 yeni şema · leftover: announcement-dismiss / Men-tab / search-375 / reviews / Gorgias / quick-add / ID.me / map`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer | done | [x] (announcement leftover) |
| Women mega 1440 / search `weekend` 1440 / cart empty+filled / mobile menu | done | [x] (search 375/768 leftover; cart 375 filled = PDP) |
| PDP `/products/womens-weekend-classic-marble-white` | done | [x] |
| PLP `/collections/women` | done | [x] |
| Search `/search?q=weekend` (64) | done | [x] |
| Cart `/cart` → `/#cart` drawer | done | — sayfa yok |
| Our Story `/pages/our-story` | done | [x] |
| Contact (form **yok**; e-posta tile + Live Chat) | done | [x] |
| Blog `/blogs/the-forecast` + `best-waterproof-shoes` | done | [x] |
| Privacy `main#MainContent` | done | [x] |
| Help / returns / warranty / sizing | done | [x] |
| 404 | done + leftover | [x] |
| Newsletter / claim / ID.me / tracking | ⛔ PII yok | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] leftover | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [x] + Women 1440 | [x] | reuse | [x] |
| 3 | hero-slideshow | home | [x] | [x] | reuse | [x] |
| 4 | product-showcase-tabs | home | [x] Women; Men missing | [x] | reuse | [x] |
| 5 | editorial-image-with-text | home banner | [x] | [x] | reuse | [x] |
| 6–9 | collection-nav-image-cards ×4 | home | [x] | [x] | reuse | [x] |
| 10 | promo-scrolling-marquee | home | [x] | [x] | reuse | [x] |
| 11 | editorial-dynamic-grid | home rain | [x] | [x] | reuse | [x] |
| 12 | media-shop-the-feed | home IG | [x] | [x] | reuse | [x] |
| 13 | faq-collapsible-tabs | home | [x] waterproof | [x] | reuse | [x] |
| 14 | footer-columns-newsletter | home | [x] PII yok | [x] | reuse | [x] |
| 15 | global-cart-drawer | home | [x] empty + filled 768/1440 | [x] | reuse | [x] |
| 16 | global-predictive-search | home | [x] 1440 only | [x] | reuse | [x] |
| 17 | global-menu-drawer | home | [x] 375/768 | [x] | reuse | [x] |
| 18–24 | PDP 7 section | product-detail | [x] + size 6 | [x] | reuse | [x] |
| 25 | product-showcase-grid-plp | collection | [x] | [x] | reuse | [x] |
| 26 | search-results | search | [x] | [x] | reuse | [x] |
| 27–30 | Our Story | about-brand | [x] | [x] | reuse | [x] |
| 31–33 | Contact | contact | [x] | [x] | reuse | [x] |
| 34–36 | Blog list + post | blog-* | [x] | [x] | reuse | [x] |
| 37 | page-content-main | policy | [x] | [x] | reuse | [x] |
| 38–45 | help/returns/warranty/sizing | faq-support | [x] + Sizing tab | [x] | reuse | [x] |
| 46 | page-content-main | not-found | [x] leftover | [x] | reuse | [x] |

---

## Interact (piksel değişince)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | [x] 1440 Women mega |
| global-predictive-search | input | [x] 1440 `weekend` 8 products; 375/768 leftover |
| global-cart-drawer | filled | [x] ATC **ui** after size 6; 768/1440 drawer; 375 PDP (ikinci tık kapattı) |
| global-menu-drawer | open | [x] 375/768 `#mobile-menu-drawer` |
| product-showcase-tabs | changed | [ ] 2 deneme — Women kaldı |
| product-info-main | changed | [x] size 6 → Add to Cart |
| faq-collapsible-tabs home | changed | [x] waterproof icon + → − |
| faq-collapsible-tabs help | changed | [x] Sizing tab |
| promo-announcement-bar | initial | [ ] official dismiss `announcement-bar--dismissed` |

---

## Aday / leftover

[`candidates/vessi-leftovers.md`](../candidates/vessi-leftovers.md)

---

## Evidence backlog

- [x] Claiming obs resmi 3vp (42 section + header interact bar)
- [x] Mega / search 1440 / cart / menu / PDP size / FAQ interact
- [ ] Men tab (2 deneme, piksel yok)
- [ ] Announcement 3vp (dismiss class)
- [ ] Search 375/768 (ikon menü içinde)
- [ ] Reviews app / Gorgias / quick-add / size-guide
- [ ] Newsletter / warranty claim / ID.me / tracking — **yapılmayacak** (PII)
