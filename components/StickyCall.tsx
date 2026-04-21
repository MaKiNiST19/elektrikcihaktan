import { site } from "@/lib/site";

export function StickyCall() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden flex shadow-2xl">
      <a
        href={`tel:${site.phoneTel}`}
        className="flex-1 bg-accent text-white text-center py-3 font-bold"
        aria-label="Telefonla ara"
      >
        📞 HEMEN ARA
      </a>
      <a
        href={`https://wa.me/${site.whatsapp}`}
        target="_blank"
        rel="noopener"
        className="flex-1 bg-green-600 text-white text-center py-3 font-bold"
        aria-label="WhatsApp ile yaz"
      >
        💬 WHATSAPP
      </a>
    </div>
  );
}
