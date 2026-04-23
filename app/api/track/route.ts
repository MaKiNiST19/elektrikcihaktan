import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "0.0.0.0";
}

type GeoData = {
  status: string;
  regionName?: string;
  city?: string;
  district?: string;
  isp?: string;
};

async function fetchGeo(ip: string): Promise<GeoData | null> {
  if (ip === "0.0.0.0" || ip.startsWith("127.") || ip.startsWith("::1")) return null;
  try {
    const r = await fetch(
      `http://ip-api.com/json/${ip}?fields=status,regionName,city,district,isp&lang=tr`,
      { signal: AbortSignal.timeout(3000) },
    );
    if (!r.ok) return null;
    return (await r.json()) as GeoData;
  } catch {
    return null;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const ua = req.headers.get("user-agent") ?? "";

    if (/bot|spider|crawl|preview|lighthouse|headless/i.test(ua)) {
      return NextResponse.json({ ok: true, skipped: "bot" });
    }

    const ip = getIp(req);
    const geo = await fetchGeo(ip);

    const region = geo?.status === "success" ? geo.regionName ?? null : null;
    const city = geo?.status === "success" ? geo.city ?? null : null;
    const district = geo?.status === "success" ? geo.district || null : null;
    const isp = geo?.status === "success" ? geo.isp ?? null : null;

    await pool.query(
      `INSERT INTO visit_logs
        (ip, device_fp, region, city, district, isp, is_ads, clicked_call, clicked_whatsapp, duration_sec, page_path, referrer, gclid, user_agent)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)`,
      [
        ip,
        String(body.fp ?? "").slice(0, 64),
        region,
        city,
        district,
        isp,
        Boolean(body.isAds),
        Boolean(body.clickedCall),
        Boolean(body.clickedWhatsapp),
        Number.isFinite(+body.duration) ? Math.min(+body.duration, 86400) : 0,
        String(body.path ?? "").slice(0, 255),
        String(body.referrer ?? "").slice(0, 500),
        String(body.gclid ?? "").slice(0, 255),
        ua.slice(0, 1000),
      ],
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("track error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
