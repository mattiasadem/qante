# Component-üretilebilirlik denetimi

*`/qante-discover` Mod D · 2026-08-13 · 59 şema · sözleşme: schema-standard.md §4/5/6*

**DURUM: ÇÖZÜLDÜ + ZORLANIYOR.** Aşağıdaki A ve B bulguları düzeltildi; kurallar artık üç katmanda kalıcı:
- Sözleşme: `schema-standard.md` §5.1 (olay kipi) + §5.2 (overlay wiring tablosu)
- Validator: `emit:cart.update` emekli action olarak ERROR; `ACTION_REQUIRES_DEP` ile wiring eksikliği ERROR
- Şemalar: 14 kaçak kapatıldı → `node scripts/validate-schemas.mjs` 0 error

Validator "sözleşmeye uygun mu" der; bu denetim **"bu şemadan component kurulabilir/wire'lanabilir mi"** diye sorar. Buton olayı (etiket propu görünmüyordu) bu katmanın örneğiydi — §3.3b ile kapandı. Aşağıdakiler aynı katmanın kalan bulguları (artık geçmişe dönük kayıt).

## Sonuç

| Katman | Durum |
|---|---|
| Slot renderlenebilirliği (tip/zorunlu/maxLen/item/alanlar/hedef/button) | ✓ 59/59 temiz |
| DataSource sözlüğü | ✓ hepsi dondurulmuş listede |
| hookNoktalari bölge.konum | ✓ hepsi dondurulmuş sözlükte |
| styleKnobs (bütçe + sözlük) | ✓ (screenshot geçişinde yapıldı) |
| **actions olay adı tutarlılığı** | ✗ 1 kaçak (aşağıda A) |
| **global overlay bağımlılık wiring'i** | ✗ sistemik boşluk (aşağıda B) |

---

## A · actions: `cart.update` kaçağı

Bildirim olayları geçmiş zaman (`cart.added`, `cart.updated`), komutlar emir kipi (`cart.add`). Tek kaçak:

| Dosya | Şu an | Olması gereken | Neden |
|---|---|---|---|
| `cart-page-main` | `emit:cart.update` | `emit:cart.updated` | Sepet sayfası miktar/silme ile içeriği değiştirir → header sayacı ve drawer'ın dinlediği kanonik "sepet değişti" bildirimini yayınlamalı (`global-cart-drawer` `emit:cart.updated` kullanıyor) |

## B · Bağımlılık wiring'i: overlay tetikleyen section overlay'i bildirmiyor

`bagimliliklar` = "gerekli global bileşenler". Bir kart "hızlı ekle" (`emit:cart.add`) veya "hızlı görüntüle" (`emit:product.quickView`) sunuyorsa o overlay sayfada bulunmak zorunda. Şu an sadece `product-info-main` (cart-drawer) ve `navigation-header-mega` (cart-drawer + predictive-search) bunu bildiriyor; geri kalan tetikleyiciler `bagimliliklar: []`.

**Kural 1 — `emit:cart.add` → `global-cart-drawer`:**
`product-showcase-favorites` · `-related` · `-tabs` · `-grid-plp` · `-grid-featured` · `commerce-tools-products-bundle` · `global-quick-view`

**Kural 2 — `emit:product.quickView` → `global-quick-view`:**
`media-lookbook-banner` · `media-shop-the-feed` · `media-lookbook-slider` · `search-results` · `comparison-quick-table` · `editorial-custom-content` · `product-showcase-favorites` · `-related` · `-recently-viewed` · `-tabs` · `-grid-plp` · `-grid-featured`

(Bazıları ikisini birden yayınlıyor → iki bağımlılık.)

---

## Bilinçli olarak defect DEĞİL

- `collection-nav-banners` / `collection-nav-cards` dataBinding boş: `items` tamamen **manuel slot** (görsel+başlık+link merchant girer), koleksiyon listesinden çekmiyor. Doğru.
- `["yok"]` kullanan 3 şema: gerçekten etkileşimsiz. Doğru.

## Açık soru (düşük güven — otomatik düzeltmedim)

1. "Compare" checkbox'ı olan `search-results` / `product-showcase-grid-plp` `global-compare-drawer`'a bağımlı mı? Ekran görüntüsünde Compare var ama compare olayı yayınlamıyorlar. Eklensin mi?
2. `emit:cart.add` (emir) vs `listen:cart.added` (bildirim) — arada komutu bildirime çeviren controller var sayılıyor. Şema seviyesi doğru; event-bus tasarımı burada değil.
3. `global-cart-drawer.sepetNotu` (`text`, maxLen 200) merchant içeriği gibi modellenmiş, ama `filled` kanıtında "Order Note" **müşterinin** doldurduğu bir alan olarak çıkıyor. Merchant muhtemelen yalnız etiketi/açık-kapalı olmasını ayarlıyor. Kanıtla çözülemedi, dokunulmadı. Kaynak: `/qante-discover-interact` · 2026-08-13.

---

## C · Boş state'in gizlediği yapı (yeni katman)

*`/qante-discover-interact` · 2026-08-13 · ilk koşu: `global-cart-drawer`*

Boş yakalanan bir overlay, şemanın **yarısını görünmez kılıyor**. Cart drawer'ın dolu hâli 4 slot ortaya çıkardı (`onerilerBasligi`, `bosSepetBasligi`, `bosSepetAltMetni`, `bosSepetKoleksiyonlari`, `bosSepetButonu`) — hiçbiri boş screenshot'ta yoktu. Aynı risk şu bileşenlerde duruyor ve `filled` state'i çekilmeli:

| Şema | Neden boş kanıt yetersiz |
|---|---|
| `navigation-header-mega` | `megaPaneller` (kolon/başlık/link/görsel/promo) kapalı panelde tamamen gizli — mevcut kanıt sadece kapalı header; şema DOM'dan yazılmış, kanıt yok. Ayrıca mobil hamburger+akordeon ayrı state |
| `cart-page-main` | Satır tablosu, adet, ara toplam, kupon hiç görünmüyor |
| `global-compare-drawer` | Karşılaştırma tablosu boşken sütun/satır dilbilgisi yok |
| `global-predictive-search` | Öneri/sonuç/boş-sonuç katmanları yazı yazmadan çıkmıyor |
| `global-quick-view` | Dialog kapalıyken varyant/adet/ATC bloğu ölçülemez |
