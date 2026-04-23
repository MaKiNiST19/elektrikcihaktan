import { readFileSync } from "node:fs";
import { Client } from "pg";

const env = readFileSync(new URL("../.env.local", import.meta.url), "utf8");
const url = env.match(/^DATABASE_URL=(.+)$/m)?.[1]?.trim();
if (!url) throw new Error("DATABASE_URL not found in .env.local");

const client = new Client({ connectionString: url });
await client.connect();

await client.query(`
  CREATE TABLE IF NOT EXISTS visit_logs (
    id BIGSERIAL PRIMARY KEY,
    ip VARCHAR(45),
    device_fp VARCHAR(64),
    region VARCHAR(64),
    city VARCHAR(64),
    district VARCHAR(64),
    isp VARCHAR(128),
    is_ads BOOLEAN DEFAULT FALSE,
    clicked_call BOOLEAN DEFAULT FALSE,
    clicked_whatsapp BOOLEAN DEFAULT FALSE,
    duration_sec INT DEFAULT 0,
    page_path VARCHAR(255),
    referrer VARCHAR(500),
    gclid VARCHAR(255),
    user_agent TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
  );
  CREATE INDEX IF NOT EXISTS idx_visit_logs_ip_created ON visit_logs (ip, created_at DESC);
  CREATE INDEX IF NOT EXISTS idx_visit_logs_city_ads ON visit_logs (city, is_ads);
  CREATE INDEX IF NOT EXISTS idx_visit_logs_created ON visit_logs (created_at DESC);
  CREATE INDEX IF NOT EXISTS idx_visit_logs_device ON visit_logs (device_fp);
`);

console.log("✅ Schema ready");
await client.end();
