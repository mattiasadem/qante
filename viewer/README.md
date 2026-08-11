# QANTE Viewer

Lokal envanter tarayıcısı — şema, gözlem, 3 viewport evidence, kapsama ve sağlık raporu.

## Çalıştır

```bash
cd qante/viewer
node server.mjs          # → http://localhost:3456
PORT=4000 node server.mjs
QANTE_NO_OPEN=1 node ... # tarayıcıyı otomatik açma
```

Bağımlılık yok (Node built-in `http`). Disk tek kaynak; cache `fs.watch` ile kendini geçersiz kılar, olmazsa "Yenile" veya `?fresh=1`.

## Dosya düzeni

```
viewer/
  server.mjs        route + statik servis
  lib/inventory.mjs sections/ + observations/ + evidence/ okuma, cache, satır üretimi
  lib/facets.mjs    filtre, facet sayımı, gruplama, kapsama matrisi
  lib/health.mjs    tutarsızlık kuralları
  public/           index.html · app.js · style.css
```

## Görünümler

| Sekme | Ne yapar |
|---|---|
| **Gözat** | Sol listede gruplanmış kayıtlar, sağda şema + gözlemleri + evidence |
| **Adaylar** | `candidates/` — aday kategoriler + şemaya sığmayanlar |
| **Kapsama** | Satır = şema, kolon = tema/preset. Yeşil 3/3, sarı kısmi, kırmızı SS yok, nokta hiç gözlem yok |
| **Sağlık** | Hata/uyarı/bilgi bulguları + düzeltme komutu (tıkla → kopyalanır) |

## Filtreler

Sol panelde facet: **Tema · Preset · Sayfa · Kategori · Scope · Viewport · Durum**.
Sayılar "kendi boyutu hariç diğer filtreler uygulanmış" halde hesaplanır, o yüzden çoklu seçim sayıları sıfırlamaz.

Durum filtreleri: evidence `tam / kısmi / yok`, kayıt `gözlemi olan / gözlemi olmayan / yetim (şema yok)`.
"Kapsanmayan kategori" bloğu taksonomide olup hiç gözlemlenmemiş kategorileri listeler — boşluk avı için.

Tüm filtre + seçim + viewport durumu URL'de: link paylaşılabilir, F5 dayanıklı.

**Gruplama** (üst bar): Şema · Tema · Tema›Preset · Sayfa · Kategori · Scope.

**Kısayol:** `/` arama · `j`/`k` liste gezinme · görsele tıkla → lightbox · lightbox'ta `←` `→` `Esc`.

## API

| Endpoint | Döner |
|---|---|
| `/api/stats` | sayaçlar, taksonomi sürümü, gruplama seçenekleri, sağlık özeti |
| `/api/items?...` | filtrelenmiş **hafif** satırlar, gruplanmış + facet sayıları |
| `/api/facets?...` | sadece facet sayıları |
| `/api/schema/:id` | tek şema + bağlı gözlemler (tam JSON) |
| `/api/observation?id=` | tek gözlem (tam JSON) |
| `/api/coverage` | şema × tema matrisi |
| `/api/candidates` | aday kategoriler + sığmayanlar (`candidates/*.md`) |
| `/api/health` | tutarsızlık listesi |

Liste endpoint'i tam JSON gövdesi taşımaz; detay ayrı istekle gelir — binlerce kayıtta da hafif kalır.
Her endpoint `?fresh=1` ile cache'i atlar.

## Sağlık kuralları

**error:** `json-parse` · `orphan-observation` (schemaId'ye karşılık şema yok) · `missing-schema-id` · `no-selector` · `evidence-file-missing` · `token-in-styleknobs` (renk/font/spacing şemaya girmez)
**warn:** `no-evidence` · `partial-viewports` · `observation-id-mismatch` · `path-field-mismatch` · `schema-unobserved` · `category-not-in-taxonomy` · `no-category` · `platform-name-in-binding`
**info:** `page-not-in-taxonomy` · `no-slots`
