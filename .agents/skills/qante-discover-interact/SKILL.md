---
name: qante-discover-interact
description: >-
  Interaction-based QANTE discovery: takes an already-inventoried component (or a
  demo URL + schemaId) and captures its real behavioural states — hover, typed
  input, opened drawer/dialog, filled cart/compare, changed variant/tab/filter —
  as staged evidence, then writes interactionStates/steps/findings into the
  observation and only upgrades the schema for what was actually observed. Use
  when a component's static screenshot is empty or misleading (mega menu / nav
  header, cart drawer, cart page, predictive search, quick view, product card
  hover, tabs, filters), when the user asks for a component's workflow/states,
  or says /qante-discover-interact.
---

# QANTE Discover · Interact

Statik screenshot bir component'in **tek karesi**. Bu agent aynı component'i kullanır: hover, yazılan arama, açık menü, dolu sepet, değişen varyant — her hâli ayrı kanıt.

`qante-discover` ilk envanterdir (sınır + şema + kapalı kare). Bu agent **derinliktir**. Discover dosyalarına dokunma; sözleşmeyi ondan oku.

Sözleşmeler (çelişme): `qante/schema-standard.md` · `qante/styleknobs-standard.md` · `qante/.agents/skills/qante-discover/SKILL.md` (salt okunur) · ilgili `observations/**` + `evidence/**`.

---

## Ne zaman açılır

Kullanıcı bir schemaId, “cart’ı dolu çek”, “hover’ı yakala”, bir URL + component adı derse, veya kapalı kare yanıltıcıysa (mega, arama, sepet, quick view, kart hover, filtre).

Component + URL belli değilse **sor**. 15 PNG’yi yanlış bloğa çekme.

İlk envanter yoksa önce `qante-discover` — bu agent şema uydurmaz, var olanı derinleştirir.

---

## Döngü (bu sırayla yaşanır)

İlk çekim hipotezdir. Asıl iş ekran görüntüsüne bakmaktır. Yanlış selector ile 3 viewport çekmek, yoklamadan pahalıdır.

### 1. Ne denecek

Şemayı ve varsa observation’ı oku. Bu component için 6 state’ten hangileri anlamlı? Anlamsızı zorlama (breadcrumb’da `filled` yok).

Observation yoksa `observations/_template-interaction.json`’dan aç. `url` + **unique** `selector` şart. Genel class (`.featured-collection`) birden fazla bloğa uyar; script en büyük kutuyu çeker.

### 2. Tara

```bash
cd qante/scripts
node scan-affordances.mjs ../observations/{tema}/{preset}/{sayfa}/{schemaId}.json
node scan-affordances.mjs --url … --selector ".x" --vp 375
```

Scan duruma göre taslak üretir: `katalogSorgu` (sayfadaki ürün adından), hoverReveal → hover, `navExpanders` (boş ok; yazılı menü linki değil). Header taramasına arama/kart basmaz.

`suggestedSteps` **koşulmaz.** `uyari` / `matches` varsa dur: birden fazla heading → unique id; kapalı overlay → `prepareClick`.

Affordance → state (tek soru: bu kontrol UI’ın hangi hâlini üretir?):

| Gördüğün | State |
|---|---|
| search / form yazısı | `input` |
| drawer / dialog / mega / hamburger | `open` |
| kartta gizli Quick View, 2. görsel | `hover` |
| sepete ekle / compare | `filled` (önce veri üret) |
| swatch / adet / tab / filtre / akordeon | `changed` |

### 3. Şüphe varsa yokla — kör çekme

Şunlardan biri varsa `_probe.mjs` yaz, JSON’a bas, oku, **sil**. Terminal uzun JSON’u keser.

- Tıklanınca sayfa değişebilir mi (menü `<a>`, “Shop By Category”)
- Selector birden fazla mı
- Hover / fill gerçekten bir şey değiştiriyor mu
- Overlay kutu boyutu, `/cart.js` `item_count`

Yokla: URL değişti mi, kutu büyüdü mü, sonuç geldi mi. Hyper selector’ını başka temaya kopyalama.

### 4. Adımları yaz, sonra çek

`interactionSteps` koşmadan önce observation’da durur. Her `capture: true` adıma `etiket` (`mega-panel-acik`, `arama-sonucu`) ve `not`’a beklenen değişim.

Masaüstü mega ile mobil hamburger **aynı şema, ayrı adım** — `"viewports": ["1440"]` / `["375","768"]`.

```bash
node capture-interaction.mjs ../observations/…/{schemaId}.json
node capture-interaction.mjs <obs.json> --state changed   # yalnız bu PNG’leri yaz; adımlar yine koşar
```

Adımlar her viewport’ta baştan koşar. Bir adım patlarsa koşu ölmez → `missingStates`. `addToCart` önce gerçek tıklama, olmazsa `/cart/add.js`; fallback’i `interactionNote`’a yaz.

`fill` değeri `katalogSorgu`’dur; yoksa fill yazma. Elle screenshot yok.

### 5. Bak — script’in yeşili yetmez

PNG yazıldı diye UI değişmiş sayılmaz. `hover` / `input` / `open` / `filled` / `changed` karesini **bir öncekiyle karşılaştır**: menü kolonları, arama listesi, sepet satırı, tab altı çizgisi, Quick View butonu. Aynıysa veya koleksiyon sayfasına kaçtıysa o state yanlış.

Bir kez düzelt (`--state …`), tekrar çek. İkincide de olmadı → `missingStates` + sebep. Üçüncüye deneme, uydurma.

375/768 hover’ın 1440 ile aynı olması normal olabilir (parmakta hover yok) — onu “doğrulanamadı” yaz, silme.

### 6. Gördüğünü yaz, şemaya yalnız kanıtı koy

`stateFindings` = karede görünen cümle. `interactionNote` = emin olunmayan, fallback, tema tuzağı.

| Gördün | Nereye |
|---|---|
| Merchant’ın yazdığı yeni alan | `slots` |
| Yeni tıklama / açılma | `actions` |
| Tetiklenen overlay | `bagimliliklar` |
| Mağaza verisi | `dataBindings` |
| İskelet seçimi | `styleKnobs` |
| Yalnız renk / gölge / zoom | şemaya girmez |
| Boş ↔ dolu, açık ↔ kapalı | yeni şema **değil** → `stateFindings` |

```bash
cd qante && node scripts/validate-schemas.mjs {schemaId}
```

`todo/{tema}.md` satırını güncelle. Kullanıcıya düz cümle: ne gördün, şema değişti mi, ne açık kaldı. Tablo / “Mod: interact” dökümü yok.

---

## State adları (yalnız bunlar)

`initial` · `hover` · `input` · `open` · `filled` · `changed`

`filled` ile `initial` aynı component. Yeni ad gerekirse `Açık soru`.

Evidence: `evidence/{tema}/{preset}/{sayfa}/{slug}.{state}.{etiket}.{375|768|1440}.png`  
Eski `{slug}.1440.png` = `initial` — yeniden adlandırma.

Observation ekleri: `interactionStates` · `interactionSteps` · `stateFindings` · `missingStates` · `interactionNote`.

Action seti: `goto` · `scrollTo` · `click` · `hover` · `fill` · `select` · `press` · `waitFor` · `addToCart` · `forceOpen` · `mouseMove`

---

## Kapalı kare yalan söylerse

Bunlarda `initial`’a güvenme. Scan + yoklama önde; bu tablo sonra.

| Component | Kapalıda görünmeyen | Ne yap |
|---|---|---|
| Mega / header | Kolon, link, görsel, promo | 1440: `details#id > summary` hover → `open`. 375/768: hamburger → `open`, boş ok (`navExpanders`) → `changed`. Yazılı `<a>` sayfaya gider |
| Predictive search | Öneri / ürün / koleksiyon | Opener gerekirse tıkla, `fill: {katalogSorgu}`. Boş sonuç: `zzzzz` |
| Cart drawer / sayfa | Satır, adet, toplam, boş hâl | PDP’de Add to cart → drawer / `/cart`. Adet `changed` |
| Quick view | Dialog içi | Kart hover → Quick View tık → `open` |
| Compare | Tablo | Ürüne ekle → `filled` |
| Filtre / sort | Açık panel, grid | Aç (`open`) → seç (`changed`) |
| Swatch | Fiyat / görsel | Tık → `changed` (önce/sonra) |

Mega masaüstü ve mobil aynı `schemaId`. Sepette AJAX fallback kullandıysan not düş.

---

## Yoklarken takılma (Hyper / Impulse)

- Unique id: `[id*='featured_collection_6YhzLm']` — genel class en büyük yanlış bloğu çeker
- `has-text('Men')` Women’a da uyar; SVG’li summary’de regex timeout olur → `details#id > summary`
- Mobil: boş ok. “Shop By Category” koleksiyona kaçırır; karede drawer durmuyorsa yanlış tık
- Arama input’u DOM’da “görünür” ama ekranın dışında olabilir → önce ikon
- `katalogSorgu` boş sonuç verirse başka ürün adı; `chair` ezber değil
- Kart hover 375/768’de kare değişmeyebilir

---

## Sert kurallar

- Görmediğin state’i şemaya yazma
- Doldurulabiliyorsa doldur
- Ödeme / gerçek form / hesap / kupon yok; sepete ekleme serbest
- Hover yalnız görsel ise token
- Aynı tip = tek şema
- Token şemaya girmez
- Evidence script’ten
- `qante-discover` dosyalarına dokunma
- 3’ten fazla dosya (şema + birden çok observation + skill dışı) → önce söyle
- Bitince validator
