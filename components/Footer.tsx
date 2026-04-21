import Link from "next/link";
import { site } from "@/lib/site";
import { hizmetler } from "@/data/hizmetler";
import { ilceler } from "@/data/ilceler";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary text-white/80 mt-16">
      <div className="container-x py-12 grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="text-white text-lg mb-3">{site.name}</h3>
          <p className="text-sm leading-relaxed">
            İzmir'in tüm ilçelerinde 7 gün 24 saat acil elektrikçi servisi. 20 yılı aşkın tecrübe.
          </p>
          <a
            href={`tel:${site.phoneTel}`}
            className="block mt-4 text-accent text-xl font-bold hover:text-white"
          >
            {site.phone}
          </a>
        </div>
        <div>
          <h4 className="text-white text-sm uppercase mb-3 tracking-wider">Hizmetler</h4>
          <ul className="space-y-2 text-sm">
            {hizmetler.slice(0, 8).map((h) => (
              <li key={h.slug}>
                <Link href={`/hizmetler/${h.slug}`} className="hover:text-accent">
                  {h.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white text-sm uppercase mb-3 tracking-wider">Bölgeler</h4>
          <ul className="space-y-2 text-sm">
            {ilceler.map((i) => (
              <li key={i.slug}>
                <Link href={`/${i.slug}`} className="hover:text-accent">
                  {i.name} Elektrikçi
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white text-sm uppercase mb-3 tracking-wider">Kurumsal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/hakkimizda" className="hover:text-accent">Hakkımızda</Link></li>
            <li><Link href="/iletisim" className="hover:text-accent">İletişim</Link></li>
            <li><Link href="/blog" className="hover:text-accent">Blog</Link></li>
            <li><Link href="/gizlilik-politikasi" className="hover:text-accent">Gizlilik Politikası</Link></li>
            <li><Link href="/kvkk" className="hover:text-accent">KVKK Aydınlatma Metni</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs">
          <p>© {year} {site.name}. Tüm Hakları Saklıdır.</p>
          <p>
            ACİL ELEKTRİKÇİ{" "}
            <a href={`tel:${site.phoneTel}`} className="text-accent font-semibold">
              {site.phone}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
