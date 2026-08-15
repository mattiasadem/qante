# Made In leftovers / adaylar

*Store:* https://madeincookware.com · *Tema (görülen):* yok — custom headless (Tailwind, UUID section, Radix drawer). `Shopify.theme` boş.  
*Tarih:* 2026-08-15

Şema icat edilmedi. En yakın mevcut tipe observation yazıldıysa burada tekrarlanmaz.

---

ADAY: madeincookware-reviews-widget  
Gerekçe: PDP Reviews ~9224px ve `/pages/reviews` “Over 100,000 Five-Star Reviews” ~7986px. `testimonial-quote-carousel` değil; reviews ailesi yok. Home “Trusted By 1,400,000+ Cooks” `editorial-rich-text` zorlama.  
Örnekler: https://madeincookware.com/products/the-stainless-sets/10-piece · https://madeincookware.com/pages/reviews  
Öneri: ertele — reviews şeması yok  
Karar: onay bekliyor

---

ADAY: madeincookware-cart-page  
Gerekçe: `/cart` → home. Sepet yalnız Radix drawer (`#nav-cart` / `#mobile-nav-cart`). `/cart.js` ve `/cart/add.js` HTML döner (headless). `cart-page-main` yok.  
Örnekler: https://madeincookware.com/cart  
Öneri: ertele — drawer observation yeterli  
Karar: onay bekliyor

---

ADAY: madeincookware-plp-full-grid  
Gerekçe: `#ec756669-6545-423e-a846-880f2fa43196` ~30960px / 138 ürün. Element SS pratik değil; observation toolbar (“Shop All Cookware”). Filtre `changed` yok.  
Örnekler: https://madeincookware.com/collections/cookware  
Öneri: leftover — ilk satır/viewport karesi veya şema `infiniteScroll` kanıtı  
Karar: onay bekliyor

---

ADAY: madeincookware-compare-sets  
Gerekçe: PDP “Compare Sets” başlık 52px; tablo atası unique id taşımıyor. `comparison-quick-table` adayı.  
Örnekler: https://madeincookware.com/products/the-stainless-sets/10-piece  
Öneri: selector netleşince observation  
Karar: onay bekliyor

---

ADAY: madeincookware-store-locator  
Gerekçe: `/pages/locations` — “910 locations found” + mi filter. Taksonomide store-locator yok.  
Örnekler: https://madeincookware.com/pages/locations  
Öneri: ertele / candidate  
Karar: onay bekliyor

---

ADAY: madeincookware-privacy-host  
Gerekçe: Privacy Policy `privacy.madeincookware.com` — storefront chrome yok.  
Örnekler: https://privacy.madeincookware.com/privacy-policy  
Öneri: envanter dışı (ayrı host)  
Karar: onay bekliyor

---

ADAY: madeincookware-account  
Gerekçe: `#nav-account` Log In. Auth / PII.  
Örnekler: header Log In  
Öneri: envanter dışı  
Karar: onay bekliyor

---

ADAY: madeincookware-attentive  
Gerekçe: `#attentive_overlay` / `iframe#attentive_creative` SMS signup. Capture dismiss. Şema yok.  
Öneri: overlay dismiss; envanter dışı  
Karar: onay bekliyor

---

ADAY: madeincookware-home-ab  
Gerekçe: Home section UUID’leri oturum/cihazla değişiyor. Erken 1440: 2-up promo `#47a2b461`, video `#6013c664`, Chef Favorites `#558335b7`, newsletter `#73f150e1` / `#555dc8f5`. Son 3vp: tek hero `#29f410c6`/`#f4b1872c`, Behind The Craft `#bea7a895`, Shop by Category `#9bf9d6c3`. Claim edilen obs son taramaya göre; kaybolan A/B observation silindi.  
Öneri: leftover — A/B varyantları  
Karar: onay bekliyor

---

ADAY: madeincookware-pdp-375-size  
Gerekçe: 13-Piece pill 375’te görünür; resmi `capture-interaction` iki koşuda da changed PNG = initial PNG (249417B). 768/1440 $1,199. Üçüncü deneme yok.  
Örnekler: https://madeincookware.com/products/the-stainless-sets/10-piece  
Öneri: leftover — 375 size `changed`  
Karar: onay bekliyor

---

## İnce / tekrar

- Home A/B (yukarı).  
- Industry LPs (`/industry/*`) gezilmedi.  
- `/products` Shop All 58645px — PLP leftover ile aynı.  
- Cart qty `changed` yok.  
- Newsletter / contact submit — PII, yapılmayacak.
