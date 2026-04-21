import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Elektrik Rehberleri",
  description: "Elektrik arızaları, güvenlik, fatura tasarrufu ve montaj rehberleri. Usta gözünden pratik bilgiler.",
  alternates: { canonical: "/blog" },
};

export default function Page() {
  return (
    <section className="container-x py-16 max-w-3xl">
      <h1 className="text-4xl mb-4">Blog</h1>
      <p className="text-ink/80">
        Yakında: "Elektrik kaçağı nasıl bulunur", "Sigorta neden atar", "Kombi
        elektrik bağlantısı nasıl yapılır" gibi usta rehberleri.
      </p>
    </section>
  );
}
