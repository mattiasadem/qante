# AppSchema Standardı — v0.2 (Awaiting user approval)

*Tarih: 2026-08-19 · Brief deliverable: APPS envanteri · SectionSchema ile paralel sözleşme*

**Bu dosya uygulama şemasının tamamının sözleşmesidir.** Section şeması için [`schema-standard.md`](./schema-standard.md) geçerlidir. ikas entegrasyonu için kaynak: [ikas App Development docs](https://builders.ikas.com/docs/app-development) — tema Studio kodu değil.

**Doğrulama:** `node scripts/validate-apps.mjs` — bu dosyadaki her kural orada kod olarak var.

**Durum:** v0.2 — platform ayrımlı `entegrasyon` + ikas storefront event sözlüğü — **Awaiting user approval**.

---

## 1. Katman kuralı

```
Ne işe yarar  → amac          (tek Türkçe cümle)
Neden gerekli → sorun         (1–2 cümle: merchant/vitrin boşluğu)
Nerede görünür → scope + yuzey (Shopify grammar yüzeyleri)
Merchant ayarı → ayarlar       (SectionSchema slot grameri)
Shopify bağlantı → entegrasyon.shopify
ikas bağlantı   → entegrasyon.ikas + ikasTur + ikasOlaylar + ikasSayfa
Veri          → dataBindings
Davranış      → actions
Kaynak        → link
```

Store Leads / Diego sayıları `candidates/shopify-apps.md` skorboard'unda tutulur.

---

## 2. Zorunlu üst seviye alanlar (18)

| Alan | Tip | Kural |
|---|---|---|
| `id` | string | `app-{kategori}-{slug}` = dosya adı |
| `kategori` | enum | §3 |
| `varyant` | string | Kısa vendor slug |
| `scope` | enum | §4 |
| `amac` | string | Tek Türkçe cümle |
| `sorun` | string | 1–2 cümle merchant boşluğu |
| `link` | string | Doğrulanmış `https://` URL |
| `yuzey` | array | §5 — Shopify vitrin yüzeyleri |
| `entegrasyon` | object | §6 — `{ shopify: [], ikas: [] }` |
| `ikasTur` | enum | `admin` \| `ozel` \| `yok` (§6.3) |
| `ikasOlaylar` | array | §6.4 — `IKAS_EVENT_TYPE` alt kümesi |
| `ikasSayfa` | array | §6.5 — `IKAS_PAGE_TYPE` alt kümesi |
| `ayarlar` | object | §7 — slot grameri |
| `dataBindings` | array | §8 |
| `actions` | array | §9 |
| `hookNoktalari` | array | §9 |
| `bagimliliklar` | array | §10 |
| `ikasKarsilik` | string | ikas karşılığı adı; yoksa `yok` |

---

## 3. `kategori`

`pixel` · `capture` · `reviews` · `loyalty` · `merchandising` · `bar` · `payments` · `builder` · `wishlist`

---

## 4. `scope`

`head` · `overlay` · `in-flow` · `checkout` · `page`

---

## 5. `yuzey` — Shopify grammar (değişmedi)

Kapalı set — §5 v0.1 ile aynı. ikas tarafında theme app-block **yok**; vitrin enjeksiyonu `storefront-script` + `IkasEvents` ile modellenir.

---

## 6. `entegrasyon` — platform ayrımlı (v0.2)

```json
"entegrasyon": {
  "shopify": ["app-block", "app-embed"],
  "ikas": ["storefront-script"]
}
```

Boş array `[]` her iki tarafta da geçerli.

### 6.1 `shopify` — kapalı set

| Değer | Ne |
|---|---|
| `web-pixel` | Shopify Web Pixel |
| `app-embed` | Theme app embed |
| `app-block` | Theme app block |
| `script-tag` | Legacy ScriptTag |
| `checkout-extension` | Checkout UI extension |
| `page-runtime` | Builder sayfa runtime |

### 6.2 `ikas` — kapalı set

Kaynak: [storefront-events](https://builders.ikas.com/docs/storefront-events), [admin-app](https://builders.ikas.com/docs/app-development/admin-app), [app-actions](https://builders.ikas.com/docs/app-development/admin-app/app-actions)

| Değer | Ne |
|---|---|
| `storefront-script` | `CreateStorefrontJSScript` veya Dashboard → Sales Channel → Extensions → Scripts. **Theme app-block değil.** |
| `admin-iframe` | Public Admin App — OAuth2 Auth Code, iframe, App Bridge |
| `admin-action` | Admin panel action (product edit, order view, bulk) |
| `webhook` | Webhook dinleyici (Private veya Public) |

**Yasak:** ikas tarafında `app-block`, `app-embed`, `web-pixel`, `script-tag`, `page-runtime` yazılmaz — docs'ta karşılığı yok.

### 6.3 `ikasTur`

| Değer | Ne |
|---|---|
| `admin` | Public App (App Store, OAuth2 Auth Code, iframe) |
| `ozel` | Private App (Client Credentials, API + webhook) |
| `yok` | ikas uygulama karşılığı yok / native özellik / yalnızca Dashboard script |

### 6.4 `ikasOlaylar` — `IKAS_EVENT_TYPE`

`PAGE_VIEW` · `PRODUCT_VIEW` · `ADD_TO_CART` · `REMOVE_FROM_CART` · `BEGIN_CHECKOUT` · `CHECKOUT_STEP` · `COMPLETE_CHECKOUT` · `ADD_TO_WISHLIST` · `SEARCH` · `VIEW_CART` · `VIEW_CATEGORY` · `VIEW_SEARCH_RESULTS` · `CUSTOMER_REGISTER` · `CUSTOMER_LOGIN` · `CUSTOMER_LOGOUT` · `CUSTOMER_VISIT` · `CONTACT_FORM`

Runtime: `window.IkasEvents.subscribe({ id, callback })`

### 6.5 `ikasSayfa` — `IKAS_PAGE_TYPE`

`INDEX` · `CATEGORY` · `BRAND` · `PRODUCT` · `CUSTOM` · `ACCOUNT` · `CART` · `CHECKOUT` · `SEARCH`

---

## 7. `ayarlar` — merchant editör sözleşmesi

SectionSchema slot grameri ([`schema-standard.md` §3](./schema-standard.md)).

**Storefront-script** (`entegrasyon.ikas` içinde) için ek slotlar:

| Slot | tip | zorunlu | not |
|---|---|---|---|
| `oncelikliScript` | boolean | false | `CreateStorefrontJSScript.isHighPriority` |
| `publicApiKey` | text | true | script URL query, mağaza bazlı |

Saf head piksel **ve** ikas `storefront-script` yoksa → `{}`.

---

## 8–10. `dataBindings`, `actions`, `hookNoktalari`, `bagimliliklar`

v0.1 ile aynı — [`schema-standard.md`](./schema-standard.md) grameri.

---

## 11. Eşleme rehberi (Shopify app → ikas)

| Shopify pattern | ikas karşılığı |
|---|---|
| app-block / app-embed (vitrin) | `storefront-script` + `IkasEvents` |
| web-pixel / script-tag | `storefront-script` (+ ilgili `ikasOlaylar`) |
| page-runtime (builder) | `admin-iframe` (Studio) — vitrin SDK değil |
| Admin-only sync | `admin-iframe` / `webhook` |
| Native ikas özellik | `ikasTur: yok`, `ikas: []` |

---

## 12. Kayıt kontrol listesi

- [ ] 18 zorunlu alan
- [ ] `entegrasyon.shopify` + `entegrasyon.ikas` kapalı sette
- [ ] ikas tarafında app-block yok
- [ ] `ikasOlaylar` / `ikasSayfa` kapalı sette
- [ ] storefront-script varsa `oncelikliScript` + `publicApiKey` ayarlarda
- [ ] `node scripts/validate-apps.mjs` temiz
