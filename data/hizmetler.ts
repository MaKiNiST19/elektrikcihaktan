export type ProcessStep = { step: string; detail: string };
export type Faq = { q: string; a: string };

export type Hizmet = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  longDescription: string;
  icon: string;
  priceRange: string;
  durationMinutes: number;
  keywords: string[];
  symptoms: string[];
  whatWeDo: string[];
  processSteps: ProcessStep[];
  materials: string[];
  warranty: string;
  whenUrgent: string[];
  faq: Faq[];
  relatedServices: string[];
};

export const hizmetler: Hizmet[] = [
  {
    slug: "acil-elektrik-tamiri",
    title: "7/24 Acil Elektrik Arıza Tamiri",
    shortTitle: "Acil Elektrik Tamiri",
    metaTitle: "İzmir 7/24 Acil Elektrik Arıza Tamiri | 15 dk'da Yerinizde | Elektrikçi Haktan",
    metaDescription:
      "İzmir'de 7/24 acil elektrik arıza servisi. Sigorta atması, elektrik kesintisi, kısa devre, kaçak tespiti 15 dakikada yerinizde, ücretsiz keşif.",
    summary:
      "Gece-gündüz fark etmez; sigorta atması, elektrik kesintisi, priz yanması ve kısa devre arızalarına 15 dakika içinde müdahale ediyoruz.",
    longDescription:
      "Elektrik arızası çoğu zaman beklenmedik bir anda çıkar: gece yarısı sigorta atar, çamaşır makinesi duman yapar, priz kıvılcım saçar. Bu tür durumlarda geç kalmak hem yangın riski hem de buzdolabındaki yiyeceklerin bozulması gibi maddi kayıplar demektir. 20 yılı aşkın sahada geçirdiğimiz tecrübeyle arızanın kaynağını telefonda yaptığınız kısa bir açıklamayla bile büyük oranda tespit edebiliyoruz. Yola çıktığımızda çantamızda ihtiyaç duyacağınız standart malzemeler (W-otomat sigorta, kaçak akım rölesi, priz grubu, topraklama kablosu) her zaman bulunur — aynı gün kesin çözümle döneriz. Arıza tespiti yerinde yapılır, ücret alınmaz; onay verdiğiniz onarımın sabit ücreti önceden söylenir.",
    icon: "bolt",
    priceRange: "₺500-₺2500",
    durationMinutes: 60,
    keywords: [
      "izmir acil elektrikçi", "7/24 elektrikçi", "sigorta attı tamiri",
      "gece elektrikçi izmir", "elektrik arıza servisi izmir",
      "kısa devre tamiri", "acil elektrikçi numarası",
    ],
    symptoms: [
      "Sigortalar sürekli atıyor veya yükselmiyor",
      "Evin bir bölümünde elektrik yok ama sayaç çalışıyor",
      "Priz veya anahtardan yanık kokusu geliyor",
      "Kaçak akım rölesi (monofaze/trifaze) düşüyor",
      "Ampul patlıyor veya sürekli yanıyor",
      "Çamaşır makinesi, bulaşık makinesi açılınca sigorta atıyor",
      "Duvardan cızırtı sesi veya yanık izi görünüyor",
    ],
    whatWeDo: [
      "Arıza noktasını pense ve tester ile kesin tespit",
      "Sigorta, kaçak akım rölesi ve W-otomatların değişimi",
      "Priz, anahtar, duy ve buat yenileme",
      "Kısa devre yapan devrelerin izole edilmesi",
      "Topraklama sürekliliğinin kontrolü",
      "Çalışan devreleri güvence altına alıp arızalıyı izole etme",
      "Tüm onarımlara işçilik garantisi ve fatura",
    ],
    processSteps: [
      {
        step: "Telefonla ilk değerlendirme",
        detail: "Belirtiyi kısaca anlatın; olası sebepleri ve tahmini ücreti telefonda söyleriz.",
      },
      {
        step: "15 dakikada yerinde müdahale",
        detail: "Canlı konum paylaşımıyla yola çıkarız. Merkez ilçelerde ortalama varış 15 dakikadır.",
      },
      {
        step: "Arıza tespiti (ücretsiz)",
        detail: "Multimetre, kaçak tespit cihazı ve termal kamerayla arıza noktası bulunur.",
      },
      {
        step: "Sabit ücret onayı",
        detail: "Onarım kapsamı ve fiyat önceden yazılı söylenir; onayınız olmadan işlem başlamaz.",
      },
      {
        step: "Onarım ve test",
        detail: "Değişen parçalar gösterilir, devre yük altında test edilir, kaçak akım rölesi sıfırdan kontrol edilir.",
      },
    ],
    materials: [
      "W-otomat sigorta (C tipi, 6A-32A)",
      "Kaçak akım rölesi 30mA (monofaze/trifaze)",
      "Topraklamalı priz ve anahtarlar (Viko, Legrand)",
      "NYA/NYAF kablo (1.5mm², 2.5mm², 4mm²)",
      "Klemens, makaron, buat",
    ],
    warranty: "Tüm işçilikte 2 yıl, kullanılan malzemede üretici garantisi.",
    whenUrgent: [
      "Prizden duman veya yanık kokusu geldiğinde",
      "Duvarda cızırtı sesi duyulduğunda",
      "Sigorta iki denemede üst üste attığında — bırakıp aramayın",
      "Elektrik çarpması yaşandığında",
      "Su baskını sonrası tesisat ıslandığında",
    ],
    faq: [
      {
        q: "Gece yarısı elektrikçi çağırabilir miyim?",
        a: "Evet, 7 gün 24 saat hizmet veriyoruz. Gece veya hafta sonu için ek ücret uygulamıyoruz; standart saat ücreti geçerlidir.",
      },
      {
        q: "Sigortam sürekli atıyor, kendim değiştirmeli miyim?",
        a: "Hayır. Sigortanın sürekli atması bir sonuç; asıl sebep tesisatta ya da bir cihazdadır. Sigortayı değiştirmek altta yatan problemi çözmez; kaçak veya kısa devre mevcut olabilir. Önce cihazlı test yapılmalıdır.",
      },
      {
        q: "Arıza tespiti ücretli mi?",
        a: "Yerinde arıza tespiti ücretsizdir. Yalnızca onayladığınız onarımın ücretini alırız. Onay vermezseniz ödeme yapmazsınız.",
      },
      {
        q: "Ne kadar sürede ulaşıyorsunuz?",
        a: "Konak, Bornova, Karşıyaka, Buca gibi merkez ilçelere ortalama 15 dakika; çevre ilçelere 25-30 dakika içinde ulaşıyoruz.",
      },
      {
        q: "Fatura ve garanti veriyor musunuz?",
        a: "Tüm işlere resmi fatura düzenleriz. İşçilikte 2 yıl, kullanılan malzemede ilgili üretici garantisi geçerlidir.",
      },
      {
        q: "Elektrik kesintisinin sebebi bende mi GDZ'de mi?",
        a: "Sayacın yanında panodaki ana sigorta attıysa arıza içerde, atmadıysa büyük ihtimalle şebekede. Komşunuzda da yoksa GDZ'yi aramak gerekir; vardıysa biz çözeriz. Telefonda hangi durumda olduğunuzu anlarız.",
      },
      {
        q: "Ödeme nasıl?",
        a: "Nakit, kredi kartı, IBAN ve mobil ödeme kabul ediyoruz. Fatura iş bitmeden kesilir ve tarafınıza verilir.",
      },
    ],
    relatedServices: ["sigorta-pano", "kacak-akim-tespiti", "priz-anahtar"],
  },
  {
    slug: "elektrik-tesisat",
    title: "Elektrik Tesisat Çekimi ve Yenileme",
    shortTitle: "Elektrik Tesisatı",
    metaTitle: "İzmir Elektrik Tesisatı Çekimi ve Yenileme | Belgeli Usta | Elektrikçi Haktan",
    metaDescription:
      "Ev ve iş yeri için komple elektrik tesisatı çekimi, eski tesisat yenileme, sıva üstü-altı döşeme. İzmir'de TEDAŞ standartlarına uygun, belgeli işçilik.",
    summary:
      "Yeni bina, tadilat veya eskiyen tesisat için standartlara uygun, topraklamalı ve belgeli tesisat çekiyoruz.",
    longDescription:
      "Elektrik tesisatı bir yapının gizli omurgasıdır — ama ancak problem çıktığında fark edilir. 1990 öncesi yapılarda hâlâ alüminyum kablolu veya topraklamasız tesisata rastlıyoruz; bu tür sistemler modern beyaz eşya yüküne dayanmaz ve yangın riski taşır. Biz her yeni tesisatta kablo kesitini uygun yüke göre hesaplar, TEDAŞ ve TSE standartlarına uygun çekim yaparız. Sıva altı boruları antihormon, geri çekilebilir nitelikte seçer; her devreye renk kodlu kablo ve etiketli dağıtım uygularız. Tesisat bittiğinde izolasyon direnci, topraklama direnci ve kaçak akım rölesi çalışma testleri yapılır ve size proje krokisi + ölçüm raporu teslim edilir. 20 yılı aşkın tecrübeyle hem konut hem ticari tesisat projelerinde çalıştık.",
    icon: "wiring",
    priceRange: "₺150/m² - ₺400/m²",
    durationMinutes: 480,
    keywords: [
      "izmir tesisat çekimi", "elektrik tesisat yenileme", "sıva altı tesisat",
      "izmir elektrik projesi", "tedaş standartları elektrik", "komple tesisat",
    ],
    symptoms: [
      "Evde topraklama hattı yok veya emin değilsiniz",
      "Kablolar alüminyum, 20 yaşın üzerinde",
      "Duvar içinde ısınan bölgeler var",
      "Yeni mutfak/banyo yapıyorsunuz",
      "Yük yetmiyor: klima, kombi, fırın aynı anda çalışamıyor",
    ],
    whatWeDo: [
      "Projeli komple tesisat çekimi (yeni bina, villa)",
      "Eski tesisat yenileme, sıva altı kanal açımı",
      "Sıva üstü borulu ve kablo kanallı uygulama",
      "Mutfak banyo gibi nemli ortamlar için IP44+ tesisat",
      "Akıllı ev altyapısı (KNX, Loxone uyumlu kablolama)",
      "Yangın ihbar, IP kamera, network altyapısı",
      "Tesisat ölçüm raporu ve kroki teslimi",
    ],
    processSteps: [
      { step: "Keşif ve ihtiyaç analizi", detail: "Kaç linye, hangi oda için kaç priz, hangi cihaz nereye gelecek — yerinde planlarız." },
      { step: "Proje ve malzeme listesi", detail: "Kesitler, sigorta kapasiteleri, buat sayıları çıkarılır, onayınıza sunulur." },
      { step: "Sıva altı kanal açımı", detail: "Rotary matkap ve kanal açma makinesiyle, toz kontrollü çalışma." },
      { step: "Boru ve kablo çekimi", detail: "Antihormon boru + tek tek renk kodlu NYA kablo, çekilirken etiketlenir." },
      { step: "Pano montajı ve test", detail: "W-otomat dağıtım, kaçak akım rölesi, topraklama bağlantısı, izolasyon testi." },
      { step: "Teslim ve rapor", detail: "Ölçüm raporu, kroki ve kullanım rehberi elden verilir." },
    ],
    materials: [
      "Prysmian / Öznur NYA-NYM kablo",
      "Pimaş antihormon boru",
      "Viko / Legrand / Schneider priz-anahtar",
      "ABB / Schneider W-otomat ve kaçak akım rölesi",
      "Bakır topraklama iletkeni",
    ],
    warranty: "Komple tesisatlarda 5 yıl işçilik garantisi, malzemede üretici garantisi.",
    whenUrgent: [
      "Tadilatın sıva öncesi aşamasında (geç kalırsanız kırmak gerekir)",
      "Yeni beyaz eşya alacakken mutfakta priz yoksa",
      "Eski tesisat dumanlı veya yanık izli gözlemlendiyse",
    ],
    faq: [
      {
        q: "Tesisat yenilemek için duvar kırmak şart mı?",
        a: "Büyük ölçüde evet, çünkü eski kablolar sıva altında borudadır. Ancak alçıpan tavan, sıva üstü kanal veya mevcut boru kanalından geri çekme gibi yöntemlerle minimum hasarla ilerliyoruz. Keşifte size hangisinin uygun olduğunu gösteririz.",
      },
      {
        q: "Komple tesisat ne kadar sürer?",
        a: "3+1 bir dairenin komple tesisat yenilemesi ortalama 5-7 iş günüdür. Yeni inşaat daire için 3-5 gün yeterlidir.",
      },
      {
        q: "Topraklama zorunlu mu?",
        a: "Evet. 2000'den sonra inşa edilen tüm yapılarda yönetmelik gereği topraklama zorunludur. Eski yapıda yoksa mutlaka çekilmelidir — çamaşır makinesi, fırın, kombi gibi cihazlar topraklamasız kullanılamaz.",
      },
      {
        q: "Kablo kesiti nasıl belirlenir?",
        a: "Aydınlatma için 1.5mm², priz devreleri için 2.5mm², fırın/klima gibi yüksek yük hatları için 4mm² veya 6mm². Toplam yük ve çekim mesafesine göre hesaplanır.",
      },
      {
        q: "Rapor veriyor musunuz?",
        a: "Evet. Tesisat sonunda izolasyon direnci, topraklama direnci, kaçak akım rölesi testi ölçümleri yapılır ve raporlanır. Bu belge sigorta ve iskân için kullanılabilir.",
      },
    ],
    relatedServices: ["topraklama", "sigorta-pano", "kacak-akim-tespiti"],
  },
  {
    slug: "topraklama",
    title: "Topraklama Yapımı ve Ölçümü",
    shortTitle: "Topraklama",
    metaTitle: "İzmir Topraklama Yapımı ve Ölçüm Raporu | Yönetmeliğe Uygun | Elektrikçi Haktan",
    metaDescription:
      "Konut, iş yeri ve sanayi için topraklama tesisi yapımı, topraklama direnci ölçümü ve resmi rapor. İzmir genelinde yönetmeliğe uygun belgeli uygulama.",
    summary: "Can ve mal güvenliğiniz için yönetmeliğe uygun topraklama tesisi ve ölçüm raporu.",
    longDescription:
      "Topraklama, bir arıza anında cihaz gövdesine geçen kaçak elektriği toprağa yönlendirerek sizi çarpılmaktan koruyan sistemdir. Kulağa basit gelir ama özellikle eski binalarda 'var' sandığınız topraklama aslında çalışmıyor olabilir — ölçmeden bilinmez. Biz her uygulamada bakır çubuk/plaka gömümü, bakır iletken çekimi ve pano bağlantısını yaptıktan sonra topraklama direncini IEC standartlarına göre ölçer, raporlarız. İş yerleri için yasal zorunluluk olan yıllık topraklama ölçümü hizmetimiz mevcuttur.",
    icon: "ground",
    priceRange: "₺2000-₺8000",
    durationMinutes: 240,
    keywords: [
      "izmir topraklama", "topraklama ölçümü", "topraklama raporu",
      "iş yeri topraklama", "konut topraklama", "topraklama direnci",
    ],
    symptoms: [
      "Metal beyaz eşyaya dokununca 'karıncalanma' hissediyorsunuz",
      "Priz tipi yuvarlak ama topraklama pini varmış gibi durmuyor",
      "İş yerinde yıllık topraklama raporu isteniyor",
      "Sigorta yerine klasik cam sigorta var ve rölesiz",
      "Yeni pano kurulumu yapıldı ama test edilmedi",
    ],
    whatWeDo: [
      "Çubuk topraklama (2m/2.5m bakır kaplı)",
      "Plaka topraklama (bakır veya galvaniz)",
      "Halka topraklama (sanayi/apartman)",
      "Topraklama direnci ölçümü (multi-spike metoduyla)",
      "Kaçak akım rölesi montajı ve testi",
      "Yıllık periyodik ölçüm + rapor",
      "Sanayi için işletme topraklaması",
    ],
    processSteps: [
      { step: "Zemin değerlendirmesi", detail: "Toprak direncine göre çubuk sayısı ve derinliği planlanır." },
      { step: "Çubuk/plaka gömümü", detail: "2 metre bakır çubuk çakılır veya 50x50 bakır plaka gömülür." },
      { step: "İletken çekimi", detail: "16mm² çıplak bakır iletken panoya kadar çekilir." },
      { step: "Pano bağlantısı", detail: "Ana topraklama barası (MEB) tüm linyelere dağıtılır." },
      { step: "Direnç ölçümü", detail: "Test cihazıyla direnç ölçülür (konut için <10Ω hedef)." },
      { step: "Rapor ve kaçak rölesi testi", detail: "30mA kaçak akım rölesi test edilir, rapor verilir." },
    ],
    materials: [
      "2m bakır kaplı topraklama çubuğu (Ø16mm)",
      "16mm² çıplak bakır iletken",
      "Topraklama muayene klemensi",
      "Ana topraklama barası (MEB)",
      "30mA kaçak akım rölesi",
    ],
    warranty: "Topraklama tesisinde 5 yıl, ölçüm raporu ise 1 yıl geçerlidir.",
    whenUrgent: [
      "Hiç topraklama olmadığını öğrendiyseniz",
      "İş yeri denetimi yaklaşıyorsa",
      "Yeni bir pano veya sigorta kutusu kurulmuşsa",
      "Su baskını sonrası sistem ıslandıysa",
    ],
    faq: [
      {
        q: "Topraklama ölçümü yaptırmak zorunda mıyım?",
        a: "İş yerleri için Elektrik Tesisleri Topraklama Yönetmeliği gereği yıllık topraklama ölçümü ve raporu zorunludur. Konutlarda yasal zorunluluk olmasa da 5 yılda bir kontrol güvenlik için önerilir.",
      },
      {
        q: "Topraklamam olduğunu nasıl anlarım?",
        a: "Priz tipi dışarıdan yanıltıcı olabilir. Kesin yol: test cihazıyla ölçüm. Prize 'topraklama göstergesi' takıp da bakabilirsiniz — 3 LED yanmalı; kırmızı yanarsa topraklama yok veya ters bağlı.",
      },
      {
        q: "Kaç ohm olmalı?",
        a: "Türkiye yönetmeliğine göre konut ve iş yerlerinde topraklama direnci 10 ohm altında olmalıdır. Sanayide 5 ohm, hastane/haberleşme gibi kritik tesislerde daha düşük hedeflenir.",
      },
      {
        q: "Apartmanda topraklama ortak mı?",
        a: "Ana topraklama tesisi binadır ve ortaktır. Her dairenin panosuna bu hattan giren topraklama iletkeni gelmelidir. Eski binalarda bu dağıtım eksik olabilir.",
      },
      {
        q: "Kaçak akım rölesi ile topraklama aynı şey mi?",
        a: "Hayır, birbirini tamamlar. Topraklama kaçağı toprağa gönderir; kaçak akım rölesi kaçak olduğunu tespit edip devreyi keser. İkisi bir arada çalışır.",
      },
    ],
    relatedServices: ["elektrik-tesisat", "sigorta-pano", "kacak-akim-tespiti"],
  },
  {
    slug: "kombi-montaji",
    title: "Kombi Elektrik Bağlantısı ve Montajı",
    shortTitle: "Kombi Montajı",
    metaTitle: "İzmir Kombi Elektrik Montajı ve Priz Çekimi | Tüm Markalar | Elektrikçi Haktan",
    metaDescription:
      "Kombi montajı için elektrik tesisatı hazırlığı, priz çekimi, oda termostatı kablolaması. Demirdöküm, Vaillant, Baymak, Buderus tüm markalar için uzman elektrik servisi İzmir.",
    summary:
      "Kombi kurulumunda elektrik bağlantısı, priz çekimi, termostat kablolaması ve güvenli devre kurulumu.",
    longDescription:
      "Kombi satın aldığınızda doğalgaz şirketinin yaptığı iş yalnızca gaz bağlantısıdır; elektrik tarafı genellikle ev sahibine bırakılır. Kombi için uygun kesitte ayrı sigortalı, topraklamalı bir priz gereklidir — sıradan bir uzatma kablosu güvenli değildir. Oda termostatı varsa 2+2 zayıf akım kablosu duvar içinden çekilir ve kombiyle eşleşir. Biz tüm marka ve modellerle (yoğuşmalı, konvansiyonel, kaskad) uyumlu bağlantı yapıyoruz. İşlemi başladığınız gün aynı gün bitiriyoruz.",
    icon: "boiler",
    priceRange: "₺1500-₺3500",
    durationMinutes: 180,
    keywords: [
      "izmir kombi elektrik montajı", "kombi priz çekimi", "termostat bağlantısı",
      "yoğuşmalı kombi bağlantısı", "demirdöküm montaj", "vaillant elektrik",
    ],
    symptoms: [
      "Yeni kombi aldınız, priz yok veya uzakta",
      "Topraklamalı priz yok",
      "Oda termostatı kablosu çekilmesi gerekiyor",
      "Kombi sık sık elektrik hatası veriyor",
      "Sigortanız kombi çalışırken atıyor",
    ],
    whatWeDo: [
      "Kombi için ayrı W-otomat + topraklamalı priz",
      "Sıva altı veya sıva üstü kablo çekimi",
      "Oda termostatı 2x0.5 ve 4x0.5 kablo çekimi",
      "Kaskad sistemler için 380V bağlantı",
      "Üretici servisiyle koordinasyonlu montaj",
      "Çalışma testi ve garanti belgesi",
    ],
    processSteps: [
      { step: "Kombi konumu kontrolü", detail: "Priz mesafesi, topraklama, sigorta kapasitesi değerlendirilir." },
      { step: "Kablo çekimi", detail: "3x2.5 NYA kablo, ayrı devrede, minimum bükümle çekilir." },
      { step: "Priz montajı", detail: "IP44 nem korumalı, topraklamalı priz monte edilir." },
      { step: "Termostat kablolaması", detail: "Kombiden oda termostatı konumuna zayıf akım kablosu çekilir." },
      { step: "Test ve devreye alma", detail: "Kombi çalıştırılır, devre yük altında test edilir." },
    ],
    materials: [
      "3x2.5mm² NYA kablo",
      "IP44 topraklamalı priz",
      "16A W-otomat sigorta",
      "2x0.5 ve 4x0.5 zayıf akım kablosu",
    ],
    warranty: "2 yıl işçilik garantisi.",
    whenUrgent: [
      "Kış gelmeden kombi çalışması gerekiyorsa",
      "Mevcut priz kombi yükünü taşımıyorsa",
      "Kombi elektrik hatası verip sürekli resetleniyorsa",
    ],
    faq: [
      {
        q: "Kombi için özel priz mi gerekiyor?",
        a: "Evet. Topraklamalı, ayrı sigortalı ve 16A'lık bir priz gereklidir. Uzatma kablosu veya grup priz kullanılması hem üretici garantisini geçersiz kılar hem de yangın riski oluşturur.",
      },
      {
        q: "Mevcut prizimi kullanabilir miyim?",
        a: "Priz topraklamalıysa, yakınsa ve ayrı sigortada ise kullanabiliriz. Uzak veya ortak devredeyse yeni priz çekmek gerekir.",
      },
      {
        q: "Oda termostatı nasıl bağlanır?",
        a: "Kombiden oda termostatı konumuna 2x0.5 (on/off) veya modülasyonlu kombilerde 4x0.5 kablo çekilir. Duvar içi çekim 45-60 dakika sürer.",
      },
      {
        q: "Kaskad sistem için ne gerekiyor?",
        a: "Kaskad (birden fazla kombi) sistemlerde 380V trifaze besleme ve haberleşme kablosu gerekir. Keşifle netleştirilir.",
      },
    ],
    relatedServices: ["elektrik-tesisat", "priz-anahtar", "klima-montaji"],
  },
  {
    slug: "klima-montaji",
    title: "Klima Elektrik Tesisatı ve Montajı",
    shortTitle: "Klima Montajı",
    metaTitle: "İzmir Klima Elektrik Montajı | Kablo Çekimi ve Priz | Elektrikçi Haktan",
    metaDescription:
      "Klima montajı için elektrik hattı çekimi, priz döşeme, dış ünite bağlantısı. İzmir'de aynı gün klima elektrik servisi, tüm markalarla uyumlu.",
    summary:
      "Split ve multi klima sistemleri için uygun kesitte kablo çekimi, dış ünite bağlantısı ve güvenli devre.",
    longDescription:
      "Klima montajının sıklıkla atlanan tarafı elektrik bağlantısıdır. 12.000 BTU ve üzeri klimalar ciddi yük çeker; mevcut oda prizinden beslemek sigorta atmasına hatta kablo yanmasına yol açabilir. Biz klima için ayrı sigortalı, topraklamalı, uygun kesitte kablo çekeriz. Dış ünite konumuna 4x2.5mm² NYM kablo + iç üniteye haberleşme kablosu çekilir; tüm bağlantı yönetmeliğe uygun kutu içinde yapılır. Yaz sezonunda aynı gün randevu veriyoruz.",
    icon: "ac",
    priceRange: "₺1200-₺2800",
    durationMinutes: 150,
    keywords: [
      "izmir klima montajı", "klima elektrik hattı", "split klima kablolama",
      "salon klima elektrik", "inverter klima bağlantısı", "klima prizi çekimi",
    ],
    symptoms: [
      "Yeni klima aldınız, dış ünite için priz yok",
      "Mevcut prize bağlı klima sigorta attırıyor",
      "Klima çalışırken ampuller karanlıklaşıyor",
      "Dış üniteye gitmesi gereken kablo çekilmedi",
      "Priz topraklamasız",
    ],
    whatWeDo: [
      "9.000-24.000 BTU tüm modeller için uygun kesit",
      "İç-dış ünite arası haberleşme kablosu çekimi",
      "Sıva altı veya sıva üstü kablo kanalı",
      "Ayrı W-otomat sigorta panoda",
      "IP44 dış ünite prizi",
      "Multi sistemlerde her üniteye ayrı devre",
    ],
    processSteps: [
      { step: "Klima modeline göre hesap", detail: "BTU'ya ve üretici etiketine göre kablo kesiti belirlenir." },
      { step: "Dış ünite konumu", detail: "Pencere dışı, balkon veya cephe için kablo güzergâhı planlanır." },
      { step: "Kablo ve sigorta çekimi", detail: "Panoya ayrı 16A sigorta + topraklamalı hat çekilir." },
      { step: "Bağlantı ve test", detail: "Montaj ekibiyle koordineli, iç-dış ünite beslemesi ve haberleşmesi bağlanır." },
    ],
    materials: [
      "3x2.5mm² NYM kablo",
      "4x1.5mm² haberleşme kablosu",
      "IP44 topraklamalı priz",
      "16A W-otomat sigorta",
      "Kablo kanalı (beyaz, 25x16)",
    ],
    warranty: "2 yıl işçilik garantisi, elektrik tesisatında ömür boyu servis.",
    whenUrgent: [
      "Yaz sıcakları başlamadan montaj yapılacaksa",
      "Klima çalışırken sigorta atıyorsa (yangın riski)",
      "Topraklama yoksa (elektrik çarpması riski)",
    ],
    faq: [
      {
        q: "Klima için ayrı sigorta gerekir mi?",
        a: "12.000 BTU üzeri klimalarda ayrı 16A W-otomat sigorta kesinlikle önerilir. Hem güvenlik (aşırı yük) hem arıza izolasyonu (sigorta attığında evin diğer devrelerini etkilemez) için şarttır.",
      },
      {
        q: "Mevcut odadaki prizden çalıştıramaz mıyım?",
        a: "9.000 BTU ve 6A çekim altı modeller için kısa süre mümkün olsa da önerilmez. Uzun vadede priz yanması veya sigorta atması yaşanır. Ayrı hat en güvenlisidir.",
      },
      {
        q: "Dış üniteye priz mi yoksa direkt bağlantı mı?",
        a: "Günümüzde genellikle iç üniteye priz, dış üniteye direkt klemens bağlantı yapılır. Marka ve model ile değişir; biz üretici talimatına göre uygularız.",
      },
      {
        q: "Montaj firmasıyla aynı gün gelebilir misiniz?",
        a: "Evet. Klima montaj firmasıyla randevunuzu koordine ederiz. Genelde biz önce gelip elektriği hazırlarız, sonra montajcılar klimayı takar.",
      },
    ],
    relatedServices: ["elektrik-tesisat", "priz-anahtar", "kombi-montaji"],
  },
  {
    slug: "avize-montaji",
    title: "Avize, Aplik ve Aydınlatma Montajı",
    shortTitle: "Avize Montajı",
    metaTitle: "İzmir Avize Montajı ve LED Aydınlatma | Titiz ve Hasarsız | Elektrikçi Haktan",
    metaDescription:
      "Avize, aplik, LED panel, spot ve dekoratif aydınlatma montajı. İzmir'de titiz, hasarsız avize montajı, kristal ve ağır avizeler için güçlü kanca sistemi.",
    summary:
      "Kristal, modern veya klasik avizelerin sağlam kanca ve güvenli elektrik bağlantısıyla montajı.",
    longDescription:
      "Avize montajı bir saatten az süren bir iş gibi görünür ama düşen bir avize can güvenliği ve maddi hasar riski demektir. Özellikle kristal veya 15+ kg ağırlığındaki avizeler, betona doğru bir kancayla tutturulmalı; sadece tavan rozetine asmak yetmez. Biz her montajda tavan yapısını kontrol eder (beton mu, alçıpan mı, asma tavan mı), uygun kanca veya taşıyıcı plaka uygularız. Eski avize sökümü, yeni avize montajı ve test aynı ziyarette yapılır.",
    icon: "lamp",
    priceRange: "₺300-₺1500",
    durationMinutes: 60,
    keywords: [
      "izmir avize montajı", "led panel montajı", "spot aydınlatma",
      "kristal avize montaj", "aplik montajı", "rgb led uygulama",
    ],
    symptoms: [
      "Avize taktıracak birini bulamadınız",
      "Eski avizeyi sökmek istiyorsunuz",
      "Kristal/ağır avize için güçlü kanca gerekiyor",
      "LED panel veya spot montajı yapılacak",
      "Akıllı aydınlatma (uygulamalı) sistemi kurulacak",
    ],
    whatWeDo: [
      "Sökme + montaj kombine hizmet",
      "Ağır avize için beton dübelli kanca",
      "Asma tavan/alçıpan için uygun taşıyıcı",
      "Çok duylu avizelerde ampul + bağlantı kontrolü",
      "LED panel, spot ve bant uygulaması",
      "Akıllı ev uyumlu (Philips Hue, Tuya) aydınlatma",
    ],
    processSteps: [
      { step: "Eski avize/duyun sökümü", detail: "Elektrik kapatılır, avize dikkatle sökülür, isterseniz paketlenir." },
      { step: "Kanca kontrolü", detail: "Mevcut kanca dayanımı test edilir; gerekirse beton dübeli yeni kanca takılır." },
      { step: "Kablo bağlantısı", detail: "Faz-nötr-toprak kontrolü, klemens veya vidalı bağlantı." },
      { step: "Avize asımı", detail: "Seviyeli ve salınımsız asım, rozet kontrolü." },
      { step: "Test", detail: "Tüm duylar sırayla test edilir, dimmer uyumu kontrol edilir." },
    ],
    materials: [
      "Beton dübelli ağır yük kancası",
      "LED/dimmer uyumlu klemens",
      "Alçıpan ağır yük dübeli",
      "Tavan rozeti (ihtiyaca göre)",
    ],
    warranty: "1 yıl işçilik garantisi.",
    whenUrgent: [
      "Eve taşınıyorsunuz ve ışık yok",
      "Avize sallanıyor veya eğri duruyor",
      "LED panel bir anda söndü veya flaş yapıyor",
    ],
    faq: [
      {
        q: "Eski avizemi söküp yenisini takar mısınız?",
        a: "Evet, söküm + montaj kombine hizmettir. Eski avizeyi saklamak isterseniz özenle paketleriz.",
      },
      {
        q: "Kristal avizem için özel kanca gerekir mi?",
        a: "Avize 10 kg üzeriyse veya kristallerle birlikte 15 kg'ı geçerse beton dübelli ağır yük kancası kullanırız. Standart kanca yıllar içinde gevşeyebilir.",
      },
      {
        q: "Tavanım alçıpan, avize taşır mı?",
        a: "Alçıpan tek başına ağır avize taşımaz. Tavandaki ana betona uzanan özel askı sistemi kurarız; alçıpana ancak 2-3 kg altı aplik asılır.",
      },
      {
        q: "LED bant ve RGB montajı da yapıyor musunuz?",
        a: "Evet, mutfak tezgâh altı, asma tavan yansıma, TV arkası RGB uygulamaları yapıyoruz. Wifi/Bluetooth kontrol entegrasyonu da mümkün.",
      },
    ],
    relatedServices: ["elektrik-tesisat", "priz-anahtar"],
  },
  {
    slug: "kacak-akim-tespiti",
    title: "Kaçak Akım ve Elektrik Kaçağı Tespiti",
    shortTitle: "Kaçak Akım Tespiti",
    metaTitle: "İzmir Elektrik Kaçağı Tespiti | Termal Kamera ile | Elektrikçi Haktan",
    metaDescription:
      "Elektrik kaçağı, kaçak akım rölesi atması ve duvarda gezici elektriğin profesyonel tespiti. İzmir'de termal kameralı ölçüm, kesme-kırma minimum.",
    summary:
      "Duvar içindeki kaçakları kesme ve kırma olmadan, profesyonel cihazlarla tespit ediyoruz.",
    longDescription:
      "Kaçak akım, tesisatın bir noktasındaki yalıtım bozukluğundan dolayı elektriğin toprağa veya başka bir iletkene akmasıdır. Belirtiler: sürekli atan kaçak akım rölesi, metal cihazlara dokununca karıncalanma, sebepsiz artan elektrik faturası. Tahmin ederek duvar kırmak yanlıştır — biz termal kamera ve yalıtım direnci ölçüm cihazıyla arızayı lokalize ederiz. Çoğu zaman tek bir priz, bir buat veya nemli bir kablo bölümüdür; müdahale milimetrik yapılır.",
    icon: "leak",
    priceRange: "₺600-₺1800",
    durationMinutes: 90,
    keywords: [
      "izmir kaçak tespiti", "elektrik kaçağı bulma", "kaçak akım rölesi",
      "duvar içi kaçak", "termal kamera tespit", "yalıtım direnci ölçümü",
    ],
    symptoms: [
      "Kaçak akım rölesi sürekli atıyor",
      "Metal cihaza dokununca karıncalanma hissediyorsunuz",
      "Elektrik faturası sebepsiz yüksek geliyor",
      "Bir odada lamba hafif parlıyor (hayalet voltaj)",
      "Yağmurlu günlerde sigorta atıyor",
    ],
    whatWeDo: [
      "Termal kamera ile duvar içi ısınma tespiti",
      "Yalıtım direnci ölçümü (megaohmmetre)",
      "Devre devre izolasyon testi",
      "Kaçak akım rölesi test ve değişimi",
      "Nemli priz-buat tespiti",
      "Kesme-kırma olmadan lokalize onarım",
    ],
    processSteps: [
      { step: "Belirti analizi", detail: "Ne zaman atıyor, hangi cihaz çalışırken — soruları değerlendiririz." },
      { step: "Devre izolasyonu", detail: "Tüm sigortalar atılıp tek tek yükseltilerek sorunlu devre bulunur." },
      { step: "Cihazlı ölçüm", detail: "Yalıtım direnci ve kaçak akım ölçümü ile problem noktası daraltılır." },
      { step: "Termal görüntüleme", detail: "Duvar içi gizli ısınma noktaları termal kamerayla saptanır." },
      { step: "Noktasal onarım", detail: "Problemli priz, buat veya kablo bölümü yenilenir." },
    ],
    materials: [
      "Megaohmmetre (yalıtım direnci ölçer)",
      "Termal kamera",
      "Kaçak akım rölesi test cihazı",
      "30mA kaçak akım rölesi (değişim gerekirse)",
    ],
    warranty: "1 yıl, yapılan onarım noktası için.",
    whenUrgent: [
      "Karıncalanma hissediyorsanız (elektrik çarpması riski)",
      "Kaçak akım rölesi atıp atıp sıfırlanmıyorsa",
      "Duvarda sıcak nokta veya yanık kokusu varsa",
    ],
    faq: [
      {
        q: "Kaçak akım rölesi neden sürekli atar?",
        a: "En yaygın sebepler: nemli bir prizde/buatta kaçak, eski bir beyaz eşyada (çamaşır makinesi, bulaşık makinesi) yalıtım bozukluğu, tesisatta zedelenmiş kablo. Cihazlı testle kesin sebebi buluruz.",
      },
      {
        q: "Rölenin kendi arızası olabilir mi?",
        a: "Evet, özellikle 10+ yaşındaki rölelerde mekanik yorulma görülür. Test cihazıyla rölenin sağlam olup olmadığı saniyeler içinde anlaşılır.",
      },
      {
        q: "Duvar kırmadan bulabilir misiniz?",
        a: "Çoğu durumda evet. Termal kamera ve yalıtım ölçümüyle hassas lokalizasyon yapıyoruz. Sadece onarım yapılacak küçük bir alan açılır.",
      },
      {
        q: "Kaçak akım elektrik faturasını etkiler mi?",
        a: "Evet. Gizli bir kaçak saatte 100-500W'a varan boşa tüketim yapabilir — bu da ayda 200-600 TL'lik fark demektir.",
      },
      {
        q: "Yağmurda neden sigorta atıyor?",
        a: "Dış cephede veya çatıdaki tesisat nem aldığında kaçak oluşur. Balkon prizi, cephe lambası veya çanak anten kablosu şüpheli noktalardır.",
      },
    ],
    relatedServices: ["sigorta-pano", "acil-elektrik-tamiri", "elektrik-tesisat"],
  },
  {
    slug: "sigorta-pano",
    title: "Sigorta ve Elektrik Panosu Yenileme",
    shortTitle: "Pano Yenileme",
    metaTitle: "İzmir Elektrik Panosu ve Sigorta Yenileme | W-otomat | Elektrikçi Haktan",
    metaDescription:
      "Eski cam sigortalı panoların W-otomat ve kaçak akım röleli modern panoyla değişimi. İzmir'de etiketli, standart pano kurulumu ve rapor.",
    summary:
      "Eskimiş sigorta kutularınızı W-otomat ve kaçak akım röleli modern panoyla yeniliyoruz.",
    longDescription:
      "Cam sigorta hâlâ birçok İzmir evinde kullanılıyor — ama artık ne yönetmeliğe uyuyor ne de modern yükü karşılıyor. En kötüsü, cam sigortanın yanında çoğu zaman kaçak akım rölesi bulunmuyor — yani elektrik çarpması korumanız yok. Yeni pano kurulumunda her devreyi ayrı W-otomat'a bağlar, genele 30mA kaçak akım rölesi ekler, tüm linyeleri etiketleriz. Pano yenileme ortalama 2-3 saatte biter, elektrik aynı gün yeniden verilir.",
    icon: "panel",
    priceRange: "₺2500-₺6000",
    durationMinutes: 180,
    keywords: [
      "izmir pano yenileme", "w otomat sigorta", "elektrik panosu değişimi",
      "cam sigorta değişimi", "kaçak akım rölesi montaj", "sigorta kutusu",
    ],
    symptoms: [
      "Hâlâ cam/seramik sigorta kullanıyorsunuz",
      "Sigorta sürekli atıyor ve tel kopuyor",
      "Kaçak akım rölesi yok",
      "Pano etiketsiz, hangi sigortanın hangi devreyi beslediği belirsiz",
      "Pano paslı, ıslak veya eskimiş",
    ],
    whatWeDo: [
      "Cam sigortaların W-otomat ile değişimi",
      "30mA kaçak akım rölesi eklenmesi",
      "Yeni sıva altı/üstü pano montajı",
      "Her devreye etiketli dağıtım",
      "Topraklama barası ve MEB bağlantısı",
      "Pano ölçüm raporu",
    ],
    processSteps: [
      { step: "Mevcut devre analizi", detail: "Hangi linye hangi odayı besliyor — sayımla tespit edilir." },
      { step: "Pano ve malzeme seçimi", detail: "Modül sayısına göre ABB/Schneider pano ve sigortalar belirlenir." },
      { step: "Elektriğin kesimi", detail: "Ana sigorta kapatılır, güvenli çalışma sağlanır." },
      { step: "Eski panonun sökümü ve yenisinin montajı", detail: "Kablo etiketlenerek sökülür, yeni panoya düzenli bağlanır." },
      { step: "Test ve etiketleme", detail: "Her devre test edilir, etiket yazılır, rapor düzenlenir." },
    ],
    materials: [
      "ABB / Schneider sıva altı/üstü pano",
      "W-otomat C tipi sigortalar (6A-32A)",
      "30mA kaçak akım rölesi (2P veya 4P)",
      "Topraklama ve nötr barası",
      "Etiketli klemensler",
    ],
    warranty: "5 yıl işçilik garantisi, malzemede üretici garantisi (ABB/Schneider 3 yıl).",
    whenUrgent: [
      "Pano kokusu, yanık izi veya ısınma varsa",
      "Kaçak akım rölesi yoksa (güvenlik şartı)",
      "Sigorta teli sık sık yanıyorsa",
    ],
    faq: [
      {
        q: "Eski cam sigortaları değiştirmem gerekiyor mu?",
        a: "Evet. Cam ve seramik sigortalar yangın riski taşır, kaçak akım koruması içermez ve modern yüke dayanmaz. Modern W-otomat'a geçiş güvenlik açısından şarttır.",
      },
      {
        q: "Kaç amperlik sigortaya geçmeli?",
        a: "Aydınlatma için 6A veya 10A, priz devreleri için 16A, mutfak/banyo yüksek yük için 20A veya 25A W-otomat kullanılır. Toplam ana sigorta konutlarda genelde 32A-40A'dır.",
      },
      {
        q: "Kaçak akım rölesi şart mı?",
        a: "TEDAŞ abonelikleri ve ruhsatlı yapılar için şarttır. Eski binalarda olmayabilir; güvenlik için mutlaka eklenmeli.",
      },
      {
        q: "Kaç saatte biter?",
        a: "Standart daire için 2-3 saat, villa veya iş yeri için yarım ila tam gün. Elektrik yalnızca montaj süresince kesilir.",
      },
      {
        q: "Pano bana rapor verir misiniz?",
        a: "Evet, pano kurulumu sonrası devre şeması, test ölçümleri ve kullanım rehberi yazılı teslim edilir.",
      },
    ],
    relatedServices: ["elektrik-tesisat", "topraklama", "kacak-akim-tespiti"],
  },
  {
    slug: "priz-anahtar",
    title: "Priz ve Anahtar Döşeme / Değişimi",
    shortTitle: "Priz - Anahtar",
    metaTitle: "İzmir Priz ve Anahtar Değişimi, Ek Priz Çekimi | Aynı Gün | Elektrikçi Haktan",
    metaDescription:
      "Eski prizleri değiştirme, ek priz çekimi, USB'li priz montajı, anahtar yenileme. İzmir'de aynı gün servis, Viko, Legrand, Schneider tüm markalar.",
    summary:
      "Yanmış, kırık veya eski prizlerinizi değiştiriyor, ihtiyacınız olan yere yeni priz çekiyoruz.",
    longDescription:
      "Prizler evin en çok kullanılan ama en az bakım yapılan parçalarıdır. Yanmış, sararmış veya topraklamasız bir priz yalnızca estetik sorun değil, yangın ve çarpılma riskidir. Biz tek prizden komple değişime, USB şarj entegreli akıllı prizlerden tablet şarjlı anahtarlara kadar her türlü priz-anahtar işi yapıyoruz. Ek priz çekiminde sıva altı veya ince kablo kanalı kullanıyoruz.",
    icon: "outlet",
    priceRange: "₺200-₺900",
    durationMinutes: 45,
    keywords: [
      "izmir priz değişimi", "ek priz çekimi", "usb priz montajı",
      "anahtar değişimi", "topraklamalı priz", "çocuk korumalı priz",
    ],
    symptoms: [
      "Priz yanmış, kararmış veya sıcak",
      "Anahtar çalışmıyor veya zor basılıyor",
      "Mevcut prize ek USB şarj isteniyor",
      "Çocuk korumalı priz gerekiyor",
      "Belirli bir noktada ek priz ihtiyacı",
    ],
    whatWeDo: [
      "Eski priz/anahtar değişimi",
      "Topraklamalı priz dönüşümü",
      "USB girişli akıllı priz montajı",
      "Çocuk korumalı (obturatörlü) priz",
      "Duvar içi yeni priz çekimi",
      "Sıva üstü kanal ile priz ekleme",
    ],
    processSteps: [
      { step: "Elektriğin kesimi", detail: "Güvenlik için ilgili sigorta atılır." },
      { step: "Eski priz sökümü", detail: "Buat kontrolü ve kablo durumu incelenir." },
      { step: "Yeni priz montajı", detail: "Uygun marka/model priz bağlanır ve sıkılır." },
      { step: "Test", detail: "Faz-nötr-toprak sırası ve yük altında çalışma test edilir." },
    ],
    materials: [
      "Viko / Legrand / Schneider priz ve anahtar",
      "USB girişli priz (2.1A)",
      "Çocuk korumalı priz",
      "Buat, klemens, makaron",
    ],
    warranty: "1 yıl işçilik + malzeme garantisi.",
    whenUrgent: [
      "Priz yandı, yanık kokusu var",
      "Priz cihaza takılınca kıvılcım atıyor",
      "Çocuk varsa topraklamasız priz riskli",
    ],
    faq: [
      {
        q: "Prizim yandı, tehlikeli mi?",
        a: "Evet. Yanmış bir priz yangın başlatabilir ve arkasındaki kabloyu zarar görmüş olabilir. Kullanmayı bırakıp mümkün olan en kısa sürede değişmesi gerekir.",
      },
      {
        q: "Priz topraklamasız, güvensiz mi?",
        a: "Evet, özellikle beyaz eşya için tehlikelidir. Topraklama hattı varsa prizi dönüştürürüz; yoksa ayrı topraklama çekmek gerekir.",
      },
      {
        q: "USB'li prizler işe yarıyor mu?",
        a: "Evet, özellikle başucu, mutfak tezgâhı ve çalışma masası için çok pratik. 2.1A çıkış tablet dahil şarj eder.",
      },
      {
        q: "Ek priz çekimi duvarı çok bozar mı?",
        a: "Sıva altı çekimde dar bir kanal açılır, kablo döşenir ve sıvası yapılır. Sıva üstü kanal ile kırma yapmadan da eklenebilir — sizin tercihinize göre.",
      },
    ],
    relatedServices: ["elektrik-tesisat", "acil-elektrik-tamiri"],
  },
  {
    slug: "uydu-internet",
    title: "Uydu Anteni ve İnternet Tesisatı Kurulumu",
    shortTitle: "Uydu ve İnternet",
    metaTitle: "İzmir Uydu Anten Ayarı ve İnternet Tesisatı | Fiber Priz | Elektrikçi Haktan",
    metaDescription:
      "Çanak anten ayarı, merkezi uydu sistemi, fiber internet prizi, Wi-Fi mesh kurulumu. İzmir'de uydu ve internet elektrik servisi, profesyonel sinyal ölçer ile.",
    summary:
      "Çanak anten ince ayarı, merkezi uydu sistemi, fiber internet prizi ve Wi-Fi genişletme.",
    longDescription:
      "Televizyonda kanal bozulması, internette zayıf sinyal — bu iki sorun çoğunlukla kablo çekimi ve konumlandırma hatalarından doğar. Çanak anten ayarı için sinyal ölçer cihazımızla Türksat, Hotbird ve Astra için optimum açıyı yakalarız. İnternet tarafında fiber modemi merkezî konuma alır, gerekiyorsa mesh Wi-Fi noktaları ekleyerek evin her köşesinde kararlı bağlantı sağlarız.",
    icon: "antenna",
    priceRange: "₺400-₺2000",
    durationMinutes: 90,
    keywords: [
      "izmir çanak anten ayarı", "merkezi uydu sistemi", "fiber priz çekimi",
      "wifi mesh kurulum", "tv anten kablosu", "uydu sinyali ayarı",
    ],
    symptoms: [
      "Kanallar karlanıyor, sinyal alınamıyor",
      "Rüzgarda çanak anten kaydı",
      "İnternet modemden uzak odalara ulaşmıyor",
      "Apartmanda merkezî sistem yok, her daire ayrı çanak",
      "Fiber bağlatmak istiyorsunuz, priz yok",
    ],
    whatWeDo: [
      "Türksat / Hotbird / Astra ince ayar",
      "Merkezî apartman uydu sistemi kurulumu",
      "Fiber internet prizi ve CAT6 kablo çekimi",
      "Wi-Fi mesh (Deco, Orbi) kurulumu",
      "IP kamera kablolaması",
      "Smart TV ile internet entegrasyonu",
    ],
    processSteps: [
      { step: "Mevcut durum tespiti", detail: "Kablo, LNB, modem ve sinyal ölçülür." },
      { step: "Çanak anten ayarı", detail: "Profesyonel sinyal ölçer ile optimum azimut/elevation." },
      { step: "Kablo ve priz", detail: "Duvar içi veya sıva üstü kablo çekimi, yeni TV/fiber prizi." },
      { step: "Modem/mesh konfigürasyonu", detail: "Konum, SSID, şifre ve kanal ayarları yapılır." },
    ],
    materials: [
      "Koaksiyel RG6 kablo",
      "LNB (Quad, Octo)",
      "Çanak anten (offset, 80/100/120cm)",
      "CAT6 ethernet kablo",
      "Mesh Wi-Fi noktaları (TP-Link Deco, Asus Zen)",
    ],
    warranty: "1 yıl işçilik; hava koşullarıyla kayma halinde ücretsiz yeniden ayar (ilk 6 ay).",
    whenUrgent: [
      "Maç başlamadan tv çalışsın isteniyor",
      "Rüzgârdan anten kaydı",
      "Yeni fiber aboneliğinin bağlantısı yapılacak",
    ],
    faq: [
      {
        q: "Rüzgarda çanak anten kaydı, yeniden ayar yapar mısınız?",
        a: "Evet. Profesyonel sinyal ölçerle tüm kanalları en yüksek kalite seviyesine ayarlıyoruz. İlk 6 ay içinde tekrar kayması durumunda ücretsiz.",
      },
      {
        q: "Merkezî uydu sistemi nedir?",
        a: "Apartmanda tek bir çanak anten tüm dairelere dağıtım yapar. Her dairede ayrı çanak görüntüsü olmaz, sinyal kararlıdır. Apartman kararı gerektirir.",
      },
      {
        q: "Wi-Fi evin her yerinde güçlü olsun istiyorum.",
        a: "Mesh sistem çözümdür. Tek modem yerine 2-3 nokta koyar, aynı SSID altında birleştiririz. 3+1 daire için 2 nokta, villa için 3+ nokta gerekli olur.",
      },
      {
        q: "Fiber priz nasıl çekilir?",
        a: "Bina girişinden daireye fiber optik kablo çekilir (genelde ISP yapar), daire içinde ise CAT6 veya fiber prizi istediğiniz odaya taşırız. Duvar içi çekim 1-2 saat sürer.",
      },
    ],
    relatedServices: ["elektrik-tesisat", "priz-anahtar"],
  },
];

export const getHizmet = (slug: string) => hizmetler.find((h) => h.slug === slug);
