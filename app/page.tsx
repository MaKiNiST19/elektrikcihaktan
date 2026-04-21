import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { hizmetler } from "@/data/hizmetler";
import { ilceler } from "@/data/ilceler";
import { JsonLd } from "@/components/JsonLd";
import { HomeSeoBlock } from "@/components/HomeSeoBlock";
import { RatingBadge } from "@/components/foundations/rating-badge";
import { WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: `${site.heroTitle} | ${site.phone} | 7/24 Elektrik Tamiratı`,
  description: site.description,
  alternates: { canonical: "/" },
};

const faq = [
  {
    q: "Sigorta atması nasıl çözülür?",
    a: "Sigortanın sürekli atması genellikle devrede aşırı yük, kaçak akım veya kısa devre anlamına gelir. Arıza tespiti için çağırın, cihazlı olarak tespit edip çözeriz.",
  },
  {
    q: "Elektrik kesintisi neden olur ve kim çözer?",
    a: "Kesinti ana sigortada, sayaçta veya şebekede meydana gelir. Sayacın yanındaki ana sigorta attıysa arıza evde — biz çözeriz. Sonda yoksa GDZ'ye arayın.",
  },
  {
    q: "Kaçak akım rölesi nedir ve ne işe yarar?",
    a: "30mA kaçak akım rölesi elektrik kaçağını tespit edip devreyi keserek sizi elektrik çarpılmasından koruyan cihazıdır. Modern evlerde şart.",
  },
  {
    q: "Topraklama olmadan elektrik kullanılabilir mi?",
    a: "Topraklamasız tesisat eski yapılarda da hâlâ vardır ama tehlikelidir. Beyaz eşya ve metal yüzeyler elektrik çarpılma riski taşır. Mutlaka çekilmelidir.",
  },
  {
    q: "Prizim yanmış — ne yapmalıyım?",
    a: "Yanmış bir priz yangın başlatabilir. Hemen arayın, kullanmayın. Arkasındaki kablo da hasar görmüş olabilir, kontrol gerektirir.",
  },
  {
    q: "Elektrik tüketimi neden yüksek geliyor?",
    a: "Kaçak elektrik, enerji saçan cihazlar veya başında hata olabilir. Tesisat kontrolü ve cihaz analizi yapabiliriz.",
  },
  {
    q: "Priz topraklamasız — güvensiz mi?",
    a: "Evet. Özellikle çamaşır makinesi, fırın gibi yüksek güçlü cihazlar için topraklamalı priz şarttır.",
  },
  {
    q: "Hava kötüyken elektrik sorunu yaşıyorum — neden?",
    a: "Yağmur ve nem tesinatı ıslatarak kaçak oluşturur. Çatı, dış cephe, balkon prizleri şüpheli. Termal kamerayla tespit edebiliriz.",
  },
  {
    q: "Avizem sallanıyor — düşme riski var mı?",
    a: "15 kg üzeri kristal avizeler özel ağır yük kancası gerektirir. Standart kanca yıllar sonra gevşeyebilir. Kontrol ve gerekirse değişim yapmalıyız.",
  },
  {
    q: "Kombi elektrik bağlantısı nasıl yapılmalı?",
    a: "Kombi için ayrı W-otomat sigorta ve topraklamalı priz gerekir. Uzatma kablo kullanılmaz — enerji kaybına ve yangına neden olur.",
  },
  {
    q: "Klima için ayrı priz yapılması şart mı?",
    a: "12.000 BTU üzeri klimalarda evet. Ayrı sigorta ve topraklamalı priz güvenlik ve arıza izolasyonu için gereklidir.",
  },
  {
    q: "Tesisat yenilemesi için duvar kırmak şart mı?",
    a: "Büyük ölçüde evet, ama sıva üstü kanal veya asma tavan yolu ile minimum hasarla yapabiliriz. Keşifte seçeneği gösteririz.",
  },
  {
    q: "İzmir'in hangi ilçelerinde hizmet veriyorsunuz?",
    a: "Konak, Buca, Karabağlar, Bornova, Bayraklı, Gaziemir, Balçova başta olmak üzere İzmir'in tüm ilçelerinde 7/24 hizmet veriyoruz.",
  },
  {
    q: "Gece yarısı elektrikçi çağırabilir miyim?",
    a: "Evet. 7 gün 24 saat hizmet veriyoruz. Gece ve tatil için ek ücret uygulamıyoruz, sabit saat ücreti geçerlidir.",
  },
  {
    q: "Arıza tespiti ücretsiz midir?",
    a: "Evet, yerinde arıza tespiti tamamen ücretsizdir. Sadece onay verdiğiniz onarımın ücretini alırız.",
  },
  {
    q: "Ne kadar sürede ulaşıyorsunuz?",
    a: "Merkez ilçelerde ortalama 15 dakika, çevre ilçelerde 25-30 dakika. Yolda canlı konum paylaşımı sağlanır.",
  },
  {
    q: "İşiniz sonrası destek sağlıyor musunuz?",
    a: "Evet. İşçiliğimizde 2 yıl, tesisat işlerinde 5 yıl boyunca bizim kaynaklı her sorunda ücretsiz yeniden müdahale sözü veriyoruz.",
  },
  {
    q: "Elektrik fiyatları ne kadar?",
    a: "Arızaya ve işin kapsamına göre değişir. Keşiften sonra sabit fiyat söyleriz, sonradan değişmez.",
  },
  {
    q: "Sigortam sürekli atıyor, kendim değiştirebilir miyim?",
    a: "Hayır. Sigortanın atması bir belirti — asıl sebebi tespit etmek gerekir. Yanlış sigorta takılırsa daha tehlikeli olur.",
  },
  {
    q: "Pano yenilemesi ne kadar sürer?",
    a: "Standart daire için 2-3 saat. Elektrik sadece o süre kesintiye uğrar, hemen sonra geri verilir.",
  },
  {
    q: "Eski cam sigortaları W-otomat'a çevirmek zorunlu mu?",
    a: "Yasal zorunluluk yönetmelik açısından vardır. Yangın riski ve kaçak akım koruması için kesinlikle geçilmelidir.",
  },
  {
    q: "Kaçak akım rölesi atıyor — neyin arızası?",
    a: "Nemli priz, eski cihaz yalıtımı veya tesisatta zarar gibi nedenler olabilir. Cihazlı testle kaynağı bulup çözeriz.",
  },
  {
    q: "Metal cihaza dokununca karıncalanma hissediyorum?",
    a: "Kaçak elektrik var demektir. Elektrik çarpılma riskidir — hemen arıza tespiti yapın.",
  },
  {
    q: "Yeni priz ekletmek için ne kadar ödenir?",
    a: "Tek prizin değişimi 200-500 TL arası, ek priz çekimi 500-1000 TL arası değişiklik gösterir. Keşifle net fiyat söyleriz.",
  },
  {
    q: "LED aydınlatma montajı yapıyor musunuz?",
    a: "Evet. Mutfak, asma tavan, RGB uygulamaları, akıllı ev entegrasyonu yapabiliriz.",
  },
  {
    q: "Uydu anten ve internet prizi çekiliyor mu?",
    a: "Evet. Çanak anten ayarı, fiber internet prizi, Wi-Fi mesh kurulumu hizmetlerimiz içinde.",
  },
];

export default function Home() {
  const imageMap: Record<string, string> = {
    "elektrik-tesisat": "/elektrik-tesisati-cekme-yenileme-izmir.jpg",
    "klima-montaji": "/klima-elektrik-tesisati-tamiri-izmir.jpg",
    "kombi-montaji": "/kombi-elektrik-baglantisi-tamiri-izmir.jpg",
    default: "/7-24-elektrikci-izmir.jpg",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      <section
        className="relative bg-primary text-white overflow-hidden"
        style={{
          backgroundImage: "url(/elektrikci-hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/55"></div>
        <div className="relative container-x py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-shine font-semibold mb-3 uppercase tracking-wider text-sm">
              20+ Yıl Tecrübe · İzmir'in Tamamı
            </p>
            <h1 className="text-4xl md:text-5xl text-white leading-tight mb-4">
              İzmir 7/24 Acil Elektrikçi
            </h1>
            <p className="text-lg text-white/80 mb-8">
              {site.tagline}. Sigorta atması, elektrik kesintisi, kaçak tespiti
              ve tüm montaj işleriniz için tek telefon.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a href={`tel:${site.phoneTel}`} className="btn-accent text-base">
                {site.phone}
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener"
                className="btn-whatsapp"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              <RatingBadge rating={5} title="20 Yıllık Deneyim" subtitle="Belgeli uzman ekip" />
              <RatingBadge rating={5} title="30 Dakikada Hizmet" subtitle="İzmir merkez bölgeleri" />
              <RatingBadge rating={5} title="Belgeli İşçilik" subtitle="Sertifikalı usta ekibi" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x">
          <header className="text-center mb-10">
            <p className="text-accent font-semibold uppercase text-sm tracking-wider mb-2">
              Hizmetlerimiz
            </p>
            <h2 className="text-3xl md:text-4xl">Tüm Elektrik İşleri Tek Adresten</h2>
          </header>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {hizmetler.map((h) => (
              <Link
                key={h.slug}
                href={`/hizmetler/${h.slug}`}
                className="shadow-3d group border border-line hover:border-accent transition-colors overflow-hidden"
              >
                <div className="w-full h-40 bg-surface overflow-hidden">
                  <img
                    src={imageMap[h.slug] || imageMap.default}
                    alt={h.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg mb-2 group-hover:text-accent transition-colors">
                    {h.title}
                  </h3>
                  <p className="text-sm text-ink/80">{h.summary}</p>
                  <span className="inline-block mt-3 text-accent font-semibold text-sm">
                    Detaylar →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="shadow-3d bg-gradient-to-r from-accent to-accent/80 text-white p-8 rounded-lg">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-2">Şimdi Arıza Bildir</h2>
                <p className="text-white/90">
                  Telefonla ulaşmanız yeterli. Durumu açıkladığınızda yaklaşık fiyat
                  aralığını söyleriz.
                </p>
              </div>
              <div className="md:col-span-2 flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${site.phoneTel}`}
                  className="btn-phone-lg flex-1 text-center"
                >
                  📞 {site.phone} — ARA
                </a>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener"
                  className="btn-whatsapp flex-1 flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  WhatsApp Mesaj
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <div className="container-x">
          <header className="text-center mb-10">
            <p className="text-accent font-semibold uppercase text-sm tracking-wider mb-2">
              Servis Bölgelerimiz
            </p>
            <h2 className="text-3xl md:text-4xl">İzmir'in Tüm İlçelerinde</h2>
          </header>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {ilceler.map((i) => (
              <Link
                key={i.slug}
                href={`/${i.slug}`}
                className="shadow-3d bg-white border border-line p-4 text-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                <span className="block font-semibold">{i.name}</span>
                <span className="block text-xs opacity-70">Elektrikçi</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x">
          <header className="text-center mb-10">
            <p className="text-accent font-semibold uppercase text-sm tracking-wider mb-2">
              Sık Sorulan Sorular
            </p>
            <h2 className="text-3xl md:text-4xl mb-2">Merak Ettikleriniz</h2>
            <p className="text-ink/70">En yaygın elektrik sorunları ve çözümlerine dair sorular</p>
          </header>
          <div className="grid md:grid-cols-2 gap-4">
            {faq.map((f) => (
              <details key={f.q} className="shadow-3d group border border-line p-5">
                <summary className="cursor-pointer font-semibold text-primary list-none flex justify-between text-sm">
                  {f.q}
                  <span className="text-accent group-open:rotate-45 transition-transform flex-shrink-0 ml-2">+</span>
                </summary>
                <p className="mt-3 text-ink/80 text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container-x">
          <header className="text-center mb-12">
            <p className="text-accent font-semibold uppercase text-sm tracking-wider mb-2">
              Neden Bize Güveniyorlar?
            </p>
            <h2 className="text-3xl md:text-4xl text-white">
              Rakamlarla Elektrikçi Volkan Haktan
            </h2>
          </header>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center shadow-3d bg-white/10 backdrop-blur-md border border-white/20 p-6">
              <p className="text-4xl md:text-5xl font-bold text-accent mb-2">20+</p>
              <p className="text-sm text-white/80 uppercase tracking-wide">Yıllık Deneyim</p>
            </div>
            <div className="text-center shadow-3d bg-white/10 backdrop-blur-md border border-white/20 p-6">
              <p className="text-4xl md:text-5xl font-bold text-accent mb-2">15dk</p>
              <p className="text-sm text-white/80 uppercase tracking-wide">Ortalama Varış</p>
            </div>
            <div className="text-center shadow-3d bg-white/10 backdrop-blur-md border border-white/20 p-6">
              <p className="text-4xl md:text-5xl font-bold text-accent mb-2">7/24</p>
              <p className="text-sm text-white/80 uppercase tracking-wide">Kesintisiz Hizmet</p>
            </div>
            <div className="text-center shadow-3d bg-white/10 backdrop-blur-md border border-white/20 p-6">
              <p className="text-4xl md:text-5xl font-bold text-accent mb-2">5Yıl</p>
              <p className="text-sm text-white/80 uppercase tracking-wide">Tesisat Taahhüdü</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="shadow-3d bg-white/5 border border-white/20 p-6">
              <div className="text-accent text-3xl mb-3">✓</div>
              <h3 className="font-bold text-lg mb-2">Belgeli Teknisyen</h3>
              <p className="text-sm text-white/80">
                TEDAŞ standartlarına uygun, resmi belge sahibi elektrik teknisyenleri.
              </p>
            </div>
            <div className="shadow-3d bg-white/5 border border-white/20 p-6">
              <div className="text-accent text-3xl mb-3">✓</div>
              <h3 className="font-bold text-lg mb-2">Uzun Süreli Destek</h3>
              <p className="text-sm text-white/80">
                İşçilikte 2 yıl, tesisat işlerinde 5 yıl boyunca ücretsiz yeniden müdahale taahhüdü.
              </p>
            </div>
            <div className="shadow-3d bg-white/5 border border-white/20 p-6">
              <div className="text-accent text-3xl mb-3">✓</div>
              <h3 className="font-bold text-lg mb-2">Şeffaf Fiyat</h3>
              <p className="text-sm text-white/80">
                Ücretsiz keşif. Onay öncesi sabit fiyat. Sürpriz ek ücret yoktur.
              </p>
            </div>
          </div>

          <div className="shadow-3d bg-white text-ink p-8 md:p-10">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-xs uppercase text-accent font-bold tracking-wider mb-2">İşletme Adı</p>
                <p className="font-bold text-primary text-lg mb-1">{site.name}</p>
                <p className="text-sm text-ink/70">{site.founderTitle}</p>
                <p className="text-xs text-ink/60 mt-2">Kuruluş: {site.foundingYear}</p>
              </div>
              <div>
                <p className="text-xs uppercase text-accent font-bold tracking-wider mb-2">Hizmet Bölgesi</p>
                <p className="font-bold text-primary mb-1">İzmir ve Tüm İlçeleri</p>
                <p className="text-sm text-ink/70 leading-relaxed">
                  Konak · Buca · Karabağlar · Bornova · Bayraklı · Gaziemir · Balçova · Karşıyaka · Çiğli · Narlıdere ve 15 ilçe
                </p>
              </div>
              <div>
                <p className="text-xs uppercase text-accent font-bold tracking-wider mb-2">İletişim</p>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="block font-bold text-primary text-lg mb-1 hover:text-accent transition-colors"
                >
                  {site.phone}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="block text-sm text-ink/70 hover:text-accent transition-colors mb-1"
                >
                  {site.email}
                </a>
                <p className="text-xs text-ink/60 mt-2">7/24 Açık · Gece/Tatil Farkı Yok</p>
              </div>
            </div>
            <div className="border-t border-line mt-6 pt-6 flex flex-wrap gap-2 justify-center">
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded font-semibold">✓ TEDAŞ Standartları</span>
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded font-semibold">✓ TSE Yönetmeliği</span>
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded font-semibold">✓ Topraklama Belgeli</span>
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded font-semibold">✓ İSG Uyumlu</span>
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded font-semibold">✓ Uzun Süreli Destek</span>
            </div>
          </div>
        </div>
      </section>

      <HomeSeoBlock />
    </>
  );
}
