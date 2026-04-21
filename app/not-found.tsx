import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x py-24 text-center">
      <h1 className="text-5xl mb-3">404</h1>
      <p className="text-lg text-ink/80 mb-6">Aradığınız sayfa bulunamadı.</p>
      <Link href="/" className="btn-accent">Anasayfaya Dön</Link>
    </section>
  );
}
