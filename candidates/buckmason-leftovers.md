# Buck Mason leftovers / adaylar

*Store:* https://www.buckmason.com · *Tema (görülen, uydurulmadı):* yok — **Gatsby 5.15.0** (`meta[name="generator"]`). `Shopify.theme` / `schema_name` / `schema_version` / `theme_store_id` yok. `Shopify.shop` yok; `@shopify/consent-tracking-api` v0.1. Shop files `cdn.shopify.com/s/files/1/0123/5065/2473`. `https://buckmason.myshopify.com/` **404** (“This store will be right back”).  
*Tarih:* 2026-08-15

Şema icat edilmedi. Claiming observation yazılan tipler burada tekrarlanmaz.

---

ADAY: buckmason-cart-page  
Gerekçe: `/cart` 200 ama home’a (`/?g=men`) yönlenir. `/cart.js` 404 (Gatsby HTML). Sepet yalnız `global-cart-drawer`. `cart-page-main` yok.  
Örnekler: https://www.buckmason.com/cart  
Karar: leftover

---

ADAY: buckmason-404-empty  
Gerekçe: `/this-page-does-not-exist-qante-404` ve `/policies/privacy-policy` ve `/journal` title `404 - Page not found | Buck Mason` ama `#MainContent` 0px / boş. Header+footer duruyor; gövde yok. Taksonomide 404 pageType yok.  
Örnekler: https://www.buckmason.com/this-page-does-not-exist-qante-404  
Karar: leftover — kanıtsız şema yok

---

ADAY: buckmason-search-no-predictive  
Gerekçe: Overlay `chambray` yazıldı (3vp); öneri/ürün satırı gelmedi (sonuç 0px). Enter home’a (`/?g=men`) kaçıyor. `/search?q=shirt` popular-searches iskeleti, sonuç grid yok.  
Örnekler: https://www.buckmason.com/search?q=shirt  
Karar: leftover — input karesi var, liste yok

---

ADAY: buckmason-plp-shirts-fabric-nav  
Gerekçe: `/collections/mens-shirts` üstte SHOP BY FABRIC kartları (California Oxford, Big Oxford, Chambray/Indigo…). `collection-nav-cards` ailesi. New Arrivals PLP’de yok; temsilci grid orada.  
Örnekler: https://www.buckmason.com/collections/mens-shirts  
Karar: leftover

---

ADAY: buckmason-plp-about-collection  
Gerekçe: PLP alt `plp-module--cdesc` “About the Collection” metin. `editorial-rich-text` / collection-banner metin slot.  
Karar: leftover

---

ADAY: buckmason-plp-filters-changed  
Gerekçe: Filters + Sort bar var. Panel `changed` çekilmedi.  
Karar: leftover

---

ADAY: buckmason-about-stack  
Gerekçe: Our Story Design / Global Partnerships / Knitting Mills promo / Come Have a Drink. 2 temsilci (hero + manifesto).  
Örnekler: https://www.buckmason.com/pages/our-story  
Karar: leftover

---

ADAY: buckmason-knitting-mills  
Gerekçe: `/pages/buck-mason-knitting-mills` uzun factory landing (hero, Made in USA ürün şeridi, timeline, carousel, The Makers, Grown in USA). Tip `editorial-*` / `product-showcase-grid-featured` / `editorial-timeline`.  
Örnekler: https://www.buckmason.com/pages/buck-mason-knitting-mills  
Karar: leftover

---

ADAY: buckmason-our-stores  
Gerekçe: `/pages/our-stores` Take a Tour slider + All Stores by Location + Store Hiring. Locator ailesi yok.  
Örnekler: https://www.buckmason.com/pages/our-stores  
Karar: leftover

---

ADAY: buckmason-faq-hero-contact  
Gerekçe: `#faq-hero` + `help@buckmason.com` / 888-988-5560. PII/form yok; hero leftover.  
Örnekler: https://www.buckmason.com/pages/faq  
Karar: leftover

---

ADAY: buckmason-careers  
Gerekçe: `/pages/careers` hero + Retail/Corporate listing.  
Karar: leftover

---

ADAY: buckmason-gift-card-balance  
Gerekçe: `/pages/gift-card-balance` kart numarası formu — PII.  
Karar: leftover — doldurulmadı

---

ADAY: buckmason-for-ai  
Gerekçe: `/for-ai` text-only collection listesi (crawler). Şema değil.  
Karar: leftover

---

ADAY: buckmason-women-mega  
Gerekçe: 1440 Women / The Journal hover panelleri. Men temsilci.  
Karar: leftover

---

ADAY: buckmason-menu-accordion  
Gerekçe: Mobil MEN satırı alt ağaç. Açılmadı.  
Karar: leftover

---

ADAY: buckmason-pdp-color-link  
Gerekçe: Renk swatch `<a>` (ayrı ürün URL). Beden L interact; Tall length leftover.  
Karar: leftover

---

ADAY: buckmason-third-party  
Gerekçe: OneTrust, Klaviyo, Gladly chat, Grin, GTM, TikTok/Meta/Twitter/Reddit pikseller, Heatmap, AWIN.  
Karar: leftover — şema yok

---

## Bilinçli atlananlar

- `/account` · `orders.buckmason.com/auth` · checkout  
- Newsletter email submit (PII)  
- Gift card number (PII)  
- Catalog opt-out Google Form  
- Returns portal `orders.buckmason.com/returns`  
