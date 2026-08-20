# Glossier leftovers

*Kaynak:* https://www.glossier.com/ · *Preset:* `default`  
*Tema:* **3/19 Release 3.49.0** (Glossier custom) · `schema_name`: Glossier · `schema_version`: 3.49.0 · shop `glossier-admin.myshopify.com`

---

## Bilinçli atlananlar

- Checkout / payment — PII
- Newsletter email submit — PII
- Account / LOG IN — auth
- Back-in-stock (BIS) modal email — PII
- Welcome mat / country selector modals — açılmadı

---

## On-site blog yok

ADAY: glossier-external-blog  
Gerekçe: `/blogs/gloss` → 404. Footer “Into The Gloss” → https://intothegloss.com/ (harici). On-site blog hub/article observation yok.  
Örnekler: `/blogs/gloss` 404 · footer link intothegloss.com  
Öneri: content walk için `/pages/about` kullanıldı  
Karar: onay bekliyor

---

## Cart sayfası boş kabuk

ADAY: glossier-cart-page-shell  
Gerekçe: `/cart` title “Your Shopping Cart” ama `#shopify-section-template--22278939115765__main` h=0. Sepet yalnız `#bag` mini drawer.  
Örnekler: cart section h=0 · bag drawer dolu/boş  
Öneri: `global-cart-drawer` observation; `cart-page-main` yok  
Karar: onay bekliyor

---

## PDP reviews app widget

ADAY: glossier-pdp-reviews-app  
Gerekçe: `#shopify-section-template--22278944096501__823d5e80-e111-4a2b-87a2-92e125b5e5c0` reviews__section-wrapper ~933px — Yotpo/Judge.me benzeri tam feed (7106 reviews, Write a review). Mevcut şema yok; inline yıldız product-info-main'de.  
Örnekler: `#reviewsApp` · Search for a question or a keyword  
Öneri: leftover — üçüncü parti reviews app  
Karar: onay bekliyor

---

## Cloudflare bot checkpoint

ADAY: glossier-shopify-bot-wall  
Gerekçe: Paralel / hızlı Playwright yüklemelerinde “Just a moment… Your connection needs to be verified”. Sıralı capture + viewport arası gecikme ile aşıldı.  
Örnekler: 3. viewport 1440 ilk koşuda fail · 60–90s cooldown sonrası OK  
Öneri: capture notu — şema değil  
Karar: onay bekliyor

---

## About sayfası ek bloklar

- `#shopify-section-template--22278939705589__9ee85520-…` — “Here at Glossier” rich text (890px) — observation yok (editorial-rich-text-2 adayı)
- `#shopify-section-template--22278939705589__6fb52539-…` — Into The Gloss origin story — observation yok
- `#shopify-section-template--22278939705589__0392b98f-…` — “We believe in thoughtful design” — observation yok

Gerekçe: Mod A kapsamında about için 3 temsil section yeterli; kalan rich text blokları delta/not.

---

## Predictive search sonuçları

Gerekçe: `#headerSearch` modal static capture — typed query + ürün kartları interact leftover (Mod A static).  
Öneri: qante-discover-interact follow-up

---

## SAVE WITH SETS accordion (PDP)

Gerekçe: `pv-save-with-sets` product-info-main içinde — ayrı section değil. Bundle kartları buy box altında.
