import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ilceler, getIlce } from "@/data/ilceler";
import { hizmetler } from "@/data/hizmetler";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { AuthorByline } from "@/components/Author";
import { PageEyebrow } from "@/components/PageEyebrow";

export function generateStaticParams() {
  return ilceler.map((i) => ({ ilce: i.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ ilce: string }> }
): Promise<Metadata> {
  const { ilce } = await params;
  const i = getIlce(ilce);
  if (!i) return {};
  return {
    title: i.metaTitle,
    description: i.metaDescription,
    alternates: { canonical: `/${i.slug}` },
  };
}

export default async function Page({ params }: { params: Promise<{ ilce: string }> }) {
  const { ilce } = await params;
  const i = getIlce(ilce);
  if (!i) notFound();

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${site.url}/${i.slug}#business`,
      name: `${i.name} Elektrikçi - ${site.name}`,
      telephone: site.phoneTel,
      url: `${site.url}/${i.slug}`,
      image: `${site.url}/logo.png`,
      priceRange: "₺₺",
      areaServed: { "@type": "AdministrativeArea", name: i.name },
      address: {
        "@type": "PostalAddress",
        addressLocality: i.name,
        addressRegion: "İzmir",
        addressCountry: "TR",
      },
      geo: { "@type": "GeoCoordinates", latitude: i.latitude, longitude: i.longitude },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Anasayfa", item: site.url },
        { "@type": "ListItem", position: 2, name: `${i.name} Elektrikçi`, item: `${site.url}/${i.slug}` },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={schema} />
      <article className="container-x py-12 max-w-5xl">
        <nav aria-label="Breadcrumb" className="text-sm mb-4 text-ink/60">
          <Link href="/">Anasayfa</Link> › <span>{i.name} Elektrikçi</span>
        </nav>

        <PageEyebrow />n        <h1 className="text-4xl mb-3">{i.name} Elektrikçi — 7/24 Acil Servis</h1>
        <p className="text-lg text-ink/80 leading-relaxed">{i.intro}</p>

        <div className="grid sm:grid-cols-4 gap-3 my-8">
          <div className="shadow-3d bg-surface p-4">
            <p className="text-xs uppercase text-ink/60">Varış Süresi</p>
            <p className="font-bold text-primary">{i.responseTimeMinutes} dakika</p>
          </div>
          <div className="shadow-3d bg-surface p-4">
            <p className="text-xs uppercase text-ink/60">Hizmet Saatleri</p>
            <p className="font-bold text-primary">7 gün 24 saat</p>
          </div>
          <div className="shadow-3d bg-surface p-4">
            <p className="text-xs uppercase text-ink/60">Keşif</p>
            <p className="font-bold text-primary">Ücretsiz</p>
          </div>
          <div className="shadow-3d bg-surface p-4">
            <p className="text-xs uppercase text-ink/60">Tecrübe</p>
            <p className="font-bold text-primary">{new Date().getFullYear() - site.foundingYear}+ yıl</p>
          </div>
        </div>

        <div className="shadow-3d bg-primary text-white p-8 my-8">
          <h2 className="text-white text-2xl mb-2">{i.name} İçin Acil Elektrikçi</h2>
          <p className="text-white/80 mb-4">{i.localNote}</p>
          <a href={`tel:${site.phoneTel}`} className="btn-accent text-lg">
            📞 {site.phone}
          </a>
        </div>

        <AuthorByline />

        <section>
          <h2 className="text-2xl mb-4">{i.name}'da Verdiğimiz Hizmetler</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {hizmetler.map((h) => (
              <Link
                key={h.slug}
                href={`/${i.slug}/${h.slug}`}
                className="shadow-3d border border-line p-4 hover:border-accent"
              >
                <h3 className="font-semibold text-primary mb-1">
                  {i.name} {h.shortTitle}
                </h3>
                <p className="text-sm text-ink/70">{h.summary}</p>
                <p className="text-xs text-ink/50 mt-2">{h.priceRange}</p>
              </Link>
            ))}
          </div>
        </section>

        {i.sampleJobs.length > 0 && (
          <section className="shadow-3d mt-12 bg-surface p-6">
            <h2 className="text-2xl mb-3">{i.name}'da Yaptığımız İşlerden</h2>
            <ul className="space-y-2 text-ink/80">
              {i.sampleJobs.map((j) => (
                <li key={j} className="flex gap-2">
                  <span className="text-accent font-bold">✓</span>{j}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-12">
          <h2 className="text-2xl mb-4">Hizmet Verdiğimiz Mahalleler</h2>
          <p className="text-ink/80 mb-3">
            {i.name}'nın aşağıdaki tüm mahallelerine aynı gün servis veriyoruz:
          </p>
          <div className="flex flex-wrap gap-2">
            {i.mahalleler.map((m) => (
              <span key={m} className="shadow-3d bg-surface px-3 py-1 text-sm">{m} Mh.</span>
            ))}
          </div>
        </section>

        {i.landmarks.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl mb-4">Çevredeki Önemli Yerler</h2>
            <p className="text-ink/80 mb-3">
              {i.name}'da aşağıdaki önemli yerler ve yaşam alanlarına hizmet veriyoruz:
            </p>
            <div className="flex flex-wrap gap-2">
              {i.landmarks.map((l) => (
                <span key={l} className="shadow-3d bg-primary/10 text-primary px-3 py-1 text-sm border border-primary/20">
                  📍 {l}
                </span>
              ))}
            </div>
          </section>
        )}

        <section className="mt-12 bg-white/50 shadow-3d border border-line p-8 rounded-lg">
          <h2 className="text-2xl mb-6 font-bold text-primary">{i.name}'da Elektrikçi Volkan Haktan</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3 text-accent">Neden Biz?</h3>
              <ul className="space-y-2 text-ink/80">
                <li className="flex gap-2"><span className="text-accent">✓</span>20+ yıllık deneyim ve uzmanlik</li>
                <li className="flex gap-2"><span className="text-accent">✓</span>Belgeli, eğitimli teknisyenler</li>
                <li className="flex gap-2"><span className="text-accent">✓</span>{i.responseTimeMinutes} dakikada hizmet</li>
                <li className="flex gap-2"><span className="text-accent">✓</span>Tüm işlerde fatura ve garanti</li>
                <li className="flex gap-2"><span className="text-accent">✓</span>7 gün 24 saat hizmet</li>
                <li className="flex gap-2"><span className="text-accent">✓</span>Arıza tespiti ücretsiz</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-accent">Uzmanlık Alanlarımız</h3>
              <ul className="space-y-2 text-ink/80">
                <li className="flex gap-2"><span className="text-accent">→</span>Acil elektrik arızaları</li>
                <li className="flex gap-2"><span className="text-accent">→</span>Elektrik tesisat ve yenileme</li>
                <li className="flex gap-2"><span className="text-accent">→</span>Topraklama ölçümü ve yapımı</li>
                <li className="flex gap-2"><span className="text-accent">→</span>Sigorta ve pano değişimi</li>
                <li className="flex gap-2"><span className="text-accent">→</span>Kaçak akım tespiti</li>
                <li className="flex gap-2"><span className="text-accent">→</span>Kombi, klima, avize montajı</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl mb-6 font-bold text-primary">Sık Sorulan Sorular</h2>
          <div className="space-y-3">
            <details className="shadow-3d border border-line p-5 group">
              <summary className="cursor-pointer font-bold text-primary flex justify-between">
                {i.name}'da kaç dakikada ulaşıyorsunuz?
                <span className="text-accent group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-ink/80">
                {i.name} ilçesinin merkez mahallelerine ortalama {i.responseTimeMinutes} dakikada ulaşıyoruz.
                Elektrik arızası meydana gelmesiyle beraber en kısa sürede yerinizde olmayı taahhüt ederiz.
              </p>
            </details>
            <details className="shadow-3d border border-line p-5 group">
              <summary className="cursor-pointer font-bold text-primary flex justify-between">
                {i.name}'nın hangi mahallelerine hizmet veriyorsunuz?
                <span className="text-accent group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-ink/80 mb-2">
                {i.name} ilçesinin tüm mahallelerine hizmet veriyoruz:
              </p>
              <p className="text-ink/70 text-sm">
                {i.mahalleler.join(", ")}
              </p>
            </details>
            <details className="shadow-3d border border-line p-5 group">
              <summary className="cursor-pointer font-bold text-primary flex justify-between">
                Arıza tespiti ücretli midir?
                <span className="text-accent group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-ink/80">
                Hayır. Yerinde arıza tespiti tamamen ücretsizdir. Sadece onay verdiğiniz onarımın ücretini alırız.
                Onarım yaptırmazsanız hiçbir ödeme yapmanız gerekmez.
              </p>
            </details>
            <details className="shadow-3d border border-line p-5 group">
              <summary className="cursor-pointer font-bold text-primary flex justify-between">
                Elektrikçi Volkan Haktan'ın tecrübesi nedir?
                <span className="text-accent group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-ink/80">
                Elektrikçi Volkan Haktan, 20 yılı aşkın deneyimle İzmir'de hizmet veren, belgeli elektrik teknisyenidir.
                TEDAŞ standartlarına uygun, yönetmelikçe tanınmış uzman bir profesyoneldir.
              </p>
            </details>
            <details className="shadow-3d border border-line p-5 group">
              <summary className="cursor-pointer font-bold text-primary flex justify-between">
                Hafta sonu ve gece çağırabilir miyim?
                <span className="text-accent group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-ink/80">
                Evet. 7 gün 24 saat hizmet veriyoruz. Hafta sonu, tatil günleri ve gece için özel bir ücret farkı uygulamıyoruz.
                Aynı sabit saat ücreti geçerlidir.
              </p>
            </details>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl mb-4">Komşu İlçeler</h2>
          <div className="flex flex-wrap gap-2">
            {i.neighbors.map((n) => {
              const neighbor = getIlce(n);
              if (!neighbor) return null;
              return (
                <Link
                  key={n}
                  href={`/${neighbor.slug}`}
                  className="shadow-3d border border-line px-4 py-2 text-sm hover:border-accent hover:text-accent"
                >
                  {neighbor.name} Elektrikçi
                </Link>
              );
            })}
          </div>
        </section>

        <div className="shadow-3d mt-12 bg-accent text-white p-8 text-center">
          <p className="mb-3 text-lg">{i.name} için acil elektrik servisi</p>
          <a href={`tel:${site.phoneTel}`} className="btn-phone-lg">
            📞 {site.phone}
          </a>
        </div>
      </article>
    </>
  );
}
