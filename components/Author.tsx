import { site } from "@/lib/site";

export function AuthorByline({ updated }: { updated?: string }) {
  const date = updated ?? new Date().toISOString().slice(0, 10);
  return (
    <aside className="border-t border-b border-line my-8 py-5 flex flex-col sm:flex-row gap-4 items-start">
      <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shrink-0">
        H
      </div>
      <div className="text-sm text-ink/80">
        <p>
          <strong className="text-primary">Usta Haktan</strong> tarafından hazırlandı · İzmir'de{" "}
          {new Date().getFullYear() - site.foundingYear} yıldır elektrik işleri yapan belgeli elektrik teknisyeni.
        </p>
        <p className="mt-1 text-xs text-ink/60">
          Son güncelleme: {date} · Doğrulama: sahada uygulanmış binlerce iş tecrübesi.
        </p>
      </div>
    </aside>
  );
}
