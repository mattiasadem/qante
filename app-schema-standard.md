# AppSchema Standardı — v0.3 (Awaiting user approval)

*Tarih: 2026-08-19 · ikas kaynak: [App Development](https://builders.ikas.com/docs/app-development) · [Admin App / CLI](https://builders.ikas.com/docs/app-development/admin-app) · [App Actions](https://builders.ikas.com/docs/app-development/admin-app/app-actions) · [Webhooks](https://builders.ikas.com/docs/app-development/ikas-sdk/webhooks)*

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
ikas bağlantı    → entegrasyon.ikas + ikasTur … ikasWebhook
ikas replacement → ikasHedef + ikasSablon + ikasKapsam + ikasAksiyon
Kaynak           → link / ikasLink
Fingerprint      → tespit (doğrulanmışsa)
```

---

## 2. Zorunlu üst seviye alanlar (25)

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
| `ikasSablon` | enum | `starter` · `webhook-listener` · `yok` — §6.10 |
| `ikasHedef` | enum | §6.6 |
| `ikasKapsam` | array | §6.7 OAuth scope alt kümesi |
| `ikasAksiyon` | array | §6.8 `{ yer, tip }` |
| `ikasWebhook` | array | §6.9 kapalı 9 webhook |
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

`storefront-script` · `admin-iframe` · `admin-action` · `webhook` — **app-block yasak**

### 6.3 `ikasTur`

`admin` = Public App · `ozel` = Private App · `yok` = native / Dashboard script

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

`read-campaigns` · `read-customers` · `read-inventories` · `read-orders` · `read-products` · `write-campaigns` · `write-customers` · `write-inventories` · `write-orders` · `write-products` · `write-storefront`

### 6.8 `ikasAksiyon`

`yer`: `product-edit` · `order-view` · `order-package` · `order-list-bulk`  
`tip`: `iframe` · `api`

### 6.9 `ikasWebhook` (kapalı 9)

`store/order/created` · `store/order/updated` · `store/product/created` · `store/product/updated` · `store/customer/created` · `store/customer/updated` · `store/customer/statusUpdated` · `store/stock/created` · `store/stock/updated`

### 6.10 `ikasSablon`

`ikas app init` şablonu: `starter` (UI+OAuth+SDK) · `webhook-listener` · `yok`

---

## 7. `ayarlar`

SectionSchema slot grameri. `storefront-script` için `oncelikliScript` + `publicApiKey` slotları.

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
| Native ikas | `studio-section` veya `yok` | `yok` |

---

## 10. Kayıt kontrol listesi

- [ ] 25 zorunlu alan
- [ ] `ikasLink` doğrulanmış veya `yok`
- [ ] `ikasWebhook` yalnızca kapalı 9
- [ ] `tespit` tahmin içermiyor
- [ ] `node scripts/validate-apps.mjs` temiz
