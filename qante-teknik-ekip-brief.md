# QANTE — Teknik Ekip Brief'i (Pre-Kickoff)
*5 Ağustos 2026 · v1 · Sahip: Islam · Bu doküman dört iş paketini tanımlar; sorularınızı yazılı getirin.*

---

## 1. Bağlam: ne inşa ediyoruz

QANTE, e-ticaret temalarını ve mağaza kurulumlarını üreten AI destekli bir **üretim sistemi**. İlk hedef platform **ikas Studio**; Shopify ve diğerleri sonra. Sistem dört katman:

1. **Bilgi Motoru** — section taksonomisi, crawler, kullanım istatistikleri (reçeteleri besler)
2. **Fabrika** — platform-bağımsız iç temsil (IR), QANTE Base, Figma→IR, AI pipeline, platform compiler'ları
3. **Katalog** — Base üstüne üretilen Temalar / UI Kitler / Presetler
4. **GTM** — migration girişi (KreisBridge), merchant ve ajans kanalları

Bilinmesi gereken iki platform gerçeği: (a) ikas Studio'da **mağaza sahibi yalnızca İçerik modunu görür** — merchant'ın göreceği her şeyi tema geliştirici önceden kurgular; (b) elimizde Studio'ya programatik yazım yapan kanıtlanmış bir hat ve ölçülmüş platform davranışları envanteri var (KreisBridge projesinden geliyor — ayrıntı gerektikçe paylaşılır).

**Çalışma kültürü:** Her iddia bir ölçüme bağlanır. Her iş paketinin bir "kapısı" (kabul kriterleri) vardır. Altın örnekler dondurulur. İlke: *sayaca değil, yayınlanmış çıktıya bak.* Kararlar ve çürütülen denemeler yazılır.

---

## 2. Sözlük

| Terim | Tanım |
|---|---|
| **IR** | Platform-bağımsız iç temsil; her şey önce IR'a, IR'dan platforma compile edilir |
| **DesignTokens** | Renk rolleri, tip ölçeği, boşluk, radius, gölge, kırılma noktaları — stilin tek kaynağı |
| **StyleProfile** | Yoğunluk, buton stili, köşe dili, görsel işleme, motion tercihi |
| **Section** | Sayfanın bağımsız yapı taşı; şemayla tanımlanır (aşağıda) |
| **Slot** | Section'ın içerik alanı (başlık, madde listesi, CTA…) — tip + kısıtlarla tanımlı |
| **DataSource** | Soyut veri bağı: product, productList, collection, cart, customer, search… Compiler platforma çevirir |
| **Action/Event** | Section'ın tetiklediği/dinlediği davranış: addToCart, openDrawer, applyFilter… |
| **Scope** | Section'ın yaşam alanı: `global` (header/footer/duyuru) · `page-template` · `instance` |
| **Hook** | Engine'in genişleme noktası: mount point (slot), event (yayın/abone), filter (veri hattı) |
| **QANTE Base** | Nötr token'lara bağlı, tüm bileşenler + hook'lar yerleşik çıplak tema iskeleti (İş Paketi C) |
| **Preset** | Base üstünde konfigürasyon: tokens + styleProfile + reçeteler + section seçimi + copy tone |
| **Reçete** | Sayfa tipi → sıralı section kategori listesi (ör. PDP reçetesi) |
| **Kapı** | İş kabul eşiği: yeşil geçer, amber insan onayı ister, kırmızı durur |

---

## 3. Mimari omurga

```
                    ┌──────────────────────────────────────┐
                    │              AI PIPELINE              │
                    │  brief → reçete → seçim → şema doldur │
                    └──────────────┬───────────────────────┘
                                   │ (şemaları doldurur, kod üretmez)
┌───────────────┐   ┌──────────────▼───────────────────────┐
│  BİLGİ MOTORU │──▶│            IR + QANTE BASE            │
│ taksonomi,    │   │  components · tokens · hooks · data   │
│ istatistik    │   └──────────────┬───────────────────────┘
└───────────────┘                  │
                    ┌──────────────▼──────────┐   ┌─────────────────┐
                    │       PRESET KATMANI     │   │  COMPILER (ikas) │
                    │ manifest = Base konfig.  │──▶│  → Studio'ya yaz │
                    └─────────────────────────┘   │  (Shopify sonra) │
                                                  └─────────────────┘
```

Değişmez üç ilke: (1) Yapı / İçerik / Stil ayrımı mutlaktır. (2) Hard-coded stil yasaktır — her stil token referansıdır. (3) AI serbest kod üretmez; şema doldurur.

---

## 4. İş Paketi A — Section Envanteri ve Şema İskeleti

### Amaç
E-ticaret sayfalarının "dilbilgisini" çıkarmak: hangi section türleri var, neyi taşırlar, neye bağlanırlar, ne tetiklerler, nerede yaşarlar. Bu şema; AI'ın dolduracağı, Base'in implemente edeceği, crawler'ın ölçekte tarayacağı ortak sözleşmedir.

### Kapsam netleştirmesi
Hedef binlerce siteyi elle gezmek **değildir**. Ekip iskeleti kurar ve **50–100 seçilmiş kaynakla** doğrular; ölçek daha sonra crawler'a devredilir. Kaynak seti:
- Shopify Theme Store: tema feature listeleri (standart sözlük: Cart & checkout / Marketing & conversion / Merchandising / Product discovery) + tema **demo mağazaları**
- ikas temaları: ozy ailesi + Studio kütüphanesindeki tema/UI kitler
- Referans marka listesi (TR/DE ağırlıklı, sektör çeşitliliğiyle — liste birlikte kurulacak)
- Instant/EcomWize tarzı builder'ların template galerileri

### Her section için doldurulacak şema boyutları
1. `id` · `kategori` (tohum taksonomi: 18 kategori, aşağıda Ek-1) · `varyant` (ör. hero-split, hero-video)
2. `amaç` — tek cümle; hangi işi görür
3. `scope` — `global | page-template | instance`
4. `slots[]` — içerik alanları: ad, tip (text/richtext/image/video/icon/button/badge/array), min–maks, zorunluluk
5. `styleKnobs` — hizalama, yoğunluk, medya konumu gibi section-özel ayarlar (token DEĞİL)
6. `dataBindings[]` — DataSource + parametreler (ör. productList: collection|manual|recommended, limit)
7. `actions[]` — tetiklediği/dinlediği olaylar (addToCart, openCart, variantChange, applyFilter, subscribe, navigate, track)
8. `responsive` — kırılma noktalarında davranış notu
9. `bağımlılıklar` — ör. "cart-drawer global bileşenini gerektirir"
10. `hookNoktaları` — bu section'ın önerdiği mount point'ler (İş Paketi B ile ortak dil)
11. `örnekler[]` — kaynak URL + ekran görüntüsü referansı (min 3, farklı sektör)

### Deliverable'lar
- **A1.** `taxonomy/v0.2.json` — tohum 18 kategori üstüne genişletilmiş, versiyonlu taksonomi (aday-kategori kuyruğu süreciyle)
- **A2.** SectionSchema spesifikasyon dokümanı (yukarıdaki boyutların resmi tanımı + JSON Schema)
- **A3.** **20 örnek section tam doldurulmuş** (en az 6 kategoriden, 3'ü global scope)
- **A4.** Kapsam raporu: taranan kaynaklar, sektör dağılımı, şemaya sığmayan gözlemler listesi

### Kapı (kabul kriterleri)
Her şema alanı tanımlı VE 20 örnekte istisnasız doldurulmuş · 3 farklı sektörde çapraz doğrulama yapılmış · "şemaya sığmadı" listesi boş değilse her madde için karar önerisi var · aday-kategori süreci yazılı.

---

## 5. İş Paketi B — Hook Sistemi RFC

### Amaç
Temanın içinde çalışacak uygulamalar (bizim modüllerimiz + ileride üçüncü partiler) için genişleme katmanı. Stratejik ilke: **ikas Studio hook desteği sunmasa bile engine kendi hook katmanını temayla paketleyip gönderir** — platformdan bağımsız bir sözleşme kurarız; platform ileride native destek verirse compiler eşler.

### İnceleme hedefleri (rapora girecek)
1. **WordPress actions & filters** — imperatif model: `add_action`/`add_filter`, öncelik sırası, callback zinciri. Güçlü/zayıf yönleri; sürümleme pratikleri.
2. **Shopify theme app extensions** — deklaratif model: app blocks (merchant'ın yerleştirdiği slot'lar), app embeds (görünmez/overlay), şema tanımları, temaya dokunmadan app dağıtımı. Bizim mount-point tasarımına birebir girdi.
3. (Kısa/opsiyonel) Shopware/BigCommerce genişleme modelleri — tek sayfa karşılaştırma yeter.

### Taslak model (RFC'de doğrulanacak/çürütülecek hipotez)
Üç mekanizma:
- **Mount point (deklaratif):** temada adlandırılmış yuvalar — ör. `mount:pdp.below-gallery`, `mount:cart.before-checkout`, `mount:global.overlay`. Adlandırma sözleşmesi: `mount:{bölge}.{konum}`.
- **Event (yayın/abone):** `event:cart.added`, `event:variant.changed`, `event:page.viewed` — payload şemalı.
- **Filter (veri hattı):** `filter:price.display`, `filter:product.badges`, `filter:search.results` — saf fonksiyon zinciri, öncelik sıralı.

### RFC'nin cevaplamak zorunda olduğu başlıklar
1. **Paketleme:** app kodu temaya nasıl girer — build-time bundle mı, runtime registry mi, ikisi mi? Studio Kod modu (Preact) kısıtlarıyla uyum.
2. **İzolasyon ve güvenlik:** üçüncü parti kod için sınırlar (API yüzeyi, DOM erişimi, ağ çağrıları), inceleme süreci gerekliliği.
3. **Performans bütçesi:** hook başına maliyet tavanı; toplam bütçe; ölçüm yöntemi.
4. **Sürümleme:** hook API semver sözleşmesi; deprecation politikası. *(API'yi kırarsak ekosistemi kırarız — ilk günden yazılı sözleşme.)*
5. **Platform uyumu:** Studio çalışma zamanının bilinen davranışlarıyla çakışmalar (ör. bağlantı tıklarının sayfa geçişine çevrilmesi → drawer açan mount'larda koruma deseni). Dış script/embed politikası **platform sorusudur** — cevap Islam'dan gelecek; RFC iki senaryolu yazılır.
6. **Shopify taşınabilirliği:** mount point → app block eşleme tablosu (kavramsal).

### Deliverable'lar
- **B1.** İnceleme raporu (WP + Shopify, karşılaştırma tablosuyla; maks 6 sayfa)
- **B2.** RFC v1: model + adlandırma sözleşmesi + 6 başlığın cevabı + açık riskler
- **B3.** **Mini PoC:** Base iskeleti içinde çalışan 1 mount + 1 event + 1 filter (ör. PDP'de mount'a takılan bir rozet modülü; cart.added event'ini dinleyen bir bildirim; price.display filter'ı)

### Kapı
RFC'deki her başlık ya cevaplı ya da "açık + karar sahibi + tarih" olarak işaretli · PoC üç mekanizmayı da canlı gösteriyor · Adlandırma sözleşmesi A paketinin `hookNoktaları` alanıyla tutarlı.

---

## 6. İş Paketi C — QANTE Base (çıplak tema iskeleti)

### Tanım (kritik netleştirme)
"Stil atılmamış" ≠ stilsiz. QANTE Base **nötr bir token setine bağlıdır**; hard-coded stil **sıfırdır**. Her renk/boşluk/radius/font bir token referansıdır — preset mekanizması ancak böyle çalışır. Görünüm "sade wireframe estetiği"dir ama mimari olarak tam giydirilebilirdir.

### İçerik
1. **Primitives:** stack, grid, text, image, video, button, link, icon, price, badge, input, divider
2. **Global bölge bileşenleri:** header (+mega menü), footer, announcement bar, cart drawer, arama overlay'i, cookie/consent yuvası
3. **Section bileşenleri:** A paketinden gelen kategori listesinin karşılıkları (ilk hedef: 18 kategoride en az 1'er varyant; A'nın 20 örneğiyle hizalı)
4. **Sayfa şablonları:** home, PDP, collection, landing, content/blog, policy
5. **Hook noktaları:** B'nin adlandırma sözleşmesiyle tüm mount'lar yerleşik
6. **DataSource bağları:** soyut arayüz + Studio compiler'ına giden adaptör katmanı için temiz sınır

### kreis-base ile ilişki (karışmasın)
kreis-base ayrı bir üründür: migration müşterisinin indiği, eski temayı birebir taklit eden fidelity teması. QANTE Base ise temiz üretim bazıdır. Kod paylaşımı ancak bilinçli ve tek yönlü olabilir (kreis-base'den öğrenilen platform davranış korumaları Base'e taşınır); şema/stil mimarisi paylaşılmaz.

### Deliverable'lar
- **C1.** Repo iskeleti + bileşen checklist'i (durum takipli)
- **C2.** Nötr token seti v1 (`tokens/neutral.json`)
- **C3.** Studio'da render edilen çıplak demo: 6 sayfa şablonu, mount'lar görünür (debug modu), İçerik modunda düzenlenebilirlik kanıtı
- **C4.** "Base sözleşmesi" dokümanı: bileşen API'leri + token referans kuralları

### Kapı
Hard-coded stil taraması sıfır sonuç veriyor (otomatik lint kuralı) · 6 şablon Studio'da yayınlanıp İçerik modunda test edildi · Tüm mount'lar debug modunda görünür ve B-PoC en az birine takılı çalışıyor.

---

## 7. İş Paketi D — Preset Üretimi

### Amaç
Base üstüne manifest'le tema giydirme hattını kurmak ve ilk katalog ürünlerini çıkarmak.

### Preset manifesti (özet)
`tokens` + `styleProfile` + `pages[reçete]` + section seçimi/varyantları + `copyTone {tr, de}` + ticari form (`theme | uikit`). İlk hedef: **1 tam Tema + 1 UI Kit**, ikisi de TR+DE içerikli.

### Deliverable'lar
- **D1.** Manifest şeması + uygulayıcı (manifest → Base konfigürasyonu)
- **D2.** Preset #1 (Tema) ve Preset #2 (UI Kit) — Studio'da yayınlanmış
- **D3.** Switch kanıtı: aynı Base + iki manifest = görsel olarak apayrı iki mağaza (ekran kayıtlı karşılaştırma)

### Kapı
Preset switch'te Base'e tek satır kod değişikliği gerekmemesi · İçerik modunda merchant deneyim temizliği değerlendirmesi (1–5 skala, hedef ≥4) · TR/DE içerik eksiksiz.

---

## 8. Sıra, bağımlılık ve Sprint 0

```
A (envanter+şema) ──┬──▶ C (Base) ──▶ D (Preset)
B (hook RFC) ───────┘        ▲
        └── B-PoC ───────────┘
```

**Sprint 0 (2 hafta):**
- A: şema boyutlarının resmi tanımı + ilk 8 örnek section + taksonomi dosyasının açılması
- B: WP + Shopify inceleme raporu + taslak modelin ilk kritiği
- Ortak: repo/klasör iskeleti (`taxonomy/`, `rfc/hooks/`, `base/`), lint/CI temeli, doküman şablonu

**Sprint 1 (2 hafta):** A tamamlanır (20 örnek + kapı) · B RFC v1 + PoC · C başlar (primitives + token seti)
**Sprint 2+:** C kapısı → D.

---

## 9. Açık sorular

| # | Soru | Sahip |
|---|---|---|
| S1 | Studio'da dış script/embed politikası (hook paketleme senaryosunu belirler) | Islam (platform) |
| S2 | Kod modu kısıtları: bağımlılık politikası, bundle sınırları | Ekip ölçer + Islam doğrular |
| S3 | Referans marka listesi (50–100) — ilk 30'u kim, hangi kriterle seçer? | Ortak, Sprint 0'da |
| S4 | Base bileşenlerinde erişilebilirlik taban çizgisi (WCAG hedefi) | Ekip önerir |
| S5 | Hook API'sinin ilk gerçek tüketicisi hangi modül olacak? (öneri: kanıt-bağlı öneri kartları) | Islam |

---

## Ek-1 · Tohum taksonomi (18 kategori)

navigation · hero · social-proof · features-benefits · product-showcase · collection-nav · testimonial-ugc · comparison · before-after · faq · cta-band · editorial · media · trust · lead-capture · promo · product-info · footer
*(Sayfa tipleri: home · product-detail · collection · landing-campaign · listicle-advertorial · about-brand · faq-support · contact · blog-post · policy · lookbook)*

## Ek-2 · SectionSchema örneği (kısaltılmış)

```json
{
  "id": "feature-grid-3", "kategori": "features-benefits", "scope": "instance",
  "slots": {
    "headline": { "tip": "text", "maxLen": 80 },
    "items": { "tip": "array", "min": 3, "max": 6,
               "item": { "icon": "icon", "title": "text", "body": "richtext" } },
    "cta": { "tip": "button", "zorunlu": false }
  },
  "styleKnobs": { "hizalama": "center", "yogunluk": "comfortable" },
  "dataBindings": [], 
  "actions": ["navigate"],
  "hookNoktalari": ["mount:section.before", "mount:section.after"],
  "ornekler": ["kaynak-url-1", "kaynak-url-2", "kaynak-url-3"]
}
```

## Ek-3 · Sahiplenme tablosu (toplantıda doldurulur)

| Paket | Sahip | Sprint 0 teslimi | Tarih |
|---|---|---|---|
| A — Envanter & Şema | | | |
| B — Hook RFC | | | |
| C — QANTE Base | | | |
| D — Preset | | | |
