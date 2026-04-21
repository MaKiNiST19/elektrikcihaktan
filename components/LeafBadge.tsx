export function LeafBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="shadow-3d flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white font-semibold">
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 shrink-0"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20 6c-6 0-10 3-12 8-1-1-2-2-4-3 3 4 5 7 6 10 2-6 5-11 10-15z" />
      </svg>
      <span>{children}</span>
    </div>
  );
}
