# Todo — Function Health (functionhealth.com)

*Kaynak:* https://www.functionhealth.com · *Preset:* `default`  
*Tema (görülen, uydurulmadı):* **custom Astro** — `_astro/Header.astro`, `HeroSection.astro`, `FlutieHero.astro`, `NotificationBanner.astro`, `SearchModal.astro`, `Footer.astro` + Svelte (`svelte-eqom1r` biomarker library). Shopify/Webflow/Next theme adı **yok**. Vercel `dpl_7mvL1Czvfn4yQvDNfopMVfgteSq7`.  
*Platform:* custom marketing site · üyelik checkout `my.functionhealth.com` (PII — girilmedi)

**Durum:** Mod A walk yazılı — resmi 3vp kuyrukta  
**PR:** draft · **main'e merge yok**

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/functionhealth/default/` |
| Capture | resmi `scripts/capture-observation.mjs` + `scripts/capture-interaction.mjs` |
| Şema | **0 yeni** — mevcut tiplere observation + delta |
| Parallel | yalnız `observations/functionhealth/`, `evidence/functionhealth/`, `todo/functionhealth.md`, `candidates/functionhealth-*.md` |

**Kapsam satırı:**  
`Function Health · default · custom Astro (tema adı yok) · home→pricing(PDP analog)→what-we-test(PLP)→search overlay→cart 404→content→footer→mobile · 56 obs · 0 yeni şema · leftover candidates/functionhealth-*.md`

---

## Walk checklist

| Şablon | Durum | 3vp |
|---|---|---|
| Home + header/footer/announcement | ⬜ written | [ ] |
| Mega (1440 hover) | ⛔ yok — düz link | leftover |
| Search overlay `.fh-search-modal` | ⬜ interact yazılı | [ ] |
| Mobile hamburger 375/768 | ⬜ interact yazılı | [ ] |
| PDP analog `/pricing` üyelik | ⬜ | [ ] |
| PLP analog `/what-we-test` library | ⬜ | [ ] |
| Search `/search` | ⛔ 404 | leftover |
| Cart `/cart` · `/products` · `/collections` | ⛔ 404 | leftover |
| How it works | ⬜ | [ ] |
| Imaging `/imaging` | ⬜ | [ ] |
| About `/about` | ⬜ | [ ] |
| FAQ `/faq` | ⬜ | [ ] |
| Contact `/contact-us` | ⬜ form **gönderilmedi** | [ ] |
| Journal `/journal` + article | ⬜ | [ ] |
| Policy privacy | ⬜ | [ ] |
| What people say | ⬜ | [ ] |
| 404 custom | ⬜ | [ ] |
| Gift / for-business / TCM / careers | ⛔ leftover | — |
| Signup / login / checkout | ⛔ PII | — |

---

## Bileşen roster

| # | id | sayfa | Screenshot | Not | JSON | Done |
|---|---|---|---|---|---|---|
| 1 | promo-announcement-bar | home | [ ] | [x] | reuse | [ ] |
| 2 | navigation-header-mega | home | [ ] | [x] mega yok | reuse | [ ] |
| 3 | hero-slideshow | home | [ ] | [x] tek slayt | reuse | [ ] |
| 4 | features-multicolumn | home | [ ] | [x] Testing is easy | reuse | [ ] |
| 5 | promo-scrolling-marquee | home | [ ] | [x] tracked | reuse | [ ] |
| 6 | collection-nav-cards | home | [ ] | [x] #what-we-test | reuse | [ ] |
| 7 | testimonial-quote-carousel | home | [ ] | [x] Huberman | reuse | [ ] |
| 8 | social-proof-brand-logos | home | [ ] | [x] logocarousel | reuse | [ ] |
| 9 | editorial-dynamic-grid | home | [ ] | [x] member-stories | reuse | [ ] |
| 10 | trust-icon-row | home | [ ] | [x] gold-standard | reuse | [ ] |
| 11 | comparison-quick-table | home | [ ] | [x] | reuse | [ ] |
| 12 | features-multicolumn-2 | home | [ ] | [x] medical-board | reuse | [ ] |
| 13 | product-showcase-featured | home | [ ] | [x] #pricing | reuse | [ ] |
| 14 | faq-collapsible-tabs | home | [ ] | [x] | reuse | [ ] |
| 15 | editorial-rich-text | home | [ ] | [x] cta-section | reuse | [ ] |
| 16 | footer-columns-newsletter | home | [ ] | [x] | reuse | [ ] |
| 17 | global-predictive-search | home | [ ] interact | [x] | reuse | [ ] |
| 18 | global-menu-drawer | home | [ ] 375/768 | [x] 1440 N/A | reuse | [ ] |
| 19 | editorial + featured + comparison + insight + trust | product-detail | [ ] | [x] /pricing | reuse | [ ] |
| 20 | collection-banner + plp library + imaging blurb | collection | [ ] | [x] /what-we-test | reuse | [ ] |
| 21 | timeline + mobilelab + add-ons | how-it-works | [ ] | [x] | reuse | [ ] |
| 22 | hero + marquee + scans-pricing | imaging | [ ] | [x] | reuse | [ ] |
| 23 | split + logos + people + leadership | about-brand | [ ] | [x] | reuse | [ ] |
| 24 | faq library | faq-support | [ ] | [x] | reuse | [ ] |
| 25 | chat cards + faq | contact | [ ] | [x] PII yok | reuse | [ ] |
| 26 | journal + article | blog-* | [ ] | [x] | reuse | [ ] |
| 27 | privacy body | policy | [ ] | [x] | reuse | [ ] |
| 28 | not-found-section | not-found | [ ] | [x] | reuse | [ ] |
| 29 | spotlight + listing | what-people-say | [ ] | [x] | reuse | [ ] |

---

## Interact (kareye bakılacak)

| Bileşen | State | Sonuç |
|---|---|---|
| navigation-header-mega | open | ⛔ hover How it works mega yok |
| global-predictive-search | initial, input | ferritin yazılacak |
| global-menu-drawer | open | 375/768 hamburger |
| faq-collapsible-tabs | changed | capture sonrası yoklanacak |
| cart | filled | ⛔ cart yok |

---

## Aday / leftover

[`candidates/functionhealth-leftovers.md`](../candidates/functionhealth-leftovers.md)  
[`candidates/functionhealth-404s.md`](../candidates/functionhealth-404s.md)

---

## Evidence backlog

- [ ] Claiming obs resmi 3vp
- [ ] Search + menu interact (PNG bak)
- [ ] Newsletter / contact / signup — **yapılmayacak** (PII)
- [ ] PNG bak → stateFindings
