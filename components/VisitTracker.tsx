"use client";

import { useEffect } from "react";

function hashString(s: string): string {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h).toString(36).padStart(8, "0");
}

export function VisitTracker() {
  useEffect(() => {
    const fp = hashString(
      navigator.userAgent +
        "|" +
        navigator.language +
        "|" +
        screen.width +
        "x" +
        screen.height +
        "|" +
        (Intl.DateTimeFormat().resolvedOptions().timeZone ?? ""),
    );
    const url = new URL(window.location.href);
    const gclid = url.searchParams.get("gclid") ?? "";
    const isAds =
      Boolean(gclid) ||
      /googleads|googleadservices|doubleclick/i.test(document.referrer);
    const startTime = Date.now();

    const send = (opts: { clickedCall?: boolean; clickedWhatsapp?: boolean } = {}) => {
      const payload = {
        fp,
        isAds,
        gclid,
        referrer: document.referrer,
        path: window.location.pathname,
        duration: Math.round((Date.now() - startTime) / 1000),
        clickedCall: opts.clickedCall ?? false,
        clickedWhatsapp: opts.clickedWhatsapp ?? false,
      };
      const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
      if (navigator.sendBeacon) {
        navigator.sendBeacon("/api/track", blob);
      } else {
        fetch("/api/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true,
        }).catch(() => {});
      }
    };

    send();

    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest("a");
      if (!target) return;
      const href = target.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) send({ clickedCall: true });
      else if (/wa\.me|whatsapp/i.test(href)) send({ clickedWhatsapp: true });
    };

    const onHide = () => {
      if (document.visibilityState === "hidden") send();
    };

    document.addEventListener("click", onClick);
    document.addEventListener("visibilitychange", onHide);
    window.addEventListener("pagehide", () => send());

    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("visibilitychange", onHide);
    };
  }, []);

  return null;
}
