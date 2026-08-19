# AppSchema Standardı — v0.3 (Awaiting user approval)

*Tarih: 2026-08-19 · ikas kaynak: [ikas.dev intro](https://ikas.dev/docs/intro) · [App Development](https://builders.ikas.com/docs/app-development) · [Admin App / CLI](https://builders.ikas.com/docs/app-development/admin-app) · [App Actions](https://builders.ikas.com/docs/app-development/admin-app/app-actions) · [Plans / lifecycle webhooks](https://builders.ikas.com/docs/app-development/admin-app/plans) · [Webhooks](https://builders.ikas.com/docs/app-development/ikas-sdk/webhooks)*

**Doğrulama:** `node scripts/validate-apps.mjs`

**Durum:** v0.3 — **Awaiting user approval**. Onaylanmadan üretim kodu türetilmez.

---

## 1. Katman kuralı

```
Ne işe yarar     → amac
Neden gerekli    → sorun
Nerede görünür   → scope + yuzey (Shopify grammar)
Merchant ayarı   → ayarlar
Shopify bağlantı → entegrasyon.shopify
ikas bağlantı    → entegrasyon.ikas + ikasTur … ikasHost
ikas replacement → ikasHedef + ikasSablon + ikasKapsam + ikasAksiyon
Kaynak           → link / ikasLink
Fingerprint      → tespit (doğrulanmışsa)
```

---

## 2. Zorunlu üst seviye alanlar (27)

| Alan | Tip | Kural |
|---|---|---|
| `id` | string | `app-{kategori}-{slug}` = dosya adı |
| `kategori` | enum | `pixel` · `capture` · `reviews` · `loyalty` · `merchandising` · `bar` · `payments` · `builder` · `wishlist` |
| `varyant` | string | Kısa vendor slug |
| `scope` | enum | `head` · `overlay` · `in-flow` · `checkout` · `page` |
| `amac` | string | Tek Türkçe cümle |
| `sorun` | string | 1–2 cümle merchant boşluğu |
| `link` | string | Doğrulanmış Shopify `https://` URL |
| `yuzey` | array | Kapalı Shopify yüzey seti (v0.1). Head pikselde `[]` |
| `entegrasyon` | object | `{ shopify: [], ikas: [] }` — §6 |
| `ikasTur` | enum | `admin` · `ozel` · `yok` |
| `ikasOlaylar` | array | `IKAS_EVENT_TYPE` alt kümesi — §6.4 |
| `ikasSayfa` | array | `IKAS_PAGE_TYPE` alt kümesi — §6.5 |
| `ikasLink` | string | ikas App Store / ana site URL veya `"yok"` |
| `ikasSablon` | enum | §6.10 |
| `ikasHedef` | enum | §6.6 |
| `ikasKapsam` | array | §6.7 OAuth scope alt kümesi |
| `ikasAksiyon` | array | §6.8 `{ yer, tip }` |
| `ikasWebhook` | array | §6.9 kapalı 11 webhook |
| `ikasYayin` | enum | §6.11 |
| `ikasHost` | enum | §6.12 |
| `ayarlar` | object | Slot grameri — §7 |
| `dataBindings` | array | `schema-standard.md` DataSource |
| `actions` | array | Boş `[]` yasak |
| `hookNoktalari` | array | `mount:{bolge}.{konum}` |
| `bagimliliklar` | array | Section schema id listesi |
| `ikasKarsilik` | string | ikas karşılığı adı |
| `tespit` | object | `{ shopify, ikas }` — §8 |

---

## 6. `entegrasyon`

### 6.1 `shopify`

`web-pixel` · `app-embed` · `app-block` · `script-tag` · `checkout-extension` · `page-runtime`

### 6.2 `ikas`

`admin-iframe` · `admin-action-iframe` · `admin-action-api` · `storefront-js-script` · `webhook` · `admin-graphql`

**Yasak:** `app-block` · `app-embed` · `web-pixel` · `checkout-extension` · `script-tag` · `page-runtime` (Shopify-only)

**Deprecated (kullanma):** `storefront-script` → `storefront-js-script` · `admin-action` → `admin-action-iframe` / `admin-action-api`

### 6.3 `ikasTur`

`admin` = Public App · `ozel` = Private App · `yok` = native / Dashboard extension (ör. Sales Channel → Extensions → Web Analytics)

### 6.4 `ikasOlaylar`

`PAGE_VIEW` · `PRODUCT_VIEW` · `ADD_TO_CART` · `REMOVE_FROM_CART` · `BEGIN_CHECKOUT` · `CHECKOUT_STEP` · `COMPLETE_CHECKOUT` · `ADD_TO_WISHLIST` · `SEARCH` · `VIEW_CART` · `VIEW_CATEGORY` · `VIEW_SEARCH_RESULTS` · `CUSTOMER_REGISTER` · `CUSTOMER_LOGIN` · `CUSTOMER_LOGOUT` · `CUSTOMER_VISIT` · `CONTACT_FORM`

### 6.5 `ikasSayfa`

`INDEX` · `CATEGORY` · `BRAND` · `PRODUCT` · `CUSTOM` · `ACCOUNT` · `CART` · `CHECKOUT` · `SEARCH`

### 6.6 `ikasHedef`

| Değer | Ne |
|---|---|
| `studio-section` | Studio in-flow görsel blok |
| `storefront-script` | JS script / overlay / pixel |
| `admin-iframe` | Admin panel iframe |
| `webhook` | Backend-only senkron |
| `yok` | Karşılık yok |

### 6.7 `ikasKapsam`

Yayınlanmış ikas.dev OAuth scope stringleri (underscore):

`read_products` · `write_products` · `read_orders` · `write_orders` · `read_customers` · `write_customers` · `read_campaigns` · `write_campaigns` · `read_inventories` · `write_inventories`

**Dahil değil:** `write_storefront` — CLI'da "Write Storefront" checkbox var ama [ikas.dev intro](https://ikas.dev/docs/intro) yayınlanmış scope listesinde yok.

### 6.8 `ikasAksiyon`

`yer`: `product-edit` · `order-view` · `order-package` · `order-list-bulk`  
`tip`: `iframe` · `api`

### 6.9 `ikasWebhook` (kapalı 11)

`store/order/created` · `store/order/updated` · `store/product/created` · `store/product/updated` · `store/customer/created` · `store/customer/updated` · `store/customer/statusUpdated` · `store/stock/created` · `store/stock/updated` · `store/app/payment` · `store/app/deleted`

### 6.10 `ikasSablon`

`ikas app init` / CLI şablonları:

| Değer | Kaynak |
|---|---|
| `starter` | admin-app Starter · ikas-app-examples |
| `webhook-listener` | admin-app Webhook Listener |
| `dashboard-actions` | ikas-cli Dashboard Actions |
| `starter-with-subscription` | ikas-cli Starter with subscription |
| `yok` | Şablon yok / native |

### 6.11 `ikasYayin`

`herkese-acik` · `gizli` · `izin-verilen-magazalar` · `yok`

Kaynak: build-publish (Herkese Açık / Gizli) + allowed-app (İzin Verilen Mağazalar). Seed envanterde bilinmiyorsa `yok`.

### 6.12 `ikasHost`

`admin-iframe` · `external` · `yok`

Public iframe App Bridge kullanır; `external` query-param imzalı erişim (`create-app-access-token`).

---

## 7. `ayarlar`

SectionSchema slot grameri. `storefront-js-script` için `oncelikliScript` + `publicApiKey` slotları.

---

## 8. `tespit`

```json
"tespit": { "shopify": "", "ikas": "" }
```

Yalnızca doğrulanmış fingerprint. Tahmin yasak.

---

## 9. Eşleme rehberi

| Shopify pattern | ikasHedef | ikasSablon |
|---|---|---|
| app-block in-flow | `studio-section` | `starter` |
| overlay / pixel | `storefront-script` | `yok` veya `webhook-listener` |
| page builder | `admin-iframe` | `starter` |
| CDP / email sync | `storefront-script` + webhook | `webhook-listener` |
| Native ikas extension | `yok` | `yok` |
| Native ikas feature | `studio-section` veya `yok` | `yok` |

**Not:** GA4 / Meta / GTM gibi birinci parti ikas Extensions (Sales Channel → Web Analytics) `ikasTur: yok`, `entegrasyon.ikas: []` — uygulama değil.

---

## 10. Kayıt kontrol listesi

- [ ] 27 zorunlu alan
- [ ] `ikasLink` doğrulanmış veya `yok`
- [ ] `ikasKapsam` underscore, `write_storefront` yok
- [ ] `ikasWebhook` yalnızca kapalı 11
- [ ] `ikasAppStoreKategori` eklenmedi — Qante `kategori` yeterli
- [ ] `tespit` tahmin içermiyor
- [ ] `node scripts/validate-apps.mjs` temiz
