# Todo — Vacation (vacation.inc)

*Kaynak:* https://vacation.inc · *Preset:* `default`  
*Tema (storefront, uydurulmadı):* **görünmüyor** — `Shopify.theme` null · custom Next/headless vitrin · shop `vacationoils.myshopify.com` · Theme Store adı yok

**Durum:** Mod A walk — home chrome + section roster yazıldı; inner path Cloudflare Turnstile; resmi 3vp sırada  
**PR:** (draft · **main'e merge yok**)

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/vacation/default/` |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/vacation/`, `evidence/vacation/`, `todo/vacation.md`, `candidates/vacation-*.md` |

**Kapsam satırı:**  
`Vacation · default · tema adı yok (custom headless) · vacationoils.myshopify.com · home→PDP→PLP→search→cart→content→footer→mobile · (sayılar capture sonrası)`

---

## Şablon checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + announcement/header/footer | [ ] | [ ] |
| Menu / search / cart drawer / mobile | [ ] interact | [ ] |
| PDP `/products/classic-whip-spf-30` | [ ] CF risk | [ ] |
| PLP `/collections/all` | [ ] CF risk | [ ] |
| Search `/search?q=whip` | [ ] CF risk | [ ] |
| Cart `/cart` · `?cart=true` drawer | [ ] | [ ] |
| About `/about-us` | [ ] CF risk | [ ] |
| FAQ `/faq` | [ ] CF risk | [ ] |
| Contact `/contact` | [ ] form **gönderilmedi** | [ ] |
| Policy `/privacy-policy` | [ ] | [ ] |
| Blog `/blogs/news` | ⛔ 404 candidate | — |
| Pepsi sweepstakes `/pepsi` | ⛔ candidate | — |
| 404 | ⛔ candidate | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [ ] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [ ] | reuse | [ ] |
| 3 | global-menu-drawer | home | [ ] | [ ] | reuse | [ ] |
| 4 | global-predictive-search | home | [ ] | [ ] | reuse | [ ] |
| 5 | global-cart-drawer | home | [ ] | [ ] | reuse | [ ] |
| 6 | hero-slideshow | home | [ ] | [ ] | reuse | [ ] |
| 7 | editorial-rich-text | home | [ ] | [ ] | reuse | [ ] |
| 8 | editorial-layered-images | home | [ ] | [ ] | reuse | [ ] |
| 9 | product-showcase-grid-featured | home | [ ] | [ ] | reuse | [ ] |
| 10 | editorial-image-with-text | home | [ ] | [ ] | reuse | [ ] |
| 11 | testimonial-quote-carousel | home | [ ] | [ ] | reuse | [ ] |
| 12 | editorial-image-with-text-2 | home | [ ] | [ ] | reuse | [ ] |
| 13 | editorial-image-with-text-overlay | home | [ ] | [ ] | reuse | [ ] |
| 14 | media-shop-the-feed | home | [ ] | [ ] | reuse | [ ] |
| 15 | footer-columns-newsletter | home | [ ] | [ ] | reuse | [ ] |

---

## Aday / leftover

[`candidates/vacation-leftovers.md`](../candidates/vacation-leftovers.md)

---

## Evidence backlog

- [ ] Home static 3vp
- [ ] Chrome interact (menu / search / cart)
- [ ] PDP / PLP / search / content (CF)
