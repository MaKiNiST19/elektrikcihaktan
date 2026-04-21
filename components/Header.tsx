import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Haktan" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/hizmet-bolgelerimiz", label: "Servis Bölgeleri" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

export function Header() {
  return (
    <header className="border-b border-line">
      <div className="bg-primary text-white text-sm">
        <div className="container-x py-2 flex items-center justify-between">
          <span className="hidden md:inline text-white/80">
            ÜCRETSİZ 7/24 Acil Elektrikçi Hattı
          </span>
          <a
            href={`tel:${site.phoneTel}`}
            className="text-accent font-semibold hover:text-white transition-colors"
          >
            ACİL ELEKTRİKÇİ {site.phone}
          </a>
        </div>
      </div>
      <div className="container-x flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3" aria-label={site.name}>
          <Image
            src="/logo.png"
            alt={site.name}
            width={180}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>
        <nav aria-label="Ana menü" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-sm font-semibold uppercase tracking-wide">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-primary hover:text-accent transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a href={`tel:${site.phoneTel}`} className="btn-accent hidden md:inline-flex">
          Tamirci Çağır
        </a>
      </div>
      <nav aria-label="Mobil menü" className="lg:hidden border-t border-line">
        <ul className="container-x flex items-center gap-4 overflow-x-auto py-2 text-xs font-semibold uppercase">
          {navLinks.map((l) => (
            <li key={l.href} className="whitespace-nowrap">
              <Link href={l.href} className="text-primary hover:text-accent">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
