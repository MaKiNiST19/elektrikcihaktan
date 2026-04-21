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
    <div className="shadow-3d flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-white">
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              viewBox="0 0 20 20"
              className={`w-4 h-4 ${i < rating ? "text-accent" : "text-white/30"}`}
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9 4.8 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
            </svg>
          ))}
        </div>
        <span className="text-xs font-bold mt-1">{rating}.0</span>
      </div>
      <div className="flex flex-col min-w-0">
        <p className="font-bold text-sm leading-tight">{title}</p>
        <p className="text-xs text-white/70 mt-0.5">{subtitle}</p>
      </div>
    </div>
  );
}
