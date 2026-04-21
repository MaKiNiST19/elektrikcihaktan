export function RatingBadge({
  rating,
  title,
  subtitle
}: {
  rating?: number
  title: string
  subtitle: string
}) {
  return (
    <div className="shadow-3d flex flex-col items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-white">
      {rating && (
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < rating ? "text-accent" : "text-white/30"}>
              ★
            </span>
          ))}
        </div>
      )}
      <p className="font-semibold text-center text-sm">{title}</p>
      <p className="text-xs text-white/80 text-center">{subtitle}</p>
    </div>
  );
}
