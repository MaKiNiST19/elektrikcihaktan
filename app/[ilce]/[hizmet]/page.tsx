import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ilceler, getIlce } from "@/data/ilceler";
import { hizmetler, getHizmet } from "@/data/hizmetler";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { AuthorByline } from "@/components/Author";
import { PageEyebrow } from "@/components/PageEyebrow";

export function generateStaticParams() {
  return ilceler.flatMap((i) =>
    hizmetler.map((h) => ({ ilce: i.slug, hizmet: h.slug }))
  );
}

export async function generateMetadata(
  { params }: { params: Promise<{ ilce: string; hizmet: string }> }
): Promise<Metadata> {
  const { ilce, hizmet } = await params;
  const i = getIlce(ilce);
  const h = getHizmet(hizmet);
  if (!i || !h) return {};
  const title = `${i.name} ${h.shortTitle} | ${i.responseTimeMinutes} Dakikada Yerinizde | ${site.name}`;
  return {
    title,
    description: `${i.name}'da ${h.title.toLowerCase()} hizmeti. ${h.summary} ${i.responseTimeMinutes} dakikada yerinde müdahale, ücretsiz keşif, ${site.phone}.`,
    keywords: [...h.keywords.map((k) => `${i.name} ${k}`), `${i.name.toLowerCase()} elektrikçi`],
    alternates: { canonical: `/${i.slug}/${h.slug}` },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ ilce: string; hizmet: string }>;
}) {
  const { ilce, hizmet } = await params;
  const i = getIlce(ilce);
  const h = getHizmet(hizmet);
  if (!i || !h) notFound();

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${i.name} ${h.title}`,
      serviceType: h.title,
      provider: { "@id": `${site.url}#business` },
      areaServed: {
        "@type": "AdministrativeArea",
        name: i.name,
        containedInPlace: { "@type": "City", name: "İzmir" },
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "TRY",
        lowPrice: h.priceRange.split("-")[0].replace(/\D/g, ""),
        highPrice: h.priceRange.split("-")[1]?.replace(/\D/g, "") ?? "",
      },
      description: `${i.nameLocative} ${h.summary}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: h.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Anasayfa", item: site.url },
        { "@type": "ListItem", position: 2, name: `${i.name} Elektrikçi`, item: `${site.url}/${i.slug}` },
        { "@type": "ListItem", position: 3, name: `${i.name} ${h.shortTitle}`, item: `${site.url}/${i.slug}/${h.slug}` },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={schema} />
      <article className="container-x py-12 max-w-4xl">
        <nav aria-label="Breadcrumb" className="text-sm mb-4 text-ink/60">
          <Link href="/">Anasayfa</Link> ›{" "}
          <Link href={`/${i.slug}`}>{i.name} Elektrikçi</Link> ›{" "}
          <span>{h.shortTitle}</span>
        </nav>

        <PageEyebrow />n        <h1 className="text-4xl mb-4">
          {i.name} {h.title}
        </h1>
        <p className="text-lg text-ink/80 leading-relaxed">
          {i.nameLocative} {h.summary.charAt(0).toLowerCase() + h.summary.slice(1)}
        </p>

        <div className="shadow-3d bg-accent text-white p-6 my-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase opacity-90">Acil müdahale</p>
            <p className="text-2xl font-bold">
              {i.name}'da {i.responseTimeMinutes} dakikada yerinizde
            </p>
          </div>
          <a href={`tel:${site.phoneTel}`} className="btn-phone px-6 py-3 text-base">
            {site.phone}
          </a>
        </div>

        <div className="grid sm:grid-cols-4 gap-3 mb-8">
          <div className="shadow-3d bg-surface p-4">
            <p className="text-xs uppercase text-ink/60">Fiyat Aralığı</p>
            <p className="font-bold text-primary">{h.priceRange}</p>
          </div>
          <div className="shadow-3d bg-surface p-4">
            <p className="text-xs uppercase text-ink/60">Varış Süresi</p>
            <p className="font-bold text-primary">{i.responseTimeMinutes} dk</p>
          </div>
          <div className="shadow-3d bg-surface p-4">
            <p className="text-xs uppercase text-ink/60">İş Süresi</p>
            <p className="font-bold text-primary">~{h.durationMinutes} dk</p>
          </div>
          <div className="shadow-3d bg-surface p-4">
            <p className="text-xs uppercase text-ink/60">Garanti</p>
            <p className="font-bold text-primary text-sm">{h.warranty.split(",")[0]}</p>
          </div>
        </div>

        <AuthorByline />

        <section>
          <h2 className="text-2xl mb-3">{i.name}'da {h.shortTitle} — Yerel Bilgi</h2>
          <p className="text-ink/80 leading-relaxed">{i.localNote}</p>
          <p className="text-ink/80 leading-relaxed mt-4">{h.longDescription}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl mb-4">{i.name}'da Sık Karşılaştığımız Belirtiler</h2>
          <ul className="grid sm:grid-cols-2 gap-2 text-ink/80">
            {h.symptoms.map((s) => (
              <li key={s} className="shadow-3d flex gap-2 border border-line p-3 text-sm">
                <span className="text-accent font-bold">⚠</span>{s}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl mb-4">{h.shortTitle} Kapsamımız</h2>
          <ul className="list-disc pl-6 space-y-2 text-ink/80">
            {h.whatWeDo.map((b) => <li key={b}>{b}</li>)}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl mb-4">{i.name}'da Nasıl Çalışıyoruz</h2>
          <ol className="space-y-4">
            {h.processSteps.map((s, idx) => (
              <li key={s.step} className="flex gap-4">
                <span className="shadow-3d shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-primary">{s.step}</h3>
                  <p className="text-sm text-ink/80 mt-1">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl mb-4">Hangi Mahallelere Gidiyoruz?</h2>
          <p className="text-ink/80 mb-3">
            {i.name}'nın tüm mahallelerine {h.shortTitle.toLowerCase()} hizmeti
            veriyoruz. Ana servis bölgelerimiz:
          </p>
          <div className="flex flex-wrap gap-2">
            {i.mahalleler.slice(0, 20).map((m) => (
              <span key={m} className="shadow-3d bg-surface px-3 py-1 text-sm">{m} Mh.</span>
            ))}
          </div>
        </section>

        {i.sampleJobs.length > 0 && (
          <section className="shadow-3d mt-10 bg-primary text-white p-6">
            <h2 className="text-white text-xl mb-3">{i.name}'da Gerçek İşler</h2>
            <ul className="space-y-2 text-sm text-white/90">
              {i.sampleJobs.map((j) => <li key={j}>✓ {j}</li>)}
            </ul>
          </section>
        )}

        <section className="mt-10">
          <h2 className="text-2xl mb-4">{h.shortTitle} Hakkında Sık Sorulanlar</h2>
          <div className="space-y-3">
            {h.faq.map((f) => (
              <details key={f.q} className="shadow-3d border border-line p-5">
                <summary className="cursor-pointer font-semibold text-primary">{f.q}</summary>
                <p className="mt-3 text-ink/80">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl mb-4">{i.name}'da Diğer Hizmetlerimiz</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {hizmetler.filter((x) => x.slug !== h.slug).slice(0, 6).map((x) => (
              <Link
                key={x.slug}
                href={`/${i.slug}/${x.slug}`}
                className="shadow-3d border border-line p-4 hover:border-accent"
              >
                <h3 className="font-semibold text-primary">
                  {i.name} {x.shortTitle}
                </h3>
                <p className="text-sm text-ink/70 mt-1">{x.summary}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl mb-4">Komşu İlçelerde {h.shortTitle}</h2>
          <div className="flex flex-wrap gap-2">
            {i.neighbors.map((n) => {
              const neighbor = getIlce(n);
              if (!neighbor) return null;
              return (
                <Link
                  key={n}
                  href={`/${neighbor.slug}/${h.slug}`}
                  className="shadow-3d border border-line px-4 py-2 text-sm hover:border-accent hover:text-accent"
                >
                  {neighbor.name} {h.shortTitle}
                </Link>
              );
            })}
          </div>
        </section>
      </article>
    </>
  );
}
