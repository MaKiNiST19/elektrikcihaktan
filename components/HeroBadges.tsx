"use client";

import { useEffect, useState } from "react";
import { LeafBadge } from "./LeafBadge";

const items = [
  "20 Yıllık Deneyim",
  "30 Dakikada Hizmet",
  "Belgeli İşçilik",
];

export function HeroBadges() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % items.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <ul className="hidden sm:flex gap-3 mt-8 flex-wrap">
        {items.map((t) => (
          <li key={t}>
            <LeafBadge>{t}</LeafBadge>
          </li>
        ))}
      </ul>

      <div className="sm:hidden mt-8 h-14 relative" aria-live="polite">
        {items.map((t, i) => (
          <div
            key={t}
            className={`absolute inset-0 flex items-center transition-opacity duration-700 ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
          >
            <LeafBadge>{t}</LeafBadge>
          </div>
        ))}
      </div>
    </>
  );
}
