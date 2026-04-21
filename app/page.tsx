import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { hizmetler } from "@/data/hizmetler";
import { ilceler } from "@/data/ilceler";
import { JsonLd } from "@/components/JsonLd";
import { HomeSeoBlock } from "@/components/HomeSeoBlock";
import { HeroBadges } from "@/components/HeroBadges";
import { WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: `${site.heroTitle} | ${site.phone} | 7/24 Elektrik Tamiratı`,
  description: site.description,
  alternates: { canonical: "/" },
};

const faq = [
  {
    q: "İzmir'in hangi ilçelerinde hizmet veriyorsunuz?",
    a: "Konak, Buca, Karabağlar, Bornova, Bayraklı, Gaziemir, Balçova başta olmak üzere İzmir'in tüm ilçelerinde 7/24 hizmet veriyoruz. Merkez ilçelere ortalama 15 dakikada ulaşıyoruz.",
  },
  {
    q: "Gece veya hafta sonu arayabilir miyim?",
    a: "Evet. 7 gün 24 saat açığız. Gece ve tatil ücreti farkı uygulamıyoruz, saat ücreti sabittir.",
  },
  {
    q: "Arıza tespiti ücretli mi?",
    a: "Yerinde arıza tespiti ücretsizdir. Sadece onay verdiğiniz onarımın ücretini alıyoruz, sürpriz fiyat yoktur.",
  },
  {
    q: "Ne kadar sürede geliyorsunuz?",
    a: "Merkez ilçelerde ortalama 15 dakika, çevre ilçelerde 25-30 dakika. Yolda canlı konum paylaşımı yapıyoruz.",
  },
  {
    q: "Fatura ve garanti veriyor musunuz?",
    a: "Tüm işlerde fatura keser, işçilik garantisi veririz. Kullanılan malzemeler üretici garantisine tabidir.",
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

      <section className="bg-primary text-white">
        <div className="container-x py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-shine font-semibold mb-3 uppercase tracking-wider text-sm">
              20+ Yıl Tecrübe · İzmir'in Tamamı
            </p>
            <h1 className="text-4xl md:text-5xl text-white leading-tight mb-4">
              İzmir 7/24 Acil Elektrikçi
            </h1>
            <p className="text-lg text-white/80 mb-6">
              {site.tagline}. Sigorta atması, elektrik kesintisi, kaçak tespiti
              ve tüm montaj işleriniz için tek telefon.
            </p>
            <div className="flex flex-wrap gap-3">
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
            <HeroBadges />
          </div>
          <div className="shadow-3d bg-accent text-white p-8 md:p-10">
            <h2 className="text-white text-2xl mb-2">Şimdi Arıza Bildir</h2>
            <p className="text-white/90 mb-6 text-sm">
              Telefonla ulaşmanız yeterli. Durumu açıkladığınızda yaklaşık fiyat
              aralığını telefondan söylüyoruz.
            </p>
            <a
              href={`tel:${site.phoneTel}`}
              className="btn-phone-lg w-full text-center"
            >
              {site.phone}
            </a>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
        <div className="container-x max-w-3xl">
          <header className="text-center mb-10">
            <p className="text-accent font-semibold uppercase text-sm tracking-wider mb-2">
              Sık Sorulan Sorular
            </p>
            <h2 className="text-3xl md:text-4xl">Merak Ettikleriniz</h2>
          </header>
          <div className="space-y-3">
            {faq.map((f) => (
              <details key={f.q} className="shadow-3d group border border-line p-5">
                <summary className="cursor-pointer font-semibold text-primary list-none flex justify-between">
                  {f.q}
                  <span className="text-accent group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-ink/80">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <HomeSeoBlock />
    </>
  );
}
