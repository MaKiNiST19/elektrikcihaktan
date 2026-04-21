import Link from "next/link";
import type { Metadata } from "next";
import { hizmetler } from "@/data/hizmetler";
import { PageEyebrow } from "@/components/PageEyebrow";

export const metadata: Metadata = {
  title: "Hizmetlerimiz — Tüm Elektrik İşleri",
  description:
    "İzmir'de sunduğumuz tüm elektrik hizmetleri: acil tamir, tesisat, topraklama, pano yenileme, kombi-klima-avize montajı.",
  alternates: { canonical: "/hizmetler" },
};

export default function Page() {
  return (
    <section className="container-x py-16">
      <PageEyebrow />
      <h1 className="text-4xl mb-3">Hizmetlerimiz</h1>
      <p className="text-ink/80 mb-10 max-w-2xl">
        Konut ve iş yerleri için komple elektrik çözümleri. Hepsi belgeli ustalarımızla, faturalı ve garantili.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {hizmetler.map((h) => (
          <Link
            key={h.slug}
            href={`/hizmetler/${h.slug}`}
            className="shadow-3d group border border-line p-6 hover:border-accent transition-colors"
          >
            <h2 className="text-lg mb-2 group-hover:text-accent">{h.title}</h2>
            <p className="text-sm text-ink/80">{h.summary}</p>
            <p className="text-xs text-ink/60 mt-3">
              <strong>Fiyat:</strong> {h.priceRange}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
