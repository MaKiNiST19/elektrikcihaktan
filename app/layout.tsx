import type { Metadata, Viewport } from "next";
import { Montserrat, Dosis } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCall } from "@/components/StickyCall";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/GoogleTagManager";
import { ConsentBanner } from "@/components/ConsentBanner";
import { JsonLd, localBusinessSchema, organizationSchema, websiteSchema, personSchema } from "@/components/JsonLd";
import { VisitTracker } from "@/components/VisitTracker";

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
    images: [
      {
        url: "/elektrikci-hero.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} - ${site.heroTitle}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.heroTitle} | ${site.name}`,
    description: site.description,
    images: ["/elektrikci-hero.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.png",
  },
  manifest: "/manifest.json",
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
        <JsonLd data={[localBusinessSchema, organizationSchema, websiteSchema, personSchema]} />
      </head>
      <body className="min-h-screen flex flex-col">
        <GoogleTagManagerNoScript />
        <Header />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <StickyCall />
        <ConsentBanner />
        <VisitTracker />
      </body>
    </html>
  );
}
