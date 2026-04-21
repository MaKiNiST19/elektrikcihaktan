import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda — Elektrikçi Haktan",
  description:
    "20 yılı aşkın tecrübeyle İzmir'de hizmet veren Elektrikçi Haktan'ın hikayesi, ekibi ve çalışma prensipleri.",
  alternates: { canonical: "/hakkimizda" },
};

export default function Page() {
  return (
    <article className="container-x py-16 max-w-3xl prose-like">
      <h1 className="text-4xl mb-4">Hakkımızda</h1>
      <p className="text-lg text-ink/80 leading-relaxed">
        2005'ten bu yana İzmir'in dört bir yanında elektrik tamiratı, tesisat ve
        montaj hizmeti veriyoruz. Ustabaşı Haktan önderliğinde, yalnızca lisanslı
        elektrik teknisyenleriyle çalışıyoruz.
      </p>
      <h2 className="text-2xl mt-10 mb-3">Neden Biz?</h2>
      <ul className="list-disc pl-6 space-y-2 text-ink/80">
        <li>7 gün 24 saat, hafta sonu ve gece dahil aynı ücret.</li>
        <li>Arıza tespiti ücretsiz, sabit saat ücreti, sürpriz fiyat yok.</li>
        <li>Tüm işlerde fatura ve işçilik garantisi.</li>
        <li>Yolda canlı konum paylaşımı, ortalama 15 dakika varış.</li>
      </ul>
      <div className="mt-10 p-6 bg-surface">
        <p className="text-lg">
          Acil durumda hemen arayın:{" "}
          <a href={`tel:${site.phoneTel}`} className="text-accent font-bold text-2xl">
            {site.phone}
          </a>
        </p>
      </div>
    </article>
  );
}
