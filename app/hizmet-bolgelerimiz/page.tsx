import Link from "next/link";
import type { Metadata } from "next";
import { ilceler } from "@/data/ilceler";

export const metadata: Metadata = {
  title: "Hizmet Bölgelerimiz — İzmir'in Tüm İlçeleri",
  description: "Elektrikçi Haktan'ın İzmir'de hizmet verdiği ilçeler. Tüm merkez ilçelerde 7/24 servis, 15 dakikada yerinde.",
  alternates: { canonical: "/hizmet-bolgelerimiz" },
};

export default function Page() {
  return (
    <section className="container-x py-16">
      <h1 className="text-4xl mb-3">Hizmet Bölgelerimiz</h1>
      <p className="text-ink/80 mb-10 max-w-2xl">
        İzmir'in tüm ilçe ve mahallelerinde 7/24 elektrikçi hizmeti. Listeden
        ilçenize tıklayarak bölgeye özel detaylara ulaşabilirsiniz.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {ilceler.map((i) => (
          <Link
            key={i.slug}
            href={`/${i.slug}`}
            className="bg-surface p-5 hover:bg-primary hover:text-white transition-colors"
          >
            <h2 className="text-lg font-semibold">{i.name}</h2>
            <p className="text-xs opacity-70 mt-1">{i.responseTimeMinutes} dk varış</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
