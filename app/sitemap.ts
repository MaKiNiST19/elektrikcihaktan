import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { ilceler } from "@/data/ilceler";
import { hizmetler } from "@/data/hizmetler";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = ["", "/hakkimizda", "/hizmetler", "/hizmet-bolgelerimiz", "/iletisim", "/blog"];

  const ilcePages = ilceler.map((i) => ({
    url: `${site.url}/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const hizmetPages = hizmetler.map((h) => ({
    url: `${site.url}/hizmetler/${h.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const comboPages = ilceler.flatMap((i) =>
    hizmetler.map((h) => ({
      url: `${site.url}/${i.slug}/${h.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [
    ...staticPages.map((p) => ({
      url: `${site.url}${p}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: p === "" ? 1 : 0.7,
    })),
    ...ilcePages,
    ...hizmetPages,
    ...comboPages,
  ];
}
