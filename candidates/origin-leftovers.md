# Origin leftovers

*Kaynak:* https://theme-origin-demo.myshopify.com · *Tema:* Origin 15.1.0 · `theme_store_id` **1841** (beklenen 2291 değil)

Şemaya sokulmayan / durulan şeyler. Kanıtsız tip uydurulmadı.

## Chrome

- **Mega menü yok.** Header’da koleksiyon kolonları / `header-drawer` / `summary.header__icon--menu` yok.
- **Mobil hamburger yok.** 375/768: logo + sepet. `global-menu-drawer` observation açılmadı.
- **Predictive search opener 375/768 = 0×0.** Yalnız 1440’ta 44×44 büyüteç. İki `details-modal.header__search` kopyası (Dawn).
- **Header’da nav link yok.** Shop / Journal / Contact / Shipping footer’da.

## Boş / sıfır yükseklik

- Home ilk `rich-text` (`__rich-text`) ~100px, metin yok — observation yok.
- PDP `related-products` ~64px, metin yok — observation yok.
- Cart `cart-footer` boş sepetken 0px.

## Sayfa / form

- `/pages/about` başlığı **Contact** — about-brand şablonu yok.
- `/pages/faq`, `/pages/contact`, `/policies/privacy-policy`, `/policies/terms-of-service` → 404.
- `/search` (sorgu yok) yalnız “Search” başlığı.
- `/collections` tek text kart: Home page → `/collections/frontpage`.
- İkinci PDP `/products/stuffitboxcase-classic` aynı `main` şablon — ayrı observation yok.
- Contact form + newsletter **gönderilmedi** (PII).
- `/account/login` duruldu (hesap/PII).
- Checkout / Buy it now tıklanmadı.

## Taksonomi

- 404 `template-404` → `page-content-main` reuse; `pageType` 404 listede yok.

## Interact doğrulandı

- Predictive search 1440: `bag` → SUGGESTIONS + 2Unfold Bag. 375/768 kare yok.
- Cart drawer: boş / dolu $995 / adet 2 = $1,990. Checkout yok.
- PDP Color Brown → Gray: ana görsel + etiket değişti.

## Açık soru

- Theme Store kimliği: canlı `theme_store_id` **1841**, görev metni 2291. Hangisi güncel listing?
