# De Soi leftovers / adaylar

*Liste URL:* https://desoi.com · *Canlı vitrin:* https://drinkdesoi.com  
*Tema (görülen):* `Drink De Soi - New Theme Dev` · `schema_name` **Hyper** · `schema_version` **1.3.2** · custom (`theme_store_id` null) · shop `drinkdesoi.myshopify.com` · theme id `185084608879`  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: desoi-listed-domain-parked  
Gerekçe: DTC-69 listed URL `https://desoi.com` AboveDomains for-sale sayfası (Apache, expired cert `strategicts.net`, IP 103.224.182.246). Shopify yok. Canlı mağaza `https://drinkdesoi.com`.  
Örnekler: https://desoi.com  
Öneri: leftover — walk canlı vitrinde  
Karar: onay bekliyor

---

ADAY: desoi-rebuy-smart-cart  
Gerekçe: Native Hyper `#CartDrawer` yok. Rebuy Smart Cart `#rebuy-cart` / `.rebuy-cart__flyout`. `/cart` → `/?viewcart=true`. `global-cart-drawer` observation var (zorlama map).  
Örnekler: https://drinkdesoi.com/  
Öneri: commerce overlay adayı  
Karar: onay bekliyor

---

ADAY: desoi-judgeme-reviews  
Gerekçe: PDP `#…__1780175691d45328e1` (LORA 5★) + `#…__1780175221d418bda4` (4.9 / 170) ve `/pages/reviews` (4.5 / 2799). Reviews ailesi yok.  
Örnekler: https://drinkdesoi.com/products/spritz-italiano-cocktail · https://drinkdesoi.com/pages/reviews  
Öneri: ertele — reviews şeması yok  
Karar: onay bekliyor

---

ADAY: desoi-stockist-find-us  
Gerekçe: Home `#…__section_find_us_KXHixA` ve `/pages/find-us` Stockist widget (adres arama, Target / Sprouts). Store locator şeması yok.  
Örnekler: https://drinkdesoi.com/ · https://drinkdesoi.com/pages/find-us  
Öneri: leftover iframe/widget  
Karar: onay bekliyor

---

ADAY: desoi-alia-popup  
Gerekçe: `#alia-root-302414` aria-label="Promotional popup" Shop mega hover'ı keser. Tema section değil.  
Örnekler: https://drinkdesoi.com/  
Öneri: leftover app overlay  
Karar: onay bekliyor

---

ADAY: desoi-blockify-ip  
Gerekçe: Blockify `region-restrictions-365` / `ip-blocker-embed.min.js` (`blockUnknownBots`, VPN). Headless Playwright Google'a yönlenir; capture için script abort edildi (node_modules, repo dışı).  
Örnekler: https://drinkdesoi.com/  
Öneri: leftover — bot/VPN duvarı  
Karar: onay bekliyor

---

ADAY: desoi-no-header-search  
Gerekçe: Header'da arama ikonu / `predictive-search` yok. Sonuç yalnız `/search?q=spritz` (11–16).  
Örnekler: https://drinkdesoi.com/  
Öneri: leftover  
Karar: onay bekliyor

---

ADAY: desoi-404  
Gerekçe: `404 Page not found / Continue Shopping`. Taksonomide 404 pageType yok. `page-content-main` observation var.  
Örnekler: https://drinkdesoi.com/pages/this-page-does-not-exist-qante  
Öneri: ertele / candidate  
Karar: onay bekliyor

---

## 404 / ince sayfalar

`desoi.com` — parked  
`/cart` — home `?viewcart=true` (Rebuy)  
`/account` — PII / auth  
`/pages/sms-concierge` · `/pages/sign-up-for-sms` · `/pages/email-signup` · `/pages/refer-a-friend` — PII / SMS  
`/pages/get-vip-access` · `/pages/brand-ambassador-program` · `/pages/corporate-gifting` — capture yok  
`/pages/botanical-glossary` — about slideshow CTA  
Flavor LPs (`/pages/spritz-italiano` vb.) — PDP/PLP ile aynı aile

## Aynı şablon, ikinci capture yok

`/collections/all` — `collection` şablonu bestsellers ile aynı  
FAQ grup 2–5 (locator / shipping / sustainability / subscriptions) — 3vp var, interact yalnız ilk grup  
PDP Lemon Elderflower — Spritz Italiano ile aynı template  
Blog `Welcome to our store` marquee (stories/recipes)

## Capture leftover

- `global-menu-drawer` 1440 — hamburger 0px (beklenen)  
- Header predictive — yok  
- Native cart page — yok  
- Home `section_find_us` / PDP find-us — leftover widget  
- Home spacer `spacer_6JzYPa` height 0  
- `global-quick-view` height 0  
- PDP Judge.me  
- Newsletter / contact / quiz e-posta — PII

## Bilinçli atlananlar

- Newsletter Sign up / birthday form / contact form submit  
- Account / checkout / kupon  
- SMS concierge  
- Refer-a-friend e-posta  
- Cookie / Alia / chat overlay  
- Blockify access wall (script abort, sayfa içeriği alındı)
