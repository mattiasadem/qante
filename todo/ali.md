# Todo — Ali (ikas Theme Store)

*Kaynak:* https://dev-alitheme.ikas.shop/  
*Theme Store:* https://themes.ikas.com/themes/4857cf85-064f-42ba-afc6-9aba4d5b8a43  
*Preset:* `default`  
*Tema (görülen, uydurulmadı):* **Ali** · developer **ikascom** · Theme Store UUID **`4857cf85-064f-42ba-afc6-9aba4d5b8a43`**  
*Theme Store title:* **Ali | ikas Theme Store**

**Storefront fingerprint (okundu, uydurulmadı):**  
Platform **ikas** · `window.Shopify` **undefined** · `Shopify.theme` **ABSENT** · `x-powered-by: ikas` · `__IKAS_DATA__` + `IkasEvents`  
`storefrontThemeId` `74f53e77-93a4-4e2f-b000-749142d53f82` · `storefrontId` `d61280e7-8d90-4733-a630-98bcd92d60ba` · `storefrontRoutingId` `e09807cc-f767-402d-ae5e-c6476dac578e`  
`salesChannelId` `2a4cbf94-dd59-4c43-8f9a-a5a4e728428b` · `merchantId` `2a064ff8-b678-4f35-b163-20e70e5eec4d`  
`storeName` / `merchantName` `dev-alitheme` · domain `dev-alitheme.ikas.shop` · `apiUrl` `https://api.myikas.com/api/sf/graphql`  
locale `tr` · `TRY` · `logoText` **ALİ** · `og:site_name` `https://dev-alitheme.ikas.shop`

**Durum:** Mod A walk + resmi 3vp + interact  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/ali/default/` |
| Observation | **25** |
| Yeni şema | **0** |
| Capture | resmi `capture-observation.mjs` + `capture-interaction.mjs` |
| Parallel | yalnız `observations/ali/`, `evidence/ali/`, `todo/ali.md`, `candidates/ali-leftovers.md` |

**Kapsam satırı:**  
`Ali · default · ikas Theme Store UUID 4857cf85-064f-42ba-afc6-9aba4d5b8a43 · home→PDP puffer-laptop-sleeve-14- COLOR Black→Gray→PLP /tum-urunler→search?s=kahve→cart empty/filled/qty→iletisim→sss→blog+french-press→404 · 25 obs · 0 yeni şema · leftover: mega yok / about 404 / cookie yok / ?q= / Kahve ATC boş / reviews / bundle`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + hero / pwi / koleksiyon / cats / IWT / countdown / blog / about-metin / quotes / marquee / footer | [x] | [ ] capture |
| Header kapalı — mega yok (hamburger 1440 dahil) | [x] | [ ] interact initial |
| Predictive search `kahve` | [x] | [ ] 375/768/1440 |
| Mobile + desktop hamburger 375/768/1440 | [x] | [ ] interact |
| PDP Puffer Laptop Sleeve 14" COLOR Black→Gray | [x] | [ ] interact |
| PLP `/tum-urunler` 30 ürün | [x] | [ ] capture |
| Search `/search?s=kahve` 1 ürün | [x] | [ ] capture |
| Cart `/cart` empty + filled + qty | [x] | [ ] interact |
| Cart drawer empty + filled + qty | [x] | [ ] interact |
| Contact `/pages/iletisim` | [x] | [ ] PII yok |
| FAQ `/pages/sss` | [x] | [ ] capture |
| Blog list + French Press yazısı | [x] | [ ] capture |
| 404 | [x] | [ ] capture |
| İade `/pages/iade-kosullari` | [x] | [ ] capture |
| About | ⛔ `/pages/hakkimizda` 404 · hikâye home `ali-srt` | leftover |

---

## Bileşen roster

25 observation. 0 yeni şema.

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | navigation-header-mega | home | [ ] | mega yok | reuse | [x] |
| 2 | hero-slideshow | home | [ ] | ali-hslider | reuse | [x] |
| 3 | product-showcase-grid-featured | home | [ ] | ali-pwi | reuse | [x] |
| 4 | collection-nav-image-cards | home | [ ] | ali-hm | reuse | [x] |
| 5 | collection-nav-slider | home | [ ] | ali-cats | reuse | [x] |
| 6 | editorial-image-with-text | home | [ ] | ali-edm | reuse | [x] |
| 7 | promo-banner-countdown | home | [ ] | ali-cd | reuse | [x] |
| 8 | blog-list-main | home | [ ] | ali-bloglist | reuse | [x] |
| 9 | editorial-rich-text | home | [ ] | ali-srt hakkında | reuse | [x] |
| 10 | testimonial-quote-carousel | home | [ ] | ali-ts | reuse | [x] |
| 11 | promo-scrolling-marquee | home | [ ] | ali-tb | reuse | [x] |
| 12 | footer-columns-newsletter | home | [ ] | e-posta yok | reuse | [x] |
| 13 | global-predictive-search | home | [ ] | kahve | reuse | [x] |
| 14 | global-menu-drawer | home | [ ] | 375/768/1440 | reuse | [x] |
| 15 | global-cart-drawer | home | [ ] | sleeve | reuse | [x] |
| 16 | product-info-main | product-detail | [ ] | COLOR Gray | reuse | [x] |
| 17 | product-showcase-grid-plp | collection | [ ] | /tum-urunler | reuse | [x] |
| 18 | search-results | search | [ ] | ?s=kahve | reuse | [x] |
| 19 | cart-page-main | cart | [ ] | empty/filled/qty | reuse | [x] |
| 20 | lead-capture-form | contact | [ ] | PII yok | reuse | [x] |
| 21 | faq-collapsible-tabs | faq-support | [ ] | sss | reuse | [x] |
| 22 | blog-list-main | blog-list | [ ] | ali-bloghome | reuse | [x] |
| 23 | blog-post-main | blog-post | [ ] | french-press | reuse | [x] |
| 24 | page-content-main | not-found | [ ] | ali-nf | reuse | [x] |
| 25 | page-content-main | policy | [ ] | iade | reuse | [x] |

---

## Interact (pixel-check capture sonrası)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | initial | mega yok — leftover |
| global-predictive-search | input | `kahve` → Kahve Paketi |
| global-menu-drawer | open/changed | hamburger 375/768/**1440** · KAHVE tık |
| global-cart-drawer | initial/filled/changed | boş + sleeve + adet |
| cart-page-main | initial/filled/changed | boş → qty1 ₺18 → qty2 ₺36 |
| product-info-main | changed | COLOR Black → Gray |

---

## Aday / leftover

[`candidates/ali-leftovers.md`](../candidates/ali-leftovers.md)

---

## Evidence backlog

- [ ] Official 3vp static (`capture-observation.mjs`)
- [ ] Interact header / search / cart / menu / PDP Color
- [ ] PNG bak → stateFindings
- [ ] `npm run validate` — 0 error
