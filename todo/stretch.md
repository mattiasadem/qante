# Todo — Stretch (Shopify) · Snow + Sand + Diffuse

*Kaynak Snow:* https://stretch-theme-snow.myshopify.com/  
*Kaynak Sand:* https://stretch-theme-sand.myshopify.com/  
*Kaynak Diffuse:* https://stretch-theme-amber.myshopify.com/  
*Theme Store:* https://themes.shopify.com/themes/stretch/presets/snow

**Şu anki odak:** Stretch üç resmi preset kapandı

| Preset | Demo |
|---|---|
| snow | https://stretch-theme-snow.myshopify.com/ |
| sand | https://stretch-theme-sand.myshopify.com/ |
| diffuse | https://stretch-theme-amber.myshopify.com/ (Theme Store Diffuse; slug Amber) |

---

## Meta

| | |
|---|---|
| Evidence kökü | `evidence/stretch/{snow,sand,diffuse}/` |
| Observation | Snow **54** · Sand **70** · Diffuse **86** |
| Kanıt | Snow **259** PNG · Sand **325** PNG · Diffuse **371** PNG |
| Yeni şema | **0** |
| Kapsam satırı | Stretch (Diffuse) · 16 sayfa · 86 obs · 371 kare · 0 yeni şema · CRO interact |

---

## CRO interact (2026-08-19)

Snow resmi demo. `scan-affordances` → `capture-interaction.mjs` 375/768/1440. Validate **0**.

| schemaId | states | preset / sayfa |
|---|---|---|
| `before-after-slider` | initial, changed (drag pct:25) | snow/sand/diffuse home |
| `faq-collapsible-tabs` | initial, changed | snow PDP · sand PDP (+ faq-support zaten vardı) |
| `testimonial-quote-carousel` | initial, changed | snow home · sand home · sand landing-campaign · sand home press-2 (önceki tur) |
| `comparison-quick-table` | initial, changed | sand PDP benefits accordion |

**Statik / dur (initial kare yeterli):**

| schemaId | neden |
|---|---|
| `promo-banner-countdown` | Sayaç token; tıklanabilir kontrol yok (snow/sand/diffuse home) |
| `lead-capture-form` | E-posta + submit — PII dur |
| `lead-capture-newsletter-band` | Newsletter submit dur (snow blog-post) |
| `comparison-quick-table` | snow theme-features spec listesi — changer yok |
| `testimonial-quote-carousel` | Tek alıntı, ok yok: snow/sand collection · sand about-brand · diffuse elias |

**Observation yok (şema uydurulmadı):** `commerce-tools-products-bundle` · `product-finder-quiz` · `media-shop-the-feed` · `media-scrolling-gallery`

---

## Faz durumu — Snow

- [x] F1 Home + globals
- [x] F2 Collection / search / cart
- [x] F3 PDP
- [x] F4 Blog / about / lookbook / faq / contact / theme-features
- [x] F5 Interact

## Faz durumu — Sand

- [x] F1 Home + globals
- [x] F2 Collection / search / cart
- [x] F3 PDP
- [x] F4 Blog / about / body-care / ingredients / faq / contact
- [x] F5 Interact
- [x] Theme-features tekrarları atlandı (Snow ile aynı pazarlama sayfası)

## Faz durumu — Diffuse

- [x] F1 Home + globals
- [x] F2 Collection sun + optical / search / cart
- [x] F3 PDP
- [x] F4 Blog / about / lookbook-26 / stores / craftsmanship / elias / titanium / faq / contact
- [x] F5 Interact
- [x] `/collections/all` boş; theme-features 404; lookbook düz 404

---

## Sayfa haritası — Snow

| sayfa | URL | Not |
|---|---|---|
| home | `/` | imza dynamic grid ×3 |
| collection | `/collections/all` | `/collections/jackets` 404 |
| product-detail | `/products/alta-down-jacket-black` | çıplak slug 404 |
| search | `/search?q=jacket` | 20 sonuç |
| cart | `/cart` | boş main; dolu drawer’da |
| blog-list | `/blogs/news` | |
| blog-post | `/blogs/news/new-alta-down-jacket` | |
| about-brand | `/pages/about` | `/pages/about-us` 404 |
| lookbook | `/pages/lookbook` | |
| faq-support | `/pages/faq` | |
| contact | `/pages/contact` | `/pages/contact-us` 404 |
| theme-features | `/pages/theme-features` | aynı tip tekrarları atlandı |

---

## Sayfa haritası — Sand

| sayfa | URL | Not |
|---|---|---|
| home | `/` | hibrit header; Best sellers/Sets sekmeli ızgara |
| collection | `/collections/all` | Shop |
| product-detail | `/products/illuminating-cleansing-gel` | Super glow set ayrı (set) |
| search | `/search?q=oil` | 9 sonuç |
| cart | `/cart` | boş main |
| blog-list | `/blogs/journal` | `/blogs/news` yok |
| blog-post | `/blogs/journal/why-use-facial-oils` | |
| about-brand | `/pages/about` | video var |
| landing-campaign | `/pages/body-care` | Learn menüsünden |
| active-ingredients | `/pages/active-ingredients` | timeline |
| faq-support | `/pages/faq` | |
| contact | `/pages/contact` | |
| lookbook | — | 404 |
| theme-features | `/pages/theme-features` | tekrar, atlandı |

## Interact (Snow)

- [x] Menu drawer (1440’te de hamburger) + Apparel + Presets katmanları
- [x] Arama `jacket` → Products ızgarası
- [x] Sepet boş → Alta ATC → adet 2 (€1.350)
- [x] Featured hover → SM/MD/LG/XL
- [x] PLP Filter çekmecesi
- [x] PDP beden SM → MD (renk `<a>` başka ürüne gider)
- [x] FAQ ilk soru (`summary`, button değil)
- [x] Footer ülke listesi
- [x] About Performance sekmesi
- [x] Lookbook + → Toba Quarter Zip QV
- [x] Search Pages → Size chart satırı

**Açık:** featured slider Next 375/768 gizli, 1440 kare değişmedi. Slideshow ok yok. ~~Before-after sürüklenmedi.~~ Form/kupon yok.

## Interact (Sand)

- [x] 375/768 hamburger + Shop / Learn / Theme / Presets katmanları
- [x] 1440 Learn / Theme / Presets dropdown (Shop koleksiyona gider)
- [x] Arama `oil` → Products ızgarası
- [x] Sepet boş → gel ATC → adet 2 (€72)
- [x] Best sellers → Sets
- [x] Press Go to item 2 (marie claire)
- [x] Hero nokta 2 (ethical beauty) — 375’te de değişti
- [x] PLP Filter çekmecesi
- [x] PDP Skin type accordion (volume tek 50 ml)
- [x] FAQ ilk soru (`summary`)
- [x] Ingredients timeline → hyaluronic acid
- [x] Search Blog posts
- [x] Footer ülke listesi

**Açık:** Theme > demos ok 1440’te tıklanmadı (mobil Theme panelinde snow/diffuse/sand zaten duruyor). ~~Before-after sürüklenmedi.~~ Video play yok. Form/kupon/Buy it now yok.

## Interact (Diffuse)

- [x] 375/768 hamburger + Sun / Optical / Our world / Presets katmanları
- [x] 1440 Our world / Presets dropdown (SUN/OPTICAL koleksiyona gider)
- [x] Arama `sun` → Products ızgarası
- [x] Sepet boş → Traveler ATC → adet 2 (€418)
- [x] Home SUN → OPTICAL
- [x] Hero nokta 2 (Vision, perfectly framed) — 375’te de değişti
- [x] Home hotspot + → Elias QV
- [x] Image-cards 375/768 Capsule slayt (1440 nokta gizli)
- [x] PLP Filter çekmecesi (sun)
- [x] Search Blog posts
- [x] PDP Shipping accordion (renk `<a>` başka ürüne gider)
- [x] FAQ ilk soru (`summary`)
- [x] About timeline → Restoring vision
- [x] Craftsmanship timeline → Titanium
- [x] Elias SUN → OPTICAL
- [x] Titanium hotspot + → Titanium frames kartı
- [x] Footer ülke listesi

**Açık:** 1440 image-cards liste `<a>` sayfa değiştirir, nokta gizli. Elias press tek alıntı, ok yok. ~~Before-after sürüklenmedi.~~ Form/kupon/Buy it now yok.

---

## Sayfa haritası — Diffuse (Amber host)

| sayfa | URL | Not |
|---|---|---|
| home | `/` | hibrit header; SUN/OPTICAL sekmeli ızgara |
| collection | `/collections/sun` | 33 ürün. `/collections/all` boş |
| collection (optical) | `/collections/optical` | 26 ürün + reading_text / featured / overlay |
| product-detail | `/products/sun-traveler-tortoise` | renk ayrı slug (black/red) |
| search | `/search?q=sun` | 37 sonuç |
| cart | `/cart` | boş main |
| blog-list | `/blogs/journal` | `/blogs/news` journal |
| blog-post | `/blogs/journal/traveler-timeless-icon-revisited` | |
| about-brand | `/pages/about` | `/pages/about-us` 404 |
| lookbook | `/pages/lookbook-26` | `/pages/lookbook` 404 |
| landing-campaign | `/pages/stores` | |
| craftsmanship | `/pages/craftsmanship` | |
| elias-collab | `/pages/amber-x-elias-marlowe` | |
| titanium | `/pages/titanium-collection` | |
| faq-support | `/pages/faq` | |
| contact | `/pages/contact` | |
| theme-features | — | 404 |

## Aday / şemaya sığmayan

- newsletter-popup (şema yok; çekimde öldürülür)
- news_modal (şema yok)
- blog-post-prev-next (önceki/sonraki yazı şeridi — şema yok)
