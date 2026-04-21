"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

type NavLink = { href: string; label: string };

export function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <button
        aria-label="Menüyü aç"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="lg:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
      >
        <span className={`block h-0.5 w-6 bg-primary transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
        <span className={`block h-0.5 w-6 bg-primary transition-opacity ${open ? "opacity-0" : ""}`} />
        <span className={`block h-0.5 w-6 bg-primary transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl transform transition-transform lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobil menü"
      >
        <div className="flex items-center justify-between p-4 border-b border-line">
          <span className="font-bold text-primary uppercase">Menü</span>
          <button
            aria-label="Menüyü kapat"
            onClick={() => setOpen(false)}
            className="text-primary text-2xl leading-none w-8 h-8"
          >
            ×
          </button>
        </div>
        <ul className="flex flex-col p-4 gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 px-3 text-primary font-semibold uppercase text-sm hover:bg-surface hover:text-accent transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
