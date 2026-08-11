# TEMA FABRİKASI — Master Plan v0.2
*(Çalışma adı açık — marka mimarisi Kreis ailesiyle birlikte A12'de kararlaştırılacak)*

**Tarih:** 5 Ağustos 2026
**Durum:** v0.1 + KreisBridge teknik inceleme entegrasyonu. Repo incelemesi sonrası v0.3.
**Revizyon özeti:** KreisBridge "Katman 0 / Giriş Kapısı" olarak plana alındı · compiler baseline değişti (Karar 20R) · IR ikiye ayrıldı (Karar 28) · POC seti yeniden kuruldu (T0–T4) · fazlar yeniden sıralandı (1A wedge ∥ 1B fabrika).

---

## 1. Özet ve Vizyon

E-ticaret temalarını ve mağaza kurulumlarını fabrika hızında üreten, AI destekli üretim sistemi. Çıktılar ikas Studio'ya (sonra Shopify'a) compile edilir.

**v0.2 ile netleşen funnel:**

```
Eski-editör ikas merchant'ı
   │  KreisBridge migration (önizleme → onay → kurulum)
   ▼
kreis-base üzerinde, bizim sistemimizde bir müşteri
   │  ai-engine öneri kartları · re-theme · yeni section'lar
   ▼
Katalog müşterisi (Tema / UI Kit / AI onboarding)
   │
   ▼
Ajans kanalı + yeni-merchant self-serve (Faz 2+)
```

İki müşteri: **KOBİ merchant** (editör öğrenmez; hazır mağazasını alır, öder) ve **ajans/partner** (adam çalıştırmak yerine fabrikayı kullanır). Instant merchant'a editör satar; biz merchant'a **sonuç**, ajansa **üretim aracı** satarız — ve Instant'ın landing'deki import kancasının bizdeki karşılığı KreisBridge'dir: mevcut tabanı kendi sistemimize devşiren sıfıra yakın CAC'li giriş kapısı.

---

## 2. Konumlandırma

| | Instant.so | Biz |
|---|---|---|
| Giriş kancası | Figma import / URL import | **KreisBridge**: eski-editör ikas mağazasını Studio'ya birebir taşıma |
| Merchant'a satılan | Editör + AI copilot | Bitmiş mağaza / tema (sonuç) |
| Ajansa satılan | Aynı editör | Üretim fabrikası + katalog |
| Editör yükü | Figma-benzeri canvas (ağır) | Yok — ikas İçerik modu, slot-level kurgulanır |
| Platform | Shopify | ikas önce (IR platform-bağımsız), Shopify sonra |
| Veri çarkı | Kendi template kütüphanesi | Migration telemetrisi + crawl + taksonomi |
| Pazar | Global EN | TR + DE, iki dilli |

**Moat:** (1) migration telemetrisi + taksonomi veri çarkı, (2) Platform Davranış Envanteri (ölçülmüş, teste dönüşmüş belgesiz ikas bilgisi), (3) katalog kalitesi ve iki dillilik, (4) ajans ağı, (5) üretim hızı.

---

## 3. Mimari — Dört Katman + Giriş Kapısı

```
┌──────────────────────────────────────────────────────────────┐
│ KATMAN 4 · GTM      Migration funnel │ Merchant │ Ajans      │
├──────────────────────────────────────────────────────────────┤
│ KATMAN 3 · KATALOG  kreis-base (landing pad) │ Katalog       │
│                     presetleri │ UI Kitler │ re-theme        │
├──────────────────────────────────────────────────────────────┤
│ KATMAN 2 · FABRİKA  Design-IR │ Kütüphane │ Figma→IR │ AI    │
│                     pipeline │ Compiler'lar                   │
│                     (v1 = studio-driver hattı → v2 aday: Kod)│
├──────────────────────────────────────────────────────────────┤
│ KATMAN 1 · BİLGİ    Migration telemetrisi │ Crawler │        │
│ MOTORU              Taksonomi │ Fingerprint DB │ İstatistik  │
├──────────────────────────────────────────────────────────────┤
│ KATMAN 0 · GİRİŞ    KreisBridge: fingerprint → tarama →      │
│ KAPISI              harita → kapılar → yazım/yayın → fidelity│
└──────────────────────────────────────────────────────────────┘
```

### 3.1 KreisBridge Varlık Haritası (paket → plandaki rol)

| Paket | Plandaki rolü | Durum / Not |
|---|---|---|
| `studio-driver` + `settings-replay` | **ikas compiler v1 yazım yolu** (Katman 2) | Kanıtlı: 37 sayfa, sıra 37/0, yayın 43–68 sn, kurtarma yolları |
| `crawler` | Bilgi Motoru çekirdeği (Katman 1) | robots-uyumlu, temsilci örnekleme, ayar→IR; genel segmentasyon uzantısı gerek (T3) |
| `fidelity` | **AI eval + üretim regresyon kapısı** (Katman 2) | 3 viewport, blok hizalama, katalog/tema kusur ayrımı; ölçüm aracı kendi kusurlarını bulup düzeltmiş |
| `ir` | **Migration-IR** — dondurulur | Design-IR'dan ayrı tutulur (Karar 28) |
| `legacy-parser` | Wedge'e özel kalır | 62 bölüm · 1.795 ayar, açıkta 0 |
| `migrate` (kapılar, karne) | Kalite disiplini şablonu → fabrika standardı | Yeşil/amber/kırmızı kapı modeli fabrika üretimine kopyalanır |
| `ai-engine` | **Upsell motoru çekirdeği** (Katman 3→4) | Deterministik, kanıt-bağlı öneri kartları; katalog satışına bağlanır |
| `themes/kreis-base` | **Landing pad teması** (Katman 3) | 86 bileşen · 2.976 ayar; fidelity-driven — katalog preseti DEĞİL (Karar 29) |
| `apps/web` | Müşteri paneli iskeleti | Karşılaştırma/önizleme/öneri UX'i funnel'ın yüzü |

### 3.2 KreisBridge'den plana taşınan kurumsal varlıklar

1. **Platform Davranış Envanteri.** Editörün bayat kopyası, eklemeli yazım motoru, zorunlu-boş ayarın temayı düşürmesi, tık dinleyicisi çarpışması, dış kimlik kabul etmeyen API, addan üretilen kategori adresi, birleşen çeviriler, sayfa-tipi zorunluluğu, istemci-güdümlü 1–2 dk yayın… Her madde canlı ölçümden gelmiş ve teste/kapıya dönüşmüş. Versiyonlu tutulur; yeni keşif envantere işlenmeden koda giremez.
2. **Kalite disiplini standardı.** Kapılar müşterinin/üretimin verisini ölçer, haritayı değil · altın çıktılar dondurulur · açıkta kalem sıfır, taşınmayan her kalem gerekçeli beyan · çürütülen iddialar dokümante · **"sayaca değil yayınlanmış vitrine bak"** (1.229-link dersi) → fabrika telemetrisinin ve AI eval'inin birinci ilkesi.
3. **Kimlik eşleme defteri.** API dış kimlik kabul etmediği için kaynak→hedef kimlik çevirisi; müşteri mağazasına kurulumda da aynı mekanizma. Katalog temalarının kurulum akışında yeniden kullanılır.
4. **Kusur sınıflandırması.** (a) taşınmamış legacy kuralı, (b) porta uydurulmuş kural, (c) platformun kendi davranışı — fabrika QA'sında da aynı üçlü sınıf kullanılır.

---

## 4. Karar Listesi

Numaralı, kısa gerekçeli. `[AÇIK]` kesinleşmedi, `[REVİZE v0.2]` bu revizyonda değişti.

### Mimari ilkeler (v0.1'den — geçerli)

1. **IR platform-bağımsız.** ikas yalnızca ilk compile hedefi; Shopify portu yeni compiler'dır, rewrite değil.
2. **Üç katman ayrımı mutlak:** Structure / Content (slot) / Style (token) izole.
3. **AI serbest kod üretmez;** şema-kısıtlı üretim (constrained JSON → IR).
4. **Serbest canvas editör yapılmaz.** Merchant akışı: preset seç → içerik → yayınla.
5. **Section = şema** (slots + meta + styleKnobs + dataBindings); hard-coded stil yasak.
6. **Veri bağlama soyut `DataSource` ile** modellenir; compiler platforma çevirir.
7. **Preset iki ticari form:** Tema (full) ve UI Kit (section paketi) — ikas kütüphane modeliyle birebir.
8. **Preset =** token teması + styleProfile + sayfa reçeteleri + section koleksiyonu + exclusive'ler + copy tone.
9. **Yabancı section uyumu:** token inheritance + styleProfile→styleKnobs mapping.
10. **Edit-AI operasyon setiyle** çalışır (insertSection, setSlot, applyTheme…).

### Bilgi motoru (v0.1'den — geçerli)

11. **Crawl çıktısı bilgidir, bileşen değil.** Klonlama yok; fingerprint + istatistik.
12. **Koşum takımı Playwright;** PageAgent'ın DOM dehydration modülü enjekte edilir (MIT).
13. **Segmentasyon hibrit:** DOM heuristikleri + VLM.
14. **Taksonomi canlı ve versiyonlu;** aday kuyruğu + insan onayı.
15. **Tohumlar:** Shopify feature vocabulary, tema demo mağazaları, referans listemiz.
16. **Fingerprint'te kod/piksel saklanmaz;** pattern + istatistik + etiket.

### AI pipeline (v0.1'den — geçerli)

17. **Pipeline sabit:** brief → plan → retrieval → structured fill (paralel) → medya → theming → validasyon → streaming.
18. **Faz 1–2'de fine-tune yok;** frontier + few-shot + şema; telemetri ilk günden.
19. **Eval seti regresyon kapısıdır;** pipeline değişikliği eval geçmeden merge edilmez.

### ikas entegrasyonu

20. **[REVİZE v0.2] Compiler v1 = studio-driver/settings-replay hattı.** Kanıtlı baseline mevcut (37 sayfa, 0 sıra hatası). Kod modu **v2 adayı** olarak izlenir; geçiş kriterleri: beta çıkışı, dataBinding derinliği, bakım maliyeti kıyası, İçerik-modu temizliği. Figma-wrapper yolu ancak Kod modu da yetersizse değerlendirilir.
21. **Eşleme tablosu sabit:** Design-IR tokens → Global Değerler; slots → bölüm verisi; recipe header/footer → işaretleme; breakpoint stilleri → kırılma noktaları.
22. **[REVİZE v0.2] Dağıtım kararı T0'a (tema paketi testi) bağlandı.** Paket yerleşim+ayar taşıyorsa → paket dağıtımı birincil; yalnız kod taşıyorsa → kurulum studio-driver replay + kimlik defteriyle yapılır. İki kanal (marketplace + partner paylaşımı) hedefi değişmedi.

### GTM (v0.1'den + revizyon)

23. **İki yüzlü model;** ajans/partner kanalı önce, merchant self-serve Faz 2.
24. **"URL'ini ver" onboarding silahı;** migration-assistant motoruyla ortak kod.
25. **[GÜNCELLENDİ] Pazar sıralaması:** Wedge TAM'i ikas eski-editör tabanı (TR ağırlıklı + ikas DE mağazaları — hasatnuts.de gibi). TR önce; DE, ikas DE tabanı + Shopify compiler ile genişler.

### v0.2 — KreisBridge entegrasyon kararları

26. **KreisBridge = Katman 0, resmi giriş kapısı.** Bağımsız yan proje değil; funnel'ın ilk adımı. Her migration bir katalog müşterisi adayı üretir.
27. **kreis-base'in rolü: landing pad.** Migrate edilen müşterinin indiği tema. Katalog presetleri Design-IR'dan üretilir; kreis-base katalogda "preset" olarak pazarlanmaz.
28. **İki IR gerçeği.** Migration-IR (mevcut `ir` paketi, 189 altın çıktı, canlı müşteriler) **dondurulur, refactor edilmez.** Design-IR ayrı geliştirilir. Köprü tek noktada: **re-theme milestone** — migrate mağazaya token teması giydirme (T2 spike fizibiliteyi ölçer). Gerekçe: çalışan sistemi mimari saflık için destabilize etmemek.
29. **Re-theme = wedge→katalog köprü ürünü.** "Mağazan aynı kaldı, şimdi tek tıkla yeni görünüm" — upsell'in ana kancası. Fizibilite T2'ye bağlı `[AÇIK: T2 sonucu]`.
30. **fidelity = fabrika eval çekirdeği.** Golden screenshot + blok hizalama + 375/768/1440 üçlüsü AI üretim regresyon kapısına bağlanır. Katalog/tema kusur ayrımı mantığı "içerik farkı / tasarım farkı" ayrımına genellenir.
31. **Kalite standardı fabrikaya taşınır:** kapılar üretim verisini ölçer, altın çıktılar, açıkta kalem sıfır beyanı, çürütülen iddia kayıtları, "yayınlanmış vitrini oku" ilkesi.
32. **Platform Davranış Envanteri versiyonlu kurumsal varlıktır;** her madde test/kapı olarak yaşar.
33. **Migration telemetrisi Bilgi Motoru'nun ikas segmenti için birincil kaynağıdır.** Taşınan her mağazanın section/ayar envanteri, izinli ve anonimleştirilmiş çerçevede fingerprint DB'ye işlenir; reçete istatistikleri önce buradan, dış crawl'dan sonra beslenir.
34. **ai-engine upsell motorunun çekirdeğidir.** Kanıt-bağlı, deterministik öneri kartları migration sonrası katalog satışına bağlanır ("şu section eksik", "preset'e geç").
35. **ikas ilişkisi migration kartıyla kurulur.** Teklif: eski tabanın Studio'ya taşınması. Karşılık listesi: Yönetim API'si onayı (checkout 40 ayar buna takılı), programatik kurulum/paylaşım, tema paketi davranış garantisi, marketplace koşulları, kayıtlı 2 ürün talebi (bileşen yeniden adlandırma, çok dilli etiket).
36. **Özel temalar (ozy-dışı) bilinçli kapsam dışı.** AI-destekli tanıma tavanı %21,8 ölçüldü; ayrı ürün kararı olarak park — fabrika önceliği bozulmaz `[AÇIK: Faz 3'te tekrar bakılır]`.

---

## 5. Taksonomi v0 (Tohum — v0.1'den geçerli)

Versiyonlanır (`taxonomy@0.1.0`). Kayıt: `id`, `ad`, `tanım`, `eşanlamlılar`, `Shopify feature eşlemesi`, `durum`.

**Sayfa tipleri (11):** home · product-detail · collection · landing-campaign · listicle-advertorial · about-brand · faq-support · contact · blog-post · policy · lookbook

**Section kategorileri (18):** navigation · hero · social-proof · features-benefits · product-showcase · collection-nav · testimonial-ugc · comparison · before-after · faq · cta-band · editorial · media · trust · lead-capture · promo · product-info · footer
*(Varyant ve Shopify vocab eşleme tablosu v0.1'deki gibi; repo'da `taxonomy/v0.1.0.json` olarak açılacak.)*

**v0.2 ek kuralı:** kreis-base'in 86 bileşeni ve migration koşularında görülen legacy bölümler (62) taksonomiye eşlenir — ikas segmentinin gerçek kullanım dağılımı ilk günden ölçülür.

---

## 6. IR Stratejisi `[REVİZE v0.2]`

### 6.1 İki IR, tek köprü

| | Migration-IR (`ir` paketi) | Design-IR (fabrika) |
|---|---|---|
| Amaç | Legacy ayar setini birebir temsil, replay | Platform-bağımsız tasarım üretimi |
| Durum | Canlı, 189 altın çıktı, **dondurul** | Yeni, bu planla kurulur |
| Değişim | Yalnız wedge ihtiyaçları | Serbest evrim |
| Köprü | — | **Re-theme milestone:** Design-IR token teması → kreis-base ayarlarına mapping (T2) |

### 6.2 Design-IR çekirdek varlıkları (v0.1'den geçerli)

- **DesignTokens:** color roles · type scale · space · radius · shadow · breakpoints
- **StyleProfile:** density · buttonStyle · imageTreatment · cornerLanguage · motion
- **SectionSchema:** type · category · meta{tags, layoutPattern, description, embedding} · slots{} · styleKnobs{} · **dataBindings[]** (soyut `DataSource`: productList, product, collection, cart… → compiler ikas'ta Veri Ekle/Blueprint'e çevirir)
- **Preset/Tema Manifesti:** tokens + styleProfile + pages[recipe] + exclusiveSections + copyTone{tr,de} + commercialForm
- **SectionFingerprint:** sourceUrl/storeId · pageType · industry · category · confidence · layout · slotInventory · styleStats · taxonomyVersion
- **Ops seti:** insertSection · removeSection · moveSection · setSlot · applyTheme · setDataBinding · duplicatePage

**v0.2 notu:** Ops seti, Platform Davranış Envanteri'yle kısıtlanır (ör. "bölüm silme/taşıma yok; boş sayfada ilk eklenen header olmalı" → compiler ops'u sıra-güvenli plana çevirir, kuramıyorsa hiçbir şey yazmaz — migrate motorunun davranışı aynen).

---

## 7. AI Pipeline (v0.1'den geçerli + eval bağlantısı)

brief → page plan → retrieval → structured fill (section başına paralel, constrained) → medya → theming (deterministik + WCAG) → validasyon → compile & stream.

**v0.2 eval zinciri:** her üretim → şema validasyonu → compile → **fidelity koşusu** (golden screenshot, 3 viewport, blok hizalama) → "yayınlanmış vitrini oku" doğrulaması. İçerik farkı / tasarım farkı ayrımı fidelity'nin katalog-ayrımı mantığından genellenir. `ai-engine`'in kanıt-bağlı kart formatı, AI önerilerinin müşteriye sunum standardıdır (her öneri ölçüme bağlanır, krediye değil).

---

## 8. Testler ve Spike'lar `[REVİZE v0.2 — eski POC-A/B/C yerine]`

| # | Test | Süre | Cevapladığı karar | Exit kriteri |
|---|---|---|---|---|
| **T0** | **Tema paketi testi** (script hazır) | 1 gün | Karar 22 — dağıtım modeli | Paket yerleşim+ayar taşıyor mu: EVET → paket dağıtımı / HAYIR → replay kurulumu |
| **T1** | Kurulum akışı provası (T0'a bağlı) | 2–3 gün | Onay→müşteri mağazası akışı | Kimlik defteri müşteri-mağaza modunda doğrulandı; 1 gerçek kurulum |
| **T2** | **Re-theme spike:** kreis-base kopyasına Global Değerler üzerinden token teması (renk+tipografi) | 3–4 gün | Karar 29 — upsell fizibilitesi | Kaç ayar token'a bağlanabiliyor (%); fidelity "tasarım değişimi"ni kusurdan ayırabiliyor mu |
| **T3** | Genel segmentasyon uzantısı: crawler'a ikas-dışı 10 site, dehydration + VLM sınıflandırma | 1 hafta | Karar 13 — Bilgi Motoru genelleşmesi | Segmentasyon ≥%85, sınıflandırma ≥%80 (insan etiketli örneklem) |
| **T4** | Structured fill mini: 3 şema × 5 brief × 2 dil | 3 gün | Karar 17/18 — fill kalitesi | Şema geçerlilik ≥%98; copy rubriği "kataloğa girebilir" |

*(Eski POC-A iptal: compiler baseline kanıtlı. Kod modu değerlendirmesi Faz 1B sonunda ayrı rapor.)*

---

## 9. Fazlar `[REVİZE v0.2]`

**Faz 0 · Birleşik Doğrulama (1–2 hafta):** T0 → T1 → T2 (+ T4 paralel) · A-listesi ikas soruları · Design-IR v0.1 taslağı · taksonomi dosyası repo'da.
*Exit: dağıtım modeli net, kurulum akışı kanıtlı, re-theme fizibilite hükmü verilmiş, ikas görüşme çerçevesi (Karar 35 teklif+karşılık listesi) hazır.*

**Faz 1A · Wedge Lansmanı (3–4 hafta):** checkout ayarları (API onayına bağlı — yoksa beyanlı eksik olarak kalır) · blog klonu · rebuwo tipi ikinci-dil senaryosu · fiyat/paketleme (A11) · **ilk 10 pilot/ücretli migration** · her koşu fingerprint DB'ye işlenir (Karar 33).
*Exit: migration yarı-self-servis operasyon; önizleme→onay dönüşümü ölçülüyor; kusur/mağaza ≤ 2.*

**Faz 1B · Fabrika Çekirdeği (6–8 hafta, 1A ile paralel):** Design-IR v1 · Figma→IR converter · kütüphane: 30 section, 12+ kategori · 2 katalog preseti (1 Tema + 1 UI Kit, TR+DE) · compiler v1: studio-driver hattının katalog moduna uyarlanması (legacy-replay'den bağımsız temiz yazım profili).
*Exit: Figma→yayın ≤ 1 iş günü; katalog preseti gerçek geliştirici mağazasında uçtan uca.*

**Faz 2 · Köprü + AI (6–8 hafta):** re-theme ürünü (T2 yeşilse) · ai-engine kartları → katalog satışı · AI pipeline tam entegrasyon + URL ingestion (yeni-merchant onboarding) · marketplace listeleme (koşullara göre) · eval seti canlı.
*Exit: migration→upsell dönüşümü ölçülüyor; URL/prompt → dolu mağaza taslağı < 5 dk.*

**Faz 3 · Ölçek (sürekli):** ajans programı (fabrika erişimi, co-branded temalar) · katalog büyütme (aylık +10–15 section, çeyrekte +1–2 preset; crawl-informed) · Shopify compiler · custom-tema kararının yeniden değerlendirilmesi (Karar 36) · fine-tune opsiyonu.

---

## 10. Riskler ve Karşı Hamleler `[GÜNCELLENDİ]`

1. **Platform riski — ikas kendisi yapar.** Karşı: migration kartıyla resmi ilişki (Karar 35), hız, veri çarkı, ajans ağı, çok-platform opsiyonelliği.
2. **Browser-driven yazım kırılganlığı** (Studio UI değişirse studio-driver kırılır). Karşı: Platform Davranış Envanteri test süiti erken alarm verir; ikas ilişkisinden değişiklik haberi; Kod modu v2 adayı sıcak tutulur; yedek yayın yolu mevcut.
3. **Wedge TAM'i ozy ailesiyle sınırlı.** Karşı: A9 (kaç ozy mağazası?) fiyatlamadan önce cevaplanır; custom temalar bilinçli park (tavan %21,8 ölçülü).
4. **kreis-base tasarım tavanı** (fidelity-driven, "eski görünüm"). Karşı: bu bir hata değil özellik — migration'ın vaadi aynılık; yenilik re-theme ve katalogla satılır. T2 köprüyü ölçer.
5. **İki iş hattı, tek kapasite** (1A ∥ 1B en gergin nokta). Karşı: 1A pilot sayısıyla sınırlanır (10), operasyonelleşmeden ölçek yok; 1B'ye korunan zaman blokları; Faz 2'den önce en az 1 tasarımcı + 1 geliştirici kararı.
6. **Kod modu beta değişkenliği.** Karşı: compiler adapter pattern'le izole; karar Faz 1B sonu raporuna.
7. **Marketplace koşulları bilinmiyor.** Karşı: partner-paylaşım kanalı marketplace'ten bağımsız çalışır; A1 Faz 0'da.
8. **Crawl/veri hukuku.** Karşı: migration verisi izinli (okuma yetkisi + defter + silinebilirlik zaten kurulu); dış crawl pattern-level, asset yeniden yayını yok, robots uyumu; A7 kısa hukuki gözden geçirme.
9. **AI maliyet/latency.** Karşı: paralel fill + BrandContext cache + retrieval; fine-tune ölçekte.

---

## 11. Metrikler `[GÜNCELLENDİ]`

- **Wedge funnel:** fingerprint eşleşme oranı · kapı YEŞİL oranı · önizleme→onay dönüşümü · taşınan mağaza/hafta · kusur/mağaza (9 → ≤2) · açıkta ayar = 0 sürekliliği
- **Köprü:** migration→upsell dönüşümü · re-theme alma oranı · ai-engine kart tıklama→satış
- **Fabrika:** Figma→yayın süresi (≤ 1 iş günü) · section İçerik-modu temizlik skoru
- **AI:** şema geçerlilik ≥%98 · düzenlemesiz kabul oranı · URL→taslak süresi (<5 dk)
- **Bilgi motoru:** fingerprint DB kayıt sayısı · taksonomi kapsama · aday kuyruğu işleme hızı

---

## 12. Açık Sorular `[GÜNCELLENDİ]`

- **A1.** Marketplace 3P listeleme koşulları, gelir paylaşımı, review? *(Karar 35 görüşme gündemi)*
- **A2.** ~~Programatik kurulum API'si var mı?~~ → Kısmen ölçüldü: API dış kimlik kabul etmiyor; kurulum yolu T0/T1 ile netleşir.
- **A3.** Kod modu kısıtları ve roadmap → Faz 1B sonu değerlendirme girdisi.
- **A4.** ~~Figma import fidelity~~ → Önemi düştü (baseline var); yalnız Kod modu da elenirse döner.
- **A5.** ikas resmi ilişki → Karar 35 çerçevesiyle görüşme; migration kartı masada.
- **A6/A12.** Marka mimarisi: Kreis (Bridge, Studio ajans) ↔ fabrika/katalog markası ↔ armoss/vizoss ailesi — tek karar olarak birleştirildi.
- **A7.** Dış crawl hedef listesi v0 + kısa hukuki gözden geçirme.
- **A8.** Fiyatlama iskeleti: tema · UI kit · ajans lisansı · AI onboarding.
- **A9. [YENİ]** ikas eski-editör tabanında ozy ailesi mağaza sayısı (wedge TAM'i) — fiyatlamadan önce.
- **A10. [YENİ]** ~~Tema paketi davranışı~~ → T0'a dönüştü.
- **A11. [YENİ]** Migration fiyatlaması: ücretsiz kanca mı, ücretli hizmet mi, "ücretsiz + re-theme/katalog'dan kazan" mı? Pilot verisiyle karar.
- **A13. [YENİ]** Checkout 40 ayarı için Yönetim API'si onay süreci — Karar 35 karşılık listesinin 1 numarası.

---

## 13. Sonraki Adımlar

1. **Repo incelemesi** → özellikle üç paket: `ir` (Design-IR ile mesafe ölçümü), `studio-driver`/`settings-replay` (katalog moduna genelleşebilirlik), `themes/kreis-base` (ayar mimarisi, token'a bağlanabilirlik — T2 hazırlığı) → **v0.3 revizyonu**.
2. **T0 koşulur** (script hazır, 1 gün) → dağıtım modeli kapanır.
3. ikas görüşme çerçevesi (Karar 35: teklif + karşılık listesi) tek sayfaya indirilir.
4. A9 (ozy TAM) için veri toplama yöntemi belirlenir.
5. Taksonomi `taxonomy/v0.1.0.json` olarak repo'da açılır; kreis-base 86 bileşeni + legacy 62 bölüm eşlenir.

*Yaşayan plan; her revizyon karar listesine işlenir. v0.1 → v0.2 farkı: Karar 20R, 22R, 25G + 26–36; POC-A/B/C → T0–T4; fazlar yeniden sıralandı.*
