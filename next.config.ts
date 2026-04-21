import type { NextConfig } from "next";

const ilceler = [
  "alsancak", "balcova", "bayrakli", "bornova", "bozyaka",
  "buca", "esrefpasa", "gaziemir", "goztepe", "guzelyali",
  "hatay", "karabaglar", "konak", "ucyol", "yesilyurt",
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    const ilceRedirects = ilceler.map((slug) => ({
      source: `/${slug}-elektrikci.html`,
      destination: `/${slug}-elektrikci`,
      permanent: true,
    }));
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/elektrikci-haktan.html", destination: "/hakkimizda", permanent: true },
      { source: "/neler-yapiyoruz.html", destination: "/hizmetler", permanent: true },
      { source: "/hizmet-bolgelerimiz.html", destination: "/hizmet-bolgelerimiz", permanent: true },
      { source: "/iletisim.html", destination: "/iletisim", permanent: true },
      { source: "/urunler.html", destination: "/hizmetler", permanent: true },
      { source: "/galeri.html", destination: "/galeri", permanent: true },
      ...ilceRedirects,
    ];
  },
};

export default nextConfig;
