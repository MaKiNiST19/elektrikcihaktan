import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ilceler, getIlce } from "@/data/ilceler";
import { hizmetler } from "@/data/hizmetler";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { AuthorByline } from "@/components/Author";

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

        <h1 className="text-4xl mb-3">{i.name} Elektrikçi — 7/24 Acil Servis</h1>
        <p className="text-lg text-ink/80 leading-relaxed">{i.intro}</p>

        <div className="grid sm:grid-cols-4 gap-3 my-8">
          <div className="bg-surface p-4">
            <p className="text-xs uppercase text-ink/60">Varış Süresi</p>
            <p className="font-bold text-primary">{i.responseTimeMinutes} dakika</p>
          </div>
          <div className="bg-surface p-4">
            <p className="text-xs uppercase text-ink/60">Hizmet Saatleri</p>
            <p className="font-bold text-primary">7 gün 24 saat</p>
          </div>
          <div className="bg-surface p-4">
            <p className="text-xs uppercase text-ink/60">Keşif</p>
            <p className="font-bold text-primary">Ücretsiz</p>
          </div>
          <div className="bg-surface p-4">
            <p className="text-xs uppercase text-ink/60">Tecrübe</p>
            <p className="font-bold text-primary">{new Date().getFullYear() - site.foundingYear}+ yıl</p>
          </div>
        </div>

        <div className="bg-primary text-white p-8 my-8">
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
                className="border border-line p-4 hover:border-accent"
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
          <section className="mt-12 bg-surface p-6">
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
              <span key={m} className="bg-surface px-3 py-1 text-sm">{m} Mh.</span>
            ))}
          </div>
        </section>

        {i.landmarks.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl mb-4">Çevredeki Önemli Yerler</h2>
            <div className="flex flex-wrap gap-2">
              {i.landmarks.map((l) => (
                <span key={l} className="bg-primary/10 text-primary px-3 py-1 text-sm">
                  📍 {l}
                </span>
              ))}
            </div>
          </section>
        )}

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
                  className="border border-line px-4 py-2 text-sm hover:border-accent hover:text-accent"
                >
                  {neighbor.name} Elektrikçi
                </Link>
              );
            })}
          </div>
        </section>

        <div className="mt-12 bg-accent text-white p-8 text-center">
          <p className="mb-3 text-lg">{i.name} için acil elektrik servisi</p>
          <a href={`tel:${site.phoneTel}`} className="inline-block bg-white text-accent font-bold text-2xl px-8 py-4 hover:bg-primary hover:text-white transition-colors">
            📞 {site.phone}
          </a>
        </div>
      </article>
    </>
  );
}
