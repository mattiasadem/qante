# ADAY: product-finder (kategori)

**Durum:** bekliyor  
**Kaynak:** Obvi (myobvi.com) · Platter custom theme · preset `default`

## Gerekçe

`/pages/supplement-quiz` çok adımlı ürün keşif akışı — e-posta/lead alanı olmadan ikon+etiket seçenekleriyle başlıyor. `lead-capture` değil (form alanı yok). Mevcut 18 kategoride birebir karşılık yok.

## Örnek

| Örnek | Nerede | Not |
|---|---|---|
| Supplement quiz | `https://myobvi.com/pages/supplement-quiz` | İlk ekran: "What is your ultimate health and beauty goal?" + 4 ikon seçeneği |

## Geçici eşleme

Şema: `sections/instance/product-finder-quiz.json` · `kategori: product-showcase` · `varyant: quiz` (taksonomi onayına kadar).

## Karar

- [ ] Onayla → `taxonomy/v0.2.x.json`'a `product-finder` ekle
- [ ] Reddet → `product-showcase` altında kal
- [ ] Ertele
