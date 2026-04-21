export type Ilce = {
  slug: string;
  name: string;
  nameLocative: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  mahalleler: string[];
  landmarks: string[];
  responseTimeMinutes: number;
  neighbors: string[];
  postalCodes: string[];
  latitude: number;
  longitude: number;
  localNote: string;
  sampleJobs: string[];
};

export const ilceler: Ilce[] = [
  {
    slug: "buca-elektrikci",
    name: "Buca",
    nameLocative: "Buca'da",
    metaTitle: "Buca Elektrikçi 7/24 Acil Servis | 15 Dakikada Yerinizde | Elektrikçi Haktan",
    metaDescription:
      "Buca'da 7/24 elektrikçi servisi. Tüm mahallelerde 15 dakikada acil müdahale, sigorta atması, tesisat, kombi-klima-avize montajı. Ücretsiz keşif.",
    intro:
      "Buca'nın tüm mahallelerinde 20 yılı aşkın tecrübeyle elektrik servisi veriyoruz. Tınaztepe'deki öğrenci sitelerinden Şirinyer'deki dükkân bakımlarına, Göksu'daki yeni konut projelerinden eski Kaynaklar'daki tesisat yenilemelerine kadar her ölçekte iş yapıyoruz.",
    mahalleler: [
      "1 Mayıs", "Adatepe", "Akıncılar", "Atatürk", "Barbaros", "Belenbaşı",
      "Buca Koop.", "Çağdaş", "Çaldıran", "Çamlıkule", "Cumhuriyet", "Doğancılar",
      "Dumlupınar", "Efeler", "Göksu", "Gediz", "Güven", "Hürriyet", "İnkılap",
      "İnönü", "Kaynaklar", "Kızılçullu", "Kuruçeşme", "Laleli", "Menderes",
      "Murathan", "Özmen", "Seyhan", "Şirinkapı", "Şirinyer", "Tınaztepe",
      "Ufuk", "Yaylacık", "Yenigün", "Yıldız", "Zafer",
    ],
    landmarks: ["Dokuz Eylül Üniversitesi Tınaztepe Kampüsü", "Şirinyer Pazarı", "Forbes AVM", "Buca Belediyesi", "Hipodrom"],
    responseTimeMinutes: 15,
    neighbors: ["karabaglar-elektrikci", "gaziemir-elektrikci", "bornova-elektrikci", "konak-elektrikci"],
    postalCodes: ["35140", "35150", "35170", "35380", "35390", "35400"],
    latitude: 38.3903,
    longitude: 27.1799,
    localNote:
      "Buca'da özellikle Tınaztepe ve Şirinyer'deki öğrenci evlerinde hafta sonu bile acil elektrik servisimiz aktiftir. Eski Kaynaklar ve Kızılçullu bölgesinde topraklamasız tesisat çok yaygın — bu bölgelerde topraklama ve pano yenileme işimizin büyük kısmı.",
    sampleJobs: [
      "Tınaztepe öğrenci sitesinde 40 daire topraklama ölçümü",
      "Şirinyer dükkânlarında komple W-otomat pano geçişi",
      "Göksu yeni konutlarında klima elektrik altyapısı",
    ],
  },
  {
    slug: "konak-elektrikci",
    name: "Konak",
    nameLocative: "Konak'ta",
    metaTitle: "Konak Elektrikçi 7/24 Acil Servis | Alsancak, Kemeraltı, Basmane | Elektrikçi Haktan",
    metaDescription:
      "Konak ilçesinde 7/24 elektrikçi. Alsancak, Kemeraltı, Basmane, Kordon ve tüm merkez mahallelerinde acil elektrik tamiri, tesisat ve montaj.",
    intro:
      "İzmir'in kalbi Konak'ta, Kemeraltı'ndaki tarihi dükkânlardan Alsancak'taki kafelere, Basmane'deki otellerden Kordon rezidanslarına kadar her noktaya hizmet veriyoruz. Tarihi yapıların hassas tesisat yenileme işlerinde yılların birikimiyle çalışıyoruz.",
    mahalleler: [
      "Akdeniz", "Akıncı", "Alsancak", "Altay", "Altıntaş", "Ballıkuyu",
      "Basmane", "Bozkurt", "Çankaya", "Fevzipaşa", "Gaziosmanpaşa",
      "Güneş", "Güzelyalı", "Hasan Özdemir", "Hatay", "Kadifekale",
      "Kahramanlar", "Karantina", "Kemeraltı", "Kocatepe", "Konak",
      "Kubilay", "Kültür", "Mersinli", "Tınaztepe", "Umurbey",
      "Yeşildere", "Yıldız",
    ],
    landmarks: ["Saat Kulesi", "Kemeraltı Çarşısı", "Konak Pier", "Alsancak Limanı", "Kordon", "Kültürpark", "İzmir Limanı"],
    responseTimeMinutes: 12,
    neighbors: ["karabaglar-elektrikci", "buca-elektrikci", "bayrakli-elektrikci"],
    postalCodes: ["35220", "35230", "35240", "35250", "35260"],
    latitude: 38.4192,
    longitude: 27.1287,
    localNote:
      "Kemeraltı'ndaki tarihi yapılarda eski tesisat yenileme ve LED aydınlatma projelerinde özel tecrübemiz var. Alsancak ve Kordon bölgesindeki kafe-restoranların yoğun yük ihtiyacı için trifaze tesisat dönüşümleri sık yaptığımız işlerden.",
    sampleJobs: [
      "Kemeraltı tarihi handa LED vitrin aydınlatma projesi",
      "Alsancak kafelerinde trifaze pano ve fırın bağlantısı",
      "Kordon rezidansında akıllı ev elektrik altyapısı",
    ],
  },
  {
    slug: "bornova-elektrikci",
    name: "Bornova",
    nameLocative: "Bornova'da",
    metaTitle: "Bornova Elektrikçi 7/24 Acil Servis | Ege Üniversitesi Bölgesi | Elektrikçi Haktan",
    metaDescription:
      "Bornova'da 7/24 elektrikçi servisi. Ege Üniversitesi çevresi, Evka siteleri ve tüm mahallelerde acil elektrik tamiri, tesisat yenileme, montaj.",
    intro:
      "Bornova'da Ege Üniversitesi öğrenci evlerinden Evka sitelerine, Forum Bornova çevresindeki ticari alanlardan Kemalpaşa yolu üzerindeki sanayiye kadar geniş bir yelpazede elektrik işleri yürütüyoruz.",
    mahalleler: [
      "Atatürk", "Barbaros", "Birlik", "Çamdibi", "Çamkıran", "Doğanlar",
      "Ergene", "Erzene", "Evka 3", "Evka 4", "Gürpınar", "İnönü",
      "İşçiler", "Kazımdirik", "Kemalpaşa", "Koşukavak", "Küçük Park",
      "Laka", "Manavkuyu", "Meriç", "Mevlana", "Naldöken", "Pınarbaşı",
      "Rafet Paşa", "Serintepe", "Tuna", "Yeşilçam", "Yeşilova", "Zafer",
    ],
    landmarks: ["Ege Üniversitesi", "Forum Bornova AVM", "MetroCity Bornova", "Bornova Stadyumu", "Aşık Veysel Rekreasyon Alanı"],
    responseTimeMinutes: 18,
    neighbors: ["buca-elektrikci", "bayrakli-elektrikci", "karabaglar-elektrikci"],
    postalCodes: ["35030", "35040", "35050", "35100"],
    latitude: 38.4706,
    longitude: 27.2150,
    localNote:
      "Ege Üniversitesi bölgesindeki öğrenci dairelerinde hafta başı sigorta atması ve priz yanması şikayetleri yoğun. Evka 3 ve Evka 4 sitelerinde ortak pano yenileme projelerinde çalıştık. Kemalpaşa yolu üzerindeki küçük sanayi işletmelerine trifaze bakım veriyoruz.",
    sampleJobs: [
      "Ege Üniversitesi yakını öğrenci evlerinde topraklama dönüşümü",
      "Evka 3 site panosunda kaçak akım rölesi ekleme",
      "Forum Bornova esnafında yoğun sezon pano yenileme",
    ],
  },
  {
    slug: "karabaglar-elektrikci",
    name: "Karabağlar",
    nameLocative: "Karabağlar'da",
    metaTitle: "Karabağlar Elektrikçi 7/24 Acil Servis | Yeşillik, Bozyaka Yakını | Elektrikçi Haktan",
    metaDescription:
      "Karabağlar'da 7/24 elektrikçi. Yeşillik, Uzundere, Bozyaka ve tüm mahallelerde acil elektrik arıza tamiri, tesisat yenileme, klima-kombi montajı.",
    intro:
      "Karabağlar'ın yoğun konut bölgelerinden Yeşillik ve Uzundere'ye, ticari alanlar Bozyaka ve Limontepe'ye kadar hizmet alanımız geniş. 1970-1980 yapısı eski apartmanlarda topraklama ve pano yenileme işlerimiz sık tekrarlanıyor.",
    mahalleler: [
      "Abdi Çubukçu", "Aşık Veysel", "Bahçelievler", "Bahriye Üçok",
      "Basın Sitesi", "Bozyaka", "Cennetçeşme", "Çalıkuşu", "Devrim",
      "Esenlik", "Esentepe", "Fahrettin Altay", "General Asım Gündüz",
      "Gazi", "Günaltay", "Gürpınar", "Ihlamur", "İhsan Alyanak",
      "Karabağlar", "Kibar", "Limontepe", "Maliyeciler", "Peker",
      "Sarıyer", "Selvili", "Şehitler", "Tahsin Yazıcı", "Tekel",
      "Umut", "Uzundere", "Üçkuyular", "Vatan", "Yeşildere", "Yeşillik",
      "Yunus Emre", "Yurtoğlu",
    ],
    landmarks: ["Üçkuyular İskele", "Karabağlar Pazarı", "Yeşillik Caddesi", "Bozyaka Eğitim ve Araştırma Hastanesi"],
    responseTimeMinutes: 16,
    neighbors: ["konak-elektrikci", "buca-elektrikci", "gaziemir-elektrikci", "bozyaka-elektrikci"],
    postalCodes: ["35120", "35140", "35160", "35170"],
    latitude: 38.3833,
    longitude: 27.1294,
    localNote:
      "Karabağlar'ın eski apartmanlarında alüminyum kablolu tesisata sıkça rastlıyoruz. Yeşillik Caddesi'ndeki dükkânlar için akşam saatlerinde de servis veriyoruz. Uzundere'de yeni konut projelerinin elektrik tesisatı kurulumlarında çalıştık.",
    sampleJobs: [
      "Yeşillik Caddesi'nde dükkân trifaze pano yenileme",
      "Uzundere'de yeni inşaat blokları komple tesisat",
      "Bozyaka hastane çevresinde öğrenci evlerinde acil servis",
    ],
  },
  {
    slug: "bayrakli-elektrikci",
    name: "Bayraklı",
    nameLocative: "Bayraklı'da",
    metaTitle: "Bayraklı Elektrikçi 7/24 Acil Servis | İzmir Finans Merkezi | Elektrikçi Haktan",
    metaDescription:
      "Bayraklı'da 7/24 elektrikçi servisi. Salhane, Turan, Folkart Towers çevresi ve tüm mahallelerde acil elektrik arıza tamiri, tesisat, rezidans montajı.",
    intro:
      "Bayraklı, son yıllarda İzmir'in yeni finans ve konut merkezi haline geldi. Folkart Towers çevresindeki plazalardan Salhane'deki eski apartmanlara, Turan'daki dükkânlardan yeni yapılmış rezidans projelerine kadar tüm elektrik ihtiyaçlarını karşılıyoruz.",
    mahalleler: [
      "Adalet", "Alpaslan", "Bayraklı", "Cengizhan", "Cumhuriyet",
      "Çay", "Doğançay", "Fuat Edip Baksı", "Gümüşpala", "Manavkuyu",
      "Muhittin Erener", "Onur", "Org. Nafiz Gürman", "Osmangazi",
      "Postacılar", "Refik Şevket İnce", "Salhane", "Soğukkuyu",
      "Tepekule", "Turan", "Yamanlar",
    ],
    landmarks: ["Folkart Towers", "Bayraklı İzmir Ekonomi Finans Merkezi", "Salhane Adliye", "Tepekule Kongre Merkezi", "Egekent"],
    responseTimeMinutes: 18,
    neighbors: ["konak-elektrikci", "bornova-elektrikci"],
    postalCodes: ["35540", "35560", "35580"],
    latitude: 38.4655,
    longitude: 27.1694,
    localNote:
      "Bayraklı rezidans projelerinde akıllı ev (smart home) altyapısı kurulumlarında çalışıyoruz. Salhane ve Turan'daki eski apartmanlarda kablo yenileme ve topraklama işlerimiz sık. Folkart Towers ve Ege Perla çevresindeki ofislerde yoğun yük için trifaze dönüşümler yapıyoruz.",
    sampleJobs: [
      "Folkart Towers ofisinde trifaze pano ve UPS bağlantısı",
      "Salhane apartmanında komple tesisat yenileme",
      "Bayraklı rezidansta akıllı ev KNX kablolama",
    ],
  },
  {
    slug: "gaziemir-elektrikci",
    name: "Gaziemir",
    nameLocative: "Gaziemir'de",
    metaTitle: "Gaziemir Elektrikçi 7/24 Acil Servis | Emlak Bankası, Sarnıç | Elektrikçi Haktan",
    metaDescription:
      "Gaziemir'de 7/24 elektrikçi. Emlak Bankası, Sarnıç, Aktepe ve tüm mahallelerde acil elektrik arıza servisi, tesisat, havalimanı bölgesinde hızlı ulaşım.",
    intro:
      "Gaziemir, İzmir Adnan Menderes Havalimanı çıkışı ve Optimum AVM ile bilinir. Havalimanı çevresinde oteller, lojistik depolar, Emlak Bankası ve Sarnıç'taki konut bölgeleri ana servis alanlarımız. Havalimanı bölgesine özel hızlı varış süremiz var.",
    mahalleler: [
      "Aktepe", "Atıfbey", "Beyazevler", "Binbaşı Reşatbey", "Dokuz Eylül",
      "Emlak Bankası", "Fatih", "Gazi", "Gaziler", "Hürriyet",
      "Irmak", "Menderes", "Sakarya", "Sarnıç", "Üçkuyular", "Yeşil",
    ],
    landmarks: ["Adnan Menderes Havalimanı", "Optimum AVM", "Gaziemir Tren İstasyonu", "Emlak Bankası Konutları"],
    responseTimeMinutes: 20,
    neighbors: ["buca-elektrikci", "karabaglar-elektrikci"],
    postalCodes: ["35410", "35415", "35417"],
    latitude: 38.3223,
    longitude: 27.1407,
    localNote:
      "Havalimanı çevresindeki otellerde gece saatlerinde acil müdahale ihtiyacı çok yüksek — özellikle klima ve asansör bağlantıları için. Sarnıç ve Aktepe'deki eski konut bölgelerinde pano yenileme ve topraklama işlerimiz sürekli. Emlak Bankası konutlarında tam komple tesisat yenileme projelerinde çalıştık.",
    sampleJobs: [
      "Havalimanı çevresi otelde gece klima besleme bağlantısı",
      "Emlak Bankası konutlarında komple tesisat yenileme",
      "Optimum çevresi mağazada LED vitrin tesisatı",
    ],
  },
  {
    slug: "balcova-elektrikci",
    name: "Balçova",
    nameLocative: "Balçova'da",
    metaTitle: "Balçova Elektrikçi 7/24 Acil Servis | Onur, Fahrettin Altay | Elektrikçi Haktan",
    metaDescription:
      "Balçova'da 7/24 elektrikçi servisi. Onur, Fahrettin Altay, Çetin Emeç mahalleleri ve tüm Balçova'da acil elektrik tamiri, tesisat, termal otel bölgesi.",
    intro:
      "Balçova, termal otelleri ve Dokuz Eylül Üniversitesi Tıp Fakültesi ile bilinen, kompakt ama yoğun bir ilçe. Onur ve Fahrettin Altay mahallelerindeki konutlardan Kaynaklar yolundaki ticari işletmelere hizmet veriyoruz.",
    mahalleler: [
      "Bahçelerarası", "Çetin Emeç", "Eğitim", "Fahrettin Altay",
      "İnciraltı", "Korutürk", "Onur", "Çamlık", "Teleferik",
    ],
    landmarks: ["Dokuz Eylül Üniversitesi Tıp Fakültesi", "Balçova Termal Otelleri", "İnciraltı Sahili", "Teleferik"],
    responseTimeMinutes: 15,
    neighbors: ["karabaglar-elektrikci", "konak-elektrikci"],
    postalCodes: ["35330", "35340"],
    latitude: 38.3897,
    longitude: 27.0442,
    localNote:
      "Balçova termal otellerinde jakuzi, sauna ve havuz çevresi için IP65 suya dayanıklı aydınlatma ve priz tesisatları kurduk. Üniversite hastanesi çevresindeki öğrenci-doktor evlerinde hafta sonu bile servis veriyoruz. Teleferik ve İnciraltı hattı boyunca cephe aydınlatması projelerinde çalışıyoruz.",
    sampleJobs: [
      "Balçova termal otelde havuz çevresi IP65 tesisat",
      "Onur Mahallesi'nde 12 daireli apartman pano yenileme",
      "İnciraltı'nda restoran trifaze mutfak tesisatı",
    ],
  },
  {
    slug: "bozyaka-elektrikci",
    name: "Bozyaka",
    nameLocative: "Bozyaka'da",
    metaTitle: "Bozyaka Elektrikçi 7/24 Acil Servis | Hastane Bölgesi | Elektrikçi Haktan",
    metaDescription:
      "Bozyaka'da 7/24 elektrikçi servisi. Bozyaka Eğitim ve Araştırma Hastanesi çevresi, konut bölgeleri ve tüm Bozyaka'da acil elektrik tamiri, tesisat montajı.",
    intro:
      "Bozyaka, Karabağlar ilçesi sınırları içinde yoğun bir konut ve sağlık bölgesidir. Bozyaka Eğitim ve Araştırma Hastanesi çevresinde doktor-hemşire konutlarında ve öğrenci dairelerinde 7/24 servis veriyoruz.",
    mahalleler: [
      "Bozyaka", "Yeşillik Bozyaka", "Abdi Çubukçu", "Basın Sitesi",
      "Gazi", "Selvili", "Şehitler", "Günaltay",
    ],
    landmarks: ["Bozyaka Eğitim ve Araştırma Hastanesi", "Bozyaka Pazarı", "Yeşillik Caddesi"],
    responseTimeMinutes: 16,
    neighbors: ["karabaglar-elektrikci", "konak-elektrikci"],
    postalCodes: ["35170", "35380"],
    latitude: 38.3942,
    longitude: 27.1236,
    localNote:
      "Bozyaka'nın eski yapı apartmanlarında kaçak akım rölesi olmayan panolar yaygın. Hastane çevresindeki doktor evlerinde 24 saat sigorta atması şikayeti için hızlı ulaşım sağlıyoruz. Yeşillik Caddesi'ndeki dükkânların buzdolabı ve yük tesisatı için bakım sözleşmeleri yapıyoruz.",
    sampleJobs: [
      "Hastane çevresi apartmanda topraklama çekimi",
      "Yeşillik Caddesi restoranında trifaze pano",
      "Doktor evinde akıllı ev sahne aydınlatması",
    ],
  },
  {
    slug: "alsancak-elektrikci",
    name: "Alsancak",
    nameLocative: "Alsancak'ta",
    metaTitle: "Alsancak Elektrikçi 7/24 Acil Servis | Kordon, Kıbrıs Şehitleri | Elektrikçi Haktan",
    metaDescription:
      "Alsancak'ta 7/24 elektrikçi servisi. Kordon, Kıbrıs Şehitleri, Pasaport ve tüm Alsancak'ta acil elektrik tamiri, restoran-kafe tesisatı, rezidans montajı.",
    intro:
      "Alsancak, İzmir'in en canlı bölgesi — kafeler, restoranlar, tasarım dükkânları ve rezidanslar iç içedir. Kordon boyunca restoranların yüksek yük ihtiyacı için trifaze pano kurulumları ve gece saatlerinde acil tamir servisi veriyoruz.",
    mahalleler: [
      "Alsancak", "Kıbrıs Şehitleri", "Atatürk Caddesi", "Gazi Bulvarı",
      "Cumhuriyet Bulvarı", "Mustafa Kemal Sahil Bulvarı", "1472 Sokak",
      "1453 Sokak", "Pasaport", "Gündoğdu",
    ],
    landmarks: ["Kordon", "Alsancak Limanı", "Kültürpark", "Cumhuriyet Meydanı", "Alsancak Tren Garı", "Passport"],
    responseTimeMinutes: 12,
    neighbors: ["konak-elektrikci", "bayrakli-elektrikci"],
    postalCodes: ["35220", "35230"],
    latitude: 38.4376,
    longitude: 27.1437,
    localNote:
      "Alsancak'taki kafe-restoran işletmeleri için fırın, espresso makinesi, klima ve buzdolabı yük kombinasyonunda trifaze pano dönüşümü en sık yaptığımız iş. Gece işletmeleri için sabah saatlerinde önleyici bakım servisi veriyoruz. Rezidanslardaki akıllı ev altyapısı kurulumlarında yaygın çalışıyoruz.",
    sampleJobs: [
      "Kordon restoranında trifaze pano ve mutfak tesisatı",
      "Kıbrıs Şehitleri kafede gece acil buzdolabı devresi",
      "Alsancak rezidansta akıllı aydınlatma senaryo kurulumu",
    ],
  },
  {
    slug: "goztepe-elektrikci",
    name: "Göztepe",
    nameLocative: "Göztepe'de",
    metaTitle: "Göztepe Elektrikçi 7/24 Acil Servis | Mithatpaşa, Köprü | Elektrikçi Haktan",
    metaDescription:
      "Göztepe'de 7/24 elektrikçi servisi. Mithatpaşa Caddesi çevresi ve tüm Göztepe bölgesinde acil elektrik tamiri, tesisat yenileme, montaj hizmetleri.",
    intro:
      "Göztepe, Konak ile Balçova arasında yer alan, Mithatpaşa Caddesi boyunca uzanan sakin bir konut bölgesi. Deniz manzaralı rezidanslardan eski apartmanlara kadar çeşitli yapı stoğuyla tüm elektrik ihtiyaçlarını karşılıyoruz.",
    mahalleler: [
      "Göztepe", "Mithatpaşa", "Güzelyalı", "Köprü",
      "Güzeltepe", "Poligon",
    ],
    landmarks: ["Mithatpaşa Caddesi", "Göztepe Kıyı Bandı", "Alsancak Stadyumu (eski)", "Köprü İskelesi"],
    responseTimeMinutes: 14,
    neighbors: ["konak-elektrikci", "karabaglar-elektrikci", "guzelyali-elektrikci"],
    postalCodes: ["35290"],
    latitude: 38.4133,
    longitude: 27.0925,
    localNote:
      "Göztepe sahil bandındaki rezidanslarda deniz nemi nedeniyle kaçak akım şikayetleri çok sık. Bu bölgede nemli priz-buat değişimi ve kaçak tespiti işlerimiz yoğun. Mithatpaşa caddesindeki dükkânlarda LED vitrin aydınlatma projelerinde çalışıyoruz.",
    sampleJobs: [
      "Göztepe sahil rezidansta nem kaynaklı kaçak tespiti",
      "Mithatpaşa'da eczane vitrin LED aydınlatma",
      "Köprü'de deniz manzaralı dairede komple tesisat yenileme",
    ],
  },
  {
    slug: "guzelyali-elektrikci",
    name: "Güzelyalı",
    nameLocative: "Güzelyalı'da",
    metaTitle: "Güzelyalı Elektrikçi 7/24 Acil Servis | İnciraltı Yakını | Elektrikçi Haktan",
    metaDescription:
      "Güzelyalı'da 7/24 elektrikçi servisi. İnciraltı yakını, Mithatpaşa devamı ve tüm Güzelyalı'da acil elektrik arıza tamiri, nemli bölge tesisat uzmanı.",
    intro:
      "Güzelyalı, Konak'ın batı ucunda deniz kenarı uzanan bir bölge. Kendine özgü nemli deniz havası, tesisat ömrünü kısaltır — bu sebeple topraklama bakımı ve kaçak akım kontrolleri çok önemli. Biz bu bölgeye özel korozyona dayanıklı malzeme ve IP65 uygulamalar yapıyoruz.",
    mahalleler: [
      "Güzelyalı", "Mithatpaşa (Güzelyalı bölümü)",
      "Reşat Nuri Güntekin", "Uğur Mumcu",
    ],
    landmarks: ["İnciraltı Kenti", "Güzelyalı Kıyı Parkı", "Güzelyalı Vapur İskelesi"],
    responseTimeMinutes: 15,
    neighbors: ["konak-elektrikci", "goztepe-elektrikci", "balcova-elektrikci"],
    postalCodes: ["35330"],
    latitude: 38.4012,
    longitude: 27.0744,
    localNote:
      "Güzelyalı ve çevresinde deniz nemi tesisat ömrünü ciddi kısaltıyor. Standart priz-buat 3-5 yılda oksitlenebiliyor; biz bu bölgeye IP65 veya korozyon dirençli ürünler tercih ediyoruz. Vapur iskelesi çevresindeki dükkânlarda ek topraklama uygulamaları yapıyoruz.",
    sampleJobs: [
      "Güzelyalı sahilde korozyon nedenli priz yenileme",
      "Reşat Nuri Güntekin'de deniz manzaralı dairede kaçak tespiti",
      "Vapur iskelesi yakını işletmede IP65 dış aydınlatma",
    ],
  },
  {
    slug: "ucyol-elektrikci",
    name: "Üçyol",
    nameLocative: "Üçyol'da",
    metaTitle: "Üçyol Elektrikçi 7/24 Acil Servis | Metro Hattı Bölgesi | Elektrikçi Haktan",
    metaDescription:
      "Üçyol'da 7/24 elektrikçi servisi. Metro hattı çevresi ve tüm Üçyol bölgesinde acil elektrik tamiri, eski apartman tesisat yenileme, topraklama.",
    intro:
      "Üçyol, İzmir Metrosu'nun önemli aktarma noktalarından biri olan, Konak ile Karabağlar arasında kalan yoğun bir konut ve küçük esnaf bölgesi. Eski 4-5 katlı apartmanlar ve sokak altı dükkânlar ağırlıklıdır.",
    mahalleler: [
      "Üçyol", "Hatay (Üçyol bölümü)", "Basmane",
      "Yıldız", "Fevzipaşa",
    ],
    landmarks: ["Üçyol Metro İstasyonu", "Basmane Garı (yakın)", "İzmir Adliyesi (yakın)"],
    responseTimeMinutes: 14,
    neighbors: ["konak-elektrikci", "karabaglar-elektrikci"],
    postalCodes: ["35250", "35260"],
    latitude: 38.4178,
    longitude: 27.1397,
    localNote:
      "Üçyol bölgesindeki 1980 öncesi apartmanlarda sık karşılaştığımız durum: cam sigortalı pano + topraklamasız tesisat. Bu bölgede komple pano + topraklama modernizasyonu en sık yaptığımız iş. Metro istasyonu çevresindeki küçük dükkânlara gündüz saatlerinde hızlı servis veriyoruz.",
    sampleJobs: [
      "Üçyol Metro yakını dükkânda acil ek priz çekimi",
      "Hatay'a yakın apartmanda cam sigorta → W-otomat geçişi",
      "Basmane yakını pansiyonda topraklama tesisi",
    ],
  },
  {
    slug: "yesilyurt-elektrikci",
    name: "Yeşilyurt",
    nameLocative: "Yeşilyurt'ta",
    metaTitle: "Yeşilyurt Elektrikçi 7/24 Acil Servis | Karabağlar-Menderes | Elektrikçi Haktan",
    metaDescription:
      "Yeşilyurt'ta 7/24 elektrikçi servisi. Karabağlar-Menderes aksı, yoğun konut bölgesi ve tüm Yeşilyurt'ta acil elektrik arıza tamiri, tesisat montajı.",
    intro:
      "Yeşilyurt, Karabağlar'ın güney ucunda yer alan büyük bir mahalle/bölge. Geniş aileler için 3+1 konut ağırlıklı, orta gelirli, yoğun trafikli bir bölge. Okul çevrelerinde öğrenci aileleri için hafta sonu servislerimiz var.",
    mahalleler: [
      "Yeşilyurt", "General Asım Gündüz", "Peker",
      "Tahsin Yazıcı", "Yurtoğlu",
    ],
    landmarks: ["Yeşilyurt Devlet Hastanesi (yakın)", "Yeşilyurt Meydanı", "Menderes Caddesi"],
    responseTimeMinutes: 17,
    neighbors: ["karabaglar-elektrikci", "buca-elektrikci", "gaziemir-elektrikci"],
    postalCodes: ["35350"],
    latitude: 38.3717,
    longitude: 27.1222,
    localNote:
      "Yeşilyurt'ta büyük aile apartmanları için acil müdahalelerde hızlıyız. Özellikle kombi devreye alma ve çamaşır makinesi devresi kurulumu sık talep. Okul sezon açılışında çocuk korumalı priz talebi artar, sezon başında kampanyalı değişim yapıyoruz.",
    sampleJobs: [
      "Yeşilyurt 12 daireli apartmanda ortak topraklama",
      "Okul çevresi dairede çocuk korumalı priz değişimi",
      "Menderes Caddesi'nde dükkân klima trifaze bağlantısı",
    ],
  },
  {
    slug: "hatay-elektrikci",
    name: "Hatay",
    nameLocative: "Hatay'da",
    metaTitle: "Hatay Elektrikçi 7/24 Acil Servis | Konak-İzmir | Elektrikçi Haktan",
    metaDescription:
      "Hatay (Konak) mahallesinde 7/24 elektrikçi servisi. Konak ilçesinin yoğun konut bölgesinde acil elektrik tamiri, tesisat yenileme, montaj hizmetleri.",
    intro:
      "Hatay, Konak ilçesine bağlı Kadifekale eteklerinden başlayan, yoğun konut ve küçük esnaf bölgesi. Tarihi dokuya yakın eski apartmanlar ağırlıklı, tesisat yenileme ve pano dönüşümü en sık iş türü.",
    mahalleler: [
      "Hatay", "Kubilay", "Mersinli (Hatay sınırı)",
      "Bozkurt", "Kadifekale",
    ],
    landmarks: ["Kadifekale", "Hatay Çarşısı", "Konak Metro İstasyonu (yakın)"],
    responseTimeMinutes: 14,
    neighbors: ["konak-elektrikci", "karabaglar-elektrikci"],
    postalCodes: ["35240"],
    latitude: 38.4089,
    longitude: 27.1479,
    localNote:
      "Hatay'ın Kadifekale'ye yakın eski yapı bölümlerinde tesisat 30-40 yaşına ulaşmış, komple yenileme ihtiyacı yoğun. Esnaf dükkânlarında sezon başı pano bakımı sözleşmeli çalışıyoruz. Kadifekale eteklerindeki dar sokaklarda lojistik anlamda deneyimliyiz.",
    sampleJobs: [
      "Hatay'da eski apartmanda komple tesisat yenileme",
      "Kadifekale eteklerinde dükkânda sigorta panosu değişimi",
      "Kubilay'da klima ve kombi çift montajı",
    ],
  },
  {
    slug: "esrefpasa-elektrikci",
    name: "Eşrefpaşa",
    nameLocative: "Eşrefpaşa'da",
    metaTitle: "Eşrefpaşa Elektrikçi 7/24 Acil Servis | Konak Merkez | Elektrikçi Haktan",
    metaDescription:
      "Eşrefpaşa'da 7/24 elektrikçi servisi. Konak merkezindeki yoğun konut ve esnaf bölgesinde acil elektrik arıza tamiri, tesisat yenileme, montaj.",
    intro:
      "Eşrefpaşa, Konak ilçesinin merkezi mahallelerinden biri; İzmir Adliyesi ve Eşrefpaşa Caddesi boyunca yoğun esnaf, klinik ve konut trafiği vardır. Biz hem konut hem ticari işletmelere çözüm üretiyoruz.",
    mahalleler: [
      "Eşrefpaşa", "Gaziosmanpaşa", "Fevzipaşa",
      "Altay", "Güzelyurt",
    ],
    landmarks: ["Eşrefpaşa Caddesi", "İzmir Adliyesi", "Eşrefpaşa Hastanesi"],
    responseTimeMinutes: 13,
    neighbors: ["konak-elektrikci", "karabaglar-elektrikci"],
    postalCodes: ["35240", "35260"],
    latitude: 38.4089,
    longitude: 27.1356,
    localNote:
      "Eşrefpaşa Caddesi üzerindeki kliniklerde (özellikle diş ve göz) hassas cihaz beslemesi için kesintisiz güç kaynağı (UPS) bağlantıları yapıyoruz. Adliye çevresindeki ofis binalarında bakım sözleşmelerimiz var. Eski apartmanlarda topraklama ve pano işlerimiz yoğun.",
    sampleJobs: [
      "Eşrefpaşa diş kliniğinde UPS ve güç hattı",
      "Adliye yakını ofiste ağ kablo + priz sistemi",
      "Fevzipaşa'da eski apartman pano yenileme",
    ],
  },
];

export const getIlce = (slug: string) => ilceler.find((i) => i.slug === slug);
