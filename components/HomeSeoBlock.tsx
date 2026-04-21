import Link from "next/link";
import { ilceler } from "@/data/ilceler";
import { hizmetler } from "@/data/hizmetler";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";

const extendedFaq = [
  {
    q: "İzmir'de 7/24 elektrikçi hangi saatlerde ek ücret alır?",
    a: "Bizde gece, hafta sonu ve resmi tatil farkı yoktur. Saat 03:00'te Buca'dan gelen çağrı ile öğlen 12:00'de Konak'tan gelen çağrı aynı işçilik ücretiyle faturalandırılır. Yol ücreti İzmir merkez ilçelerinde alınmaz.",
  },
  {
    q: "Elektrikçi çağırmadan önce kendim nelere bakabilirim?",
    a: "Önce panodaki sigortalardan atanı indirip kaldırmayı deneyin, olmuyorsa tekrar indirin ve arayın. Kaçak akım rölesi (fiş gibi görünen büyük şalter) düştüyse yukarı kaldırın; tekrar düşüyorsa hattı açmayın, kaçak akım var demektir. Yanık koku geliyorsa ana şalteri kapatıp bizi arayın; hiçbir prize dokunmayın.",
  },
  {
    q: "Ücretsiz keşif gerçekten ücretsiz mi, sonradan ek fiyat çıkıyor mu?",
    a: "Yerinde keşif tamamen ücretsizdir ve keşif sonrası size yazılı sabit fiyat verilir. Onay vermeden tek bir kablo bile kesilmez. İş bitimi öncesi onaylanmamış kalem faturaya eklenmez — bu yazılı garantimizdir.",
  },
  {
    q: "Kiracıyım, elektrik tesisatını yenilettirirsem ev sahibine sormalı mıyım?",
    a: "Sabit tesisat (duvar içi kablolama, pano, topraklama) mülk sahibine ait olduğu için yenileme öncesi yazılı onay almanız gerekir. Priz, anahtar, avize, armatür gibi taşınabilir/sökülebilir kalemlerde genellikle onay gerekmez. Kiracının yaptırdığı bedelin ne kadarının kiradan düşüleceği ya da tahliyede geri alınıp alınmayacağı kira sözleşmenize bağlıdır.",
  },
  {
    q: "Fatura elektronik mi kesiliyor, kurumsal ödeme yapılıyor mu?",
    a: "Evet, e-Arşiv/e-Fatura sistemine kayıtlıyız. Kurumsal müşterilere firma adına fatura keseriz, kredi kartı ve banka havalesi kabul ederiz. Apartman yönetimlerine, site yönetimlerine ve işletmelere aylık toplu fatura da düzenliyoruz.",
  },
  {
    q: "Eski binada priz topraklamasız — sadece toprak hattı çekilebilir mi?",
    a: "Çoğu 1990 öncesi İzmir binasında tesisat topraklamasızdır. Kolon hattından ayrı tek damar yeşil-sarı kablo çekmek kısa vadeli bir çözüm olsa da yönetmeliğe uygun değildir. Doğrusu: pano yenilenip ana topraklama barasına bağlanan tek noktadan yıldız topoloji ile tüm prizlere toprak dağıtımı. Binanızda zaten topraklama kuyusu yoksa önce onu açıyoruz.",
  },
  {
    q: "Evimdeki kaçak akım rölesi çok eski, değiştirilmeli mi?",
    a: "Kaçak akım koruma röleleri (RCD / RCCB) zamanla mekanik yorulur. 10 yılı geçmiş röleleri, ayda bir kez test butonuna basılıp test edilmiyorsa güvenmeyin. Ayrıca 30 mA hassasiyetin altındaki eski 300 mA'lik modeller yalnızca yangın koruması yapar, can güvenliği için yetersizdir. Güncel standart: ıslak hacimler için 30 mA, pano genelinde Tip A veya Tip F röle.",
  },
  {
    q: "İzmir'de elektrik dağıtımını kim yapıyor, arıza kimin görevinde?",
    a: "İzmir ve çevresinde dağıtım Gediz EDAŞ sorumluluğundadır. Sayaç öncesi şebeke tarafındaki arızalar (trafo, ana kolon, sayaç) dağıtım şirketinin; sayaç sonrası tüm bina içi tesisat ise abonenin sorumluluğundadır. Sokak lambası, trafo patlaması gibi durumları 186'dan Gediz EDAŞ'a bildirmelisiniz; daire içi tüm arızalar bizim kapsamımızdadır.",
  },
  {
    q: "Yangın çıkaran elektrik arızalarının en yaygın sebebi nedir?",
    a: "İzmir'de en sık karşılaştığımız neden: aşırı yüklenen çoklu prizler (özellikle ısıtıcı, kettle, çamaşır makinesi gibi yüksek amperli cihazların aynı çoklu prizden beslenmesi), ek yerlerinde gevşemiş klemens bağlantıları ve yaşlanmış alüminyum kablolar. Bu üçü toplam yangın çağrılarımızın %80'inden fazlasını oluşturuyor.",
  },
  {
    q: "İşçilik garantisi tam olarak neyi kapsıyor?",
    a: "Yaptığımız tüm onarım ve montajlarda işçilik garantisi 2 yıldır; yani bağlantı gevşemesi, yanlış klemenslenme, kablo sıyırma hatası gibi bizim kaynaklı bir sorun çıkarsa ücretsiz gelir ve düzeltiriz. Malzeme garantisi üretici markaya göre değişir (Viko, Schneider, ABB, Siemens gibi markalarda 2-5 yıl). Müşterinin kendi aldığı malzemede sadece işçilik garantisi geçerlidir.",
  },
  {
    q: "Apartman yönetimleri için toplu bakım anlaşması yapıyor musunuz?",
    a: "Evet. Sitenin ortak alan aydınlatması, hidrofor panosu, asansör elektriği, otopark sensörleri, kamera ve interkom altyapısı için aylık bakım anlaşmaları düzenliyoruz. Anlaşmalı sitelerde çağrı başına fatura yerine sabit aylık ücret uygular, acil çağrılarda önceliklendirme yaparız.",
  },
  {
    q: "Bir elektrikçinin 'ustalık belgesi' olup olmadığını nasıl anlarım?",
    a: "3308 sayılı Mesleki Eğitim Kanunu'na göre elektrikçilik yapan her ustanın MYK (Mesleki Yeterlilik Kurumu) belgesi ya da Milli Eğitim onaylı ustalık belgesi bulunmalıdır. Belgeyi çağırdığınız ustadan isteyebilirsiniz; ciddi firmalar bunu internet sitesinde veya iletişim evrakında açıkça belirtir. Belgesiz çalışan bir ustayla yaşanan bir kazada sigorta tazminat ödemeyebilir.",
  },
];

export function HomeSeoBlock() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: extendedFaq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Sigorta Atması — Adım Adım Teşhis",
    description:
      "Evinizde sigorta atması durumunda elektrikçi çağırmadan önce kendi başınıza yapabileceğiniz güvenli teşhis adımları.",
    totalTime: "PT10M",
    tool: [
      { "@type": "HowToTool", name: "El feneri" },
      { "@type": "HowToTool", name: "Yalıtkan eldiven (önerilir)" },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Hangi sigortanın attığını belirleyin",
        text: "Panonuzun kapağını açın. Aşağı inmiş (veya ortada asılı) kolu olan otomat, atan sigortadır. Üzerindeki etiket hangi oda/hatta ait olduğunu yazıyorsa not edin.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "O hattaki tüm cihazları prizden çekin",
        text: "O hatta bağlı ısıtıcı, kettle, ütü, buzdolabı dışındaki yüksek amperli cihazları prizden çıkarın. Böylece arızanın kablaj mı cihaz mı olduğu netleşir.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Sigortayı tekrar kaldırın",
        text: "Atan sigortanın kolunu önce tam aşağı indirin, ardından tek hareketle yukarı kaldırın. Yukarıda kaldıysa cihazlardan biri arızalıdır; sırayla takıp hangisinin yeniden attırdığını bulun.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Kalkmıyor veya tekrar atıyorsa dokunmayın",
        text: "Cihazlar çekilmiş olduğu halde sigorta hâlâ atıyorsa kablaj veya pano içinde kısa devre vardır. Ana şalteri kapatın, prize/kabloya dokunmayın, bizi arayın. Kablo kavrulma kokusu geliyorsa bu aciliyet seviyesidir.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Kaçak akım rölesi düştüyse ayrı test edin",
        text: "Sigorta değil de büyük şalter (kaçak akım rölesi) düştüyse, üzerindeki test (T) düğmesine basın. Basıldığında düşüyor ve kaldırıldığında kalıyorsa röle sağlamdır — tesisatta kaçak vardır. Kaldırılamıyorsa röle arızalıdır, değişmesi gerekir.",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "İzmir Elektrikçi Rehberi — Arıza Tespitinden Tesisat Yenilemeye",
    description:
      "İzmir'de 20+ yıldır elektrik işleri yapan Elektrikçi Volkan Haktan'ın kaleminden sahada en sık karşılaştığımız arızalar, güvenlik ipuçları ve fiyat rehberi.",
    author: {
      "@type": "Person",
      name: "Elektrikçi Volkan Haktan",
      jobTitle: "Elektrik Teknisyeni",
      worksFor: { "@type": "LocalBusiness", name: site.name },
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.url}/logo.png` },
    },
    datePublished: "2026-04-21",
    dateModified: new Date().toISOString().slice(0, 10),
    mainEntityOfPage: site.url,
    image: `${site.url}/logo.png`,
    inLanguage: "tr-TR",
  };

  return (
    <>
      <JsonLd data={[faqSchema, howToSchema, articleSchema]} />

      <section className="shadow-3d bg-surface border-t border-line">
        <article className="container-x py-16 max-w-5xl">
          <header className="mb-10">
            <p className="text-accent font-semibold uppercase text-sm tracking-wider mb-2">
              İzmir Elektrikçi Rehberi
            </p>
            <h2 className="text-3xl md:text-4xl mb-3">
              İzmir'de 7/24 Elektrikçi: Arıza Tespitinden Tesisat Yenilemeye Tam Rehber
            </h2>
            <p className="text-ink/70 text-sm">
              Yazan: <strong className="text-primary">Elektrikçi Volkan Haktan</strong> · İzmir'de{" "}
              {new Date().getFullYear() - site.foundingYear} yıllık sahada uygulama tecrübesi · Son
              güncelleme: {new Date().toISOString().slice(0, 10)}
            </p>
          </header>

          <div className="space-y-8 text-ink/85 leading-relaxed">
            <p className="text-lg">
              Bu rehberi, İzmir'in 15 ilçesinde 20 yılı aşkın saha deneyimimizden
              damıtarak hazırladık. Amacımız, ustayı aramadan önce sorunu anlamanıza,
              aradığınızda ne beklemeniz gerektiğini bilmenize ve fiyat/güvenlik
              konusunda doğru kararlar vermenize yardımcı olmak. Aşağıdaki her bölüm,
              sahada en sık karşılaştığımız durumların dökümüdür — pazarlama metni
              değil, mutfak kokusu olan ustalık bilgisi.
            </p>

            <section>
              <h3 className="text-2xl text-primary mb-3">İzmir'de Elektrikçi Seçerken Bilmeniz Gerekenler</h3>
              <p>
                İzmir, coğrafi olarak denize kıyı ilçeleriyle yüksek rutubete, iç
                ilçelerinde ise yaz-kış keskin sıcaklık farkına maruz kalan bir şehir.
                Bu iki faktör, tesisat yaşlanmasını Türkiye ortalamasından daha hızlı
                hale getirir. Konak, Alsancak, Güzelyalı ve Balçova gibi kıyı
                bölgelerinde tuzlu havanın bakır klemensleri yorması klasik bir
                senaryodur; Buca, Bornova ve Karabağlar gibi iç ilçelerde ise termal
                genleşme-büzülme kaynaklı klemens gevşemesi yaygındır. Bu yüzden
                ustanız yalnızca "kabloyu bağlayan" değil, bu mikro-iklim
                dinamiklerini bilen biri olmalı.
              </p>
              <p className="mt-3">
                Güvenli bir elektrikçi için kontrol listeniz şu dört maddeden oluşmalı:{" "}
                <strong>ustalık belgesi</strong> (MYK ya da MEB onaylı),{" "}
                <strong>işyeri açma ruhsatı / vergi levhası</strong> (kayıt dışı çalışan
                ustaların sigorta açısından koruyamayacağı kazalar oluyor),{" "}
                <strong>yazılı sabit fiyat teklifi</strong> (saat başı "değişir" diyen
                fiyatlandırmadan kaçının) ve <strong>işçilik garantisi taahhüdü</strong>.
                Bu dört madde, ucuz görünen işlerin arkasında oluşan gizli maliyeti en
                büyük oranda düşüren filtredir.
              </p>
              <p className="mt-3">
                Düzenleyici çerçeveyi merak ediyorsanız elektrik dağıtım sektörünün üst
                kurulu olan{" "}
                <a
                  href="https://www.epdk.gov.tr/"
                  target="_blank"
                  rel="noopener nofollow"
                  className="text-accent underline"
                >
                  EPDK
                </a>{" "}
                ve İzmir bölgesinin dağıtım şirketi{" "}
                <a
                  href="https://www.gdzelektrik.com.tr/"
                  target="_blank"
                  rel="noopener nofollow"
                  className="text-accent underline"
                >
                  Gediz EDAŞ
                </a>{" "}
                bu sınırları belirler. Daire içi tesisatın teknik standartları ise
                Elektrik İç Tesisleri Yönetmeliği'nde tanımlıdır; uyduğumuz çerçeve budur.
              </p>
            </section>

            <section>
              <h3 className="text-2xl text-primary mb-3">7/24 Acil Elektrikçi Ne Zaman Gerekir?</h3>
              <p>
                "Acil" tanımı insanlara göre değişir; ama elektrik güvenliği açısından
                beklemeden bir ustanın aranması gereken net durumlar vardır. Aşağıdaki
                liste, sahada can veya mal güvenliğini riske atan tablolardır:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>Prizden, kablodan veya panodan <strong>yanık kokusu</strong> geliyor</li>
                <li>Prize el değdiğinde <strong>karıncalanma / hafif çarpma</strong> hissi var</li>
                <li>Islak zemin/banyo hattında <strong>kaçak akım rölesi düşüyor</strong> ve tekrar kalkmıyor</li>
                <li>Sigorta kaldırıldığında anında <strong>tekrar atıyor</strong></li>
                <li><strong>Yarı aydınlatma</strong> (bir fazda akım yok, iki fazla idare ediliyor)</li>
                <li>Pano içinde <strong>cızırtı ya da kıvılcım</strong> görülüyor</li>
                <li>Kombi, kazan veya asansör gibi <strong>yaşam destek cihazları</strong> elektriksiz kaldı</li>
                <li>Balkon/çatı üzerinde <strong>düşük asılı kablo</strong> tespit edildi</li>
              </ul>
              <p className="mt-3">
                Bu durumlardan biri varsa:{" "}
                <Link href="/hizmetler/acil-elektrik-tamiri" className="text-accent underline font-semibold">
                  acil elektrik tamiri
                </Link>{" "}
                sayfamızdan detayları okuyabilir ya da doğrudan {site.phone} numarasını arayabilirsiniz.
              </p>
            </section>

            <section>
              <h3 className="text-2xl text-primary mb-3">İzmir'de En Sık Karşılaşılan Elektrik Arıza Türleri</h3>
              <p>
                Yıllık çağrı dökümümüze baktığımızda toplam arızaların büyük çoğunluğu
                yedi ana kategoriye düşüyor. Her birinin tipik belirtisi, olası
                kaynağı ve doğru yaklaşımı farklı.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="shadow-3d bg-white border border-line p-5">
                  <h4 className="font-semibold text-primary mb-1">1. Sigorta Atması</h4>
                  <p className="text-sm">
                    Belirti: pano içinde kolu düşmüş otomat. Kaynak: aşırı yük, kısa devre veya
                    yorulan otomat. Doğru yaklaşım: hattı yükten arındırıp tekrar kaldırmak,
                    kalkmıyorsa{" "}
                    <Link href="/hizmetler/sigorta-pano" className="text-accent underline">
                      pano revizyonu
                    </Link>.
                  </p>
                </div>
                <div className="shadow-3d bg-white border border-line p-5">
                  <h4 className="font-semibold text-primary mb-1">2. Kaçak Akım Tetiklemesi</h4>
                  <p className="text-sm">
                    Belirti: kaçak akım rölesinin kendiliğinden düşmesi. Kaynak: ıslak hacimde
                    nem, yanmış eleman, izolasyon bozukluğu.{" "}
                    <Link href="/hizmetler/kacak-akim-tespiti" className="text-accent underline">
                      Kaçak akım tespiti
                    </Link>{" "}
                    cihazla hat hat yapılmalı.
                  </p>
                </div>
                <div className="shadow-3d bg-white border border-line p-5">
                  <h4 className="font-semibold text-primary mb-1">3. Topraklamasızlık</h4>
                  <p className="text-sm">
                    Belirti: metal cihazda karıncalanma, test cihazı toprağı göstermiyor.
                    Kaynak: özellikle 90 öncesi binada toprak hattının hiç çekilmemiş olması.
                    Çözüm:{" "}
                    <Link href="/hizmetler/topraklama" className="text-accent underline">
                      topraklama ölçüm ve iyileştirme
                    </Link>.
                  </p>
                </div>
                <div className="shadow-3d bg-white border border-line p-5">
                  <h4 className="font-semibold text-primary mb-1">4. Priz-Anahtar Arızası</h4>
                  <p className="text-sm">
                    Belirti: prizden cihaza akım gitmemesi, anahtarın ışığı yakmaması. Kaynak:
                    klemens yorulması, kapak içinde eklenti. Çözüm:{" "}
                    <Link href="/hizmetler/priz-anahtar" className="text-accent underline">
                      priz ve anahtar değişimi
                    </Link>.
                  </p>
                </div>
                <div className="shadow-3d bg-white border border-line p-5">
                  <h4 className="font-semibold text-primary mb-1">5. Aydınlatma Arızası</h4>
                  <p className="text-sm">
                    Belirti: avize hiç yanmıyor ya da titriyor. Kaynak: LED sürücü arızası,
                    kötü klemens, dimmer-LED uyumsuzluğu. Çözüm:{" "}
                    <Link href="/hizmetler/avize-montaji" className="text-accent underline">
                      avize-armatür revizyonu
                    </Link>.
                  </p>
                </div>
                <div className="shadow-3d bg-white border border-line p-5">
                  <h4 className="font-semibold text-primary mb-1">6. Isıtma-Soğutma Elektriği</h4>
                  <p className="text-sm">
                    Belirti: kombi ateşlenmiyor, klima elektrik almıyor. Kaynak: dar kesit
                    besleme, gevşek topraklama. Çözüm: cihaza özel hat +{" "}
                    <Link href="/hizmetler/kombi-montaji" className="text-accent underline">
                      kombi
                    </Link>{" "}
                    veya{" "}
                    <Link href="/hizmetler/klima-montaji" className="text-accent underline">
                      klima elektrik altyapısı
                    </Link>.
                  </p>
                </div>
                <div className="shadow-3d bg-white border border-line p-5">
                  <h4 className="font-semibold text-primary mb-1">7. Tesisat Yaşlanması</h4>
                  <p className="text-sm">
                    Belirti: sık atan sigorta, eski alüminyum kablolama, kahverengileşmiş
                    anahtar. Çözüm: kısmi veya komple{" "}
                    <Link href="/hizmetler/elektrik-tesisat" className="text-accent underline">
                      elektrik tesisat yenileme
                    </Link>.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl text-primary mb-3">Sigorta Atması: Adım Adım Teşhis</h3>
              <p>
                Usta çağırmadan önce güvenle yapabileceğiniz birkaç adım var. Aşağıdaki
                beş adımlı prosedür, çağrılarımızın yaklaşık dörtte birini "cihaz arızası,
                usta gerek yok" tespitine dönüştürüyor. Doğru uygulandığında hem
                zamanınızı hem de servis ücretini kurtarabilir.
              </p>
              <ol className="list-decimal pl-6 space-y-2 mt-3">
                <li>
                  <strong>Atan sigortayı belirleyin.</strong> Pano kapağını açın, kolu
                  aşağı inmiş olan otomatı bulun, etiketli ise hangi hatta ait olduğunu
                  not edin.
                </li>
                <li>
                  <strong>O hattaki yüksek amperli cihazları prizden çekin.</strong>{" "}
                  Kettle, ütü, ısıtıcı, elektrikli fırın, çamaşır makinesi, bulaşık
                  makinesi gibi kalemler öncelikli.
                </li>
                <li>
                  <strong>Sigortayı tek seferde kaldırın.</strong> Önce tam aşağı
                  indirip sonra tek hareketle kaldırmak, mikro kontak sorunu çözer.
                </li>
                <li>
                  <strong>Cihazları tek tek takmaya başlayın.</strong> Hangi cihaz
                  takıldığında sigorta tekrar atıyor — suçlu odur, cihazın kendisi
                  onarılmalı.
                </li>
                <li>
                  <strong>Yine atıyorsa kablaj arızasıdır.</strong> Ana şalteri kapatın,
                  bize {site.phone} üzerinden ulaşın. Bu noktadan sonra denemeye devam
                  etmek kablo veya pano içinde yangın riski oluşturur.
                </li>
              </ol>
            </section>

            <section>
              <h3 className="text-2xl text-primary mb-3">Topraklama ve Kaçak Akım Koruması — Neden Vazgeçilmez?</h3>
              <p>
                Türk Standartları Enstitüsü tarafından yayımlanan{" "}
                <a
                  href="https://www.tse.org.tr/"
                  target="_blank"
                  rel="noopener nofollow"
                  className="text-accent underline"
                >
                  TSE
                </a>{" "}
                referanslı standartlara ve yürürlükteki Elektrik İç Tesisleri
                Yönetmeliği'ne göre her konutta topraklama ve 30 mA hassasiyetli kaçak
                akım koruma rölesi bulunması zorunlu. Nedeni basit: insan vücudunun
                tehlike eşiği yaklaşık 50 mA; bu seviyeye ulaşmadan devreyi kesen bir
                röle, çarpılmayı ölümcül olmaktan çıkarıp "tatsız anı" seviyesine indirir.
              </p>
              <p className="mt-3">
                İzmir'in özellikle Alsancak, Güzelyalı, Göztepe, Karşıyaka gibi eski
                binaları olan bölgelerinde çoğu zaman kaçak akım rölesi takılı
                gözükür ama hiç test edilmediği için mekanik olarak kilitlenmiştir —
                yani olası bir kaçakta devreyi açmaz. Her ay bir kez "Test" butonuna
                basıp düşmesini görmek, yıllarca güvende yaşamanın en ucuz yolu.
              </p>
              <p className="mt-3">
                Tesisatınızın topraklama ve kaçak akım durumunu bilmiyorsanız{" "}
                <Link href="/hizmetler/topraklama" className="text-accent underline">
                  topraklama ölçümü
                </Link>{" "}
                ve{" "}
                <Link href="/hizmetler/kacak-akim-tespiti" className="text-accent underline">
                  kaçak akım tespit
                </Link>{" "}
                hizmetlerimizle tek ziyarette net rapor veriyoruz.
              </p>
            </section>

            <section>
              <h3 className="text-2xl text-primary mb-3">Elektrik Tesisatı Yenileme: Ne Zaman Şart?</h3>
              <p>
                Komple tesisat yenileme büyük karar olduğu için bunu sadece gerçekten
                gerektiğinde öneririz. Aşağıdaki sinyallerden üçü ve daha fazlası varsa
                parça parça onarım yerine toplu yenileme kat kat ekonomiktir:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>Bina 1995 öncesi ve tesisat hiç yenilenmemiş</li>
                <li>Alüminyum kablo kullanılmış (zaman içinde pullanır, ısınır)</li>
                <li>Sigortalar T tipi seramik, otomatik değil</li>
                <li>Bina içinde topraklama hattı hiç yok</li>
                <li>Duvar içinde boru yok, kablolar direkt sıvaya gömülmüş</li>
                <li>Son 12 ayda 3'ten fazla sigorta atma/kaçak olayı yaşandı</li>
                <li>Priz-anahtar kahverengileşmiş, ısınıyor</li>
              </ul>
              <p className="mt-3">
                Detaylı süreç, kullanılan malzemeler ve daire başı tipik fiyat aralığı
                için{" "}
                <Link href="/hizmetler/elektrik-tesisat" className="text-accent underline">
                  elektrik tesisat hizmeti
                </Link>{" "}
                sayfamızda adım adım anlattık.
              </p>
            </section>

            <section>
              <h3 className="text-2xl text-primary mb-3">Kombi, Klima, Avize Montajı — Elektrik Tarafı</h3>
              <p>
                Mekanik montaj ustası çok olsa da bu cihazların elektrik altyapısı
                ihmal edildiğinde cihaz garantisi bile tehlikeye girer. Klima için 2.5
                mm² kesitli özel hat, kombi için topraklı tekli priz, avize için
                doğru anma akımına sahip anahtarlama zorunludur. Bu hatlardan birini
                atlayan montajlar İzmir'de yaz ortası en sık karşılaştığımız yangın
                çıkışı. Doğru altyapı için{" "}
                <Link href="/hizmetler/klima-montaji" className="text-accent underline">
                  klima elektrik altyapısı
                </Link>,{" "}
                <Link href="/hizmetler/kombi-montaji" className="text-accent underline">
                  kombi montajı
                </Link>{" "}
                ve{" "}
                <Link href="/hizmetler/avize-montaji" className="text-accent underline">
                  avize montajı
                </Link>{" "}
                detay sayfalarımıza bakabilirsiniz.
              </p>
            </section>

            <section>
              <h3 className="text-2xl text-primary mb-3">Pano ve Sigorta Yenileme</h3>
              <p>
                Pano, daire içi elektriğin kalbidir; yıllar içinde tozlanır, ısınır,
                otomat kontakları yorulur. Modern panoda olması gerekenler:
                ana şalter, Tip A veya Tip F 30 mA kaçak akım rölesi, her hat için
                ayrı otomat, etiketlenmiş hatlar ve topraklama barası. Bunlar olmadan
                bir pano teknik olarak "çalışır" gözükse de güvenli değildir.{" "}
                <Link href="/hizmetler/sigorta-pano" className="text-accent underline">
                  Sigorta-pano yenileme
                </Link>{" "}
                çoğunlukla 2-4 saat içinde tamamlanır, daireyi uzun süre elektriksiz
                bırakmaz.
              </p>
            </section>

            <section>
              <h3 className="text-2xl text-primary mb-3">Elektrik İşleri Fiyatlandırma Mantığı</h3>
              <p>
                Şeffaf fiyat politikamızın temelinde üç prensip var: <strong>yerinde
                sabit teklif</strong>, <strong>malzeme + işçilik ayrıştırması</strong>,{" "}
                <strong>sürpriz kalem yok</strong>. Tipik işlerin fiyat aralıkları
                hizmet sayfalarında açıkça listelidir. Aşağıda 2026 itibarıyla İzmir
                pazarının genel görünümüne dair kaba bir çerçeve bulacaksınız — ama
                kesin fiyat yalnızca yerinde keşif sonrası verilir:
              </p>
              <div className="overflow-x-auto mt-3">
                <table className="w-full text-sm border-collapse">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="text-left p-2">İş</th>
                      <th className="text-left p-2">Tipik Süre</th>
                      <th className="text-left p-2">Fiyat Aralığı</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {hizmetler.slice(0, 8).map((h) => (
                      <tr key={h.slug} className="border-b border-line">
                        <td className="p-2">
                          <Link href={`/hizmetler/${h.slug}`} className="text-accent underline">
                            {h.shortTitle}
                          </Link>
                        </td>
                        <td className="p-2">~{h.durationMinutes} dk</td>
                        <td className="p-2 font-semibold">{h.priceRange}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h3 className="text-2xl text-primary mb-3">İzmir İlçelerinde Yerel Hizmet Ağımız</h3>
              <p>
                İzmir 30 ilçeli büyükşehir; biz merkez ve yakın çevredeki 15 ilçede aktif
                saha ekibi tutuyoruz. Her ilçenin kendine özgü yapı dinamiği var ve
                ilçe sayfalarımızda bunları tek tek anlattık:
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-4 text-sm">
                {ilceler.map((i) => (
                  <Link
                    key={i.slug}
                    href={`/${i.slug}`}
                    className="shadow-3d bg-white border border-line p-3 hover:border-accent"
                  >
                    <strong className="text-primary">{i.name} Elektrikçi</strong>
                    <span className="block text-ink/70 text-xs mt-1">
                      {i.responseTimeMinutes} dk varış · {i.mahalleler.length}+ mahalle
                    </span>
                  </Link>
                ))}
              </div>
              <p className="mt-4">
                İzmir'in genel yerleşim ve demografisi hakkında bağımsız kaynak olarak{" "}
                <a
                  href="https://tr.wikipedia.org/wiki/%C4%B0zmir"
                  target="_blank"
                  rel="noopener nofollow"
                  className="text-accent underline"
                >
                  İzmir Wikipedia sayfasını
                </a>{" "}
                inceleyebilirsiniz. Dağıtım altyapısı ile ilgili resmi bilgi için{" "}
                <a
                  href="https://www.tedas.gov.tr/"
                  target="_blank"
                  rel="noopener nofollow"
                  className="text-accent underline"
                >
                  TEDAŞ
                </a>{" "}
                kaynak olarak kullanılabilir.
              </p>
            </section>

            <section>
              <h3 className="text-2xl text-primary mb-3">Neden Elektrikçi Haktan?</h3>
              <p>
                Piyasada "ucuz elektrikçi" bolca var; biz farklılaşmayı yaşatılan deneyim
                üzerine kuruyoruz:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>
                  <strong>{new Date().getFullYear() - site.foundingYear} yıllık saha deneyimi</strong>{" "}
                  ({site.foundingYear}'ten bu yana) — on binlerce farklı daire, apartman ve
                  işletmenin tesisatını görmüş ekip.
                </li>
                <li><strong>Belgeli usta kadrosu</strong> — MYK ve MEB onaylı ustalık belgeleri.</li>
                <li><strong>Şeffaf fiyat</strong> — yerinde yazılı teklif, onaysız kalem yok.</li>
                <li><strong>2 yıl işçilik garantisi</strong> — bağlantı kaynaklı her sorunda ücretsiz yeniden müdahale.</li>
                <li><strong>Gerçek 7/24</strong> — gece, hafta sonu, bayram ek ücret yok.</li>
                <li><strong>Kurumsal faturalandırma</strong> — e-Arşiv/e-Fatura, apartman/işletme anlaşmaları.</li>
                <li>
                  <strong>Hakkımızda</strong> hikayemizin tamamı için{" "}
                  <Link href="/hakkimizda" className="text-accent underline">
                    hakkımızda sayfasına
                  </Link>{" "}
                  göz atabilirsiniz.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl text-primary mb-3">Elektrik Güvenliği: Yap / Yapma Listesi</h3>
              <div className="grid sm:grid-cols-2 gap-4 mt-3">
                <div className="bg-white border-l-4 border-accent p-5">
                  <h4 className="font-semibold text-primary mb-2">✓ Yapın</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Ayda bir kaçak akım rölesinin test butonuna basın</li>
                    <li>Pano etiketlerini güncel tutun — hangi kol hangi hat</li>
                    <li>Islak elle prize dokunmayın, banyo dışı priz kullanın</li>
                    <li>Çocuklu evde her prize güvenlik kapağı takın</li>
                    <li>Şantiye/tadilatta her zaman seyyar kaçak akım rölesi kullanın</li>
                  </ul>
                </div>
                <div className="bg-white border-l-4 border-primary p-5">
                  <h4 className="font-semibold text-primary mb-2">✗ Yapmayın</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Atan sigortayı üst üste defalarca kaldırıp indirmeyin</li>
                    <li>Çoklu priz üzerine çoklu priz takmayın</li>
                    <li>Isıtıcı/ütü/kettle'ı uzatma kablosundan beslemeyin</li>
                    <li>Kokulu/ısınmış prize dokunmayın, ana şalteri kapatın</li>
                    <li>Belgesiz ustaya sabit tesisat dokundurmayın</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl text-primary mb-3">Müşteri Deneyimimiz: Randevudan Faturaya</h3>
              <p>
                Bir çağrı aldığımızda süreç standart akar: telefonda durumu
                anlatırsınız, olası senaryoları söyler ve yaklaşık fiyat aralığı
                veririz. Yola çıktığımızda canlı konum paylaşımı yaparız — bekleme
                belirsizliği yok. Eve vardığımızda koruyucu terlik/galoş kullanır,
                mümkün olan en az müdahaleyi yapar, işi bitirdiğimizde çalıştığımız
                alanı temizler, fotoğraf ile öncesi-sonrası belgesi bırakırız. Fatura
                aynı gün e-Arşiv'den e-posta veya WhatsApp yoluyla ulaşır.
              </p>
              <p className="mt-3">
                İletişim için <Link href="/iletisim" className="text-accent underline">iletişim sayfamıza</Link>{" "}
                bakabilir ya da doğrudan <a href={`tel:${site.phoneTel}`} className="text-accent underline font-semibold">{site.phone}</a> numarasını arayabilirsiniz.
                WhatsApp'tan <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener" className="text-accent underline">mesaj</a>{" "}
                da atabilirsiniz — foto/video göndermeniz tanıyı hızlandırır.
              </p>
            </section>

            <section>
              <h3 className="text-2xl text-primary mb-3">Ek Sık Sorulan Sorular</h3>
              <div className="space-y-3 mt-3">
                {extendedFaq.map((f) => (
                  <details key={f.q} className="shadow-3d group bg-white border border-line p-5">
                    <summary className="cursor-pointer font-semibold text-primary list-none flex justify-between gap-4">
                      {f.q}
                      <span className="text-accent group-open:rotate-45 transition-transform shrink-0">+</span>
                    </summary>
                    <p className="mt-3 text-ink/80">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="shadow-3d bg-primary text-white p-8 text-center">
              <h3 className="text-white text-2xl mb-3">Hâlâ Emin Değil misiniz? Bir Telefon Kadar Yakınız.</h3>
              <p className="text-white/80 mb-5 max-w-2xl mx-auto">
                İzmir'in hangi ilçesindeyseniz olun — Buca'dan Konak'a, Bornova'dan
                Karabağlar'a — ortalama 15-25 dakikada kapıdayız. Keşif ücretsiz,
                teklif yazılı, iş garantili.
              </p>
              <a href={`tel:${site.phoneTel}`} className="btn-accent text-2xl px-8 py-4">
                📞 {site.phone}
              </a>
            </section>
          </div>
        </article>
      </section>
    </>
  );
}
