import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { hizmetler, getHizmet } from "@/data/hizmetler";
import { ilceler } from "@/data/ilceler";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { AuthorByline } from "@/components/Author";
import { PageEyebrow } from "@/components/PageEyebrow";

export function generateStaticParams() {
  return hizmetler.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const h = getHizmet(slug);
  if (!h) return {};
  return {
    title: h.metaTitle,
    description: h.metaDescription,
    keywords: h.keywords,
    alternates: { canonical: `/hizmetler/${h.slug}` },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const h = getHizmet(slug);
  if (!h) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: h.title,
    serviceType: h.title,
    provider: { "@id": `${site.url}#business` },
    areaServed: { "@type": "City", name: "İzmir" },
    description: h.longDescription,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "TRY",
      lowPrice: h.priceRange.split("-")[0].replace(/\D/g, ""),
      highPrice: h.priceRange.split("-")[1]?.replace(/\D/g, "") ?? "",
      availability: "https://schema.org/InStock",
    },
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: h.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `${h.title} — Süreç`,
    totalTime: `PT${h.durationMinutes}M`,
    step: h.processSteps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.step,
      text: s.detail,
    })),
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Anasayfa", item: site.url },
      { "@type": "ListItem", position: 2, name: "Hizmetler", item: `${site.url}/hizmetler` },
      { "@type": "ListItem", position: 3, name: h.shortTitle, item: `${site.url}/hizmetler/${h.slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={[serviceSchema, faqSchema, howToSchema, breadcrumb]} />
      <article className="container-x py-12 max-w-4xl">
        <nav aria-label="Breadcrumb" className="text-sm mb-4 text-ink/60">
          <Link href="/">Anasayfa</Link> ›{" "}
          <Link href="/hizmetler">Hizmetler</Link> ›{" "}
          <span>{h.shortTitle}</span>
        </nav>

        <PageEyebrow />n        <h1 className="text-4xl mb-4">{h.title}</h1>
        <p className="text-lg text-ink/80 leading-relaxed">{h.summary}</p>

        <div className="grid sm:grid-cols-4 gap-3 my-8">
          <div className="shadow-3d bg-surface p-4">
            <p className="text-xs uppercase text-ink/60">Ortalama Fiyat</p>
            <p className="font-bold text-primary">~{h.priceRange}</p>
            <p className="text-[10px] text-ink/50 mt-1">İş kapsamına göre değişir</p>
          </div>
          <div className="shadow-3d bg-surface p-4">
            <p className="text-xs uppercase text-ink/60">Süre</p>
            <p className="font-bold text-primary">~{h.durationMinutes} dk</p>
          </div>
          <div className="shadow-3d bg-surface p-4">
            <p className="text-xs uppercase text-ink/60">Müsaitlik</p>
            <p className="font-bold text-primary">7/24</p>
          </div>
          <div className="shadow-3d bg-surface p-4">
            <p className="text-xs uppercase text-ink/60">Destek Süresi</p>
            <p className="font-bold text-primary text-sm">{h.warranty.split(",")[0]}</p>
          </div>
        </div>

        <AuthorByline />

        <section>
          <h2 className="text-2xl mb-3">Genel Bakış</h2>
          <p className="text-ink/80 leading-relaxed">{h.longDescription}</p>
        </section>

        <section className="mt-10 bg-accent/10 border-l-4 border-accent p-5">
          <h2 className="text-xl mb-2 text-primary">Acil Durumlar</h2>
          <p className="text-sm text-ink/80 mb-3">Aşağıdaki durumlarda beklemeden arayın — can ve mal güvenliği öncelikli:</p>
          <ul className="list-disc pl-6 space-y-1 text-ink/80">
            {h.whenUrgent.map((w) => <li key={w}>{w}</li>)}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl mb-4">Hangi Belirtilerde Çağırmalısınız?</h2>
          <ul className="grid sm:grid-cols-2 gap-2 text-ink/80">
            {h.symptoms.map((s) => (
              <li key={s} className="shadow-3d flex gap-2 border border-line p-3 text-sm">
                <span className="text-accent font-bold">⚠</span>{s}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl mb-4">Neler Yapıyoruz</h2>
          <ul className="list-disc pl-6 space-y-2 text-ink/80">
            {h.whatWeDo.map((b) => <li key={b}>{b}</li>)}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl mb-4">Nasıl Çalışıyoruz — Adım Adım</h2>
          <ol className="space-y-4">
            {h.processSteps.map((s, i) => (
              <li key={s.step} className="flex gap-4">
                <span className="shadow-3d shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-primary">{s.step}</h3>
                  <p className="text-sm text-ink/80 mt-1">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className="grid sm:grid-cols-2 gap-4 my-10">
          <div className="shadow-3d bg-surface p-5">
            <h3 className="font-semibold text-primary mb-2">Kullandığımız Malzemeler</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-ink/80">
              {h.materials.map((m) => <li key={m}>{m}</li>)}
            </ul>
          </div>
          <div className="shadow-3d bg-primary text-white p-5">
            <h3 className="font-semibold mb-2">İş Sonrası Destek</h3>
            <p className="text-sm">{h.warranty}</p>
            <p className="text-sm mt-3 opacity-90">Sözleşmeli süre boyunca ücretsiz yeniden müdahale.</p>
          </div>
        </div>

        <section className="mt-10">
          <h2 className="text-2xl mb-4">Sık Sorulan Sorular</h2>
          <div className="space-y-3">
            {h.faq.map((f) => (
              <details key={f.q} className="shadow-3d border border-line p-5">
                <summary className="cursor-pointer font-semibold text-primary">{f.q}</summary>
                <p className="mt-3 text-ink/80">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="shadow-3d mt-10 bg-accent text-white p-8 text-center">
          <p className="mb-3 text-lg">{h.shortTitle} için hemen randevu alın</p>
          <a href={`tel:${site.phoneTel}`} className="btn-phone-lg">
            📞 {site.phone}
          </a>
        </div>

        {h.relatedServices.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl mb-4">İlgili Hizmetler</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {h.relatedServices.map((rs) => {
                const r = getHizmet(rs);
                if (!r) return null;
                return (
                  <Link key={rs} href={`/hizmetler/${r.slug}`} className="shadow-3d border border-line p-4 hover:border-accent">
                    <h3 className="font-semibold text-primary">{r.shortTitle}</h3>
                    <p className="text-sm text-ink/70 mt-1">{r.summary}</p>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        <section className="mt-12">
          <h2 className="text-2xl mb-4">Bölgenizdeki {h.shortTitle}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {ilceler.map((i) => (
              <Link
                key={i.slug}
                href={`/${i.slug}/${h.slug}`}
                className="shadow-3d border border-line p-3 text-sm hover:border-accent hover:text-accent"
              >
                {i.name} {h.shortTitle}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
