# Velora Drive — Arabic (RTL) locale: recipe + translation table

⚠️ Translations are MSA with Moroccan Darija flavor, written by the build
agent. **Have a native speaker (you) review every line before publishing** —
especially the testimonials and taglines.

## Recipe (Framer UI — Localization is not exposed via MCP)

1. Site Settings → **Localization** → Add locale → **Arabic (ar)**.
   Verify **Right-to-left** is ON (Framer sets it for `ar` automatically).
   Slug prefix: keep default `/ar`.
2. **Do NOT hand-mirror anything.** Framer flips stacks/alignment for RTL
   locales; all code components use flexbox + logical properties and mirror
   themselves.
3. Switch the locale picker (top bar) to Arabic, then walk each page and
   fill translations: native text layers via the Localization panel;
   component instance **String props** (labels on Nav, Footer, CarCard,
   ContactForm, Accordion, WhatsAppButton) via the properties panel with
   the AR locale active — Framer stores per-locale overrides.
4. **Fonts**: Syne and Inter have NO Arabic glyphs — Arabic text will fall
   back to system fonts. Recommended pairing for the AR locale: **Cairo**
   (Google Fonts) — Cairo 800 wherever Syne 800 is used, Cairo 400/600 for
   Inter roles. Apply per-locale in the localization panel (or accept the
   fallback for v1 and note it).
5. Numbers/prices: keep Western digits (199 درهم). Phone stays 0632508708.
6. The WhatsApp message strings should also be translated (props: Nav
   message, WhatsAppButton message, CarCard message, ContactForm msgIntro)
   so Arabic visitors open WhatsApp with an Arabic message.

## Translation table

### Nav
| FR | AR |
|---|---|
| Accueil | الرئيسية |
| Conditions | الشروط |
| Contact | اتصل بنا |
| Réserver | احجز |
| (WA message) Bonjour, je souhaite réserver une voiture | السلام، بغيت نكري سيارة |

### Accueil — hero
| FR | AR |
|---|---|
| Location de voitures — Maroc | كراء السيارات — المغرب |
| La route vous attend. | الطريق كيتسناك. |
| Louez une voiture partout au Maroc, sans chauffeur, à partir de 199 DH par jour. Livraison gratuite. Réservation en deux minutes. | اكري سيارة في أي مدينة بالمغرب، بدون سائق، ابتداءً من 199 درهم لليوم. التوصيل مجاني والحجز في دقيقتين. |
| Réserver sur WhatsApp | احجز عبر واتساب |
| Voir nos voitures | شوف السيارات |

### Trust bar
| FR | AR |
|---|---|
| 199 DH / À partir de, par jour | 199 درهم / ابتداءً من، لليوم |
| Gratuite / Livraison partout au Maroc | مجانية / التوصيل لكل المدن المغربية |
| 24/7 / Assistance téléphonique | 24/7 / مساعدة هاتفية |
| 0 / Frais cachés | 0 / تكاليف خفية |

### Flotte
| FR | AR |
|---|---|
| Notre flotte | أسطولنا |
| Des voitures fiables, des prix clairs. | سيارات موثوقة، وأثمنة واضحة. |
| Chaque tarif est affiché tout compris. Ce que vous voyez est ce que vous payez. | كل ثمن معروض شامل لكل شيء. اللي كتشوف هو اللي كتخلص. |
| Toutes / Citadine / Compacte / SUV | الكل / مدينية / مدمجة / SUV |
| places / Manuelle / Automatique / Diesel / Essence | مقاعد / يدوية / أوتوماتيك / ديزل / بنزين |
| DH · / jour · Réserver · Photo | درهم · / اليوم · احجز · صورة |

### Comment ça marche
| FR | AR |
|---|---|
| Réservation / Comment ça marche | الحجز / كيفاش كيتم الحجز |
| 01 Choisissez — Dites-nous le modèle, les dates et la ville. | 01 اختار — قول لنا الموديل، التواريخ والمدينة. |
| 02 Confirmez — On vous répond sur WhatsApp en moins de 15 minutes. | 02 أكّد — كنجاوبوك على واتساب في أقل من 15 دقيقة. |
| 03 Roulez — On livre la voiture là où vous êtes. Gratuitement. | 03 سوق — كنوصلو ليك السيارة فين ما كنتي. مجاناً. |

### Pourquoi Velora
| FR | AR |
|---|---|
| Pourquoi Velora / Le prix annoncé, la voiture livrée. | علاش فيلورا / الثمن المعلن، والسيارة كتوصل. |
| Livraison gratuite — Partout au Maroc, à l'heure que vous choisissez. | التوصيل مجاني — لكل المدن المغربية، في الوقت اللي يناسبك. |
| Prix tout compris — Assurance et kilométrage inclus. Rien à ajouter à la fin. | ثمن شامل — التأمين والكيلومتراج داخلين في الثمن. والو ما كيتزاد في الآخر. |
| Réponse rapide — Un vrai humain sur WhatsApp, pas un formulaire sans réponse. | جواب سريع — إنسان حقيقي على واتساب، ماشي استمارة بلا جواب. |
| Assistance 24/7 — Un problème sur la route ? On décroche. | مساعدة 24/7 — مشكل في الطريق؟ كنجاوبو. |

### Divider · Témoignages · CTA
| FR | AR |
|---|---|
| Chaque trajet mérite une bonne voiture. | كل طريق كيستاهل سيارة مزيانة. |
| Témoignages / Ce que disent nos clients. | آراء الزبناء / أشنو كيقولو زبناؤنا. |
| « Livrée devant chez moi à 7h du matin, comme convenu. » — Yassine, Casablanca | «وصلوها ليا حتى لباب الدار في السابعة صباحاً، كما اتفقنا.» — ياسين، الدار البيضاء |
| « Le prix annoncé était le prix payé. C'est rare. » — Salma, Rabat | «الثمن المعلن هو الثمن اللي خلصت. وهذا نادر.» — سلمى، الرباط |
| « Réservation faite en cinq messages WhatsApp. Voiture propre. » — Anas, Marrakech | «الحجز تدار في خمس رسائل واتساب. والسيارة نقية.» — أنس، مراكش |
| Prête quand vous l'êtes. | واجدة ملي تكون واجد. |

### Footer
| FR | AR |
|---|---|
| La route vous attend. | الطريق كيتسناك. |
| Pages / Contact / Suivez-nous | الصفحات / اتصل / تابعنا |
| WhatsApp / 0632508708 | واتساب / 0632508708 |
| Karia, Salé — Maroc | قرية، سلا — المغرب |
| © 2026 Velora Drive | © 2026 فيلورا درايف |

### /conditions
| FR | AR |
|---|---|
| Conditions / Tout est écrit. Rien n'est caché. | الشروط / كلشي مكتوب. والو مخبي. |
| Sommaire | الفهرس |
| 1. Qui peut louer | 1. شكون يقدر يكري |
| 2. Documents requis | 2. الوثائق المطلوبة |
| 3. Caution | 3. الضمانة |
| 4. Carburant | 4. الوقود |
| 5. Kilométrage | 5. الكيلومتراج |
| 6. Assurance | 6. التأمين |
| 7. Livraison et récupération | 7. التوصيل والاسترجاع |
| 8. Annulation | 8. الإلغاء |
| 9. Retard et prolongation | 9. التأخير والتمديد |
| 10. Interdictions | 10. الممنوعات |
| Une question sur les conditions ? / Écrivez-nous sur WhatsApp | عندك سؤال على الشروط؟ / كتب لنا على واتساب |
| (WA message) Bonjour, j'ai une question sur les conditions de location | السلام، عندي سؤال على شروط الكراء |

### /contact
| FR | AR |
|---|---|
| Contact / Réponse en moins de 15 minutes. | اتصل بنا / جواب في أقل من 15 دقيقة. |
| Demande de réservation | طلب حجز |
| Nom complet / Téléphone / Ville de livraison | الاسم الكامل / الهاتف / مدينة التوصيل |
| Voiture souhaitée / Choisissez un modèle | السيارة المطلوبة / اختار موديل |
| Date de départ / Date de retour | تاريخ الانطلاق / تاريخ الرجوع |
| Message (optionnel) | رسالة (اختياري) |
| Envoyer la demande | صيفط الطلب |
| (WA intro) Bonjour, je souhaite réserver une voiture. | السلام، بغيت نكري سيارة. |
| Ou écrivez-nous directement sur WhatsApp — réponse en moins de 15 minutes. | أو كتب لنا مباشرة على واتساب — جواب في أقل من 15 دقيقة. |
| Téléphone / WhatsApp · Adresse · Horaires · Suivez-nous | الهاتف / واتساب · العنوان · الأوقات · تابعنا |
| Karia, Salé, Maroc | قرية، سلا، المغرب |
| 7 jours sur 7, de 8h à 22h | 7 أيام في الأسبوع، من 8 صباحاً حتى 10 ليلاً |

### SEO (AR locale page settings)
| Page | Title / Description |
|---|---|
| / | كراء السيارات في المغرب — فيلورا درايف / اكري سيارة بدون سائق في أي مدينة بالمغرب ابتداءً من 199 درهم لليوم. توصيل مجاني، ثمن شامل، والحجز عبر واتساب. |
| /conditions | شروط الكراء — فيلورا درايف / الضمانة، الوقود، الكيلومتراج، التأمين، الإلغاء: كل شروط الكراء مكتوبة بوضوح. |
| /contact | اتصل بنا — فيلورا درايف / احجز سيارتك عبر واتساب أو بالهاتف. توصيل لكل المدن المغربية، وجواب في أقل من 15 دقيقة. |
