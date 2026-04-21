"use client";

import { useEffect, useState } from "react";

const items = [
  "20 Yıllık Deneyim",
  "30 Dakikada Hizmet",
  "Garantili İşçilik",
];

function LeafCheck() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0" fill="none" aria-hidden="true">
      <path
        d="M20 6c-6 0-10 3-12 8-1-1-2-2-4-3 3 4 5 7 6 10 2-6 5-11 10-15z"
        fill="#ffffff"
      />
    </svg>
  );
}

export function HeroBadges() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % items.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <ul className="hidden sm:grid grid-cols-3 gap-4 mt-8">
        {items.map((t) => (
          <li key={t} className="flex items-center gap-2 text-white font-medium">
            <LeafCheck />
            <span>{t}</span>
          </li>
        ))}
      </ul>

      <div className="sm:hidden mt-8 h-8 relative" aria-live="polite">
        {items.map((t, i) => (
          <div
            key={t}
            className={`absolute inset-0 flex items-center gap-2 text-white font-medium transition-opacity duration-700 ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
          >
            <LeafCheck />
            <span>{t}</span>
          </div>
        ))}
      </div>
    </>
  );
}
