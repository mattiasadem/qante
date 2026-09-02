# Bookshop leftovers

*Kaynak:* https://book-online-store-1.myshopify.com/  
*Preset:* default · *Slug:* `bookshop`  
*Vendor:* Speedo Themes (üçüncü taraf Shopify 2.0; Theme Store resmi değil)  
*Product:* https://speedothemes.com/products/bookshop-shopify-bookstore-theme-shopify-os-2-0  

**Tema (görülen):** Copy of Bookshop · `schema_name` Bookshop **1.5.0** · `theme_store_id` null · shop `book-online-store-1.myshopify.com`  
**Unlock:** `/password` → vendor demo şifre `1` (bu host). Başka host yok.

## Yok / gitmedi

| Madde | Ne oldu |
|---|---|
| Newsletter popup `#shopify-section-newsletter-popup` | 0px — “Someone liked and Buy” social-proof overlay. Observation yok |
| Meet the team `meet_the_team_bm4Pmb` | Our Book Author: Neil Gaiman / Jane Austen / Leo Tolstoy / Agatha Christie / Stephen King. Taksonomide team/author mosaic yok — aday |
| About `multirow_Wn9nLx` | İki stacked image+text (BEST SELLERS / FAVORITE). Tek section iki çift — leftover |
| About `custom_image_4y4b9y` | Our Book Author + 5 görsel (home team’in about kopyası) |
| About `count_down_rJKBkX` | 500 Products / 4500 Happy Customer / 200 Partner Brand — **istatistik sayaç**, kampanya countdown değil. `promo-banner-countdown` uydurulmadı |
| Contact `map_ph9hfy` | 684px boş kutu (iframe harita). Şema yok |
| Wishlist `/pages/wishlist` | “No products were added to your wishlist.” Boş custom page — `product-showcase-favorites` slider değil |
| Compare `/pages/compare` | “There are no products available to compare.” Sayfa; drawer değil. `global-compare-drawer` uydurulmadı |
| Cart footer `cart-footer` | Boş sepetken 0px |
| Account / login | Header Log in — tıklanmadı |
| Checkout | Cart Check out — tıklanmadı |
| Newsletter Subscribe / contact Send | PII — dur |
| Policy / Terms of Service | Footer link; walk dışı |
| Quick-view dialog | PLP `quick-add__submit` = ADD TO CART. `#QuickAdd` var; ayrı quick-view overlay kanıtı yok |

## Aday (yeni şema yok)

- **author-mosaic / meet-the-team** — yazar portre ızgarası (home + about). Taxonomy `features-benefits` zorlama.
- **stats-counter** — 3 sayı + etiket + metin (about). Countdown timer değil.
- **contact-map** — gömülü harita bloğu.
- **wishlist-page / compare-page** — boş custom template.
- **social-proof-popup** — “Someone liked and Buy … 10 Minutes Ago From Paris”.

## Açık soru

- PDP buy box countdown + stok + teslimat tarihi — `product-info-main` delta; ayrı şema mı?
- Testimonial yanında ürün kartı — şemaya slot mu, leftover mı? Delta’ya yazıldı.
- Mega Shop paneli görsel/promo içeriyor mu? Interact’te bakılacak.
- Kart hover ikinci görsel / quick-add — interact.
- Tüm ürünler tek varyant — `emit:variant.change` kanıtı yok.
