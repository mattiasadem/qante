# Shopify App Store — liste

QANTE uygulama envanteri takibi: hangi popüler Shopify uygulamasının AppSchema JSON'u var.  
Durum: `done` = şema `apps/` altında mevcut · boş = kuyruk.  
Viewer: **Listeler** sekmesi (grup: Shopify appler) ve **Appler** sekmesi.

## Kaynaklar

| Kaynak | Ne | Not |
|---|---|---|
| [Diego Community, 10 Mar 2026](https://community.shopify.com) | Diego % sütunu | 10.205 mağaza örneklemi — yalnızca tabloda verilen satırlar |
| [Store Leads — State of Shopify 2026](https://storeleads.app) | StoreLeads sütunu | Tüm mağaza evreni, detectable install oranı / ~mağaza sayısı |
| Eightx Plus-only sıralaması | — | **Karıştırma** — farklı popülasyon; Diego % ile birleştirilmez |

*Kesim:* 19 Ağustos 2026. AppSchema v0 — **Awaiting user approval** (12 alan).

| # | Status | App | Kategori | Scope | Diego % | StoreLeads | Notes |
|---|---|---|---|---|---|---|---|
| 1 | done | Judge.me | reviews | in-flow | | ~20% / ~612k | app-block + app-embed. ikas: native reviews + Lehte |
| 2 | done | Yotpo | reviews | in-flow | | | Ağır reviews suite. ikas: Lehte |
| 3 | done | Stamped.io | reviews | in-flow | | | Reviews + opsiyonel loyalty_launcher |
| 4 | done | Loox | reviews | in-flow | | | Foto/video UGC-first |
| 5 | done | Klaviyo | capture | overlay | | ~13.7% / ~420k | Popup + flyout + embedded_form + web-pixel |
| 6 | done | Privy | capture | overlay | | | Popup / çark uzmanı |
| 7 | done | Attentive | capture | overlay | | | SMS overlay |
| 8 | done | Omnisend | capture | overlay | | | Popup + spin_wheel |
| 9 | done | Mailchimp | capture | overlay | | ~144k | Zayıf onsite; popup + embedded_form |
| 10 | done | Hextom Announcement Bar | bar | overlay | | | announcement_bar, app-embed |
| 11 | done | Hextom Free Shipping Bar | bar | overlay | | | free_shipping_bar. ikas: Barlio |
| 12 | done | Smile.io | loyalty | overlay | | | loyalty_launcher + badge + page. ikas: Sadakat Programı |
| 13 | done | Growave | loyalty | in-flow | | | Suite: loyalty + wishlist + reviews |
| 14 | done | Swym Wishlist Plus | wishlist | overlay | | | wishlist_button/drawer/page. ikas: Favori Ürünler |
| 15 | done | Rebuy | merchandising | overlay | | | cart_drawer + product_recs. ikas: cart Drawer + Kabile Sepet+ |
| 16 | done | Klarna On-Site Messaging | payments | in-flow | | | bnpl_messaging, app-block |
| 17 | done | Afterpay On-Site Messaging | payments | in-flow | | | bnpl_messaging |
| 18 | done | PageFly | builder | page | | ~192k | page-runtime; yuzey çocuklardan çıkarılır. ikas: Studio |
| 19 | done | Shogun | builder | page | | | PageFly ile aynı builder ailesi |
| 20 | done | Google Analytics 4 | pixel | head | | | web-pixel. ikas: Extensions / Scripts |
| 21 | done | Facebook / Meta Pixel | pixel | head | | | web-pixel |
| 22 | done | Google Tag Manager | pixel | head | | | web-pixel + script-tag |
| 23 | done | Segment | pixel | head | | | CDP olay yönlendirme |
| 24 | done | Microsoft Clarity | pixel | head | | | Oturum kaydı / heatmap |
| 25 | done | Hotjar | pixel | head | | | script-tag ağırlıklı |
| 26 | done | Google Analytics Universal | pixel | head | | | **Deprecated** — GA4'e geçiş. Şema dürüstlük için tutulur |
| 27 | done | Shopify Inbox | capture | overlay | | ~11.7% | Canlı sohbet flyout; capture kategorisi |
| 28 | done | Instafeed | merchandising | in-flow | | ~240k | ugc_gallery sosyal feed; merchandising (reviews değil) |

**Atlandı (ops, vitrin grammar dışı):** Printful, Printify — fulfillment/print-on-demand, storefront yüzeyi envanter kapsamı dışı.
