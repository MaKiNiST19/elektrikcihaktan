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
  const imageMap: Record<string, string> = {
    "elektrik-tesisat": "/elektrik-tesisati-cekme-yenileme-izmir.jpg",
    "klima-montaji": "/klima-elektrik-tesisati-tamiri-izmir.jpg",
    "kombi-montaji": "/kombi-elektrik-baglantisi-tamiri-izmir.jpg",
    default: "/7-24-elektrikci-izmir.jpg",
  };

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
              <h2 className="text-lg mb-2 group-hover:text-accent transition-colors">{h.title}</h2>
              <p className="text-sm text-ink/80">{h.summary}</p>
              <p className="text-xs text-ink/60 mt-3">
                <strong>Fiyat:</strong> {h.priceRange}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
