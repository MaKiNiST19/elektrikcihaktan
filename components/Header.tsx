import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { MobileMenu } from "@/components/MobileMenu";

const navLinks = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/hizmet-bolgelerimiz", label: "Servis Bölgeleri" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-line">
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
      <div className="container-x flex items-center justify-between py-2">
        <Link href="/" className="flex items-center gap-3" aria-label={site.name}>
          <Image
            src="/logo.png"
            alt={site.name}
            width={252}
            height={56}
            priority
            className="h-14 w-auto"
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
        <div className="flex items-center gap-3">
          <a href={`tel:${site.phoneTel}`} className="btn-accent hidden md:inline-flex">
            Tamirci Çağır
          </a>
          <MobileMenu links={navLinks} />
        </div>
      </div>
    </header>
  );
}
