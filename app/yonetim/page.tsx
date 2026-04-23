import { pool } from "@/lib/db";
import { isAuthed, login, logout } from "./actions";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type DeviceRow = {
  device_fp: string;
  ipler: string;
  region: string | null;
  city: string | null;
  district: string | null;
  isp: string | null;
  ads_tik: string;
  aramalar: string;
  wa_tiklari: string;
  ort_sure: string;
  ilk_ziyaret: Date;
  son_ziyaret: Date;
};

type CityRow = {
  city: string | null;
  district: string | null;
  ziyaret: string;
  ads_tik: string;
  aramalar: string;
  tekil_cihaz: string;
};

type SummaryRow = {
  toplam: string;
  ads: string;
  aramalar: string;
  izmir: string;
  izmir_ads: string;
};

type SuspiciousRow = {
  ip: string;
  device_fp: string;
  city: string | null;
  district: string | null;
  isp: string | null;
  ads_tik: string;
  aramalar: string;
  son_ziyaret: Date;
};

async function getData() {
  const [summary, devices, cities, suspicious] = await Promise.all([
    pool.query<SummaryRow>(`
      SELECT
        COUNT(*)::text AS toplam,
        COUNT(*) FILTER (WHERE is_ads)::text AS ads,
        COUNT(*) FILTER (WHERE clicked_call)::text AS aramalar,
        COUNT(*) FILTER (WHERE region ILIKE '%zmir%')::text AS izmir,
        COUNT(*) FILTER (WHERE region ILIKE '%zmir%' AND is_ads)::text AS izmir_ads
      FROM visit_logs
      WHERE created_at > NOW() - INTERVAL '30 days'
    `),
    pool.query<DeviceRow>(`
      SELECT
        device_fp,
        STRING_AGG(DISTINCT ip, ', ') AS ipler,
        MAX(region) AS region,
        MAX(city) AS city,
        MAX(district) AS district,
        MAX(isp) AS isp,
        SUM(CASE WHEN is_ads THEN 1 ELSE 0 END)::text AS ads_tik,
        SUM(CASE WHEN clicked_call THEN 1 ELSE 0 END)::text AS aramalar,
        SUM(CASE WHEN clicked_whatsapp THEN 1 ELSE 0 END)::text AS wa_tiklari,
        ROUND(AVG(duration_sec))::text AS ort_sure,
        MIN(created_at) AS ilk_ziyaret,
        MAX(created_at) AS son_ziyaret
      FROM visit_logs
      WHERE created_at > NOW() - INTERVAL '30 days' AND device_fp IS NOT NULL
      GROUP BY device_fp
      ORDER BY SUM(CASE WHEN is_ads THEN 1 ELSE 0 END) DESC, MAX(created_at) DESC
      LIMIT 100
    `),
    pool.query<CityRow>(`
      SELECT
        city,
        district,
        COUNT(*)::text AS ziyaret,
        SUM(CASE WHEN is_ads THEN 1 ELSE 0 END)::text AS ads_tik,
        SUM(CASE WHEN clicked_call THEN 1 ELSE 0 END)::text AS aramalar,
        COUNT(DISTINCT device_fp)::text AS tekil_cihaz
      FROM visit_logs
      WHERE created_at > NOW() - INTERVAL '30 days' AND city IS NOT NULL
      GROUP BY city, district
      ORDER BY SUM(CASE WHEN is_ads THEN 1 ELSE 0 END) DESC, COUNT(*) DESC
      LIMIT 50
    `),
    pool.query<SuspiciousRow>(`
      SELECT
        ip,
        device_fp,
        MAX(city) AS city,
        MAX(district) AS district,
        MAX(isp) AS isp,
        SUM(CASE WHEN is_ads THEN 1 ELSE 0 END)::text AS ads_tik,
        SUM(CASE WHEN clicked_call THEN 1 ELSE 0 END)::text AS aramalar,
        MAX(created_at) AS son_ziyaret
      FROM visit_logs
      WHERE created_at > NOW() - INTERVAL '7 days' AND ip IS NOT NULL
      GROUP BY ip, device_fp
      HAVING SUM(CASE WHEN is_ads THEN 1 ELSE 0 END) >= 2
         AND SUM(CASE WHEN clicked_call THEN 1 ELSE 0 END) = 0
      ORDER BY SUM(CASE WHEN is_ads THEN 1 ELSE 0 END) DESC
      LIMIT 50
    `),
  ]);

  return {
    summary: summary.rows[0],
    devices: devices.rows,
    cities: cities.rows,
    suspicious: suspicious.rows,
  };
}

function fmtDate(d: Date) {
  return new Date(d).toLocaleString("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function YonetimPage({
  searchParams,
}: {
  searchParams: Promise<{ e?: string }>;
}) {
  const authed = await isAuthed();
  const sp = await searchParams;

  if (!authed) {
    return (
      <div style={{ minHeight: "100vh", background: "#010409", color: "#fff", display: "grid", placeItems: "center", fontFamily: "Inter, system-ui, sans-serif" }}>
        <form action={login} style={{ background: "#0d1117", padding: 32, borderRadius: 12, border: "1px solid #30363d", minWidth: 320 }}>
          <h1 style={{ margin: "0 0 16px", fontSize: 20 }}>🔒 Yönetim Girişi</h1>
          <input
            type="password"
            name="password"
            placeholder="Şifre"
            autoFocus
            style={{ width: "100%", padding: 12, background: "#010409", border: "1px solid #30363d", color: "#fff", borderRadius: 6, marginBottom: 12 }}
          />
          {sp.e && <p style={{ color: "#f85149", fontSize: 13, margin: "0 0 12px" }}>Şifre hatalı.</p>}
          <button type="submit" style={{ width: "100%", padding: 12, background: "#ff6600", color: "#fff", border: 0, borderRadius: 6, cursor: "pointer", fontWeight: 600 }}>Giriş</button>
        </form>
      </div>
    );
  }

  let data;
  try {
    data = await getData();
  } catch (err) {
    return (
      <div style={{ minHeight: "100vh", background: "#010409", color: "#fff", padding: 40, fontFamily: "monospace" }}>
        <h1 style={{ color: "#f85149" }}>DB Hatası</h1>
        <pre style={{ background: "#0d1117", padding: 16, borderRadius: 8, border: "1px solid #30363d", whiteSpace: "pre-wrap", fontSize: 12 }}>
          {err instanceof Error ? err.message + "\n\n" + (err.stack ?? "") : String(err)}
        </pre>
        <form action={logout} style={{ marginTop: 16 }}>
          <button type="submit" style={{ background: "#21262d", color: "#e6edf3", border: "1px solid #30363d", padding: "8px 14px", borderRadius: 6 }}>Çıkış</button>
        </form>
      </div>
    );
  }
  const { summary, devices, cities, suspicious } = data;
  const izmirAdsOrani = Number(summary.ads) > 0 ? Math.round((Number(summary.izmir_ads) / Number(summary.ads)) * 100) : 0;

  return (
    <div style={{ background: "#010409", color: "#e6edf3", minHeight: "100vh", padding: 24, fontFamily: "Inter, system-ui, sans-serif" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <h1 style={{ margin: 0, fontSize: 24 }}>🕵️ Haktan Ziyaretçi İzleme · Son 30 gün</h1>
          <form action={logout}>
            <button type="submit" style={{ background: "#21262d", color: "#e6edf3", border: "1px solid #30363d", padding: "8px 14px", borderRadius: 6, cursor: "pointer" }}>Çıkış</button>
          </form>
        </div>

        {/* Özet kartları */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12, marginBottom: 28 }}>
          <Card label="Toplam Ziyaret" value={summary.toplam} />
          <Card label="Ads Tık" value={summary.ads} accent="#fbbf24" />
          <Card label="Arama Tık" value={summary.aramalar} accent="#56d364" />
          <Card label="İzmir Ziyaret" value={summary.izmir} accent="#1f6feb" />
          <Card label="İzmir / Ads" value={`%${izmirAdsOrani}`} accent="#1f6feb" hint={`${summary.izmir_ads} / ${summary.ads}`} />
        </div>

        {/* Şüpheli IP/cihaz */}
        <Section title={`⚠️ İzlenecekler · 7 günde 2+ ads tıkı, 0 arama (${suspicious.length})`} subtitle="Ban yok — sadece takip. Çoğu zaman masum mobil NAT olabilir.">
          <Table headers={["IP", "Cihaz ID", "Konum", "ISP", "Ads Tık", "Arama", "Son"]}>
            {suspicious.map((r) => (
              <tr key={r.ip + r.device_fp} style={{ borderBottom: "1px solid #30363d" }}>
                <td style={td}>{r.ip}</td>
                <td style={td}><code style={{ color: "#8b949e", fontSize: 11 }}>{r.device_fp?.slice(0, 10)}</code></td>
                <td style={td}>{r.city ?? "?"}{r.district ? ` / ${r.district}` : ""}</td>
                <td style={{ ...td, fontSize: 11, color: "#8b949e" }}>{r.isp ?? "-"}</td>
                <td style={{ ...td, color: "#fbbf24", fontWeight: 600 }}>★ {r.ads_tik}</td>
                <td style={td}>{Number(r.aramalar) > 0 ? <span style={{ color: "#56d364" }}>✅ {r.aramalar}</span> : <span style={{ color: "#8b949e" }}>❌</span>}</td>
                <td style={{ ...td, fontSize: 11 }}>{fmtDate(r.son_ziyaret)}</td>
              </tr>
            ))}
            {suspicious.length === 0 && <tr><td colSpan={7} style={{ ...td, textAlign: "center", color: "#8b949e" }}>Şüpheli aktivite yok 👍</td></tr>}
          </Table>
        </Section>

        {/* Şehir/ilçe dağılımı */}
        <Section title="🗺️ Şehir & İlçe Dağılımı">
          <Table headers={["Şehir / İlçe", "Ziyaret", "Tekil Cihaz", "Ads Tık", "Arama", "Dönüşüm %"]}>
            {cities.map((c, i) => {
              const isIzmir = (c.city ?? "").toLowerCase().includes("zmir") || (c.city ?? "").toLowerCase().includes("izmir");
              const donusum = Number(c.ads_tik) > 0 ? Math.round((Number(c.aramalar) / Number(c.ads_tik)) * 100) : 0;
              return (
                <tr key={i} style={{ borderBottom: "1px solid #30363d", background: isIzmir ? "rgba(31,111,235,0.07)" : undefined }}>
                  <td style={td}>
                    <span style={{ background: isIzmir ? "#1f6feb" : "#484f58", padding: "2px 8px", borderRadius: 4, fontSize: 12, fontWeight: 600 }}>
                      {c.city ?? "?"}
                    </span>
                    {c.district && <span style={{ marginLeft: 8, color: "#8b949e", fontSize: 12 }}>{c.district}</span>}
                  </td>
                  <td style={td}>{c.ziyaret}</td>
                  <td style={{ ...td, color: "#8b949e" }}>{c.tekil_cihaz}</td>
                  <td style={{ ...td, color: "#fbbf24", fontWeight: 600 }}>★ {c.ads_tik}</td>
                  <td style={{ ...td, color: "#56d364" }}>{c.aramalar}</td>
                  <td style={td}>{donusum > 0 ? <span style={{ color: donusum >= 20 ? "#56d364" : "#fbbf24" }}>%{donusum}</span> : <span style={{ color: "#8b949e" }}>—</span>}</td>
                </tr>
              );
            })}
          </Table>
        </Section>

        {/* Cihaz detayı */}
        <Section title={`📱 Cihaz Bazlı Detay (Top 100 — Ads tıkına göre)`}>
          <Table headers={["Konum / ISP", "IP'ler", "Cihaz ID", "Ads", "Arama", "WA", "Ort. Süre", "Son"]}>
            {devices.map((d) => {
              const isIzmir = (d.city ?? "").toLowerCase().includes("zmir") || (d.city ?? "").toLowerCase().includes("izmir");
              return (
                <tr key={d.device_fp} style={{ borderBottom: "1px solid #30363d", background: isIzmir ? "rgba(31,111,235,0.06)" : undefined }}>
                  <td style={td}>
                    <span style={{ background: isIzmir ? "#1f6feb" : "#484f58", padding: "2px 6px", borderRadius: 4, fontSize: 11, fontWeight: 600 }}>
                      {d.city ?? "?"}{d.district ? ` / ${d.district}` : ""}
                    </span>
                    <div style={{ color: "#8b949e", fontSize: 10, marginTop: 2 }}>{d.isp ?? "-"}</div>
                  </td>
                  <td style={{ ...td, fontSize: 11, maxWidth: 140, wordBreak: "break-all" }}>{d.ipler}</td>
                  <td style={td}><code style={{ color: "#8b949e", fontSize: 10 }}>{d.device_fp?.slice(0, 8)}</code></td>
                  <td style={{ ...td, color: "#fbbf24", fontWeight: 600 }}>★ {d.ads_tik}</td>
                  <td style={td}>{Number(d.aramalar) > 0 ? <span style={{ color: "#56d364" }}>✅ {d.aramalar}</span> : <span style={{ color: "#8b949e" }}>—</span>}</td>
                  <td style={td}>{Number(d.wa_tiklari) > 0 ? <span style={{ color: "#25d366" }}>💬 {d.wa_tiklari}</span> : <span style={{ color: "#8b949e" }}>—</span>}</td>
                  <td style={td}>{d.ort_sure} sn</td>
                  <td style={{ ...td, fontSize: 11 }}>{fmtDate(d.son_ziyaret)}</td>
                </tr>
              );
            })}
          </Table>
        </Section>
      </div>
    </div>
  );
}

const td: React.CSSProperties = { padding: "10px 12px", fontSize: 13, verticalAlign: "top" };

function Card({ label, value, accent, hint }: { label: string; value: string; accent?: string; hint?: string }) {
  return (
    <div style={{ background: "#0d1117", border: "1px solid #30363d", borderRadius: 10, padding: 16 }}>
      <div style={{ color: "#8b949e", fontSize: 12, marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: 24, fontWeight: 700, color: accent ?? "#fff" }}>{value}</div>
      {hint && <div style={{ color: "#8b949e", fontSize: 11, marginTop: 4 }}>{hint}</div>}
    </div>
  );
}

function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h2 style={{ fontSize: 16, margin: "0 0 4px" }}>{title}</h2>
      {subtitle && <p style={{ color: "#8b949e", fontSize: 12, margin: "0 0 10px" }}>{subtitle}</p>}
      <div style={{ background: "#0d1117", border: "1px solid #30363d", borderRadius: 10, overflow: "hidden" }}>{children}</div>
    </div>
  );
}

function Table({ headers, children }: { headers: string[]; children: React.ReactNode }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ background: "#161b22" }}>
          <tr>{headers.map((h) => <th key={h} style={{ textAlign: "left", padding: "10px 12px", fontSize: 12, color: "#8b949e", fontWeight: 600, borderBottom: "1px solid #30363d" }}>{h}</th>)}</tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
