# AppSchema Standardı — v0 (Awaiting user approval)

*Tarih: 2026-08-19 · Brief deliverable: APPS envanteri · SectionSchema ile paralel sözleşme*

**Bu dosya uygulama şemasının tamamının sözleşmesidir.** Section şeması için [`schema-standard.md`](./schema-standard.md) geçerlidir. İkisi çelişirse her biri kendi alanında kazanır.

**Neden var:** Shopify App Store ve head-only entegrasyonlar (piksel, bar, popup, reviews, BNPL) tema section dilinden ayrı bir katmandır. QANTE bunları tema kodu üretmeden envanterler — hangi yüzeyi enjekte ettikleri, hangi DataSource'a bağlandıkları ve hangi hook noktalarına oturdukları.

**Doğrulama:** `node scripts/validate-apps.mjs` — bu dosyadaki her kural orada kod olarak var. Prosa ile kod çelişirse **kod bug'dır**, prosa doğrudur.

**Durum:** v0 genişletilmiş 15 alan — **Awaiting user approval**. Onaylanmadan üretim kodu türetilmez.

---

## 1. Katman kuralı

```
Ne işe yarar  → amac          (tek Türkçe cümle, görünüm anlatma)
Neden gerekli → sorun         (1–2 cümle: merchant/vitrin boşluğu)
Nerede görünür → scope + yuzey (kullanıcıya görünen grammar yüzeyleri)
Merchant ayarı → ayarlar       (SectionSchema slot grameri — editör sözleşmesi)
Nasıl bağlanır → entegrasyon + hookNoktalari + bagimliliklar
Veri          → dataBindings   (schema-standard.md §4 DataSource listesi)
Davranış      → actions        (schema-standard.md §5 action grameri)
Kaynak        → link           (resmi public URL — App Store veya doğrulanmış ana site)
```

Store Leads / Diego sayıları `candidates/shopify-apps.md` skorboard'unda tutulur.

---

## 2. Zorunlu üst seviye alanlar

Her uygulama şeması **tam olarak** bu 15 anahtarı taşır. Eksik olamaz; fazlası `_` ile başlar (`_note`, `_kaynak`).

| Alan | Tip | Kural |
|---|---|---|
| `id` | string | Dosya adıyla birebir aynı (uzantısız). `app-{kategori}-{slug}` |
| `kategori` | enum | §3 |
| `varyant` | string | Kısa vendor slug (`judgeme`, `klaviyo`, `hextom-qab`) |
| `scope` | enum | §4 |
| `amac` | string | **Tek Türkçe cümle** — neyi çözer. Görünüm anlatma |
| `sorun` | string | **1–2 Türkçe cümle** — merchant/vitrin boşluğu. Pazarlama metni değil |
| `link` | string | Resmi public URL (`https://…`). App Store tercih; uydurma slug yasak |
| `yuzey` | array | §5 — kapalı yüzey id listesi. Saf pikselde `[]` |
| `entegrasyon` | array | §6 |
| `ayarlar` | object | §7 — merchant editör alanları (slot grameri). Saf pikselde `{}` |
| `dataBindings` | array | §8 — `{ name, source, params? }`. Pikselde `[]` ok |
| `actions` | array | schema-standard.md §5 — boş `[]` yasak; yoksa `["yok"]` |
| `hookNoktalari` | array | schema-standard.md §6 — `mount:{bolge}.{konum}`. Head-only pikselde `[]` |
| `bagimliliklar` | array | Oturduğu section schema id'leri. Yoksa `[]` |
| `ikasKarsilik` | string | ikas karşılığı; bilinmiyorsa `yok` |

**Gözlem katmanı:** `observations/` ve `evidence/` bu PR'da uygulama için **zorunlu değil** — tema section'larından bilinçli ayrım. Sahte gözlem üretilmez.

---

## 3. `kategori` — dondurulmuş enum

| Değer | Ne |
|---|---|
| `pixel` | Head-only izleme / analitik (GA4, Meta Pixel, GTM…) |
| `capture` | E-posta / SMS / sohbet yakalama (Klaviyo, Privy, Inbox…) |
| `reviews` | Yorum, puan, UGC |
| `loyalty` | Sadakat, puan, ödül |
| `merchandising` | Sepet önerisi, sosyal feed, kişiselleştirme |
| `bar` | Duyuru / ücretsiz kargo şeridi |
| `payments` | BNPL / ödeme mesajlaşması |
| `builder` | Sayfa oluşturucu runtime (PageFly, Shogun) |
| `wishlist` | Favori listesi |

Yeni kategori §10 süreciyle eklenir.

---

## 4. `scope` — dondurulmuş enum

| Değer | Ne |
|---|---|
| `head` | UI yok — script/pixel only |
| `overlay` | Popup, drawer, launcher, floating tab |
| `in-flow` | PDP / ana sayfa bloğu, tema akışı içinde |
| `checkout` | Checkout UI extension |
| `page` | Tam sayfa runtime (builder landing) |

Çoklu scope gerçekliği tek enum ile temsil edilir — baskın davranış seçilir; ikincil scope `_note` ile belgelenebilir.

---

## 5. `yuzey` — kapalı grammar yüzey seti

Uygulamanın mağaza vitrinine enjekte ettiği **yüzey kimlikleri**. Saf `head` piksellerde `[]`.

| yuzey | Ne |
|---|---|
| `announcement_bar` | Üst duyuru şeridi |
| `free_shipping_bar` | Ücretsiz kargo eşiği şeridi |
| `popup_modal` | Merkez modal / lightbox |
| `flyout` | Köşe / kenar flyout |
| `spin_wheel` | Çark / gamified capture |
| `embedded_form` | Sayfa içi gömülü form |
| `review_stars` | Yıldız özeti (kart / buy box) |
| `review_widget` | Tam yorum listesi |
| `review_carousel` | Yorum kaydırıcı |
| `ugc_gallery` | Fotoğraf / video UGC grid |
| `review_floating_tab` | Kenarda sabit yorum sekmesi |
| `bnpl_messaging` | Taksit / BNPL rozeti |
| `loyalty_launcher` | Sadakat launcher / drawer tetikleyici |
| `loyalty_points_badge` | Puan rozeti |
| `loyalty_page` | Sadakat hesap sayfası |
| `wishlist_button` | Kalp / favori butonu |
| `wishlist_drawer` | Favori listesi paneli |
| `wishlist_page` | Favori listesi sayfası |
| `product_recs` | Ürün öneri bloğu |
| `cart_drawer` | Sepet çekmecesi içi blok |
| `social_proof_toast` | Son satın alma / aktivite toast |
| `trust_badge` | Güven rozeti şeridi |

**Açık soru:** Builder SDK'ları (PageFly, Shogun) doğrudan yüzey üretmez — çocuk section'lar çıkarılır; şemada `yuzey: []` ve `_note` ile belgelenir.

Yeni yüzey §10 süreciyle eklenir.

---

## 6. `entegrasyon` — dondurulmuş enum

| Değer | Ne |
|---|---|
| `web-pixel` | Shopify Web Pixel / head script |
| `app-embed` | Theme app embed (body/head) |
| `app-block` | Theme app block (section içi) |
| `script-tag` | Legacy ScriptTag |
| `checkout-extension` | Checkout UI extension |
| `page-runtime` | Builder tam sayfa runtime |

---

## 7. `ayarlar` — merchant editör sözleşmesi

Uygulamanın merchant'a sunduğu **yapılandırma alanları**. SectionSchema `slots` ile aynı gramer ([`schema-standard.md` §3](./schema-standard.md#3-slots--içerik-alanları)):

- Her anahtar bir slot: `{ "tip", "zorunlu", … }`
- 13 dondurulmuş `tip`: `text`, `richtext`, `image`, `video`, `icon`, `link`, `button`, `number`, `boolean`, `datetime`, `ref`, `object`, `array`
- `ref.hedef`: `product` · `collection` · `menu` · `blog` · `page` · `promo` · `brand`
- Saf `head` piksellerde **`{}`** — merchant-facing UI yok

Amaç: gerçek uygulamayı reverse-engineer edip tema tarafında aynı işi yapan section'ın editör sözleşmesini çıkarmak.

---

## 8. `dataBindings` — mağaza verisi

Section şeması ile **aynı** DataSource sözlüğü ([`schema-standard.md` §4](./schema-standard.md#4-databindings--mağaza-verisi)).

- Her eleman: `{ "name", "source", "params"? }`
- Platform adı yasak (`Shopify collection` yazılmaz)
- Saf piksel / head-only uygulamalarda `[]` kabul edilir

---

## 9. `actions` ve `hookNoktalari`

Section şeması ile **aynı gramer** ([`schema-standard.md` §5–§6](./schema-standard.md)).

- `actions`: boş `[]` yasak — etkileşim yoksa `["yok"]`
- `hookNoktalari`: `mount:{bolge}.{konum}` — head-only pikselde `[]`
- Overlay wiring (§5.2) geçerli: `emit:cart.add` → `bagimliliklar` içinde `global-cart-drawer`

---

## 10. `bagimliliklar`

Uygulamanın tipik olarak oturduğu **section schema id** listesi. Örnek değerler:

- `product-info-main`
- `global-cart-drawer`
- `promo-announcement-bar`
- `lead-capture-newsletter-band`

Yoksa `[]`.

---

## 11. Sözlük genişletme

1. Bu dosyada yeni enum / yüzey tanımla
2. `scripts/validate-apps.mjs` dondurulmuş listesini güncelle
3. PR aç — onay beklenir

---

## 12. Dosya düzeni

```
app-schema-standard.md     ← bu sözleşme
apps/{id}.json             ← bir dosya = bir uygulama tipi
candidates/shopify-apps.md ← takip skorboard'u (Listeler sekmesi)
observations/              ← tema gözlemleri; uygulama gözlemi zorunlu değil
```

---

## 13. Kayıt kontrol listesi

- [ ] 15 zorunlu alan tam
- [ ] `id` = dosya adı (`app-{kategori}-{slug}`)
- [ ] `link` doğrulanmış `https://` URL
- [ ] `sorun` 1–2 cümle, pazarlama değil
- [ ] `kategori`, `scope`, `yuzey`, `entegrasyon` kapalı sette
- [ ] `ayarlar` slot grameri; pikselde `{}`
- [ ] `amac` tek cümle, görünüm yok
- [ ] `actions` boş değil
- [ ] `dataBindings` platform-bağımsız DataSource
- [ ] `candidates/shopify-apps.md` satırı `done` (şema bu PR'da)
- [ ] `node scripts/validate-apps.mjs` temiz
