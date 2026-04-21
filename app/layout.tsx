import type { Metadata, Viewport } from "next";
import { Montserrat, Dosis } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCall } from "@/components/StickyCall";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/GoogleTagManager";
import { ConsentBanner } from "@/components/ConsentBanner";
import { JsonLd, localBusinessSchema } from "@/components/JsonLd";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
  display: "swap",
});

const dosis = Dosis({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dosis",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.heroTitle} | ${site.name} - ${site.phone}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.founder }],
  generator: "Next.js",
  keywords: [
    "izmir elektrikçi",
    "7/24 acil elektrikçi",
    "izmir elektrik tamiri",
    "elektrikçi haktan",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: site.url,
    siteName: site.name,
    title: `${site.heroTitle} | ${site.name}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.heroTitle} | ${site.name}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {},
};

export const viewport: Viewport = {
  themeColor: "#1d2736",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${montserrat.variable} ${dosis.variable}`}>
      <head>
        <GoogleTagManager />
        <JsonLd data={localBusinessSchema} />
      </head>
      <body className="min-h-screen flex flex-col">
        <GoogleTagManagerNoScript />
        <Header />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <StickyCall />
        <ConsentBanner />
      </body>
    </html>
  );
}
