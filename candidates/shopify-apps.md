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

*Kesim:* 19 Ağustos 2026. AppSchema v0.3 — **Awaiting user approval** (27 alan).

| # | Status | App | Kategori | Scope | Diego % | StoreLeads | Notes |
|---|---|---|---|---|---|---|---|
| 1 | done | Judge.me | reviews | in-flow | | ~20% / ~612k | app-block + app-embed |
| 2 | done | Yotpo | reviews | in-flow | | | Ağır reviews suite |
| 3 | done | Stamped.io | reviews | in-flow | | | Reviews + opsiyonel loyalty_launcher |
| 4 | done | Loox | reviews | in-flow | | | Foto/video UGC-first |
| 5 | done | Klaviyo | capture | overlay | | ~13.7% / ~420k | Popup + flyout + embedded_form + web-pixel |
| 6 | done | Privy | capture | overlay | | | Popup / çark uzmanı |
| 7 | done | Attentive | capture | overlay | | | SMS overlay |
| 8 | done | Omnisend | capture | overlay | | | Popup + spin_wheel |
| 9 | done | Mailchimp | capture | overlay | | ~144k | Zayıf onsite; popup + embedded_form |
| 10 | done | Hextom Announcement Bar | bar | overlay | | | announcement_bar, app-embed |
| 11 | done | Hextom Free Shipping Bar | bar | overlay | | | free_shipping_bar |
| 12 | done | Smile.io | loyalty | overlay | | | loyalty_launcher + badge + page |
| 13 | done | Growave | loyalty | in-flow | | | Suite: loyalty + wishlist + reviews |
| 14 | done | Swym Wishlist Plus | wishlist | overlay | | | wishlist_button/drawer/page |
| 15 | done | Rebuy | merchandising | overlay | | | cart_drawer + product_recs |
| 16 | done | Klarna On-Site Messaging | payments | in-flow | | | bnpl_messaging, app-block |
| 17 | done | Afterpay On-Site Messaging | payments | in-flow | | | bnpl_messaging |
| 18 | done | PageFly | builder | page | | ~192k | page-runtime; yuzey çocuklardan çıkarılır |
| 19 | done | Shogun | builder | page | | | PageFly ile aynı builder ailesi |
| 20 | done | Google Analytics 4 | pixel | head | | | web-pixel. ikas: Extensions (ikasTur yok) |
| 21 | done | Facebook / Meta Pixel | pixel | head | | | web-pixel. ikas: Extensions |
| 22 | done | Google Tag Manager | pixel | head | | | web-pixel + script-tag |
| 23 | done | Segment | pixel | head | | | CDP olay yönlendirme |
| 24 | done | Microsoft Clarity | pixel | head | | | Oturum kaydı / heatmap |
| 25 | done | Hotjar | pixel | head | | | script-tag ağırlıklı |
| 26 | done | Google Analytics Universal | pixel | head | | | **Deprecated** — GA4'e geçiş |
| 27 | done | Shopify Inbox | capture | overlay | | ~11.7% | Canlı sohbet flyout |
| 28 | done | Instafeed | merchandising | in-flow | | ~240k | ugc_gallery sosyal feed |
| 29 | done | Announcement Bar Maker (AppHero) | bar | overlay | | | announcement_bar |
| 30 | done | Essential Announcement Bar | bar | overlay | | | Ücretsiz duyuru şeridi |
| 31 | done | EComposer | builder | page | | | page-runtime landing editörü |
| 32 | done | GemPages | builder | page | | | page-runtime |
| 33 | done | Section Factory | builder | in-flow | | | app-block custom section |
| 34 | done | Ecomsend (SendWILL) | capture | overlay | | | popup + embedded_form |
| 35 | done | Justuno | capture | overlay | | | popup + flyout |
| 36 | done | OptiMonk | capture | overlay | | | popup + spin_wheel |
| 37 | done | Pop Convert | capture | overlay | | | popup |
| 38 | done | Popupsmart | capture | overlay | | | popup |
| 39 | done | PushOwl | capture | overlay | | | web push flyout + web-pixel |
| 40 | done | Qikify Popup & Social Proof | capture | overlay | | | popup + social_proof_toast |
| 41 | done | Recart | capture | overlay | | | messenger/SMS flyout + webhook |
| 42 | done | Spin-a-Sale | capture | overlay | | | spin_wheel + popup |
| 43 | done | Wheelio | capture | overlay | | | exit-intent spin_wheel |
| 44 | done | BON Loyalty Rewards | loyalty | overlay | | | puan + launcher |
| 45 | done | Joyio | loyalty | overlay | | | VIP + puan |
| 46 | done | LoyaltyLion | loyalty | overlay | | | puan + referral + webhook |
| 47 | done | ReferralCandy | loyalty | overlay | | | referral program |
| 48 | done | Rivo Loyalty | loyalty | overlay | | | puan + launcher |
| 49 | done | Swell (Yotpo Loyalty) | loyalty | overlay | | | Yotpo loyalty suite |
| 50 | done | AfterSell | merchandising | checkout | | | post-purchase upsell, checkout-extension |
| 51 | done | Bundle Deals | merchandising | in-flow | | | product_recs bundle |
| 52 | done | FOMO | merchandising | overlay | | | social_proof_toast + trust_badge |
| 53 | done | BOGOS Free Gifts | merchandising | in-flow | | | product_recs only (BOGO) |
| 54 | done | Frequently Bought Together | merchandising | in-flow | | | PDP cross-sell |
| 55 | done | LimeSpot | merchandising | overlay | | | product_recs + cart_drawer |
| 56 | done | Nudgify | merchandising | overlay | | | social_proof_toast |
| 57 | done | UpCart Cart Drawer | merchandising | overlay | | | cart_drawer + upsell |
| 58 | done | Releasit COD Order Form | payments | overlay | | | COD popup_modal + embedded_form |
| 59 | done | Sezzle Widget | payments | in-flow | | | bnpl_messaging |
| 60 | done | Pinterest | pixel | head | | | web-pixel |
| 61 | done | Snapchat Ads | pixel | head | | | web-pixel |
| 62 | done | TikTok | pixel | head | | | web-pixel |
| 63 | done | Triple Whale | pixel | head | | | web-pixel + CDP webhook |
| 64 | done | Air Reviews | reviews | in-flow | | | yıldız + widget |
| 65 | done | Ali Reviews | reviews | in-flow | | | import + UGC |
| 66 | done | Junip | reviews | in-flow | | | hafif reviews |
| 67 | done | Okendo | reviews | in-flow | | | UGC + carousel |
| 68 | done | Reviews.co.uk | reviews | in-flow | | | ürün + merchant reviews |
| 69 | done | Trustpilot | reviews | in-flow | | | rozet + widget |
| 70 | done | Vitals | reviews | in-flow | | | review_stars + review_widget only |
| 71 | done | Wishlist by Square | wishlist | overlay | | | button + page (no drawer) |
| 72 | done | Wishlist Hero | wishlist | overlay | | | button + drawer + page |
| 73 | done | Wishlist King | wishlist | overlay | | | gelişmiş wishlist |

**Atlandı (ops, vitrin grammar dışı):** Printful, Printify — fulfillment/print-on-demand, storefront yüzeyi envanter kapsamı dışı.
