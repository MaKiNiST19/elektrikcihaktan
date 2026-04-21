export function RatingBadge({
  rating = 5,
  title,
  subtitle,
}: {
  rating?: number;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-2 text-white">
      <svg
        viewBox="0 0 40 80"
        className="w-8 h-16 flex-shrink-0 text-white"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M38 6 C 28 10, 20 20, 18 32 C 24 30, 32 22, 38 14 Z" />
        <path d="M36 20 C 24 22, 16 32, 14 44 C 22 42, 30 34, 36 28 Z" />
        <path d="M34 34 C 22 36, 14 46, 12 58 C 20 56, 28 48, 34 42 Z" />
        <path d="M32 48 C 22 52, 16 60, 16 70 C 24 68, 30 60, 34 54 Z" />
        <path d="M30 62 C 24 66, 22 72, 24 78 C 30 74, 32 68, 32 64 Z" />
      </svg>

      <div className="flex flex-col items-center text-center px-1">
        <div className="flex gap-0.5 mb-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              viewBox="0 0 20 20"
              className={`w-3.5 h-3.5 ${i < rating ? "text-accent" : "text-white/30"}`}
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9 4.8 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
            </svg>
          ))}
        </div>
        <p className="font-bold text-sm leading-tight whitespace-nowrap">{title}</p>
        <p className="text-[11px] text-white/80 mt-0.5 whitespace-nowrap">{subtitle}</p>
      </div>

      <svg
        viewBox="0 0 40 80"
        className="w-8 h-16 flex-shrink-0 text-white -scale-x-100"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M38 6 C 28 10, 20 20, 18 32 C 24 30, 32 22, 38 14 Z" />
        <path d="M36 20 C 24 22, 16 32, 14 44 C 22 42, 30 34, 36 28 Z" />
        <path d="M34 34 C 22 36, 14 46, 12 58 C 20 56, 28 48, 34 42 Z" />
        <path d="M32 48 C 22 52, 16 60, 16 70 C 24 68, 30 60, 34 54 Z" />
        <path d="M30 62 C 24 66, 22 72, 24 78 C 30 74, 32 68, 32 64 Z" />
      </svg>
    </div>
  );
}
