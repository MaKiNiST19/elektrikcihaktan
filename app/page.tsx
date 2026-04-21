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
    q: "Elektrik faturası neden yüksek geliyor?",
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
    q: "Fatura ve garanti veriyor musunuz?",
    a: "Tüm işlerde resmi fatura keseriz. İşçilikte 2 yıl, tesisat işlerinde 5 yıl garanti veririz.",
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
        <div className="absolute inset-0 bg-primary/85"></div>
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
              <RatingBadge title="20 Yıllık Deneyim" subtitle="Belgeli uzman ekip" />
              <RatingBadge title="30 Dakikada Hizmet" subtitle="İzmir merkez bölgeleri" />
              <RatingBadge title="Garantili İşçilik" subtitle="Faturalı ve belgeli" />
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
                <div className="w-full h-56 bg-surface flex items-center justify-center overflow-hidden">
                  <img
                    src={imageMap[h.slug] || imageMap.default}
                    alt={h.title}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
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

      <HomeSeoBlock />
    </>
  );
}
