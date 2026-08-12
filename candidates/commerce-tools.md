# ADAY: commerce-tools

**Durum:** bekliyor (haftalık taksonomi onayı)  
**Kaynak:** Hyper (Shopify) · Sprint 0

## Gerekçe

Bundle builder, quick order list, ürün karşılaştırma gibi **etkileşimli satın alma araçları** mevcut 18 kategoriye temiz oturmuyor.

- `product-showcase` = vitrin / liste (kart grid)
- Bunlar = kullanıcı ürün seçip paket/karşılaştırma kuruyor (araç)

Zorlamayla `product-showcase` veya `comparison` altına sokmak yanlış granülarite.

## Örnekler (görüldü / belgelendi)

| Örnek | Nerede | Not |
|---|---|---|
| Bundle builder | **Ceramide home canlı** → şema: `commerce-tools-products-bundle` | “Saving 20% On Bundle” |
| Bundle (docs) | Hyper/Trove theme docs | “kendi paketini kur” |
| Compare drawer | Hyper default → şema: `global-compare-drawer` | Overlay; kategori adayıyla hizalı |
| Quick order list | Hyper feature sözlüğü | B2B / toptan |

## Öneri

Yeni kategori: **`commerce-tools`**  
Compare drawer şimdilik `global` şema olarak duruyor; kategori kararı gelince `kategori` alanı güncellenir.

## Karar

- [ ] Onayla → `taxonomy/v0.2.0.json`’a ekle
- [ ] Reddet → hangi mevcut kategoriye map edileceğini yaz
- [ ] Ertele → Sprint 1
