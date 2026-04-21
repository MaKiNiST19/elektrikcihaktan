import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageEyebrow } from "@/components/PageEyebrow";

export const metadata: Metadata = {
  title: "Hakkımızda | Elektrikçi Volkan Haktan | İzmir 7/24",
  description:
    "Elektrikçi Volkan Haktan, 20 yıllık deneyim, İzmir'de 7/24 elektrik hizmetleri. Arıza tespiti ücretsiz, sabit fiyat, uzun süreli destek. Hakkımızda sayfası.",
  alternates: { canonical: "/hakkimizda" },
};

export default function Page() {
  return (
    <article className="container-x py-16 max-w-4xl">
      <PageEyebrow />
      <h1 className="text-5xl font-bold mb-6 text-primary">Hakkımızda</h1>

      <div className="prose-like text-lg leading-relaxed text-ink/80 mb-12">
        <p className="mb-4">
          İzmir'de 20 yılı aşkın tecrübesiyle hizmet veren Elektrikçi Volkan Haktan,
          2005 yılından bu yana yüzlerce konut ve işyerinde elektrik tesisat, tamirat ve
          montaj hizmetleri sunmaktadır. Belgeli teknisyenleriyle çalışan firmamız,
          İzmir'in Konak, Buca, Karabağlar, Bornova, Bayraklı ve tüm ilçelerinde
          aynı gün, hızlı ve güvenilir servis sağlamaktadır.
        </p>
        <p className="mb-4">
          Sigorta atması, elektrik kesintisi, kaçak tespiti, priz yanması, kısa devre,
          tesisat yenileme, topraklama, klima ve kombi elektrik montajı gibi tüm
          elektrik işlerinde uzman olan ekibimiz, müşteriyi meydana çıkan sorundan
          hızlı ve kaliteli bir şekilde kurtarmayı hedeflemiştir.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-primary">Volkan Haktan — Kurucumuz</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 prose-like text-ink/80 space-y-4">
            <p>
              Elektrikçi Volkan Haktan, 1990'ların ortasından itibaren elektrik
              sektöründe aktif olarak çalışmakta ve hizmet vermektedir. TEDAŞ standartlarına
              uygun tesisat ve arıza tespiti konusunda derinlemesine bilgi ve deneyime sahip
              olan Volkan Haktan, İzmir'de güvenilir ve hızlı elektrik hizmetinin öncüsü
              haline gelmiştir.
            </p>
            <p>
              Volkan Haktan'ın felsefesi basitçe şudur: "Elektrik arızası mühendislik bilgisi
              kadar sabır ve titizlik gerektirir." Her müşteriyi kendi ev sahibiymiş gibi
              değerlendiren Volkan Haktan, mühendislik bilgisini insani değerlerle birleştirerek
              hizmet sunmaktadır. Usta, yapılan her işte uzun süreli destek ve müşteri memnuniyetini
              taahhüt eder.
            </p>
            <p>
              Belgeli elektrik teknisyeni olan Volkan Haktan'ın yanında çalışan tüm ekip üyeleri
              de aynı disiplin ve standartları takip eder. Çalışanlar düzenli olarak eğitilir,
              en yeni teknikler ve malzeler hakkında bilgilendirilir.
            </p>
          </div>
          <div className="bg-surface rounded-lg p-6 h-fit">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                V
              </div>
              <h3 className="text-lg font-bold mb-2">Volkan Haktan</h3>
              <p className="text-sm text-ink/70">Kurucu & Baş Elektrikçi</p>
              <p className="text-xs text-ink/60 mt-3">20+ Yıl Deneyim</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-primary">Misyon ve Vizyon</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="shadow-3d p-6 border border-line">
            <h3 className="text-xl font-bold mb-3 text-accent">Misyonumuz</h3>
            <p className="text-ink/80 leading-relaxed">
              İzmir'de yaşayan ve çalışan her kesimin elektrik problemlerini
              hızlı, güvenilir ve adil fiyatlarla çözmek. Arıza tespitinde hiç
              gizlilik olmadan, müşteriyi tam olarak bilgilendirmek ve onun tercihini
              saymak, sabit bir fiyat sunmak ve bu fiyatı hiçbir zaman aşmamak.
              Güvenlikten taviz vermeden, en yüksek kalitede hizmet sunmak.
            </p>
          </div>
          <div className="shadow-3d p-6 border border-line">
            <h3 className="text-xl font-bold mb-3 text-accent">Vizyon</h3>
            <p className="text-ink/80 leading-relaxed">
              İzmir'de en güvenilir ve en çok tercih edilen elektrik servisi olmak.
              Teknoloji ve insan değerlerinin birleştiği, müşteriyi her zaman
              ön planda tutan, yeniliklere açık bir kuruluş. Belki de bir gün,
              elektrik problemlerine dokunma konusunda söz sahibi yegâne adres
              haline gelmek.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-primary">Neden Elektrikçi Volkan Haktan'ı Seçmeli?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="text-accent font-bold text-2xl flex-shrink-0">✓</div>
            <div>
              <h3 className="font-bold text-lg mb-2">7 Gün 24 Saat Hizmet</h3>
              <p className="text-ink/80">
                Hafta sonu, tatil günleri ve gece yarısında aynı şekilde, özel bir
                ücret farkı olmadan hizmet veriyoruz. Elektrik arızası beklemez.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-accent font-bold text-2xl flex-shrink-0">✓</div>
            <div>
              <h3 className="font-bold text-lg mb-2">Arıza Tespiti Ücretsiz</h3>
              <p className="text-ink/80">
                Yerinde arıza tespiti tamamen ücretsizdir. Sadece onay verdiğiniz
                onarım işinin ücretini alırız. İçinden çıkılmaz durumlar için hiç
                ödeme yapmanız gerekmez.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-accent font-bold text-2xl flex-shrink-0">✓</div>
            <div>
              <h3 className="font-bold text-lg mb-2">Sabit Fiyat, Sürpriz Yok</h3>
              <p className="text-ink/80">
                Onarım başlamadan fiyatı söyleriz. Sonradan hiç değişmez.
                Malzeme eklenirse o da önceden konuşulur, yazılı onay alınır.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-accent font-bold text-2xl flex-shrink-0">✓</div>
            <div>
              <h3 className="font-bold text-lg mb-2">Uzun Süreli Müdahale Desteği</h3>
              <p className="text-ink/80">
                İşçiliğimizde 2 yıl, tesisat işlerinde 5 yıl boyunca bizim kaynaklı
                her sorunda ücretsiz yeniden müdahale ederiz. Malzemelerde üretici desteği de geçerlidir.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-accent font-bold text-2xl flex-shrink-0">✓</div>
            <div>
              <h3 className="font-bold text-lg mb-2">15 Dakikada Yerinizde</h3>
              <p className="text-ink/80">
                İzmir merkez ilçelerine ortalama 15 dakikada ulaşıyoruz. Çevre
                ilçelerde 25-30 dakika. Yolda canlı konum paylaşımı sağlanır.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-accent font-bold text-2xl flex-shrink-0">✓</div>
            <div>
              <h3 className="font-bold text-lg mb-2">Belgeli Teknisyenler</h3>
              <p className="text-ink/80">
                Tüm ekip üyeleri resmi belge sahibi elektrik teknisyenleridir.
                TEDAŞ standartlarına uygun, yönetmeliğe bağlı çalışma yapılır.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-primary">Hizmet Alanlarımız</h2>
        <p className="text-ink/80 mb-6 leading-relaxed">
          Elektrikçi Volkan Haktan, İzmir'in Konak, Buca, Karabağlar, Bornova, Bayraklı,
          Gaziemir, Balçova, Alsancak, Karşıyaka ve diğer tüm ilçelerinde aşağıdaki
          hizmetleri sunmaktadır:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-3">
            <li className="flex gap-2"><span className="text-accent">•</span> <span className="text-ink/80">Acil elektrik arıza tamiratı</span></li>
            <li className="flex gap-2"><span className="text-accent">•</span> <span className="text-ink/80">Elektrik tesisat çekimi ve yenileme</span></li>
            <li className="flex gap-2"><span className="text-accent">•</span> <span className="text-ink/80">Topraklama yapımı ve ölçümü</span></li>
            <li className="flex gap-2"><span className="text-accent">•</span> <span className="text-ink/80">Sigorta ve pano yenileme</span></li>
            <li className="flex gap-2"><span className="text-accent">•</span> <span className="text-ink/80">Kaçak akım tespiti ve çözümü</span></li>
            <li className="flex gap-2"><span className="text-accent">•</span> <span className="text-ink/80">Priz ve anahtar değişimi</span></li>
          </ul>
          <ul className="space-y-3">
            <li className="flex gap-2"><span className="text-accent">•</span> <span className="text-ink/80">Kombi elektrik montajı</span></li>
            <li className="flex gap-2"><span className="text-accent">•</span> <span className="text-ink/80">Klima elektrik tesisatı</span></li>
            <li className="flex gap-2"><span className="text-accent">•</span> <span className="text-ink/80">Avize ve aydınlatma montajı</span></li>
            <li className="flex gap-2"><span className="text-accent">•</span> <span className="text-ink/80">Çanak anten ayarı</span></li>
            <li className="flex gap-2"><span className="text-accent">•</span> <span className="text-ink/80">İnternet ve fiber priz çekimi</span></li>
            <li className="flex gap-2"><span className="text-accent">•</span> <span className="text-ink/80">Akıllı ev sistemleri kurulumu</span></li>
          </ul>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-primary">Kalite Taahhütlerimiz</h2>
        <div className="shadow-3d border border-line p-8 bg-white/50">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-primary">Standartlara Uygunluk</h3>
              <p className="text-ink/80">
                Tüm işlerimiz TEDAŞ, TSE ve Elektrik Tesisleri Topraklama Yönetmeliğine
                uygun olarak yapılır. Yönetmeliğin gerektirdiği tüm testler ve ölçümler
                yapılır, raporlanır.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-primary">Malzeme Kalitesi</h3>
              <p className="text-ink/80">
                Prysmian, Öznur, ABB, Schneider, Legrand, Viko gibi sektörün güvenilen
                markalarıyla çalışırız. Numune malzeme yerine, kalitesinden eminiz olanları kullanırız.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-primary">İş Güvenliği</h3>
              <p className="text-ink/80">
                Çalışmalarımız sırasında ortamın güvenliği ön plandadır. Elektriğin
                kesimi, yeterli uyarı signalleri, uygun koruma malzemeleri ve ekip tarafından
                denetimi her zaman yapılır.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-primary">Ekibimiz</h2>
        <p className="text-ink/80 mb-6 leading-relaxed">
          Elektrikçi Volkan Haktan'ın başında seçilmiş, belge sahibi elektrik teknisyenleri yer almaktadır.
          Her ekip üyesi düzenli olarak hizmet içi eğitimler alır, yeni teknolojiler ve standartlar
          hakkında bilgilendirilir. Ekibimiz disiplin, güvenlik ve kalite konusunda hiç taviz vermez.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="shadow-3d p-6 border border-line text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary font-bold text-xl">
              ✓
            </div>
            <h3 className="font-bold mb-2">Elektrik Teknisyenleri</h3>
            <p className="text-sm text-ink/70">Resmi belge sahibi, deneyimli profesyoneller</p>
          </div>
          <div className="shadow-3d p-6 border border-line text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary font-bold text-xl">
              ✓
            </div>
            <h3 className="font-bold mb-2">Düzenli Eğitim</h3>
            <p className="text-sm text-ink/70">Yönetmelik ve teknolojileri takip etme</p>
          </div>
          <div className="shadow-3d p-6 border border-line text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary font-bold text-xl">
              ✓
            </div>
            <h3 className="font-bold mb-2">Müşteri Odaklı</h3>
            <p className="text-sm text-ink/70">Her müşteri bizi kendi ev sahibi gibi görür</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-primary">Müşteri Memnuniyeti</h2>
        <p className="text-ink/80 mb-6 leading-relaxed">
          Elektrikçi Volkan Haktan'ın en büyük varlığı, müşterilerinin güveni ve memnuniyetidir.
          Yıllar boyunca sunulan hızlı, güvenilir ve adil hizmet sayesinde, işletme ağızdan ağıza
          tavsiye ile büyüyor. Binlerce müşterinin evinde ve işyerinde hizmet vermiş olan firmamız,
          her zaman müşteri memnuniyetini ön planda tutuyor.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="shadow-3d p-6 border border-line border-accent/30 bg-accent/5">
            <p className="text-lg font-bold mb-3 text-primary">Neden Müşteriler Bizi Tercih Ediyor?</p>
            <ul className="space-y-2">
              <li className="text-ink/80 flex gap-2"><span className="text-accent font-bold">→</span>Hızlı ve güvenilir hizmet</li>
              <li className="text-ink/80 flex gap-2"><span className="text-accent font-bold">→</span>Adil ve şeffaf fiyatlandırma</li>
              <li className="text-ink/80 flex gap-2"><span className="text-accent font-bold">→</span>Profesyonel davranış</li>
              <li className="text-ink/80 flex gap-2"><span className="text-accent font-bold">→</span>Uzun süreli iş sonrası destek</li>
            </ul>
          </div>
          <div className="shadow-3d p-6 border border-line border-accent/30 bg-accent/5">
            <p className="text-lg font-bold mb-3 text-primary">İşin Sonunda Verdiğimiz</p>
            <ul className="space-y-2">
              <li className="text-ink/80 flex gap-2"><span className="text-accent font-bold">→</span>Yazılı iş belgesi (KDV dahil)</li>
              <li className="text-ink/80 flex gap-2"><span className="text-accent font-bold">→</span>İşçilik taahhüt belgesi</li>
              <li className="text-ink/80 flex gap-2"><span className="text-accent font-bold">→</span>Ölçüm raporları (tesisat işlerinde)</li>
              <li className="text-ink/80 flex gap-2"><span className="text-accent font-bold">→</span>Kullanım rehberi</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-primary">Belgeler ve Standartlar</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="font-bold text-lg mb-3 text-accent">Yönetmelik Uyumu</h3>
            <ul className="space-y-2 text-ink/80">
              <li>✓ TEDAŞ Standartlarına Uygunluk</li>
              <li>✓ TSE Elektrik Tesisleri Yönetmeliği</li>
              <li>✓ Topraklama Yönetmeliği (IEC)</li>
              <li>✓ İş Sağlığı ve Güvenliği Kanunu</li>
              <li>✓ Tüketiciyi Koruma Kanunu</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-lg mb-3 text-accent">Sertifikasyonlar</h3>
            <ul className="space-y-2 text-ink/80">
              <li>✓ Belgeli Elektrik Teknisyeni</li>
              <li>✓ TEDAŞ Onaylı Kontrollör</li>
              <li>✓ Topraklama Ölçüm Uzmanı</li>
              <li>✓ Kaçak Akım Tespiti Eğitimli</li>
              <li>✓ Yangın Sistemi Bilgisi</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-primary">Neden İzmir'de Tercih Edilen Elektrikçi?</h2>
        <div className="prose-like text-ink/80 space-y-4">
          <p>
            İzmir'de büyümüş, İzmir'de çalışan ve İzmir'i seven Elektrikçi Volkan Haktan,
            şehrinin elektrik ihtiyaçlarını yakından biliyor. Merkezden çevreye kadar tüm
            bölgelerde hızlı ve güvenilir hizmet sağlayan firmamız, yıllardır İzmir'nin
            tercih edilen elektrik servisidir.
          </p>
          <p>
            Konak'taki daireyi tamir etseniz, Buca'daki villayı tesisat çekseniz, Karabağlar'da
            kombi elektriğini montaj etseniz — her yerde aynı kalite, aynı hız, aynı denetim
            standartları uygulanır. İzmir'de elektrik işi gerektiğinde, ilk tercih
            Elektrikçi Volkan Haktan'dır.
          </p>
        </div>
      </section>

      <div className="shadow-3d mt-16 p-8 bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Hemen İletişime Geçin</h2>
        <p className="mb-6 text-white/90">
          Elektrik probleminiz ne olursa olsun, Elektrikçi Volkan Haktan'a hemen ulaşın.
          7 gün 24 saat, aynı gün hizmet hazır.
        </p>
        <a
          href={`tel:${site.phoneTel}`}
          className="inline-block bg-white text-primary font-bold text-xl px-8 py-3 rounded hover:bg-white/90 transition-colors"
        >
          {site.phone} — ARA
        </a>
      </div>
    </article>
  );
}
