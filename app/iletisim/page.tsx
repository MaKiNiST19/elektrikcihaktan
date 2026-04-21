import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageEyebrow } from "@/components/PageEyebrow";

export const metadata: Metadata = {
  title: "İletişim — 7/24 Acil Elektrikçi Hattı",
  description: "İzmir'in tüm ilçelerinde 7/24 acil elektrikçi. Telefon, WhatsApp ve e-posta ile ulaşın.",
  alternates: { canonical: "/iletisim" },
};

export default function Page() {
  return (
    <section className="container-x py-16 max-w-3xl">
      <PageEyebrow />
      <h1 className="text-4xl mb-6">İletişim</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <a href={`tel:${site.phoneTel}`} className="shadow-3d block bg-primary text-white p-8 hover:bg-accent transition-colors">
          <p className="text-sm uppercase tracking-wider opacity-80">Telefon</p>
          <p className="text-3xl font-bold mt-2">{site.phone}</p>
          <p className="mt-3 text-sm opacity-80">7/24 açık, hafta sonu ek ücret yok</p>
        </a>
        <a
          href={`https://wa.me/${site.whatsapp}`}
          target="_blank"
          rel="noopener"
          className="block bg-green-600 text-white p-8 hover:bg-green-700 transition-colors"
        >
          <p className="text-sm uppercase tracking-wider opacity-80">WhatsApp</p>
          <p className="text-3xl font-bold mt-2">Yazmak için dokun</p>
          <p className="mt-3 text-sm opacity-80">Fotoğraf göndererek teklif alabilirsin</p>
        </a>
      </div>
      <div className="shadow-3d mt-8 p-6 bg-surface">
        <p><strong>Hizmet Bölgesi:</strong> {site.areaServed}</p>
        <p className="mt-2"><strong>Çalışma Saatleri:</strong> 7 gün 24 saat</p>
        <p className="mt-2"><strong>E-posta:</strong> {site.email}</p>
      </div>
    </section>
  );
}
